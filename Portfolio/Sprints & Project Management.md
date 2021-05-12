# Sprints & Project Management

The success of our project is due to our team’s effectual Group working methods, good team organisation and efficient communication. In this section, we will introduce group working methods, team roles and contributions, documentation of sprints and team use of git.

## Group working methods

For a newly software development team, choosing a suitable project management method is essential for the development and completion of our project. We need to understand the current popular management models and choose the most suitable for us.

### Induction to current approaches to project management and software development

The current common models of software project management are Waterfall Model, Iterative Development, Spiral Development and Agile Development.

#### **1、Waterfall Model**

![](images/Sprints%20&%20Project%20Management/waterfall.png)

Waterfall model is a project development framework, which divides project activities into linear continuous phases. Each phase depends on the deliverable of the previous phase. In software development, it is often known as one of the less iterative and flexible methods because it have to go through various stages of conception, start-up, analysis, design, build, test, deployment and maintenance. The process basically flows in one direction like a waterfall.

##### The pros

​	1. Provide checkpoints in each stage of the project

​	2. when the current stage is completed, only need to focus on the subsequent stages.

​	3. The waterfall model can be applied in the iterative model.

##### The cons

1. Each stage is completely fixed. A large number of documents are generated between different stages, which increases the workload.

2. Since the development model is linear, users can only see the development results until the end of the whole process. It may  increase the development risk.
3. Track each project phase through too many  dates and milestones.

4. It does not adapt to changes in user needs.

#### **2、Iterative development**

![](images/Sprints%20&%20Project%20Management/iterative.png)

Iterative development is contrary to waterfall model. It makes up for some weaknesses in traditional development methods so it has higher success rate and productivity. In the iterative development, developers design and implement only part of the product at a time and complete the project step by step. Each design and implementation phase is called an iteration.

##### The pros：

1. It helps reduce risk in the development

2. It can get user feedback early 

3. It goes through continuous testing and integration

4. It  improves reusability



#### 3. **Spiral development**

![](images/Sprints%20&%20Project%20Management/spiral.png)

Spiral development combines waterfall model and emphasizes the risk analysis which are ignored by other models. It is especially suitable for large and complex systems. Spiritual development is a risk driven methodology  because risk assessment must be carried out before each stage and the frequent cycle.

#### 4. Agile Development

![](images/Sprints%20&%20Project%20Management/agile.png)

Agile is an iterative approach to project management and software development that helps teams deliver value to their customers faster and with fewer headaches. Instead of betting everything on a "big bang" launch, an agile team delivers work in small, but consumable, increments. Requirements, plans, and results are evaluated continuously so teams have a natural mechanism for responding to change quickly.



#####  [Twelve Principles of Agile Software](https://agilemanifesto.org/principles.html)

1.Our highest priority is to satisfy the customer through early and continuous delivery of valuable software.

2.Welcome changing requirements, even late in development. Agile processes harness change for the customer's competitive advantage.

3.Deliver working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale.

4.Business people and developers must work together daily throughout the project.

5.Build projects around motivated individuals. Give them the environment and support they need, and trust them to get the job done.

6.The most efficient and effective method of conveying information to and within a development team is face-to-face conversation.

7.Working software is the primary measure of progress.

8.Agile processes promote sustainable development. The sponsors, developers, and users should be able to maintain a constant pace indefinitely.

9.Continuous attention to technical excellence and good design enhances agility.

10.Simplicity--the art of maximizing the amount of work not done--is essential.

11.The best architectures, requirements, and designs emerge from self-organizing teams.

12.At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly.



##### Scope of application

1. The number of project teams cannot be too large

2. Frequent changes in projects

3. High risk project implementation

4. Developers can participate in decision making

5. People can trust each other and can communicate efficiently.



#### 5. **Difference ：**



| methods               | properties                                                   |
| --------------------- | ------------------------------------------------------------ |
| Waterfall Model       | Requirements ,design, coding, testing and  submission are required to be best in every development phase. Especially in the early stage. |
| iterative development | It is not required that the tasks of each stage  is perfect, but the main functions should be built first. An imperfect product should be completed in the shortest time and then gradually improve it by getting the feedback of users, . |
| Spiral development    | It can be said that it is a risk driven methodology, because risk assessment must be carried out before each stage and the frequent cycle. So it  suitable for large and complex systems. |
| Agile Development     | Compared to iterative development, they both emphasized submitting software in a shorter development cycle, but Agile Development may have a shorter cycle and put more emphasis on the high degree of collaboration in the team. Agile Development is sometimes mistaken for an unplanned and disciplined approach. In fact, it is more accurate to say that Agile Development emphasizes adaptability rather than predictability. |



### The reasons why we choose Agile Development

1. Agile Development can divide a project into multiple sub-projects that can be run, which enables us to quickly build the core functions of the project. It can help us in the next step of the development of non-core functions.

2. Agile Development is more willing to accept changes in requirements. Our team members are exposed to the design, development, testing and maintenance of a project for the first time. During the development phase, some of us have new ideas, and agile development can be more flexible to help realize our ideas.

3. Agile Development is more suitable for projects with short project cycles. In our plan, the project development time is 2 months, which is a very short time for us. Using agile development can help us improve efficiency and shorten the project cycle.

4. Agile Development is more suitable for projects with a small number of team members and similar skill levels. For a five people team, agile development is our first choice.



### Our Agile Development Strategy

#### 1.Jira Software 

We used Jira as our agile development tool because it is free, concise and supports multiple languages. We registered Jira and created the project. We added 4 epics in Roadmap, which are front end, back end, API and document. And corresponding child issues have been added to these four epics. The details of this part will be shown below.



#### 2.priority flag 

In order to develop  our main functions faster, we have established four levels of A, B, C and D. When we submit child issues in the corresponding epic, we will mark their priority with A, B, C, D. We will develop according to the priority.

| level |                                                              |
| ----- | ------------------------------------------------------------ |
| A     | A stands for the core function of the app, which must be finished as soon as possible |
| B     | B stands for the important function of the app, which should be finished after A. |
| C     | C stands for the not important but interesting function of the app, which could improve the quality of the app. |
| D     | D stands for these new features that occur to us when developing , we will talk them in weekly group meeting. |



#### 3.Communication

In this special period, we can only communicate online through computers and mobile phones. In order to improve our communication efficiency, we adopt three communication methods

##### 1.Weekly meeting

Microsoft Teams is a team collaboration tool that we are all familiar with. We have weekly meeting in our bubble more than once a week. So far, we have held a total of 12 weekly meetings, and we often discuss the following matters in the meeting:

1. Priority changes of functions

2. Features that need to be adjusted or redesigned

3. Introduction of new features

4.  Difficult technical problems



<img src="images/Sprints%20&%20Project%20Management/time.gif" style="zoom:67%;" />

##### 2.Quick chat and summary

Wechat is a very popular chat software. It is also a daily chat tool used by our team members, so we will see Wechat notice in time. We have created a Wechat group for us. We often discuses some temporary problems or issue meeting notices. And when we completes the child items, we will publish the summary in our Wechat group.

<img src="images/Sprints%20&%20Project%20Management/wechat.gif" style="zoom:80%;" />

##### 3.Personal video chat

In Wechat group, we often encounter unclear descriptions, such as API deployment and data transfer between  front end and back end. At this time, we tend to  conduct video chat in Microsoft teams. We usually initiate meetings in desk 13 or call other members in chat bar. Projection screen and voice communication are our favorite ways to solve problems.



## Team roles and contributions

| Name        | Role                   | Contribution                                                 |
| ----------- | ---------------------- | ------------------------------------------------------------ |
| Wenqing Xie | System Designer, Coder | He designs the framework of the project, including data model, sequence and use case. He takes part in front end development, focusing on authentication and Angular services. He also participate in Docker deployment and unit tests. |
| HaoLong Li  | Designer, Coder        | He focus on the front end. He designed the web page style and developed part of fucntions in front end. More importantly, he drew an amazing dynamic world map in the home page. |
| Wei Wei     | Product Manager        | He is responsible for collecting product information, analyzing product requirements, organizing group meetings, testing project functions and writing product analysis reports |
| Yifan Luo   | Coder, Creative        | He collaborated with group members on the backend realization, which includes User, Receipe and Database, etc. Moreover, he banded with teammates on final report and editted the project video to acquire a better performance. |
|             |                        |                                                              |



## Documentation of sprints

In the whole development cycle, we have carried out five sprints, each of which includes four aspects: 

1. Aims of the sprint

2. Done issues

3. User story
4. Summary and evaluation

Time plan for sprints is as follows:

| Sprint time | Sprint title                              | Time           | Content                                                      |
| ----------- | ----------------------------------------- | -------------- | ------------------------------------------------------------ |
| Sprint 1    | The choice of ideas and preparation       | 2021.2.02-2.15 | Aims of the sprint; Done issues; Summary and evaluation      |
| Sprint 2    | Analysis and Planning                     | 2021.2.22-3.8  | Aims of the sprint; Done issues; Summary and evaluation      |
| Sprint 3    | Build front end                           | 2021.3.20-4.8  | Aims of the sprint; Done issues; User story; Summary and evaluation |
| Sprint 4    | Build API and continue to build front end | 2021.4.8-4.12  | Aims of the sprint; Done issues; User story; Summary and evaluation |
| Sprint 5    | Build back end                            | 2021.4.20-5.7  | Aims of the sprint; Done issues; User story; Summary and evaluation |



### Sprint 1:  The choice of ideas and preparation (2021.2.02-2.15)

#### Aims of the sprint

1. Set up our team

2. Our team assigned the work according to our own advantages

3. Team members put forward the ideas they want to do most

4. Build GitHub repository

#### Done issues

|      | Child issues                 |
| ---- | ---------------------------- |
| 1    | Create our Github repository |
| 2    | Idea from  Yifan Luo         |
| 3    | Idea from  Haolong Li        |
| 4    | Idea from Wei Wei            |
| 5    | Idea from Wenqing Xie        |
| 6    | Idea from Kaixiang Ma        |

#### Summary and evaluation

We created a Github repository belonging to our group and started practicing Github instructions. We proposed 5 ideas: Dish Map, Planting trees, Stock and Fund Diagnose, Postcard and Exercise. We discussed  ideas in the weekly meeting , then analyzed the advantages and disadvantages and possible problems of each idea. After an hour of discussion, we voted to choose Dish Map as our project. We also divided our responsibilities  in the weekly meeting.



### Sprint 2:  Analysis and Planning (2021.2.22-3.8)

#### Aims of the sprint

1. Everyone proposes the features of Dish Map
2. Feasibility analysis of features
3. Prioritize features

   

####  Done issues

|      | Child issues               |
| ---- | -------------------------- |
| 1    | features from Kaixiang Ma  |
| 2    | features from  Yifan Luo   |
| 3    | features from  Haolong Li  |
| 4    | features from Wei Wei      |
| 5    | features  from Wenqing Xie |



#### Summary and evaluation

In weekly meeting, we took turns to propose our own prepared features. When each feature was proposed, all team members discussed the feasibility of this feature and set its priority. We divided these features into child issues in  Jira's epics.

### Sprint 3:  Build front end (2021.3.20-4.8)

#### Aims of the sprint

1. Build the data structure
2. Complete A level child issues in front epics.
3. Establish the data structure
2. Complete A level child issues in front epics.

#### Done issues

| No   | Priority | Child issues                        |
| ---- | -------- | ----------------------------------- |
| 1    | A        | Add model recipe, model Ingredients |
| 2    | A        | Add recipe service module           |
| 3    | A        | Add recipe and cookbook components  |
| 4    | A        | Added sidenav and toolbar           |
| 5    | A        | Added Material Design components    |
| 6    | A        | Added router                        |



#### User story

| Name     | user story                                                   |
| -------- | ------------------------------------------------------------ |
| Harry    | If there is a cool world map on the homepage, it should looks very good. |
| Ron      | Can I upload my favorite food? I think you need to design user module and upload function. |
| Hermione | It seems that the most basic functions of the front-end have been implemented. But the css style of the app is too rudimentary.  You need to add css styles, and improve the layout of the page on the cookbook page. You may need a grid layout. |



#### Summary and evaluation

In this sprint, we have designed the data model that we currently need. In the front end UI design, we adopted the Angular Material UI component library. We designed the sidebar and navigation bar by angular material design . We used recipes service to pass the data in each component. The router is also very well added to the page. We have successfully implemented all the A level priority functions in front end. Although the page does not look good, it can already achieve basic Function now.

### Sprint 4:  Build API and continue to build front end (2021.4.8-4.12)

#### Aims of the sprint

1. Deploy API 
2. complete B level child issues in front epics.
3. Add docker

#### Done issues

| No   | Priority | Child issues                                            |
| ---- | -------- | ------------------------------------------------------- |
| 1    | A        | Add API framework                                       |
| 2    | A        | Deploy docker                                           |
| 3    | B        | Add upload component                                    |
| 4    | B        | Add worldmap component                                  |
| 5    | B        | Add CSS styles and improve layout in current components |
| 6    | C        | Add feedback data model                                 |
| 7    | C        | Add feedback component                                  |



#### User story

| Name     | user story                                                   |
| -------- | ------------------------------------------------------------ |
| Harry    | This map is awesome, I am satisfied. But why not design it as a route map? How about starting from Brostol? |
| Ron      | This app is getting better, I can not wait to register? What? There is no user model yet? |
| Hermione | I think you need more interactive features, for example, users can add favour to  their favorite recipes. You can also design a ranking to show the most popular recipes |



#### Summary and evaluation

In this sprint, We have implemented all B level features include upload, worldmap and css styles. We used ecarts API and based on geojson standard and designed a dynamic and visual world map . We deployed docker and API framework.

### Sprint 5:  Build back end (2021.4.20-5.7)

#### Aims of the sprint

1. Build MongoDB database;
2. Child issues implementation;
3. Backend and Frontend Intergration



####  Done issues

| No   | Priority | Child issues                          |
| ---- | -------- | ------------------------------------- |
| 1    | A        | Build MongoDB database                |
| 2    | A        | Upload recipes                        |
| 3    | A        | Search a recipe by location or id     |
| 4    | A        | User sign in, log in and verification |
| 5    | C        | Add a recipe as favorite by user      |
| 6    | C        | Add a recipe as completed by user     |
| 7    | B        | Deploy cloud storage                  |



#### User story

| Name     | user story                                                   |
| -------- | ------------------------------------------------------------ |
| Harry    | Your web app looks great, but why I can't upload my own recipe? I mean, the website content seems like static. |
| Ron      | The user interaction is so cool! But I'm afraid that my personal account and password is not safe. Maybe you guys can use token for user account certification? |
| Hermione | I'm planning to take a international graduation travel, and want to prepare so cuisine culture. Can I search the recipes by their locations? |

####  

#### Summary and evaluation

In this sprint, we first built a database with refining relatively data structure, such as User and Recipe, to reach the goal of persistence storage and decoupling from front end. Moreover, for the purpose of better usability and accessibility, we both connect the database by the means of Docker and Cloud Storage.

Also, we wrote the server code to receive and process the form results from the front end API. More specifically, we realize the following aspects: First, user account management, such as sign in, log in/out, user token validation. Secondly, we build the recipe service, including but not limited to: recipe information upload, searching by user or location, ranking by favourite amount , comments and feedback, favourite and complete by other users, etc.

With all the works above, we can share our recipe ideas with friends in worldwide, study and follow recipes that uploaded from any countries, and interact with other users by **favourite** or **complete** function.

## Team use of Git

Github is the most important tool in our project. we can create repository, create new branches, quickly get the latest version  and debug through revert operations through Github.

#### Create our repository

Wenqing Xie create the  repository of our project. Other people were invited to this repository and became contributors.

#### Branch management

We realized the importance of branch management from the beginning. We created a total of 8 branches.



![](images/Sprints%20&%20Project%20Management/branch.png)

| Branch     | detail                                                       |
| ---------- | ------------------------------------------------------------ |
| main       | There is the final version of the project in the main branch. We ensure that the most complete and runnable project is saved in the main branch. |
| dev        | The latest version in the front end and the latest version in the back end will merge in the dev branch, we will test in the dev branch, and finally submit to the main branch |
| front      | The branch used for front end development.                   |
| backend    | The branch used for back end development, the api is also deployed here. |
| backnew    | Another branch of back-end , finally will  merge into backend. |
| back-user  | Branch  for User authentification.                           |
| front-test | Branch  for testing in front end.                            |
| readme     | Branch  for document.                                        |

#### Git clone and visitor

![](images/Sprints%20&%20Project%20Management/visitor.bmp)

![](images/Sprints%20&%20Project%20Management/clone.bmp)

#### Network graph

