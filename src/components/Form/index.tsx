import styles from "./Form.module.css";
import { useBase, IContextTarefas, ITarefas } from "../../providers/base";
import React, { useState } from "react";
import { v4 as uuid } from 'uuid'

const Form = () => {
    const { tarefas, setTarefas } = useBase() as IContextTarefas;
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");


    const addTarefa = (event: React.FormEvent) => {
        event.preventDefault();
        const novaTarefa: ITarefas = {
            titulo,
            descricao,
            completado: false,
            id: uuid()
        };
        setTarefas([...tarefas, novaTarefa]);
        limparForm();
    }
    const limparForm =() =>{
        setTitulo("");
        setDescricao("");
    };
    return (
        <div className={styles.formmain} >
            <form className={styles.form} onSubmit={addTarefa}>
                <input onChange={e => setTitulo(e.target.value)} value={titulo} name="titulo" type="text" placeholder="Digite um titulo." required/>
                <textarea onChange={e => setDescricao(e.target.value)} value={descricao} name="descricao" placeholder="Digite uma descrição." required></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Form;