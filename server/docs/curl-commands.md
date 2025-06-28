# Sample cURL Commands for Todo API

## Health Check
curl -X GET http://localhost:3000/health

## Get All Tasks
curl -X GET http://localhost:3000/api/tasks
-H "Content-Type: application/json"

## Create a New Task
curl -X POST http://localhost:3000/api/tasks
-H "Content-Type: application/json"
-d '{
"title": "Buy groceries",
"description": "Buy milk, eggs, and bread"
}'

## Create Task with Only Title
curl -X POST http://localhost:3000/api/tasks
-H "Content-Type: application/json"
-d '{
"title": "Complete project"
}'

## Update a Task
curl -X PUT http://localhost:3000/api/tasks/1
-H "Content-Type: application/json"
-d '{
"title": "Buy groceries - Updated",
"description": "Buy milk, eggs, bread, and cheese",
"completed": true
}'


## Delete a Task
curl -X DELETE http://localhost:3000/api/tasks/1
-H "Content-Type: application/json"

## Invalid Requests (for testing edge cases)

### Create task without title
curl -X POST http://localhost:3000/api/tasks
-H "Content-Type: application/json"
-d '{
"description": "This should fail"
}'

### Update non-existent task
curl -X PUT http://localhost:3000/api/tasks/999
-H "Content-Type: application/json"
-d '{
"title": "This task does not exist"
}'

### Delete non-existent task
curl -X DELETE http://localhost:3000/api/tasks/999
-H "Content-Type: application/json"

undefined