import express from 'express';
import { addFood, listFood, removeFood } from '../controllers/foodController.js';
import multer from 'multer';

const foodRouter = express.Router();

// ✅ Memory Storage Engine (stores image in RAM temporarily)
const storage = multer.memoryStorage();
const upload = multer({ storage });

foodRouter.get("/list", listFood);

// image is available in req.file.buffer, not on disk
foodRouter.post("/add", upload.single('image'), addFood);

foodRouter.post("/remove", removeFood);

export default foodRouter;
