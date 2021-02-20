# ReactRails-OnlineStore - WIP
This application is currently only available to run locally.

The ReactRails-OnlineStore is an E-Commerce site made with React Hooks and Redux for the frontend and Ruby on Rails for the backend. The site employs JsonWebToken Authentication, user sign-up and persisted user login. A user can view and purchase items! A customer can add, increment and remove items from their cart, proceed through the checkout process and place an order that is persisted to the backend. Customers can look at previous orders and their favorite products.

User model has two role: Customer or Store Manager

The Store Manager role has access to the admin dashboard where they can see all products, add products, add stock and all orders in data tables built using Material UI.

Features currently working on:
- customers can add product reviews
- favorite a product
- view order items from previous orders
- integrate GraphQL

First clone this repo and run the following commands:
# Ruby on Rails Backend - Set up and run first at localhost:3000
```
bundle install
rails db:create
rails db:migrate
rails db:seed
rails s
```
The JWT Token on the backend needs a secret phase for the token 
to be encoded/decoded with, please do the following:

### Figaro Config

```bash
$ bundle exec figaro install
```

This creates a commented `backend/config/application.yml` file and adds it to your
`.gitignore`. Add your own secret phrase to this file and you're done with backend setup!

Given the following configuration file:
```yaml
# backend/config/application.yml
# Add configuration values here, as shown below.

jwt_secret: <your Secret Phrase>

```


# React E-Commerce Store Frontend - Set up and run at localhost:3001
First clone this repo and run the following commands:
```
npm install
npm start
```
or 
```
yarn install
yarn start
```
Demo Store Manager Login: 
email: admin@gmail.com
password: 1234

Demo Customer Login:
email: customer@gmail.com
password: 1234

**NOTE: All Endpoints should follow: `http://localhost:3000/api/v1`**
## Endpoints - Users

|  Name     |    Path    | HTTP Verb |         Purpose                     |
| :-------: | :--------: | :-------: | :---------------------------------: |
| Index     | /users     |    GET    | Display all users                   |
| Create.   | /users     |   POST    | Create a user                       |
|  Show     | /users/:id |    GET    | Display a specific user             |
|  Profile  | /profile   |    GET    | Token is used to login user back in |

## Endpoints - Products
|  Name  |     Path      | HTTP Verb |         Purpose         |
| :----: | :-----------: | :-------: | :---------------------: |
| Index  |   /products   |    GET    |  Displays all products  |
| Create |   /products   |   POST    |    Create a product     |
|  Show  | /products/:id |    GET    | Displays single product |
| Update | /products/:id |   PATCH   |  Update single product  |
| Delete | /products/:id |  DELETE   |  Delete single product  |

## Endpoints - Orders

|  Name  |    Path     | HTTP Verb |         Purpose          |
| :----: | :---------: | :-------: | :----------------------: |
| Index  |   /orders   |    GET    |    Display all orders    |
| Create |   /orders   |   POST    |     Create an order      |
| Delete | /orders/:id |  DELETE   | Delete a specific order  |
|  Show  | /orders/:id |    GET    | Display a specific order |

## Endpoints - Favorites

|  Name    |           Path              |  HTTP Verb   |              Purpose               |
| :------: | :-------------------------: | :----------: | :--------------------------------: |
| Index    |   /products/:id/favorites   |    GET       | Displays all favorites for product |
| Create.  |   /products/:id/favorites   |   POST       |   Create a favorite for a product  |
| Delete   | /products/:id/favorites/:id |    DELETE    | Displays single review for product |

## Endpoints - Reviews

|  Name  |           Path            | HTTP Verb |              Purpose               |
| :----: | :-----------------------: | :-------: | :--------------------------------: |
| Index  |   /products/:id/reviews   |    GET    |  Displays all reviews for product  |
| Create |   /products/:id/reviews   |   POST    |   Create a review for a product    |
|  Show  | /products/:id/reviews/:id |    GET    | Displays single review for product |
