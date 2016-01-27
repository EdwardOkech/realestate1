ServiceConfiguration.configurations.remove({
    service: 'facebook'
});

ServiceConfiguration.configurations.remove({
    service: 'google'
});

ServiceConfiguration.configurations.insert({
    service: 'facebook',
    appId: '1674524132778239',
    secret: '44ac28ed2278e77a73d9f6df363542f8'
});

ServiceConfiguration.configurations.insert({
     service: "google",
     clientId: "1019350812859-4ur845c87ho7thpcv0ievbt7dg0ckp2t.apps.googleusercontent.com ",
     loginStyle: "popup",
    secret: " nsG4uFxc6BzstB2tNjESqXWC "
});