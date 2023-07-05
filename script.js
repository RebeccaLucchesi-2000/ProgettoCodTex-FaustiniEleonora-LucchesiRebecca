$(document).ready(function() {
  $("#btn-add").click(function() {
    $("add").css("display", "inline");
  });

  $("#btn-del").click(function() {
    $("del").css("display", "inline");
  });

  $("#btn-abbr").click(function() {
    $("abbr").css("display", "inline");
  });

  $("#btn-hide").click(function() {
    $("add, del, abbr").hide();
  });
});
