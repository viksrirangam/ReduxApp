import { connect } from 'react-redux'
import { ToggleTodo } from "../actions/actions";
import TodoList from "../components/todolist";

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
      case 'SHOW_ALL':
        return todos
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed)
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed)
    }
  }

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todo, state.visibility.filter)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(ToggleTodo(id));
        }
    }
}

const TodoListContainer = connect(
    mapStateToProps, mapDispatchToProps
)(TodoList);

export default TodoListContainer;