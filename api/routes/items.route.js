const mongoose = require('mongoose')
const express = require('express')
const itemModel = require('../models/item.model')

const route = express.Router()

// get all todo lists
route.get('/getTodos', (req, res, next) => {
    itemModel.find()
        .select('itemName noteTime status')
        .exec()
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({
                'message': 'Opps! Internel server error.'
            })
        })
})

// create a new todo item
route.post('/createTodo', (req, res, next) => {
    const item = new itemModel({
            itemName: req.body.itemName,
            noteTime: req.body.noteTime,
            status: true
        })
        .save()
        .then(result => {
            res.status(200).json({
                'message': 'New todo item created!'
            })
        })
        .catch(err => {
            res.status(500).json({
                'message': 'Opps! Internel server error.'
            })
        })
})

// change the status of a todo item
route.put('/changeStatus', (req, res, next) => {
    const itemId = req.body.itemId
    const newStatus = req.body.newStatus

    itemModel.findByIdAndUpdate(itemId, { status: newStatus })
        .exec()
        .then(result => {
            res.status(200).json(result)
        })
        .catch(er => {
            res.status(500).json({
                'message': 'Opps! Internel server error.'
            })
        })
})

// delete a todo item
route.delete('/deleteItem', (req, res, next) => {
    const itemId = req.body.itemId

    itemModel.deleteOne({ _id: itemId })
        .exec()
        .then(result => {
            res.status(200).json({
                'message': 'Success! Item deleted.'
            })
        })
        .catch(er => {
            res.status(500).json({
                'message': 'Opps! Internel server error.'
            })
        })
})

module.exports = route