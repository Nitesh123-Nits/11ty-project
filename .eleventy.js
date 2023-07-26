const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/css/');
    eleventyConfig.addWatchTarget("./src/css/");
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/admin');

    // These are filters.
    eleventyConfig.addFilter("excerpt", (post) => {
      const content = post.replace(/(<([^>]+)>)/gi, "");
      return content.substr(0, content.lastIndexOf(" ", 200)) + "...";
    });
    //  filter 2  , filters dont work out of the box it need to be mentioned where it is applied
    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
      });



    return {
      dir: {
        input: "src",
        output: "public"
      }
    }
  };