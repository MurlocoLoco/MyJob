import styles from "./List.module.css";
import { useBase, IContextTarefas, ITarefas } from "../../providers/base";

const List = () => {
    const { tarefas, setTarefas } = useBase() as IContextTarefas;

    const selectTarefa = (id: string) => {
        const selectedTarefa = tarefas.find(obj => { return obj.id === id });
        if (selectedTarefa) {
            const updatedTarefa: ITarefas = {
                ...selectedTarefa,
                completado: !selectedTarefa.completado
            }
            const result: ITarefas[] = tarefas.map(tarefa => tarefa.id === id ? updatedTarefa : tarefa);
            setTarefas(result);
        }
    }
    const excluirTarefa = (id: string) => {
        const selectedTarefa = tarefas.filter(obj => { return obj.id !== id });
        setTarefas(selectedTarefa)
    }
    return (
        <div className={styles.listMain}>
            <ul>
                {tarefas.map(item => (
                    <div className={styles.divTeste}>
                        <li onClick={() => selectTarefa(item.id)} key={item.id} className={`${item.completado ? styles.completado : styles.item}`}>
                            <h2>{item.titulo}</h2>
                            <h3>{item.descricao}</h3>
                        </li>
                        <div onClick={() => excluirTarefa(item.id)} className={styles.excluirItem}></div>
                    </div>

                ))}
            </ul>
        </div>
    );
};

export default List;
