(function (){
  'use strict';

  var util = require('util');

  var domain = "";
  process.argv.forEach(function (val, index, array) {
    var arg = val.split("=");
    if (arg.length > 1) {
      if (arg[0] == "--domain") {
        domain = "." + arg[1];
        console.log("Setting domain to:", domain);
      }
    }
  });

  // Set custom backends to edge-autoscaler dispatcher
  var dispatcherNamespace = "default"
  var dispatcherName = "dispatcher"
  var functionNamespaces = "openfaas-fn"
  var dispatcherDomain = `${dispatcherName}.${dispatcherNamespace}.svc.cluster.local/function/${functionNamespaces}`

  module.exports = {
    catalogueUrl:  util.format("http://%s/catalogue", dispatcherDomain),
    tagsUrl:       util.format("http://%s/catalogue/tags", dispatcherDomain),
    cartsGetUrl:      util.format("http://%s/carts-get/carts", dispatcherDomain),
    cartsPostUrl:      util.format("http://%s/carts-post/carts", dispatcherDomain),
    cartsDeleteUrl:      util.format("http://%s/carts-delete/carts", dispatcherDomain),
    cartsUrl:      util.format("http://%s/carts/carts", dispatcherDomain),
    ordersUrl:     util.format("http://%s/orders", dispatcherDomain),
    customersUrl:  util.format("http://%s/user/customers", dispatcherDomain),
    addressUrl:    util.format("http://%s/user/addresses", dispatcherDomain),
    cardsUrl:      util.format("http://%s/user/cards", dispatcherDomain),
    loginUrl:      util.format("http://%s/user-login/login", dispatcherDomain),
    registerUrl:   util.format("http://%s/user-register/register", dispatcherDomain),
  };
}());
