//todo rename parametrs and type name
export const SELECT_TASK = "SELECT_TASK";
export const ON_CLICK_COMPLETE = "ON_CLICK_COMPLETE";
export const WORKED_COMPLETE = "WORKED_COMPLETE";
export const DELETE_TASK = "DELETE_TASK"; 
export const EDIT_TASK = "EDIT_TASK";

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
})

export const editTask = ()=> ({
  type: EDIT_TASK
});