
const TableRow = (props) => {
    const {product} = props;
    return (
        <tr>
            <td>{product.id}</td>
            <td>{product.category}</td>
            <td>{product.name}</td>
            <td>${product.price}</td>
            <td>
                <img src={product.imageUrl} alt={product.name} width="50" />
            </td>
        </tr>
    );
};

export default TableRow;
