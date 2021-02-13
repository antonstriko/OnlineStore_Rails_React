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


