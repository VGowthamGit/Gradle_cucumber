package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class loginpage {
	public WebDriver driver;
	
	@FindBy(how = How.XPATH ,   using ="//*[@id=\"httpd_username\"]"   )
	public WebElement Username;
	
	@FindBy(how = How.XPATH, using = "//*[@id=\"httpd_password\"]")
	public WebElement Password;
	
	@FindBy(how = How.ID, using = "loginButton")
	public WebElement Loginbutton;
	
	
	public void login() {
		Username.sendKeys("priya");
		Password.sendKeys("Password");
		Loginbutton.click();
	}
	
	public loginpage(WebDriver driver) {
	this.driver = driver;
	PageFactory.initElements(driver, this);
	
}
}
