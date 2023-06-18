import { Component } from "react";
import { HelmetProvider, Helmet } from 'react-helmet-async';
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
      <HelmetProvider>
      <Helmet>
      <title>To do list</title>
      <meta name='description' content='This is a todo list that help make todo list' />
      </Helmet>
      </HelmetProvider>
      <input type = "text" className="enter"></input>
      <button type = "button" onClick={this.addtask}>SUBmit</button>
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
