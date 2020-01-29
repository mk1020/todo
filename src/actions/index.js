//todo rename parametrs and type name
export const SELECT_TASK = "SELECT_TASK";
export const ON_CLICK_COMPLETE = "ON_CLICK_COMPLETE";

export const checkBoxChangeCreate = ({ select, ind }) => ({
  type: SELECT_TASK,
  select: select,
  ind: ind
});
export const onClickButtonCreate = object => ({
  type: ON_CLICK_COMPLETE,
  object: object
});
