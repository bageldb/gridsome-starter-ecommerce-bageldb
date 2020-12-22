# Ecommerce Starter for BagelDB

This is a starter for Gridsome using [BagelDB](https://bageldb.com/)

new around here? get started with [BagelDB docs](https://docs.bageldb.com/)

### 1. Create a BagelDB project

Get started with BagelDB and create your collections, here is the DB structure used

#### Products `products`

| Field Name  | Slug        | Type      | Options        |
| ----------- | ----------- | --------- | -------------- |
| Title       | title       | PlainText | primary:true   |
| Image       | image       | Image     |                |
| Price       | price       | Number    |                |
| Description | description | RichText  |                |
| Categories  | categories  | Reference | ref:categories |
| Slug        | slug        | PlainText |                |

#### Categories `categories`

| Field Name | Slug  | Type      | Options      |
| ---------- | ----- | --------- | ------------ |
| Title      | title | PlainText | primary:true |

#### Orders `orders`

| Field Name | Slug     | Type             | Options      |
| ---------- | -------- | ---------------- | ------------ |
| Email      | email    | PlainText        | primary:true |
| Name       | name     | PlainText        |              |
| Address    | address  | RichText         |              |
| Products   | products | NestedCollection |              |

#### Orders.Products `orders.products`

_Nested under Orders_

| Field Name    | Slug         | Type      | Options      |
| ------------- | ------------ | --------- | ------------ |
| Product Title | productTitle | PlainText | primary:true |
| Price         | price        | Number    |              |
| Product       | product      | Reference | ref:products |

#### Newsletter Signups `newsletterSignups`

| Field Name | Slug  | Type      | Options      |
| ---------- | ----- | --------- | ------------ |
| Email      | email | PlainText | primary:true |
| Name       | name  | PlainText |              |

### 2. Create 2 BagelDB Tokens

save tokens as environment variables `.env`

1. `BAGEL_TOKEN` with power read access to all collections
2. `GRIDSOME_POST_TOKEN` with write access only to: [Newsletter Signups](#newsletter-signups-newslettersignups) and [Orders](#orders-orders)

### 3. Install the Gridsome CLI tool if you don't have

`npm install --global @gridsome/cli`

### 4. Run the Gridsome project

1. `npm i` to install the dependancies
2. `gridsome develop` to start a local dev server
3. Happy coding 🎉🙌
