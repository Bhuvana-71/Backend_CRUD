//import modules
const express = require('express')
let mongodb = require('mongodb')
//import url
let url = require('../url')
//create mongoclient
let mcl = mongodb.MongoClient
//create router instance
let router = express.Router()


//CREATING THE RESTAPI

//DELETING THE PRODUCTS BASED ON  PRODUCT ID -------->
router.delete("/", (req, res) => {
    let obj = { "p_id": req.body.p_id }
    //connect to mongodb
    mcl.connect(url, (err, conn) => {
        if (err)
            console.log('Error in connection')
        else {
            let db = conn.db('mbdshopping')
            db.collection('products').deleteOne(obj, (err, result) => {
                if (err)
                    res.status(404).send({ 'delete': 'error' })
                else {
                    if (result.deletedCount != 0) {
                        console.log("Data deleted ")
                        res.status(200).send({ 'delete': 'success' })
                    }
                    else {
                        console.log("Data not deleted ")
                        res.status(200).send({ 'delete': 'Record not found' })
                    }
                    conn.close()
                }
            })
        }
    })
})


// DELETE USER  USING THE USER NAME--------> 
router.delete("/deleteUser", (req, res) => {
    let obj = { "u_name": req.body.u_name }
    //connect to mongodb
    mcl.connect(url, (err, conn) => {
        if (err)
            console.log('Error in connection')
        else {
            let db = conn.db('mbdshopping')
            db.collection('Users').deleteOne(obj, (err, result) => {
                if (err)
                    res.status(404).send({ 'delete': 'error' })
                else {
                    if (result.deletedCount != 0) {
                        console.log("Data deleted ")
                        res.status(200).send({ 'delete': 'success' })
                    }
                    else {
                        console.log("Data not deleted ")
                        res.status(200).send({ 'delete': 'Record not found' })
                    }
                    conn.close()
                }
            })
        }
    })
})



//DELETE THE CART USING USERNAME AND PRODUCT ID------>
router.delete("/cartDelete", (req, res) => {
    let obj = { "u_name": req.body.u_name , "p_id":req.body.p_id }
    //connect to mongodb
    mcl.connect(url, (err, conn) => {
        if (err)
            console.log('Error in connection')
        else {
            let db = conn.db('mbdshopping')
            db.collection('Cart').deleteOne(obj, (err, result) => {
                if (err)
                    res.status(404).send({ 'delete': 'error' })
                else {
                    if (result.deletedCount != 0) {
                        console.log("Data deleted ")
                        res.status(200).send({ 'delete': 'success' })
                    }
                    else {
                        console.log("Data not deleted ")
                        res.status(200).send({ 'delete': 'Record not found' })
                    }
                    conn.close()
                }
            })
        }
    })
})


//export router
module.exports = router
