import {Benefits} from './Benefits';
import {Features} from './Features';
import {Reviews} from './Reviews';

export class Courses {
  public courseName: string;
  public courseId: string;
  public _id: string;
  public aboutCourse: string;
  public createdDate: Date;
  public courseImage: String;
  public benefits: Benefits;
  public features: Features;
  public reviews: Reviews;
}
