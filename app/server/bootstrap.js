Meteor.startup(function () {
});

ServiceConfiguration.configurations.upsert(
  { service: "meteor-developer" },
  {
    $set: {
      clientId: "eJEQYJxmkjbocCKGQ",
      loginStyle: "popup",
      secret: "c3SnBdfN3XPcMb2f2DPiiARHteeaBGDfwM"
    }
  }
);
