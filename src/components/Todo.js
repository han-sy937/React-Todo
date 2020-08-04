import React from "react"
import { Container } from './style'

const Todo = props => {
    return (
        <Container
            style={props.list.completed ? { textDecoration: 'line-through' } : null}
            onClick={() => props.toggleList(props.list.id)}
            className={`list${props.list.completed ? "completed" : ""}`}
        >
            <p>{props.list.task}</p>
        </Container>
    )
}
export default Todo