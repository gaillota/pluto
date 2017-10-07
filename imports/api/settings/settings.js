import {Mongo} from 'meteor/mongo'
import SimpleSchema from 'simpl-schema'

import {denyAll, commonSchema} from '../common'
import {schema} from './schema'

export const Settings = new Mongo.Collection("settings")

// Deny all client-side access
Settings.deny(denyAll)

Settings.schema = new SimpleSchema({
    ...commonSchema('createdAt', 'updatedAt'),
    ...schema
})

Settings.attachSchema(Settings.schema)

Settings.helpers({
    isOwner(userId) {
        return this.ownerId = userId
    },
})
