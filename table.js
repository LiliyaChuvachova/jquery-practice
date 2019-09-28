$(document).ready(function () {

  function addTr() { //добавление строки
    $('table').append('<tr><td class="controls"><input type="checkbox"></td><td></td>,<td></td>,<td></td>,<td></td>,</tr>');
  };

  var n = 0;

  function addValueInput() {
    var name_input = $('input#name_input').val();
    var patronymic_input = $('input#patronymic_input').val();
    var surname_input = $('input#surname_input').val();
    $('tr:last td:nth-child(3)').append(name_input);
    $('tr:last td:nth-child(4)').append(patronymic_input);
    $('tr:last td:nth-child(5)').append(surname_input);
    n++;
    $('tr:last td:nth-child(2)').prepend(n);
  };

  $('#checkbox').click(function () { //добавляем всем чеки
    if ($(this).is(':checked')) {
      $('.controls input:checkbox').prop('checked', true);
      $('.controls').parent().addClass('del');
    } else {
      $('.controls input:checkbox').prop('checked', false);
      $('.controls').parent().removeClass('del');
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

  $('#add').click(function () { //проверяем инпуты
    var ogo = $('.input');
    for (i = 0; i < ogo.length; i++) {
      if (ogo[i].value == '') {
        alert('Заполните все поля!');
        console.log(ogo[i]);
        return false;
      }
    }
    addTr();
    addValueInput();
  });

  function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("myTable2");
    switching = true;
    dir = "asc";
    while (switching) {
      switching = false;
      rows = table.getElementsByTagName("tr");
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("td")[n];
        y = rows[i + 1].getElementsByTagName("td")[n];
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount++;
      } else {
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }


  $('th').click(function () {//сортировка
    var table = $(this).parents('table').eq(0)
    var rows = table.find('tr:gt(0)').toArray().sort(comparer($(this).index()))
    this.asc = !this.asc
    if (!this.asc) {
      rows = rows.reverse()
    }
    for (var i = 0; i < rows.length; i++) {
      table.append(rows[i])
    }
  })

  function comparer(index) {
    return function (a, b) {
      var valA = getCellValue(a, index),
        valB = getCellValue(b, index)
      return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.toString().localeCompare(valB)
    }
  }

  function getCellValue(row, index) {
    return $(row).children('td').eq(index).text()
  }


});