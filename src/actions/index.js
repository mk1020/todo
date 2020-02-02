//todo rename parametrs and type name
export const SELECT_TASK = "SELECT_TASK";
export const ON_CLICK_COMPLETE = "ON_CLICK_COMPLETE";
export const WORKED_COMPLETE = "WORKED_COMPLETE";
export const DELETE_TASK = "DELETE_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const CHANGE_TASK = "CHANGE_TASK";
export const ADD_TASK = "ADD_TASK";
export const SORT_TASK = "SORT_TASK";
export const SORT_TASK_ABC = "SORT_TASK_ABC";
export const RANDOM_ORDER = "RANDOM_ORDER";
export const CREATION_DATE = "CREATION_DATE";

export const checkBoxChangeCreate = ({ select, ind }) => ({
  type: SELECT_TASK,
  select: select,
  ind: ind
});
export const onClickButtonCreate = () => ({
  type: ON_CLICK_COMPLETE
});

export const workedComplete = id => ({
  type: WORKED_COMPLETE,
  id: id
});

export const deleteTasks = () => ({
  type: DELETE_TASK
});

export const editTask = () => ({
  type: EDIT_TASK
});

export const changeTask = valueTextArea => ({
  type: CHANGE_TASK,
  valueTextArea: valueTextArea
});

export const addTask = valueTextArea => ({
  type: ADD_TASK,
  valueTextArea: valueTextArea
});

export const sortTask = () => ({
  type: SORT_TASK
});

export const sortABC = () => ({
  type: SORT_TASK_ABC
});

export const randomOrder = () => ({
  type: RANDOM_ORDER
});

export const creationDate =()=>({
  type:CREATION_DATE
})