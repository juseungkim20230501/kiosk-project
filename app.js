const express = require('express');
const { sequelize } = require('./models');
const itemRoutes = require('./routes/item.route');
const orderItemRoutes = require('./routes/order_item.route');
const orderCustomerRoutes = require('./routes/order_customer.route');
const itemOrderCustomerRoutes = require('./routes/item_order_customer.route');
const optionRoutes = require('./routes/option.route');

class Server {
  constructor() {
    this.app = express();
    this.port = 3000;
  }

  initializeMiddleware() {
    this.app.use(express.json());
    this.app.use([
      itemRoutes,
      orderItemRoutes,
      orderCustomerRoutes,
      itemOrderCustomerRoutes,
      optionRoutes,
    ]);
  }

  async connectDatabase() {
    try {
      await sequelize.authenticate();
      console.log('Database authenticated!');
    } catch (error) {
      console.error('Database authentication failed:', error);
      process.exit(1);
    }
  }

  start() {
    this.initializeMiddleware();
    this.connectDatabase();
    this.app.listen(this.port, () => {
      console.log(`Server started on port ${this.port}`);
    });
  }
}

const server = new Server();

server.start();
