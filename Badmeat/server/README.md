**To run this REST API (until we have a public host link)**

_To Download MongoDB._

https://www.mongodb.com/download-center?jmp=nav#community

_If you want a GUI..._

Robomongo cannot be beat, and it's pretty easy to set up.

https://robomongo.org/

_To run the server locally._

1. Open up Robomongo and make a new connection.

2. Wherever you installed mongo, make a folder called 'badmeat-data'in your root directory

3. ```cd mongo/bin and do ./mongod --dbpath ~/badmeat-data``` this will start the server

4. Hop into a new terminal session keeping the other open and navigate to the 'server' directory.

5.  ```run "node server.js"``` and access the api via local host (3000 for now)

6. [Download Postman](https://www.getpostman.com/) to interact with the API.

