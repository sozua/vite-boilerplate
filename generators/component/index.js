/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const fs = require('fs');
const process = require('node:process');

const modulesDir = path.join(process.cwd(), 'src/modules');
const modules = fs.readdirSync(modulesDir);

module.exports = {
    description: 'Component Generator',
    prompts: [
        {
            type: 'input',
            name: 'name',
            message: 'component name',
        },
        {
            type: 'list',
            name: 'module',
            message: 'Which module does this component belong to?',
            choices: ['ROOT', ...modules],
            when: () => modules.length > 0,
        },
    ],
    actions: (answers) => {
        const componentGeneratePath =
            !answers.module || answers.module === 'ROOT'
                ? 'src/components/'
                : 'src/modules/{{module}}/components';
        return [
            {
                type: 'add',
                path: componentGeneratePath + '/{{properCase name}}/index.ts',
                templateFile: 'generators/component/index.ts.hbs',
            },
            {
                type: 'add',
                path: componentGeneratePath + '/{{properCase name}}/{{properCase name}}.tsx',
                templateFile: 'generators/component/Component.tsx.hbs',
            },
        ];
    },
};