# Saydet-Alard


## Live demo :tv:  [link](https://saydatalard.herokuapp.com/)

## Problem :memo: 
After more than three quarters of a century have passed since the Nakba and the displacement of Palestinians from their land, the Palestinian generation suffers from a lack of information about Palestinian cities and villages and what is related to them.

--------
## Solution :bulb:

We came up with the idea of collecting information about Palestinian cities and villages, the Palestinian heritage, and the most famous industries and crops that these cities are famous for, and this is in the context of preserving the Palestinian history that the occupier is trying to steal and overturning the facts.

---------------
## User Story  :books: 
>Visitor
* As a visitor, I can Sign up and verify that the email is correct through the verification.
* As a visitor, I can browse the site and see information about Palestinian cities like(this is a city or village, Location, When this city  occupied? The most common places, The Most common Meal, Why is it called by that name?).
* As a visitor, I see the 15 largest cities in Palestine as a link on the main page and I can see more information about them.
* As a visitor, I can see the Cities family's names.
* As a visitor, I can read the stories about these cities.
* As a visitor, I can browse the site in English language or Arabic.
* As a visitor, I can see what Palestine is famous for.
* As a visitor I can see a section of the heritage.
-----------
> User
* As a user, I can log in.
* As a user, I can add a story about this city.
-------------------
> Admin

* As an Admin, I can accept the users' stories by the dashboard to accept add them to the site stories.
* As an Admin, I can add a new city.
--------------------------
## User journey  :open_book:
The visitor will enter the site and will see a Nav bar with an entry box to search for a city in Palestine, He will see a little of the Palestinian heritage and he can go to the city's page and will find a lot of information about it, and he can add a story about city and a new city.

-----
## Prototype
![all project (1)](https://user-images.githubusercontent.com/71079908/138553012-7bd9ebf1-afef-45d9-bdfe-741029940bff.png)

## Database schema: 
![database ](https://user-images.githubusercontent.com/71079908/138549598-36d2ef3f-1813-4740-8078-ee0d4f45c283.png)

------
## Technologies 💻:-
**BackEnd**: Node JS & Express JS.
**FrontEnd**: React JS,Ant design,css.
**Database**: PostgreSQL.

-----------
## How to Launch App Locally
 * clone this repo by typing this command in the terminal:
 ```https://github.com/GSG-G10/saydat-alard.git```
* Run `npm i` to install the packages for the app as general.
* Run `cd client` and `npm i` to install the packages for the client- React Js.
### Database Setup 📋
* Make sure you have installed PostgreSQL and pgcli
```
CREATE DATABASE {database name};
CREATE USER {user name} WITH superuser password {password}
ALTER DATABASE {database name} OWNER TO {user name};
```
* Test DB:
 Do the same as before but make sure to change the names.
* Run the following command in the database pgcli terminal
`\i server/database/config/build.sql` .


### Start the App :-
To start the App Locally you can start the server First then start client-side or vice versa!

To run Server, In your terminal Type:

* `npm run dev` then you should be able to go to [localhost](http://localhost:5000/) 
 To run client-side, In your terminal Type:
* `cd client` => `npm start` then you will be able to run [localhost](http://localhost:3000/) 
Now you can view the app live in the Browser!
------------------
## Team Members :busts_in_silhouette:
* [Nizar Zaqout](https://github.com/Nizar7zak)
* [Reem Shamia](https://github.com/reemsh2000)
* [Nadia Tamimi](https://github.com/NadiaJalalTamimi)
* [Mohammed Rayyes](https://github.com/modrayyes)
