"use client";

import { useState } from "react";
import styles from "../styles/ModalTarefa.module.scss";

const ModalNovaTarefa = ({ onClose, addTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask("");
    onClose();
  };

  return (
    <>
      <div className={styles.backdrop} />
      <div className={styles.modal}>
        <h2 className={styles.modalTitle}>Nova tarefa</h2>
        <form onSubmit={handleSubmit} className={styles.modalForm}>
          <div className={styles.inputContainer}>
            <label className={styles.inputLabel}>Título:</label>
            <input 
              type="text" 
              value={task} 
              onChange={(e) => setTask(e.target.value)} 
              required 
              className={styles.inputField}
            />
          </div>
          <div className={styles.modal__buttons}>
            <button type="button" className={styles.buttoncancel} onClick={onClose}>Cancelar</button>
            <button type="submit" className={styles.buttonconfirmar}>Adicionar</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ModalNovaTarefa;
