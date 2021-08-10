## I did it ©

the specs of this project is available into the docs folder 

to test this application 
* clone this repo
* ⚠ configure the .env file into the api folder with your database config
* open your terminal where the repo is stored and write these commande line to install the dependencies
```shell
cd angular
npm i
```

* do the same for the api but you have to create the migrations folder and init the database first with these following lines
```shell
cd ../API
mkdir migrations
composer install
symfony console doctrine:database:create
symfony console make:migration
symfony console doctrine:migration:migrate
```
* and finally start the API and Angular server
```shell
symfony serve -d
cd ../angular
npm start
```

* if you want to display the symfony logs use "symfony serve" instead but you have to run the next lines into an other console 

* now you just have to open your navigator and go to the localhost url of angular http://localhost:4200

* 💥Quick start :
    * copy past all these commande line into your console on the path blog-diy-angular

```shell
cd angular
npm i
cd ../API
mkdir migrations
composer install
symfony console doctrine:database:create
symfony console make:migration
symfony console doctrine:migration:migrate
symfony serve -d
cd ../angular
npm start
```

* please open the website in adaptive mobile view with your navigator because responsive view is not yet available. 

Some update will come soon !