const { sequelize } = require('./models');


async function main() {
  await sequelize.sync({ force: true });
  console.log('Database synced');
}

main()