import React from "react";
import "./index.css"
// import TaskOne from "./homework/Task1/TaskOne";
// import TaskTwo from "./homework/Task2/TaskTwo";
// import TaskThree from "./homework/Task3/TaskThree";
import { TaskFour } from "./homework/Task4/TaskFour";

class App extends React.Component {

    render() {
        return(
            <div>
                {/* <TaskOne /> */}
                {/* <TaskTwo /> */}
                {/* <TaskThree /> */}
                <TaskFour />
            </div>
        )
    }
}

export default App