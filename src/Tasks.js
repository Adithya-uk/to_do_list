function Tasks({tasks}) {
    return(<div>
        {/* <div>Learnreact</div>
        <div>profit</div> */}
        {tasks.map((task) => {
            return (
                <div key={task.id}>
                    <h4>{task.desc}</h4>
                </div>
            );
        })}
        
        </div>
    );
}
export default Tasks;