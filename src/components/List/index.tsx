import styles from "./List.module.css";
import { useBase, IContextTarefas } from "../../providers/base";


const List = () => {
    const { tarefas } = useBase() as IContextTarefas;
    return (
        <div className={styles.listmain}>
            <ul>
                {tarefas.map(item => (
                    <li key={item.key} >
                        <h2>{item.titulo}</h2>
                        <h3>{item.descricao}</h3>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List;
