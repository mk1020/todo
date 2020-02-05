import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import styles from "./actions.module.css";
import { connect } from "react-redux";
import {
  onClickButtonCreate,
  deleteTasks,
  editTask,
  creationDate
} from "../../actions/index";

const ItemMenu = props => {
  // todo move work with store to action and reducers
  const {
    onClickButtonCreate,
    deleteTasks,
    editTask,
    listTask = [],
    creationDate
  } = props;
  let [countSelect, setCountSelect] = useState(0);  

  const count = listTask.filter(el => el.select).length;
  return (
    <div className={styles.wrapper_button}>
      <Button
        className={styles.button}
        onClick={onClickButtonCreate}
        variant="outlined"
        color="secondary"
      >
        Complete
      </Button>
      <Button variant="outlined" color="secondary" onClick={()=> deleteTasks(-1)}>
        Delete
      </Button>

      {count === 1 && (
        <div className={styles.wrapper}>
          <Button variant="outlined" color="secondary" onClick={editTask}>
            Edit
          </Button>
          <Button variant="outlined" color="secondary" onClick={creationDate}>
            Creation date
          </Button>
        </div>
      )}
    </div>
  );
};

export default connect(
  state => ({
    listTask: state.taskReducer.listTask
  }),
  { onClickButtonCreate, deleteTasks, editTask, creationDate }
)(ItemMenu);

//listTask.reduce((count, el)=> (el.select) ? count++  :null
