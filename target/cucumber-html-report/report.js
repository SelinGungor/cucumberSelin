$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("myapplication.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Facebook login",
  "description": "I want to use this template for my feature file",
  "id": "facebook-login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 24,
  "name": "Facebook login with valid credentials",
  "description": "",
  "id": "facebook-login;facebook-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Open firefox browser",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "enter valid \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "click login button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Application should be closed",
  "keyword": "Then "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "facebook-login;facebook-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 33,
      "id": "facebook-login;facebook-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "selintestselin@gmail.com",
        "test0test"
      ],
      "line": 34,
      "id": "facebook-login;facebook-login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "selintestselin@gmail.com",
        "test0test1"
      ],
      "line": 35,
      "id": "facebook-login;facebook-login-with-valid-credentials;;3"
    },
    {
      "cells": [
        "test@gmail.com",
        "test"
      ],
      "line": 36,
      "id": "facebook-login;facebook-login-with-valid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 34,
  "name": "Facebook login with valid credentials",
  "description": "",
  "id": "facebook-login;facebook-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    },
    {
      "line": 23,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Open firefox browser",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I enter valid \"selintestselin@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "enter valid \"test0test\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "click login button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Application should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.open_firefox_browser()"
});
formatter.result({
  "duration": 5061227011,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "selintestselin@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginTest.i_enter_valid_username(String)"
});
formatter.result({
  "duration": 222101079,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test0test",
      "offset": 13
    }
  ],
  "location": "LoginTest.enter_valid_password(String)"
});
formatter.result({
  "duration": 53583899,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.click_login_button()"
});
formatter.result({
  "duration": 120045664,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 53090068,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.application_should_be_closed()"
});
formatter.result({
  "duration": 1329542041,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Facebook login with valid credentials",
  "description": "",
  "id": "facebook-login;facebook-login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    },
    {
      "line": 23,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Open firefox browser",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I enter valid \"selintestselin@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "enter valid \"test0test1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "click login button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Application should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.open_firefox_browser()"
});
formatter.result({
  "duration": 4258301454,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "selintestselin@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginTest.i_enter_valid_username(String)"
});
formatter.result({
  "duration": 80402295,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test0test1",
      "offset": 13
    }
  ],
  "location": "LoginTest.enter_valid_password(String)"
});
formatter.result({
  "duration": 50029191,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.click_login_button()"
});
formatter.result({
  "duration": 100764193,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 36590782,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.application_should_be_closed()"
});
formatter.result({
  "duration": 1238319700,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Facebook login with valid credentials",
  "description": "",
  "id": "facebook-login;facebook-login-with-valid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    },
    {
      "line": 23,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Open firefox browser",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I enter valid \"test@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "enter valid \"test\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "click login button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Application should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.open_firefox_browser()"
});
formatter.result({
  "duration": 3920556942,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginTest.i_enter_valid_username(String)"
});
formatter.result({
  "duration": 67724171,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 13
    }
  ],
  "location": "LoginTest.enter_valid_password(String)"
});
formatter.result({
  "duration": 41019856,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.click_login_button()"
});
formatter.result({
  "duration": 113572190,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 48695733,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.application_should_be_closed()"
});
formatter.result({
  "duration": 1182732849,
  "status": "passed"
});
});