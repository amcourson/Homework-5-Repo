var todaysDate = moment().format('LL');

console.log(todaysDate);

$("#currentDay").text(todaysDate);

$(".btn-primary").on("click",function(){
  var text =  $(this).parent().siblings(".col-lg-9").children("textarea")[0].value
console.log( $(this).parent().siblings(".col-lg-9").children("textarea")[0].value)
localStorage.setItem("9am",text)
})
var text9am = localStorage.getItem("9am")
$("#9am").val(text9am);

$(".btn-primary").on("click",function(){
    var text =  $(this).parent().siblings(".col-lg-9").children("textarea")[0].value
  console.log( $(this).parent().siblings(".col-lg-9").children("textarea")[0].value)
  localStorage.setItem("10am",text)
  })
  var text10am = localStorage.getItem("10am")
  $("#10am").val(text10am);