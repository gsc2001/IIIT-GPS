window.data = [];

$.getJSON('https://raw.githubusercontent.com/gsc2001/Data-Dump/master/data.json', (d) => {
  window.data = d;
}).done(main);

// Function to start working of all functions
function main() {
  var url = window.location.href.split("");
  url = url.reverse();
  url = url.join("");

  // Function to check index.html
  if (url[5] == 'x')
    updateBookmarks();
  else if(url[5] == 'r'){
    var currentyear = JSON.parse(localStorage.getItem('gpsyear'));
    yearRender(parseInt(currentyear));
    bookMarkHandle(false);
  }
  else
  {
    var currentcourse = JSON.parse(localStorage.getItem('gpscourse'));
    courseRender(parseInt(currentcourse));
    bookMarkHandle(false);
  }
}