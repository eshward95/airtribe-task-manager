# airtribe-task-manager

The API allows users to create, view, update, and delete tasks. It also includes filtering and sorting for the GET /tasks endpoint, and an endpoint to retrieve tasks based on priority level.

## Installation

To run application, you'll need to have Node.js installed on your machine.

1. Clone the repository: `git clone https://github.com/eshward95/airtribe-task-manager.git`
2. Install the dependencies: `npm install`
3. Start the server: `npm start`

The application should now be running at [http://localhost:3001](http://localhost:3001).

## Usage

To use application, you can navigate to [http://localhost:3001](http://localhost:3001) in your web browser.
We are using a in-memory DB which is created inside the data folder and and `task.json` file is creaed

The application allows you to perform the following operations:

- Create a new task
- View a list of all tasks
- View details of a specific task
- Update a task
- Delete a task
- Filter tasks based on completion status
- Sort tasks by creation date
- Retrieve tasks based on priority level

## Folder Structure
- `controller/.` - The file that defines the functions for handling HTTP requests and responses for tasks.
- `routes/` - The folder that contains the route files for the project.
- `helpers/` - A simple helper functions needed across the project.
- `data/`- A in-memory DB using files.


## API Endpoints

- `GET /tasks`: Retrieve all tasks.
- `GET /tasks/:id`: Retrieve a single task by its ID.
- `GET /tasks?sortBy=createdAt`: Sort tasks by creation time.
- `GET /tasks?flag=true`: Filter tasks by completion status.
- `GET /tasks/priority/:level`: Retrieve tasks based on priority level [low,medium,high].
- `POST /tasks`: Create a new task.
- `PUT /tasks/:id`: Update an existing task by its ID.
- `DELETE /tasks/:id`: Delete a task by its ID.

Tasks have the following attributes:

- `title`: The title of the task (required).
- `description`: The description of the task (required).
- `flag`: A flag for completion status (boolean value, default is false).
- `priority`: The priority level of the task (string value, can be "low", "medium", or "high").

Example JSON request for creating a task
```
{
    "title": "Airtribe assignment",
    "description": "Complete task manager API",
    "flag": true,
    "priority": "High"
}
```
API collection https://documenter.getpostman.com/view/18258117/2s93z6dPvA

## Error Handling

The API implements proper error handling for invalid requests. If an invalid request is made, the API will return an error response with a status code and an error message.

## Input Validation

Input validation is implemented for task creation and updates. The API validates that the title and description are not empty, and that the completion status is a boolean value.

## Testing

The API can be tested using Postman or Curl to ensure it works as expected. Use the following endpoints:

- `GET /tasks`: Retrieve all tasks.
- `GET /tasks/:id`: Retrieve a single task by its ID.
- `GET /tasks?sortBy=createdAt`: Sort tasks by creation time.
- `GET /tasks?flag=true`: Filter tasks by completion status.
- `GET /tasks/priority/:level`: Retrieve tasks based on priority level [low,medium,high].
- `POST /tasks`: Create a new task.
- `PUT /tasks/:id`: Update an existing task by its ID.
- `DELETE /tasks/:id`: Delete a task by its ID.

