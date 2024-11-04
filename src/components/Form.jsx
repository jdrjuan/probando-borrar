
const Form = () => {
    return (
        <>
            <h2>Form</h2>
            <form className="w-50 border rounded-2 p-4 mb-5">

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
                    />
                </div>

                <button className="btn btn-primary me-2" type="submit">Enviar</button>
                <button className="btn btn-danger" type="reset">Restablecer</button>
                
            </form>
        </>
    );
};

export default Form;
