const mix = require("laravel-mix");
const plugins = [require("tailwindcss")];

const purgecss = require("@fullhuman/postcss-purgecss")({
    content: ["**/*.html"],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});

if (mix.inProduction()) {
    plugins.push(purgecss);
}

mix
    .js('src/js/script.js', 'public/js')
    .postCss("src/css/theme.css", "public/css", plugins)
    .options({
        processCssUrls: false
    })
    .copy('src/images/**/*', 'public/images');