module.exports = {
    siteMetadata: {
        title: 'Artificial Intelligence for Lazy, Smart Professionals',
        author: 'Roy Ronalds',
        description: 'A site for understanding how AI can be useful to me.',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'gatsby-starter-default',
                short_name: 'starter',
                start_url: '/',
                background_color: '#d422ff',
                theme_color: '#d422ff',
                display: 'minimal-ui',
                icon: 'src/images/ra-icon.png', // This path is relative to the root of the site.
            },
        },
        'gatsby-plugin-sass',
        'gatsby-plugin-offline',
    ],
}
