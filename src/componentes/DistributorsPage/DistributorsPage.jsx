import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Link } from "react-router-dom";
import { db } from "../../firebase/firebase"; // Importar la base de datos de Firebase
import { collection, getDocs, query, where } from "firebase/firestore"; // Importar funciones necesarias de Firestore
import { useState } from "react"; // Importar useState para manejar el estado
import './DistributorsPage.css'

export default function DistributorsPage() {
    const [distributors, setDistributors] = useState([]); // Estado para almacenar distribuidores
    const [selectedZone, setSelectedZone] = useState(null); // Estado para la zona seleccionada
    const [mapCenter, setMapCenter] = useState({ lat: 40.4168, lng: -3.7038 }); // Centro del mapa (Madrid)

    const fetchDistributors = async (zone) => {
        if (selectedZone === zone) {
            // Si la zona ya está seleccionada, cerramos el dropdown
            setSelectedZone(null);
            setDistributors([]); // Limpiar la lista de distribuidores
            setMapCenter({ lat: 40.4168, lng: -3.7038 }); // Volver a centrar el mapa en Madrid
        } else {
            const q = query(collection(db, "distributors"), where("zone", "==", zone)); // Consulta para obtener distribuidores
            const querySnapshot = await getDocs(q);
            const distributorsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })); // Mapear los resultados
            setDistributors(distributorsList); // Actualizar el estado con los distribuidores obtenidos
            setSelectedZone(zone); // Actualizar la zona seleccionada
            if (distributorsList.length > 0) {
                setMapCenter({ lat: distributorsList[0].latitude, lng: distributorsList[0].longitude }); // Centrar el mapa en el primer distribuidor
            }
        }
    };

    return (
        <div className="container">
            <h1>Distribuidores</h1>
            <h3>Encuentra los distribuidores de nuestros productos en todo el país.</h3>

            <div style={{ display: 'flex' }}>
                <div style={{ flex: 1 }}>
                    <h2>Distribuidores en tu zona</h2>

                    <div>
                        <Link className="link" onClick={() => fetchDistributors(1)}>Cataluña</Link>
                        {selectedZone === 1 && (
                            <div>
                                <h3>Distribuidores en Cataluña:</h3>
                                <ul>
                                    {distributors.map(distributor => (
                                        <li key={distributor.id}>
                                            {<strong>{distributor.name}</strong>} - {distributor.phone} - 
                                            <a href={distributor.website} target="_blank" rel="noopener noreferrer">
                                                {distributor.website}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    <div>
                        <Link className="link" onClick={() => fetchDistributors(2)}>Valencia - Castellón - Alicante - Murcia</Link>
                        {selectedZone === 2 && (
                            <div>
                                <h3>Distribuidores en Valencia - Castellón - Alicante - Murcia:</h3>
                                <ul>
                                    {distributors.map(distributor => (
                                        <li key={distributor.id}>
                                            {<strong>{distributor.name}</strong>} - {distributor.phone} - 
                                            <a href={distributor.website} target="_blank" rel="noopener noreferrer">
                                                {distributor.website}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    <div>
                        <Link className="link" onClick={() => fetchDistributors(3)}>Andalucía y Canarias</Link>
                        {selectedZone === 3 && (
                            <div>
                                <h3>Distribuidores en Andalucía y Canarias:</h3>
                                <ul>
                                    {distributors.map(distributor => (
                                        <li key={distributor.id}>
                                            {<strong>{distributor.name}</strong>} - {distributor.phone} - 
                                            <a href={distributor.website} target="_blank" rel="noopener noreferrer">
                                                {distributor.website}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    <div>
                        <Link className="link" onClick={() => fetchDistributors(4)}>Zaragoza y norte de España</Link>
                        {selectedZone === 4 && (
                            <div>
                                <h3>Distribuidores en Zaragoza y norte de España:</h3>
                                <ul>
                                    {distributors.map(distributor => (
                                        <li key={distributor.id}>
                                            {<strong>{distributor.name}</strong>} - {distributor.phone} - 
                                            <a href={distributor.website} target="_blank" rel="noopener noreferrer">
                                                {distributor.website}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    <div>
                        <Link className="link" onClick={() => fetchDistributors(5)}>Centro y Galicia</Link>
                        {selectedZone === 5 && (
                            <div>
                                <h3>Distribuidores en Centro y Galicia:</h3>
                                <ul>
                                    {distributors.map(distributor => (
                                        <li key={distributor.id}>
                                            {<strong>{distributor.name}</strong>} - {distributor.phone} - 
                                            <a href={distributor.website} target="_blank" rel="noopener noreferrer">
                                                {distributor.website}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    <div>
                        <Link className="link" onClick={() => fetchDistributors(6)}>Exportación</Link>
                        {selectedZone === 6 && (
                            <div>
                                <h3>Distribuidores fuera de España:</h3>
                                <ul>
                                    {distributors.map(distributor => (
                                        <li key={distributor.id}>
                                            {<strong>{distributor.name}</strong>} - {distributor.phone} - 
                                            <a href={distributor.website} target="_blank" rel="noopener noreferrer">
                                                {distributor.website}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
                <div style={{ flex: 1 }}>
                    <LoadScript googleMapsApiKey="AIzaSyCb5vokgv-lO1Lgm9O8f-RS5atGGx0FAPg">
                        <GoogleMap
                            mapContainerStyle={{ height: "400px", width: "100%" }}
                            center={mapCenter}
                            zoom={6}
                        >
                            {distributors.map(distributor => (
                                <Marker
                                    key={distributor.id}
                                    position={{ lat: distributor.latitude, lng: distributor.longitude }}
                                    title={distributor.name}
                                />
                            ))}
                        </GoogleMap>
                    </LoadScript>
                </div>
            </div>
        </div>
    )
}