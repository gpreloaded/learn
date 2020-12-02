const u = require('unist-builder');
const visit = require('unist-util-visit');

function createWrapper(children) {
  return u(
    'group',
    {
      data: {
        hName: 'BlockquoteGroup',
      },
    },
    children
  );
}

module.exports = () => (tree) => {
  visit(tree, 'root', (node) => {
    if (!Array.isArray(node.children)) {
      return;
    }

    let group = [];
    const children = [];

    node.children.forEach((child) => {
      if (
        child.type === 'blockquote' &&
        Object.hasOwnProperty.call(child, 'data') &&
        Object.hasOwnProperty.call(child.data, 'hProperties') &&
        Object.hasOwnProperty.call(child.data.hProperties, 'className')
      ) {
        const className = child.data.hProperties.className;

        if (className === 'tip' || className === 'solution') {
          group.push(child);
          return;
        }
      }

      if (group.length) {
        children.push(createWrapper(group));

        group = [];
      }

      children.push(child);
    });

    if (group.length) {
      children.push(createWrapper(group));
    }

    node.children = children;
  });
};
