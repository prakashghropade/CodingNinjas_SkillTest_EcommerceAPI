***Install dependencies:

Run the following command to install the required dependencies:

npm install


Set up the database:

Make sure MongoDB is running on your local system or connect it to your preferred cloud database (like MongoDB Atlas).

Set up environment variables:

Create a .env file in the root directory and add the following:

DB =mongodb://localhost:27017/ecommerceDB  or You can use your remote Database

API Documentation
Base URL: http://localhost:4000
The following are the key API endpoints available:

Create a product

POST /products

Request body example:
json
Copy code
{
  "name": "Product Name",
  "quantity" : 400
}


Get all products
GET /products

Create the Product
POST /products/create

Delete the Product
DELETE /products/:id/update_quantity

Update the quantity of the  product
PUT /products/:id/update_quantity


