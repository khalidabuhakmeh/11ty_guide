module.exports = function(eleventyConfig) {

    eleventyConfig.addFilter("exclude", function(values, ex) {         
        return values.filter(v => v !== ex);        
    });

    eleventyConfig.addFilter("withCategory", function(values, key) {                 
        return values.find(v => v.data.key === key);
    });

    // Copy `img/` to `_site/img`
    eleventyConfig.addPassthroughCopy("img");

};