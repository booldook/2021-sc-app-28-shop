function onColorChange(el) {
  changeColor($(el).val(), el);
}

function onColorReset(el) {
  var color = $(el.form.defaultColor).val();
  var name = $(el.form.defaultName).val();
  changeColor(color, el);
  $(el.form.code).val(color);
  $(el.form.name).val(name);
}

function changeColor(color, el) {
  var txtColor = Color(color.substr(1));
  txtColor = txtColor.toHSL()[2];
  $(el.form).find('.tag').css('background-color', color);
  $(el.form).find('.tag').css('color', txtColor);
}

function onSubmit(el) {
  var f = el.form;
  if (f.name.value.trim() === '') {
    alert('컬러명을 입력하세요.');
    f.name.focus();
    return false;
  }
  f.submit();
}

function onColorDelete(el) {
  var f = el.form;
  if (confirm('삭제하시겠습니까?')) {
    f._method.value = 'DELETE';
    f.submit();
  }
}

$(document).ready(function () {
  // $('.bt-reset').trigger('click');
  console.log(hexToHSL('#333333'));
});
