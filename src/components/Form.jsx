import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Form = ({createProduct, updateProduct, productToUpdate, setProductToUpdate}) => {

    const initialForm = {
        id: null,
        name: '',
        category: '',
        price: '',
        imageUrl: 'https://picsum.photos/seed/picture-new/300/300',
    };

    const [form, setForm] = useState(initialForm);
    // console.log(form);

    useEffect(() => {
        productToUpdate ? setForm(productToUpdate) : setForm(initialForm);
    }, [productToUpdate]);

    const handleChangeInput = e => {
        // console.log(`${e.target.name}: ${e.target.value}`);
        setForm(
            {
                ...form,
                [e.target.name]: e.target.value
            }
        );
    };

    const handleSubmit = e => {
        e.preventDefault();
        // console.log('Enviando el producto', form);

        if (form.id === null) {
            createProduct(form);    
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Producto dado de alta con éxito",
                showConfirmButton: false,
                timer: 1500
            });
        } else {
            updateProduct(form);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Producto modificado con éxito",
                showConfirmButton: false,
                timer: 1500
            });
        }
        handleReset();
    };
    
    const handleReset = () => {
        setForm(initialForm);
        setProductToUpdate(null);
    };

    return (
        <>
            <h2>Formulario</h2>
            <form
                className="w-50 border rounded-2 p-4 mb-5"
                onSubmit={handleSubmit}
            >

                <div className="mb-3">
                    <label
                        htmlFor="name"
                        className="form-label"
                    >
                        Nombre
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Ej: TV"
                        value={form.name}
                        onChange={handleChangeInput}
                    />
                </div>

                <div className="mb-3">
                    <label
                        htmlFor="category"
                        className="form-label"
                    >
                        Categoría
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="category"
                        name="category"
                        placeholder="Ej: Entretenimiento"
                        value={form.category}
                        onChange={handleChangeInput}
                    />
                </div>
                
                <div className="mb-3">
                    <label
                        htmlFor="price"
                        className="form-label"
                    >
                        Precio
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="price"
                        name="price"
                        placeholder="Ej: 1500"
                        value={form.price}
                        onChange={handleChangeInput}
                    />
                </div>

                <button className="btn btn-primary me-2" type="submit">Enviar</button>
                <button
                    className="btn btn-danger"
                    type="reset"
                    onClick={handleReset}
                >
                    Restablecer
                </button>
                
            </form>
        </>
    );
};

export default Form;
