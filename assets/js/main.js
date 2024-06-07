// jquery product quantity
$(document).ready(function () {
    $(".increment").click(function () {
      var $quantity = $(this).siblings(".quantity");
      var currentVal = parseInt($quantity.val());
      if (!isNaN(currentVal)) {
        $quantity.val(currentVal + 1);
      }
    });
  
    $(".decrement").click(function () {
      var $quantity = $(this).siblings(".quantity");
      var currentVal = parseInt($quantity.val());
      if (!isNaN(currentVal) && currentVal > 1) {
        $quantity.val(currentVal - 1);
      }
    });
  });