const visit = require('unist-util-visit');

module.exports = () => (tree) => {
  visit(tree, ['math', 'inlineMath'], (node) => {
    node.data = {
      hChildren: node.data.hChildren,
      hName: node.type === 'math' ? 'Math' : 'MathInline',
    };
  });
};
