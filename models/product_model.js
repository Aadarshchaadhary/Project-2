const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/scatch");

const productSchema = mongoose.schema({
  image: String,
  Name: String,
  Price: Number,
  Discount: {
    type: Number,
    default: 0,
  },
  Bgcolor: String,
  Panelcolor: String,
  Textcolor: String,
});

mongoose.model("user", productSchema);
