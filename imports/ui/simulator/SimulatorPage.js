import React from 'react'

import SimulatorForm from './SimulatorForm'
import SimulatorResult from './SimulatorResult'

const SimulatorPage = ({fields, result, onChange, loading}) => (
    <section className="section">
        <div className="container">
            <h1 className="title">Incomes simulator</h1>
            <div className="columns">
                <div className="column is-5">
                    <SimulatorForm fields={fields} onChange={onChange} />
                </div>
                <div className="column">
                    <SimulatorResult result={result} loading={loading} />
                </div>
            </div>
        </div>
    </section>
)

export default SimulatorPage
