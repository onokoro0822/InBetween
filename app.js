const express = require("express");
const path = require("path");
const app = express();

// EJSをテンプレートエンジンとして設定
app.set('view engine', 'ejs');

// viewsフォルダのパスを設定
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));


// ルートにアクセスしたときにindex.ejsをレンダリング
app.get("/", (req, res) => {
    res.render("index", { message: "こんにちは、EJS!" });
});

app.get("/content", (req, res) => {
    res.render("content");
});

app.get("/access", (req, res) => {
    res.render("access");
});

app.get("/aboutus", (req, res) => {
    res.render("about_us");
});

// サーバーを3000番ポートで起動
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});

