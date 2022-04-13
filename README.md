# Recipe App

In this app you can get cooking inspiration by browsing ranom recipes, search for recipes you want to cook and save recipes to custom lists on your own profile for easy access in the future. The goal of this project to allow a user to find and save recipes and if the user is registered they should also be able to save their chosen recipes.

The application is developed in VS Code using Angular and styled with Bootstrap.

## Features

- Get random recipe suggestions.
  On the homepage 6 random recipes will be generated everytime the page is refreshed.
- Search recipes.
  Search functionallity with options to filter the search.
- Registered user.
  Users can register on the site to gain access to create their own lists and save their chosen recipes.

## API Reference

The recipes are fetched from spoonaculars API. I am using the free version which limits the amount of times API calls can be made. If there are no recipies shown in the application chances are that the daily quota of API calls have already been reached. If this happens you can easily sign up to spoonaculars website to generate a new API Key and change it in the code of the project to your own key.

https://spoonacular.com/food-api

The users and lists are called and handled by my own API, see related projects section.

## Usage

### App component

Here you find the navbar and logic to remove token if a user logs out.

### Public component

Acts as the homepage where random recipies are displayed by calling the API with the getRandom() method.
Routing for /home, /login and /register.

#### Login component

Login form that sends a request to my backend API to login the user.

#### Register component

Form to register a user in the application. Sends the request to my backend API.

### Secure component

Sends request to my backend API to get information about the logged in user.

### Recipe component

Handles all services towards spoonaculars API.

- getAll() Fetches recipes when the search feature is used.
- getByID() Fetches one single recipe.
- getBulk() Fetches the recipes that are saved in a custom list.
- getRandom() Fetches 6 random recipes that are displayed on the homepage.

Routing for /search and /recipe-details/:id

#### Search component

Search form to search for recipes and displays the results.

#### Single-page

Displays one single recipe.

### List component

Handle all list-related services towards the backend API.

- viewAll() Fetches all of the users lists.
- store() Creates a new list.
- getByID() Fetches the contents of one list.
- update() Saves new recipes to a list.
- destroy() Deletes a list and it's content.
- delete() Removes a recipe from a list.

Routing for /lists/create, /lists, /lists/:id

#### Create component

Form to create a new list.

#### Index component

Displays all of one users lists.

#### View component

Displays one list and it's content.

## Related

My Backend project for this app

https://github.com/frinica/Recipe-App-BE
