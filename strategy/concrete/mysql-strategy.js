const DatabaseStrategyInterface = require('../database-strategy-interface')

class MysqlStrategy extends DatabaseStrategyInterface {
  create (data) {
    console.log('Inserindo dados com MySQL')
  }
}

module.exports = MysqlStrategy
