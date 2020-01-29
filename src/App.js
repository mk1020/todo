import React from "react";
import ReactDom from "react-dom";
import { Button, Checkbox, ListItem } from "@material-ui/core";
import styles from "./App.module.css";
import { connect } from "react-redux";
import { checkBoxChangeCreate } from "./actions";
import { ItemMenu } from "./components/ItemMenu/ItemMenu";
//todo: implement render item, remove two call map
//todo:change call action

const Item = ({ text, checked, onChange = () => {} }) => (
  <div className={styles.checkbox_and_button}>
    <Checkbox
      className={styles.checkbox}
      checked={checked}
      onChange={event => onChange(event)} //функция с одним параметром, у которой внутри action
      value="primary"
      inputProps={{ "aria-label": "primary checkbox" }}
    />
    <Button variant="contained" color="primary" className={styles.button}>
      {text}
    </Button>
  </div>
);

const App = props => {
  const { listTask = [], checkBoxChangeCreate } = props;

  return (
    <div className={styles.App_wrapper_wrapper}>
      <div className={styles.App_wrapper}>
        <h1>app</h1>
        <div className={styles.app_and_item_menu}>
          <div className={styles.App}>
            {listTask.map((el, ind) => (
              <Item
                key={`item@${ind}`}
                text={el.task}
                checked={el.select}
                onChange={e => {
                  // передаем action
                  checkBoxChangeCreate({ ind: ind, select: e.target.checked });
                }}
              />
            ))}
          </div>
          <div
            className={
              listTask.find(el => el.select) ? styles.wrapper_Item_menu : ""
            }
          >
            {//find применяет стрелочную ф-ю к каждому эл массива
            //когда стрелочная ф-я возвр true, find возвр элемент массива
            //если ничего не найдено find возвр undefined
            listTask.find(el => el.select) && <ItemMenu />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(
  state => ({ listTask: state.taskReducer.listTask }),
  {
    checkBoxChangeCreate
  }
)(App);

//как в скобочка {} работают jsx компоненты
//как выполняется отрисовка при нажатии на чек бокс
