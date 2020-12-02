const toString = require('mdast-util-to-string');
const visit = require('unist-util-visit');

module.exports = () => (tree) => {
  visit(tree, 'blockquote', (node) => {
    if (
      !Array.isArray(node.children) ||
      !node.children[0].type === 'paragraph'
    ) {
      return;
    }

    const [first, ...others] = node.children;
    const str = toString(first);

    if (str === '{{ tip }}') {
      node.data = {
        hProperties: {
          className: 'tip',
        },
      };
      node.children = others;
    } else if (str === '{{ solution }}') {
      node.data = {
        hProperties: {
          className: 'solution',
        },
      };
      node.children = others;
    }
  });
};
