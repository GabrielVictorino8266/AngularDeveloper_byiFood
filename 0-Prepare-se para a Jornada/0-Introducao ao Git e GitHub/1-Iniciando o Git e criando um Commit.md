# Iniciando o Git e criando um Commit

Iremos criar um repositório do GIT pelo cli do BASH. Para isso, usaremos:

```bash
git init
Gabriel_Victorino@DESKTOP-A192CLP MINGW64 /c/Workspace/livros-receitas (master)
$ ls .git/
HEAD  config  description  hooks/  info/  objects/  refs/
```

`GIT INIT -> inicia um repositório git`

Acima também podemos ver os objetos abordados na aula de Objetos Internos. Além disso, iremos fazer a configuração do e-mail e nome de usuário, veja:

```sh
Gabriel_Victorino@DESKTOP-A192CLP MINGW64 /c/Workspace/livros-receitas (master)
$ git config --global user.email "gabriel.victorino2004@gmail.com"

Gabriel_Victorino@DESKTOP-A192CLP MINGW64 /c/Workspace/livros-receitas (master)
$ git config --global user.name GabrielVictorino8266
```

 Por fim, usaremos os seguintes códigos:

> git add * -> Adiciona todos os arquivos da pasta.
>
> git commit -m "descricao" -> cria um commit e o descreve.

```sh
Gabriel_Victorino@DESKTOP-A192CLP MINGW64 /c/Workspace/livros-receitas (master)
$ git add *
warning: in the working copy of 'teste.jpg', LF will be replaced by CRLF the next time Git touches it

Gabriel_Victorino@DESKTOP-A192CLP MINGW64 /c/Workspace/livros-receitas (master)
$ git commit -m "Carregando primeiros arquivos."
[master (root-commit) 2f43b88] Carregando primeiros arquivos.
 2 files changed, 6 insertions(+)
 create mode 100644 markdown.md
 create mode 100644 teste.jpg

```





### Criando uma receita📝com Markdown

Pertos da época da Páscoa, os ovos de chcocolate estão às alturas, por isso, aqui não será diferente, confia uma receita top!!!👌



#### Ovo de Chocolate com Musse

![Ovos Pascoa](./arquivos%20do%20curso/receita-markdown/ovo-pascoa.jpg)

Delicioso né?! Bom, vamos lá! 

- **Tempo de Preparo:** 1hora (+2duas horas de geladeira)
- **Rendimento**: 4 porções
  Essa é uma dica do [Sabores Ajinomoto](https://www.saboresajinomoto.com.br/receita/ovo-de-chocolate-com-musse-1) 👈

##### Ingredientes

- 3 e meia xícaras (chá) de chocolate meio amargo fracionado (600 g)

- 2 latas de creme de leite (600g)

- 1 lata de leite condensado (395g)
- 1 sachê de  **Maracujá**

##### Modo de preparo:

Em uma **tigela média**, coloque o chocolate e leve ao micro-ondas por 3 minutos na potência média para derreter, mexendo na metade do tempo.

Distribua o chocolate derretido em 4 fôrmas de silicone (150 g) próprias para ovos de Páscoa, até a marca indicada, cubra com a outra parte de silicone e leve à geladeira por 20 minutos, ou até endurecer.
