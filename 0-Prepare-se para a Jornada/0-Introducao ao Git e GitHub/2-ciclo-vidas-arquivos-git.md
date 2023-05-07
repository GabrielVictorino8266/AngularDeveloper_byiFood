# Entendendo o Ciclo de Vida dos Arquivos

## Praticando

Vamos simular uma alteração de arquivos, por exemplo, vamos criar uma pasta e mover o arquivo markdown.md para a pasta recém criada.

```sh
$ git status
On branch master
Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        deleted:    markdown.md

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        receitas/

no changes added to commit (use "git add" and/or "git commit -a")

```

Assim, é possível visualizar que ele mostra  `deleted: markdown.md`, ou seja, ele considera como excluído, já que não reconhece a pasta. Para corrigir, usaremos:

```sh
Gabriel_Victorino@DESKTOP-A192CLP MINGW64 /c/Workspace/livros-receitas (master)
$ git add markdown.md receitas/
warning: in the working copy of 'receitas/markdown.md', LF will be replaced by CRLF the next time Git touches it

Gabriel_Victorino@DESKTOP-A192CLP MINGW64 /c/Workspace/livros-receitas (master)
$ git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        renamed:    markdown.md -> receitas/markdown.md

```

Por fim, criamos um commit:

```sh
Gabriel_Victorino@DESKTOP-A192CLP MINGW64 /c/Workspace/livros-receitas (master)
$ git commit -m "criando pasta receitas e movendo arquivo markdown.md"
[master 85a2150] criando pasta receitas e movendo arquivo markdown.md
 1 file changed, 0 insertions(+), 0 deletions(-)
 rename markdown.md => receitas/markdown.md (100%)

```

### Guia de Comandos 👩‍💻

Alguns comandos utilizados são:

```bash
git status -> mostra o estado atual dos arquivos.
git add * -> adiciona todos os arquivos.
git add nome arquivo -> adiciona arquivo específico.
git commit -m "mensagem" -> cria um commit com uma mensagem (explicação)
```
