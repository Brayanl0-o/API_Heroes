# Heroes API

This is a simple API developed with Node.js and Express to provide information about heroes.

## Installation Instructions

Clone the repository or download the project files using: git clone <URL of the repository>

Navigate to the project directory using: cd heroesapi
Install the necessary dependencies using: npm install

## Environment Configuration

Make sure to have a .env file in the root directory of the project containing the private URL for the database. You can use the provided .env.example file as a reference to define the required environment variables.

## Server Execution

To start the server, run the following command:

npm run chidori
This will launch the server on port 3010, and you can access the API via http://localhost:3010/.

## Endpoints

GET /: Returns a welcome message indicating that you are connected to the Heroes API.

### Dependencias

• Express: Node.js framework for creating web applications and APIs.
• Mongoose: MongoDB library for Node.js that facilitates database interaction.
• dotenv: Loads environment variables from a .env file.
• cors: Middleware to enable resource access from other domains.

Author: Brayan

License
ISC

This project is a basic implementation of an API for heroes and can be used as a starting point for more complex projects.
