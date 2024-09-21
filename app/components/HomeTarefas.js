"use client";

import { useEffect, useState } from "react";
import ModalNovaTarefa from "./ModalNovaTarefa";
import ModalDeletar from "./ModalDeletar";
import NovaTarefaButton from "./NovaTarefaButton";
import styles from "../styles/HomeTarefas.module.scss";

const HomeTarefas = () => {
  const [tarefas, setTarefas] = useState([]);
  const [showModalNovaTarefa, setShowModalNovaTarefa] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [showModalDeletar, setShowModalDeletar] = useState(false);

  useEffect(() => {
    const storedTarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
    setTarefas(storedTarefas);
  }, []);

  const addTask = (taskText) => {
    const newTask = { text: taskText, completed: false };
    const newTarefas = [...tarefas, newTask];
    setTarefas(newTarefas);
    localStorage.setItem("tarefas", JSON.stringify(newTarefas));
  };

  const toggleTaskCompletion = (task) => {
    const updatedTarefas = tarefas.map(t => 
      t.text === task.text ? { ...t, completed: !t.completed } : t
    );
    setTarefas(updatedTarefas);
    localStorage.setItem("tarefas", JSON.stringify(updatedTarefas));
  };

  const deleteTask = () => {
    const newTarefas = tarefas.filter((task) => task.text !== taskToDelete.text);
    setTarefas(newTarefas);
    localStorage.setItem("tarefas", JSON.stringify(newTarefas));
    setShowModalDeletar(false);
  };

  return (
    <div>
      <div className={styles.tarefas}>
        <div className={styles.tarefas__taskContainer}>
        <h1 className={styles.tarefas__title}>Suas tarefas de hoje</h1>
          <div className={styles.tarefas__tasks}>
            {tarefas.filter(task => !task.completed).map((task, index) => (
              <div key={index} className={styles.tarefas__taskItem}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(task)}
                  className={styles.tarefas__checkbox}
                />
                <div className={styles.tarefas__taskText}>{task.text}</div>
                <button
                  onClick={() => {
                    setTaskToDelete(task);
                    setShowModalDeletar(true);
                  }}
                  className={styles.tarefas__deleteButton}
                >
                  <img
                    src="/trash.png"
                    className={styles.tarefas__trashIcon}
                    alt="Delete Task"
                  />
                </button>
              </div>
            ))}
          </div>

          <h2 className={styles.tarefas__finishedTasks}>Tarefas Finalizadas</h2>
          <div className={styles.tarefas__tasks}>
            {tarefas.filter(task => task.completed).map((task, index) => (
              <div key={index} className={styles.tarefas__taskItem} style={{ textDecoration: 'line-through' }}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(task)}
                  className={styles.tarefas__checkbox}
                />
                <div className={styles.tarefas__taskTextFinished}>{task.text}</div>
                <button
                  onClick={() => {
                    setTaskToDelete(task);
                    setShowModalDeletar(true);
                  }}
                  className={styles.tarefas__deleteButton}
                >
                  <img
                    src="/trash.png"
                    className={styles.tarefas__trashIcon}
                    alt="Delete Task"
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <NovaTarefaButton onClick={() => setShowModalNovaTarefa(true)} />
      {showModalNovaTarefa && (
        <ModalNovaTarefa
          onClose={() => setShowModalNovaTarefa(false)}
          addTask={addTask}
        />
      )}
      {showModalDeletar && (
        <ModalDeletar
          task={taskToDelete}
          onConfirm={deleteTask}
          onCancel={() => setShowModalDeletar(false)}
        />
      )}
    </div>
  );
};

export default HomeTarefas;
