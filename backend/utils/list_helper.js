var _ = require("lodash");

const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  const result = blogs.reduce((sum, blog) => sum + blog.likes, 0);
  return result;
};

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) return null;
  const { title, author, likes } = blogs.reduce((max, actual) =>
    max.likes > actual.likes ? max : actual
  );
  const result = {
    title: title,
    author: author,
    likes: likes,
  };
  return result;
};

const mostBlogs = (blogs) => {
  if (blogs.length < 1) return null;
  const output = _(blogs)
    .countBy("author")
    .map((objs, key) => ({
      author: key,
      blogs: objs,
    }))
    .value();
  return _.maxBy(output, "blogs");
};

const mostLikes = (blogs) => {
  if (blogs.length < 1) return null;
  const output = _(blogs)
    .groupBy("author")
    .map((objs, key) => ({
      author: key,
      likes: _.sumBy(objs, "likes"),
    }))
    .value();
  return _.maxBy(output, "likes");
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
};
