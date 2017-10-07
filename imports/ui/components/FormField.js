import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Icon from './Icon'

import * as InputTypes from '../../constants/input-types'
import * as InputStates from '../../constants/input-states'
import * as InputSizes from '../../constants/input-sizes'

class Input extends Component {
    hasOuterLabel() {
        const {
            label,
            type
        } = this.props

        return label && type !== InputTypes.CHECKBOX && type !== InputTypes.RADIO
    }

    getId() {
        return this.props.id || this.props.name
    }

    onChange(e) {
        this.props.onChange(e.target.value, this.props.name)
    }

    getInput() {
        const {
            type,
            name,
            value,
            placeholder,
            required,
            autofocus,
            autocomplete,
            choices,
            size,
            state,
            min,
            max,
            step
        } = this.props

        const classes = classnames({
            'input': type !== type !== InputTypes.TEXTAREA,
            'textarea': type === InputTypes.TEXTAREA,
            [`is-${state}`]: !!state,
            [`is-${size}`]: !!size,
        })

        if (type === InputTypes.TEXTAREA) {
            return (
                <textarea
                    className={classes}
                    name={name}
                    id={this.getId()}
                    placeholder={placeholder}
                    required={required}
                    autoFocus={autofocus}
                    autoComplete={autocomplete}
                    onChange={this.onChange}
                >
                    {value}
                </textarea>
            )
        }

        if (type === InputTypes.SELECT) {
            const options = choices.map(({value, text}) => <option value={value}>{text}</option>)

            return (
                <span className="select">
                    {options}
                </span>
            )
        }

        if (type === InputTypes.CHECKBOX || type === InputTypes.RADIO) {
            return (
                <label className={type}>
                    <input type={type} name={name} />
                    {label}
                </label>
            )
        }

        return (
            <input
                type={type}
                className={classes}
                name={name}
                value={value}
                id={this.getId()}
                placeholder={placeholder}
                required={required}
                autoFocus={autofocus}
                autoComplete={autocomplete}
                min={min}
                max={max}
                step={step}
                onChange={this.onChange}
            />
        )
    }

    getHelp() {
        return this.props.help.map(({type, message}) => (
            <p className={classnames('help', `is-${type}`)}>
                {message}
            </p>
        ))
    }

    render() {
        const {
            label,
            iconLeft,
            iconRight,
            children
        } = this.props

        return (
            <div className="field">
                {this.hasOuterLabel() && (
                    <label
                        htmlFor={this.getId()}
                        className="label"
                    >
                        {label}
                    </label>
                )}
                <p className={classnames('control', {
                    'has-icons-left': !!iconLeft,
                    'has-icons-right': !!iconRight
                })}>
                    {this.getInput()}
                    {iconLeft && <Icon name={iconLeft} size="small" left />}
                    {iconRight && <Icon name={iconRight} size="small" right />}
                    {children}
                </p>
                {this.getHelp()}
            </div>
        )
    }
}

Input.propTypes = {
    type: PropTypes.oneOf(Object.values(InputTypes)),
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.any,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    autofocus: PropTypes.bool,
    autocomplete: PropTypes.bool,
    choices: PropTypes.array,
    min: PropTypes.number,
    max: PropTypes.number,
    size: PropTypes.oneOf(Object.values(InputSizes)),
    state: PropTypes.oneOf(Object.values(InputStates)),
    iconLeft: PropTypes.string,
    iconRight: PropTypes.string,
    help: PropTypes.array
}

Input.defaultProps = {
    type: 'text',
    help: []
}

export default Input
