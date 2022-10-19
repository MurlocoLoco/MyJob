import React from 'react';


export const BaseContext = React.createContext({});

interface Props {
    children: React.ReactNode;
}

export interface ITarefas {
    titulo: string,
    descricao: string,
    completado: boolean,
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
    },
    {
        titulo: "Teste2",
        descricao: "Testando2",
        completado: true,
    }]
    const [tarefas, setTarefas] = React.useState(initialState);
    
    return (
        <BaseContext.Provider value={{tarefas, setTarefas}}>
            {children}
        </BaseContext.Provider>
    );
};

export const useBase = () => React.useContext(BaseContext);

