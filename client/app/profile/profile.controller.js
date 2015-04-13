'use strict';

angular.module('pabloApp')
.controller('ProfileCtrl', function ($scope) {



 $scope.schema = {
  "type": "object",
  "title": "Comment",
  "required": [
    "comments"
  ],
  "properties": {
    "comments2": {
      "type": "array",
      "maxItems": 2,
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "title": "Name",
            "type": "string"
          },
          "email": {
            "title": "Email",
            "type": "string",
            "pattern": "^\\S+@\\S+$",
            "description": "Email will be used for evil."
          },
          "spam": {
            "title": "Spam",
            "type": "boolean",
            "default": true
          },
          "comment": {
            "title": "Comment",
            "type": "string",
            "maxLength": 20,
            "validationMessage": "Don't be greedy!"
          },
          "replies": {
              "type": "array",
              "items": {
                  "type":"object",
                  "properties" : {
                      "name": {
                          "title":"name",
                          "type":"string"
                      },
                      "text": {
                          "title":"replyText",
                          "type":"string"
                      }
                  }
              }
            }
        },
        "required": [
          "name",
          "comment"
        ]
      }
    }
  }
};

$scope.form = 

[
  "*"
]

/*[
  {
    "type": "help",
    "helpvalue": "<h4>Array Example</h4><p>Try adding a couple of forms, reorder by drag'n'drop.</p>"
  },
  {
    "key": "comments",
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
              "add": "btn-warn"
            },          
          "items":[
            "comments[].replies[].name",
            "comments[].replies[].text"
           ]
      }

    ]
  },
  {
    "type": "submit",
    "style": "btn-info",
    "title": "OK"
  }
]*/



$scope.model = {};

$scope.onSubmit = function(form) {
      // First we broadcast an event so all fields validate themselves
      $scope.$broadcast('schemaFormValidate');

      // Then we check if the form is valid
      if (form.$valid) {
        // ... do whatever you need to do with your data.
        console.log("Its valid hurra!!!");
      }
    }

    console.log($scope);



  });
