import * as types from "../actions";
const initialState = {
  listTask: [
    {
      task: "wash the dishes",
      id: 0,
      select: false,
      complete: false,
      editor: false,
      showDate: false,
      date: new Date()
    },
    {
      task: "write todo",
      id: 1,
      select: false,
      complete: false,
      editor: false,
      showDate: false,
      date: new Date()
    },
    {
      task: "go to Mars",
      id: 2,
      select: false,
      complete: false,
      editor: false,
      showDate: false,
      date: new Date()
    },
    {
      task: "meal",
      id: 3,
      select: false,
      complete: false,
      editor: false,
      showDate: false,
      date: new Date()
    },
    {
      task: "jump 3 times",
      id: 4,
      select: false,
      complete: false,
      editor: false,
      showDate: false,
      date: new Date()
    },
    {
      task: "learn English",
      id: 5,
      select: false,
      complete: false,
      editor: false,
      showDate: false,
      date: new Date()
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
        editor: false,
        showDate: false,
        date: new Date()
      });
      return stateCopy;
    }
    case types.SORT_TASK: {
      return { ...state, listTask: state.listTask.sort };
    }
    case types.SORT_TASK_ABC: {
      let stateCopy = { ...state, listTask: [...state.listTask] };
      stateCopy.listTask.sort((a, b) => {
        let taskA = a.task.toLowerCase();
        let taskB = b.task.toLowerCase();
        if (taskA < taskB) return -1;
        if (taskA > taskB) return 1;
        return 0;
      });
      return stateCopy;
    }
    case types.RANDOM_ORDER: {
      let stateCopy = { ...state, listTask: [...state.listTask] };
      stateCopy.listTask.sort(() => {
        return 0.5 - Math.random();
      });
      return stateCopy;
    }
    case types.CREATION_DATE: {
      let stateCopy = { ...state, listTask: [...state.listTask] };
       stateCopy.listTask[state.listTask.findIndex(el => el.select)].showDate=
       !stateCopy.listTask[state.listTask.findIndex(el => el.select)].showDate; 
       return stateCopy;
    }
    default:
      return state;
  }
};
