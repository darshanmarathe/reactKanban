import React, {Component} from 'react';
import TodoList from './todolist';


class App extends React.Component {
    render() {
        return (
            <div>
                 <h1> Todo App {this.props.Title} </h1>
                 <hr />
                 <TodoList   />          
            </div>
        );
    }
}

export default App;         