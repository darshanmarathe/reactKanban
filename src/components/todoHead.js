import React, { Component } from 'react';

class TodoHead extends Component {
    render() {
        return (
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Tasks</th>
                    <th>Complete %</th>
                    <th>Created On</th>
                    <th>Done On</th>
                </tr>
            </thead>
        );
    }
}

export default TodoHead;