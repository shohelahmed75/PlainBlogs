import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;
const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));

const blogsFile = __dirname + "/blogs.json";
var blogs = [];
if (fs.existsSync(blogsFile)) {
    const oldData = fs.readFileSync(blogsFile, "utf-8");
    if (oldData.trim().length > 0) {
        blogs = JSON.parse(oldData);
    }
}

function saveBlogs(){
    fs.writeFileSync(blogsFile,
        JSON.stringify(blogs, null, 2)
    );
}

app.get("/", (req,res) => {
    res.render("main.ejs",{blogs})
});

app.get("/new", (req,res) => {
    res.render("new.ejs",{blogs})
});

app.get("/blog/:id", (req, res) => {
    const blog = blogs.find(b => b.id.toString() === req.params.id);
    if (blog) {
        res.render("singleBlog.ejs", { blog });
    } else {
        res.status(404).send("Blog not found");
    }
});

app.get("/edit/:id", (req, res) => {
    const blog = blogs.find(b => b.id.toString() === req.params.id);
    if (blog) {
        res.render("edit.ejs", { blog });
    } else {
        res.status(404).send("Blog not found");
    }
});

app.post("/edited/:id", (req, res) => {
    const blog = blogs.find(b => b.id.toString() === req.params.id);
    if (blog) {
        blog.title = req.body.title;
        blog.content = req.body.content;
        blog.author = req.body.author;
        saveBlogs();
        res.redirect("/blog/" + blog.id);
    } else{
        res.status(404).send("Blog not found");
    }
});

app.post("/save", (req,res) => {
    const {title, content, author} = req.body;
    const newBlog = {
        id: blogs.length + 1,
        title,
        content,
        author
    };
    blogs.push(newBlog);
    saveBlogs();
    res.redirect("/");
});

app.post("/delete", (req, res) => {
    const idToDel = req.body.id;
    blogs = blogs.filter(blog => blog.id.toString()!== idToDel);
    saveBlogs();
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Server running at ${port}`);
});