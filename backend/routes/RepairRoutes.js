const express = require('express')

const router = express.Router()

const repairController = require('../controllers/repairController');

// I.N.D.U.C.E.S  ->  an acronym that helps remember how to properly order routes
// Index, New, Delete, Update, Create, Edit, Show

// seed 
router.get('/seed', repairController.seed)

// index
router.get('/', repairController.index)

// new
router.get('/new', repairController.new)

// delete
router.delete('/:id', repairController.delete)

// update
router.put('/:id', repairController.update)

// create
router.post('/', repairController.create)

// edit 
router.get('/:id/edit', repairController.edit)

// show
router.get('/:id', repairController.show)
