//планый переход по ссылкам
$('a[href^="#"]').click(function () {
  var target = $(this).attr("href");
  $("html, body").animate({ scrollTop: $(target).offset().top }, 800); //800 - длительность скроллинга в мс
  return false;
});
