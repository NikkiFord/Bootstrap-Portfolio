let aboutLink = $("#aboutLink");
let portfolioLink = $("#portfolioLink");
let homeLink = $("#homeLink");

let aboutContent = $("#aboutContent");
let portfolioContent = $("#portfolioContent");

aboutLink.click((e) => {
  e.preventDefault();
  $(".page-content").hide();
  aboutContent.show();
  $(".active").removeClass("active");
  aboutLink.addClass("active");
});

portfolioLink.click((e) => {
  e.preventDefault();
  $(".page-content").hide();
  portfolioContent.show();
  $(".active").removeClass("active");
  portfolioLink.addClass("active");
});

homeLink.click(() => aboutLink.click());

aboutLink.click();
