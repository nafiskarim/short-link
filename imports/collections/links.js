import { Mongo } from 'meteor/mongo'

Meteor.methods({
  'links.insert': function (url) {
    console.log('attempting to save ', url);
  }
})

// creating mongo data Collection
export const Links = new Mongo.Collection('links')
