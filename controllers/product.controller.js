const Product = require('../models/product.model');
//Simple version, without validation or sanitation
function addProducts(req, res, next) {
  let product = new Product(
    {
      name: req.body.name,
      price: req.body.price
    }
  );
  product.save(function (err) {
    if (err) return next(err);
    else res.send('添加成功');
  })
}

function getProducts(req, res, next) {
  Product.find({}, (err, products) => {
    if (err) return next(err);
    else res.send(products);
  })
}

function getProductById(req, res, next) {
  Product.findById(req.params.id, (err, product) => {
    if (err) return next(err);
    res.send(product);
  })
}

module.exports = {
  addProducts: addProducts,
  getProducts: getProducts,
  getProductById: getProductById
};