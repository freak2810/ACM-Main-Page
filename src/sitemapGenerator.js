require("babel-register")({
    presets: ["es2015", "react"]
});

const router = [
    {
        path:'/'
    },
    {
        path:'/about'
    },
    {
        path:'/events'
    },
    {
        path:'/gallery'
    },
    {
        path: '/team'
    }
];
const Sitemap = require("react-router-sitemap").default;

function generateSitemap() {
    return (
        new Sitemap(router)
            .build("https://mvsr.acm.org")
            .save("./public/sitemap.xml")
    );
}

generateSitemap();