import { useEffect } from 'react';

import './App.css';
import Routes from './routers/routes';

function App() {

    useEffect(() => {
      document.title = 'Administración de productos';
    }, []);    

    return (
        <main className="container mt-4">
            <Routes />
        </main>
    );
};

export default App;
