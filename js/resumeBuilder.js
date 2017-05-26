/*
This is empty on purpose! Your code to build the resume will go here.
*/

var bio = { //object bio begins
  name: "Homer Simpson",
  role: "Nuclear Safety Inspector",
  contacts: { //object bio.contacts begin
    fb: "fb/homerjsimpson",
    fbKey: "fb",
    mobile: "099.99.999",
    email: "homer@the-simpsons.doh",
    github: "homerun",
    twitter: "@HomerJSimpson",
    location: "742 Evergreen Terrace"
  }, //object bio.contacts ends
  welcomeMessage: "I may not believe in myself but I believe in what I do.",
  skills: ["Eating", "Beers", "Burping"],
  pictureURL: "./images/homer.jpg",

  display: function() { //function bio.display begins

    //replaced helper function in helper.js
    var formattedName = replaced(HTMLheaderName, bio.name);
    var role = replaced(HTMLheaderRole, bio.role);
    var mobile = replaced(HTMLmobile, bio.contacts.mobile);
    var github = replaced(HTMLgithub, bio.contacts.github);
    var loc = replaced(HTMLlocation, bio.contacts.location);
    var email = replaced(HTMLemail, bio.contacts.email);
    var twitter = replaced(HTMLtwitter, bio.contacts.twitter);
    var facebook = replaced(HTMLcontactGeneric, bio.contacts.fb, "fb");
    var pictureURL = replaced(HTMLbioPic, bio.pictureURL);
    var welcome = replaced(HTMLwelcomeMsg, bio.welcomeMessage);

    //jQuery begins
    $("#header").prepend(formattedName, role, pictureURL);
    $("#topContacts:last,#footerContacts").append(mobile, email, github, twitter,loc, facebook);
    //jQuery ends

    if (bio.skills.length > 0) { // if statement begins
      $("#header").append(HTMLskillsStart);
      bio.skills.forEach(function(element) {
        var skills = replaced(HTMLskills, element);
        $("#skills").append(skills); //jQuery
      });

    }// if statement ends

  } //function bio.display ends

}; //object bio ends

var education =
{ // object education begins
  schools:
  //object education.school array begins
  [{
    name: "Springfield Elementary",
    degree: "Masters in Beer drinking",
    majors: ["Drunk driving", "Doh"],
    location: "Springfield",
    dates: "in progress",
    url: ""
  }], //object education.school array ends
  onlineCourses:
  //object education.onlineCourses array begins
  [{
    title: "Marketing in a Digital World",
    school: "University of Illinois",
    dates: "November 2016",
    url: ""
  }], //object education.onlineCourses array ends
  display: function() { // function education.display begins
    function looper(element){
      var formatted_schoolMajor = replaced(HTMLschoolMajor, element);
      $(".education-entry").append( formatted_schoolMajor);
    }
    if (education.schools.length > 0) {
      $("#education").append(HTMLschoolStart);
      for (var i = 0; i < education.schools.length; i++) {
        var formatted_schoolName = replaced(HTMLschoolName, education.schools[i].name);
        var formatted_schoolDegree = replaced(HTMLschoolDegree, education.schools[i].degree);
        var formatted_schoolDates = replaced(HTMLschoolDates, education.schools[i].dates);
        var formatted_schoolLocation = replaced(HTMLschoolLocation, education.schools[i].location);
        $(".education-entry").append(formatted_schoolName,formatted_schoolDegree,formatted_schoolDates,formatted_schoolLocation);
        education.schools[i].majors.forEach(looper);


      }


    }
    if (education.onlineCourses.length > 0) {
      $(".education-entry").append(HTMLonlineClasses);
      for (var x = 0; x < education.onlineCourses.length; x++) {
        var formatted_onlineTitle = replaced(HTMLonlineTitle, education.onlineCourses[x].title);
        var formatted_onlineSchool = replaced(HTMLonlineSchool, education.onlineCourses[x].school);
        var formatted_onlineDates = replaced(HTMLonlineDates, education.onlineCourses[x].dates);
        var formatted_onlineURL = replaced(HTMLonlineURL, education.onlineCourses[x].url);
        $(".education-entry").append(formatted_onlineTitle,formatted_onlineSchool, formatted_onlineDates, formatted_onlineURL);

      }
    }

  } // function education.display ends

}; // object education ends

var work = { // object work starts
  jobs: [{
    employer: "Springfield Nuclear Power Plant",
    title: "Nuclear safety inspector",
    location: "Jaipur, Rajasthan, India",
    dates: "February 3, 1994",
    description: "His job in the first season, before promotion to safety inspector. It was unclear to everyone (including his employer and Homer himself). He called himself a technical supervisor. He was hired as part of Project Bootstrap, a government program to bring in unskilled workers implemented by the Ford administration"
  },{
    employer: "NASA",
    title: "Astronaut",
    location: "NASA, USA",
    dates: "February 3, 1995",
    description: "Homer is dangerously unqualified to be a nuclear safety inspector, but he was even more unqualified to be an astronaut. Of course, that was sort of the point, as NASA wanted an everyman to send into space—the kind of guy who yells at the President about Tang, and flushes toilets for fun. Homer’s adventures in space were high-stakes hilarious, with insect overlords, and ruffled potato chips. But in the end, a hero emerged: an inanimate carbon rod. In Rod We Trust."
  }],
  display: function() { //function work.display  starts
if (work.jobs.length>0){// if statement begins
  $("#workExperience").append(HTMLworkStart);
  for (var i = 0; i<work.jobs.length; i++){
    var workEmployer=replaced(HTMLworkEmployer,work.jobs[i].employer);
    var workTitle=replaced(HTMLworkTitle,work.jobs[i].title);
    var workLocation=replaced(HTMLworkLocation,work.jobs[i].location);
    var workDates=replaced(HTMLworkDates,work.jobs[i].dates);
    var workDescription=replaced(HTMLworkDescription,work.jobs[i].description);
    $(".work-entry").append(workEmployer + workTitle, workLocation,workDates,workDescription);
  }
}// if statement ends

  }//function work.display ends
}; //object work ends
var projects = { //object project begins
  project: [{
    title: "Barbershop Quartet Singer",
    dates: "January 2005",
    description: "Granted, Homer had this job before the events of The Simpsons began, but it still got its own flashback episode, where The Be Sharps reunited atop Moe’s for one last concert. Nobody in the group ever showed musical acumen again (aside from Barney), but for a little while, The Be Sharps were bigger than Jesus—and they have the album to show it.",
    image: ["./images/singer.jpg"]
  },
  {
    title: "Food Critic",
    dates: "February 2005",
    description: "On the surface, Homer as a food critic doesn’t seem to make sense, what with his general lack of education or writing skills. But Lisa provided the brains, and Homer brought the enthusiasm for food. When Homer did his own writing, it was all threatening references to the U.N., and \“Screw Flanders.\” It was Homer’s enthusiasm for pretty much everything he ate that made the gig especially memorable. Anytime somebody seems to be laying on the hyperbole, you can always trot out, \“Nine thumbs up? What the hell is that!?\”",
    image: ["./images/critic.jpg","./images/power-plant.gif"]

  }],
  display: function() { // function projects.display begins
    for (var i = 0; i < projects.project.length; i++) {
      var formatted_projectTitle = replaced(HTMLprojectTitle, projects.project[i].title);
      var formatted_projectDates = replaced(HTMLprojectDates, projects.project[i].date);
      var formatted_projectDescription = replaced(HTMLprojectDescription, projects.project[i].description);
      $("#projects").append(HTMLprojectStart);
      $(".project-entry:last").append(formatted_projectTitle,formatted_projectDates,formatted_projectDescription);
      projects.project[i].image.forEach(looper);//projects.project[i].image forEach ends

    }
    function looper(element){
      var formatted_projectImage = replaced(HTMLprojectImage, element);
        $(".project-entry:last").append(formatted_projectImage);
    }
  } // function projects.display ends
};// object project ends

//displaying all content
work.display();
projects.display();
bio.display();
education.display();

//gathering click coordinates
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x, y);
});


//Internationalise name function
function inName(name) {
  var y = name.indexOf(" ");
  name = name.toLowerCase();
  var name1 = name.charAt(0).toUpperCase() + name.slice(1, y);
  var name2 = name.slice(y + 1).toUpperCase();
  name = name1 + " " + name2;
  return name;
}
// map, internalization and some beautification jQuery
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
$("img").hover(function(){
  $(this).addClass("shadow");
}, function(){
  $(this).removeClass("shadow");
});
