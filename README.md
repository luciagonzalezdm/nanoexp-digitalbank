# nanoexp-digitalbank


## Brief introduccion
This readme file mentions the requirements and establishes a guide for running those tests.
Getting Started:


## Prerequisites
1. Install Java SDK
2. Install node.js
3. Node Package Manager (npm)

4. Install Visual Studio Code IDE
- wdio.config
- npm install @wdio/cli


5. Install Docker Desktop

You should clone this repository and on your desktop
After cloning digitalbank-gen-one repository, it is necessary to lift the services as follows:

 -cd digitalbank-gen-one
 
 -cd deploy/docker-compose
 
 -docker-compose -f docker-compose-postgres.yml up
 

Now is possible to access the application through this link: http://localhost:8080/bank


## Executing Tests
Once the folder of this repository is opened in Visual Studio, execute **"npm run test"**
