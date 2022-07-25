
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
 We do not evaluate on completeness but rather on correctness, quality and 
### Data
 Generate random combinations of product and stores to build up the orders. For eg, `10 product names * 10 stores = a lot of combinations`
 

To run this app: $ npm run start
