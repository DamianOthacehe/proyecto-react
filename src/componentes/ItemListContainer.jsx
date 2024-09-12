
export default function ItemListContainer({greeting}){
    return(
        <>
        <section className="greeting">
            <h1>{greeting.toUpperCase()}</h1>
            <h3>Explorando nuevos horizontes</h3>
        </section>
        </>
    );
}