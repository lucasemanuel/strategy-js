const DatabaseStrategyInterface = require('./database-strategy-interface')

class DatabaseContext {
  constructor (databaseStrategy = new DatabaseStrategyInterface()) {
    this.setDatabaseStrategy(databaseStrategy)
  }

  setDatabaseStrategy (databaseStrategy) {
    this._databaseStrategy = databaseStrategy
  }

  create (data) {
    this._databaseStrategy.create(data)
  }

  delete (id) {
    this._databaseStrategy.delete(id)
  }
}

module.exports = DatabaseContext
