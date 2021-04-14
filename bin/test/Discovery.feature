#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.

@tag
Feature: Testing current feature
  I want to the login of discovery

 @smoke
 Scenario Outline: Login functionality validation
 Given I want to launch by "<URL>" in chrome browser 
    When I enter username in discovery login page as "<Name>" 
    Then I enter my valid password as "<Password>"
    And I click the login button

    Examples: 
      | URL                            | Name  | Password |
      | https://www.discover-view.com/ | User  | success  |
 

     

      