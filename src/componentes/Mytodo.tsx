import { useState } from "react";
import Modulo from "./Modulo";
import Backdrop from "./Backdrop";

interface Titulo {
    titulo1: string;
}

function Todo(props: Titulo) {
    const [moduloEstaAbierto, estadoDelModuloAbierto] = useState(false);

    function delatarCambio() {
        return estadoDelModuloAbierto(true);
    }

    function cerrarModulo() {
        return estadoDelModuloAbierto(false);
    }

    return (
        <div className="card">
            <h2> {props.titulo1} </h2>
            <div>
                <button className="btn" onClick={delatarCambio}>
                    Delete
                </button>
            </div>
            {moduloEstaAbierto ? <Modulo onCancel={cerrarModulo} onConfirm={cerrarModulo} /> : null}
            {moduloEstaAbierto ? <Backdrop alClick1={cerrarModulo} /> : null}
        </div>
    );
}

export default Todo;
