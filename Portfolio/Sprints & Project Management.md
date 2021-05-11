# 5. Sprints & Project Management

我们这次项目的成功得易于我们小组行之有效的Group working methods,良好的Team Organisation 和高效的 Communication. 在本节中, 我们将介绍Group working methods,Team roles and contributions,Documentation of sprints and Team use of Git 四方面.

The success of our project is due to our team’s effectual Group working methods, good Team Organisation and efficient Communication. In this section, we will introduce group working methods, team roles and contributions, documentation of sprints and team use of git.

## Group working methods

对于一个新诞生的软件开发小组来说, 选择一个合适的项目管理方法对于我们项目的开展和完成是必不可少的. 我们需要了解当前流行的管理模式, 并从中选择最适合我们的.

For a newly software development team, choosing a suitable project management method is essential for the development and completion of our project. We need to understand the current popular management models and choose the most suitable for us.

### Induction to current approaches to project management and software development

当前软件项目管理常见的的模式有 Waterfall Model , 迭代式开发,螺旋开发, Agile Development

The current common models of software project management are Waterfall Model, Iterative Development, Spiral Development and Agile Development.

#### **1、Waterfall Model**

![](images/Sprints%20&%20Project%20Management/waterfall.png)

Waterfall Model 是一个项目开发架构,将项目活动细分为线性连续阶段，其中每个阶段依赖于前一个阶段的可交付成果。在软件开发中，它往往是较少迭代和灵活的方法之一，因为通过构想、启动、分析、设计、构建、测试、部署和维护的各个阶段，进程基本上是朝着一个方向(“向下”像瀑布一样)流动的。

Waterfall model is a project development framework, which divides project activities into linear continuous phases. Each phase depends on the deliverable of the previous phase. In software development, it is often one of the less iterative and flexible methods because through the various stages of conception, start-up, analysis, design, build, test, deployment and maintenance,. the process basically flows in one direction ("down" like a waterfall).

##### The pros

1）为项目提供了按阶段划分的检查点

2）当前一阶段完成后，您只需要去关注后续阶段。

3）可在迭代模型中应用瀑布模型。

1) Provide checkpoints in each stage of the project

2) when the current stage is completed, you only need to focus on the subsequent stages.

3) The waterfall model can be applied in the iterative model.

##### The cons

1）各个阶段的划分完全固定，阶段之间产生大量的文档，极大地增加了工作量。

2）由于开发模型是线性的，用户只有等到整个过程的末期才能见到开发成果，从而增加了开发风险。

3）通过过多的强制完成日期和里程碑来跟踪各个项目阶段。

4） Waterfall Model 的突出缺点是不适应用户需求的变化。

1) The division of each stage is completely fixed. A large number of documents are generated between the stages, which greatly increases the workload.

2) Since the development model is linear, users can only see the development results until the end of the whole process, which increases the development risk.

3) Track each project phase through too many  dates and milestones.

4) The  disadvantage of Waterfall Model is that it does not adapt to changes in user needs.

#### **2、Iterative development**

![](images/Sprints%20&%20Project%20Management/iterative.png)

Iterative development is contrary to waterfall model. It makes up for some weaknesses in traditional development methods so it has higher success rate and productivity. In the iterative development, developers design and implement only part of the product at a time and complete the project step by step. Each design and implementation phase is called an iteration.

##### The pros：

1) 降低风险
2) 得到早期用户反馈
3) 持续的测试和集成
4) 使用变更
5) 提高复用性

1) Reduce risk

2) Get early user feedback

3) Continuous testing and integration

4) Change of use

5) Improve reusability



#### 3. **Spiral development**

![](images/Sprints%20&%20Project%20Management/spiral.png)

Spiral development combines waterfall model with rapid prototyping model, and emphasizes the risk analysis ignored by other models, which is especially suitable for large and complex systems. Spiritual development is a risk driven methodology to a large extent, because risk assessment must be carried out before each stage and the frequent cycle.

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

##### 

##### Scope of application

1) The number of project teams cannot be too large

2) Frequent changes in projects

3) High risk project implementation

4) Developers can participate in decision making

5) People can trust each and can communicate efficiently.

1) 项目团队的人数不能太多

2) 项目经常发生变更

3) 高风险的项目实施

4) 开发人员可以参与决策

5)人员彼此信任 人少但是精干 可以面对面的沟通



#### 5. **Difference ：**



| methods              | properties                                                   |
| -------------------- | ------------------------------------------------------------ |
| Waterfall Model      | 从需求到设计，从设计到编码，从编码到测试，从测试到提交.要求每一个开发阶段都要做到最好。特别是前期阶段，设计的越完美，提交后的成本损失就越少。Requirements ,design, coding, testing and  submission are required that every development phase be best. Especially in the early stage, the more perfect the design, the less cost loss. |
| terative development | 不要求每一个阶段的任务做的都是最完美的，而是明明知道还有很多不足的地方，却偏偏不去完善它，而是把主要功能先搭建起来为目的，以最短的时间，最少的损失先完成一个“不完美的成果物”直至提交。然后再通过客户或用户的反馈信息，在这个“不完美的成果物”上逐步进行完善。It is not required that the tasks of each stage should be the most perfect, but the main functions should be built first. An "imperfect product" should be completed in the shortest time and the least loss. And then through the feedback of customers or users, gradually improve the "imperfect product". |
| Spiral development   | It can be said that it is a risk driven methodology, because risk assessment must be carried out before each stage and the frequent cycle. |
| Agile Development    | Compared to terative development, they both emphasized submitting software in a shorter development cycle, but Agile Development may have a shorter cycle and put more emphasis on the high degree of collaboration in the team. Agile Development is sometimes mistaken for an unplanned and disciplined approach. In fact, it is more accurate to say that Agile Development emphasizes adaptability rather than predictability. |



### The reasons why we choose Agile Development

1.  Agile Development 能够将一个项目分为多个可以运行的子项目,这能够使我们快速的构建coursework的核心功能. 帮助我们进行下一步的非核心功能的开发.

2. Agile Development 更乐于接受需求变更. 我们小组成员第一次完整的接触到一个项目的设计,开发,测试和维护. 在开发阶段, 我们中的一些人有了新的想法, 敏捷开发可以更灵活的帮助实现我们每一个的想法.

3. Agile Development 更适合项目周期短的项目. 在我们的计划中项目开发的时间为2个月,这是对于我们是非常短的时间,采用迅捷开发能帮助我们提高效率和缩短项目周期.

4. Agile Development 更适合团队成员人数少并且团队成员技术水平相似的项目. 对于有5个人的group, 敏捷开发是我们的第一选择.

   1. Agile Development can divide a project into multiple sub-projects that can be run, which enables us to quickly build the core functions of coursework. Help us in the next step of the development of non-core functions.
   
   2. Agile Development is more willing to accept changes in requirements. Our team members are exposed to the design, development, testing and maintenance of a project for the first time. During the development phase, some of us have new ideas, and agile development can be more flexible to help realize our ideas.
   
   3. Agile Development is more suitable for projects with short project cycles. In our plan, the project development time is 2 months, which is a very short time for us. Using agile development can help us improve efficiency and shorten the project cycle.
   
   4. Agile Development is more suitable for projects with a small number of team members and similar skill levels. For a five people team, agile development is our first choice.
   
   

### Our Agile Development Strategy

#### 1.Jira Software 

我们使用了jira作为我们的agile development tool, 因为它免费, 简洁 并且 支持 多语言. 我们注册了Jira 并创建了 project. 我们添加了4个epics  in Roadmap, 它们分别是 front-end, back-end , api and document. 并在这四个 epics 内增加了相应的child issues.这部分内容将在下文展示.

We used jira as our agile development tool because it is free, concise and supports multiple languages. We registered Jira and created the project. We added 4 epics in Roadmap, which are front end, back end, API and document. And corresponding child issues have been added to these four epics. The details of this part will be shown below.



#### 2.priority flag 

我们为了更快的进行开发和实现我们的主要功能,我们设立了A, B, C and D 四个级别. 当我们在提交child issues 在对应的epic中时, 我们会在后面用A,B,C,D 标记他们的优先级. 我们会根据优先级进行进行开发.

In order to develop  our main functions faster, we have established four levels of A, B, C and D. When we submit child issues in the corresponding epic, we will mark their priority with A, B, C, D. We will develop according to the priority.

| level |                                                              |
| ----- | ------------------------------------------------------------ |
| A     | A stands for the core function of the app, which must be finished as soon as possible |
| B     | B stands for the important function of the app, which should be finished after A. |
| C     | C stands for the not important but interesting function of the app, which could imporve the quality of the app. |
| D     | D stands for these new features that occur to us when developing , we will talk them in weekly group meeting. |



#### 3.Communication

在这个特殊的时期, 我们只能通过电脑和手机进行线上沟通的. 为了提高我们的沟通效率, 我们采用了3种沟通方式.

In this special period, we can only communicate online through computers and mobile phones. In order to improve our communication efficiency, we adopt three communication methods

##### 1.Weekly meeting

Microsoft  Teams 是我们每个都熟悉的团队协作工具. 我们每周都会进行1次以上的 weekly meeting in our  bubble. 迄今为止, 我们一共召开了8次weekly meeting , 我们会在meeting中讨论以下事项:

1. 功能的优先级变动

2. 需要调整或者重新设计的area

3. 新特性的介绍

4. 非常困难的技术问题

   

   Microsoft Teams is a team collaboration tool that we are all familiar with. We have weekly meeting in our bubble more than once a week. So far, we have held a total of 8 weekly meetings, and we will discuss the following matters in the meeting:

   1. Priority changes of functions

   2. features that need to be adjusted or redesigned

   3. Introduction of new features

   4.  Difficult technical problems

   

<img src="images/Sprints%20&%20Project%20Management/time.gif" style="zoom:67%;" />

##### 2.Quick chat and summary

Wechat 是一个非常受欢迎的聊天软件. 他也是我们团队成员日常使用的聊天工具, 因此我们都会及时看到Wechat通知.我们创建了有5个人的Wechat group. 我们会在这里讨论一些临时出现的问题或者发布开会通知. 同时当我们每个人完成child items时, 都会在我们的wechat group 里发布summary.

Wechat is a very popular chat software. It is also a daily chat tool used by our team members, so we will see wechat notice in time. We have created a wechat group with 5 people. We  discussed some temporary problems or issue meeting notices. And when we completes the child items, we will publish the summary in our wechat group.

<img src="images/Sprints%20&%20Project%20Management/wechat.gif" style="zoom:80%;" />

##### 3.Personal vedio chat

我们在Wechat group中常常会遇到通过文字描述不清楚的情况, 例如api的部署和前后端的数据传递. 这时我们在Microsoft  Teams 中进行veido chat. 我们通常会在Desk 13中发起会议或者在聊天栏中呼叫其他成员.  投射屏幕和语音沟通是我们最喜欢的解决问题的方式.

In wechat group, we often encounter unclear descriptions, such as API deployment and data transfer between  front end and back end. At this time, we would conduct veido chat in Microsoft teams. We usually initiate meetings in desk 13 or call other members in chat bar. Projection screen and voice communication are our favorite ways to solve problems.



## Team roles and contributions

| Name        | Role                   | Contribution                                                 |
| ----------- | ---------------------- | ------------------------------------------------------------ |
| Wenqing Xie | System Designer, Coder | He designs the framework of the project, including data model, sequence and use case. He takes part in front end development, focusing on authentication and Angular services. He also participate in Docker deployment and unit tests. |
| HaoLong Li  | Designer, Coder        | He focus on the front end. He designed the web page style and developed part of fucntions in front end. More importantly, he drew an amazing dynamic world map in the home page. |
| Wei Wei     | Product Manager        | He is responsible for collecting product information, analyzing product requirements, organizing group meetings, testing project functions and writing product analysis reports |
| Yifan Luo   | Coder, Creative        | He collaborated with group members on the backend realization, which includes User, Receipe and Database, etc. Moreover, he banded with teammates on final report and editted the project video to acquire a better performance. |
|             |                        |                                                              |



## Documentation of sprints

在整个开发周期中, 我们一共进行了5次 sprints, 每次sprint的内容包括4 个方面:

In the whole development cycle, we have carried out five sprints, each of which includes four aspects: 

1. Aims of the sprint

2. Done issues

3. User story
4. Summary and evaluation

Time plan for sprints is as follows:

| Sprinttime                                           | Time           | Content                                                      |
| ---------------------------------------------------- | -------------- | ------------------------------------------------------------ |
| Sprint 1:  The choice of ideas and perparation       | 2021.2.02-2.15 | Aims of the sprint; Done issues; Summary and evaluation      |
| Sprint 2:  Analysis and Planning                     | 2021.2.22-3.8  | Aims of the sprint; Done issues; Summary and evaluation      |
| Sprint 3:  Build front end                           | 2021.3.20-4.8  | Aims of the sprint; Done issues; User story; Summary and evaluation |
| Sprint 4:  Build API and continue to build front end | 2021.4.8-4.12  | Aims of the sprint; Done issues; User story; Summary and evaluation |
| Sprint 5:  Build back end                            | 2021.4.20-5.7  | Aims of the sprint; Done issues; User story; Summary and evaluation |



### Sprint 1:  The choice of ideas and perparation (2021.2.02-2.15)

#### Aims of the sprint

1. 建立我们的团队. 
2. 我们团队根据自己的优势进行分工.
3. 团队中每一个都要提出自己最想做的ideas.
4. 建立github仓库
   1. set up our team

   2. Our team assigned the work according to our own advantages

   3. Everyone in the team  put forward the ideas they want to do most

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

我们建立了属于我们小组的 Github repository 并且开始练习 Github 的指令. 我们一共提出了5个ideas 分别是 : Dish Map, Planting trees , Stock and Fund Diagnose, Postcard  and Exercise. 我们在 weekly meeting 中对 ideas 进行了讨论, 我们分析了ideas的优缺点和将来可能遇到的问题. 经过一个小时的讨论, 我们投票选择 Dish Map 作为我们的 project. 在weekly meeting 中我们也划分了自己的职责.

We created a Github repository belonging to our group and started practicing Github instructions. We proposed 5 ideas: Dish Map, Planting trees, Stock and Fund Diagnose, Postcard and Exercise. We discussed  ideas in the weekly meeting , we analyzed the advantages and disadvantages and possible problems of each idea. After an hour of discussion, we voted to choose Dish Map as our project. In the weekly meeting, we also divided our responsibilities.



### Sprint 2:  Analysis and Planning (2021.2.22-3.8)

#### Aims of the sprint

1. 每个人提出关于Dish Map 的 features

2. 对 features 进行可行性分析

3. 给 features 设定优先级

   

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

In weekly meeting , 我们轮流提出自己的已经准备好的 features . 当每一个 feature 被提出时, 所有的小组成员都会讨论这个 features 的可行性并对它设置优先级. 我们将这些特性划分为 child issues 并加入到 Jira 的 epics中.

In weekly meeting, we took turns to propose our own prepared features. When each feature was proposed, all team members discussed the feasibility of this feature and set its priority. We divided these features into child issues in  Jira's epics.

### Sprint 3:  Build front end (2021.3.20-4.8)

#### Aims of the sprint

1. 建立数据结构
2. 完成 A level child issues in front epics.
3. Establish the data structure
2. Complete A level child issues in front epics.

#### Done issues

|      | Child issues                            |
| ---- | --------------------------------------- |
| 1    | Add model recipe, model Ingredients (A) |
| 2    | Add recipe service module  (A)          |
| 3    | Add recipe and cookbook components (A)  |
| 4    | Added sidenav and toolbar (A)           |
| 5    | Added Material Design components (A)    |
| 6    | Added router                            |



#### User story

| Name     | user story                                                   |
| -------- | ------------------------------------------------------------ |
| Harry    | If there is a cool world map on the homepage, it should looks very good. |
| Ron      | Can I upload my favorite food? I think you need to design user module and upload function. |
| Hermione | It seems that the most basic functions of the front-end have been implemented. But the css style of the app is too rudimentary.  You need to add css styles, and improve the layout of the page on the cookbook page. You may need a grid layout. |



#### Summary and evaluation

在这次 sprint 中, 我们已经设计好了当前需要数据模型. 在前端的UI设计上, 我们采用了 Angular Material UI component library. 利用 angular material design, 我们设计了侧边栏和导航栏. 我们通过recipe.service 来实现各个components 数据的获取. router 也被很好的加入到了页面上. 我们成功的实现了前端的所有 A level 优先级的功能. 现在页面虽然看起不太好, 但已经可以实现基本的功能了.

In this sprint, we have designed the data model that we currently need. In the front end UI design, we adopted the Angular Material UI component library. We designed the sidebar and navigation bar by angular material design . We use recipes service to pass the data in each component. The router is also very well added to the page. We have successfully implemented all the A level priority functions in front end. Although the page does not look good, it can already achieve basic Function now.

### Sprint 4:  Build API and continue to build front end (2021.4.8-4.12)

#### Aims of the sprint

1. Deploy API 
2. complete B level child issues in front epics.
3. Add docker

#### Done issues

|      | Child issues                                               |
| ---- | ---------------------------------------------------------- |
| 1    | Add API framework (A)                                      |
| 2    | Add docker (A)                                             |
| 3    | Add upload component (B)                                   |
| 4    | Add worldmap component (B)                                 |
| 5    | Add css styles and improve layout in current compoents (B) |
| 6    | Add feedback data model (C)                                |
| 7    | Add feedback component (C)                                 |



#### User story

| Name     | user story                                                   |
| -------- | ------------------------------------------------------------ |
| Harry    | 这个地图真棒, 我很满意. 但是为什么不设计成一个路线图呢? 从Brostol出发怎么样?This map is awesome, I am satisfied. But why not design it as a route map? How about starting from Brostol? |
| Ron      | 这个app 越来越好了, 但是我已经想要注册了? 什么? 现在还没有user model ?This app is getting better, I can not wait to register? What? There is no user model yet? |
| Hermione | 我认为你们需要多一些交互的功能, 比如, 用户可以给他们喜欢的菜谱点赞. 你也可以设计一个排行榜来显示最受欢迎的菜谱. I think you need more interactive features, for example, users can add favour to  their favorite recipes. You can also design a ranking to show the most popular recipes |



#### Summary and evaluation

In this sprint, We have implemented all B level features include upload, worldmap and css styles. We used ecarts API and based on geojson standard and designed a dynamic and visual world map . We deployed docker and API framework.

### Sprint 5:  Build back end (2021.4.20-5.7)

#### Aims of the sprint

1. Build MongoDB database;
2. Child issues implementation;
3. Backend and Frontend Intergration



####  Done issues

|      | Child issues                              |
| ---- | ----------------------------------------- |
| 1    | Build MongoDB database(A)                 |
| 2    | Upload receipe (A)                        |
| 3    | Search receipe by location or id (A)      |
| 4    | User sign in, log in and verification (A) |
| 5    | Add a receipe as favourite by user (A)    |
| 6    | Add a receipe as completed by user (A)    |
| 7    | Deploy docker (B)                         |
| 8    | Deploy cloud storage (B)                  |



#### User story

| Name     | user story                                                   |
| -------- | ------------------------------------------------------------ |
| Harry    | Your webapp looks great, but why I can't upload my own recipe? I mean, the website content seems like static. |
| Ron      | The user interaction is so cool! But I'm afraid that my personal account and password is not safe. Maybe you guys can use token for user account certification? |
| Hermione | I'm planning to take a international graduation travel, and want to prepare so cuisine culture. Can I search the recipes by theie locations? |

####  

#### Summary and evaluation

In this sprint, we first built a database with refining relatively data structure, such as User and Recipe, to reach the goal of persistence storage and decoupling from front end. Moreover, for the purpose of better usability and accessibility, we both connect the database by the means of Docker and Cloud Storage.

Also, we wrote the server code to receive and process the form results from the front end API. More specifically, we realize the following aspects: First, user account management, such as sign in, log in/out, user token validation. Secondlly, we build the receipe service, including but not limited to: recepie infomation upload, searching by user or location, ranking by favourite amount , comments and feedback, favourite and complete by other users, etc.

With all the works above, we can share our receipe ideas with friends in worldwide, study and follow receipes that uploaded from any countries, and interact with other users by **favourite** or **complete** function.

## Team use of Git

Github 是我们的项目中最重要的工具. 通过Github, 我们能创建仓库, 创建新的分支, 快速的获取最新的版本 也可以通过revert 操作来debug.  

Github is the most important tool in our project. we can create repository, create new branches, quickly get the latest version  and debug through revert operations through Github.

#### Create our repository

Wenqing Xie create the  repository of our project. Other people were invited to this repository and became contributers.

#### Branch management

We realized the importance of branch management from the beginning. We created a total of 8 branches.



![](images/Sprints%20&%20Project%20Management/branch.png)

| Branch     | detail                                                       |
| ---------- | ------------------------------------------------------------ |
| main       | There is the final version of the project in the main branch. We ensure that the most complete and runnable project is saved in the main branch. |
| dev        | The latest version in the front end and the latest version in the back end will merge in the dev branch, we will test in the dev branch, and finally submit to the main branch |
| front      | The branch used for front end development.                   |
| backend    | The branch used for back end development, the api is also deployed here. |
| backnew    | Another branch of back-end , finally will  merge into backend |
| back-user  | Branch  for User authentification                            |
| front-test | Branch  for testing in front end                             |
| readme     | Branch  for document                                         |

#### Git clone and visitor

![](images/Sprints%20&%20Project%20Management/visitor.bmp)

![](images/Sprints%20&%20Project%20Management/clone.bmp)

#### Network graph

