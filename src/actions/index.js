//todo rename parametrs and type name
export const CHECK_BOX_CHANGE= "CHECK-BOX-CHANGE"
export const checkBoxChangeCreate = ({bool, ind}) =>(
         {
        type: CHECK_BOX_CHANGE,
        bool: bool,
        ind: ind
      }
    );
