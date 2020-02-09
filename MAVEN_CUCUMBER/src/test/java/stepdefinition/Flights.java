package stepdefinition;

import static org.junit.Assert.*;

import javax.swing.plaf.synth.SynthSeparatorUI;

import org.junit.Test;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Flights {


	@Given("^User should be in flights page$")
	public void user_should_be_in_flights_page() throws Throwable {
	
		System.out.println("User should be in flights page");
	   
	}

	@When("^User enters valid fields and submit$")
	public void user_enters_valid_fields_and_submit() throws Throwable {
		System.out.println("User enters valid fields and submit");
	}

	@Then("^User should navigate to list of fields$")
	public void user_should_navigate_to_list_of_fields() throws Throwable {
		System.out.println("User should navigate to list of fields");

	}


@Then("^User get error message$")
public void user_get_error_message() throws Throwable {
	System.out.println("User get error message");
}


}
