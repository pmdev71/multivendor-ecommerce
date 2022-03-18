const Category = require("../models/categoryModel");

const categoryCTRL = {
    getCategory: async (req, res) => {
        try {
            const categories = await Category.find();
            res.json({ categories });
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },

};

module.exports = categoryCTRL;
