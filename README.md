# Stolen Bike Cases - (Node.js)
![JOIN Stolen Bike Cases](https://github.com/join-com/coding-challenge-backend-nodejs/raw/master/illustration.png)

## Context
Stolen bikes are a typical problem in Berlin. The Police want to be more efficient in resolving stolen bike cases. They decided to build a software that can automate their processes — the software that you're going to develop. 

## Requirements
- [x] Bike owners can report a stolen bike.
- [x] A bike can have multiple characteristics: license number, color, type, full name of the owner, date, and description of the theft.
- [x] Police have multiple departments that are responsible for stolen bikes. 
- [x] A department can have some amount of police officers who can work on stolen bike cases.
- [x] The Police can scale their number of departments, and can increase the number of police officers per department.
- [x] Each police officer should be able to search bikes by different characteristics in a database and see which department is responsible for a stolen bike case.
- [x] New stolen bike cases should be automatically assigned to any free police officer in any department.  
- [x] A police officer can only handle one stolen bike case at a time. 
- [x] When the Police find a bike, the case is marked as resolved and the responsible police officer becomes available to take a new stolen bike case. 
- [x] The system should be able to assign unassigned stolen bike cases automatically when a police officer becomes available.

## Built With
- Node.js
- Express
- Sequelize(Postgresql)
- Jest with Supertest for unit testing and coverage
- Typescript
- Hosted with Heroku


## Dependency Installation

```bash
$ yarn 
```
## Running the app

```bash
# build app
$ yarn build

# start app
$ yarn start

```
## Testing the app

```bash
# unit tests with coverage
$ yarn test

```

## Deployment
Bike-Stolen-Case API deployed to Heroku: 
https://stoken-bike-case.herokuapp.com/


## Api Docs
Api Docs for Bike-Stolen-Case App:
https://stoken-bike-case.herokuapp.com/api/v1/docs/
