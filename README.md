![PokeStore](https://catchpokestore.netlify.app/static/media/pokestore.919da953.png)

Esse é um projeto de uma loja de pokemons, a PokeStore.

## O que foi usado?

Esse projeto foi feito usando:

- [TypeScript](https://www.typescriptlang.org/)
- [ReactJS](https://pt-br.reactjs.org/)
- [PokeApi](https://pokeapi.co/)
- [Styled Components](https://styled-components.com/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)

E mais algumas coisinhas

## Instalando dependências

Primeiro, instale as dependências do projeto:

```bash
npm install
# or
yarn install
```

## Estrutura de arquivos

```sh
├── README.md
├── public # pasta com nossos assets
├── src
│   ├── App.tsx # arquivo principal da nossa SPA
│   ├── components
│   │   └──Example
│   │       ├── index.tsx
│   │       ├── styles.ts
│   ├── index.tsx # arquivo principal para o ReactDom.render
│   ├── pages # separamos nossas paginas aqui
│   │   └── Home.tsx
│   └── styles # aplicamos nossas estilos globais aqui
│       └── global.ts
│   ├── services # local onde é feita a requisição para a API
│   ├── hooks # local onde agrupamos  estados na aplicação
```

## Executando o projeto

Para executar o projeto, use os comandos:

```bash
npm start
# or
yarn start
```

Abra [http://localhost:3000](http://localhost:3000) com seu browser para ver o resultado.

## Deploy no Netlify

O deploy desse projeto foi feito usando o [Netlify](https://www.netlify.com/) para que sua demonstração pudesse ser feita sem que o projeto precise ser clonado.

Para conferir a demo, basta acessar o link da [PokeStore](https://catchpokestore.netlify.app)
