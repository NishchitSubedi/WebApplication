module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    category: {
      type: DataTypes.ENUM('game', 'battle_pass', 'premium', 'other'),
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    platform: {
      type: DataTypes.STRING,
      allowNull: true
    },
    game: {
      type: DataTypes.STRING,
      allowNull: true
    },
    seller_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.ENUM('available', 'sold', 'reserved'),
      defaultValue: 'available'
    },
    condition: {
      type: DataTypes.ENUM('new', 'used', 'excellent', 'good'),
      defaultValue: 'new'
    }
  });

  return Product;
};