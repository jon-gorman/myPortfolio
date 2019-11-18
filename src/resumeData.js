import reactredux from "./components/images/reactRedux1.png"
import hackathon from "./components/images/hack1234.png"
import picMatch from "./components/images/pictureMatch1.png"
import wordPress from "./components/images/wordPress.png"
import pdf from "./components/images/Resume01142019PDF.pdf"


let resumeData = {
    "imagebaseurl":"",
    "name": "Jonathan Gorman",
    "role": "- Web Developer -",
    "linkedinId":"Your LinkedIn Id",
    "skypeid": "Your skypeid",
    "roleDescription": "- Innovative Thinker -",
    "roleDescription2": "- Problem Solver -",
    "className": "fa fa-file-pdf-o",
    "pdf": pdf,
    "socialLinks":[
        {
          "name":"linkedin",
          "url":"https://www.linkedin.com/in/jong",
          "className":"fa fa-linkedin"
        },
        {
          "name":"github",
          "url":"https://github.com/jon-gorman",
          "className":"fa fa-github"
        },
      // {
      //   "name": "CV",
      //   "url": pdf,
      //   "className": "fa fa-file-pdf-o"
      // }
        // {
        //   "name":"skype",
        //   "url":"",
        //   "className":"fa fa-twitter"
        // }
      ],
    "aboutme":"After completing my formal education in Environmental Engineering, I found that I had a creative and technical passion for Web Development. In pursuit of that passion I began teaching myself the Full Stack. Since that time I haven't looked back and have completed a wide range of projects and multiple internships.",
    "address":"Austin, TX",
    "website":"contact@jongorman.top",
    "education":[
      {
        "UniversityName":"Austin Coding Academy",
        "specialization":"Full Stack JavaScript",
        "MonthOfPassing":"Certificate Completed",
        "YearOfPassing":"2018",
        "Achievement1":"• Built several websites using HTML, CSS, JQuery",
        "Achievement2":"• Used JavaScript to build games and logic puzzles in console",
        "Achievement3":"• Used React, Node, Mongoose, and Express to develop MERN stack applications",
      },
      {
        "UniversityName":"Texas A&M University Kingsville",
        "specialization":"Environmental Engineering",
        "MonthOfPassing":"Degree Completed",
        "YearOfPassing":"2014",
        "Achievement1":"• Development and Implementation of the Innovative\n" +
          "Storm Water Regional Detention Facilities for Urban Water Quality Improvement in the Arroyo\n" +
          "Colorado Watershed",
        "Achievement2":"• Designed and developed a project for producing electricity at Kingsville Municipal Waste Water \n" +
          "      facility using the plants effluent stream for the purpose of powering the UV disinfection lights",
        "Achievement3":"• Initiated, designed and installed a wind turbine at the Physical plant at Texas A&M-\n" +
          "Kingsville for the purpose of powering the club cars used on campus",
      },
    ],
    "work":[
      {
        "CompanyName":"Whole Foods",
        "specialization":"Grocery Department",
        "MonthOfLeaving":"2018",
        "YearOfLeaving":"Present",
        "Achievements":""
      },
      {
        "CompanyName":"Austin Devs, LLC",
        "specialization":"Development and Testing",
        "MonthOfLeaving":"2018",
        "YearOfLeaving":"Present",
        "Achievements":"Contribute to the development of web-applications for local Start-Ups"
      },
      {
        "CompanyName":"Austin Coding Academy",
        "specialization":"Student TA",
        "MonthOfLeaving":"April, 2018",
        "YearOfLeaving":"July, 2018",
        "Achievements":"Helped new students learn code"
      },
      {
        "CompanyName":"Instacart",
        "specialization":"Contractor",
        "MonthOfLeaving":"2016 -",
        "YearOfLeaving":"2018",
        "Achievements":"Ensured timely and accurate orders for customers"
      },
      {
        "CompanyName":"Megladon Manufacturing",
        "specialization":"Bidding & Estimating",
        "MonthOfLeaving":"2014 -",
        "YearOfLeaving":"2016",
        "Achievements":"Collaborated with shareholders to establish a ISO-14000 standardization"
      },
    ],
    "skillsDescription":"",
    "skills":[
      {
        "skillname":"HTML5"
      },
      {
        "skillname":"CSS"
      },
      {
        "skillname": "JavaScript"
      },
      {
        "skillname": "JQuery"
      },
      {
        "skillname": "Express"
      },
      {
        "skillname": "MongoDB"
      },
      {
        "skillname":"Reactjs"
      },
      {
        "skillname": "Git"
      },
      {
        "skillname": "Gnu Image Manipulation Program"
      },
      {
        "skillname": "WordPress"
      },
    ],
    "portfolio":[
      {
        "name":"Austin DevWeek 2018 Hackathon",
        "title":"Orange Apron Project",
        "description":"First place winners!",
        "imgurl": hackathon,
        "link": "https://www.youtube.com/watch?v=DugE65TrCmQ&feature=youtu.be&fbclid=IwAR3f0xCu_tqpP1Jn5BYRhhNV-X-V1DcJRvBVd6pFmZ-jdYI376Z9LL6bkxs"
      },
      {
        "name":"React-Redux app",
        "title":"There's Nothing To Eat",
        "description":"Leftover ingredients?",
        "imgurl": reactredux,
        "link" : "http://nothing-2-eat.herokuapp.com/"
      },

      {
        "name":"WordPress site",
        "title":"Bee Lavish Events",
        "description":"Freelance Example",
        "imgurl":wordPress,
        "link": "https://beelavish.com"
      },
      {
        "name":"Game in React",
        "title":"Picture Match",
        "description":"Fun Game for passing the time",
        "imgurl":picMatch,
        "link": "https://gormangit.github.io/Big-Kahuna-1/"

      },
    ],
    "testimonials":[
      {
        "description":"Just a reminder if you need coding for your website... Jon is awesome. I had an issue that tech support said they couldn't help me with. Jon had it fixed in under an hour... over the phone while he was shopping.",
        "name":"Laura Gunn, LGMarketing"
      },
      {
        "description":"Crushing it!",
        "name":"Kevin Kolten, CEO Austin Devs LLC"
      }
    ]
  };
  
  export default resumeData