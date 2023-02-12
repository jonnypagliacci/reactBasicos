import { MouseEventHandler } from "react";

interface AlClick {
    alClick1 : MouseEventHandler;
}

function Backdrop(props : AlClick) {
  return <div className="backdrop" onClick={props.alClick1}/>;
};

export default Backdrop;
