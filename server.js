const mongoose = require('mongoose');

const {DB_Host} = require("./config")

mongoose.set('strictQuery', true);

const app = require('./app');

mongoose.connect(DB_Host)
  .then(() => {
    app.listen(3000, () => {
      console.log("Server running. Use our API on port: 3000")
    })
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  })


