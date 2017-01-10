package definitionOfSteps;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginTest {
	WebDriver driver;
	
	@Given("^Open firefox browser$")
	public void open_firefox_browser() throws Throwable {
		System.setProperty("webdriver.gecko.driver", "resource\\geckodriver.exe");
		driver = new FirefoxDriver();
		driver.manage().window().maximize();
		driver.get("https://www.facebook.com/");
	}

	@When("^I enter valid \"([^\"]*)\"$")
	public void i_enter_valid_username(String username) throws Throwable {
		driver.findElement(By.id("email")).sendKeys(username);//selintestselin@gmail.com
	}

	@When("^enter valid \"([^\"]*)\"$")
	public void enter_valid_password(String password) throws Throwable {
		driver.findElement(By.id("pass")).sendKeys(password);//test0test
	}

	@When("^click login button$")
	public void click_login_button() throws Throwable {
		driver.findElement(By.id("loginbutton")).click();
	}

	@Then("^I should be able to login successfully$")
	public void i_should_be_able_to_login_successfully() throws Throwable {
		driver.getPageSource().contains("Home");
	}

	@Then("^Application should be closed$")
	public void application_should_be_closed() throws Throwable {
	   driver.quit();
	}	

}
