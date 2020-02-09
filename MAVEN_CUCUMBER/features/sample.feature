
Feature: Cleartrip Flights functionality

   
  Scenario: Perform Search flights with valid fields
  
    Given User should be in flights page
    When User enters valid fields and submit
    Then User should navigate to list of fields
    
   Scenario: Perform Search flights with invalid fields
  
    Given User should be in flights page
    When User enters invalid fields and submit
    Then User get error message

 