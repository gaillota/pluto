import React from 'react'
import classnames from 'classnames'

const Notification = ({state, text, onClose}) => (
    <div className={classnames({
        'notification': !0,
        [`is-${state}`]: !!state
    })}>
        <button className="delete" onClick={onClose}></button>
        {text}
    </div>
)

export default Notification
