import React, {Component} from 'react'

import FormField from '../../components/FormField'

class Register extends Component {
    constructor(props, context) {
        super(props, context)

        this.state = {
            form: {
                email,
                password,
                confirm,
                isValid: false
            },
            errors: {}
        }
    }

    onChange(value, name) {
        this.setState(({form, ...rest}, props) => ({
            form: {
                ...form,
                [name]: value
            },
            ...rest
        }))
    }

    onSubmit() {
        const {
            email,
            password,
        } = this.state.form

        this.props.register({email, password}).then((errors, result) => {
            this.setState((prevState, props) => {
                return {
                    ...prevState,
                    errors
                }
            })
        })
    }

    render() {
        const {
            errors: {
                email,
                password,
                confirm,
            }
        } = this.state

        return (
            <div className="container">
                <div className="columns">
                    <div className="column is-4 is-offset-4">
                        <div className="box">
                            <h1 className="title has-text-centered">Register</h1>
                            <hr/>
                            <form>
                                <FormField
                                    name="email"
                                    type="email"
                                    label="Email"
                                    id="email"
                                    onChange={this.onChange}
                                    value={this.state.form.email}
                                    required
                                    errors={email}
                                />
                                <FormField
                                    name="password"
                                    type="password"
                                    label="Password"
                                    id="password"
                                    onChange={this.onChange}
                                    value={this.state.form.password}
                                    required
                                    errors={password}
                                />
                                <FormField
                                    name="confirmPassword"
                                    type="confirmPassword"
                                    label="Confirm password"
                                    id="confirmPassword"
                                    onChange={this.onChange}
                                    value={this.state.form.confirm}
                                    required
                                    errors={confirm}
                                />
                                <button className="btn is-success" type="submit" onClick={this.onSubmit}>Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register
