import React from "react";
import { Button } from "@material-ui/core";
import styles from "./actions.module.css";

export const Actions = (props) => {

   const onClickComplete = ()=>{ 
        for (let i=0; i<props.todo.length; i++) {
          if (props.todo[i].bool) {props.todo[i].complete=true}
        }
   }
   
  return (
    <div className={styles.wrapper_button} >
      <Button onClick={onClickComplete} variant="outlined" color="secondary">
        Complete
      </Button>
      <Button variant="outlined" color="secondary">
        Delete
      </Button>
      <Button variant="outlined" color="secondary">
        Edit
      </Button>
    </div>
  );
};
