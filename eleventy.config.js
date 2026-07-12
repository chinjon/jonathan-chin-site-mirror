import { eleventyImageTransformPlugin } from '@11ty/eleventy-img';
import embedEverything from 'eleventy-plugin-embed-everything'
import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import htmlmin from 'html-minifier-next';

const embedEverythingConfig = {
  youtube: {
    options: {
      lite: true
    }
  }
}

export default function (eleventyConfig) {
  const isProduction = process.env.NODE_ENV === 'production';

  if (isProduction) {
    eleventyConfig.addTransform('htmlmin', function (content) {
      if ((this.page.outputPath || '').endsWith('.html')) {
        return htmlmin.minify(content, {
          useShortDoctype: true,
          removeComments: true,
          collapseWhitespace: true,
        });
      }
      return content;
    });
  }

  eleventyConfig.setInputDirectory('./src');
  eleventyConfig.setOutputDirectory('./dist');

  eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addWatchTarget("./src/css/");

  eleventyConfig.addPlugin(eleventyImageTransformPlugin);
  eleventyConfig.addPlugin(embedEverything, embedEverythingConfig);

  // Returns a collection of blog posts in reverse date order
  eleventyConfig.addCollection('blog', (collection) => {
    return [...collection.getFilteredByGlob('./src/posts/*.md')].reverse();
  });

  // Returns a collection of blog posts in reverse date order
  eleventyConfig.addCollection('books', (collection) => {
    return [...collection.getFilteredByGlob('./src/books/*.md')].sort((a, b) => new Date(b.data.read) - new Date(a.data.read))
  });

  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom", // or "rss", "json"
    outputPath: "/rss.xml",
    collection: {
      name: "blog",
      limit: 10,     // 0 means no limit
    },
    metadata: {
      language: "en",
      title: "jonathan chin",
      subtitle: "the blog of jonathan chin.",
      base: "https://jonathanchin.xyz",
      author: {
        name: "jonathan chin",
        email: "", // Optional
      }
    }
  });
}

export const config = {
  markdownTemplateEngine: 'njk',
  htmlTemplateEngine: 'njk',
};

/**
 * Takes a collection and returns it back in display order
 *
 * @param {Array} collection The 11ty collection
 * @returns {Array} the sorted collection
 */
function sortByDisplayOrder(collection) {
  return collection.sort((a, b) =>
    Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1,
  );
}