#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@tag
Feature: Facebook login
  I want to use this template for my feature file

  @tag1
  Scenario Outline: Facebook login with valid credentials
    Given Open firefox browser
    When I enter valid "<username>"
    And enter valid "<password>"
    And click login button
    Then I should be able to login successfully
    Then Application should be closed

    Examples: 
      | username                 | password   |
      | selintestselin@gmail.com | test0test  |
      | selintestselin@gmail.com | test0test1 |
      | test@gmail.com           | test       |
