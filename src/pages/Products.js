import { products } from '../data/products';

function Products() {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold mb-8">Productos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <div key={product.id} className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;