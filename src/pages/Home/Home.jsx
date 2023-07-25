import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';
import Carrousel from './Carrousel';

const Store = () => {
    const [store, setStore] = useState([]);

    const getDataStore = async () => {
        const response = await axios.get(
            'https://backfinalproyect.vercel.app/store/stores'
        );
        setStore(response.data);
        console.log(response.data);
    };

    useEffect(() => {
        getDataStore();
    }, []);

    const [query, setQuery] = useState('');
    return (
        <div>
            <header className="inicioContainer">
                <h1>Bienvenido a nuestra página de Tiendas Online</h1>
                <p>
                    Baja para explorar una variedad de tiendas en línea donde
                    realizar tus compras
                </p>
            </header>

            <Carrousel data={store} />

            <div className="inputbox">
                <input
                    required="required"
                    type="text"
                    onChange={(e) => setQuery(e.target.value)}
                />
                <span>Busca tu tienda</span>
                <i></i>
            </div>

            <div className="cardContainer">
                {store
                    .filter((store) => store.name.toLowerCase().includes(query))
                    .map((store) => (
                        <div key={store.id} className="card">
                            <img
                                src={store.image}
                                className="card-img-top"
                                alt="imagen del comercio1"
                            />
                            <div className="card-body">
                                <h5 className="card-title">{store.name}</h5>
                                <p className="card-text">{store.description}</p>
                                <NavLink
                                    className="btn btn-primary"
                                    to={`/tienda/${store._id}`}
                                >
                                    Comprar
                                </NavLink>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Store;
