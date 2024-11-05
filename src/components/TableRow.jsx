import Swal from "sweetalert2";

const TableRow = (props) => {
    const {product, deleteProduct, setProductToUpdate} = props;

    const handleClickBtnUpdateProduct = productToUpdate => {
        setProductToUpdate(productToUpdate);
        // console.log('Producto a modificar:', productToUpdate);
    };

    const handleClickBtnDeleteProduct = id => {
        Swal.fire({
            title: "¿Estás seguro de querer eliminar este producto?",
            text: "Esta acción no se puede revertir.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#777",
            confirmButtonText: "Eliminar",
            cancelButtonText: "Cancelar",
            focusCancel: true,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Producto eliminado",
                    text: "El producto indicado fue eliminado con éxito.",
                    icon: "success",
                    confirmButtonColor: "#3085d6",
                });
                deleteProduct(id);
            } else {
                Swal.fire({
                    title: "Operación cancelada",
                    text: "El producto no fue eliminado.",
                    icon: "info",
                    confirmButtonColor: "#3085d6",
                });
            }
        });
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

                <button
                    className="btn btn-warning btn-sm"
                    onClick={ () => handleClickBtnUpdateProduct(product) }
                >
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
