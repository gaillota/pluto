import {Meteor} from 'meteor/meteor'
import SimpleSchema from 'simpl-schema'

// Helper for denying client code
export const denyAll = {
    insert() {
        return true
    },
    update() {
        return true
    },
    remove() {
        return true
    }
}

const defaultSchema = {
    ownerId: {
        type: String,
        regEx: SimpleSchema.RegEx.Id,
        autoValue: function () {
            if (this.isInsert && !this.isSet) {
                return Meteor.userId()
            }
        },
        denyUpdate: true
    },
    createdAt: {
        type: Date,
        autoValue: function () {
            if (this.isInsert && !this.isSet) {
                return new Date()
            }
        },
        denyUpdate: true
    },
    updatedAt: {
        type: Date,
        autoValue: function () {
            if (this.isUpdate && !this.isSet) {
                return new Date()
            }
        },
        optional: true,
        denyInsert: true
    }
}

/**
 * Returns schema containing each field passed as arguments
 * Ex: commonSchema('ownerId', 'createdAt') => return default schema for ownerId and createdAt fields
 *
 * @param args
 * @returns {{}}
 */
export const commonSchema = (...args) => {
    if (!args.length) {
        return defaultSchema
    }

    const schema = {}
    const fields = Object.keys(defaultSchema)
    args.filter(field => fields.includes(field)).forEach(field => schema[field] = defaultSchema[field])

    return schema
}

// Default schema for denormalized "count" fields
export const countSchema = {
    type: Number,
    min: 0,
    defaultValue: 0
}
