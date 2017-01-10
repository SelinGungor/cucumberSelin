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
      "line": 19,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 21,
  "name": "Facebook login",
  "description": "I want to use this template for my feature file",
  "id": "facebook-login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 20,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 25,
  "name": "Facebook login with valid credentials",
  "description": "",
  "id": "facebook-login;facebook-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "Open firefox browser",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I enter valid \"selintestselin@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "enter valid \"test0test\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "click login button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Application should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.open_firefox_browser()"
});
formatter.result({
  "duration": 5045066024,
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
  "duration": 197543009,
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
  "duration": 47406090,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.click_login_button()"
});
formatter.result({
  "duration": 87099593,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 46189477,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.application_should_be_closed()"
});
formatter.result({
  "duration": 1374094892,
  "status": "passed"
});
});