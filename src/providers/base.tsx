import React from 'react';


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
    
    return (
        <BaseContext.Provider value={{tarefas, setTarefas}}>
            {children}
        </BaseContext.Provider>
    );
};

export const useBase = () => React.useContext(BaseContext);

