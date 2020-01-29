import React from "react";
import ReactDom from "react-dom";
import { Button, Checkbox, ListItem } from "@material-ui/core";
import styles from "./App.module.css";
import { connect } from "react-redux";
import { checkBoxChangeCreate } from "./actions";
import {Item_menu} from './components/item_menu'
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
  const { todo = [], checkBoxChangeCreate } = props;

  return (
    <div className={styles.App_wrapper_wrapper}>
      <div className={styles.App_wrapper}>
        <h1>app</h1>
        <div className={styles.App}>
          {todo.map((el, ind) => (
            <Item
              key={`item@${ind}`}
              text={el.do}
              checked={el.bool}
              onChange={e => {
                // передаем action
                checkBoxChangeCreate({ ind: ind, bool: e.target.checked });
              }}
            />
          ))}
        </div>  
        {  //find применяет стрелочную ф-ю к каждому эл массива
          //когда стрелочная ф-я возвр true, find возвр элемент массива
         //если ничего не найдено find возвр undefined
        todo.find(el => el.bool) && <Item_menu />}
      </div>
    </div>
  );
};

export default connect(state => ({ todo: state.todo }), {
  checkBoxChangeCreate
})(App);

//как в скобочка {} работают jsx компоненты
//как выполняется отрисовка при нажатии на чек бокс
