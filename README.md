## I did it ©

the specs of this project is available into the docs folder 

to test this application 
* clone this repo
* in first configure the .env file into the api folder with your database config 
* open your terminal where the repo is stored and write these line to install the dependencies and run the server
```properties
cd angular
npm i
npm start
```

* do the same for the api but you have to init the database first with these following lines
```properties
cd ../API
composer require
symfony console doctrine:database:create
symfony console doctrine:migration:migrate
symfony serve
```
* and now you just have to open your navigator and go to the localhost url of angular http://localhost:4200

* please open the website in adaptive mobile view with your navigator because responsive view is not yet available. 

Some update will come soon !