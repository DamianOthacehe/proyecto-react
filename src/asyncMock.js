const products = [
    {
        id: 1,
        title: "Icaro",
        image: "https://plus.unsplash.com/premium_photo-1664287397511-9b037f603b99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyYXZhbmF8ZW58MHx8MHx8fDA%3D",
        description: "Disfruta de tus aventuras al aire libre con el confort y la funcionalidad que solo el Ícaro puede ofrecer.",
        price: 3000,
        category: "Avancés",
        features: "Espacio generoso, Ventilación superior, Acceso facilitado, Diseño adaptable",
    },
    {
        id: 2,
        title: "Panama",
        image: "https://images.unsplash.com/photo-1518111742073-ddc0b2ce79e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyYXZhbmF8ZW58MHx8MHx8fDA%3D",
        description: "La perfecta combinación entre elegancia y practicidad.",
        price: 3000,
        category: "Avancés",
        features: "Profundidad destacada, Diseño adaptable, Detalles de confort ",
    },
    {
        id: 3,
        title: "Tarento",
        image: "https://images.unsplash.com/photo-1523449885954-771e49c3f4da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyYXZhbmF8ZW58MHx8MHx8fDA%3D",
        description: "Una solución práctica y eficiente para tus aventuras al aire libre.",
        price: 3000,
        category: "Avancés",
        features: "Diseño versátil, Ventilación optimizada, Laterales funcionales",
    },
    {
        id: 4,
        title: "Aranda",
        image: "https://images.unsplash.com/photo-1527542902003-a675625fb1eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcmF2YW5hfGVufDB8fDB8fHww",
        description: "La Cocina Aranda ofrece funcionalidad y comodidad sin concesiones.",
        price: 1000,
        category: "Cocinas",
        features: "Espacio Generoso, Ventana Trasera Desplazada, Diseño Completo",
    },
    {
        id: 5,
        title: "Iona",
        image: "https://images.unsplash.com/photo-1520804319739-4f29b65d8de4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhcmF2YW5hfGVufDB8fDB8fHww",
        description: "Amplio espacio, luminosidad y un diseño atractivo en su cocina al aire libre.",
        price: 1000,
        category: "Cocinas",
        features: "Espacio Ilimitado, Amplios Ventanales, Diseño Atractivo, Tapas en Todas las Ventanas",
    },
    {
        id: 6,
        title: "Loira",
        image: "https://plus.unsplash.com/premium_photo-1664287398125-eeae081082a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGNhcmF2YW5hfGVufDB8fDB8fHww",
        description: "Versátil y moderna, se adapta a sus necesidades y eleva su experiencia culinaria al aire libre.",
        price: 1000,
        category: "Cocinas",
        features: "Frontal Innovador, Espacio Amplio, Estilo Moderno",
    },
    {
        id: 7,
        title: "Classic",
        image: "https://images.unsplash.com/photo-1705078368468-6e3a9f8de667?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNhcmF2YW5hfGVufDB8fDB8fHww",
        description: "La solución definitiva para quienes buscan confort y funcionalidad en su toldo.",
        price: 5000,
        category: "Explorers",
        features: "Diseño Único, Ventanas Enrollables, Sistema de Fijación Eficiente",
    },
    {
        id: 8,
        title: "Concept",
        image: "https://images.unsplash.com/photo-1563783850023-077d97825802?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhcmF2YW5hfGVufDB8fDB8fHww",
        description: "La elección perfecta para quienes desean un cerramiento avanzado y funcional.",
        price: 5000,
        category: "Explorers",
        features: "Privacidad y Durabilidad, Ventanas Amplias, Mosquiteras Mejoradas, Sistema de Fijación Eficiente",
    },
    {
        id: 9,
        title: "Legend",
        image: "https://images.unsplash.com/photo-1599889917438-211ac4924647?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGNhcmF2YW5hfGVufDB8fDB8fHww",
        description: "La perfecta combinacion entre funcionalidad, privacidad y comodidad",
        price: 5000,
        category: "Explorers",
        features: "Ventanas Amplias, Mosquiteras Mejoradas, Apertura de Puerta Lateral, Sistema Clip & Go",
    },
]

export const getProducts = new Promise((resolve) => {
    setTimeout(() => {
        resolve(products);
    }, 2000);
});

export const getProduct = (id) => {
    return products.find((prod) => prod.id == id);
}