module.exports = {
    siteMetadata: {
        title: 'Ra AI communication',
        author: 'Roy Ronalds',
        description: 'A site for showcasing AI jamstack integrations.',
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
