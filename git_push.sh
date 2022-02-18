#!/bin/sh
# ref: https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/
#
# Usage example: /bin/sh ./git_push.sh "minor update"

release_note=$1

git_repo_id=Smart-Consent-Access/sa-sdk-ts

if [ "$release_note" = "" ]; then
    release_note="Minor update"
    echo "[INFO] No command line input provided. Set \$release_note to $release_note"
fi

# Initialize the local directory as a Git repository
git init

# Adds the files in the local repository and stages them for commit.
git add .

# Commits the tracked changes and prepares them to be pushed to a remote repository. 
git commit -m "$release_note"

# Sets the new remote
git_remote=`git remote`
if [ "$git_remote" = "" ]; then # git remote not defined
    git remote add origin git@github.com:$git_repo_id.git
fi

git pull origin master

# Pushes (Forces) the changes in the local repository up to the remote repository
echo "Git pushing to git@github.com:$git_repo_id.git"
git push origin master 2>&1 | grep -v 'To https'

