const Category = require("./../models/category.model");

// create category
module.exports.newCategory = async (req, res) => {
  const newCategory = new Category(req.body);
  try {
    const savedCat = await newCategory.save();
    res.status(200).json(savedCat);
  } catch (error) {
    res.status(500).json(error);
  }
};

// get categories
module.exports.getCat = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json(error);
  }
};
