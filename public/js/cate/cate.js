var core = {};
var plugins = ['contextmenu', 'dnd', 'search', 'state', 'wholerow', 'changed'];

core.themes = {
  variant: 'large',
  striped: true,
};

core.check_callback = true;

core.data = {
  url: function (node) {
    return '/api/tree';
  },
  data: function (node) {
    return { id: node.id };
  },
};

function onChangedTree(e, data) {
  var json = $('#jstreeWrap').jstree(true).get_json('#');
  console.log(json);
  axios
    .post('/api/tree', { json })
    .then(function (r) {
      console.log(r);
    })
    .catch(function (err) {
      console.log(err);
    });
}

$('#jstreeWrap')
  .jstree({ core: core, plugins: plugins })
  .on('changed.jstree', onChangedTree);
