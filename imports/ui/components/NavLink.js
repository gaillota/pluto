import React from 'react'
import {NavLink} from 'react-router-dom'

import Icon from './Icon'

const CustomNavLink = ({activeClassName, icon, text, ...rest}) => (
    // Prevents overriding *activeClassName* property
    <NavLink
        activeClassName="is-active"
        {...rest}
    >
        {icon && <Icon name={icon} />}
        <span>{text}</span>
    </NavLink>
)

export default CustomNavLink
