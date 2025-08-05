const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME || 'portfolio_db',
  process.env.DB_USER || 'root',
  process.env.DB_PASSWORD || '',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.User = require('./User')(sequelize, Sequelize);
db.Product = require('./Product')(sequelize, Sequelize);
db.Order = require('./Order')(sequelize, Sequelize);

db.User.hasMany(db.Order, { foreignKey: 'buyer_id', as: 'BuyerOrders' });
db.User.hasMany(db.Order, { foreignKey: 'seller_id', as: 'SellerOrders' });
db.Order.belongsTo(db.User, { foreignKey: 'buyer_id', as: 'Buyer' });
db.Order.belongsTo(db.User, { foreignKey: 'seller_id', as: 'Seller' });
db.Product.hasMany(db.Order, { foreignKey: 'product_id' });
db.Order.belongsTo(db.Product, { foreignKey: 'product_id' });

db.User.hasMany(db.Product, { foreignKey: 'seller_id', as: 'Products' });
db.Product.belongsTo(db.User, { foreignKey: 'seller_id', as: 'Seller' });

module.exports = db;