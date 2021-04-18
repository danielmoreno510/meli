# Mercado Libre Aplication

This project was developed with react Js for the [front-end](https://github.com/danielmoreno510/meli/tree/master/meli-front) and nodeJs for the [back-end](https://github.com/danielmoreno510/meli/tree/master/meli-back)

![alt text](https://raw.githubusercontent.com/danielmoreno510/meli/master/assets/images/diagram.png)

## Run the project

### Back-end

#### Run:
- `npm install`
- `npm run start`
The project will be executed in: http://localhost:4000/

<br />

### Front-end

#### Run:
- `npm install`
- `npm start`
The project will be executed in: http://localhost:3000/


#### To run lint:
- `npm run lint`

#### To run the unit tests:
- `npm run test -- --watchAll`

#### To run the unit coverage:
- `npm run test -- --collect-coverage --watchAll`

To see the coverage, run the index.html file found in: `coverage/lcov-report/`


![alt text](https://raw.githubusercontent.com/danielmoreno510/meli/master/assets/images/coverage.png)


## Continuous integration (CI)
This project has continuous integration through `GitHub Actions`, this is executed when push is executed on the master branch

### Pipelines

#### Front-end:
- `test`
- `build`
- `publish`

#### Back-end:
- `test`
- `publish`

You can see the execution of the pipelines [here](https://github.com/danielmoreno510/meli/actions)

You can also see the npm packages for the [front-end](https://www.npmjs.com/package/meli-front) or the [back-end](https://www.npmjs.com/package/meli-front)


**If you want to run continuous integration remember to change version of each project in package.json file**

<br />

![alt text](https://raw.githubusercontent.com/danielmoreno510/meli/master/assets/images/pipelines.png)

![alt text](https://raw.githubusercontent.com/danielmoreno510/meli/master/assets/images/npm.png)
