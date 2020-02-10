
Feature: Cleartrip Trains functionality

   
  Scenario: Perform Search trains with valid fields
  
    Given User should be in trains page
    When User enters valid fields and submit
    Then User should navigate to list of fields
    
   Scenario: Perform Search trains with invalid fields
  
    Given User should be in trains page
    When User enters invalid fields and submit
    Then User get error message

 