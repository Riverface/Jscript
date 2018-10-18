var logs = 0;
var cookieiterator = 1;
var iteratoriterator = 1;
var priceiterator = 10;
var sawmills = 0;
var sawmillstr = 1;
var active = false;
var counter = 1;
function update()
{

}

$(document).ready(function() {
active = true;

  logs += sawmills;
  document.getElementById("cookies2").innerHTML = logs;
  document.getElementById("priceiterator").innerHTML = priceiterator;
  document.getElementById("sawmills").innerHTML = sawmills;

});

function cookies() {
  document.getElementById("cookies2").innerHTML = logs;

  logs += cookieiterator;

}
function axe()
{

  if (logs >= priceiterator)
  {
logs -= priceiterator;
    priceiterator *= 2;
    cookieiterator += iteratoriterator;

    document.getElementById("cookies2").innerHTML = logs;
      document.getElementById("priceiterator").innerHTML = priceiterator;

  }

}

function sawmill()
{
sawmills += 1;
console.log (sawmills);
document.getElementById("cookies2").innerHTML = logs;
document.getElementById("priceiterator").innerHTML = priceiterator;
      document.getElementById("sawmills").innerHTML = sawmills;
}
