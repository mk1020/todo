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
  randomOrder,
  dateSort,
  onDropAction,
  deleteTasks
} from "./actions";
import ItemMenu from "./components/ItemMenu/ItemMenu";
import TextField from "@material-ui/core/TextField";

//todo: implement render item, remove two call map
//todo:change call action

const MyButton = props => {
  const {onClick = ()=>{}, text=''}= props
  return <button onClick={() => onClick()}>{text}</button>;
};
const Item = props => {
  const { text, checked, onChange = () => {}, onComplete, id } = props;
  return (
    <div
      className={styles.checkbox_and_button}
      draggable
      onDragStart={event => props.onDragStart(event, id)}
      onDragOver={event => props.onDragOver(event)}
      onDrop={event => props.onDrop(event, "id", id)}
    >
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
        {/*  <Button variant="contained" color="primary">
          {text}
        </Button> */}
        <MyButton onClick = {()=>{
          props.deleteTasks(id)
        }}text={text} />
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
    randomOrder,
    dateSort,
    onDropAction,
    deleteTasks
  } = props;
  let [valueTextArea, setValueTextArea] = useState("");
  let [eventAddTask, setEventAddTask] = useState(false);
  let [eventSort, setEventSort] = useState(false);

  const onClickCreationDate = listTask[listTask.findIndex(el => el.showDate)];

  const onDragStart = (event, id) => {
    event.dataTransfer.setData("id", id);
  };

  const onDragOver = event => {
    event.preventDefault();
  };

  const onDrop = (event, typeId, dropId) => {
    const dragId = event.dataTransfer.getData(typeId);
    console.log("dragId ", dragId, " dropId ", dropId);
    onDropAction(dragId, dropId);
  };

  return (
    <div className={styles.App_wrapper_wrapper}>
      <div className={styles.App_wrapper}>
        <h1>app</h1>

        <div className={styles.app_and_item_menu}>
          <div className={styles.app_item_menu}>
            <div>
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
                    id={el.id}
                    text={el.task}
                    checked={el.select}
                    onChange={e => {
                      checkBoxChangeCreate({
                        ind: ind,
                        select: e.target.checked
                      });
                    }}
                    onComplete={el.complete}
                    workedComplete={() => workedComplete(ind)}
                    draggable
                    onDragStart={event => onDragStart(event, el.id)}
                    onDragOver={event => onDragOver(event)}
                    onDrop={event => onDrop(event, "id", el.id)}
                    deleteTasks={deleteTasks}
                  />
                ))}
                <div
                  className={
                    listTask.find(el => el.select)
                      ? styles.wrapper_Item_menu
                      : ""
                  }
                >
                  {//find применяет стрелочную ф-ю к каждому эл массива
                  //когда стрелочная ф-я возвр true, find возвр элемент массива
                  //если ничего не найдено find возвр undefined
                  listTask.find(el => el.select) && <ItemMenu />}
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
            {eventSort && (
              <div className={styles.types_sort}>
                <Button onClick={() => sortABC()} variant="contained">
                  ABC
                </Button>
                <Button onClick={() => randomOrder()} variant="contained">
                  Random
                </Button>
                <Button onClick={() => dateSort()} variant="contained">
                  Date
                </Button>
              </div>
            )}
            {listTask.find(el => el.select) &&
            onClickCreationDate &&
            onClickCreationDate.showDate ? (
              <div>
                <div> Date the selected task:</div>
                {"" + onClickCreationDate.date}
              </div>
            ) : null}
          </div>
        </div>
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
  randomOrder,
  dateSort,
  onDropAction,
  deleteTasks
})(App);

//как выполняется отрисовка при нажатии на чек бокс
// драгон дроп
