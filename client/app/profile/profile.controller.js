'use strict';

angular.module('pabloApp')
.controller('ProfileCtrl', function ($scope) {



 $scope.schema = 
 {type: "object", title: "Comment", required: ["comments", "projects"],
  properties: {
      projects: {title:"Project", type:"string"},
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

$scope.form = 

/*[
      {
    "type": "help",
    "helpvalue": "<h4>Please add as many resumes as you want</h4><p>You can also reorder by drag'n'drop.</p>"
  },"*",
  {
    "type": "submit",
    "style": "btn-danger",
    "title": "Save"
  }
]*/

[
  {"type": "help",
  "helpvalue": "<h1>Array Example</h1><p>Try adding a couple of forms, reorder by drag'n'drop.</p>"
  },
  {
  key: "projects",
  feedback: "{ 'glyphicon': true, 'glyphicon-asterisk': form.required && !hasSuccess() && !hasError() ,'glyphicon-ok': hasSuccess(), 'glyphicon-remove-circle': hasError() }",
  placeholder: "This is where the project name goes",
  "fieldAddonLeft": "@"
  },
  {"key": "comments",

  "add": "New Comment",
  "style": {
    "add": "btn-success"
  },

    "items": [
    "comments[].name",
    "comments[].email",
    {
      "key": "comments[].spam",
      "type": "checkbox",
      "title": "Yes I want spam.",
      "condition": "model.comments[arrayIndex].email"
    },
    {
      "key": "comments[].comment",
      "type": "textarea"
    },
    {
      "key":"comments[].replies",
      "type":"array",
      "add": "New Reply",
      "style": {
        "add": "btn-warning"
      },          
      "items":[
      "comments[].replies[].name",
      "comments[].replies[].text"
      ],"startEmpty": true
    }

    ],"startEmpty": true
  },
  {"type": "help",
  "helpvalue": "<h4>Øj en deler</h4><p>What a strange language</p>"
  },
  {
    "type": "submit",
    "style": "btn-info",
    "title": "OK"
  }
]



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
