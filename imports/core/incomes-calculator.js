/**
 * Get the taxes for a certain amount, regarding a set of taxes rates
 *
 * @param rawAmount
 * @param rates
 * @returns {number}
 */
const getTaxesFor = (rawAmount, rates) => {
    let tax = 0
    let previousRef = 0
    rates.some(({ref, value}) => {
        // Check rate value
        const rate = checkRate(value)
        const upperRef = Math.min(ref, rawAmount)

        tax += (upperRef - previousRef) * rate
        previousRef = ref

        return ref >= rawAmount
    })

    return tax
}

//TODO: Persist that shit in Mongo
const defaultRates = (rate) => {
    const rates = {
        corporateTaxRates: [
            {
                ref: 38120,
                value: 0.25
            },
            {
                ref: Infinity,
                value: 0.33
            }
        ],
        incomesTaxRates: [
            {
                ref: 9710,
                value: 0
            },
            {
                ref: 26818,
                value: 0.14
            },
            {
                ref: 71898,
                value: 0.3
            },
            {
                ref: 152260,
                value: 0.41
            },
            {
                ref: 152261,
                value: 0.45
            }
        ]
    }

    return rates[rate]
}

const checkRate = (rate) => rate > 1 ? rate / 100 : rate

export const compute = ({
                            dailyRate,
                            workingDays,
                            annualExpenses,
                            salary,
                            payrollTaxRate,
                            corporateTaxRates = defaultRates('corporateTaxRates'),
                            socialSecurityTaxRate,
                            dividendsLesseningRate,
                            socialSecurityLesseningRate,
                            salaryLesseningRate,
                            incomesTaxRates = defaultRates('incomesTaxRates')
                        }) => {
    payrollTaxRate = checkRate(payrollTaxRate)
    socialSecurityTaxRate = checkRate(socialSecurityTaxRate)
    dividendsLesseningRate = checkRate(dividendsLesseningRate)
    socialSecurityLesseningRate = checkRate(socialSecurityLesseningRate)
    salaryLesseningRate = checkRate(salaryLesseningRate)

    // Infos
    const workingWeeks = ~~workingDays / 5

    // Calcul du revenu
    const turnover = dailyRate * workingDays
    const rawIncomes = turnover - annualExpenses

    // Salaire
    const annualSalary = salary * 12
    const payrollTaxes = annualSalary * payrollTaxRate
    const salaryDedicatedOutcomes = annualSalary + payrollTaxes

    // Benefice
    const profit = rawIncomes - salaryDedicatedOutcomes

    // Fisc de ses morts
    const corporateTaxes = getTaxesFor(profit, corporateTaxRates)
    const profitAfterCorporateTaxes = profit - corporateTaxes
    const socialSecurityTaxes = profitAfterCorporateTaxes * socialSecurityTaxRate
    const dividends = profit - corporateTaxes - socialSecurityTaxes

    // Impots sur le revenu
    const taxableSalary = (1 - salaryLesseningRate) * annualSalary
    const taxableDividends = profit * (1 - dividendsLesseningRate) - profitAfterCorporateTaxes * socialSecurityLesseningRate
    const taxableIncomes = taxableSalary + taxableDividends
    const taxes = getTaxesFor(taxableIncomes, incomesTaxRates)

    // Revenus
    const totalIncomes = annualSalary + dividends
    const taxesFreeIncomes = totalIncomes - taxes

    return {
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
    }
}
