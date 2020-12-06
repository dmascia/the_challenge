const { generateOrders } = require("../services/ordersService");

module.exports = {
  getOrders: async () => {
    return await generateOrders();
  },
};
