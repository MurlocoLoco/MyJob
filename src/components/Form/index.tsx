import styles from "./Form.module.css";

const Form = () => {
    return (
        <div className={styles.formmain}>
            <form className={styles.form}>
                <input type="text" placeholder="Digite um titulo."/>
                <textarea name="descricao" placeholder="Digite uma descrição."></textarea>
                <button>Enviar</button>
            </form>
        </div>
    );
}

export default Form;