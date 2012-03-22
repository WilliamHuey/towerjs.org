
module.exports = {
  javascripts: {
    application: ["/app/client/config/application", "/config/routes", "/app/views/templates", "/app/models/post"],
    lib: [],
    vendor: ['/vendor/javascripts/underscore', '/vendor/javascripts/underscore.string', '/vendor/javascripts/socket.io', '/vendor/javascripts/history', '/vendor/javascripts/moment', '/vendor/javascripts/tower', "/vendor/javascripts/bootstrap/bootstrap-transition", "/vendor/javascripts/bootstrap/bootstrap-alert", "/vendor/javascripts/bootstrap/bootstrap-modal", "/vendor/javascripts/bootstrap/bootstrap-dropdown", "/vendor/javascripts/bootstrap/bootstrap-scrollspy", "/vendor/javascripts/bootstrap/bootstrap-tab", "/vendor/javascripts/bootstrap/bootstrap-tooltip", "/vendor/javascripts/bootstrap/bootstrap-popover", "/vendor/javascripts/bootstrap/bootstrap-button", "/vendor/javascripts/bootstrap/bootstrap-collapse", "/vendor/javascripts/bootstrap/bootstrap-carousel", "/vendor/javascripts/bootstrap/bootstrap-typeahead"],
    bootstrap: ["/lib/stylesheets/bootstrap/bootstrap"],
    development: ['/vendor/javascripts/mocha', '/vendor/javascripts/design.io'],
    bottom: []
  },
  stylesheets: {
    application: ["/app/client/stylesheets/application"],
    lib: ["/lib/stylesheets/reset"],
    vendor: []
  }
};
