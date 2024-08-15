const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/e-comm");
const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});
const saveInDB = async () => {
  const Product = mongoose.model("products", ProductSchema);
  let data = new Product({
    name: "Note Pro",
    price: 50,
    brand: "abc",
    category: "Mobile",
  });
  let result = await data.save();
  console.log(result);
};

const updateInDB = async () => {
  const Product = mongoose.model("products", ProductSchema);
  let data = await Product.updateOne(
    { name: "M 10" },
    {
      $set: { price: 7000 },
    }
  );
  console.log(data);
};
updateInDB();
