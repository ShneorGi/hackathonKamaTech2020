const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/hugs', { useNewUrlParser: true })
    .then((r) => r);

mongoose.connection.on('error', (err) => {
    console.error(err);
});
module.exports = mongoose;
