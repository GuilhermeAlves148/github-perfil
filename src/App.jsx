import { useState } from "react";
import React from 'react'
import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";

function App() {  
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)
  const [nomeUsuario, setNomeUsuario ] = useState('');

  return (
    <>
      <div className="search-bar">
        <input className="search-bar--icon" type="text" placeholder="Insira o nome do usuário" onBlur={(e) => setNomeUsuario(e.target.value)} />
      </div>
      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario}/>
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}
      {/* {formularioEstaVisivel && (
        <Formulario />
      )}
      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button> */}
    </>
  )
}

export default App
