import styles from "./List.module.css";
import { useBase, IContextTarefas } from "../../providers/base";
import { v4 as uuid } from 'uuid'



const List = () => {
    const { tarefas } = useBase() as IContextTarefas;
    return (
        <div className={styles.listMain}>
            <ul>
                {tarefas.map(item => (
                    <li key={uuid()} className={`${item.completado ?  styles.completado : styles.item}`}>
                        <h2>{item.titulo}</h2>
                        <h3>{item.descricao}</h3>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List;
