Esse é um projeto Vite + React + Typescript

  

## Rodando pela primeira vez 

Primeiramente instale todas as dependencias com.  

```bash
npm  install
# or
yarn  install
```

Depois para rodar o projeto basta usar os comandos abaixo:
```bash
npm  run  dev
# or
yarn  dev
```


  

O projeto ficará disponivel por padrão em[http://localhost:5173/](http://localhost:5173/).



  

## Sobre o projeto

  O projeto foi desenvolvido para um teste, visando a vaga de Desenvolvedor React na [Pontua Web](https://pontua.com.br/) e se trata sobre um projeto com chamadas a API da Marvel.


**As técnologias utilizadas no projeto foram:**
- Vite
- React
- Typescript
- React Router Dom
- ESLint
- FontSource
- Axios
- Fake JSON DB
- SASS (SCSS)
- Bootstrap (Only CSS)
- Zod
- React Hook Form
- Radix-ui

 
## Contas para acesso:

**User type Admin**

    Email: teste@teste.com
    Senha: 12345678

**User type User**

    Email: maria@example.com
    Senha: 5SiNS73b%$x*

## Fake Database
Foi criado um fake database com json, localizado em `/src/fake_db.json` o arquivo contem informações de usuários e menus.

## Icones
Todos os icones foram importados como SVG e utilizados como SVG dentro do código, assim caso necessario há a possibilidade de alterar cor, tamanho, espessura e etc pelo css ou até mesmo por parametros, mas para ajustar por parametros seria necessario fazer alguns ajustes. Todas as alterações foram feitas por scss.

## Geradores de Poderes, Especies, Autores e Times
Infelizmente a Api da Marvel não fornece informações sobre os seus herois, somente nome e as vezes descrições, por isso para seguir o figma foi criado um gerador com alguns nomes para Poderes, Espécies e Autores.

- O gerador de Autores foi feito utilizando a lib FakerJs
- O gerador de Poderes, Espécies e Times, foi feito criando um array com varios nomes, e uma função que pega aleatoriamente dentro do array, a quantidade desejada.
  
## Mudanças no layout

- Algumas palavras no sistema foram alteradas para português para uma melhor experiencia, isso porque no figma, existiam palavras em português e outras em inglês misturadas.
Exemplos:
    

     Home -> Início
        Teams -> Times
        Powers -> Poderes
        Species -> Espécies
        Authors -> Autores

- Algumas partes do layout foram alteradas para fazer os opcionais, a mudança mais significativa foi no template de navegação autenticado, onde possui a opção de estender e retrair o menu, assim deixando o menu responsivo para o mobile.

  
## Possíveis melhorias

- Fazia parte dos meus planos criar testes usando Vitest + Testing Library, porem tive contratempos pessoais e não estarei conseguindo fazer essa parte.
- Tambem seria possivel melhorar alguns componentes, deixando-os mais segmentados e de facil manutenção
 