$(document).ready(function() {
  $.getJSON('data.txt', function(json) {
    $('#table').DataTable({
      data: json['companies'],
      columns: [
        {data: 'booth'},
        {data: 'name'},
        {data: 'industry'},
        {data: 'description'},
        {data: 'url'}
      ]
    });
  });
});