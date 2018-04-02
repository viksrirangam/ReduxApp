import React from 'react'
import PropTypes from 'prop-types'

const ActionFilterLink = ({active, children, onClick}) =>{
    return (
        active ?
            <span>{children}</span>
        :   
            <a href="#" onClick={ e => onClick()}>{children}</a>
    );
}

ActionFilterLink.propTypes = {
    filter: PropTypes.string.isRequired
}

export default ActionFilterLink;