const mongoose = require("mongoose");

const databaseConnect = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    })
    .catch((err) => {
      console.log(`error : ${err.message}`);
    });
};

module.exports = databaseConnect;
