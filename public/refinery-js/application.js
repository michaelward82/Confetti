/*global $ */
/*jslint indent: 2 */

$(function () {
  function carouselInit(elem) {
    $("#showcase").addClass("clearfix")
                  .append("<a href='#' id='showcase-prev'>&lt;</a><a href='#' id='showcase-next'>&gt;</a>");
    $("#showcase-next").click(function () {
      elem.next();
      return false;
    });
    $("#showcase-prev").click(function () {
      elem.prev();
      return false;
    });
  }
  
  $('#home-features').cycle({
    fx: 'fade',
    pause: 1,
    speed: 1000, 
    timeout: 20000,
    pager: '#slidenumbers'
  });
  $(".home-features-parent").css("height", "310px");
  $(".biggerlink")
    .biggerlink()
    .css("cursor", "pointer");
  $(".tab-content").hide(); //Hide all content
  $("ul.tabs li:first").addClass("active").show(); //Activate first tab
  $(".tab-content:first").show(); //Show first tab content

  //On Click Event
  $("ul.tabs li").click(function () {
    $("ul.tabs li").removeClass("active"); //Remove any "active" class
    $(this).addClass("active"); //Add "active" class to selected tab
    $(".tab-content").hide(); //Hide all tab content
    var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
    $(activeTab).show(); //Fade in the active ID content
    return false;
  });
  
  if ($(".page-showcase").length) {
    if ($("#showcase ul li").length > 3) {
      $("#showcase ul").jcarousel({
        scroll: 1,
        initCallback: carouselInit(),
        buttonNextHTML: null,
        buttonPrevHTML: null,
        wrap: "circular",
        auto: 3
      });
    }
  }
});