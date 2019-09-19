$(document).ready(function () {
  $('#add').click(function () {
    $('table').append('<tr><td class="num"></td>,<td class="name"></td>,<td class="patronymic"></td>,<td class="surname"></td>,<td class="del"><button class="remove">Delete</button></td></tr>');
  });
  $('table').on('click', '.remove', function () {
    $(this).parent().parent().remove();
  });

  var n = 0;
  $('#add').click(function () {
    n++;
    $('.num').append(n);
  });

  $('#add').click(function () {
    var name_input = $('input.name_input').val();
    var patronymic_input = $('input.patronymic_input').val();
    var surname_input = $('input.surname_input').val();
    $('.name').append(name_input);
    $('.patronymic').append(patronymic_input);
    $('.surname').append(surname_input);
  });
});