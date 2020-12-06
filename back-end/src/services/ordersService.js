const faker = require("faker");

// generate 10 random stores
const generateStores = async () => {
  const STORE_LIST = [];

  for (let i = 0; i < 10; i++) {
    STORE_LIST.push(`${faker.name.firstName()} store`);
  }

  return STORE_LIST;
};

// generate 10 random products
const generateProducts = async () => {
  const PRODUCTS_LIST = [];

  for (let i = 0; i < 10; i++) {
    PRODUCTS_LIST.push(`${faker.commerce.productName()}`);
  }

  return PRODUCTS_LIST;
};

// generate the inventory
const generateStoresAndProducts = async () => {
  const STORE_LIST = await generateStores();
  const PRODUCTS_LIST = {};

  STORE_LIST.forEach(async (value) => {
    const PRODUCTS = await generateProducts();
    PRODUCTS_LIST[value] = [...PRODUCTS];
  });

  return PRODUCTS_LIST;
};

// random int generater
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

//generate orders
const generateOrders = async () => {
  const INVENTORY = await generateStoresAndProducts();
  const ORDERS = [];

  for (const store in INVENTORY) {
    let productList = INVENTORY[store];
    let productLength = INVENTORY[store].length;
    let randomProductsToAddToOrder = getRandomInt(10);
    let orderProducts = [];

    for (let i = 0; i < randomProductsToAddToOrder; i++) {
      orderProducts.push({
        name: productList[getRandomInt(productLength)],
        qty: getRandomInt(5),
      });
    }

    for (let j = 0; j < 250; j++) {
      ORDERS.push({
        products: orderProducts,
        datePurchased: faker.date.between("2020-12-03", "2020-12-09"),
        store: store,
      });
    }
  }

  return ORDERS;
};

module.exports = {
  generateOrders,
};
