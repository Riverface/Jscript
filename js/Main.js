var cookiesnum = 0;
var cookieiterator = 1;
var iteratoriterator = 1;
var priceiterator = 10;
var sawmills = 0;
var sawmillstr = 1;

function update()
{

}

$(document).ready(function() {
  $("form#some-form").submit(function(event) {
    var someInput = $("input#some-input").val();

    event.preventDefault();
  });
  document.getElementById("cookies2").innerHTML = cookiesnum;
  document.getElementById("priceiterator").innerHTML = priceiterator;
  document.getElementById("sawmills").innerHTML = priceiterator;

});

function cookies() {
  document.getElementById("cookies2").innerHTML = cookiesnum;

  cookiesnum += cookieiterator;

}
function axe()
{

  if (cookiesnum>=priceiterator)
  {
    priceiterator *= 2;
    cookieiterator += iteratoriterator;
    cookiesnum -= 10;

      document.getElementById("priceiterator").innerHTML = priceiterator;

  }
}
