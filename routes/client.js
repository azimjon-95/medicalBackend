const { Router } = require('express')
const { route } = require('./doctorRoutes')
const router = Router()
const { getAllClient,
    getOneClient,
    newClient,
    deleteClient,
    searchClient,
    updateClient } = require('../controllers/client')

// GET ALL CLIENT
router.get('/all', getAllClient)

// GET ONE (1) CLIENT
router.get('/:_id', getOneClient)

// CRATE CLIENT || NEW CLIENT
router.post('/', newClient)

// DELETE CLIENT
router.delete('/:_id', deleteClient)

// UPDATE CLIENT
router.put('/:_id', updateClient)

// SEARCH CLIENT
router.post('/search', searchClient)

module.exports = router