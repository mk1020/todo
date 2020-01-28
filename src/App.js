import React from "react";
import ReactDom from "react-dom";
import { Button, Checkbox } from "@material-ui/core";
import styles from "./App.module.css";
import { connect } from "react-redux";
import { checkBoxChangeCreate } from "./redux/todoReducer";
import { Rendering } from "./components/rendering/rendering";
const App = props => {
  /*  const handleChange = event => {
   event.target.checked;
  }; */

  const checkBoxChange = (event, ind) => {
    return props.checkBoxChange(event.target.checked, ind);
  };
  return (
    <div className={styles.App_wrapper_wrapper}>
      <div className={styles.wrapper_App}>
        <div className={styles.App}>
          <div className={styles.wrapper_checkBox}>
            {props.todo.forEach((el, ind) => {
              debugger
              return (
                <Checkbox
                  className={styles.checkbox}
                  checked={props.todo[ind].bool}
                  onChange={event => checkBoxChange(event, ind)}
                  value="primary"
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              );
            })}
          </div> 
          
          <div className={styles.wrapper_buttons}>
            {props.todo.forEach((item, i, arr) => {
              if (item.complete) {
                return (
                  <div className={styles.wrapper_button}>
                    <Button
                      variant="contained"
                      color="primary"
                      className={styles.button}
                    >
                      {item.do}
                    </Button>
                  </div>
                );
              } else
                return (
                  <div className={styles.wrapper_button}>
                    <Button
                      variant="contained"
                      color="primary"
                      className={styles.button_non}
                    >
                      {item.do}
                    </Button>
                  </div>
                );
            })}
          </div>
          <Rendering todo={props.todo} />
        </div>
      </div>
    </div>
  );
};

export default connect(
  state => ({ todo: state.todo }),
  dispatch => {
    return {
      checkBoxChange: (bool, ind) => dispatch(checkBoxChangeCreate(bool, ind))
    };
  }
)(App);

//как в скобочка {} работают jsx компоненты
//как выполняется отрисовка при нажатии на чек бокс
