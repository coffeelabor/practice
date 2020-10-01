import React, { Component } from 'react';


class Todos extends Component {
    render() {
        return this.props.todos.map((todo) => (
            <h3>{todo.title}</h3>
        )) 
        // (
        //     <div>
        //         {/* <Todos todos={this.state.todos} /> */}
        //         <h1>Hello</h1>
        //     </div>
        // );
    }
}

export default Todos;