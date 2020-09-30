import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        return (
            <div>
                {/* <h2>Hello</h2> */}
                <p>{this.props.todo.title}</p>
            </div>
        );
    }
}

export default TodoItem;            