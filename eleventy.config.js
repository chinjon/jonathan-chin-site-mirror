import { eleventyImageTransformPlugin } from '@11ty/eleventy-img';

export default function (eleventyConfig) {
  eleventyConfig.setInputDirectory('./src');
  eleventyConfig.setOutputDirectory('./dist');

  eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addWatchTarget("./src/css/");

  eleventyConfig.addPlugin(eleventyImageTransformPlugin);
}

export const config = {
  markdownTemplateEngine: 'njk',
  htmlTemplateEngine: 'njk',
};