/* postreply Entity */
var reply = function(replyId,postId,Author,body,time,upvote,downvote) {
    this.replyId =replyId;
    this.postId =postId;
    this.replyAuthor =Author;
    this.replyBody =body;
    this.replyTime =time;
    this.replyUpvote = upvote;
    this.replyDownvote = downvote;
}

module.exports = reply;
