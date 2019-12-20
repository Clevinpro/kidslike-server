const Product = require("../../../domain/db/schemas/tasks");

const getProduct = (request, response) => {
  const id = request.params.id;

  const sendResponse = task => {
    response.set("Content-type", "application/json");
    response.status(200);
    response.json({ status: "success", task });
  };

  const sendError = () => {
    response.status(400);
    response.json({
      error: "task was not found"
    });
  };

  const findProduct = Product.findOne({ _id: id });

  findProduct.then(sendResponse).catch(sendError);
};

module.exports = getProduct;
