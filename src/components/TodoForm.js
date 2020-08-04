import React from 'react'
import { Form, Input, AddButton, ButtonDiv } from './style'

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            listText: ""
        };
    }

    handleChange = e => {
        this.setState({
            listText: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addToList(this.state.listText);
        this.setState({
            listText: ""
        });
    };


    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Input
                        placeholder="e.g. cook dinner" 
                        type="text"
                        name="list"
                        value={this.state.listText}
                        onChange={this.handleChange}
                />
                <ButtonDiv>
                    <AddButton>Add Task</AddButton>
                    <AddButton onClick={this.props.removeList}>Remove List</AddButton>
                </ButtonDiv>
                
                </Form>
                
            </div>
            
        )
    }
}

export default TodoForm;