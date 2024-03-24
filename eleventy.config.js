module.exports = function (eleventyConfig) {
  // Return your Object options:
  return {
    dir: {
      input: "src",
      output: "site",
      includes: "_includes",
      layouts: "_includes/layouts",
    },
  };
};
