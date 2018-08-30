# Setting up my local dev with an editor & git

## `Select an editor, configure git..`

Go Grab [VScode](https://code.visualstudio.com/) its frikin awesome!
I run
 with the most popular extension available in VScode.You can also get terminal access to its like the walmart of code development. 

## `Install Git & Making your first comit`


## Configure Git -> GitHub Repo
Set private Email. 
You have an option in Github to keep you email private. If you do this. You need to use this auto generated email when you commit to the repo. 
```ts
git config --global user.email 8009511+kcirtapfromspace@users.noreply.github.com
```
Check its set should show the email you just put in. 
```
git config --global user.email
```
## Get a developer token
This is used instead of sending your password over the wire.

Login in to your git hub account 

Head to `Settings` > `Developer Settings` > `Generate Token`

Theres a lot better documentation over [here](
https://help.github.com/articles/git-automation-with-oauth-tokens/)

## Open your project with Terminal.
Change the current working directory to your local project.
```
MacBook-Pro% mkdir demo-app
MacBook-Pro% pwd
MacBook-Pro% ce demo-app
/Users/kcirtap/Desktop/Project
```
## Initialize the local directory as a Git repository.
```
ThinkMacs-MacBook-Pro% git initInitialized empty Git repository in /Users/thinkmac/Desktop/Project/demo-app/.git/
```
## Add the files in your new local repository. 
This stages them for the first commit.Adds the files in the local repository and stages them for commit. To unstage a file, use 'git reset HEAD YOUR-FILE'.
```
MacBook-Pro% git add .
```

## Commit the files that you've staged in your local repository.
Commits the tracked changes and prepares them to be pushed to a remote repository. 
```
MacBook-Pro% git commit -m "woot woot"
[master (root-commit) bcc20ac] woot woot
 1 file changed, 64 insertions(+)
 create mode 100644 Guide-Git.md
```
Commits the tracked changes and prepares them to be pushed to a remote repository. 
## Removing Commits
To remove this commit and modify the file, use command below and commit and add the file again.
```
git reset --soft 
```



## Setup Remote Repo
Copy remote repository URL field At the top of your GitHub repository's Quick Setup page, click  to copy the remote repository URL.
In Terminal, add the URL for the remote repository where your local repository will be pushed.

Sets the new remote
```
git remote add origin https://github.com/kcirtapfromspace/pdeutsch.guides
```
Verifies the new remote URL
```
MacBook-Pro% git remote -v
origin  https://github.com/kcirtapfromspace/pdeutsch.guides (fetch)
origin  https://github.com/kcirtapfromspace/pdeutsch.guides (push)
 ``` 
## Push the changes in your local repository to GitHub.
Pushes the changes in your local repository up to the remote repository you specified as the origin
```
 git push -u origin master
 ```
Better help...

https://help.github.com/articles/pushing-to-a-remote/

https://help.github.com/articles/about-remote-repositories/#

# `DONE...`