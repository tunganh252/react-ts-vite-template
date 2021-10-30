<div align="center">

# Template Repo for `React + Typescript + Vite`

<p>

![React](https://img.shields.io/badge/-React%20^17.0.0-282c34?logo=react)
![Vite](https://img.shields.io/badge/-Vite%20^2.6.4-646cff?logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/-TypeScript%20^4.4.4-blue?logo=typescript&logoColor=white)

</p>

</div>

<div align="center">

## Introduction

</div>

This is a template repo for projects built with `react` and `typescript` on the basis of `vite`.

<div align="center">

## Features

</div>

- Support **`React Hooks`**.
- Build on **`Vite`**.
- **`Typescript`** in use.
- **Code checking and formatting** support.
- Basic components from **`antd`**
- **`GraphQL`** support.
- **`axios`** installed.
- **Route configuration and guarding** supported by [@syy11cn/config-router](https://github.com/syy11cn/config-router).
- **Git hooks** support.
- Use **`yarn`** for package management.

<div align="center">

## Usage

</div>

### Fork

Fork this repo to your account first.

### Rename

Rename the repo using the name of your project.

### Clone

Clone the repo to your local folder.

### Develop

```bash
cd <path-to-your-cloned-repo>
yarn
yarn dev
```

![image-20211030153313730](https://shaun.oss-cn-beijing.aliyuncs.com/typora/image-20211030153313730.png/watermark)

### More Scripts

For more `yarn` scripts, please refer to `package.json`

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "serve": "vite preview",
    "precommit": "lint-staged",
    "lint:less": "stylelint --fix \"src/**/*.less\" --syntax less",
    "lint-staged:js": "eslint --ext .js,.jsx,.ts,.tsx",
    "lint:js": "eslint --cache --ext .js,.jsx,.ts,.tsx ./src",
    "lint:fix": "eslint --fix --cache --ext .js,.jsx,.ts,.tsx",
    "lint:prettier": "prettier --check \"src/**/*\" --end-of-line auto",
    "prettier": "prettier -c --write \"src/**/*\""
  }
}
```

<div align="center">

## Packages

</div>

Here are the packages installed (in `package.json`).

```json
{
  "dependencies": {
    "react": "^17.0.0",
    "react-dom": "^17.0.0"
  },
  "devDependencies": {
    "@apollo/client": "^3.4.16",
    "@syy11cn/config-router": "^1.0.5",
    "@types/react": "^17.0.33",
    "@types/react-dom": "^17.0.10",
    "@types/react-router-dom": "^5.3.2",
    "@typescript-eslint/eslint-plugin": "^5.2.0",
    "@typescript-eslint/parser": "^5.2.0",
    "@vitejs/plugin-react": "^1.0.0",
    "antd": "^4.16.13",
    "axios": "^0.24.0",
    "eslint": "^7.10.0",
    "eslint-plugin-react": "^7.26.1",
    "eslint-plugin-react-hooks": "^4.2.0",
    "esprima": "^4.0.1",
    "graphql": "^15.0.0",
    "husky": "^7.0.4",
    "lint-staged": "^11.2.6",
    "prettier": "^2.4.1",
    "react-router-dom": "^5.3.0",
    "stylelint": "^14.0.1",
    "stylelint-config-standard": "^23.0.0",
    "typescript": "^4.4.4",
    "vite": "^2.6.4"
  }
}
```

- `react` for building user interfaces.
- `@apollo/client` for sending gql requests.
- `react-router-dom` and `@syy11cn/config-router` for route configuration and guarding.
- `typescript` and peer plugins for writing `.ts` or `.tsx` files in `react` project.
- `esprima` for parsing `typescript` grammar.
- `vite` for the base build tool.
- `eslint`, `stylelint`, `prettier` and `editorconfig` for code checking and formatting.
- `husky` and `lint-staged` for git hooks configuration.
- `antd` for basic components.

<div align="center">

## Folders

</div>

```shell
src
│  App.css
│  App.tsx
│  favicon.svg
│  index.css
│  logo.svg
│  main.tsx
│
├─apis
├─components
├─routes
│      index.ts
│
├─typings
│      images.ts
│
├─utils
└─views
        ErrorPage.tsx
```

<div align="center">

## Configuration

</div>

Modify the following config files.

- `.editorconfig`
- `.eslintrc`
- `.prettierrc`
- `.stylelintrc`
- `tsconfig.json`
- `vite.config.js`

<div align="center">

## About

</div>

### Chinese Introduction

[CLICK HERE](https://uestc.feishu.cn/docs/doccnFsR35nFeG2DGkG75b77Pld) to check the Chinese introduction doc to this repo on Lark.

### License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2021, Yiyang Sun
