var express = require("express");
var router = express.Router();
var Blog = require("../models/BlogEntity");

/* GET users listing. */
router.get("/", async function (req, res, next) {
  const blogs = await Blog.query().orderBy("id");
  return res.json(blogs);
});

router.get("/:id", async function (req, res, next) {
  var id = req.params.id;
  const blog = await Blog.query().findById(id);
  console.log("bklog", blog);
  return res.send(blog);
});

module.exports = router;
