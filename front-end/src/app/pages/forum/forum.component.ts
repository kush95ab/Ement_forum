import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Posts } from '../../entities/posts';
import { Postreply } from '../../entities/postreply';
import { PostserviceService } from '../../services/postservice.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  user: any;
  posts: Posts[];
  userprofilename: string;
  postReplies: Postreply[];
  postheading: string;
  postbody: string;
  postcategory: string;
  postreply: string;
  author: string;
  address: String;
  type: boolean;
  name: string;
  searchTest: string;

  sidemenu: boolean = false;
  upvote: number;
  downvote: number;

  constructor(
    private authService: AuthenticationService,
    private postService: PostserviceService,
    private userService: UserService
  ) { }

  hidden: boolean = false;
  hiddenwrite: boolean = false;
  showReplyId: string;

  ngOnInit(): void {
    this.authService.isUserLogged();
    this.retrevePosts();
    this.user = this.userService.getCurrentUser();
    this.author = this.user.userName;

    this.type = (this.user.userType === 'A');
    this.name = this.user.getFirstName() + " " + this.user.getLastName();
    this.userprofilename = this.user.getImgLink();

  }


  /*Searching a post */

  searchPost() {
    // const pst=this.searchtest;
    const pst = new Posts();

    pst.postAuthor = null;
    pst.postBody = null;
    pst.postTitle = this.searchTest;
    pst.postCategory = null;

    this.postService.searchPosts(pst);

  }


  /*Inserting a post */

  addpost() {
    let pst = new Posts();

    pst.postAuthor = this.authService.getUser().userName;
    pst.postBody = this.postbody;
    pst.postTitle = this.postheading;
    pst.postCategory = this.postcategory;
    pst.user_type = this.user.userType;

    this.postService.InsertPosts(pst);

    // Reload the current page without the browser cache
    location.reload(true);
  }

  // hit a like on post
  upvotePost(pst: Posts) {
    pst.postUpvote += 1;
    this.postService.UpdatePosts(pst);
  }
// hit a dislike on post
  downvotePost(pst: Posts) {
    pst.postDownvote += 1;
    this.postService.UpdatePosts(pst);
  }

//hit a like on reply
  upvotePostReply(reply: Postreply) {
    reply.replyUpvote += 1;
    this.postService.UpdateReplys(reply);
  }

  //  hit a disslike on reply
  downvotePostReply(reply: Postreply) {
    reply.replyDownvote += 1;
    this.postService.UpdateReplys(reply);
  }

  /*Getting all posts */

  retrevePosts() {
    this.posts = this.postService.getPosts();
    console.log(this.posts);
    console.log("12345");
  }

  // trackbyPost(Index: number, post: any): string {
  //   return this.postheading;
  // }


  // sortbydate(){
  //   this.posts = this.postService.getPostsbydate();
  // }
  
  // sortbyvotes(){
  //   this.posts = this.postService.getPostsbyvotes();
  // }
  
  // sortbyreplies(){
  //   this.posts = this.postService.getPostsbyreplies();
  // }


  /*Post reply functions */

  /*Inserting a postreply */

  addreply(pst: Posts) {
    const rep = new Postreply();

    rep.replyAuthor = this.authService.getUser().userName;
    rep.replyBody = this.postreply;
    rep.replyId = null;
    rep.postId = pst.postId;

    this.postService.InsertReplys(rep);
    // Reload the current page without the browser cache
    location.reload(true);

  }


  /*Getting post replies */
  getreplies(pst: Posts) {
    this.showReplyId = pst.postId;
    if (this.hidden) {
      this.hidden = false;
    } else {
      this.hidden = true;
    }

    this.postReplies = this.postService.getpostReplies(pst);

  };

  /*  update reply */

  // updatepostreply(reply: Postreply) {
  //   let rep = new Postreply();

  //   rep.replyAuthor = this.authService.getUser().userName;
  //   rep.replyBody = this.postreply;
  //   rep.replyId = this.showReplyId;
  // }


  deletecomments(post: Posts) {
    this.postService.deletePosts(post);
    // Reload the current page without the browser cache
    location.reload(true);
  }

  //togglling private manu of each post
  dropdown(post: Posts) {
    if (this.sidemenu) {
      this.sidemenu = false;
    } else {
      this.sidemenu = true;
    }
  }
}

