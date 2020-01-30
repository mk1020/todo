import React from "react";
import { Button } from "@material-ui/core";
import styles from "./actions.module.css";
import { connect } from "react-redux";
import { onClickButtonCreate, deleteTasks} from "../../actions/index";

 const ItemMenu = props => {
  // todo move work with store to action and reducers

  const { listTask=[],onClickButtonCreate, deleteTasks } = props;
  return (
    <div className={styles.wrapper_button}>
      <Button
        className={styles.button}
        onClick={() => onClickButtonCreate(listTask.find((el)=> el.select ).id)}
        variant="outlined"
        color="secondary"
      >
        Complete
      </Button>
      <Button variant="outlined" color="secondary"  onClick={deleteTasks}>
        Delete
      </Button>
      <Button variant="outlined" color="secondary">
        Edit
      </Button>
    </div>
  );
};

export default connect(
  state => ({ listTask: state.taskReducer.listTask}),
  {onClickButtonCreate, deleteTasks}
)(ItemMenu);


