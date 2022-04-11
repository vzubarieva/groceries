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

    let itemsUppercase = [];
    items.forEach(function (item) {
      itemsUppercase.push(item.toUpperCase());
    });
    itemsUppercase.forEach(function (item) {
      $("#output2").append("<li>" + item + "</li>");
    });

  });
});