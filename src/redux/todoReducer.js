import * as types from "../actions";
const initialState = {
  listTask: [
    { task: "wash the dishes", id: 0, select: false, complete: false },
    { task: "write todo", id: 1, select: false, complete: false },
    { task: "go to Mars", id: 2, select: false, complete: false },
    { task: "meal", id: 3, select: false, complete: false },
    { task: "jump 3 times", id: 4, select: false, complete: false },
    { task: "learn English", id: 5, select: false, complete: false }
  ]
};

export const taskReducer = (state = initialState, action) => {
  //создаем копию стайт, потом копию массив, а потом можно менять массив
  switch (action.type) {
    case types.SELECT_TASK: {
      const stateCopy = { ...state, listTask: [...state.listTask] };
      stateCopy.listTask[action.ind].select = action.select;
      return stateCopy;
    }
    case types.ON_CLICK_COMPLETE: {
      return {
        ...state,
        listTask: state.listTask.map(task => {
         if (task.complete ===false) task.complete = task.select     
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
    default:
      return state;
  }
};
//какую логику можно писать в ретурне???
