
export default function NavBar({ links }) {

    const handleClick = () => {
        alert(`Seccion ${links} proximamente`);
    }

    return (
        <>
        <li onClick={handleClick}><a href="">{links}</a></li>
        </>
    );
}