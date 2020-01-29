import React from "react";
import { Button } from "@material-ui/core";
import styles from "./actions.module.css";
import { connect } from "react-redux";

export const Item_menu = props => {
  // todo move work with store to action and reducers
  const onClickComplete = () => {
    for (let i = 0; i < props.todo.length; i++) {
      if (props.todo[i].bool) {
        props.todo[i].complete = true;
      }
    }
  };

  return (
    <div className={styles.wrapper_button}>
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

export default connect ((state)=> ({todo: state.todo}) )(Item_menu)