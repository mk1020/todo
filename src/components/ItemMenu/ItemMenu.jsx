import React from "react";
import { Button } from "@material-ui/core";
import styles from "./actions.module.css";
import { connect } from "react-redux";
import { onClickButtonCreate } from "../../actions/index";

 const ItemMenu = props => {
  // todo move work with store to action and reducers
  console.log('props', props);

  const { listTask=[],onClickButtonCreate } = props;


  return (
    <div className={styles.wrapper_button}>
      <Button
        className={styles.button}
        onClick={() => onClickButtonCreate(listTask.find((el)=> el.comlete ))}
        variant="outlined"
        color="secondary"
      >
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

export default connect(
  state => ({ listTask: state.taskReducer.listTask,test:1 }),
  {onClickButtonCreate}
)(ItemMenu);


