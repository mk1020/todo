export const checkBoxChangeCreate = (bool, ind) => {
  return (
       {
      type: "CHECK-BOX-CHANGE",
      bool: bool,
      ind: ind
    }
  );
};
const initialState = {
  todo: [
    { do: "wash the dishes", bool: false, complete: false },
    { do: "write todo", bool: false, complete: false },
    { do: "go to Mars", bool: false, complete: false },
    { do: "meal", bool: false, complete: false },
    { do: "jump 3 times", bool: false, complete: false },
    { do: "learn English", bool: false, complete: false }
  ]
};

const todoReducer = (state = initialState, action) => {
  //создаем копию стайт, потом копию массив, а потом можно менять массив

  switch (action.type) {
    case "CHECK-BOX-CHANGE": {
      const stateCopy = { ...state, todo: [...state.todo] };
      console.log(action);
      stateCopy.todo[action.ind] = {
        do: stateCopy.todo[action.ind].do,
        bool: action.bool
      };
      return stateCopy;
    }

    default:
      return state;
  }
};

export default todoReducer;
