if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
         //increment the counter when button is clicked
        Session.set('counter', Session.get('counter') + 1);
        Meteor.call('idk');
    }
  });
}

if (Meteor.isServer) {
    var sys = Npm.require('sys');
    var exec = Npm.require('child_process').exec;
  Meteor.startup(function () {
     //code to run on server at startup
  });
  Meteor.methods({
      idk: function(){
        console.log('this is great');
        child = exec('/Users/uesu/github/simpleClick/simplePerl.pl', function(error, stdout, stderr){
            console.log("stdout: " + stdout);
            console.log("stderr: " + stderr);
            if(error !== null){console.log("exec error: " + error)}
        })
        }
  })
}
