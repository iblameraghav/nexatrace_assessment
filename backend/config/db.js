const mongoose = require('mongoose');
const { MONGO_URI } = process.env;  // Fetch MONGO_URI from environment variables

const connectDB = async () => {
  try {
    if (!MONGO_URI) {
      throw new Error('MongoDB URI not defined in environment variables');
    }

    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
