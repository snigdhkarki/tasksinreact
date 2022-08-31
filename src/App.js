import { Component } from "react";
import uniqid from "uniqid";



class App extends Component{
  constructor(){
    super();
    this.state = {tasks:[]};
    this.addtask = this.addtask.bind(this);
  }
  
  addtask(){
    this.setState(state=>({tasks:[...state.tasks,{name:document.querySelector('.enter').value,id:uniqid(),}]}))
  }
  render(){
    return(
      <div>
      <input type = "text" className="enter"></input>
      <button type = "button" onClick={this.addtask}>Submit</button>
      {this.state.tasks.map((task)=>(
        <div className="task" key ={task.id}>
          {task.name}
        </div>
      ))}
      </div>
    )
  }
  

}


export default App;
