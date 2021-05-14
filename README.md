# A Bite of World

![head](images/README/head.png)

## The Product

[Product Video Link](https://youtu.be/ixo0H-L_d4k)
Our product **Dish Map (A Bite of World)** is a single page app (SPA), designed to inspire users in the journey to enjoy delicious food, feel the gifts from nature, experience the cultures of various regions, strengthen the mutual understanding of people from different cultural backgrounds, enrich people's lives,  reduce people's living costs and make the world full of love and peace.



## Instructions for Use

#### Database on the cloud (Recommend!)
1. Change directory to the folder containing Dockerfile

   ```
   cd .\Desk13\DishMap
   ```

2. Build Docker image

   ```
   docker build .
   ```

3. Start the container based on the built image

   ```
   docker run --publish 3000:3000 <nameofimage>
   ```

   <nameofimage> was included in the return information of  **step 2**, like "Successfully built <nameofimage>".

#### Database in the Docker Container (Not Recommend : No preload data!!)

1. Change directory to the folder containing Dockerfile and docker-compose.yml

   ```
   cd .\Desk13\DishMap
   ```

2. Start the service

   ```
   docker-compose up -d
   ```

### Team Members

Our team is called **Love and Peace** and we are five handsome boys.

| Name        | Email                 |
| ----------- | --------------------- |
| Wei Wei     | fb20165@bristol.ac.uk |
| Haolong Li  | fr20938@bristol.ac.uk |
| Yifan Luo   | jp20469@bristol.ac.uk |
| Wenqing Xie | es20581@bristol.ac.uk |
| Kaixiang Ma | da20468@bristol.ac.uk |


## Contents

## [1. Introduction](Portfolio/Introduction.md)

This section is comprised of the following subsections:

- Abstract.
- Project Objectives.
- Video.

## [2. Background and Motivation](Portfolio/Background_and_Motivation.md)

This section is comprised of the following subsections:

* Background literature
* State of the art survey
* Problem definition
* Motivation

## [3. System Implementation](Portfolio/System_Implementation.md)

This section is comprised of the following subsections:

* Stack architecture and system design
* Back End - database implementation
* Middle Tier - express, Node, the RESTful API
* Front End - Angular
* Authentication
* Deployment and integration

## [4. UX Design](Portfolio/UX_Design.md)

- Design Process and Early prototyping and ideation (including mood boards and paper prototyping)
- Identification of interacting users and broader stakeholders.
- UX approach – design heuristics/approach, design methods 
- Understanding of user group 
- Wireframes and interaction flow diagrams for final key subsystems.


## [5. Sprints & Project Management](Portfolio/Sprints_Project_Management.md)

This section is comprised of the following subsections:

* Group working methods
* Team roles and contributions
* Documentation of sprints
* Team use of Git


## [6. Evaluation](Portfolio/Evaluation.md)

This section is comprised of the following subsections:

* Evaluation of design
* Unit testing
* User acceptance testing

## [7. Conclusion](Portfolio/Conclusion.md)

This section is comprised of the following subsections:

* Reflection on working practices
* Reflection of successes
* Impact of COVID-19
* Social and ethical implications
* Future work

## Acknowledgments

![201610241720298258](images/README/thank.gif)

A big thanks to people whose contents and libraries contribute to this project. We are also incredibly thankful for the support and guidance of our lecturers: Stuart Gray, Tom Bale, Pete Bennett, and Marceli Wac. We have learnt so much from them, and we are excited to implement the skills that they have taught us in our future careers.
