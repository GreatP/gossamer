import Ember from 'ember'

export default Ember.Component.extend({
  tagName: '',
  showMore: false,

  init () {
    this._super(...arguments)
    Ember.$('.tabpager').append(`<div class="ui active inverted dimmer">
      <div class="ui mini text loader">Loading&hellip;</div>
    </div>`)
  },

  didRender () {
    this._super(...arguments)
    setTimeout(function () {
      this.$('.dimmer').remove()
    }, 500)
  },

  didInsertElement () {
    this._super(...arguments)
    setTimeout(function () {
      this.$('.dimmer').remove()
    }, 500)
  },

  actions: {
    toggleDetail () {
      this.toggleProperty('showMore')
      // call to detail view/component here
      // console.log('showRulesDetail ' + this.isDetail)
    }
  }
})
