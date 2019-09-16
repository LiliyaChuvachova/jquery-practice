$(document).ready(function(){
	
  $('#add').click(function(){
    $('table').append('<tr><td>new</td>,<td></td>,<td></td>,<td></td>,<td class="del"><button class="remove">Delete</button></td></tr>');
  });
	
	$('table').on('click','.remove', function(){
	  $(this).parent().parent().remove();	
	});
	
});
