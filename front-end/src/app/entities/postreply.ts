//Entities for post-reply for forum

export class Postreply{
  replyId:any;
  postId:string;
  replyAuthor:string;
  replyBody:string;
  replyTime:string;
  replyUpvote:number;
  replyDownvote:number;

  // getters
  public getreplyId(): string {
    return this.replyId;
  }
  
  public getpostId(): string {
    return this.postId;
  }

  public getreplyAuthor(): string {
    return this.replyAuthor;
  }

  public getreplyBody(): string {
    return this.replyBody;
  }

  public getreplyTime(): string {
    return this.replyTime;
  }

  public getupVote(): number {
    return this.replyUpvote;
  }

  public getdownVote(): number {
    return this.replyDownvote;
  }


  // setters

  public setreplyId( input : string) {
    this.replyId = input ;
  }

  public setpostId( input : string) {
    this.postId = input ;
  }
  
  public setreplyAuthor( input : string) {
    this.replyAuthor = input ;
  }

  public setreplyBody( input : string) {
    this.replyBody = input ;
  }
  
  public setupVote( input : number ) {
    this.replyUpvote += input ;
  }

  public setdownVote( input : number) {
    this.replyDownvote += input ;
  }


}
