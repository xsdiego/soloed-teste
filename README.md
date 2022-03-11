# Desafio SoloED - Wordpress

Neste desafio, vamos avaliar seus conhecimentos em HTML, CSS, Javascript e a construção de temas no Wordpress. Queremos que você desenvolva uma pequena Landing Page seguindos os padrões do nosso layout. Aproveite para nos mostrar todo o seu conhecimento em relação a construção de temas editáveis no Wordpress.

# Instruções

- Clone este projeto em seu ambiente
- Desenvolva a aplicação seguindo as instruções abaixo
- Ao finalizar o desafio, suba para um repositório em seu Github e responda o e-mail com o link.

## Frontend

Baseado no layout ([Figma](https://www.figma.com/file/U6mV5uN8OtSMaVZcWcQc9g/Teste_soloed?node-id=0%3A1)) sua tarefa é construir o frontend da nossa Landing Page seguindo os padrões de design (fontes, espaçamentos, cores e etc..).

#### User Stories

- [X] O usuário pode editar a imagem e os textos da primeira sessão.
- [X] O usuário pode editar o texto do "Sobre Nós"
- [X] O usuário pode adicionar, editar e excluir os "Serviços/Qualidades"
- [X] O usuário pode adicionar, editar e excluir os "Depoimentos"
- [X] O usuário pode adicionar e remover itens dos menu principal e do menu no rodapé
- [X] O usuário pode adicionar e remover os links das redes sociais
- [X] O usuário pode editar o telefone e o email do rodapé
- [X] O formulário de Newsletter deve gravar os emails informados com validação de formato e campo em branco.

#### Pré-requisitos

- Construir a aplicação utilizando as boas práticas na construção do tema.
- Comprometimento com o design da página

#### Diferenciais

- Demonstrar conhecimento em CSS e Javascript.

# SoloED_Landing Page

- Partindo do layout proposto, optei pela criação de um tema com a técnica "-child" a partir de um tema padrão do Wordpress, o TwentyTwenty. O tema foi modificado no CSS e em funções do PHP para atender a resolução do projeto.No arquivo function.php dentro de wp-content/themes/twentytwenty-child consta a chamada por hooks para o estilo do novo tema. Nessa mesma pasta, estão os arquivos de estilo (style.css) e template/modelo da Landing Page (landingpage.php). Confesso não gostar da ferramenta Gutenberg para edição de conteúdos no Wordpress e, por isso, fiz o uso do plugin "Classic Editor" para facilitar, inclusive, a edição pelo usuário. Vejo o novo editor como uma ferramenta confusa e com rodeios, especialmente para usuários mais leigos (experiência própria com clientes recentes). Tomei uma pequena liberdade em modificar alguns poucos pontos de layout para adaptar aos plugins utilizados, como Depoimentos e form de Newsletter. Além disso, utilizei o Bootstrap para organizar os conteúdos em colunas e para responsividade.

- Para acessar o painel administrativo (/wp-admin), utilizar o login "admin" e a senha "soloEd4321". 

- Todo o conteúdo foi criado utilizando o editor de páginas do próprio Wordpress, permitindo que o próprio usuário faça as devidas alterações de conteúdo, como troca de imagens e texto como bem desejar. A página em questão é a Landing Page, que já está como página inicial do projeto. 

- Para adicionar, editar e/ou excluir um item "Serviços/Qualidades", o usuário deve acessar o item Featured Content no menu esquerdo do painel administrativo. Lá, ele poderá ver todos os itens incluídos, excluí-los ou editá-los.  

- Para adicionar, editar e/ou excluir um item "Depoimentos", o usuário deve acessar o item AP Custom Testimonials no menu esquerdo do painel administrativo. Lá, ele poderá ver todos os itens incluídos, excluí-los ou editá-los.  

- Para adicionar, editar e/ou excluir um item do menu principal, o usuário deve acessar o item Aparência > Menus no menu esquerdo do painel administrativo. Lá, ele deve selecionar o menu "landing (Menu horizontal para desktop)" para realizar as devidas manipulações.

- Para adicionar, editar e/ou excluir um item das redes sociais, o usuário deve acessar o item Aparência > Menus no menu esquerdo do painel administrativo. Lá, ele deve selecionar o menu "Menu de links sociais (Menu Social)" para realizar as devidas manipulações. Aqui, o usuário deve apenas apresentar o link da rede e o nome e o tema já se encarrega de carregar o devido ícone.

- Para editar o conteúdo (telefone e e-mail) no rodapé da página, o usuário deve acessar o item Aparência > Widgets no menu esquerdo do painel administrativo. Lá, ele encontrará item de accordion "Rodapé 1" com o bloco de texto para editar o número e e-mail.

- O plugin utilizado para a newsletter foi o Noptin Newsletter. Ele encontra-se em Noptin Newsletter no menu esquerdo do painel administrativo. No sub-item 'E-mail subscribers', pode-se visualizar todos os inscritos. O formulário está com as devidas validações de campo.

- Ainda sobre o rodapé, modifiquei o HTML, CSS e Javascript do tema para atender a necessidade. Dentro da pasta twentytwenty-child, há a pasta template com o arquivo footer-menu-widgets-custom.php, uma customização das funções do tema pai para atender o carregamento de conteúdo do layout proposto. Além disso, o arquivo customizado footer-custom.php contém o HTML organizado da nível mais baixo do rodapé.  

- Por fim, é importante editar o arquivo wp-config.php para a sua configuração de banco de dados. O arquivo .sql nesse repositório contém todas as tabelas do site, devidamente preenchidas. O banco utilizado foi o MySQL 5.7.36, PHP 7.4.26 e Wordpress 5.9.1.