// Entites for Posts in the forum
export class Posts {

  postId: string;
  postAuthor: string;
  postTitle: string;
  postBody: string;
  postCategory: string;
  postTime: string;
  postUpvote: number;
  postDownvote: number;
  user_type: string;



  // getters
  public getId(): string {
    return this.postId;
  }

  public getpostAuthor(): string {
    return this.postAuthor;
  }

  public getpostTitle(): string {
    return this.postTitle;
  }

  public getpostBody(): string {
    return this.postBody;
  }

  public getpostCategory(): string {
    return this.postCategory;
  }

  public getpostTime(): string {
    return this.postTime;
  }

  public getupVote(): number {
    return this.postUpvote;
  }

  public getdownVote(): number {
    return this.postDownvote;
  }


  // setters

  public setId( input : string) {
    this.postId = input ;
  }

  public setpostAuthor( input : string) {
    this.postAuthor = input ;
  }

  public setpostTitle( input : string) {
    this.postTitle = input ;
  }

  public setpostBody( input : string) {
    this.postBody = input ;
  }

  public setpostCategory( input : string) {
    this.postCategory = input ;
  }

  public setupVote( input : number ) {
    this.postUpvote += input ;
  }

  public setdownVote( input : number) {
    this.postDownvote += input ;
  }


}