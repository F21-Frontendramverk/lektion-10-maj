import { Component } from "react";

class TodoItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>{ this.props.task }</li>
        )
    }
}

export default TodoItem;