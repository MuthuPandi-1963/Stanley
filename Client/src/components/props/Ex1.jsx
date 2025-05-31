// function Add(props){
//     return (
//         <>
//         <h1>a = {props.a}</h1>
//         <h1>b = {props.b}</h1>
//         <h1>c = a+b</h1>
//         <h1>c = {props.a + props.b}</h1>
//         </>
//     )
// }

// function Add(props){
//     console.log(props);
    
//     const {a,b} = props
//     return (
//         <>
//         <h1>a = {a}</h1>
//         <h1>b = {b}</h1>
//         <h1>c = a+b</h1>
//         <h1>c = {a + b}</h1>
//         </>
//     )
// }


function Add({a,b}){
    return (
        <>
        <h1>a = {a}</h1>
        <h1>b = {b}</h1>
        <h1>c = a+b</h1>
        <h1>c = {a + b}</h1>
        </>
    )
}
export default Add;