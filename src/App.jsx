import { useEffect } from 'react';

import './App.css';
import Routes from './routers/routes';

function App() {

    useEffect(() => {
      document.title = 'Administración de productos';
    }, []);    

    return (
        <main className="container">
            <h1 className="display-2">Proyecto</h1>
            <hr />
            <Routes />
        </main>
    );
};

export default App;
