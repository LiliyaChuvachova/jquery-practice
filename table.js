$(document).ready(function () {
  $('#add').click(function () {
    $('table').append('<tr><td></td>,<td></td>,<td></td>,<td></td>,<td class="del"><button class="remove">Delete</button></td></tr>');
  });
  $('table').on('click', '.remove', function () {
    $(this).parent().parent().remove();
  });

  var n = 0;
  $('#add').click(function () {
    var name_input = $('input.name_input').val();
    var patronymic_input = $('input.patronymic_input').val();
    var surname_input = $('input.surname_input').val();
    $('tr:last td:nth-child(2)').append(name_input);
    $('tr:last td:nth-child(3)').append(patronymic_input);
    $('tr:last td:nth-child(4)').append(surname_input);
    n++;
    $('tr:last td:first').prepend(n);
  });
});