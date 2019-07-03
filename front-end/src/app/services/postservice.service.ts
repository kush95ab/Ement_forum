import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Posts } from '../entities/posts';
import { HttpEnum } from '../utils/httpEnum';
import { HttpBackendRequestService } from './http-backend-request.service';
import { Postreply } from '../entities/postreply';
import { Utils } from '../utils/utils';
import { log } from 'util';
// import { post } from 'selenium-webdriver/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {
  private getPostsUrl =HttpEnum.BASEURL+"api/posts/getPost";
  private insertPostsUrl =HttpEnum.BASEURL +"api/posts/insertPost";
  private updatePostsUrl =HttpEnum.BASEURL +"api/posts/updatePost";
  private deletePostsUrl =HttpEnum.BASEURL +"api/posts/deletePost";
  private searchPostsUrl =HttpEnum.BASEURL +"api/posts/searchPost";
  
  private getPostReplyUrl =HttpEnum.BASEURL +"api/posts/getPostReply";
  private insertPostReplyUrl =HttpEnum.BASEURL+"api/posts/insertPostReply";
  private updatePostReplyUrl =HttpEnum.BASEURL+"api/posts/updatePostReply";
  private deletePostReplyUrl =HttpEnum.BASEURL+"api/posts/deletePostReply";

  postlist:Posts[] =new Array();
  replylist:Postreply[] =new  Array();

  constructor( private httpBackendRequest: HttpBackendRequestService,private Http :HttpClient) { }

  /* THE NEW CONTROLLER SERVICES FOR THE FORUM POSTS BACKEND  */
  /* GET ALL POSTS */
  get_Posts (): Observable<Posts[]> {
    return this.Http.get<Posts[]>(this.getPostsUrl);
  }
  // // sorted

  // getPostsbydate()
  // getPostsbyvotes()
  // getPostsbyreplies()
  /* GET ALL REPLYS */

  getReplys (posts: Posts): Observable<Postreply[]> {
    return this.Http.post<Postreply[]>(this.getPostReplyUrl,httpOptions);
  }

  addPosts (posts: Posts): Observable<Posts> {
    console.log("addpost called");
    return this.Http.post<Posts>(this.insertPostsUrl, posts, httpOptions);
  }

  addReply (replyposts: Postreply): Observable<Postreply> {
    return this.Http.post<Postreply>(this.insertPostReplyUrl, replyposts, httpOptions);
  }
  deleteposts (posts: Posts): Observable<Posts> {
    return this.Http.post<Posts>(this.deletePostsUrl, httpOptions);
  }

/* INSERT POSTS */
InsertPosts(Postdetails:Posts){
  this.httpBackendRequest.realizarHttpPost(this.insertPostsUrl,Postdetails).subscribe(
    (error)=>{
      console.log("problem inserting posts");

    }
  )
}

  /* GET POSTS */

  getPosts():Posts[]{
    console.log("posts service called");
    this.httpBackendRequest.realizarHttpPost(this.getPostsUrl,null).subscribe(

      (result) => {
        if (result === null) {
          console.log(result);
          
          console.log("respond error _ getting post");
        } else {
          let i = 0;
          while (result[i]) {
            let post = Utils.convertDatabasepoststoPosts(result[i]);
            this.postlist.push(post);
            i = i + 1;
          }
          console.log(this.postlist);
        }
      },
      (err) => alert('getting Posts error occured.. !')
    )
    return this.postlist;
  }


  /* GET POSTS BY NAME*/

  searchPosts(Postdetails):Posts[]{
    console.log("posts service called");

    this.httpBackendRequest.realizarHttpPost(this.searchPostsUrl, Postdetails).subscribe(

      (result) => {
        if (result === null) {
          console.log("respond error");
        } else {
          let i = 0;
          while (result[i]) {
            let post = Utils.convertDatabasepoststoPosts(result[i]);
            this.postlist.push(post);
            i = i + 1;
          }
       }
      },
      (err) => alert('getting searched Posts error occured.. !')
    )
    return this.postlist;
  }


/* UPDATE POSTS */
UpdatePosts(Postdetails:Posts){
  
  this.httpBackendRequest.realizarHttpPost(this.updatePostsUrl,Postdetails).subscribe(
    (error)=>{
      console.log("Err- frontend postservice- problem updating posts  ");
    }
  )
}

/* DELETE POSTS */

  deletePosts(Postdetails:Posts){
    this.httpBackendRequest.realizarHttpPost(this.deletePostsUrl,Postdetails).subscribe(
      (error)=>{
        console.log("problem deleting posts");
      }
    )
  }



  /* INSERT REPLYS */

  InsertReplys(ReplyDetails:Postreply){
    console.log("insert reply called");
    this.httpBackendRequest.realizarHttpPost(this.insertPostReplyUrl,ReplyDetails).subscribe(
      (error)=>{
        console.log("error in inserting replys to system");
      }
      //(err)=>alert("inserted reply"+err)
    )
  }


   /* GET REPLY FOR POSTS */
  //SENDING POSTID 
   getpostReplies(postdetails:Posts):Postreply[]{
    console.log("get reply called");

    this.replylist =new Array();
    this.httpBackendRequest.realizarHttpPost(this.getPostReplyUrl,postdetails).subscribe(
      (result) => {
        if (result === null) {
          console.log("respond error _  get post replies");
        } else {
          let i = 0;
          while (result[i]) {
            let rep = Utils.convertDatabasepostsreplytoPostsreply(result[i]);
            this.replylist.push(rep);
            i = i + 1;
          }
        }
        console.log(this.replylist);
      }
      //(err) => alert('getting Posts error occured.. !')
    )
    return this.replylist;
  }


  /* UPDATE REPLYS */
  UpdateReplys(PostReplydetails:Postreply){
    this.httpBackendRequest.realizarHttpPost(this.updatePostReplyUrl,PostReplydetails).subscribe(
      (error)=>{
        console.log("Err- frontend postservice- problem updating posts reply  ");
      }
    )
  }

/* DELETE POSTS */

deletepostReplys(Postdetails:Postreply){
  this.httpBackendRequest.realizarHttpPost(this.deletePostsUrl,Postdetails).subscribe(
    (error)=>{
      console.log("problem deleting post reply");
    }
  )
}
  // ****************************************************//
} /*end -class PostserviceService*/

