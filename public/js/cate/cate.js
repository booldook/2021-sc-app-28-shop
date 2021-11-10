/* var core = {};
var plugins = ['contextmenu', 'dnd', 'state', 'wholerow', 'changed'];

core.themes = {
  variant: true,
  striped: true,
};

core.data = {
  url: function (node) {
    return '/api/tree';
  },
  data: function (node) {
    return { id: node.id };
  },
};

function onChangedTree(e, data) {
  console.log(data.changed.selected); // newly selected
  console.log(data.changed.deselected); // newly deselected
}

$('#jstreeWrap')
  .jstree({ core: core, plugins: plugins })
  .on('changed.jstree', onChangedTree);
 */

$('#jstreeWrap').jstree({
  core: {
    animation: 0,
    check_callback: true,
    themes: {
      stripes: true,
    },
    data: {
      url: function (node) {
        return node.id === '#' ? '/ajax_demo_roots.json' : '/ajax_demo_children.json';
      },
      data: function (node) {
        return {
          id: node.id,
        };
      },
    },
  },
  types: {
    '#': {
      max_children: 1,
      max_depth: 4,
      valid_children: ['root'],
    },
    root: {
      valid_children: ['default'],
    },
    default: {
      valid_children: ['default', 'file'],
    },
    file: {
      icon: 'glyphicon glyphicon-file',
      valid_children: [],
    },
  },
  plugins: ['contextmenu', 'dnd', 'search', 'state', 'types', 'wholerow'],
});
