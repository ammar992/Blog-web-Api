const Category = require('../model/category');

class categoryController {
  static createCat = async (req, res) => {
    const newCat = new Category(req.body);
    try {
      const saveCat = await newCat.save();
      res.status(200).json(saveCat);
    } catch (error) {
      res.status(500).json(error);
    }
  };

  static getCat = async (req, res) => {
    try {
      const getCat = await Category.find();
      res.status(200).json(getCat);
    } catch (error) {
      res.status(500).json(error);
    }
  };
}

module.exports = categoryController;
