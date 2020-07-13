# SignRequest Events Receiver 
## Server Example (Node.js)

Example of a server to receive Events coming from SignRequest. Lear more about SignRequest event callbacks here: https://signrequest.com/api/v1/docs/#section/Events

This server runs a Postgres container on Docker. Connected to a Database Client (i.e: Postico). 

This Node.js server uses Express and Sequelize as its ORM (Object-Relational Mapping). 

## Installation 

1. Make sure you have Docker and a Database Client installed and configured. 
2. Clone this repository.
3. Run ```npm i``` in your terminal to install the dependencies: 'express', 'body-parser', 'sequelize', 'pg' and 'nodemon' (for development).
4. Set up your Postgres connection in 'db.js'. For example: 5432 for Port and your Postgres' Password. 
5. Set up your preffered Port number in index.js. Default is 4000.
6. Run ```node index.js``` to start the server.

## GET and POST requests:

With this server you can receive callbacks via POST requests. 
You can either open your different callbacks in your Database Client or sending GET requests to /signrequest-event-receiver, the response comes in the JSON format.

## Deployment

You can deploy this server on your preferred host or access it locally with Ngrok (https://ngrok.com/docs), for example. 
