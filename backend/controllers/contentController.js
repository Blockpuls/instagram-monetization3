const Content = require('../models/Content');

exports.getAllContent = async (req, res) => {
    try {
        const content = await Content.find();
        res.json(content);
    } catch (error) {
        res.status(400).json({ error: 'Error fetching content' });
    }
};
