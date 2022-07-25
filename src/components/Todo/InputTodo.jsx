import styles from "./InputTodo.module.scss";
import { useState } from "preact/hooks";

const InputTodo = ({addATask}) => {
    const [task, setTask] = useState();
    const sendNewTask = (e)=>{
        e.preventDefault();
        addATask(task);
        setTask('');
    }
  return (
    <div className={styles["input-wrapper"]}>
      
      <form action="" onSubmit={sendNewTask}>
        <input className={styles['input-list']} value={task} onInput={(e)=> setTask(e.target.value)} type="text" placeholder="Que cosas quieres hacer?" />
        <input className = {styles['input-button']} disabled={!task} type="submit" value="ADD"/> 
        
      </form>
    </div>
  );
};

export default InputTodo;
