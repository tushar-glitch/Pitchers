const Pitch_model = require("../Models/Pitch_model")

class Pitch_controller {
    static addPitch = async (req, res) => {
        const { title, description, message } = req.body
        if (title && description && message) {
            const newPitch = Pitch_model({
                title: title,
                description: description,
                message: message
            })
            const savePitch = newPitch.save()
            res.status(200).json({
                message: "Pitch added successfully"
            })
        } else {
            res.status(400).json({
                message: "Please fill all the details"
            })
        }
    }
    static getPitches = async (req, res) => {
        const all_pitches = await Pitch_model.find()
        if (all_pitches) {
            res.json(all_pitches)
        } else {
            res.status(200).json({
                message:"No pitches found at this moment"
            })
        }
    }
}   

module.exports = Pitch_controller