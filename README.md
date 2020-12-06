![Image of Snackpass](https://www.snackpass.co/static/media/logo_round_2.d74f1dd2.png)

# Snackpass Full Stack Code Challenge
Welcome to the Snackpass Challenge. We really appreciate your time to participate. 

## The Challenge

Assume the customers around a campus order 5000 orders a day from 50 local restaurants. Each order contains one or multiple products. For eg, `2 burritos, a soda, and a side of chips`.

1. Design a full stack application which returns an infinite-scrolling list of trending products to the user.
2. A product can be qualified as trending if it is purchased at least once in last 48 hours
3. Each product should be tagged with two tags:
    * a recent purchase tag: `5 purchased recently`
    * a time tag `ordered 3 min ago`
4. Use a heuristic to determine which trending products gets returned higher. Base heuristic on both recency and number of recent purchases.

## Requirements
1. Implement a Full stack solution including web server, persistent storage and associated code
2. Please allocate 2-4 hours to design and implement. If you cannot finish it, you can use pseudocode for parts of web application. For eg, `assume this service has the following API`.
3. Please submit with in 72 hours from the time you accept invitation. 

## Practices
### Quality of code 
 Please use best practices for writing code and publish to this repo. 
### Evaluation
 We do not evaluate on completeness but rather on correctness, quality and approaches.
### Q & A
 Please create an issue and tag @shrimuthu, @aduca98 or @seankwalker for questions or review.
### Data
 Generate random combinations of product and stores to build up the orders. For eg, `10 product names * 10 stores = a lot of combinations`
 
## Solution
I decided to use an ExpressJS/NodeJS API that serves up one endpoint called GET /orders. This endpoint simply calls a controller, which calls a service. In the service, it generates, 10 stores, 10 products per store, and then randomly generates orders of 250 combinations, generating the item of products and qty per order. I used Async/Await which is part of the so-called ECMAScript 2017 over promises, I feel it's cleaner and less code to write. This feature acts as syntactic sugar on top of promises, making asynchronous code easier to write and to read afterward. 

For the front-end, I generated a new create-react-app. I modified the App.js component to do the work of the infinite-scrolling list. I used the built-in fetch method to call the API to get the data inside useEffect, I normally like to use Axios but since this was basic; I thought I would use everything built into ReactJS. I set a master list of data after, applying a filter for the past 48 hours, then I grouped everything by product name and adding keeping a running total of qty purchased, finally sorting by qty purchased. I used useRef to keep a reference to the scrolling div and useState to keep track of the sorted list and sublist to display on the screen. The sub-list keeps getting updated as the div scroll down, it increasing the current page and slices the sorted list into the sub list. 

I insist on clean code, I used Husky & Prettier for formatting on save

To install deps for this application, $ npm install

To run this app: $ npm run start
