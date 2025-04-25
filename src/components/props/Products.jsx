// function Products({products}){
//     console.log(products);
//     return(
//         <>
//         <div className="products">
//             {
//                 products.map((val,id)=>(
//                     <div className="product">
//                         <img src={val.image} alt={val.name} />
//                         <h1>{val.name}</h1>
//                         <p id="des">{val.description}</p>
//                         <p>Price : {val.price}</p>
//                         <p>Stock : {val.stock}</p>
//                         <button>Buy Now</button>
//                     </div>
//                 ))
//             }
//         </div>
//         </>

//     )

// }
import ProductData from "./Products.data";
function Products(){
    console.log(ProductData);
    return(
        <>
        <div className="products">
            {
                ProductData.map((val,id)=>(
                    <div className="product">
                        <img src={val.image} alt={val.name} />
                        <h1>{val.name}</h1>
                        <p id="des">{val.description}</p>
                        <p>Price : {val.price}</p>
                        <p>Stock : {val.stock}</p>
                        <button>Buy Now</button>
                    </div>
                ))
            }
        </div>
        </>

    )

}
export default Products;