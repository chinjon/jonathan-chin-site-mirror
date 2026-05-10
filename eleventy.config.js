export default function (eleventyConfig) {
  eleventyConfig.setInputDirectory('./src');
  eleventyConfig.setOutputDirectory('./dist');

  eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addWatchTarget("./src/css/");
}

export const config = {
  markdownTemplateEngine: 'njk',
  htmlTemplateEngine: 'njk',
};