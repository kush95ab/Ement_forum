import { User } from '../entities/user';
import { Student } from '../entities/student';
import { Mentor } from '../entities/mentor';
import { Postreply } from '../entities/postreply';
import { Posts } from '../entities/posts';
import { Company } from '../entities/company';
import { message } from '../entities/message';
import { nortification } from '../entities/nortification';

export class Utils {

    constructor() { }

    public static convertDatabaseUserToUser(dataUser: any): User {

        const user = new User();

        user.userId = dataUser.userId;
        user.userName = dataUser.userName;
        user.userPassword = dataUser.userPassword;
        user.userType = dataUser.userType;

        return user;
    }

    public static convertDatabaseStudentToStudent(dataStudent: any): Student {

        const student = new Student();

        student.studentId = dataStudent.studentId;
        student.studentFname = dataStudent.studentFname;
        student.studentLname = dataStudent.studentLname;
        student.studentAddress = dataStudent.studentAddress;
        student.studentPhone = dataStudent.studentPhone;
        student.studentEmail = dataStudent.studentEmail;
        student.studentImgLink = dataStudent.studentImgLink;
        student.studentDescription = dataStudent.studentDescription;

        return student;

    }

    public static convertDatabaseMentorToMentor(dataMentor: any): Mentor {

        const mentor = new Mentor();

        mentor.mentorId = dataMentor.mentorId;
        mentor.mentorFname = dataMentor.mentorFname;
        mentor.mentorLname = dataMentor.mentorLname;
        mentor.mentorAddress = dataMentor.mentorAddress;
        mentor.mentorPhone = dataMentor.mentorPhone;
        mentor.mentorEmail = dataMentor.mentorEmail;
        mentor.mentorImgLink = dataMentor.mentorImgLink;
        mentor.mentorDescription = dataMentor.mentorDescription;

        return mentor;

    }

    public static convertDatabasepoststoPosts(datapost: any): Posts {

        const post = new Posts();

        post.postId = datapost.postId;
        post.postAuthor = datapost.postAuthor;
        post.postTitle = datapost.postTitle;
        post.postBody = datapost.postBody;
        post.postCategory = datapost.postCategory;
        post.postTime = datapost.postTime;
        post.postUpvote = datapost.postUpvote;
        post.postDownvote = datapost.postDownvote;
        post.user_type=datapost.user_type;
        
        // if(post.postId){
        //     alert(
        //         'search results = '+post.postId+" ,'"+post.postTitle+"' ,'"+post.postBody+"'."
        //     );
        // }
        return post;
    }

    public static convertDatabasepostsreplytoPostsreply(datapost: any): Postreply {

        const replyposts = new Postreply();

        replyposts.replyId = datapost.replyId;
        replyposts.postId = datapost.postId;
        replyposts.replyAuthor = datapost.replyAuthor;
        replyposts.replyBody = datapost.replyBody;
        replyposts.replyTime = datapost.replyTime;
        replyposts.replyUpvote = datapost.replyUpvote;
        replyposts.replyDownvote = datapost.replyDownvote;
        

        return replyposts;
    }

    public static convertDatabaseCompanyToCompany(dataCompany: any): Company {

        const company = new Company();


        company.companyId = dataCompany.companyId;
        company.companyName = dataCompany.companyName;
        company.companyAddress = dataCompany.companyAddress;
        company.companyPhone = dataCompany.companyPhone;
        company.companyEmail = dataCompany.companyEmail;
        company.companyDescription = dataCompany.companyDescription;

        return company;
    }

    public static convertimessagetomessage(imessage:any):message{
      const msg =new message();
      msg.message =imessage.message;
      msg.recieverId =imessage.recieverId;
      msg.senderId =imessage.senderId;

      return msg;
    }

    public static convertnortificationtonortify(imessage:any):nortification{
      const msg =new nortification();
      msg.nortificationID =imessage.  nortificationID;
      msg.nortificationbody =imessage.nortificationtitle;
      msg.nortificationtitle =imessage.nortificationtitle;
      msg.time =imessage.timee;

      return msg;
    }
}
