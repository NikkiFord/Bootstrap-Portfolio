$("#aboutLink").click((e) => {
  e.preventDefault();
  $(".page-content").hide();
  $("#aboutContent").show();
});

$("#portfolioLink").click((e) => {
  e.preventDefault();
  $(".page-content").hide();
  $("#portfolioContent").show();
});

$("#aboutLink").click();
