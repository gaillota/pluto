import {Meteor} from 'meteor/meteor'
import {createContainer} from 'meteor/react-meteor-data'
import {connect} from 'react-redux'

import {Settings} from '../../api/settings/settings'
import SimulatorPage from './SimulatorPage'
import {updateFieldValue, updateResult} from '../../actions/simulator'

const mapStateToProps = (state) => ({
    fields: state.simulator.fields,
    result: state.simulator.result,
    loading: state.simulator.loading
})

const mapDispatchToProps = (dispatch) => ({
    onChange(name, value) {
        dispatch(updateFieldValue(name, value))
        dispatch(updateResult())
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SimulatorPage)

// export default createContainer(() => {
//     const handler = Meteor.subscribe('settings')
//     const loading = !handler.ready()
//     return {
//         loading,
//         fields: Settings.find({name: "fields"}).fetch(),
//     }
// }, SimulatorPage)
