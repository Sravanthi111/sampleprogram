$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("sample.feature");
formatter.feature({
  "line": 2,
  "name": "Cleartrip Flights functionality",
  "description": "",
  "id": "cleartrip-flights-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Perform Search flights with valid fields",
  "description": "",
  "id": "cleartrip-flights-functionality;perform-search-flights-with-valid-fields",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "User should be in flights page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User enters valid fields and submit",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User should navigate to list of fields",
  "keyword": "Then "
});
formatter.match({
  "location": "Flights.user_should_be_in_flights_page()"
});
formatter.result({
  "duration": 168465600,
  "status": "passed"
});
formatter.match({
  "location": "Flights.user_enters_valid_fields_and_submit()"
});
formatter.result({
  "duration": 103600,
  "status": "passed"
});
formatter.match({
  "location": "Flights.user_should_navigate_to_list_of_fields()"
});
formatter.result({
  "duration": 129600,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Perform Search flights with invalid fields",
  "description": "",
  "id": "cleartrip-flights-functionality;perform-search-flights-with-invalid-fields",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "User should be in flights page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User enters invalid fields and submit",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User get error message",
  "keyword": "Then "
});
formatter.match({
  "location": "Flights.user_should_be_in_flights_page()"
});
formatter.result({
  "duration": 337600,
  "status": "passed"
});
formatter.match({
  "location": "Flights.user_enters_invalid_fields_and_submit()"
});
formatter.result({
  "duration": 102900,
  "status": "passed"
});
formatter.match({
  "location": "Flights.user_get_error_message()"
});
formatter.result({
  "duration": 220300,
  "status": "passed"
});
});