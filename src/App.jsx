import React from "react";
import "./App.css";

function App() {
  const motos = [
    {
      nombre: "Yamaha R1",
      categoria: "Deportiva",
      precio: "$20,000",
      imagen: "https://yamaha-mundoyamaha.com/wp-content/uploads/2026/01/R15_colorNegra_650x600.webp",
    },
    {
      nombre: "Kawasaki Ninja ZX-10R",
      categoria: "Deportiva",
      precio: "$18,500",
      imagen: "https://auteco.vtexassets.com/arquivos/ids/370205-800-auto?v=638748809643070000&width=800&height=auto&aspect=true",
    },
    {
      nombre: "Ducati Panigale V4",
      categoria: "Premium",
      precio: "$25,000",
      imagen: "https://images.ctfassets.net/x7j9qwvpvr5s/2s3kj4g6msw5bXfZhibVSx/cede5036c75be62b142591c85c08b94a/2025-09-22_Panigale-V4-S-MY26-Model-Preview-1050x650.png",
    },

    // 🔥 NUEVAS MOTOS
    {
      nombre: "Suzuki Gixxer 150",
      categoria: "Street",
      precio: "$3,000",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpr6WiEBXcqame7CzPHGE-uwNfC7huTpFmMQ&s",
    },
    {
      nombre: "Suzuki Gixxer SF",
      categoria: "Deportiva",
      precio: "$3,500",
      imagen: "https://www.suzuki.com.co/sites/default/files/2021-07/GLIXXER%20SPORT%20NEGRO.png",
    },
    {
      nombre: "KTM Duke 200",
      categoria: "Naked",
      precio: "$4,200",
      imagen: "https://web2.fireboldweb.com/wp-content/uploads/2022/11/PHO_BIKE_90_RE_DUKE-200-M23-90-degreerightt-side_SALL_AEPI_V1.webp",
    },
    {
      nombre: "KTM Duke 390",
      categoria: "Naked",
      precio: "$6,000",
      imagen: "https://web2.fireboldweb.com/wp-content/uploads/2023/11/PHO_BIKE_90_LI_MY24-KTM-390-DUKE-90-LEFT-side_SALL_AEPI_V1.webp",
    },
    {
      nombre: "Bajaj Pulsar 200 NS",
      categoria: "Street",
      precio: "$3,800",
      imagen: "https://www.colcamer.com/wp-content/uploads/2024/07/Pulsar-ns-200-ngra-01.webp",
    },
    
  ];

  return (
    <div className="container">
      
      <nav className="navbar">
        <h1 className="logo">Mundo Motos</h1>
        <ul className="menu">
          <li><a href="#">Categoría</a></li>
          <li><a href="#">Precio</a></li>
          <li><a href="#">Sugerencias</a></li>
          <li><a href="#">Modelos</a></li>
        </ul>
      </nav>

      <header className="header">
        <h2>Encuentra tu moto ideal</h2>
      </header>

      <div className="grid">
        {motos.map((moto, index) => (
          <div className="card" key={index}>
            <img src={moto.imagen} alt={moto.nombre} />
            <h2>{moto.nombre}</h2>
            <p><strong>Categoría:</strong> {moto.categoria}</p>
            <p><strong>Precio:</strong> {moto.precio}</p>
            <button>Ver más</button>
          </div>
        ))}
      </div>

      <footer className="footer">
        <p>© 2026 Mundo Motos</p>
      </footer>
    </div>
  );
}

export default App;