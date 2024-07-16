const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/authRoutes');
const instagramRoutes = require('./routes/instagramRoutes');
const linkRoutes = require('./routes/linkRoutes');
const contentRoutes = require('./routes/contentRoutes');

app.use('/auth', authRoutes);
app.use('/instagram', instagramRoutes);
app.use('/links', linkRoutes);
app.use('/content', contentRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Failed to connect to MongoDB', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
