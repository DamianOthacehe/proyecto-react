import { Link } from "react-router-dom";
import { db } from "../../firebase/firebase"; // Importar la base de datos de Firebase
import { collection, getDocs, query, where } from "firebase/firestore"; // Importar funciones necesarias de Firestore
import { useState } from "react"; // Importar useState para manejar el estado
import './DistributorsPage.css'

export default function DistributorsPage() {
    const [distributors, setDistributors] = useState([]); // Estado para almacenar distribuidores
    const [selectedZone, setSelectedZone] = useState(null); // Estado para la zona seleccionada

    const fetchDistributors = async (zone) => {
        if (selectedZone === zone) {
            // Si la zona ya está seleccionada, cerramos el dropdown
            setSelectedZone(null);
            setDistributors([]); // Limpiar la lista de distribuidores
        } else {
            const q = query(collection(db, "distributors"), where("zone", "==", zone)); // Consulta para obtener distribuidores
            const querySnapshot = await getDocs(q);
            const distributorsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })); // Mapear los resultados
            setDistributors(distributorsList); // Actualizar el estado con los distribuidores obtenidos
            setSelectedZone(zone); // Actualizar la zona seleccionada
        }
    };

    return (
        <div className="container">
            <h1>Distribuidores</h1>
            <p>Encuentra los distribuidores de nuestros productos en todo el país.</p>

            <div>
                <h2>Distribuidores en tu zona</h2>

                <div>
                    <Link className="link" onClick={() => fetchDistributors(1)}>Zona 1: Cataluña</Link>
                    {selectedZone === 1 && (
                        <div>
                            <h3>Distribuidores en Zona 1:</h3>
                            <ul>
                                {distributors.map(distributor => (
                                    <li key={distributor.id}>
                                        {distributor.name} - {distributor.phone} - {distributor.website}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                <div>
                    <Link className="link" onClick={() => fetchDistributors(2)}>Zona 2: Valencia - Castellón - Alicante - Murcia</Link>
                    {selectedZone === 2 && (
                        <div>
                            <h3>Distribuidores en Zona 2:</h3>
                            <ul>
                                {distributors.map(distributor => (
                                    <li key={distributor.id}>
                                        {distributor.name} - {distributor.phone} - {distributor.website}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                <div>
                    <Link className="link" onClick={() => fetchDistributors(3)}>Zona 3: Andalucía - Canarias</Link>
                    {selectedZone === 3 && (
                        <div>
                            <h3>Distribuidores en Zona 3:</h3>
                            <ul>
                                {distributors.map(distributor => (
                                    <li key={distributor.id}>
                                        {distributor.name} - {distributor.phone} - {distributor.website}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                <div>
                    <Link className="link" onClick={() => fetchDistributors(4)}>Zona 4: Zaragoza y norte de España</Link>
                    {selectedZone === 4 && (
                        <div>
                            <h3>Distribuidores en Zona 4:</h3>
                            <ul>
                                {distributors.map(distributor => (
                                    <li key={distributor.id}>
                                        {distributor.name} - {distributor.phone} - {distributor.website}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                <div>
                    <Link className="link" onClick={() => fetchDistributors(5)}>Zona 5: Centro y Galicia</Link>
                    {selectedZone === 5 && (
                        <div>
                            <h3>Distribuidores en Zona 5:</h3>
                            <ul>
                                {distributors.map(distributor => (
                                    <li key={distributor.id}>
                                        {distributor.name} - {distributor.phone} - {distributor.website}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                <div>
                    <Link className="link" onClick={() => fetchDistributors(6)}>Zona 6: Exportación</Link>
                    {selectedZone === 6 && (
                        <div>
                            <h3>Distribuidores en Zona 6:</h3>
                            <ul>
                                {distributors.map(distributor => (
                                    <li key={distributor.id}>
                                        {distributor.name} - {distributor.phone} - {distributor.website}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}