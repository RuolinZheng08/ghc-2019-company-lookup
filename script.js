class Company {
  constructor(booth, name, industry, description, url) {
    this.booth = booth;
    this.name = name;
    this.industry = industry;
    this.description = description;
    this.url = url;
  }
}

const data = [
  new Company(20, "Google", "tech", "a cool company", "www.google.com"),
  new Company(12, "FB", "social", "another cool company", "www.facebook.com")
];

data.push(new Company(333, "Unknown", "?", "placeholder", "localhost.com"));

$(document).ready(function() {
  $("#table").DataTable({
    data: data,
    columns: [
      {data: "booth"},
      {data: "name"},
      {data: "industry"},
      {data: "description"},
      {data: "url"}
    ]
  });
});