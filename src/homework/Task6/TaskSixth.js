import React, {Component} from "react"
import TaskOne from "../Task1/TaskOne";
import TaskTwo from "../Task2/TaskTwo";
import TaskThree from "../Task3/TaskThree";
import { TaskFour } from "../Task4/TaskFour";

import { 
    Routes,
    Route,
    Navigate,
    Link,
    Outlet,
    useParams,
    NavLink,
    useNavigate,
    useLocation,

    
} from "react-router-dom"

const Main = () => {
    return <h1>Main</h1>
};

const Task = () => {
    return (
    <div>
        <h1>Task descriptions</h1>
    </div>
    )
};



export default class TaskSixth extends Component {
    render () {
        return (
        <div>
            <div className="navbar">
                <button>
                    <Link to="/">Main</Link>
                </button>
                <button>
                    <Link to="/task">Task description</Link>
                </button>
                <button>
                    <Link to="../Task1/TaskOne">Task1</Link>
                </button>
                <button>
                    <Link to="../Task1/TaskTwo">Task2</Link>
                </button>
                <button>
                    <Link to="../Task3/TaskThree">Task3</Link>
                </button>
                <button>
                    <Link to="../Task1/TaskFour">Task4</Link>
                </button>
                <button>
                    <Link to="../Task5/TaskFve">Task5</Link>
                </button>
            </div>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="task" element={<Task />} /> 
                <Route path="../Task1/TaskOne" element={TaskOne}/>
                <Route path="../Task2/TaskTwo" element={TaskTwo}/>
                <Route path="../Task3/TaskThree" element={TaskThree}/>
                <Route path="../Task4/TaskFour" element={TaskFour}/>
                <Route path="../Task5/TaskFive" element={<Navigate to="/" />}/>
            </Routes>
        </div>
    )}
}