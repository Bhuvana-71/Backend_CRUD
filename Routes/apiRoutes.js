//=================Create schema=================//

//=================Create schema FOR USERS=================//
/**
 * @swagger
 * components:
 *  schemas:
 *      Users:
 *          type: object
 *          required:
 *              -u_name
 *              -u_pwd
 *          properties:
 *              u_id:
 *                  type: number
 *                  description : User id
 *              u_name:
 *                  type: string
 *                  description:  User name
 *              
 *              u_token:
 *                  type: String
 *                  description: Autentication Key
 *          example:
 *                  u_name: bhuvana
 *                  u_id:   two
 *                  u_pwd:  abcd@123
 */
//=================Create schema for Cart=================//
/**
 * @swagger
 * components:
 *  schemas:
 *      Cart:
 *          type: object
 *          required:
 *              -p_id
 *              -u_id
 *          properties:
 *              p_id:
 *                  type: number
 *                  description : product id
 *              u_id:
 *                  type: number
 *                  description:  User id
 *              
 *              u_token:
 *                  type: String
 *                  description: Autentication Key
 *              p_img:
 *                  type: string
 *                  description : product image
 *              p_cost:
 *                  type: number
 *                  description : product cost
 *          example:
 *                   p_id :  20
 *                   u_id :  2
 *                   p_img :  https://www2.hm.com/en_in/women/shop-by-product/jeans.html
 *                   p_cost :  5000
 */
//=================Create schema FOR PRODUCTS =================//
/**
 * @swagger
 * components:
 *  schemas:
 *      Products:
 *          type: object
 *          required:
 *              -p_id
 *              -p_name
 *              -p_category
 *          properties:
 *              p_id:
 *                  type: number
 *                  description : Product id
 *              p_name:
 *                  type: string
 *                  description:  Product name
 *              
 *              p_cost:
 *                  type: number
 *                  description: Product Cost
 *              p_category:
 *                  type: string
 *                  description:  Product Category
 *              
 *              p_img:
 *                  type: number
 *                  description: Product Image
 *              p_desc:
 *                  type: string
 *                  description: Product Description
 *              
 *              
 *          example:
 *                   p_id : 17
 *                   p_name :  H&M jeans
 *                   p_cost : 1400
 *                   p_category :  mens jeans
 *                   p_img :  https://www2.hm.com/en_in/women/shop-by-product/jeans.html
 *                   p_desc :  H&M jeans
 */
/**
 * @swagger
 * tags:
 *  name: Products
 *  description: "Products management api"
 */
//=================tags -> grouping under 'Products'=================//
//================= GET REQUEST FROM WHERE WE GET ALL PRODUCTS =================//
/**
 * @swagger
 * /fetch:
 *  get:
 *      summary: Returns list of all products
 *      tags: [Products]
 *      responses:
 *          '200':
 *              description: List of all Products
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Products'
 */
//================= POST =================//
/**
 * @swagger
 * /insert:
 *  post:
 *      summary: Create a new product
 *      tags: [Products]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                       $ref: '#/components/schemas/Products'
 *      responses:
 *          '200':
 *              description: "Product created"
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Products'
 *          '500':
 *              description: "Server Error"
 */
//================= PUT =================//
/**
 * @swagger
 * /update:
 *  put:
 *      summary: "Update existing Product by p_id"
 *      tags: [Products]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Products'    
 *      responses:
 *          '200':
 *              description: "Product updated"
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Products'
 *          '500':
 *              description: "Server Error"
 */
//================= DELETE =================//
/**
 * @swagger
 *  /delete:
 *     delete:
 *      summary: "Delete existing Product by p_id"
 *      tags: [Products]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                          $ref: '#/components/schemas/Product'
 *                      
 *          
 *      responses:
 *          '200':
 *              description: "Product deleted"
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Product'    
 *          '500':
 *              description: "Server Error"
 */
/**
 * @swagger
 * tags:
 *  name: Users
 *  description: "Users management api"
 */

//=================tags -> grouping under 'Users'=================//
//================= GET =================//
/**
 * @swagger
 * /fetch/UsersDetails:
 *  get:
 *      summary: Returns list of all Users
 *      tags: [Users]
 *      responses:
 *          '200':
 *              description: List of all Users
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Users'
 */
//================= POST =================//
/**
 * @swagger
 * /insert/createUser:
 *  post:
 *      summary: Create a new User
 *      tags: [Users]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                       $ref: '#/components/schemas/Users'
 *      responses:
 *          '200':
 *              description: "User created"
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Users'
 *          '500':
 *              description: "Server Error"
 */
//================= PUT =================//
/**
 * @swagger
 * /update/updateUser:
 *  put:
 *      summary: "Update existing User by u_id"
 *      tags: [Users]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Users'    
 *      responses:
 *          '200':
 *              description: "User details updated"
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Users'
 *          '500':
 *              description: "Server Error"
 */
//================= DELETE =================//
/**
 * @swagger
 *  /delete/deleteUser:
 *     delete:
 *      summary: "Delete existing User by u_id"
 *      tags: [Users]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                          $ref: '#/components/schemas/Users'
 *                      
 *          
 *      responses:
 *          '200':
 *              description: "User deleted"
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Users'    
 *          '500':
 *              description: "Server Error"
 */
/**
 * @swagger
 * tags:
 *  name: Cart
 *  description: "Cart management api"
 */
//================= grouping under 'Cart'=================//
//================= GET =================//
/**
 * @swagger
 * /fetch/cartFetch:
 *  get:
 *      summary: Returns list of all products In Cart
 *      tags: [Cart]
 *      responses:
 *          '200':
 *              description: List of all Products in Cart
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Cart'
 */
//================= POST =================//
/**
 * @swagger
 * /insert/cartInsert:
 *  post:
 *      summary: Inserting a new product in Cart
 *      tags: [Cart]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                       $ref: '#/components/schemas/Cart'
 *      responses:
 *          '200':
 *              description: "Product created"
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Cart'
 *          '500':
 *              description: "Server Error"
 */
//================= PUT =================//
/**
 * @swagger
 * /update/cartUpdate:
 *  put:
 *      summary: "Update Cart By Product by p_id"
 *      tags: [Cart]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Cart'    
 *      responses:
 *          '200':
 *              description: "Product updated"
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Products'
 *          '500':
 *              description: "Server Error"
 */
//================= DELETE =================//
/**
 * @swagger
 *  /delete/cartDelete:
 *     delete:
 *      summary: "Delete a Product in Cart "
 *      tags: [Cart]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                          $ref: '#/components/schemas/Cart'
 *                      
 *          
 *      responses:
 *          '200':
 *              description: "Product deleted"
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Cart'    
 *          '500':
 *              description: "Server Error"
 */


const router = require('express').Router()
let fetch = require('../fetch/fetch')
let insert = require('../insert/insert')
let update = require('../update/update')
let remov = require('../delete/delete')



router.use('/fetch', fetch)
router.use('/insert', insert)
router.use('/update', update)
router.use('/delete', remov)
module.exports = router

