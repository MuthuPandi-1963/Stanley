// function Navbar(){
//     return (
//         <>
//         <ul className="li">
//             <li>Home-1</li>
//             <li>Home-2</li>
//             <li>Home-3</li>
//             <li>Home-4</li>
//             <li>Home-5</li>
//         </ul>
//         </>
//     )
// }

// function Navbar({item}){
//     console.log(item);
    
//     return (
//         <>
//         <ul className="li">
//             <li>{item[0]}</li>
//             <li>{item[1]}</li>
//             <li>{item[2]}</li>
//             <li>{item[3]}</li>
//             <li>{item[4]}</li>
//         </ul>
//         </>
//     )
// }

function Navbar({item}){
    console.log(item);
    
    return (
        <>
        <ul className="li">
            {item.map((val,id)=>(
                <li>{val.toUpperCase()}</li>
            ))}
        </ul>
        </>
    )
}
export default Navbar;