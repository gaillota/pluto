import {Meteor} from 'meteor/meteor'
import {ValidatedMethod} from 'meteor/mdg:validated-method'
import SimpleSchema from 'simpl-schema'

import {Settings} from './settings'
import {schema} from './schema'

const {mixins} = ValidatedMethod

export const insert = new ValidatedMethod({
    name: 'settings.insert',
    mixins: [mixins.isLoggedIn, mixins.schema],
    schema: [schema],
    run(setting) {
        return Settings.insert({
            ...setting
        })
    }
})

export const update = new ValidatedMethod({
    name: 'settings.update',
    mixins: [mixins.isLoggedIn, mixins.schema, mixins.restrict, mixins.provide],
    schema: [{
        ...schema,
        settingId: {
            type: String,
            regEx: SimpleSchema.RegEx.Id
        }
    }],
    provide({settingId}) {
        return Settings.findOne(settingId)
    },
    restrictions: [
        {
            condition: function (args, setting) {
                return setting.ownerId !== this.userId
            },
            error: function () {
                return new Meteor.Error("not-authorized", "You can only update your own settings")
            }
        }
    ],
    run({fieldId, name, value}) {
        return Settings.update({
            _id: fieldId
        }, {
            $set: {
                name,
                value
            }
        })
    }
})
