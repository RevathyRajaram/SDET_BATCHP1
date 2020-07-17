package stepdefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class stepdefinitions {
	static WebDriver driver;
	@Given("^I want to navigate the \"([^\"]*)\"$")
	public void i_want_to_navigate_the(String url) throws Throwable {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\RevathyRajaram\\Downloads\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get(url);
		
	}

	@Given("^I want to give the username \"([^\"]*)\"$")
	public void i_want_to_give_the_username(String username) throws Throwable {
		driver.findElement(By.xpath("//*[@name='login']")).sendKeys(username);
	}

	@Given("^I want to give the password \"([^\"]*)\"$")
	public void i_want_to_give_the_password(String password) throws Throwable {
		driver.findElement(By.xpath("//*[@name='password']")).sendKeys(password);
	}

	@When("^I click on Login button$")
	public void i_click_on_Login_button() throws Throwable {
		driver.findElement(By.xpath("//*[@name='submitAuth']")).click();
	}

	@Then("^I verify the homepage$")
	public void i_verify_the_homepage() throws Throwable {
		String expTitle = "My Organization - My education";
		String actTitle = driver.getTitle();
		System.out.println(actTitle);
		if(actTitle.equalsIgnoreCase(expTitle)) {
			System.out.println("pass");
			
		}else {
			
			System.out.println("fail");
		}
		
		if (driver.findElement(By.xpath("//*[@id='navbar']/ul[1]/li[1]/a")).isDisplayed() == true) {
			System.out.println("Home page displayed");
		}else {
			
			System.out.println("Home page NOT displayed");
		}
		
	}
	@Given("^I want to click the Administration link$")
	public void i_want_to_click_the_Administration_link() throws Throwable {
		driver.findElement(By.partialLinkText("Administration")).click();
		
	}

	@Given("^I want to click the Add users to course link$")
	public void i_want_to_click_the_Add_users_to_course_link() throws Throwable {
		driver.findElement(By.partialLinkText("Add users to course")).click();
	}

	@Given("^I want to Add user from userlist$")
	public void i_want_to_Add_user_from_userlist() throws Throwable {
		driver.findElement(By.xpath("//*[@id='cm-content']/div/form[2]/table/tbody/tr[2]/td[1]/select/option[7]")).click();
		
	}

	@Given("^I want to Add course from courselist$")
	public void i_want_to_Add_course_from_courselist() throws Throwable {
		driver.findElement(By.xpath("//*[@id='cm-content']/div/form[2]/table/tbody/tr[2]/td[3]/select/option[9]")).click();
	}

	@When("^I Click Add to the course\\(s\\) button$")
	public void i_Click_Add_to_the_course_s_button() throws Throwable {
		
		driver.findElement(By.xpath("//*[@id='cm-content']/div/form[2]/table/tbody/tr[2]/td[2]/button")).click();
	}

	@Then("^I verify \"([^\"]*)\" message displayed$")
	public void i_verify_message_displayed(String strExpText) throws Throwable {
		WebElement strEle = driver.findElement(By.xpath("//*[@id='cm-content']/div/div[3]"));
		if(strEle.getText().equalsIgnoreCase(strExpText)) {
			System.out.println("pass:" + strEle.getText());
			
		}else {
			
			System.out.println("fail:"+ strEle.getText());
		}
		
	}
	@Given("^I want to click the Courses Categories link$")
	public void i_want_to_click_the_Courses_Categories_link() throws Throwable {
		driver.findElement(By.partialLinkText("Courses categories")).click();
	}

	@Given("^I want to click the Add Category Icon$")
	public void i_want_to_click_the_Add_Category_Icon() throws Throwable {
		driver.findElement(By.xpath("//*[@title='Add category']")).click();
	}

	@Given("^I want to give the Category code \"([^\"]*)\"$")
	public void i_want_to_give_the_Category_code(String cadcode) throws Throwable {
//		driver.findElement(By.xpath("//*[@name='code']")).sendKeys(cadcode);
		driver.findElement(By.name("code")).clear();
		driver.findElement(By.name("code")).sendKeys(cadcode);
	}
	@Given("^I want to give the Category name \"([^\"]*)\"$")
	public void i_want_to_give_the_Category_name(String cadname) throws Throwable {
		driver.findElement(By.name("name")).clear();
		driver.findElement(By.name("name")).sendKeys(cadname);
	}

	@Given("^I want to click the Category radio button$")
	public void i_want_to_click_the_Category_radio_button() throws Throwable {
		if(driver.findElement(By.xpath("//*[@type='radio']")).getAttribute("checked") == "checked"){
			System.out.println(driver.findElement(By.xpath("//*[@type='radio']")).getAttribute("checked"));
		}else {
			driver.findElement(By.xpath("//*[@type='radio']")).click();
		}
	}

	@When("^I click the Add Category button$")
	public void i_click_the_Add_Category_button() throws Throwable {
		driver.findElement(By.id("course_category_submit")).click();
	}

	@Then("^I Verify \"([^\"]*)\" message displayed$")
	public void i_Verify_message_displayed(String strExpText) throws Throwable {
		String strSuccText = driver.findElement(By.cssSelector("#cm-content > div > div.alert.alert-info")).getText();
		if(strSuccText.equalsIgnoreCase(strExpText)) {
			System.out.println("pass:" + strSuccText);
			
		}else {
			
			System.out.println("fail:"+ strSuccText);
		}		
	}

	@Then("^I want to verify the added category displayed in grid \"([^\"]*)\"$")
	public void i_want_to_verify_the_added_category_displayed_in_grid(String strExpText) throws Throwable {
		WebElement strCatCode = driver.findElement(By.xpath("//*[@id='cm-content']/div/table/tbody/tr[44]/td[1]"));
		if(strCatCode.getText().equalsIgnoreCase(strExpText)) {
			System.out.println("pass:" + strExpText);
			
		}else {
			
			System.out.println("fail:"+ strExpText);
		}	
	}

	@When("^I Click on the delete button$")
	public void i_Click_on_the_delete_button() throws Throwable {
		driver.findElement(By.xpath("//*[@id='cm-content']/div/table/tbody/tr[44]/td[4]/a[3]/img")).click();
	}	
	
	@Then("^I Verify \"([^\"]*)\" message displayed after deletion$")
	public void i_Verify_message_displayed_after_deletion(String strExpText) throws Throwable {
		String strSuccText = driver.findElement(By.cssSelector("#cm-content > div > div.alert.alert-info")).getText();
		if(strSuccText.equalsIgnoreCase(strExpText)) {
			System.out.println("pass:" + strSuccText);
			
		}else {
			
			System.out.println("fail:"+ strSuccText);
		}		
	}
	

}
