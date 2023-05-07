# Introdução ao GitHub | Resolvendo Conflitos


Quando trabalhamos em equipe, sabemos que vários arquivos são editados simultaneamente, causando conflitos e não gerando o resultado esperado. Assim, quando o Git Hub tenta juntar, ocorre o conflito de Merge (edição na mesma linha, resolvido manualmente)

No caso, temos um repositorio local "antigo", não atualizado.

> git push origin master - tenta carregar a versao atual para o repositorio online.

```sh
Gabriel_Victorino@DESKTOP-A192CLP MINGW64 /c/Workspace/livros-receitas (master)
$ git push origin master
To https://github.com/GabrielVictorino8266/dio-angular-bootcamp.git
 ! [rejected]        master -> master (fetch first)
error: failed to push some refs to 'https://github.com/GabrielVictorino8266/dio-angular-bootcamp.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.


```

Para sabermos se há um conflito de merge, usaremos:

> git pull origin master

```sh
Gabriel_Victorino@DESKTOP-A192CLP MINGW64 /c/Workspace/livros-receitas (master)
$ git pull origin master
remote: Enumerating objects: 7, done.
remote: Counting objects: 100% (7/7), done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 4 (delta 0), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (4/4), 784 bytes | 43.00 KiB/s, done.
From https://github.com/GabrielVictorino8266/dio-angular-bootcamp
 * branch            master     -> FETCH_HEAD
   f1470c2..7fa8fad  master     -> origin/master
error: Your local changes to the following files would be overwritten by merge:
        receitas/markdown.md
Please commit your changes or stash them before you merge.
Aborting
Updating f1470c2..7fa8fad

```


Abaixo segue um exemplo do problema sendo resolvido:


```bash
Gabriel_Victorino@DESKTOP-A192CLP MINGW64 /c/Workspace/livros-receitas (master)
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   receitas/markdown.md

no changes added to commit (use "git add" and/or "git commit -a")

Gabriel_Victorino@DESKTOP-A192CLP MINGW64 /c/Workspace/livros-receitas (master)
$ git add *
warning: in the working copy of 'receitas/markdown.md', LF will be replaced by CRLF the next time Git touches it

Gabriel_Victorino@DESKTOP-A192CLP MINGW64 /c/Workspace/livros-receitas (master)
$ git commit -m "Git nao atualizado local"
[master bcdcd48] Git nao atualizado local
 1 file changed, 1 insertion(+), 1 deletion(-)

Gabriel_Victorino@DESKTOP-A192CLP MINGW64 /c/Workspace/livros-receitas (master)
$ git push origin master
To https://github.com/GabrielVictorino8266/dio-angular-bootcamp.git
 ! [rejected]        master -> master (fetch first)
error: failed to push some refs to 'https://github.com/GabrielVictorino8266/dio-angular-bootcamp.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.

Gabriel_Victorino@DESKTOP-A192CLP MINGW64 /c/Workspace/livros-receitas (master)
$ git pull origin master
remote: Enumerating objects: 7, done.
remote: Counting objects: 100% (7/7), done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 4 (delta 1), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (4/4), 748 bytes | 31.00 KiB/s, done.
From https://github.com/GabrielVictorino8266/dio-angular-bootcamp
 * branch            master     -> FETCH_HEAD
   20ddc9a..70588b7  master     -> origin/master
Auto-merging receitas/markdown.md
CONFLICT (content): Merge conflict in receitas/markdown.md
Automatic merge failed; fix conflicts and then commit the result.

Gabriel_Victorino@DESKTOP-A192CLP MINGW64 /c/Workspace/livros-receitas (master|MERGING)
$ ls
receitas/  teste.jpg

Gabriel_Victorino@DESKTOP-A192CLP MINGW64 /c/Workspace/livros-receitas (master|MERGING)
$ git status
On branch master
You have unmerged paths.
  (fix conflicts and run "git commit")
  (use "git merge --abort" to abort the merge)

Unmerged paths:
  (use "git add <file>..." to mark resolution)
        both modified:   receitas/markdown.md

no changes added to commit (use "git add" and/or "git commit -a")

Gabriel_Victorino@DESKTOP-A192CLP MINGW64 /c/Workspace/livros-receitas (master|MERGING)
$ git add *

Gabriel_Victorino@DESKTOP-A192CLP MINGW64 /c/Workspace/livros-receitas (master|MERGING)
$ pwd
/c/Workspace/livros-receitas

Gabriel_Victorino@DESKTOP-A192CLP MINGW64 /c/Workspace/livros-receitas (master|MERGING)
$ ls
receitas/  teste.jpg

Gabriel_Victorino@DESKTOP-A192CLP MINGW64 /c/Workspace/livros-receitas (master|MERGING)
$ git commit -m "Atualizando Merge"
[master a13f222] Atualizando Merge

Gabriel_Victorino@DESKTOP-A192CLP MINGW64 /c/Workspace/livros-receitas (master)
$ git push origin master
Enumerating objects: 14, done.
Counting objects: 100% (14/14), done.
Delta compression using up to 4 threads
Compressing objects: 100% (6/6), done.
Writing objects: 100% (8/8), 799 bytes | 799.00 KiB/s, done.
Total 8 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), done.
To https://github.com/GabrielVictorino8266/dio-angular-bootcamp.git
   70588b7..a13f222  master -> master


```



## Resumo de Comandos

Alguns comandos utilizados são:

> git status -> verifica o status
>
> git add * > adiciona todos os arquivos modificados
>
> git commit -m "Mensagem" > cria um commit com mensagem da alteracao
>
> git push origin master -> tenta carregar ao repositorio
>
> git pull origin master -> traz o repositorio online e permite modificar o repositorio localmente (comparando as mudancas)
>
> git clone https://repositorio-online.git -> clona o repositorio de url (https://repositorio-online.git)
>
> git remote -v -> mostra para onde (online) aponta o repositorio local.
