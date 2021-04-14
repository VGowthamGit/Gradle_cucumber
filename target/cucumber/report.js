$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Discovery.feature");
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
    }
  ],
  "line": 7,
  "name": "Testing current feature",
  "description": "I want to the login of discovery",
  "id": "testing-current-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 6,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Login functionality validation",
  "description": "",
  "id": "testing-current-feature;login-functionality-validation",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I want to launch by \"\u003cURL\u003e\" in chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I enter username in discovery login page as \"\u003cName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter my valid password as \"\u003cPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "testing-current-feature;login-functionality-validation;",
  "rows": [
    {
      "cells": [
        "URL",
        "Name",
        "Password"
      ],
      "line": 18,
      "id": "testing-current-feature;login-functionality-validation;;1"
    },
    {
      "cells": [
        "https://www.discover-view.com/",
        "User",
        "success"
      ],
      "line": 19,
      "id": "testing-current-feature;login-functionality-validation;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 186200,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Login functionality validation",
  "description": "",
  "id": "testing-current-feature;login-functionality-validation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 6,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I want to launch by \"https://www.discover-view.com/\" in chrome browser",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I enter username in discovery login page as \"User\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter my valid password as \"success\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.discover-view.com/",
      "offset": 21
    }
  ],
  "location": "stepdefinition.i_want_to_launch_by_in_chrome_browser(String)"
});
formatter.result({
  "duration": 8270469400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "User",
      "offset": 45
    }
  ],
  "location": "stepdefinition.i_enter_username_in_discovery_login_page_as(String)"
});
formatter.result({
  "duration": 159384700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "success",
      "offset": 30
    }
  ],
  "location": "stepdefinition.i_enter_my_valid_password_as(String)"
});
formatter.result({
  "duration": 131481900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.i_click_the_login_button()"
});
formatter.result({
  "duration": 1750556600,
  "status": "passed"
});
formatter.after({
  "duration": 741309600,
  "status": "passed"
});
});