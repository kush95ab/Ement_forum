/* posts Entity */
var posts = function (postId, postauthor, postheading, postbody, postcategory, posttime, postupvote, postdownvote, usertype) {

    this.postId = postId;
    this.postAuthor = postauthor;
    this.postTitle = postheading;
    this.postBody = postbody;
    this.postCategory = postcategory;
    this.postTime = posttime;
    this.postUpvote = postupvote;
    this.postDownvote = postdownvote;
    this.user_type = usertype;
}

module.exports = posts;
