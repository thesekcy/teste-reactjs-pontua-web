## Técnologias pretendidas:

- Vite
- React
- Typescript
- React Router Dom
- ESLint
- FontSource
- Vitest
- Cypress
- Axios
- JSON DB
- SASS (SCSS)
- Bootstrap (Only CSS)
- Zod
- React Hook Form
- Radix-ui



Passwords
12345678 = $2a$10$EW8WvH7isuIvV2hyPn1DIeM51cOpmiTolcnpC03hVjcS2AHGdP4DW
5SiNS73b%$x* = $2a$10$XEnpQMPctlfOwLBobG5aEu4eHGUGTCEO2f2ouIGkDVMX12rTPPfQy
@OPbMvo43Ic5 = $2a$10$n5J3hIq4XHL7A.Ro7QSl8OQFyqyMKomxiOvSx88.zYgfADHpMonL2
87@Z4WdmbI^J = $2a$10$xEmnntNm0cCSUeyu0R9eNOgBr6/umwdBUZK0uFtDV/hu47r.zcUk2


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
