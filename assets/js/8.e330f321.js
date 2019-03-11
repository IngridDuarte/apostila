(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{314:function(s,t,a){"use strict";a.r(t);var n=a(46),e=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"comecando-com-o-postgresql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#comecando-com-o-postgresql","aria-hidden":"true"}},[s._v("#")]),s._v(" Começando com o PostgreSQL")]),s._v(" "),a("p",[s._v("São um conjunto de arquivos relacionados entre si com registros sobre pessoas, lugares ou coisas, são coleções organizadas de dados. Sempre que for possível agrupar informações que se relacionam e tratam de um mesmo assunto, posso dizer que tenho um banco de dados.")]),s._v(" "),a("p",[s._v("Já um sistema de gerenciamento de banco de dados (SGBD) é um software que possui recursos capazes de manipular as informações do banco de dados e interagir com o usuário. Um exemplo de SGBD é:")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://lh4.googleusercontent.com/ZthMHOYo9r5QnYduoOBsdzGoUhQ69PieuabvgA27bd8lBuI4QMi2-uY66wWxxELL1kXti140zD0ZEmlVKmonMHc8fScH3QoqGfkefveKvwprj49otRV8OOr_RBfkXSPZ6E0CkVjJ",alt:"ImagemPostgreSQL"}}),s._v("É um Sistema Gerenciador de Bancos de dados Relacional estendido e de código aberto(SGBDR- o R é porque ele é relacional). Existem vários Modelos de Base de Dados, alguns exemplos são: Modelo em Rede, Modelo Hierárquico, Modelo Relacional,Orientado a Objetos.")]),s._v(" "),a("p",[s._v("Para criar a base de dados o SGBD utiliza uma linguagem. A mais utilizada atualmente é o SQL, (Structured Query Language). Para armazenar um dado em um banco de dados, é necessário criar tabelas e dentro delas são criadas colunas, onde as informações são armazenadas.")]),s._v(" "),a("p",[a("strong",[s._v("sudo apt-get udpdate")]),s._v(" - Geralmente quando vamos instalar algum programa via terminal, precisamos digitar sudo apt-get update.")]),s._v(" "),a("p",[a("strong",[s._v("sudo apt-get install postgresql postgresql-contrib")]),s._v(" - Esse comando instala o pacote Postgres junto com um -contribpacote que adicione alguns utilitários e funcionalidades adicionais.")]),s._v(" "),a("p",[a("strong",[s._v("sudo -i -u postgres")]),s._v(" - Alternando para a conta postgres.")]),s._v(" "),a("p",[a("strong",[s._v("Comandos SQL(utilizando PostgreSQL)")])]),s._v(" "),a("p",[a("strong",[s._v("psql")]),s._v(" - Acessando um prompt do Postgres")]),s._v(" "),a("p",[s._v("Isso fará você entrar no prompt do PostgreSQL e, a partir daqui, você estará livre para interagir com o sistema de gerenciamento de banco de dados imediatamente.")]),s._v(" "),a("p",[a("strong",[s._v("\\q")]),s._v(" - Saia do prompt do PostgreSQL digitando esse comando.")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" pessoa "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\nid "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("serial")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("primary")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\nnome "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("255")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("O comando CREATE TABLE cria uma tabela, pessoa é um exemplo de nome para sua tabela e dentro dos () vai as suas colunas, como exemplos temos id e nome.")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" pessoa "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("”Ingrid”"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("O comando INSERT INTO TABLE insere na tabela pessoa respectivamente os seguintes valores: id=1 e nome=Ingrid.")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("  pessoa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("Seleciona toda a tabela pessoa.")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" pessoa "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" nome "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ‘Brenda’ "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("Atualiza o nome do cliente para Brenda se o Id for igual a 1")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DELETE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" pessoa "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("Exclui as linhas onde o id é igual a 1 na tabela especificada. Se o id não for especificado, o efeito é excluir todas as linhas da tabela.")]),s._v(" "),a("h2",{attrs:{id:"exercicios-de-fixacao"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exercicios-de-fixacao","aria-hidden":"true"}},[s._v("#")]),s._v(" EXERCÍCIOS DE FIXAÇÃO")]),s._v(" "),a("p",[a("strong",[s._v("Baixe o postgreSQL")])]),s._v(" "),a("p",[s._v("Comandos para Linux:")]),s._v(" "),a("p",[s._v("sudo apt-get update")]),s._v(" "),a("p",[s._v("sudo apt-get install postgresql postgresql-contrib")]),s._v(" "),a("p",[s._v("sudo -i -u postgres")]),s._v(" "),a("p",[s._v("psql")]),s._v(" "),a("p",[s._v("\\q")]),s._v(" "),a("p",[a("strong",[s._v("FERRAMENTAS ADICIONAIS")])]),s._v(" "),a("p",[a("em",[s._v("PGADMIN 3")])]),s._v(" "),a("p",[s._v("Para uma interface gráfica de usuário do PostgreSQL, use o seguinte comando:")]),s._v(" "),a("p",[a("strong",[s._v("sudo apt-get install pgadmin3")])]),s._v(" "),a("p",[a("strong",[s._v("sudo su postgres -c psql postgres")])]),s._v(" "),a("p",[a("strong",[s._v("ALTER USER postgres WITH PASSWORD 'postgres';")])]),s._v(" "),a("h3",{attrs:{id:"execute-os-seguintes-comandos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#execute-os-seguintes-comandos","aria-hidden":"true"}},[s._v("#")]),s._v(" Execute os seguintes comandos")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" cliente"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id_cliente "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTEGER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" nome_cliente "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VARCHAR")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("255")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CONSTRAINT")]),s._v(" pk_id_cliente "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIMARY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id_cliente"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" pedido"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id_pedido "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTEGER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" total "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("REAL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" cliente_id_cliente  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTEGER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOREIGN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cliente_id_cliente"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("REFERENCES")]),s._v(" cliente"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id_cliente"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" cliente "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id_cliente"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("nome_cliente"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2334")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Joao da silva'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" cliente "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id_cliente"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("nome_cliente"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3456")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Ana Maria Braga'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" cliente "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id_cliente"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("nome_cliente"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8275")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Joana Barcelos Veiga'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" cliente "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id_cliente"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("nome_cliente"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9812")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Carlos Schallenberger'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" pedido"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id_pedido"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("total"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("cliente_id_cliente"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("752")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100.23")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2334")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" pedido"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id_pedido"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("total"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("cliente_id_cliente"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("334")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1456.00")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2334")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" pedido"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id_pedido"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("total"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("cliente_id_cliente"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("498")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("278.98")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9812")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" pedido"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id_pedido"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("total"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("cliente_id_cliente"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("125")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("874.98")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9812")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" pedido"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id_pedido"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("total"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("cliente_id_cliente"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("365")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("286.30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9812")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" pedido"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id_pedido"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("total"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("cliente_id_cliente"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("775")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("134.54")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9812")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" pedido"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id_pedido"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("total"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("cliente_id_cliente"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("834")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("187.34")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3456")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" pedido"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id_pedido"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("total"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("cliente_id_cliente"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("998")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("234.34")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8275")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" pedido"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id_pedido"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("total"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("cliente_id_cliente"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("101")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("456.87")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8275")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" cliente"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" pedido"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" cliente "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" nome_cliente "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Ronaldo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" cliente"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DELETE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" cliente "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" id_cliente "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8275")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])])},[],!1,null,null,null);t.default=e.exports}}]);