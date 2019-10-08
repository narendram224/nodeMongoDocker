# nodeMongoDocker
This is the project for creating node mongo Docker image and running automaticaly when code is change
Heyy Hii users,
This is my firast repo that I build a simple nodejs express app with mongodb as database and create a docker image so that it will work 
for futher use ..
# Lets see how to create nodejs express and mongodb image using docker nad docker-compose
# folder Structure
  |-- data<br>
  |--.gitignnore<br>
  |--.dockerignore<br>
  |--docker-compose-debug.yml<br>
  |--docker-compose.yml<br>
  |--Dockerfile<br>
  |--package.lock.json<br>
  |--package.json<br>
  |--server.js<br>
  
  <h5>note</h5>:If u want to create docker file autmaticaly use docker extension in vs code editor.
	<br>
<h3>Step1</h3>
<p>create package.json file any folder you want .
If you clone the project the it will goes into nodemongodocker folder.
Is is also my folder in this projects.</p><br>
<p>Enter the command in terminal</p>
<code>npm init --yes</code>
<br>
<p>This will create package.json file</p>
<h3>Step 2</h3>
<p>install some packages</p>
<code>npm install --save-dev nodemon</code><br>
<p>this command install nodemon in development mode</p>
<code>npm install --save express body-parser mongoose</code><br>
<p>Now the package json file look like</p>
<p>
{
  "name": "nodemongodocker",<br>
  "version": "1.0.0", <br>
  "description": "this is the project that we build docker img of mongodb and nodejs image",<br>
  "main": "server.js",<br>
  "scripts": {<br>
    "test": "echo \"Error: no test specified\" && exit 1",<br>
    "start": "node server.js",<br>
    "dev":"nodemon server"<br>
  },<br>
  "author": "shbuh",<br>
  "license": "ISC",<br>
  "devDependencies": {<br>
    "nodemon": "^1.19.3"<br>
  },<br>
  "dependencies": {<br>
    "body-parser": "^1.19.0",<br>
    "express": "^4.17.1",<br>
    "mongoose": "^5.7.3"<br>
  }
}

</p>
<h3>Step 3</h3>
<p>create server.js file and write the code</p><br>
<h3>Step 4</h3>
<p>create docker file and put code from my nodeMongoDocker repo</p>
<h4>step 5<h4>
<p> create docker-compose file and put code by nodeMongoDocker repo</p>
#how to run the project
<code>docker-compose build</code>
<p>This command build file If the command successfully run following command</p>
<code>docker-compose up</code>
<p>After run you will see the file some log</p>
<p>server is running on port 3000</p>
<p>database is connected successfully</p>
<p>Now check localhost:3000 in browser</p>
