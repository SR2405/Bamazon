/* Schema for SQL database/table.*/
DROP DATABASE IF EXISTS bamazon;

/* Create database */
CREATE database bamazon;

USE bamazon;

/* Create new table  */
CREATE TABLE products (
    -- item_id (unique id for each product)
item_id INT AUTO_INCREMENT NOT NULL,
-- product_name (Name of product)
product_name VARCHAR (100) NULL,
-- department_name
department_name VARCHAR (100) NULL,
-- price (cost to customer)
price INT NULL,
-- stock_quantity (how much of the product is available in stores)
stock_quantity INT NULL,

PRIMARY KEY (item_id)
);

-- Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).

INSERT INTO products (product_name, department_name, price, stock_quantity) values ('sponge', 'home goods', 2, 19);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('protein bar', 'food', 15, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('nail polish', 'cosmetics', 14, 40);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('water bottle', 'outdoor', 7, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('shampoo', 'cosmetics', 6, 16);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('pillow', 'home goods', 5, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('tent', 'outdoor', 45, 12);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('coconut water', 'food', 22, 3);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('iphone case', 'electronics', 15, 19);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('table', 'home goods', 112, 22);


