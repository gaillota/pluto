import {SIMULATOR_FIELD_CHANGED} from '../../constants/action-types'

const initialState = {
    dailyRate: 0,
    workingDays: 0,
    annualExpenses: 0,
    salary: 0,
    payrollTaxRate: 0,
    socialSecurityTaxRate: 0,
    dividendsLesseningRate: 0,
    socialSecurityLesseningRate: 0,
    salaryLesseningRate: 0,
}

const fieldsReducer = (fields = initialState, action) => {
    switch (action.type) {
        case SIMULATOR_FIELD_CHANGED:
            const {
                name,
                value
            } = action.payload

            return {
                ...fields,
                [name]: value
            }
    }

    return fields
}

export default fieldsReducer
