const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json()); // express can read JSON that comes from requests

/* 
| Operation | Description                                             | Method | Route |
| --------- | ------------------------------------------------------- | ------ | ----- |
| Create    | Given a title and content create a new post             | POST   |  /posts     |
| Read one  | Given a title, return the content of a single blog post |  GET   |  /posts/:title     |
| Update    | Given a title and content update an existing blog post  |  PUT   | /post/:title      |
| Delete    | Given a title delete an existing blog post              | DELETE |  /post/:title      |

*/

// YOUR CODE GOES IN HERE
app.get("/", function (req, res) {
  res.send("Hello World");
});

// **1.1 Creating new posts**

app.post("/blogs", (req, res) => {
  const { title, content } = req.body;
  if (!title) {
    return res.status(400).send("Post does not exist");
  }
  fs.writeFileSync(title, content);
  res.send("ok");
});

// **1.2 Updating existing posts**

app.put("/blogs/:title", (req, res) => {
  const title = req.params.title;
  const { content } = req.body;

  if (content) {
    if (fs.existsSync(title)) {
      fs.writeFileSync(title, content);
      res.send("ok");
    } else {
      res.status(404).send("this post does not exist");
    }
  } else {
    return res.status(400).send("There is no Content");
  }
});

// **1.3 Deleting posts**

app.delete("/blogs/:title", (req, res) => {
  const title = req.params.title;

  if (fs.existsSync(title)) {
    fs.unlinkSync(title);
    res.send("ok");
  } else {
    res.status(404).send("The psot doesnt exist");
  }
});

// **1.4 Reading posts**
app.get("/blogs/:title", (req, res) => {
  const title = req.params.title;

  if (fs.existsSync(title)) {
    const content = fs.readFileSync(title);
    res.send(content);
  } else {
    res.status(404).send(" The psot doe not exist");
  }
});

//
app.listen(3000, () => console.log("Server on PORT 3000"));
