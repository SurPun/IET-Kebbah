# Founders & Coders (Tech For Better Project) - IET Kebbah (Immersive Empathy Training)

## Core

- [x] As a user, I would like to have an immersive experience, so I can look at situations from a different perspective to minimise prejudice.

- [x] As a user, I would like to gain an understanding of my potential unconscious bias prior and post training.

- [x] As a user, I would access to more information and resources about the issues the black community face with the policing system.

## Stretch

- [x] As a user, I would like to have to option to contact the product owner and provide feedback of my experience. 
- [x] As a user, I would like to have a more hands-on way to interact with the training programme.

## Getting Started

- Clone the repo and cd into it.
- Run `npm install` to install all the dependencies
- Run `npm run dev` to start the local dev server

Open http://localhost:3000 in your browser.

## Roles

- Scrum facilitator - Suraj
- UX/UI lead - Joe
- DevOps - Manoela
- QA - Abby

##  Quick Introduction

We are building an Immersive Empathy Training programme for trainee police officers. Our programme will guild the user through a course using a series of questions and videos to bring awareness to their potential unconscious bias.

## Testing

We used the Javascript end-to-end testing framework, Cypress.

To run the tests;

- `npm run build`
- `npm run start`
- `npm run cypress`

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.

You can find our site hosted [here](https://iet-kebbah.vercel.app/)

# Project Documentation 

## Introduction

**What are you building?**

We are building an Immersive Empathy Training programme for trainee police officers. Our programme will guild the user through a course using a series of questions and videos to bring awareness to their potential unconscious bias.

**Why are you building it?**

We are building this Immersive Empathy Training programme to address the issues the black community in London face. We hope that after completing this training, the user will better understand the community they are policing.

## Project scope

**What are you NOT building?**

We not building a game. This is not for commercial use. We are not creating the content. We are not designing the logo. We are not creating a VR feature.

All content was proived by the product owner. 

**How did you decide what features were important?**

-   We ran a discovery session with the product owner to understand what problem our users were facing.
-   We conducted a user research session interviewing six people in which we presented the possible features and were open to suggestions too.
-   We then analysed the feedback from the user research and the discovery session to define what features will be included in our website.

## Project plan

**How are you going to structure your sprints?**

We have 3 weeks for building the product:

Week 1 - Design Sprint
 - Definition / Discovery workshop using Miro board
 - Figma Wireframe and prototype for usability testing
 - User Researches
 - Code Planning
 - Techincal Spikes
 - Project Setup

Week 2 - Build Sprint 1

- Completed MVP and basic file structure 

Week 3 - Build Sprint 2

- Styling & Testing

**What order are you going to build in?**

We're focusing on building our MVP first, which means a website that provide immersive training through a series of video and interactive choices with the video. The webiste will also collect users answer via two surveys at the begining and the end of the training and present at the end of the training.

**How did user research inform your plan?**

Following the user research, we found that MVP would have a positive effect on MET in heling to reduce unconscious bias. We decided to implement an audio feature based on the user research to simulate an environment like one trainee Police officers would face in real life.

## Requirement analysis

**How will you ensure your project is accessible to as many users as possible?**

We will design our website and write code follow with A11y projects to make sure our website is accessible to as many users as possible

**Are there any legal or regulatory requirements you should consider?**
If we complete our stretch goal(s) where we would like to create a login system, we will have to consider GDPR.Currently, the website doesn't require any information from the users.


## Project learnings

**Did your team work effectively?**
We believe we did. We pair programmed most of the time, working on a large issue for a whole day. Whenever we had different approaches towards the same problem, we split up, researched and had a go solving the problem separately. Then we reconvened, discussed our progress and picked which solution we wanted to go with.

**What would you do differently next time?**
Some pages have repetitive code, so we would look for oportunities to create reusable components from the start. Styling similar pages was difficult with repetitive code as it is not easy to keep track of changes in one place.

We are currently using setTimeout to the video's progress, we would like optimise this practice. We were unable to do so as we used free resources to host our videos.  

## Research and findings

**What did you find out from user testing?**

We found out that ambient sounds and time restraints would be quite effective in creating a tense feeling while training.

## Project outcomes

**Were your assumptions right or wrong?**
Our approach was to use as much stimuli as possible in order create a tense atmosphere. This was to replicate a real-world situation for police officers. Through the user research this approach was validated. 

## Recommendations and conclusions

**What features would you prioritise to build next?**

VR implementation would be intresting to focus on next, but it would require 360VR video footage.

**Was the project a success?**
We successfuly deliver the basic MVP discussed and agreed with the product owner. If we have more time, we plan to improve the project more for a better user experience.

## Software Development Lifecycle stages

### Analysis

**What might be the intended and unintended consequences of building this product?**

Our products intended to help our users develop a more empathetic approach in their stop and search and raise awareness of own potential prejudice.

The unintended consequences for our product that we acknowledge is that our product may help people reach out to us and share their experoences to get involved. 


### Design

**How did you plan a user experience?**

Initially, we explored as many random ideas as possible, as many already existing solutions as possible. Then we discussed and took inspiration from our findings. We then developed an extensive list of features we would like to include. 
Further from that, we estimated the time needed to complete the full project, and moved on to prioritising the MVP that would satisfy the main goal of the project. This identified main tasks (MVP) and some stretch goals, that were put to the side for a while until the foundation was built.

**What technical decisions did you make?**

Server-render vs client-render vs both
Relational or non-relational or no DB
Self-hosted or platform-as-a-service
Frontend first vs DB first
Did you create a technical specification?

**Review methods of software design with reference to functional/technical specifications and apply a justified approach to software development (K11, S11, S12)**


### Implementation/Build

**How did you ensure your code was good?**

Create logical and maintainable code to deliver project outcomes, explaining their choice of approach. (S1)

**What interesting technical problems did you have to solve?**

Forbidding the user from pausing, rewinding etc. the video during immersive training so it is more like real-life. Also, displaying the options as soon as the video ended. 
Video storage was going to be expensive if the content was uploaded on a website hosting provider. This is due to most companies charging by storage used especially if above given threshold.
Our website is planned as very dinamic and most things had to be programmed to mount and dismount components. This posed a challenge that we weren't initially sure how to go about. Our initial solution as to redirect to a different route.

Outline and apply the rationale and use of algorithms, logic and data structures.

**How did you debug issues that arose?**

Apply structured techniques to problem solving to identify and resolve issues and debug basic flaws in code

### Test

**How did you verify your project worked correctly?**
We unanimously decided to use the Cypress library. Through our previous positive experience and due to it being easy to use, we have all been conviced that it would address the testing need adequately. To be more specific, Cypress allowes end-to-end testing, meaning testing if the user experience is flawless, but also unit testing, meaning the behind the scenes functionality worked as intended.

Identify and create test scenarios which satisfy the project specification.

**Did writing automated tests catch any bugs?**
No Bugs were caught when testing.

Analyse unit testing results and review the outcomes, correcting errors. 

### Deploy

**Where/how did you deploy your application?**

We hosted the website on Vercel. To make use of free storage, we made the decision to upload the training videos on youtube and play those from our website. 

Review and justify their contribution to building, managing and deploying code into the relevant environment in accordance with the project specification.

We deployed to Vercel as soon as we started working on the project. Through this, on every update we had Vercel test for us if the website functionality is in tact. 

**What problems did you encounter during deployment?**

It took some configuration to be able to tie the different technologies together. We had to name the environment variables in a specific way so they worked with NextJS. They still didn't work properly when deployed on Vercel. Luckily, we had encountered similar problems before and managed to solve it faily eisily. During the same deployment, there were other issues with our code, that were not evident straight away. This complicated things, but after reading the errors we realised it was a very simple bug. Some functions were not being used and that was marked as fatal error. 

### Maintain

**Is it easy for someone make changes to the codebase?**

We've received some good feedback on our code from our cohor's code reviews. The code was identified as easy to understand and straight forward.

**Could a new person quickly be onboarded to contribute?** 

Once cloning the repo with the instructions above, another developer should be able to contribute to our project. 
