function Todo(titulo) {
    return <div className="card">
        <h2>{titulo.text}</h2>
        <div>
            <button className="btn">Delete</button>
        </div>
    </div>
}


export default Todo;