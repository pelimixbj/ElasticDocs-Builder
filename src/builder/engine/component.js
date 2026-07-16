/**
 * Clase base para todos los componentes de ElasticDocs.
 * Cada componente deberá implementar el método render().
 */
class Component {
  constructor(data = {}) {
    this.data = data;
  }

  render() {
    throw new Error("El componente debe implementar el método render().");
  }
}

module.exports = Component;
