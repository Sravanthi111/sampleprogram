package testrunner;

import static org.junit.Assert.*;

import org.junit.Test;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
@RunWith(Cucumber.class)
@CucumberOptions(features= "features",
glue= {"stepdefinition"},
monochrome=true,
plugin={"pretty",
		"html:target/report1.html",
		"json:target/report2.json",
		"junit:target/report3.xml"
		},
strict=true,
dryRun=false

)

public class TestRunner1 {

	

}
