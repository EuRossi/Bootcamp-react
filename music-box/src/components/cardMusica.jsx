import Musicas from "../pages/Musicas";

function CardMusica(props){

    return(
        <div className="card-music">
                        <div className="icons">
                            <img src="../imagens/edit-icon.png" alt="" />
                            <img src="../imagens/delete-icon.png" alt="" />
                        </div>
                        <div className="info-music">
                            <p>
                                <strong className="card-title">música: </strong>
                                <input className="input-music-enable" type="text" defaultValue={props.musica.titulo} />
                            </p>
                            <p>
                                <strong className="card-title">artista: </strong>
                                <input className="input-music-enable" type="text" defaultValue={props.musica.artista}/>
                            </p>    
                            <p>
                                <strong className="card-title">gênero: </strong>
                                <input className="input-music-enable" type="text" defaultValue={props.musica.genero} />
                            </p>
                            <p>
                                <strong className="card-title">ano: </strong>
                                <input className="input-music-enable" type="text" defaultValue={props.musica.ano} />
                            </p>
                            <button className="btn-salvar-enable">Salvar</button>
                        </div>
                    </div>

    );
}

export default CardMusica;