'use strict';

angular.module('pabloApp')
.controller('ProfileCtrl', function ($scope) {

  $scope.schema = 
    {type: "object", title: "Comment", required: ["comments", "projects"],
    properties: {
      title: {title:"Title", type:"string"},
      surname: {type: "string", title:'Family name'},
      forename: {type: "string", title:'First names'}, 


      addressline1: {type: 'string', title: 'Address'},      
      addressline2: {type: 'string', title: null},           
      addressline4: {type: 'string', title: 'Address'},
      city: {type: 'string', title: 'City'},          
      postcode: {type: 'string', title: 'Postcode'},
      country: {type: 'string', title: 'Country'},

      phone: {type: 'string', title: 'Phone'},
      eMail: {type: 'string', title: 'E-Mail'},
      availabilityFromDate: {type: 'string', title: 'Availablility date'},
      agent: {type: 'string', title: 'Your agent'},
      terms: {type: 'boolean', title: 'Distribution accept'},
      terms2: {type: 'boolean', title: 'Web site accept'},

      homePhone: {type: 'string', title: 'Home Phone'},
      skype: {type: 'string', title: 'Skype ID'},
      dateOfBirth: {type: 'string', title:'Date of Birth'},
      maritalStatus: {type: 'string', enum:['Married','Divorced','Single'], title: 'Marital Status'},
      showMarialStatusOnCv: {type: 'boolean', enum: ['Yes', 'No'], title: 'Show Marital Status on CV'},
      ItExperienceSince: {type: 'string', title: 'IT Experience Since'},
      drivelLicense: {type: 'boolean', title: 'Have driver license'},
      car: {type: 'boolean', title: 'Have car'},
      customerClause: {type: 'boolean', title: 'Have Customer Clause'},
      competitionClause: {type: 'boolean', title: 'Have competitive clause'},

      title: {type: 'string', title: 'Title'},
      consultantCategory: {type: 'string', enum:['.NET','Java','Agile','BI', 'Business modelling','CA Gen'], title: 'Consultant Categories'},
      personalProfile: {type: 'string', title: 'Personal Profile'},
      workExperience: {type: 'string', title: 'Work Experience'},
      primaryApplications: {type: 'string', title: 'Personal networks'},
      otherInformation: {type: 'string', title: 'otherInformation'},

      workhistory: {type: "array", title: "Work history", 
        items: {type: "object", properties: {
          company: {title: "Company", type: "string", description: "Where did you work?"},
          title: {title: "Email", type: "string"},
          website: {title: "Website", type: "string"},
          dateFrom: {title: "Date From", type: "string"},
          dateTo: {title: "Date To", type: "string"},
          jobDescription: {title: "Job Description", type: "string"},
          hideOnCv: {type: 'boolean', title: 'Hide on CV'},


         projects: {type: "array", title: "Projects",
            items: {type:"object", properties : {
              projectName: {title: "Project name", type: "string"},
              company: {title: "Company", type: "string"},
              dateFrom: {title: "Date From", type: "string"},
              dateTo: {title: "Date To", type: "string"},
              projectDescription: {title: "Project Description", type:"string"},
              hideOnCv: {type: "string", enum: ["No", "Yes"]}
            }}
          }
        },
      "required": ["jobDescription"]
      }
      },

    industryExperience: {type: "array", title: "Industry Experience", 
      items: {type: "object", properties: {
        company: {title: "Industry", type: "string"}
      }}
     }, 

    skills: {type: "array", title: "Skills", 
      items: {type: "object", properties: {
        skillCategory: {title: "Skill Category", type: "string"},
        skill: {title: "Skill", type: "string"}
      }}
    }, 

    certification: {type: "array", title: "Certifications", 
      items: {type: "object", properties: {
        certificationName: {title: "Certification Name", type: "string"},
        finishedDate: {title: "Finished Date", type: "string"}
      }}
    }, 

    course: {type: "array", title: "Courses", 
      items: {type: "object", properties: {
        certificationName: {title: "Course Name", type: "string"},
        finishedDate: {title: "Finished Date", type: "string"}
      }}
    }, 

    geography: {type: "array", title: "Geography", 
      items: {type: "object", properties: {
        company: {title: "Geography", type: "string"}
      }}
     },

    originalResume: {type: "array", title: "Original CV", 
      items: {type: "object", properties: {
        company: {title: "Original CV", type: "string"}
      }}
     },
    
    photo: {type: "array", title: "Photo", 
      items: {type: "object", properties: {
        company: {title: "Photo", type: "string"}
      }}
     }
    }
  };

  $scope.form = [

  {
        type: "tabs",
        tabs: [
          {
            title: "Account",
            items: [
              "title",
              "surname",
              "forename",
              "addressline1",
              "addressline2",
              "addressline4",
              "city",
              "postcode",
              "country",
              "phone",
              "eMail",
              "availabilityFromDate",
              "agent",
              "terms",
              "terms2"
            ]
          },
          {
            title: "Personal",
            items: [
              {
              "key": "skills",
              "type": "tabarray",
              "tabType": "left",
              "title": "My {{ value.skill }} is",
              "items": [
                "skills[].skillCategory",
                "skills[].skill"
                ]
              }
            ]
          },
           {
            title: "Profile",
            items: [
              "tag"
            ]
          },
           {
            title: "Work History",
            items: [
              "tag"
            ]
          },
           {
            title: "Industries",
            items: [
              "tag"
            ]
          },
           {
            title: "Skills",
            items: [
              "tag"
            ]
          },
           {
            title: "Cerificates",
            items: [
              "tag"
            ]
          },
           {
            title: "Geography",
            items: [
              "tag"
            ]
          },
          {
            title: "CV & Photo",
            items: [
              "tag"
            ]
          }
        ]
      }

];

$scope.model = {};

$scope.onSubmit = function(form) {
      // First we broadcast an event so all fields validate themselves
      $scope.$broadcast('schemaFormValidate');

      // Then we check if the form is valid
      if (form.$valid) {
        // ... do whatever you need to do with your data.
        console.log($scope);
      }
    }

    console.log($scope);



  });
