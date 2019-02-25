import React from 'react';
import {Link} from 'react-router-dom';
const PButton = (props) => {
    const {title, style, clickHandler} = props;
    return (<button className={`btn ${style}`} onClick={clickHandler}>
        {title}
    </button>)
}

export default PButton;