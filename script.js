let button = $("div#button");
let container = $("div#container");

button.on("click", function() {
    button.addClass('hidden');
    for (let i=0; i<4; i++) {
        container.append(`<div id="boxContainer">
        <div id="box"></div>
        <div id="box"></div>
        <div id="box"></div>
        <div id="box"></div></div>`);
    }
});

container.on("click", "div#box", function() {
    $(this).toggleClass("light");
});