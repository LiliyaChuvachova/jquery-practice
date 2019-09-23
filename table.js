$(document).ready(function () {
  $('#add').click(function () {
    $('table').append('<tr><td class="controls"><input type="checkbox"></td><td></td>,<td></td>,<td></td>,<td></td>,</tr>');
  });

  var n = 0;
  $('#add').click(function () {
    var name_input = $('input.name_input').val();
    var patronymic_input = $('input.patronymic_input').val();
    var surname_input = $('input.surname_input').val();
    $('tr:last td:nth-child(3)').append(name_input);
    $('tr:last td:nth-child(4)').append(patronymic_input);
    $('tr:last td:nth-child(5)').append(surname_input);
    n++;
    $('tr:last td:nth-child(2)').prepend(n);
  });

  $('#checkbox').click(function () { //добавляем всем чеки
    if ($(this).is(':checked')) {
      $('.controls input:checkbox').prop('checked', true);
      $('.controls').parent().addClass('del');
    } else {
      $('.controls input:checkbox').prop('checked', false);
    }
  });

  $('body').on('click', '.controls input:checkbox', function () {
    if ($(this).is(':checked')) {
      $(this).parent().parent().addClass('del');
    } else {
      $(this).parent().parent().removeClass('del');
    }
  });

  $('body').on('click', '#remove', function () { //удаляем по клику
    $('.del').remove();
  });

});