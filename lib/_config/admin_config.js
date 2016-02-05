//AdminConfig = {
//    AdminEmails: ['okechjobs@gmail.com'],
//    Collections: {
//        Properties: {
//            icon: 'institution',
//            tableColums: [
//                {label: 'Title', name: 'title'},
//                {label: 'Address', name: 'address'}
//            ],
//             showEditColumn: true,
//             showDeleteColumn: true,
//             showWidget: false,
//             color: 'yellow'
//
//        },
//        Cities: {
//            icon: 'map-signs',
//            tableColumns: [
//                { label: 'Name', name: 'name'},
//                { label: 'Geo Points', name: 'geopoint'}
//            ],
//            showEditColumn: true,
//            showDeleteColumn: true,
//            showWidget: false,
//            color: 'red'
//        }
//    }
//};

if(Meteor.isServer){
    Houston.methods('Properties',{
    'Publish': function (post){
        Properties.update(property._id, {$set: {status:'Approved'}});
        return property.name + 'Published successfully.';
    }
});

Houston.add_collection(Meteor.users);
Houston.add_collection(Houston._admins);
}


