<p align="center">
<h1 align="center">TypeScript-API</h1>
  <p align="center">
    A simple TypeScript API
    <br /> 
    </p>
</p>

### Try the Live-Demo Here
[TypeScript-API](https://typescript-api-v1.herokuapp.com)
    
### 🔧**Project Setup**  

This project is a server side project for creating api.
To get a local copy up and running follow these simple example steps.

### Prerequisites
 You need to have pre-installed npm (a Node package manager)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/CHAHATMB/TypeScript-API.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create a ".env" file similar to ".env.sample" and provide your credentials in it 
### Run

1. To run the API
   ```sh
   npm start
   ```
2. To run in Development mode
   ```sh
   npm run dev
   ```

### 💻**Library Used**
Library used in the project:
1. Mongoose
 - Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.
 - WHY I USE - MongoDB is a structure less database but I like working with structure data and with mongoose, it creates Model (schema) which makes it easier to work with, so it looks like you are working with just objects rather than unstructure data.
2. Express
 - Express.js is a free and open-source web application framework for Node.js. It is used for designing and building web applications quickly and easily.
 - WHY I USE - With express we can easily create routers and it is easy to implement. If in future we need to add more functionality to API such as authentication then express can handle it easily with functionality of middleware to authentic users.
3. dotenv
 - Dotenv is a simple way to allow you to create secret keys that your application needs to function and keep them from going public.
 - It require to load '.env' file
4. express-validator
 - I use express validator for validating the request came to api.
 - It check whether all the request field are proper or not.

### ⚡Request & Response Examples

### API Resources

  - GET /users/all
  - POST /users/new
  - GET /meetings/all
  - POST /meetings/new
### GET /users/all

Example: https://typescript-api-v1.herokuapp.com/users/all

Response body:

    [
        {
            "_id":"61bc19c923b28e399c84d1b6",
            "username":"dummyuser1",
            "__v":0
        },{
            "_id":"61bc19c923b28e399c84d1b6",
            "username":"dummyuser2",
            "__v":0
        }
    ]

### POST /users/new

Example: Create – POST  https://typescript-api-v1.herokuapp.com/users/new

Request body:

    {
        "username" : "example_username"
    }
Response body:

    {
            "_id":"61bc19c923b28e399c84d1b6",
            "username":"example_username",
            "__v":0
    }

### GET /meetings/all

Example: https://typescript-api-v1.herokuapp.com/meetings/all

Response body:

    [
        {
            "_id":"61bc2b9535bc773eb4531c9e",
            "uid1":"61bc19df23b28e399c84d1b7",
            "user1":"example-user1",
            "uid2":"61bc1a2923b28e399c84d1b8",
            "user2":"example-user2",
            "date":"2019-01-20T00:00:00.000Z",
            "__v":0
        },
        {
            "_id":"61bc2b9535bc773eb4531c9e",
            "uid1":"61bc19df23b28e399c84d1b7",
            "user1":"example-user12",
            "uid2":"61bc1a2923b28e399c84d1b8",
            "user2":"example-user22",
            "date":"2019-01-20T00:00:00.000Z",
            "__v":0
        }
    ]

### POST /meetings/new

Example: Create – POST  https://typescript-api-v1.herokuapp.com/meetings/new

Request body:

    {
        "uid1":"61bc19df23b28e399c84d1b7",
        "uid2":"61bc1a2923b28e399c84d1b8",
        "date":"2019/01/20",
    }
Response body:

    {
        "_id":"61bc2b9535bc773eb4531c9e",
        "uid1":"61bc19df23b28e399c84d1b7",
        "user1":"example-user12",
        "uid2":"61bc1a2923b28e399c84d1b8",
        "user2":"example-user22",
        "date":"2019-01-20T00:00:00.000Z",
        "__v":0
    }

## License

Distributed under the MIT License. See `LICENSE` for more information.

