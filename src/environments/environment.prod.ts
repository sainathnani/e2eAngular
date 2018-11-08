export const environment = {
  production: true,
  apiUrl: 'http://localhost:3010/',
  getCategories: 'categoryroutes/categories',
  categoryImage: 'file/',
  fssource: '/fs',
  bannersource: '/banners',
  courseContent: '/courseContent',
  contactus: 'contactusroutes/user/contactus',
  getCourseById: 'courseroute/course/',
  getAllCourses: 'courseroute/courses',
  getAllBanners: 'file/get/allfiles',
  constructUrl : function(input) {
    return this.apiUrl + input;
  }
};
