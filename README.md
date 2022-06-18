# ⚙ Comandos úteis

- `pnpm generate:component NOME` - Cria um novo component

# 🗂 Estrutura de pastas

O coração do projeto está dentro da pasta `src`, que vai ter a seguinte estrutura:

```sh
src
├── assets              # Arquivos de estilização, imagens, etc
├── components          # Componentes compartilhados
├── config              # Configuração da aplicação
├── * features          # Módulos baseados em features
├── hooks               # Hooks compartilhados
├── routes              # Configuração de rotas
├── store               # Gestão de estados globais (Redux, recoil, etc)
├── types               # Tipos comuns entre a aplicação
└── utils               # Funções utilitárias comuns
```

É importante deixar claro que este boilerplate é influenciado pela [arquitetura criada pelo @alan2207](https://github.com/alan2207/bulletproof-react/), e portanto, tem algumas partes muito semelhantes ao seu projeto. Uma dessas partes é a pasta **features**, que tem a função de lidar com todas as responsabilidades de algum domínio específico (autenticação, por exemplo). Importante deixar claro que features podem conter outras features dentro de si, desde que toda lógica da feature filha seja interessante somente para a feature pai. Segue um exemplo de estrutura de pastas de uma feature.

```sh
alguma-feature/
├── assets/             # Arquivos de estilização, fontes, imagens, etc
├── data/               # Lidar com requisições a algum provedor de dados (API, dados locais, etc)
├── hooks/              # Hooks compartilhados por essa feature
├── routes/             # Configuração de rotas dessa feature
├── store/              # Estados globais dessa feature
├── types/              # Tipos comuns dessa feature
├── utils/              # Funções utilitárias comuns deste feature
└── index.ts            # Arquivo inicial dessa feature, é responsável por exportar todos os arquivos que devem ser acessados fora dela.
```
