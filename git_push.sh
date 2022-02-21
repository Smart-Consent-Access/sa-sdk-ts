#!/bin/sh
# ref: https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/
#
# Usage example: ./git_push.sh "minor update"

release_note=$1
git_repo_id=Smart-Consent-Access/sa-sdk-ts

# Creates a temporary folder and clone the SDK repo into it
mkdir temp
(cd temp && git clone git@github.com:$git_repo_id.git)

# Copy the fils over to the temporary folder
rsync -rv --exclude=temp . temp/sa-sdk-ts/

if [ "$release_note" = "" ]; then
    release_note="Minor update"
    echo "[INFO] No command line input provided. Set \$release_note to $release_note"
fi

# Adds the files and commit them.
cd temp/sa-sdk-ts && git add . && git commit -m "$release_note"

# Pushes (Forces) the changes in the local repository up to the remote repository
echo "Git pushing to git@github.com:$git_repo_id.git"
git push origin master 2>&1 | grep -v 'To https'

# Remove the temporary folder
cd ../../ && rm -rf temp/
