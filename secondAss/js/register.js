$(document).ready(function () {
  $('input[name="chech"]').click(function () {
    $('input[name="check"]').not(this).prop("check", false);
  });
});
