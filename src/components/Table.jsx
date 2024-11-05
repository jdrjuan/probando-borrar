import TableRow from "./TableRow";

const Table = ({products, deleteProduct}) => {
    return (
        <>
            <h2>Table</h2>
            <div className="table-responsive">
                <table className="table table-striped table-hover table-bordered">
                    <thead>
                        <tr className="table-dark">
                            <th>Id</th>
                            <th>Categoría</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Imagen</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>

                        {products.map(product =>
                            // Envía todas las props por separado
                            // <TableRow key={`product-${product.id}`} id={product.id} name={product.name} category={product.category} imageUrl={product.imageUrl} price={product.price} />
                            
                            // Idem, más corto
                            // <TableRow key={`product-${product.id}`} { ...product } />

                            // Toma product como un atributo booleano. Envía la prop "product" con el valor true
                            // <TableRow key={`product-${product.id}`} product />

                            // Error de sintaxis
                            // <TableRow key={`product-${product.id}`} {product} />
                            
                            // Envía prop "product" con el objeto product dentro
                            <TableRow
                                key={`product-${product.id}`}
                                product={product}
                                deleteProduct={deleteProduct}
                            />
                        )}          

                    </tbody>
                </table>
            </div>

             
        </>
    );
};

export default Table;
