const Toso = require("../model/Toso")

exports.getAllTask = async (req, res) => {
    try {
        const result = await Toso.find()
        res.status(200).json({ message: "Data Fetch success", result })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

exports.addTask = async (req, res) => {
    try {
        const result = await Toso.create(req.body)
        res.status(200).json({ message: "Data add success" })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}
exports.deleteTask = async (req, res) => {
    try {
        const { todoId } = req.params
        const result = await Toso.findByIdAndDelete(todoId)
        res.status(200).json({ message: "Data delete success" })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}
exports.updateTask = async (req, res) => {
    try {
        const { todoId } = req.params
        const result = await Toso.findByIdAndUpdate(todoId, req.body)
        res.status(200).json({ message: "Data modify success" })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}