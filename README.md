# ⚙ Comandos úteis

- `pnpm generate:component NOME` - Cria um novo component

# 🗂 Estrutura de pastas

O coração do projeto está dentro da pasta `src`, que vai ter a seguinte estrutura:

```sh
src
├── assets              # Arquivos de estilização, imagens, etc
├── components          # Componentes compartilhados
├── config              # Configuração da aplicação
├── * modules           # Módulos da aplicação (ler abaixo)
├── hooks               # Hooks compartilhados
├── routes              # Configuração de rotas
├── store               # Gestão de estados globais (Redux, recoil, etc)
├── types               # Tipos comuns entre a aplicação
└── utils               # Funções utilitárias comuns
```

É importante deixar claro que este boilerplate é influenciado pela [arquitetura criada pelo @alan2207](https://github.com/alan2207/bulletproof-react/), e portanto, tem algumas partes muito semelhantes ao seu projeto. Uma dessas partes é a pasta **modules** (análogo a pasta features de seu projeto), que tem a função de lidar com todas as responsabilidades de algum domínio específico. Importante deixar claro que um módulo pode conter outros módulos dentro de si, desde que este módulo seja interessante somente para o módulo-pai. Segue um exemplo de estrutura de pastas de um módulo.

```sh
alguma-module/
├── assets/             # Arquivos de estilização, fontes, imagens, etc
├── data/               # Lidar com requisições a algum provedor de dados (API, dados locais, etc)
├── modules/            # Módulos internos
├── hooks/              # Hooks compartilhados por essa module
├── routes/             # Configuração de rotas dessa module
├── store/              # Estados globais dessa module
├── types/              # Tipos comuns dessa module
├── utils/              # Funções utilitárias comuns deste module
└── index.ts            # Arquivo inicial dessa module, é responsável por exportar todos os arquivos que devem ser acessados fora dela.
```
