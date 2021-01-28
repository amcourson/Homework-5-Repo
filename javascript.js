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

  $(".btn-primary").on("click",function(){
    var text =  $(this).parent().siblings(".col-lg-9").children("textarea")[0].value
  console.log( $(this).parent().siblings(".col-lg-9").children("textarea")[0].value)
  localStorage.setItem("11am",text)
  })
  var text11am = localStorage.getItem("11am")
  $("#11am").val(text11am);

  $(".btn-primary").on("click",function(){
    var text =  $(this).parent().siblings(".col-lg-9").children("textarea")[0].value
  console.log( $(this).parent().siblings(".col-lg-9").children("textarea")[0].value)
  localStorage.setItem("12pm",text)
  })
  var text12pm = localStorage.getItem("12pm")
  $("#12pm").val(text12pm);

  $(".btn-primary").on("click",function(){
    var text =  $(this).parent().siblings(".col-lg-9").children("textarea")[0].value
  console.log( $(this).parent().siblings(".col-lg-9").children("textarea")[0].value)
  localStorage.setItem("1p",text)
  })
  var text1pm = localStorage.getItem("1pm")
  $("#1pm").val(text1pam);

  $(".btn-primary").on("click",function(){
    var text =  $(this).parent().siblings(".col-lg-9").children("textarea")[0].value
  console.log( $(this).parent().siblings(".col-lg-9").children("textarea")[0].value)
  localStorage.setItem("2pm",text)
  })
  var text2pm = localStorage.getItem("2pm")
  $("#2pm").val(text2pm);

  $(".btn-primary").on("click",function(){
    var text =  $(this).parent().siblings(".col-lg-9").children("textarea")[0].value
  console.log( $(this).parent().siblings(".col-lg-9").children("textarea")[0].value)
  localStorage.setItem("3pm",text)
  })
  var text3pm = localStorage.getItem("3pm")
  $("#3pm").val(text3pm);

  $(".btn-primary").on("click",function(){
    var text =  $(this).parent().siblings(".col-lg-9").children("textarea")[0].value
  console.log( $(this).parent().siblings(".col-lg-9").children("textarea")[0].value)
  localStorage.setItem("4pm",text)
  })
  var text4pm = localStorage.getItem("4pm")
  $("#4pm").val(text4pm);

  $(".btn-primary").on("click",function(){
    var text =  $(this).parent().siblings(".col-lg-9").children("textarea")[0].value
  console.log( $(this).parent().siblings(".col-lg-9").children("textarea")[0].value)
  localStorage.setItem("5pm",text)
  })
  var text5pm = localStorage.getItem("5pm")
  $("#5pm").val(text5pm);