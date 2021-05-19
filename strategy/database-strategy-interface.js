class DatabaseStrategyInterface {
  create (data) {
    throw new Error('Método não implementado.')
  }

  delete (id) {
    throw new Error('Método não implementado.')
  }
}

module.exports = DatabaseStrategyInterface
