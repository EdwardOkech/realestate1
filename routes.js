Router.configure({
    layoutTemplate: 'layoutMain',
    notFoundTemplate: '404'
});

Router.configure({
    layoutTemplate: 'layoutLanding'
});

Router.map(function() {
    this.route('Home', {
        path: '/home',
        template: 'home',
        layoutTemplate: 'layoutMain'

        //onBeforeAction: function(pause){
        //    this.render('landing_page');
        //}
    });
    this.route('Login', {
        path: '/login',
        template: 'login',
        layoutTemplate: 'layoutMain'
    });
    this.route('LandingPage',{
        path: '/',
        template: 'landing_page',
        layoutTemplate: 'layoutLanding',

    });
    this.route('Results',{
        path: '/results',
        template: 'results',
        layoutTemplate: 'layoutMain'
    });
    this.route('SubmitProperty', {
        path: '/submit_property',
        template: 'submit_property',
        layoutTemplate: 'layoutMain'
    });
    this.route('SingleProperty', {
        path: '/single_property',
        template: 'single_property',
        layoutTemplate: 'layoutMain'
    });
    this.route('Sitemap', {
        path: '/sitemap.xml',
        where: 'server',


        action: function () {


        var collectionOfPages = Pages.find(
            { status: "live" },
            { fields: { url: 1, updatedDate: 1, sitemapPrio: 1 } }
            ).fetch();

        var collectionForXMLcreation = _( collectionOfPages ).map( function ( page ) {

            return {
                loc: page.url,
                lastmod: new Date( page.updatedDate ),
                priority: page.sitemapPrio,
                changefreq: 'monthly'
            };
        });


        var xmlSitemap = SitemapCreator.createXMLSitemap( collectionForXMLcreation, 'http://0.0.0.0:3000/' );


        this.response.writeHead(200, {'Content-Type': 'text/xml'});
        this.response.end( xmlSitemap );

    }

    });


});



