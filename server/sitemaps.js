sitemaps.add('/sitemap.xml', function() {
  // required: page
  // optional: lastmod, changefreq, priority, xhtmlLinks, images, videos
  return [
    { page: '/', priority: new Date() },
    { page: '/login', lastmod: new Date(), changefreq: 'monthly' },
    //{ page: '/z', lastmod: new Date().getTime(), changefreq: 'monthly', priority: 0.8 },
    // https://support.google.com/webmasters/answer/178636?hl=en
    { page: '/home',
      images: [
        { loc: '/01_about.jpg', },        // Only loc is required
        { loc: '/01_slider.jpg',      // Below properties are optional
          caption: "..", geo_location: "..", title: "..", license: ".."}
      ],
      //videos: [
      //  { loc: '/myVideo.jpg', },      // Only loc is required
      //  { loc: '/myOtherVideo.jpg',    // Below properties are optional
      //    thumbnail_loc: "..", title: "..", description: ".." etc }
      //]
    },
    // https://support.google.com/webmasters/answer/2620865?hl=en
    //{ page: 'lang/english', xhtmlLinks: [
    //  { rel: 'alternate', hreflang: 'de', href: '/lang/deutsch' },
    //  { rel: 'alternate', hreflang: 'de-ch', href: '/lang/schweiz-deutsch' },
    //  { rel: 'alternate', hreflang: 'en', href: '/lang/english' }
    //]}
  ];
});
