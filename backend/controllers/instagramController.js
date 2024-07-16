const User = require('../models/User');

exports.connectInstagram = async (req, res) => {
    const { userId, instagramId } = req.body;

    try {
        const user = await User.findByIdAndUpdate(userId, { instagramId }, { new: true });
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: 'Error connecting Instagram account' });
    }
};

exports.viewPosts = async (req, res) => {
    const { userId } = req.params;

    try {
        const user = await User.findById(userId);
        if (!user.instagramId) {
            return res.status(400).json({ error: 'Instagram account not connected' });
        }

        // Simulate fetching Instagram posts (replace with actual API call)
        const posts = [
            { id: 'post1', imageUrl: 'https://example.com/post1.jpg', caption: 'Post 1' },
            { id: 'post2', imageUrl: 'https://example.com/post2.jpg', caption: 'Post 2' }
        ];

        res.json(posts);
    } catch (error) {
        res.status(400).json({ error: 'Error fetching Instagram posts' });
    }
};
