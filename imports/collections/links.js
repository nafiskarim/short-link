import { Mongo } from 'meteor/mongo'
import valideUrl from 'valid-url'
import { check, Match } from 'meteor/check'

Meteor.methods({
  'links.insert': function (url) {
    console.log('attempting to save ', url);
    // validation of url
    valideUrl.isUri(url)
    check(url, Match.Where(url => valideUrl.isUri(url)))
  }
})

// creating mongo data Collection
export const Links = new Mongo.Collection('links')
