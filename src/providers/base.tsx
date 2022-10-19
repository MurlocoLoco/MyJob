import React, { useEffect, useState } from 'react';

export const BaseContext = React.createContext({});

interface Props {
    children: React.ReactNode;
}
export interface ITarefas {
    titulo: string,
    descricao: string,
    completado: boolean,
    id: string
}
export interface IContextTarefas {
    tarefas: ITarefas[],
    setTarefas: (tarefas: ITarefas[]) => void,
    tamanhoProgress: number
}
export const BaseProvider: React.FC<Props> = ({ children }) => {

    const initialState: ITarefas[] = [{
        titulo: "Teste",
        descricao: "Testando",
        completado: false,
        id: "h1v4"
    },
    {
        titulo: "Teste2",
        descricao: "Testando2",
        completado: true,
        id: "pasd9"
    }]
    const [tarefas, setTarefas] = React.useState(initialState);
    const [ tamanhoProgress, setTamanhoProgress] = useState(0);

    useEffect(() =>{
            const total = tarefas.length;
            const completados = tarefas.filter(tarefa => tarefa.completado === true);
            const tamanhoProgress = (70/total) * completados.length
            setTamanhoProgress(tamanhoProgress);
    }, [tarefas])
    
    
    return (
        <BaseContext.Provider value={{tarefas, setTarefas, tamanhoProgress}}>
            {children}
        </BaseContext.Provider>
    );
};

export const useBase = () => React.useContext(BaseContext);

