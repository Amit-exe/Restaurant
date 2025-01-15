const mongoose = require("mongoose");
const Item = require("../models/itemModel");

const getAllItems = async (req, res) => {
  try {
    const items = await Item.find({}).sort({ createdAt: -1 });
    res.status(200).json(items);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getSingleItems = async (req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(400).json({ error: "no such item" });
  try {
    const item = await Item.find({ _id: id });
    res.status(200).json(item);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

const addItem = async (req, res) => {
  const { name, description, price, category, imageurl } = req.body;
  try {
    const item = await Item.create({
      name,
      description,
      price,
      category,
      imageurl,
    });
    res.status(200).json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateItem = async (req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(400).json({ error: "no such item" });
  try {
    const item = await Item.findOneAndUpdate({ _id: id }, { ...req.body });
    res.status(200).json(item);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

const deleteItem = async (req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(400).json({ error: "no such item" });
  try {
    const item = await Item.findOneAndDelete({ _id: id });
    res.status(200).json(item);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

module.exports = {
  getAllItems,
  getSingleItems,
  addItem,
  updateItem,
  deleteItem,
};
