import { useEffect } from 'react';

import './App.css';
import Routes from './routers/routes';
import Navbar from './components/Navbar';

function App() {

    useEffect(() => {
      document.title = 'Administración de productos';
    }, []);    

    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className="container mt-4">
                <Routes />
            </main>
        </>
    );
};

export default App;
