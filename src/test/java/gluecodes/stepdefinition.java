package gluecodes;

import org.openqa.selenium.Alert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.loginpage;
import java.awt.Robot;	
import java.awt.event.KeyEvent;	

public class stepdefinition {
	
 private loginpage lp;
 WebDriver driver;
	
	@Before
	public void suitesetup()
	{
		System.setProperty("WebDriver.chrome.driver", "chromedriver.exe");
	}
	

	@Given("^I want to launch by \"([^\"]*)\" in chrome browser$")
	public void i_want_to_launch_by_in_chrome_browser(String url) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		ChromeOptions handlingSSL = new ChromeOptions();
		handlingSSL.setAcceptInsecureCerts(true);
	    driver = new ChromeDriver(handlingSSL);
		driver.get(url);
		
		
		System.out.println("The page title is : " +driver.getTitle());
	}

	@When("^I enter username in discovery login page as \"([^\"]*)\"$")
	public void i_enter_username_in_discovery_login_page_as(String name) throws Throwable {
		lp = new loginpage(driver);
		lp.Username.sendKeys(name);
	    
	}

	@And("^I enter my valid password as \"([^\"]*)\"$")
	public void i_enter_my_valid_password_as(String pswd) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		
		lp.Password.sendKeys(pswd);
		
	}


	@Then("^I click the login button$")
	public void i_click_the_login_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	  lp.Loginbutton.click();
	}
	@Given("^I want to launch by \"([^\"]*)\" in IE browser$")
	public void i_want_to_launch_by_in_IE_browser(String arg1) throws Throwable {
		// Write code here that turns the phrase above into concrete actions

	}

	@When("^I enter username in cognizant login page as \"([^\"]*)\"$")
	public void i_enter_username_in_cognizant_login_page_as(String arg1) throws Throwable {
		// Write code here that turns the phrase above into concrete actions

	}

	@Then("^I enter my invalid password as \"([^\"]*)\"$")
	public void i_enter_my_invalid_password_as(String arg1) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
	}

	@Then("^I click the logout button$")
	public void i_click_the_logout_button() throws Throwable {
		// Write code here that turns the phrase above into concrete actions

	}

	@Then("^I should see failure$")
	public void i_should_see_failure() throws Throwable {
		// Write code here that turns the phrase above into concrete actions

	}
	@After
	public void teardown()
	{
		driver.close();
		driver.quit();
	}
}
