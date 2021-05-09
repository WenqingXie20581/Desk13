# System Implementation

## Stack architecture and system design

### Mean Stack

[https://www.mongodb.com/mean-stack]: 

Our system apply the MEAN

![Mean Stack Diagram](https://webassets.mongodb.com/_com_assets/cms/mean-stack-0qy07j83ah.png)

The MEAN stack is a full-stack, JavaScript-based framework for developing web applications. MEAN stands for **M**ongoDB **E**xpress **A**ngular **N**ode, after the four key technologies that make up the different layers of the stack.

- MongoDB - document database
- Express(.js) - Node.js web framework
- Angular(.js) - a client-side JavaScript framework
- Node(.js) - the premier JavaScript web server



### System Design

#### Data Model

![Class Diagram](images/System_Implementation/classDiagram (2)-1620528230912.png)

The fundamental part of our data model are **User** class and **Recipe** class. The **id** field of both classes are string type, compatible with database setting.

**User** class stores all information of users.

Field **Token** is an access token. It is used in authentication. After signing in, the user client can get an access token from the server. Whenever users want to access private data, the token will be added into header of HTTP Request, and the server will verify users' identification. 

For the sake of function separation and security, the User class contains three component classes:

| Class              | content                                            | function                   |
| ------------------ | -------------------------------------------------- | -------------------------- |
| UserProfile        | email                                              | Basic user information     |
| UserAccomplishment | likedRecipeId, completedRecipeId, uploadedRecipeId | User accomplishment system |
| UserCredential     | username, password                                 | Authentication             |

 **UserProfile** class stores basic user information. For the time being, it only contains email of users. Other profile like address, phone number and portrait can be added in the future.

**UserAccomplishment** class is designed for accomplishment system, the "playing" part of this app. Users can try achieving all kinds of accomplishment and getting rewards. These accomplishment records are stored in this class.

**UserCredential** class is for Authentication. Data in this class will normally not be directly sent to client for security. It will mainly be use when users sign in their accounts.

**Recipe** Class contains all information to be shown in the Recipe Component and provide a guidance.  **ingredients** and **directions** will tell users what ingredients to prepare and how to deal with them. The **region** field provides a way to classify recipes by region, making the "Dish Map" available.

In order to realize a rank function, **likedNumber** and **completedNumber** fields are added.

#### Sequences

Without signing in, users can find and view recipes. 

![Simple Sequence](images/System_Implementation/recipeSimpleSequence.png)

The basic operations are like below:

1. **Open the web app:** a huge world map is displayed
2. **Click to select a specific region on the map** or **Click to select a region on the left navigation bar**: the webpage will jump to a cookbook, listing  recipes of that region
3. **click to select a recipe**: The detailed information of recipe (ingredients, directions and so on) will be shown 



![Account Sequence](images/System_Implementation/accountSequence.png)

After signing in, account-relevant operations are unlocked, including:

- **view and updating user profile**
-  **view accomplishment**
- **upload new recipes**
- **click "favor" button to like a recipe**
- **click "complete" button to complete a recipe**



#### Use Case

To sum up, the use case of our app is like below:

![Use Case](images/System_Implementation/useCase.png)

- View recipes on web
- Upload recipes
- Search recipes of a region
- Create user profile on web
- Like a recipe
- Complete a recipe

## Back End - database implementation

## Middle Tier - express, Node, the RESTful API

## Front End - Angular

## Authentication

## Deployment and integration