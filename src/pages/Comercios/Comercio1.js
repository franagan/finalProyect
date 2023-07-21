import React from "react";
import "./Comercio.css";

const Comercio1 = () => {
  const comercioData = {
    image:
    "https://cdn-deeph.nitrocdn.com/whkmsNyzzgPEaouvijPEOXewHPuYbFiV/assets/images/optimized/rev-3c0c3a5/wp-content/uploads/2016/04/decoracion-zapaterias-13.jpg",
    name: "Nombre del comercio",
    description: "una pequeña presentacion del comercio...somos un comercio dedicado a la venta de lo que sea que quieras vender, bla, bla, bla.",
    address: "Calle Lo que sea 28",
    phone: "666666666",
    location: "Parla",
    city: "Madrid",
    Web: "www.vendocosas.com",
    eMail: "micomercio@gmail.com",
    category: "Calzado",
  };

  const productos = [
    {
      id: 1,
      name: "Zapatos",
      price: "99.99$",
      image:
        "https://phantom-expansion.unidadeditorial.es/9deb51e3cabd5fc5424cc96f7baca4d2/f/webp/assets/multimedia/imagenes/2022/11/23/16691994024915.jpg",
    },
    {
      id: 2,
      name: "Deportivas",
      price: "109.99$",
      image:
        "https://images.asics.com/is/image/asics/1201A366_001_SR_RT_GLB?$zoom$",
    },
    {
      id: 3,
      name: "Deportivas",
      price: "89.99$",
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSavppDPC9fPVXL3jRPW5B3ge6ubNZW_6DeLA6pO_ku-TaAq-WUxMV7LL9bsk6chh5ou1gIkrOi4yU8C0s3WBe3Febmj8wfPze4Txm_CNOagvAOap-G9-nc&usqp=CAc",
    },
    {
      id: 4,
      name: "Zapato tacón",
      price: "100.99$",
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQXxgOifcLs_ApWwKfm_SMqYE6UMGA8xvRkSjsS2D5he1KErzUpJ8nHd221LXIM_pGj_hx-TkL9euqRB-Y7D8d43yfqADg6o86UMvG547UiirLhzSzVb8fMgQ&usqp=CAc",
    },
    // agregar más productos
  ];

  const addToCart = (product) => {
    // implementar la lógica para agregar al carrito.
    console.log(`Añadir ${product.name} al carrito`);
  };

  return (
    <div>
      <div className="info">
      <img src={comercioData.image}
            className="foto"
            alt="imagen del comercio1"/>
        <h2>{comercioData.name}</h2>
        <p>{comercioData.description}</p>
        <p>Dirección: {comercioData.address}</p>
        <p>Teléfono: {comercioData.phone}</p>
        <p>Localidad: {comercioData.location}</p>
        <p>Provincia: {comercioData.city}</p>
        <p>Pagina web: {comercioData.Web}</p>
        <p>E-mail: {comercioData.eMail}</p>
        <p>Categoria: {comercioData.category}</p>
        </div>


      <h4>productos disponibles</h4>
      <div className="cardContainer">
      {productos.map((product) => (
          <div key={product.id} className="card">
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "150px" }}
            />
            <h4>{product.name}</h4>
            <p>Precio: {product.price}</p>
            <button onClick={() => addToCart(product)} class="btn btn-success">
              Añadir
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-cart"
                viewBox="0 0 16 16"
                style={{ marginLeft: "5px" }}
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </button>
          </div>
        ))}
      </div>

      <div className="inputbox">
        <h4>formulario de contacto</h4>
        <p>(contacta directamente con la tienda)</p>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInputDisabled"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Tu Email</label>
          </div>
          <div class="form-floating mb-3">
            <textarea
              class="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2Disabled"
            ></textarea>
            <label for="floatingTextarea">¿En que podemos ayudarte?</label>

          </div>
          <button type="submit" className="btn btn-primary">Enviar</button>
        </div>

    </div>
  );
};

export default Comercio1;
