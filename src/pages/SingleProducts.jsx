import { Link, useParams } from "react-router-dom"
import techStack from "../datas/techStack.data";

export default function SingleProducts() {
    const  {id : urlId} = useParams()
    console.log(urlId);
    const newProducts = techStack.filter(val=>val.id == urlId)
    console.log(newProducts);
    if(! newProducts.length > 0){
        return <p> no products found</p>
    }
    
    
    return (
        <>
        <h1>{urlId}</h1>
        <h1>Product </h1>
        <div className="flex items-center gap-x-4 flex-wrap justify-center " >
            {newProducts &&
             newProducts.map((value,id)=>(
                <div className="grid justify-center justify-items-center border rounded-sm p-4 items-center " key={id}>
                    <h1>{value.name}</h1>


                    <img className='h-40 w-40 object-cover' src={value.image} alt={value.name} />
                    <p className='text-sm w-60 text-justify'>{value.description}</p>
                    <Link to={`/done/${value.id}`} className='float-right py-2 px-4 bg-orange-600'>See more</Link>
                </div>
            ))}
        </div>
        <Link to={"/products"} >Go to Products</Link>
        </>
    )
}