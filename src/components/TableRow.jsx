
const TableRow = (props) => {
    const {product, deleteProduct} = props;

    const handleClickBtnDeleteProduct = id => {
        deleteProduct(id);
    };

    return (
        <tr>
            <td>{product.id}</td>
            <td>{product.category}</td>
            <td>{product.name}</td>
            <td>${product.price}</td>
            <td>
                <img src={product.imageUrl} alt={product.name} width="50" />
            </td>
            <td>

                <button className="btn btn-info btn-sm">
                    Ver
                </button>

                <button className="btn btn-warning btn-sm">
                    Modificar
                </button>

                <button
                    className="btn btn-danger btn-sm"
                    onClick={ () => handleClickBtnDeleteProduct(product.id) }
                    >
                    Eliminar
                </button>

            </td>
        </tr>
    );
};

export default TableRow;
