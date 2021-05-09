# System Implementation

## Stack architecture and system design

[Mean]: https://www.mongodb.com/mean-stack:



![Mean Stack Diagram](https://webassets.mongodb.com/_com_assets/cms/mean-stack-0qy07j83ah.png)

The MEAN stack is a full-stack, JavaScript-based framework for developing web applications. MEAN stands for **M**ongoDB **E**xpress **A**ngular **N**ode, after the four key technologies that make up the different layers of the stack.

- MongoDB - document database
- Express(.js) - Node.js web framework
- Angular(.js) - a client-side JavaScript framework
- Node(.js) - the premier JavaScript web server



### System Design

Our data models are relatively simple. Below is our class diagram. 

![Class Diagram](images/System_Implementation/classDiagram (2).png)

The fundamental part of our data model are User class and Recipe class, each of which contains basic information like id as a string ( in order to be compatible with database) and so on. After getting and reading the recipes from the cookbook , Users can interact with Recipes by liking, completing and uploading recipes.

In order to separate functions and gain security, the User class is made to contain three component classes:

Class UserProfile is user information which can be edited by user, while UserCredential class is used mainly in authentication.   

## Back End - database implementation

## Middle Tier - express, Node, the RESTful API

## Front End - Angular

## Authentication

## Deployment and integration