// const mongoose = require('mongoose')

// mongoose
//     .connect('mongodb://localhost:27017/food-ordering', { useNewUrlParser: true })
//     .catch(e => {
//         console.error('Connection error', e.message)
//     })

// const db = mongoose.connection

// module.exports = db

const mongoose = require('mongoose');

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => {
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    })
    .catch((error) => {
      console.error(`Error: ${error.message}`);
      process.exit(1); // Exit process with failure
    });
};

module.exports = connectDB;
