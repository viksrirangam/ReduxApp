import { connect } from 'react-redux'
import AddTodoForm from '../components/addtodoform'
import { AddTodo } from "../actions/actions";

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (text) => {
            dispatch(AddTodo(text));
        }
    }
}

const AddTodoContainer = connect(
    null, mapDispatchToProps
)(AddTodoForm);

export default AddTodoContainer;