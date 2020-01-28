import React from "react";
import {Actions} from "../actions";

export const Rendering = (props) => {
    let bool= false;
    for (let i =0; i < props.todo.length; i++){
     if (props.todo[i].bool)  bool=true;
    }
if (bool) {return <Actions todo={props.todo} /> }
return <div></div>
}