const express = require('express')
const Pitch_controller = require('../Controllers/Pitch_controller')
const route = express.Router()

route.post('/add', Pitch_controller.addPitch)
route.get('/all', Pitch_controller.getPitches)

module.exports = route