// TODO: 컨트롤러 코드
const models = require("../models");

exports.index = (req, res) => {
  res.render("index");
};

exports.signup = (req, res) => {
  res.render("signup");
};

exports.signin = (req, res) => {
  res.render("signin");
};

exports.post_signup = (req, res) => {
  models.User.create({
    userid: req.body.userid,
    name: req.body.name,
    pw: req.body.pw,
  }).then((result) => {
    console.log("signup >>", result);
    res.send(result);
  });
};

exports.post_signin = (req, res) => {
  models.User.findOne({
    where: { userid: req.body.userid, pw: req.body.pw },
  }).then((result) => {
    console.log("signin >>", result);
    res.send(result);
  });
};

exports.post_profile = (req, res) => {
  // console.log(req.body)
  models.User.findOne({
    where: { userid: req.body.userid },
  }).then((result) => {
    console.log("profile >>", result);
    res.render("profile", { data: result });
  });
};

exports.edit_profile = (req, res) => {
  models.User.update(
    {
      userid: req.body.userid,
      name: req.body.name,
      pw: req.body.pw,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  ).then((result) => {
    console.log("edit >>", result);
    res.send("수정 성공");
  });
};

exports.delete_profile = (req, res) => {
  models.User.destroy({
    where: { id: req.body.id },
  }).then((result) => {
    console.log("delete>>", result);
    res.send("삭제 성공");
  });
};
