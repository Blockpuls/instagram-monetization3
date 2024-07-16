const Link = require('../models/Link');

exports.addAffiliateLink = async (req, res) => {
    const { userId, postId, affiliateUrl } = req.body;

    try {
        const link = new Link({ userId, postId, affiliateUrl });
        await link.save();
        res.status(201).json(link);
    } catch (error) {
        res.status(400).json({ error: 'Error adding affiliate link' });
    }
};

exports.getLinks = async (req, res) => {
    const { userId } = req.params;

    try {
        const links = await Link.find({ userId });
        res.json(links);
    } catch (error) {
        res.status(400).json({ error: 'Error fetching affiliate links' });
    }
};
