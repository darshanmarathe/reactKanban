import React, {Component} from 'react';
import TodoHead from './todoHead';
class TodoList extends Component {
    render() {
        return (
<table>
  <TodoHead />
    <tbody>
    <tr>
        <td>Lorem ipsum.</td>
        <td>Ducimus, eum?</td>
        <td>Animi, itaque.</td>
        <td>Quas, consequatur.</td>
        <td>Cum, totam?</td>
    </tr>
</tbody>
</table>
        );
    }
}

export default TodoList;