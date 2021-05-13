# Test Plan 





## 1  Outline/prerequisites

1. Ensure you have a copy of the browser definition document
2. Ensure you know which environment you are testing against



## 2  Setup and Teardown

### Setup

1.  Ensure you have user credentials (if not create a user)
2.  Login to the system



### Teardown

1.  Delete all uploaded recipes
2.  Cancel all completed recipes
3.  Cancel all liked recipes
4.  Logout



## 3  Test

### A. Test a user can find recipes (without login)

1.  Select and click a region on the map
2.  Ensure recipes are shown on the page
3.  Select and click a recipe
4.  Ensure the nation information of the recipe is correct, fit the selected region 
5.  Ensure all the information of the recipe displays correctly, including title, figure, 
description, ingredients and directions
6.  Ensure the design looks correct in all supported browsers

### B. Test a user can register

1.  Check the register icon exists on the top navigation bar
2.  Click the register icon
3.  Check the register component displays correctly
4.  Fill the register form with illegal credentials and check the alert information displays correctly:
        (1). Short username
        (2). Invalid email
        (3). Short password
5.  Click the "Sign up" button and check the response 
6.  Fill the register form with valid username, password and email and click "Sign up" button
7.  Check "registration successful" response
8.  Check "login" button exists
9.  Go back to the home page and Click "register" icon again
10. Fill the register form with the same username, password and email and click "Sign up" button
11. Check cannot register with the same credentials

### C. Test a use can login

1.  Check the login icon exists on the top navigation bar
2.  Click the login icon
3.  Check the login component displays correctly
4.  Fill the login form with illegal credentials and check the alert information displays correctly:
        (1). Invalid email
        (2). Correct email but wrong password
5.  Click the "Login" button and check the response 
6.  Fill the login form with valid email and password and click "Login" button
7.  Check "logged in" response
8.  Click the "Accomplishment" button on the left navigation bar
9.  Check the Accomplishment component contains user information and displays correctly
10. Click the "Profile" icon on the top navigation bar
11. Check the profile component displays correctly
12. Click the "sign out" icon on the top navigation bar
13. Check the app sign out correctly and go back to home page

### D. Test a user can upload recipes

1.  login as in step C
2.  Click the "upload" button on the left navigation bar
3.  Check the upload component displays correctly
4.  Check the upload form contains all needed items
5.  Fill all required fields of the upload form
6.  Select the picture to upload
7.  Click the "Upload" button
8.  Click the selected region on the left navigation bar
9.  Check the uploaded recipe appears
10. Click the "Accomplishment" button on the left navigation bar
11. Check the uploaded recipe appears in the accomplishment

### E. Test a user can like and complete recipes

1.  Login as in step C
2.  Select a recipe as in step A
3.  Click the "I like it" button
4.  Click the "Accomplishment" button on the left navigation bar
5.  Check the selected recipe is in the "liked recipes" list
6.  Select a recipe as in step A 
7.  Click the "I complete it" button
8.  Click the "Accomplishment" button on the left navigation bar
9.  Check the selected recipe is in the "completed recipes" list
