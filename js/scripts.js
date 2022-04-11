$(document).ready(function () {
  $("form#groceries").submit(function (event) {
    event.preventDefault();
    const firstItem = $("#item1").val();
    const secondItem = $("#item2").val();
    const thirdItem = $("#item3").val();

    let items = [firstItem, secondItem, thirdItem];
    items = items.sort();
    items.forEach(function (item) {
      $("#output").append("<li>" + item + "</li>");
    });
    let items2 = [];
    items2 = items2.toUpperCase();
    item2 = [items];
  });
});