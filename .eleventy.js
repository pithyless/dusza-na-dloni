module.exports = (function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("src/js");
    eleventyConfig.addPassthroughCopy("src/css");

    return {

        dir: {
            output: "target",
            input: "src",
            // data: "jsondata",
            // includes: "_includes",
        },

        templateFormats: ["md"]
    };

});
