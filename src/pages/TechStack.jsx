import { Link } from 'react-router-dom'
import techStack from '../data/techStack.data' 

export default function TechStack() {
    return(
        <>
        <h1>Web Technology</h1>

        <div className="flex items-center gap-x-4 flex-wrap justify-center " >
            {techStack.map((value,id)=>(
                <div className="grid justify-center justify-items-center border rounded-sm p-4 items-center " key={id}>
                    <h1>{value.name}</h1>


                    <img className='h-40 w-40 object-cover' src={value.image} alt={value.name} />
                    <p className='text-sm w-60 text-justify'>{value.description}</p>
                    <Link to={`/products/${value.id}`} className='float-right py-2 px-4 bg-orange-600'>See more</Link>
                </div>
            ))}
        </div>
        </>
    )
}