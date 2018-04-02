import { connect } from 'react-redux'
import ActionFilterLink from '../components/actionfilterlink'
import { SetFilter } from "../actions/actions";

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.filter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(SetFilter(ownProps.filter));
        }
    }
}

const FilterLink = connect(
    mapStateToProps, mapDispatchToProps
)(ActionFilterLink);

export default FilterLink;