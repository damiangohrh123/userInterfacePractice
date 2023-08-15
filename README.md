# userInterfacePractice
Creating Dynamic User Interface Interactions as practice

-Error from line 143 to line 150
 *Function declared in a loop contains unsafe references to variable(s) 'currentImageIndex'*
 In this code, each iteration of the loop creates a new click event listener function, and each of these functions captures and refers to the same currentImageIndex variable defined in the outer scope. This is what I had intended. Eslint highlighted it as an error.
 It is ok to ignore.


 Completed this mini project. Overall easy project.
 Did not look up a tutorial.
 More confident on the project setup process. Prettier, Eslint and Webpack.

 For the setup of the project, might want to consider creating a skeleton so can just copy paste onto new projects.

 

