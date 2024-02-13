//import modules
const express = require('express')
let mongodb = require('mongodb')
//import url
let url = require('../url')
//create mongoclient
let mcl = mongodb.MongoClient
//create router instance
let router = express.Router()
//CREATING REST API

//INSERTING PRODUCTS INTO THE PRODUCT DATABASE------>
router.post("/", (req, res) => {

    //taking the input from body
    let obj = {
        "p_id": req.body.p_id,
        "p_name": req.body.p_name,
        "p_cost": req.body.p_cost
    }

    //connect to mongodb
    mcl.connect(url, (err, conn) => {
        if (err)
            console.log('Error in connection')
        else {
            let db = conn.db('mbdshopping')
            //WE ARE INSERTING THE OBJECT
            db.collection('products').insertOne(obj, (err) => {
                if (err)
                    res.send({ 'insert': 'error' })
                else {
                    console.log("Data inserted")
                    res.json({ 'insert': 'success' })
                    conn.close()
                }
            
            })
        }
    })
})

//CREATE USER USING POST PARAMETER BODY------>

router.post("/createUser",(req,res)=>{
     //taking the input from body
    let obj = {
        "u_id":req.body.u_id,
        "u_name":req.body.u_name,
        "u_pwd":req.body.u_pwd,
        "u_email":req.body.u_email,
        "u_address":req.body.u_address,
        "u_contact":req.body.u_contact,
    }
    //connect to mongodb
    mcl.connect(url,(err,conn)=>{
        if(err)console.log('Error in connection:- ',err)
        else{
            let db = conn.db('mbdshopping')                                       //connection vkcmalls
            db.collection('Users').insertOne(obj, (err) => {              // inserting obj to the vkcmalls
                if (err)
                    res.send({ 'insert': 'error' })
                else {
                    console.log("Data inserted")
                    res.json({ 'insert': 'success' })
                    conn.close()
                }
            })
        }
    })
})


// INSERTING THE ITEMS INTO THE CART BASED ON USER NAME AND TOKEN----->
   router.post("/cartInsert",(req,res)=>{
    //taking the input from body   
    let obj = {
                "p_id":req.body.p_id,
                "p_cost":req.body.p_cost,
                "qty":1,
                "p_img":req.body.p_img,
                "u_name":req.body.u_name
            }
            let u_name = req.body.u_name;
            let my_token = req.body.u_token;
            //CONNNECTING TO MONGODB
            mcl.connect(url,(err,conn)=>{
                if(err)console.log('Error in connection:- ',err)
                else{
                    let db = conn.db('mbdshopping')  
                    //IF THIS PARTICULAR USER IS AUTHORISED THEN ONLY IT WILL INSERT PRODUCT INTO THE CART
                    db.collection('Users').find({"u_name":u_name ,"u_token":my_token }).toArray((err,array)=>{
                        if (array.length != 0) {  
                            db.collection('cart').insertOne(obj, (err) => {              
                                if (err)
                                    res.send({ 'insert': 'error' })
                                else {
                                    console.log("Data inserted")
                                    res.json({ 'insert': 'success' })
                                    conn.close()
                                }
                            })
                            
                        }
                        else
                            res.send({ 'auth': 'failed' })
                    })                                    
                }
            })
   })
//export router
module.exports = router