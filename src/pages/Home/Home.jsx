import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import Carrousel from './Carrousel';



const Store = () => {
    const [characters, setCharacters] = useState([]);
   
    const getDataStore = async () => {
        const response = await axios.get(
            'https://backfinalproyect.vercel.app/store/stores'
        );
        setCharacters(response.data);
        console.log(response.data);
    };
  
    useEffect(() => {
        getDataStore();
    }, []);

    
        const[query, setQuery]= useState("");
  return (
    <div>

      <header className="inicioContainer">
        <h1>Bienvenido a nuestra página de Tiendas Online</h1>
        <p>
          Baja para explorar una variedad de tiendas en línea donde realizar tus
          compras
        </p>
      </header>


      <Carrousel data={characters}/>
     

      <div className="inputbox">
        <input required="required" type="text" onChange={e=> setQuery(e.target.value)}/>
        <span>Busca tu tienda</span>
        <i></i>
      </div>

         
      <div className="cardContainer" >

          {characters.filter((character)=>character.name.toLowerCase().includes(query)).map((character) => ( 
            
            <div key={character.id} className="card">
            <img
            src={character.image}
            className="card-img-top"
            alt="imagen del comercio1"
            />
          <div className="card-body" >
            <h5 className="card-title">{character.name}</h5>
            <p className="card-text">
              {character.description}
            </p>
            <Link className="btn btn-primary" to={'/comercio'+character.name}>     
              Comprar
            </Link>
          </div>
        </div>
            ))};
         
      </div>
    </div>
  );
};


        // <>
        //     <h2>Movies </h2>
            
        //     <ul className="listMovies">{renderList()}</ul>
        // </>
   
export default Store;