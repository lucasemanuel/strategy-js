const DatabaseStrategyInterface = require('../database-strategy-interface')

class PostgresqlStrategy extends DatabaseStrategyInterface {
  create (data) {
    console.log('Inserindo dados com PostgreSQL')
  }
}

module.exports = PostgresqlStrategy
