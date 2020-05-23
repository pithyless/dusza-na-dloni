module.exports = (function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("src/js");
    eleventyConfig.addPassthroughCopy("src/css");

    eleventyConfig.addFilter('readableDate', (dateObj) => {
        return dateObj.toLocaleDateString("pl", {month: "long", year: "numeric"});
    });

    return {

        dir: {
            output: "docs",
            input: "src",
            // data: "jsondata",
            // includes: "_includes",
        },

        templateFormats: ["njk", "md"],
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk"
    };

});
