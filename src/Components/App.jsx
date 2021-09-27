import React from "react";
import Produto from "./Produto";

const App = () => {
    const [dados, setDados] = React.useState(null);
    const [carregando, setCarregando] = React.useState(null);

    async function handleClick(event) {
        setCarregando(true);
        const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`);
        const responseJson = await response.json();
        setDados(responseJson);
        setCarregando(false);
    }

    return (
        <div id="main">
            <h1>MeuApp</h1>
            <button style={{margin: '.5em'}} onClick={handleClick}>Notebook</button>
            <button style={{margin: '.5em'}} onClick={handleClick}>Smartphone</button>
            <button style={{margin: '.5em'}} onClick={handleClick}>Tablet</button>
            {carregando ? <p>Carregando...</p> : null}
            {!carregando && dados ? <Produto dados={dados}/> : null}
        </div>
    );
}

export default App;