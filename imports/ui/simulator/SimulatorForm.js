import React, {Component} from 'react'
import PropTypes from 'prop-types'

import FormField from '../components/FormField'
import * as InputTypes from '../../constants/input-types'

class SimulatorForm extends Component {
    constructor(props) {
        super(props)

        this.sections = [
            {
                name: 'Details',
                fields: [
                    {
                        type: InputTypes.NUMBER,
                        name: 'dailyRate',
                        label: 'Daily rate',
                    },
                    {
                        type: InputTypes.NUMBER,
                        name: 'workingDays',
                        label: 'Working days',
                    },
                    {
                        type: InputTypes.NUMBER,
                        name: 'annualExpenses',
                        label: 'Annual expenses'
                    },
                    {
                        type: InputTypes.NUMBER,
                        name: 'salary',
                        label: 'Monthly salary (net)'
                    }
                ]
            },
            {
                name: 'Tax rates',
                fields: [
                    {
                        type: InputTypes.NUMBER,
                        name: 'payrollTaxRate',
                        label: 'Payroll taxes'
                    },
                    {
                        type: InputTypes.NUMBER,
                        name: 'socialSecurityTaxRate',
                        label: 'Social security taxes'
                    }
                ]
            },
            {
                name: 'Lowering',
                fields: [
                    {
                        type: InputTypes.RANGE,
                        name: 'dividendsLesseningRate',
                        label: 'Dividends reduction',
                    },
                    {
                        type: InputTypes.RANGE,
                        name: 'socialSecurityLesseningRate',
                        label: 'Social security reduction',
                    },
                    {
                        type: InputTypes.RANGE,
                        name: 'salaryLesseningRate',
                        label: 'Salary reduction',
                    }
                ]
            }
        ]
    }

    render() {
        const fields = this.sections.map(({name, fields}) => ([
            <h3 className="title is-4">{name}</h3>,
            fields.map(({name, ...rest}, key) => (
                <FormField
                    key={key}
                    onChange={(value) => this.props.onChange(name, value)}
                    value={this.props.fields[name]}
                    name={name}
                    {...rest}
                />
            ))
        ]))

        return (
            <form>
                {fields}
            </form>
        )
    }
}

SimulatorForm.propTypes = {
    fields: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
}

export default SimulatorForm
