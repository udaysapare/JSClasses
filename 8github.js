//for first time for new folder/////
git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/Aakashdeveloper/testlearn.git
git push -u origin master

//next time for same folder/////
git add .
git commit -m "first commit"
git push

git status

////create new branch/////
git checkout -b branchname
git add .
git commit -m "first commit"
git push origin branchname
