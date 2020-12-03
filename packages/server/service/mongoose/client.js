const mongoose = require('mongoose');

const uri = 'mongodb://184.73.85.49:27017/hugs';
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

mongoose.connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});
module.exports = mongoose;
