$(document).ready(function() {
  $("form#survey").submit(function() {
    const firstName = $("input#firstName").val();
    console.log(firstName);
    const lastName = $("input#lastName").val();
    const dob = $("#born").val();
    const favFood = $("#favFood").val();
    const favMusic = $("input:radio[name=favMusic]:checked").val();
    const favColor = $("#color").val();
    alert("Thank you for your responses!");
  });
});