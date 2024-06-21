// 1) Add jQuery into the project (bottom of the body tag)
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>

// 2) Add the app.js script tag under the jQuery script tag
<script src="app.js"></script>

// 4) On each of the navItem elements change the color to white.
$(".navItem").css("color", "white");

// 5) Now select the element with the ID of 'nav'
// 6) Give that element a background color of #145
$("#nav").css("background-color", "#145");

// 7) Select all the even list items
// 8) Change the background color to #ccc
$("li:even").css("background-color", "#ccc");

// 9) Select all the odd list items
// 10) Change the background color to #aaa
$("li:odd").css("background-color", "#aaa");

// 11) Select the input tag
$("input").text("Landon");;