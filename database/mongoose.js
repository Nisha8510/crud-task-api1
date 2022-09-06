const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/taskmanagerdb',{useNewUrlparser: true,useUnifiedTopology: true})
      .then(()=>{
        console.log("DB connected successfully")
    })
      .catch((error)=>{
        console.log(error)
    });

    module.exports = mongoose;
      