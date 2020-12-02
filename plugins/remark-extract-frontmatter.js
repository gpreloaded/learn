const stringifyObject = require('stringify-object');
const visit = require('unist-util-visit');
const yaml = require('yaml');

module.exports = () => (tree) => {
  visit(tree, 'yaml', (node) => {
    node.type = 'export';
    node.value = `export const frontmatter = ${stringifyObject(
      yaml.parse(node.value)
    )}`;
  });
};
