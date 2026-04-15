
let cartItems = {
  product1: 0,
  product2: 0,
  product3: 0,
  product4: 0,
};

const initialProducts = ["product1", "product2", "product3", "product4"];

const cart = (req, res) => {
  const totalCartItems = Object.values(cartItems).filter(
    (qty) => qty > 0
  ).length;
  res.render("cart.ejs", {
    totalCartItems,
    totalProducts: cartItems,
  });
};

const updateCart = (req, res) => {
  const { item, action } = req.body;

  if (!cartItems[item]) cartItems[item] = 0;

  switch (action) {
    case "increase":
      cartItems[item]++;
      break;
    case "decrease":
      if (cartItems[item] > 0) cartItems[item]--;
      break;
    case "zero":
      cartItems[item] = 0;
      break;
    case "danger":
      delete cartItems[item];
      break;
  }

  res.redirect("/cart");
};

const resetCart = (req, res) => {
  for (let item in cartItems) {
    cartItems[item] = 0;
  }
  res.redirect("/cart");
};

const refreshCart = (req, res) => {
  cartItems = {};
  initialProducts.forEach((item) => {
    cartItems[item] = 0;
  });
  res.redirect("/cart");
};

module.exports = {
  cart, 
  updateCart,
  refreshCart,
  resetCart,
};
