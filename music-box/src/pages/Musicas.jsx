import { useState } from "react";
import api from "../api";

import logoVerde from "../assets/imagens/logo-verde.png"
import imagemAvatar from "../assets/imagens/avatar.png"
import CardMusica from "../components/cardMusica";

function Musicas() {

    const [musicas, setMusicas] = useState([])

    function getMusicas() {
        api.get("/musicas")
            .then((response) => {
                console.log("RESPONSE: ", response)
                console.log("MÚSICAS: ", response.data)
                setMusicas(response.data)
            }).catch((err) => {
                if (err.response.status === 404) {
                    console.log("Este endpoint não existe")
                } else {
                    console.error(err)
                }
            })

    }

    return (
        <div>
            <nav>
                <div className="container">
                    <img src={logoVerde} alt="Logo" className="logo" />
                    <img src={imagemAvatar} alt="Avatar" className="avatar" />
                </div>
            </nav>

            <div className="container">
                <div className="filter">
                    <button onClick={getMusicas} className="btn">Adicionar</button>
                </div>
            </div>

            <div className="container">
                <div className="music-boxes">
                {
                    musicas.map((musica) => {
                        return (
                            <CardMusica musica={musica} key={musica.id}/>
                        )
                    })
                } 
                                       

                </div>
            </div>
        </div>
        // <div>
        //     <h1>Lista de Músicas!</h1>
        //     <button onClick={getMusicas}>
        //         Listar Músicas
        //     </button>
        //     <div>
                
        //     </div>
        // </div>
    );
}

export default Musicas;