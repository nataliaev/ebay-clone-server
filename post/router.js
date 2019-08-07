const { Router } = require("express");
const Post = require("./model");

const router = new Router();
router.get("/posts", (req, res, next) => {
  Post.findAll()
    .then(posts => res.send(posts))
    .catch(err => next(err));
});

router.get("/posts/:id", (req, res, next) => {
  Post.findByPk(req.params.id)
    .then(post => res.send(post))
    .catch(err => next(err));
});

router.post("/posts", (req, res, next) => {
  Post.create(req.body)
    .then(post => res.send(post))
    .catch(err => next(err));
});

router.delete("/posts/:id", (req, res, next) => {
  Post.destroy({
    where: { id: req.params.id }
  })
    .then(number => send({ number }))
    .catch(err => next(err));
});

router.put("/posts/:id", (req, res, next) => {
  Post.findByPk(req.params.id)
    .then(post => post.update(req.body))
    .then(post => res.send(post))
    .catch(err => next(err));
});

module.exports = router;
