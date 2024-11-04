import { useEffect } from 'react';

import './App.css';
import Products from "./pages/Products";

function App() {

    useEffect(() => {
      document.title = 'Administración de productos';
    }, []);    

    return (
        <main className="container">
            <h1 className="display-2">Proyecto</h1>
            <hr />
            <Products />
        </main>
    );
};

export default App;
