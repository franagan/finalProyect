import React, { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

import "./Carrousel.css";


const Carrousel = (props) => {

    const data=props.data;
    console.log(data)
    const slideRef = useRef(null);
    const [loadingProgress, setLoadingProgress] = useState(0);
  
    const handleClickNext = () => {
      let items = slideRef.current.querySelectorAll(".item");
      slideRef.current.appendChild(items[0]);
    };
  
    const handleClickPrev = () => {
      let items = slideRef.current.querySelectorAll(".item");
      slideRef.current.prepend(items[items.length - 1]);
    };
  
    // const data = [
    //   {
    //     id: 1,
    //     imgUrl: "https://i.postimg.cc/PrMGqZwx/pexels-m-venter-1659437.jpg",
    //     desc: "Some beautiful roads cannot be discovered without getting loss.",
    //     name: "EXPLORE NATURE",
    //   },
    //   {
    //     id: 2,
    //     imgUrl:
    //       "https://i.postimg.cc/bw6KxhLf/pexels-eberhard-grossgasteiger-1062249.jpg",
    //     desc: "Some beautiful roads cannot be discovered without getting loss.",
    //     name: "EXPLORE NATURE",
    //   },
    //   {
    //     id: 3,
    //     imgUrl:
    //       "https://i.postimg.cc/CMkTW9Mb/pexels-eberhard-grossgasteiger-572897.jpg",
    //     desc: "Some beautiful roads cannot be discovered without getting loss.",
    //     name: "EXPLORE NATURE",
    //   },
    //   {
    //     id: 5,
    //     imgUrl: "https://i.postimg.cc/6qdkn4bM/pexels-joyston-judah-933054.jpg",
    //     desc: "Some beautiful roads cannot be discovered without getting loss.",
    //     name: "EXPLORE NATURE",
    //   },
    //   {
    //     id: 6,
    //     imgUrl:
    //       "https://i.postimg.cc/RVm59Gqy/pexels-roberto-nickson-2559941.jpg",
    //     desc: "Some beautiful roads cannot be discovered without getting loss.",
    //     name: "EXPLORE NATURE",
    //   },
    // ];
  


    return (
      <div className="containe">
        <div className="loadbar" style={{ width: `${loadingProgress}%` }}></div>
        <div id="slide" ref={slideRef}>
          {data.map((item) => (
            <div
              key={item.id}
              className="item"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="content">
                <div className="name">{item.name}</div>
                <div className="des">{item.description}</div>
                <Link to={'/comercio'+item.name}><button>COMPRAR</button></Link>
              </div>
            </div>
          ))}
        </div>
        <div className="buttons">
          <button id="prev" onClick={handleClickPrev}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button id="next" onClick={handleClickNext}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
    );
  };
  
  export default Carrousel;























        //  Carrousel de gohan funcionando


// function Carrousel(){
//   return (
 
//     <div className="slider">
//         <div className="slide-track">
//             <div className="slide">
//                 <img className="img" src="https://www.banpresto.es/wp-content/uploads/2021/12/bp18620_frente-min.jpg"/>
//             </div>
//             <div className="slide">
//                 <img className="img" src="https://www.banpresto.es/wp-content/uploads/2021/12/bp18620_frente-min.jpg"/>
//             </div>
//             <div className="slide">
//                 <img className="img"  src="https://www.banpresto.es/wp-content/uploads/2021/12/bp18620_frente-min.jpg"/>
//             </div>
//             <div className="slide">
//                 <img className="img" src="https://www.banpresto.es/wp-content/uploads/2021/12/bp18620_frente-min.jpg"/>
//             </div>
//             <div className="slide">
//                 <img className="img" src="https://www.banpresto.es/wp-content/uploads/2021/12/bp18620_frente-min.jpg"/>
//             </div>
//             <div className="slide">
//                 <img className="img" src="https://www.banpresto.es/wp-content/uploads/2021/12/bp18620_frente-min.jpg"/>
//             </div>
//             <div className="slide">
//                 <img className="img" src="https://www.banpresto.es/wp-content/uploads/2021/12/bp18620_frente-min.jpg"/>
//             </div>

//             <div className="slide">
//                 <img className="img" src="https://www.banpresto.es/wp-content/uploads/2021/12/bp18620_frente-min.jpg"/>
//             </div>
//             <div className="slide">
//                 <img className="img" src="https://www.banpresto.es/wp-content/uploads/2021/12/bp18620_frente-min.jpg"/>
//             </div>
//             <div className="slide">
//                 <img className="img" src="https://www.banpresto.es/wp-content/uploads/2021/12/bp18620_frente-min.jpg"/>
//             </div>
//             <div className="slide">
//                 <img className="img" src="https://www.banpresto.es/wp-content/uploads/2021/12/bp18620_frente-min.jpg"/>
//             </div>
//             <div className="slide">
//                 <img className="img" src="https://www.banpresto.es/wp-content/uploads/2021/12/bp18620_frente-min.jpg"/>
//             </div>
//             <div className="slide">
//                 <img className="img" src="https://www.banpresto.es/wp-content/uploads/2021/12/bp18620_frente-min.jpg"/>
//             </div>
//             <div className="slide">
//                 <img className="img" src="https://www.banpresto.es/wp-content/uploads/2021/12/bp18620_frente-min.jpg"/>
//             </div>
//         </div>
//     </div>

//   );
// }

// export default Carrousel;





















//     <section className="image-slider">
//     <div className="slider">
//         <div className="img-container">
//             <img src="https://www.banpresto.es/wp-content/uploads/2021/12/bp18620_frente-min.jpg" className="img"></img>
//             <img src="https://www.banpresto.es/wp-content/uploads/2021/12/bp18620_frente-min.jpg" className="img"></img>
//             <img src="https://www.banpresto.es/wp-content/uploads/2021/12/bp18620_frente-min.jpg" className="img"></img>
//             <img src="https://www.banpresto.es/wp-content/uploads/2021/12/bp18620_frente-min.jpg" className="img"></img>
//         </div>
//         <div className="caption">
//             <h2>TEXTOSSSSSS</h2>
//         </div>
//     </div>
//     <div className="pagination">
//         <span className="active"></span>
//         <span></span>
//         <span></span>
//     </div>
// </section>













// function Carrousel(){
//   return (
  
//     <div class="container-all">

//     <input type="radio" id="1" name="image-slide" hidden/>
//     <input type="radio" id="2" name="image-slide" hidden/>
//     <input type="radio" id="3" name="image-slide" hidden/>

//     <div class="slide">

//         <div class="item-slide">
//             <img src="https://www.hoycripto.com/__export/1689993180257/sites/elimparcial/img/2023/07/21/dragon-ball-super-goku-ultra-instinto-1549463584.jpg_521680932.jpg"/>
//         </div>
//         <div class="item-slide">
//             <img src="https://www.hoycripto.com/__export/1689993180257/sites/elimparcial/img/2023/07/21/dragon-ball-super-goku-ultra-instinto-1549463584.jpg_521680932.jpg"/>
//         </div>
//         <div class="item-slide">
//             <img src="https://www.hoycripto.com/__export/1689993180257/sites/elimparcial/img/2023/07/21/dragon-ball-super-goku-ultra-instinto-1549463584.jpg_521680932.jpg"/>
//         </div><div class="item-slide">
//             <img src="https://www.hoycripto.com/__export/1689993180257/sites/elimparcial/img/2023/07/21/dragon-ball-super-goku-ultra-instinto-1549463584.jpg_521680932.jpg"/>
//         </div><div class="item-slide">
//             <img src="https://www.hoycripto.com/__export/1689993180257/sites/elimparcial/img/2023/07/21/dragon-ball-super-goku-ultra-instinto-1549463584.jpg_521680932.jpg"/>
//         </div>

        

//     </div>

//     <div class="pagination">
       
//         <label class="pagination-item" for="1">
//             <img src="Images/img1.jpg"/>
//         </label>
        
//         <label class="pagination-item" for="2">
//             <img src="Images/img2.jpg"/>
//         </label>
        
//         <label class="pagination-item" for="3">
//             <img src="Images/img3.jpg"/>
//         </label>
        
//     </div>
    
// </div>

 
//   );
// }

// export default Carrousel;