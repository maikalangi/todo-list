// DEPENDENCIES
const { Router } = require('express');
const express = require('express');
const res = require('express/lib/response');
const Todo = require('../models/todo');

// INITIALIZE
const router = express.Router();

// ROUTES

// INDEX
router.get('/', (req, res) => {
    Todo.find({}, (err, items) => {
        res.render('index.ejs', {
            item: items
        });
    });
});

// NEW
router.get('/new', (req, res) => {
    res.render('new.ejs');
});

// DELETE
router.delete('/:id', (req, res) => {
    Todo.findByIdAndDelete(req.params.id, (err, data) => {
        res.redirect('/todo');
    });
});

// UPDATE
router.put('/:id', (req, res) => {
    Todo.findByIdAndUpdate(
        req.params.id,
        req.body,
        (err, deleted) => {
            res.redirect(`/todo/${req.params.id}`)
        })
});

// CREATE
router.post('/', (req, res) => {
    Todo.create(req.body, (err, newItem) => {
        res.redirect('/todo');
    })
});

// EDIT
router.get('/:id/edit', (req, res) => {
    Todo.findById(req.params.id, (err, items) => {
        res.render('edit.ejs',
        {
            item: items
        });
    })
});

// SHOW
router.get('/:id', (req, res) => {
    Todo.findById(req.params.id, (err, items) => {
        res.render('show.ejs',
        {
            item: items
        });
    });
});

module.exports = router;