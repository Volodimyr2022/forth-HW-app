import React from "react";
import "./index.css"
// import TaskOne from "./homework/Task1/TaskOne";
// import TaskTwo from "./homework/Task2/TaskTwo";
// import TaskThree from "./homework/Task3/TaskThree";
// import { TaskFour } from "./homework/Task4/TaskFour";
import TaskSixth from "./homework/Task6/TaskSixth"
import { BrowserRouter } from "react-router-dom";


class App extends React.Component {

    render() {
        return(
            <div>
                <BrowserRouter>
                <TaskSixth />
                </BrowserRouter>
                {/* <TaskOne /> 
                <TaskTwo />
                <TaskThree />
                 <TaskFour /> */}
                
            </div>
        )
    }
}

export default App