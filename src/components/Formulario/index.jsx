import { useState, useEffect } from "react"

const Formulario = (props) => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');
    
    useEffect(() => {
        console.log("Componente inicializado");
    
        return () => {
            console.log("Componente finalizado.")
        }
    }, []);

    useEffect(() => {
        console.log("O estado 'nome' mudou");
    }, [nome]);

    useEffect(() => {
        console.log("A materia A mudou para: " + materiaA)
    }, [materiaA, materiaB, materiaC]);

    const alteraNome = (evento) => {
        setNome(evento.target.value);
    }


    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 2;

        
        ;

        if (media >= 6) {
            return (
                <p>Olá, {nome}! Você foi aprovado!</p>
            )
        } else {
            return(
                <p>Olá, {nome}. Você foi reprovado.</p>
            )
        }
    }

    return (
        <form>
            <ul>
            {[1,2,3,4,5].map(item => (
                <li key={item}>{item}</li>
                ))}
            </ul>

            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota Matéria A" onChange={({ target }) => setMateriaA(parseInt(target.value))} />
            <input type="number" placeholder="Nota Matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota Matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario