# HW11-Express-Note-Taker

## Description
An application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.

## Other Criteria/Features

* The following HTML routes should be created:

  * GET `/notes` - Should return the `notes.html` file.

  * GET `*` - Should return the `index.html` file

* The application should have a `db.json` file on the backend that will be used to store and retrieve notes using the `fs` module.

* The following API routes should be created:

  * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

  * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

  * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. 

## Technologies Used
HTML, CSS, JavaScript, Node.JS, Express

## How to use
* Run ```npm install```
* After installing the node-modules needed for the file, run ```node server.js```

