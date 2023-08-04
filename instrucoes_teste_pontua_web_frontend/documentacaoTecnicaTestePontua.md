# *Teste Desenvolvimento Pontua Web*
> Esse é o teste para desenvolvedores na Pontua Web.<br>
> Sinta-se livre para editar a partir do título "Documentação da Aplicação".<br>
> Essa aplicação deve ser criada com base e utilização na api fornecida pela Marvel 
[https://developer.marvel.com/](https://developer.marvel.com/)<br>
---

> Qualquer dúvida poderá ser enviada por e-mail em tecnologia@pontua.com.br;<br>
> O prazo para finalização do teste deverá ser fornecido pelo RH;<br>
>***Não deixe de entregar sua aplicação*** mesmo que não esteja pronta ou perfeita;<br>
> A entrega do código deverá ser feita no GitHub e após o término, notificar o time atráves do e-mail tecnologia@pontua.com.br e gente@pontua.com.br.

---

>Link para layout no Figma: [layout]('https://www.figma.com/file/QFEzv3O4PWCzmvicy7e7sm/Teste-de-Desenvolvimento?node-id=0-1&t=D2fOR8TxhmRi52td-0')

---

## Página de Login

***Eu como usuário:***<br>
> Irei inserir o meu e-mail e senha de acesso para navegar para a tela de Agentes.

***Quando eu:***<br>
> Clicar no botão entrar, se sucesso deverá navegar para a próxima tela, caso ocorra erro, ver uma notificação;<br> 
> informando que o email ou senha está inválido.

### *Opcional*
> Quando eu clicar deverá redirecionar para a tela de esqueci minha senha.

### *Critérios de aceite*
>- Validação de e-mail e senha;
>- Navegar para próxima página;
>- Exibir mensagem de erro;
>- Ser o mais fiel possível ao layout do Figma.

---

## Página de seleção de Agente

***Eu como usuário:***<br>
> Irei selecionar o agente de minha escolha para acessar a página de perfil do agente.

***Quando eu:***<br>
> Clicar no campo de escolha deverá ser exibido uma lista com os nomes e foto do perfil de cada agente,
e ao clicar no botão entrar ser redirecionado para a tela de perfil do agente;

### *Critérios de aceite*
>- Se não houver agente selecionado mostrar o placeholder "Selecione um agente" conforme Figma;
>- Se já exitir um agente selecionado e eu clicar no campo de escolha, exibir a lista de agentes com uma flag no agente; 
>- já selecionado;
>- Ao clicar no botão entrar deverá navegar para a página de perfil do agente selecionado;
>- Ser o mais fiel possível ao layout do Figma.

---

## Página de Perfil de Agente

***Eu como usuário:***<br>
> Ao acessar a tela preciso ver a aba de visão geral com o descritivo sobre o agente, 
bem como seu nome e imagem;<br>
> Quero poder navegar nas abas de características, conforme layout do Figma;<br>
> Preciso visualizar o menu com as opções de acessar a Home, Perfil e sair do sistema.

***Quando eu:***<br>
> Clicar em uma das abas disponíveis daquele agente, preciso ver uma lista com as informações daquela aba.

### *Critérios de aceite*
>- Exibir as informações dos agentes;
>- As abas do perfil devem ser dinâmicas de acordo com cada agente;
>- Ao clicar nas abas mostrar as listagens com as informações relativas;
>- Exibir o menu lateral com link para Home, Perfil e Logout;
>- Ser o mais fiel possível ao layout do Figma;

---

## Página Home

***Eu como usuário:***<br>
> Desejo visualizar uma lista de cards com fotos de perfil e um resumo de personagens;<br>
> Quero poder navegar na lista pela paginação no final da página;<br>
> Quando eu clicar no campo de pesquisa e digitar o nome do agente, me mostre somente os personagens que contém aquele termo buscado.

***Quando eu:***<br>
> Clicar no card do personagem, deverei ser redirecionado para a página de perfil do personagem escolhido;<br>
> Fizer uma busca, o sistema deverá exibir na lista somente os personagens que contém aquele nome.<br>
> Clicar no botão "Próxima" deverá exibir os próximos cards da lista (próxima página);<br>
> Clicar no botão "Anterior" deverá exibir os cards anteriores da lista (página anterior);<br>
> Quando eu clicar no botão com número de páginação, exibir os cards relativos aquela página selecionada.<br>

### *Critérios de aceite*
>- Exibir resumo e foto de perfil;
>- Listagem mínima de 11 personagens
>- Exibição de no mínimo na primeira página
>- Exibição de no máximo 10 personagens por página;
>- Ao clicar em um card ser redirecionado à página de perfil do mesmo;
>- Ser o mais fiel possível ao layout do Figma;

---

># *Opcional* *
## Página Recuperação de Senha 

***Eu como usuário:***<br>
> Irei inserir o email que realizei o cadastro na plataforma no campo disponivel e, clicarei no botão enviar link.

***Quando eu:***<br>
> Clicar no botão de enviar link, deverá aparecer a mensagem de envio com sucesso.

### *Critérios de aceite*
>- Ser o mais fiel possível ao layout do Figma;

---

# Documentação da Aplicação

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
  Projeto disponivel em: https://teste-reactjs-pontua-fty091zwu-thesekcy.vercel.app/

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
 


---