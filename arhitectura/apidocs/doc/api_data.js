define({ "api": [  {    "type": "post",    "url": "oauth2/token",    "title": "Forgot Password",    "name": "Forgot_Password",    "group": "Auth",    "header": {      "examples": [        {          "title": "Request Body:",          "content": "{\n    \"client_id\": \"string\",\n    \"client_secret\": \"string\",\n    \"grant_type\": \"password\",\n    \"username\": \"string\",\n}",          "type": "json"        }      ]    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "json",            "optional": false,            "field": "oauth2",            "description": "<p>token  A JSON object containing forgot password request details.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n     forgot password",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "UserNotFound",            "description": "<p>The user is not found.</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"client not found\"\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "./auth.js",    "groupTitle": "Auth"  },  {    "type": "post",    "url": "oauth2/logout",    "title": "Logout User",    "name": "Logout",    "group": "Auth",    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n delete user tokens",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "UserNotFound",            "description": "<p>The user is not authorized.</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 401 Unauthorized",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "./auth.js",    "groupTitle": "Auth"  },  {    "type": "post",    "url": "oauth2/reset-password",    "title": "Reset Password",    "name": "Reset_Password",    "group": "Auth",    "header": {      "examples": [        {          "title": "Request Body:",          "content": "{\n  \"client_id\": \"string\",\n  \"client_secret\": \"string\",\n  \"grant_type\": \"client_credentials\",\n  \"email\": \"string\",\n  \"resetPasswordToken\": \"string\",\n  \"newPassword\": \"string\"\n}",          "type": "json"        }      ]    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "json",            "optional": false,            "field": "oauth2",            "description": "<p>token  A JSON object containing reset password request details.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n      reset password",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "UserNotFound",            "description": "<p>The user is not found.</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 401 Unauthorized\n    {\n        \"error\": true,\n        \"errorType\": \"other\",\n        \"lang\": \"en\",\n        \"errors\": {\n            \"message\": \"Client not found\"\n        }\n    }",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "./auth.js",    "groupTitle": "Auth"  },  {    "type": "post",    "url": "oauth2/reset-password",    "title": "Reset Password",    "name": "Reset_Password",    "group": "Auth",    "header": {      "examples": [        {          "title": "Request Body:",          "content": "{\n    \"client_id\": \"string\",\n    \"client_secret\": \"string\",\n    \"grant_type\": \"client_credentials\",\n    \"email\": \"string\",\n    \"resetPasswordToken\": \"string\",\n    \"newPassword\": \"string\"\n}",          "type": "json"        }      ]    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "json",            "optional": false,            "field": "oauth2",            "description": "<p>token  A JSON object containing reset password request details.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n {\n        \"client_id\": \"string\",\n        \"client_secret\": \"string\",\n        \"grant_type\": \"client_credentials\",\n        \"email\": \"string\",\n        \"resetPasswordToken\": \"string\",\n        \"newPassword\": \"string\"\n }",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "UserNotFound",            "description": "<p>The user is not authorized.</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"password mismatch\"\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "./auth.js",    "groupTitle": "Auth"  },  {    "type": "post",    "url": "oauth2/token",    "title": "Auth Details",    "name": "Token",    "group": "Auth",    "header": {      "examples": [        {          "title": "Request Body:",          "content": "{\n  \"client_id\": \"string\",\n  \"client_secret\": \"string\",\n  \"grant_type\": \"password\",\n  \"username\": \"string\",\n  \"password\": \"string\",\n  \"refresh_token\": \"string\",\n  \"code\": \"string\"\n}",          "type": "json"        }      ]    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "json",            "optional": false,            "field": "oauth2",            "description": "<p>token  A JSON object containing authentication details</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n create token",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "UserNotFound",            "description": "<p>The user is not authorized.</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"client not found\"\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "./auth.js",    "groupTitle": "Auth"  },  {    "type": "get",    "url": "companies",    "title": "Get Companies",    "name": "Get_Companies",    "group": "Compnaies",    "header": {      "examples": [        {          "title": "Request Header:",          "content": "{\n\"Authorization\": Bearer\n}",          "type": "json"        }      ]    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "json",            "optional": false,            "field": "oauth2",            "description": "<p>token  A JSON object containing all companies</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n         {\n             companies: []\n         }",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "UserNotFound",            "description": "<p>The user is not authorized.</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"client not found\"\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "./companies.js",    "groupTitle": "Compnaies"  },  {    "type": "get",    "url": "companies/${id}",    "title": "Get Company",    "name": "Get_Company",    "group": "Compnaies",    "header": {      "examples": [        {          "title": "Request Header:",          "content": "{\n\"Authorization\": Bearer\n}",          "type": "json"        }      ]    },    "parameter": {      "examples": [        {          "title": "ID:",          "content": "{\n       \"id\": companyID\n}",          "type": "json"        }      ]    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "json",            "optional": false,            "field": "oauth2",            "description": "<p>token  A JSON object containing the selected company</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n         {\n             company: {}\n         }",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "UserNotFound",            "description": "<p>The user is not authorized.</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"client not found\"\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "./companies.js",    "groupTitle": "Compnaies"  },  {    "type": "post",    "url": "users",    "title": "Create user",    "name": "Create_User",    "group": "Users",    "parameter": {      "examples": [        {          "title": "Request-Example:",          "content": "{\n  \"role\": string,\n  \"firstName\": string,\n  \"lastName\": string,\n  \"birthDate\": string,\n  \"email\": string,\n  \"address\": string,\n  \"country\": string,\n  \"citizenship\": string,\n  \"password\": string,\n  \"gender\": string,\n  \"profilePicture\": file,\n}",          "type": "json"        }      ]    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "user",            "description": "<p>Updated user details.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 201 CREATED\n{\n  \"id\": string,\n  \"role\": string,\n  \"firstName\": string,\n  \"lastName\": string,\n  \"birthDate\": string,\n  \"email\": string,\n  \"address\": string,\n  \"country\": string,\n  \"citizenship\": string,\n  \"password\": string,\n  \"gender\": string,\n  \"profilePicture\": file,\n  \"companies\": []\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "ValidationError",            "description": ""          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 417 Expectation Failed\n{\n  \"error\":[\n      \"Password must be at least 8 characters long\",\n      \"Email must be valid\"\n     ]\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "./users.js",    "groupTitle": "Users"  },  {    "type": "delete",    "url": "users/${userID}",    "title": "Delete user",    "name": "Delete_User",    "group": "Users",    "header": {      "examples": [        {          "title": "Header:",          "content": "{ \"Authorization\": \"Bearer\" }",          "type": "json"        }      ]    },    "parameter": {      "examples": [        {          "title": "Request-Example:",          "content": "{\n  \"id\": userID,\n}",          "type": "json"        }      ]    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "json",            "optional": false,            "field": "message",            "description": "<p>Deleted user.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"message\": message\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "UserNotFound",            "description": "<p>The user is not found.</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Not found\"\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "./users.js",    "groupTitle": "Users"  },  {    "type": "get",    "url": "users/me",    "title": "User information",    "name": "Get_User",    "group": "Users",    "header": {      "examples": [        {          "title": "Header:",          "content": "{ \"Authorization\": \"Bearer\" }",          "type": "json"        }      ]    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"userID\"\n  \"role\": string,\n  \"firstName\": string,\n  \"lastName\": string,\n  \"birthDate\": string,\n  \"email\": string,\n  \"address\": string,\n  \"country\": string,\n  \"citizenship\": string,\n  \"password\": string,\n  \"gender\": string,\n  \"profilePicture\": file,\n  \"companies\": [\n     {\n      \"id\": \"companyID\",\n      \"name\": \"companyName\"\n      \"locations\": [\n             {\n                 \"id\": \"subsidiaryID\",\n                 \"address\": \"address\",\n                 \"subsidiaryName\": \"Name of the subsidiary\"\n             },\n             {\n                 \"id\": \"subsidiaryID\",\n                 \"address\": \"address\",\n                 \"subsidiaryName\": \"Name of the subsidiary\"\n             }\n         ]\n      }\n   ]\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "UserNotFound",            "description": "<p>The user is not authorized.</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"Unauthorized\"\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "./users.js",    "groupTitle": "Users"  },  {    "type": "get",    "url": "users/${userID}/companies",    "title": "User Companies",    "name": "Get_User_Companies",    "group": "Users",    "header": {      "examples": [        {          "title": "Header:",          "content": "{ \"Authorization\": \"Bearer\" }",          "type": "json"        }      ]    },    "parameter": {      "examples": [        {          "title": "Request-Example:",          "content": "{\n  \"id\": userID\n}",          "type": "json"        }      ]    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Array",            "optional": false,            "field": "companies",            "description": "<p>List of User companies.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"companies\": [\n     {\n      \"id\": \"companyID\",\n      \"name\": \"companyName\"\n      \"locations\": [\n             {\n                 \"id\": \"subsidiaryID\",\n                 \"address\": \"address\",\n                 \"subsidiaryName\": \"Name of the subsidiary\"\n             },\n             {\n                 \"id\": \"subsidiaryID\",\n                 \"address\": \"address\",\n                 \"subsidiaryName\": \"Name of the subsidiary\"\n             }\n         ]\n      }\n   ]\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "UserNotFound",            "description": "<p>The user is not authorized.</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"Unauthorized\"\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "./users.js",    "groupTitle": "Users"  },  {    "type": "get",    "url": "users",    "title": "Get users",    "name": "Get_Users",    "group": "Users",    "header": {      "examples": [        {          "title": "Header:",          "content": "{ \"Authorization\": \"Bearer\" }",          "type": "json"        }      ]    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Array",            "optional": false,            "field": "user",            "description": "<p>Shows all users.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n[\n     {\n         \"id\": \"userID\"\n         \"firstname\": \"John\",\n         \"lastname\": \"Doe\",\n         \"role\": newRole,\n         \"companies\": [\n             {\n                 \"id\": \"companyID\",\n                 \"name\": \"companyName\"\n                 \"locations\": [\n                     {\n                         \"id\": \"subsidiaryID\",\n                         \"address\": \"address\",\n                         \"subsidiaryName\": \"Name of the subsidiary\"\n                     },\n                     {\n                         \"id\": \"subsidiaryID\",\n                         \"address\": \"address\",\n                         \"subsidiaryName\": \"Name of the subsidiary\"\n                      }\n                 ]\n             }\n         ]\n     }\n]",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "UserNotFound",            "description": "<p>The user is not found.</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Not found\"\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "./users.js",    "groupTitle": "Users"  },  {    "type": "put",    "url": "users/${userID}",    "title": "Update user",    "name": "Update_User",    "group": "Users",    "header": {      "examples": [        {          "title": "Header:",          "content": "{ \"Authorization\": \"Bearer\" }",          "type": "json"        }      ]    },    "parameter": {      "examples": [        {          "title": "Request-Example:",          "content": "{\n  \"id\": userID,\n  \"role\": role\n}",          "type": "json"        }      ]    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "user",            "description": "<p>Updated user details.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"userID\"\n  \"role\": string,\n  \"firstName\": string,\n  \"lastName\": string,\n  \"birthDate\": string,\n  \"email\": string,\n  \"address\": string,\n  \"country\": string,\n  \"citizenship\": string,\n  \"password\": string,\n  \"gender\": string,\n  \"profilePicture\": file,\n  \"companies\": [\n     {\n      \"id\": \"companyID\",\n      \"name\": \"companyName\"\n      \"locations\": [\n             {\n                 \"id\": \"subsidiaryID\",\n                 \"address\": \"address\",\n                 \"subsidiaryName\": \"Name of the subsidiary\"\n             },\n             {\n                 \"id\": \"subsidiaryID\",\n                 \"address\": \"address\",\n                 \"subsidiaryName\": \"Name of the subsidiary\"\n             }\n         ]\n      }\n   ]\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "UserNotFound",            "description": "<p>The user is not authorized.</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"Unauthorized\"\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "./users.js",    "groupTitle": "Users"  },  {    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "optional": false,            "field": "varname1",            "description": "<p>No type.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "varname2",            "description": "<p>With type.</p>"          }        ]      }    },    "type": "",    "url": "",    "version": "0.0.0",    "filename": "./doc/main.js",    "group": "_Users_emilian_Desktop_ElecTrik_arhitectura_apidocs_doc_main_js",    "groupTitle": "_Users_emilian_Desktop_ElecTrik_arhitectura_apidocs_doc_main_js",    "name": ""  }] });
