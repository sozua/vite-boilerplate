/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const fs = require('fs');
const process = require('node:process');

const featuresDir = path.join(process.cwd(), 'src/features');
const features = fs.readdirSync(featuresDir);

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
            name: 'feature',
            message: 'Which feature does this component belong to?',
            choices: ['ROOT', ...features],
            when: () => features.length > 0,
        },
    ],
    actions: (answers) => {
        const componentGeneratePath =
            !answers.feature || answers.feature === 'ROOT'
                ? 'src/components/'
                : 'src/features/{{feature}}/components';
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