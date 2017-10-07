import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import FormField from '../../components/FormField'
import {loginWithPassword} from '../../../actions/auth'

class Login extends Component {
    constructor(props, context) {
        super(props, context)

        this.state = {
            form: {
                email,
                password
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
            form: {
                email,
                password
            }
        } = this.state

        this.props.login(email, password).then((errors, result) => {

        })
    }

    render() {
        return (
            <div className="container">
                <div className="columns">
                    <div className="column is-4 is-offset-4">
                        <h1 className="title has-text-centered">Login</h1>
                        <div className="box">
                            <form>
                                <FormField
                                    name="email"
                                    id="email"
                                    type="email"
                                    onChange={this.onChange}
                                    value={this.props.form.email}
                                    required
                                    autofocus
                                />
                                <FormField
                                    name="password"
                                    id="password"
                                    type="password"
                                    onChange={this.onChange}
                                    value={this.props.form.password}
                                    required
                                />
                                <button className="btn is-info" type="submit" onClick={this.onSubmit}>Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    loginWithPassword
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
