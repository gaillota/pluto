import {Meteor} from "meteor/meteor"

import {Settings} from "../settings"

Meteor.publishComposite('fields.user', () => {
    return {
        find() {
            if (!this.userId) {
                return this.ready()
            }

            return Settings.find({
                ownerId: this.userId
            })
        }
    }
})
