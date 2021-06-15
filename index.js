"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'http://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (res) {
    const todo = res.data;
    const ID = todo.ID;
    const title = todo.Title;
    const finsihed = todo.finsiehd;

    console.log(`The Todo with ID: ${ID}
    Has a title of: ${title}
    Is it finsihed? ${finsihed}`)
});
