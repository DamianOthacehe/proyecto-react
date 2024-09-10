
export default function MiNavbar({texto}){

    const handleClick = () => {
        alert(`seccion ${texto} proximamente`)
    }
    

    return(
        <li className="navbar" onClick={handleClick}> <a href="" className="links">{texto}</a></li>
    )
}