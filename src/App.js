import React, { useEffect, useState } from "react";
import { Button, Checkbox } from "@material-ui/core";
import styles from "./App.module.css";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import {
  checkBoxChangeCreate,
  workedComplete,
  changeTask,
  addTask,
  sortTask,
  sortABC,
  randomOrder
} from "./actions";
import ItemMenu from "./components/ItemMenu/ItemMenu";
import TextField from "@material-ui/core/TextField";

//todo: implement render item, remove two call map
//todo:change call action

const Item = props => {
  const { text, checked, onChange = () => {}, onComplete } = props;

  return (
    <div className={styles.checkbox_and_button}>
      <Checkbox
        className={styles.checkbox}
        checked={checked}
        onChange={event => onChange(event)} //функция с одним параметром, у которой внутри action
        value="primary"
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      <div
        className={
          onComplete
            ? styles.wrapper_button
            : styles.wrapper_button_non_line_through
        }
      >
        <Button variant="contained" color="primary">
          {text}
        </Button>
      </div>
    </div>
  );
};

const App = props => {
  const {
    listTask = [],
    checkBoxChangeCreate,
    workedComplete,
    changeTask,
    addTask,
    sortTask,
    sortABC,
    randomOrder
  } = props;
  let [valueTextArea, setValueTextArea] = useState("");
  let [eventAddTask, setEventAddTask] = useState(false);
  let [eventSort, setEventSort] = useState(false);
  let date = new Date();
  return (
    <div className={styles.App_wrapper_wrapper}>
      <div className={styles.App_wrapper}>
        <h1>app</h1>

        <div className={styles.app_and_item_menu}>
          <div className={styles.app_item_menu}>
            <div className={styles.App}>
              <div
                className={
                  eventAddTask
                    ? styles.button_add_task
                    : styles.add_task_none_style
                }
              >
                <div className={styles.wrapper_button_sort}>
                  <Button
                    onClick={() => setEventSort(!eventSort)}
                    variant="outlined"
                    size="large"
                    color="primary"
                    className={styles.button_add_and_sort}
                  >
                    Sort
                  </Button>
                </div>
                <Button
                  onClick={() => {
                    setValueTextArea("");
                    return setEventAddTask(!eventAddTask);
                  }}
                  variant="outlined"
                  size="large"
                  color="primary"
                  className={styles.button_add_and_sort}
                >
                  Add Task
                </Button>
              </div>
              {listTask.map((el, ind) => (
                <Item
                  key={el.id}
                  text={el.task}
                  checked={el.select}
                  onChange={e => {
                    // передаем action<Button variant="contained">Default</Button>
                    checkBoxChangeCreate({
                      ind: ind,
                      select: e.target.checked
                    });
                  }}
                  onComplete={el.complete}
                  workedComplete={() => workedComplete(ind)}
                />
              ))}
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
            {eventSort && (
              <div className={styles.types_sort}>
                <Button onClick={() => sortABC()} variant="contained">
                  ABC
                </Button>
                <Button onClick={() => randomOrder()} variant="contained">
                  Random
                </Button>
              </div>
            )}
            {listTask.filter(el => el.select).length === 1 &&
              listTask[listTask.findIndex(el => el.select)].showDate && (
                <div>
                  Date the selected task:
                  {listTask[listTask.findIndex(el => el.select)].date}
                </div>
              )}
          </div>
        </div>
        {((listTask.filter(el => el.select).length === 1 &&
          listTask.find(el => el.editor)) ||
          eventAddTask) && (
          <div className={styles.TextField_and_button}>
            <TextField
              id="outlined-multiline-static"
              multiline
              rows="4"
              variant="outlined"
              onChange={e => setValueTextArea(e.target.value)}
              value={valueTextArea}
              className={styles.TextField}
            />
            <Button
              variant="outlined"
              className={styles.Button_enter}
              color="secondary"
              onClick={() => {
                if (eventAddTask && valueTextArea !== "") {
                  setValueTextArea("");
                  addTask(valueTextArea);
                } else if (valueTextArea !== "") {
                  setValueTextArea("");
                  changeTask(valueTextArea);
                }
              }}
            >
              Enter
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default connect(state => ({ listTask: state.taskReducer.listTask }), {
  checkBoxChangeCreate,
  workedComplete,
  changeTask,
  addTask,
  sortTask,
  sortABC,
  randomOrder
})(App);

//как выполняется отрисовка при нажатии на чек бокс
// как сделать меню появляющееся при наведении на SORT
// драгон дроп, сортировка
// запоминать дату создания таски и сделать вкладку информация - где будет эта дата
//сортировка по дате
