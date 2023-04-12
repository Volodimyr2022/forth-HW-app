import React from "react";
import "./index.css"
// import TaskOne from "./homework/Task1/TaskOne";
// import TaskTwo from "./homework/Task2/TaskTwo";
import TaskThree from "./homework/Task3/TaskThree";

class App extends React.Component {

    render() {
        return(
            <div>
                {/* <TaskOne /> */}
                {/* <TaskTwo /> */}
                <TaskThree />
            </div>
        )
    }
}

export default App