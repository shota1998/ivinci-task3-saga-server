# ivinci-task3-saga-server

Server side program for [ivinci-task3-saga](https://github.com/shota1998/ivinci-task3-saga)

## Usage
1. Set up dynamodb.
```
docker pull amazon/dynamodb-local
docker run -d --name dynamodb -p 8000:8000 amazon/dynamodb-local
```
2. Run this server program.
3. Initialize table of dynamodb.
```
node db_init/table/crateTable.js
node db_init/crud/cratePost.js
```
