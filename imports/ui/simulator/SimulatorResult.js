import React from 'react'
import PropTypes from 'prop-types'

const SimulatorResult = ({result, loading}) => {
    if (loading) {
        return (
            <h4 className="title is-4">Results</h4>
        )
    }

    const {
        workingWeeks,
        turnover,
        rawIncomes,
        annualSalary,
        payrollTaxes,
        salaryDedicatedOutcomes,
        profit,
        corporateTaxes,
        profitAfterCorporateTaxes,
        socialSecurityTaxes,
        dividends,
        totalIncomes,
        taxableSalary,
        taxableDividends,
        taxableIncomes,
        taxes,
        taxesFreeIncomes
    } = result

    return (
        <div className="box">
            <p> Semaines de travail: {workingWeeks}</p>
            <p> Chiffre d'affaires: {turnover}</p>
            <p>Revenus brut: {rawIncomes}</p>
            <p>Salaire annuel net: {annualSalary}</p>
            <p>Charges sociales (salariales + patronales): {payrollTaxes}</p>
            <p>Montant pour salaire: {salaryDedicatedOutcomes}</p>
            <p>Bénéfices: {profit}</p>
            <p>Impôts sur les sociétés: {corporateTaxes}</p>
            <p>Bénéfices après IS: {profitAfterCorporateTaxes}</p>
            <p>CSG/CRDS: {socialSecurityTaxes}</p>
            <p>Dividendes: {dividends}</p>
            <p>Revenus totaux: {totalIncomes}</p>
            <p>Salaire imposable: {taxableSalary}</p>
            <p>Dividendes imposables: {taxableDividends}</p>
            <p>Revenus imposables: {taxableIncomes}</p>
            <p>Impôts: {taxes}</p>
            <p>Revenus net d'impôts: {taxesFreeIncomes}</p>
        </div>
    )
}

SimulatorResult.propTypes = {
    result: PropTypes.object.isRequired,
    loading: PropTypes.bool
}

export default SimulatorResult
