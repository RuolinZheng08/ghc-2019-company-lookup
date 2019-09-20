$(document).ready(function() {
  $.getJSON('data.txt', function(json) {
    $('#table').DataTable({
      data: json['companies'],
      columns: [
      {data: 'booth'},
      {data: 'name'},
      {data: 'industry'},
      {data: 'description'},
      {data: 'url',
      render: function(data, type, row, meta) {
        if (type == 'display') {
          data = '<a href="' + data + '" target="_blank">' + data + '</a>';
        }
        return data;
      }
      }],
      responsive: true
    });
  });
});