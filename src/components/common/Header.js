import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => {
    const {header, to} = props;
    return (<div className='header-container'>
        <h4>PayNote</h4>
        <Link to={to}>{header}</Link>
    </div>);
}

Header.defaultProps = {
    to : '/'
}

export default Header;