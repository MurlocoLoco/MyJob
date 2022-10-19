import styles from "./ProgressBar.module.css"
import { IContextTarefas, useBase } from "../../providers/base";
import { useEffect, useState } from "react";

const ProgressBar = () => {
    const { tamanhoProgress } = useBase() as IContextTarefas;
    
    return(
        <div className={styles.main}>
            <div className={styles.progress} style = {{width: `${tamanhoProgress}vw` }}></div>
        </div>
    );
} 

export default ProgressBar;