var UserModel = require('../Models/user');
var PostModel = require('../Models/Post');
var CommentModel = require('../Models/Comment')



exports.get = (req, res) => {


    res.render('AddPost');


}

exports.post = (req, res) => {

console.log(req.user._id);
    UserModel.findById(req.user._id).then((user) => {


        var post = new PostModel({

            Title: req.body.POST,
            Author: user

        });

        user.Post.push(post);

        Promise.all([user.save(), post.save()])

    }).then(() => {

        res.redirect('/');

    })


}

exports.display = function (req, res) {

    PostModel.find().populate([{
            path: 'Comment',
            populate: {

                path: 'Author',
                model: 'User'
            }
        },

        {
            path: 'Author'
        }
    ]).then((posts) => {

        res.render('display', {
            posts: posts
        });

    })

}

exports.comment = function (req, res) {

    console.log(req.body.id);
    PostModel.findById(req.body.id).then((post) => {

        var comment = new CommentModel({

            Title: req.body.comment,
            Author: req.user
        })

        post.Comment.push(comment);

        Promise.all([post.save(), comment.save()]).then(() => {


            res.redirect('/display');

        });
    })




}