'use strict';

angular.module('pabloApp')
.controller('ProfileCtrl', function ($scope) {



 $scope.schema = 
 {type: "object", title: "Comment", required: ["comments", "projects"],
  properties: {
      title: {title:"Title", type:"string"},
      surname: {type: "string", title:'Family name'},
      forename: {type: "string", title:'First name'}, 


      addressline1: {type: 'string', title: 'Address'},      
      addressline2: {type: 'string', title: 'Address'},           
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



      comments: {"type": "array", "title": "Hay why", "maxItems": 2, "items": {"type": "object", "properties": {
          "name": {"title": "Name", "type": "string", "description": "Yo please tell us your name", "validationMessage": "Hey you - whats your name?"},
          "email": {"title": "Email", "type": "string", "pattern": "^\\S+@\\S+$", "description": "Email will be used for evil."},
          "spam": {"title": "Spam", "type": "boolean", "default": true},
          "comment": {"title": "Comment", "type": "string", "maxLength": 20, "validationMessage": "Don't be greedy!"},
          "replies": {"type": "array", "items": {"type":"object", "properties" : {
              "name": {"title": "Name", "type":"string"},
              "text": {"title":"Reply Text", "type":"string"}
              }
              }
          }
          },
      "required": ["name", "comment"]
      }
      }
  }
};

$scope.form = ["*"];

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
