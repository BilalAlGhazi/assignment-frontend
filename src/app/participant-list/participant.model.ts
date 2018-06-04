export class Participant {
  public firstName: string;
  public lastName: string;
  public email: string;
  public activity: string;
  public comments: string;

  constructor(firstName: string, lastName: string,
    email: string, activity: string, comments: string){
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.activity = activity;
      this.comments = comments;
    }
}
