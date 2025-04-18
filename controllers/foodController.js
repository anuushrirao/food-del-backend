import foodModel from "../models/foodModel.js";
import fs from 'fs'

// all food list
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({})
        res.json({ success: true, data: foods })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }

}

// add food
const addFood = async (req, res) => {
    const { name, description } = req.body;
    const file = req.file;

    if (!file) return res.status(400).send("No file uploaded");

    // Example: Upload the buffer to a cloud service like S3 or Cloudinary
    const imageBuffer = file.buffer;
    const imageMimeType = file.mimetype;

    // Proceed to upload `imageBuffer` to your cloud storage...
    // OR save it as base64 if needed (not recommended for large files)

    res.status(200).json({ message: "Food item added successfully" });
};


// delete food
const removeFood = async (req, res) => {
    try {

        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, () => { })

        await foodModel.findByIdAndDelete(req.body.id)
        res.json({ success: true, message: "Food Removed" })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }

}

export { listFood, addFood, removeFood }