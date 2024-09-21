"use client";

import { useEffect } from "react";
import styles from "../styles/Modal.module.scss";

const ModalDeletar = ({ task, onConfirm, onCancel }) => {
  useEffect(() => {
    // Add a class to blur the body when the modal is open
    document.body.classList.add(styles.blur);
    
    // Clean up to remove the class when the modal is closed
    return () => {
      document.body.classList.remove(styles.blur);
    };
  }, []);

  return (
    <>
      <div className={styles.backdrop} />
      <div className={styles.modal}>
        <h2>Deletar tarefa</h2>
        <p>Tem certeza que você deseja deletar essa tarefa?</p>
        <div className={styles.modal__buttons}>
          <button className={styles.buttoncancel} onClick={onCancel}>Cancelar</button>
          <button className={styles.buttondelete} onClick={onConfirm}>Deletar</button>
        </div>
      </div>
    </>
  );
};

export default ModalDeletar;
