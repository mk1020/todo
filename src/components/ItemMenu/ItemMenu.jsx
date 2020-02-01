import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import styles from "./actions.module.css";
import { connect } from "react-redux";
import {
  onClickButtonCreate,
  deleteTasks,
  editTask
} from "../../actions/index";

const ItemMenu = props => {
  // todo move work with store to action and reducers
  const { onClickButtonCreate, deleteTasks, editTask, listTask = [] } = props;
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
      <Button variant="outlined" color="secondary" onClick={deleteTasks}>
        Delete
      </Button>

      {count === 1 && (
        <Button variant="outlined" color="secondary" onClick={editTask}>
          Edit
        </Button>
      )}
    </div>
  );
};

export default connect(
  state => ({
    listTask: state.taskReducer.listTask
  }),
  { onClickButtonCreate, deleteTasks, editTask }
)(ItemMenu);

//listTask.reduce((count, el)=> (el.select) ? count++  :null
