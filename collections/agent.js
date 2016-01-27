Agents = new Mongo.Collection('agents');

Schemas.Agent = new SimpleSchema({
    picture:{
        type:String,
        label:'Profile Picture',
        autoform:{
            type: 'fileUpload',
            collection: 'AgentProfilePicture'
        }
    },
    firstName:{
        type: String,
        label: 'First Name',
        regEx: /^[a-zA-Z]{2,25}$/

    },
    lastName:{
        type: String,
        label: 'Last Name',
        regEx: /^[a-zA-Z]{2,25}$/
    },
    email:{
        type: String,
        label: 'E-mail',
        regEx: SimpleSchema.RegEx.Email
    },
    phone:{
        type: Number,
        label: 'Telephone',
        min:9,
        max:10
    },
    website: {
        type: String,
        regEx: SimpleSchema.RegEx.Url,
        optional: true
    },
    bio:{
        type: String,
        label: 'Bio',
        autoform:{
            rows: 4
        }
    },
    location:{
        type:String,
        label: 'Location',
        autoform:{
            type: 'map',
            geolocation: true,
            searchBox: true,
            autolocate: true
        }
    }
});

Agents.attachSchema(Schemas.Agent);

Agents.insert({}, function(error, result){

});
