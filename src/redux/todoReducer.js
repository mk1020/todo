import * as types from "../actions";
const initialState = {
  listTask: [
    {
      task: "wash the dishes",
      id: 0,
      select: false,
      complete: false,
      editor: false
    },
    {
      task: "write todo",
      id: 1,
      select: false,
      complete: false,
      editor: false
    },
    {
      task: "go to Mars",
      id: 2,
      select: false,
      complete: false,
      editor: false
    },
    { task: "meal", id: 3, select: false, complete: false, editor: false },
    {
      task: "jump 3 times",
      id: 4,
      select: false,
      complete: false,
      editor: false
    },
    {
      task: "learn English",
      id: 5,
      select: false,
      complete: false,
      editor: false
    }
  ]
};

export const taskReducer = (state = initialState, action) => {
  //создаем копию стайт, потом копию массив, а потом можно менять массив
  switch (action.type) {
    case types.SELECT_TASK: {
      let stateCopy = { ...state, listTask: [...state.listTask] };
      stateCopy.listTask[action.ind].select = action.select;
      if (action.select === false)
        stateCopy.listTask[action.ind].editor = false;
      return stateCopy;
    }
    case types.ON_CLICK_COMPLETE: {
      return {
        ...state,
        listTask: state.listTask.map(task => {
          if (task.complete === false) task.complete = task.select;
          return task;
        })
      };
    }
    case types.DELETE_TASK: {
      return {
        ...state,
        listTask: state.listTask.filter(task => !task.select)
      };
    }
    case types.EDIT_TASK: {
      let stateCopy = { ...state, listTask: [...state.listTask] };
      stateCopy.listTask[
        stateCopy.listTask.findIndex(el => el.select)
      ].editor = true;
      return stateCopy;
    }
    case types.CHANGE_TASK: {
      let stateCopy = { ...state, listTask: [...state.listTask] };
      stateCopy.listTask[stateCopy.listTask.findIndex(el => el.editor)].task =
        action.valueTextArea;
      return stateCopy;
    }
    case types.ADD_TASK: {
      let stateCopy = { ...state, listTask: [...state.listTask] };
      stateCopy.listTask.push({
        task: action.valueTextArea,
        id: stateCopy.listTask.length,
        select: false,
        complete: false,
        editor: false
      });
      return stateCopy;
    }
    case types.SORT_TASK: {
        return {...state, listTask: state.listTask.sort}
    }
    default:
      return state;
  }
};
