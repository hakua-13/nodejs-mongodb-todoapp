const mongoose = require('mongoose');

const connectDB = (url) => {
  return mongoose.connect(url)
  .then(() => console.log('データベース接続中...'))
  .catch((error) => console.log(error));
};

// const connectDB = async(url) => {
//   try{
//     await mongoose.connect(url);
//     console.log('データベース接続...')
//   }catch(error){
//     console.log(error);
//   }
// }

module.exports = connectDB;