const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/scatch");

const userSchema = mongoose.schema({
  Full_Name: String,
  Email: String,
  Password: String,
  Cart: {
    type: Array,
    default: [],
  },
  Isadmin: Boolean,
  Orders: {
    type: Array,
    default: [],
  },
  Contact: Number,
  Picuture: String,
});

mongoose.model("user", userSchema);
