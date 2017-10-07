import {SIMULATOR_UPDATE_RESULT} from '../../constants/action-types'

const initialState = {
    workingWeeks: 0,
    turnover: 0,
    rawIncomes: 0,
    annualSalary: 0,
    payrollTaxes: 0,
    salaryDedicatedOutcomes: 0,
    profit: 0,
    corporateTaxes: 0,
    profitAfterCorporateTaxes: 0,
    socialSecurityTaxes: 0,
    dividends: 0,
    totalIncomes: 0,
    taxableSalary: 0,
    taxableDividends: 0,
    taxableIncomes: 0,
    taxes: 0,
    taxesFreeIncomes: 0
}

const resultReducer = (result = initialState, action) => {
    switch (action.type) {
        // Action relying on result middleware
        case SIMULATOR_UPDATE_RESULT:
            return action.payload.result
    }

    return result
}

export default resultReducer
