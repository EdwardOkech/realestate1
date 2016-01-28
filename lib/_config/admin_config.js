AdminConfig = {
    AdminEmails: ['okechjobs@gmail.com'],
    Collections: {
        Properties: {
            icon: 'institution',
            tableColums: [
                {label: 'Title', name: 'title'},
                {label: 'Address', name: 'address'}
            ],
             showEditColumn: true,
             showDeleteColumn: true,
             showWidget: false,
             color: 'yellow'

        },
        Cities: {
            icon: 'map-signs',
            tableColumns: [
                { label: 'Name', name: 'name'},
                { label: 'Geo Points', name: 'geopoint'}
            ],
            showEditColumn: true,
            showDeleteColumn: true,
            showWidget: false,
            color: 'red'
        }
    }
};
