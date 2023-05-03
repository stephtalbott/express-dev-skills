const Skill = require("../models/skill");

// runs CRUD action and returns response
function index(req, res) {
  res.render("skills/index", {
    skills: Skill.getAll(),
  });
}

function show(req, res) {
//   console.log("this is req", req.params);
  res.render("skills/show", {
    skill: Skill.getOne(req.params.id),
  });
}

function newSkill(req, res) { 
  res.render('skills/new', { title: 'New Skill' })
};

function create(req, res) { 
  Skill.create(req.body)
  res.redirect('/skills')
};

function deleteSkill(req, res) {
  Skill.deleteOne(req.params.id)
  res.redirect('/skills')
};

module.exports = {
  index,
  show,
  newSkill,
  create,
  deleteSkill,
};
