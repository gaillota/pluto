import React from 'react'
import classnames from 'classnames'

const Icon = ({name, size, left, right}) => (
    <span className={classnames('icon', {
        [`is-${size}`]: !!size,
        'is-left': !!left,
        'is-right': !!right
    })}>
        <i className={classnames('fa', `fa-${name}`)}></i>
    </span>
)

export default Icon
