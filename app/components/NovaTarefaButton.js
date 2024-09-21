"use client";

import styles from "../styles/NovaTarefaButton.module.scss";

const NovaTarefaButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.novaTarefaButton}>
      Adicionar nova tarefa
    </button>
  );
};

export default NovaTarefaButton;
