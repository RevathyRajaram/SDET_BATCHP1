package stepdefinitions;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import common.wrapper;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class stepdefinitions extends wrapper{
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
		driver.findElement(By.name("login")).clear();
		driver.findElement(By.name("login")).sendKeys(username);
	}

	@Given("^I want to give the password \"([^\"]*)\"$")
	public void i_want_to_give_the_password(String password) throws Throwable {
		driver.findElement(By.name("password")).clear();
		driver.findElement(By.name("password")).sendKeys(password);
	}

	@When("^I click on Login button$")
	public void i_click_on_Login_button() throws Throwable {
		driver.findElement(By.name("submitAuth")).click();
	}

	@Then("^I verify the homepage$")
	public void i_verify_the_homepage() throws Throwable {
		String expTitle = "My Organization - My education";
		String actTitle = driver.getTitle();
		System.out.println(actTitle);
		if(actTitle.equalsIgnoreCase(expTitle)) {
			System.out.println("pass: The title of the page is: " +actTitle);
			
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

	@Given("^I want to Add user from userlist \"([^\"]*)\"$")
	public void i_want_to_Add_user_from_userlist(String strExpText) throws Throwable {
		
		 WebElement strTable = driver.findElement(By.cssSelector("#cm-content > div > form:nth-child(5) > table"));
		  List<WebElement> tableRows = new WebDriverWait(driver, 10).until(ExpectedConditions.visibilityOfNestedElementsLocatedBy(strTable, By.tagName("option")));
			 for (int i = 1; i <= tableRows.size(); i++) {
				 String strAct = driver.findElement(By.xpath("//*[@id='cm-content']/div/form[2]/table/tbody/tr[2]/td[1]/select/option["+i+"]")).getText();
				 strAct = strAct.trim();
				 if(strAct.equalsIgnoreCase(strExpText)) {
					 driver.findElement(By.xpath("//*[@id='cm-content']/div/form[2]/table/tbody/tr[2]/td[1]/select/option["+i+"]")).click();
					 System.out.println("pass:" + strAct);
					 break;
				 }else {
					 System.out.println("fail:"+ strAct);
				 }
		}			
		
	}

	@Given("^I want to Add course from courselist \"([^\"]*)\"$")
	public void i_want_to_Add_course_from_courselist(String strExpText) throws Throwable {
		
		 WebElement strTable = driver.findElement(By.cssSelector("#cm-content > div > form:nth-child(5) > table"));
		  List<WebElement> tableRows = new WebDriverWait(driver, 10).until(ExpectedConditions.visibilityOfNestedElementsLocatedBy(strTable, By.tagName("option")));
			 for (int i = 1; i <= tableRows.size(); i++) {
				 String strAct = driver.findElement(By.xpath("//*[@id='cm-content']/div/form[2]/table/tbody/tr[2]/td[3]/select/option["+i+"]")).getText();
				 strAct = strAct.trim();
				 if(strAct.equalsIgnoreCase(strExpText)) {
					 driver.findElement(By.xpath("//*[@id='cm-content']/div/form[2]/table/tbody/tr[2]/td[3]/select/option["+i+"]")).click();
					 System.out.println("pass:" + strAct);
					 break;
				 }else {
					 System.out.println("fail:"+ strAct);
				 }
		}
	
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
		 WebElement strTable = driver.findElement(By.cssSelector("#cm-content > div > table"));
		  List<WebElement> tableRows = new WebDriverWait(driver, 10).until(ExpectedConditions.visibilityOfNestedElementsLocatedBy(strTable, By.tagName("tr")));
			 for (int i = 2; i <= tableRows.size(); i++) {
				 String strAct = driver.findElement(By.xpath("//*[@id='cm-content']/div/table/tbody/tr["+i+"]/td[1]")).getText();
				 if(strAct.equalsIgnoreCase(strExpText)) {
					 System.out.println("pass:" + strExpText);
			
				 }else {
					 System.out.println("fail:"+ strExpText);
				 }
		}	
	}

	@When("^I Click on the delete button \"([^\"]*)\"$")
	public void i_Click_on_the_delete_button(String strExp) throws Throwable {
		 WebElement strTable = driver.findElement(By.cssSelector("#cm-content > div > table"));
		  List<WebElement> tableRows = new WebDriverWait(driver, 10).until(ExpectedConditions.visibilityOfNestedElementsLocatedBy(strTable, By.tagName("tr")));
			 for (int i = 2; i <= tableRows.size(); i++) {
				 String strAct = driver.findElement(By.xpath("//*[@id='cm-content']/div/table/tbody/tr["+i+"]/td[1]")).getText();
				 System.out.println("strAct" + strAct);
				 if(strAct.equalsIgnoreCase(strExp)) {
					 System.out.println("inside" + strAct + strExp);
					 driver.findElement(By.xpath("//*[@id='cm-content']/div/table/tbody/tr["+i+"]/td[4]/a[3]/img")).click();
				 }
	  }
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
	
	@Given("^I want to click on logout button$")
	public void i_want_to_click_on_logout_button() throws Throwable {
	    driver.findElement(By.className("caret")).click();
	    driver.findElement(By.id("logout_button")).click();
	    driver.close();
	}
	
	
	//Excel Functions
	
	@Given("^I want to navigate the url_Excel$")
	public void i_want_to_navigate_the_url_Excel() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\RevathyRajaram\\Downloads\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get(getDataFromExcel(1, 0));
	}

	@Given("^I want to give the username_Excel$")
	public void i_want_to_give_the_username_Excel() throws Throwable {
		driver.findElement(By.name("login")).clear();
		driver.findElement(By.name("login")).sendKeys(getDataFromExcel(1, 1));
	}

	@Given("^I want to give the password_Excel$")
	public void i_want_to_give_the_password_Excel() throws Throwable {
		driver.findElement(By.name("password")).clear();
		driver.findElement(By.name("password")).sendKeys(getDataFromExcel(1, 2));
	}

	@Given("^I want to Add user from userlist_Excel$")
	public void i_want_to_Add_user_from_userlist_Excel() throws Throwable {
		 WebElement strTable = driver.findElement(By.cssSelector("#cm-content > div > form:nth-child(5) > table"));
		  List<WebElement> tableRows = new WebDriverWait(driver, 10).until(ExpectedConditions.visibilityOfNestedElementsLocatedBy(strTable, By.tagName("option")));
			 for (int i = 1; i <= tableRows.size(); i++) {
				 String strAct = driver.findElement(By.xpath("//*[@id='cm-content']/div/form[2]/table/tbody/tr[2]/td[1]/select/option["+i+"]")).getText();
				 strAct = strAct.trim();
				 if(strAct.equalsIgnoreCase(getDataFromExcel(1, 3))) {
					 driver.findElement(By.xpath("//*[@id='cm-content']/div/form[2]/table/tbody/tr[2]/td[1]/select/option["+i+"]")).click();
					 System.out.println("pass:" + strAct);
					 break;
				 }else {
					 System.out.println("fail:"+ strAct);
				 }
		}
	}

	@Given("^I want to Add course from courselist_Excel$")
	public void i_want_to_Add_course_from_courselist_Excel() throws Throwable {
		 WebElement strTable = driver.findElement(By.cssSelector("#cm-content > div > form:nth-child(5) > table"));
		  List<WebElement> tableRows = new WebDriverWait(driver, 10).until(ExpectedConditions.visibilityOfNestedElementsLocatedBy(strTable, By.tagName("option")));
			 for (int i = 1; i <= tableRows.size(); i++) {
				 String strAct = driver.findElement(By.xpath("//*[@id='cm-content']/div/form[2]/table/tbody/tr[2]/td[3]/select/option["+i+"]")).getText();
				 strAct = strAct.trim();
				 if(strAct.equalsIgnoreCase(getDataFromExcel(1, 4))) {
					 driver.findElement(By.xpath("//*[@id='cm-content']/div/form[2]/table/tbody/tr[2]/td[3]/select/option["+i+"]")).click();
					 System.out.println("pass:" + strAct);
					 break;
				 }else {
					 System.out.println("fail:"+ strAct);
				 }
		}
	}

	@Then("^I verify message_Excel displayed$")
	public void i_verify_message_Excel_displayed() throws Throwable {
		WebElement strEle = driver.findElement(By.xpath("//*[@id='cm-content']/div/div[3]"));
		if(strEle.getText().equalsIgnoreCase(getDataFromExcel(1, 5))) {
			System.out.println("pass:" + strEle.getText());
			
		}else {
			
			System.out.println("fail:"+ strEle.getText());
			
		}
	}

	@Given("^I want to give the Category code_Excel$")
	public void i_want_to_give_the_Category_code_Excel() throws Throwable {
		driver.findElement(By.name("code")).clear();
		driver.findElement(By.name("code")).sendKeys(getDataFromExcel(1, 6));
	}

	@Given("^I want to give the Category name_Excel$")
	public void i_want_to_give_the_Category_name_Excel() throws Throwable {
		driver.findElement(By.name("name")).clear();
		driver.findElement(By.name("name")).sendKeys(getDataFromExcel(1, 7));
	}

	@Then("^I Verify addmessage_Excel displayed$")
	public void i_Verify_addmessage_Excel_displayed() throws Throwable {
		String strSuccText = driver.findElement(By.cssSelector("#cm-content > div > div.alert.alert-info")).getText();
		if(strSuccText.equalsIgnoreCase(getDataFromExcel(1, 8))) {
			System.out.println("pass:" + strSuccText);
			
		}else {
			
			System.out.println("fail:"+ strSuccText);
		}
	}

	@Then("^I want to verify the added category displayed in grid_Excel$")
	public void i_want_to_verify_the_added_category_displayed_in_grid_Excel() throws Throwable {
		 WebElement strTable = driver.findElement(By.cssSelector("#cm-content > div > table"));
		  List<WebElement> tableRows = new WebDriverWait(driver, 10).until(ExpectedConditions.visibilityOfNestedElementsLocatedBy(strTable, By.tagName("tr")));
			 for (int i = 2; i <= tableRows.size(); i++) {
				 String strAct = driver.findElement(By.xpath("//*[@id='cm-content']/div/table/tbody/tr["+i+"]/td[1]")).getText();
				 if(strAct.equalsIgnoreCase(getDataFromExcel(1, 9))) {
					 System.out.println("pass:" + getDataFromExcel(1, 9));
			
				 }else {
					 System.out.println("fail:"+ strAct);
				 }
		}
	}

	@When("^I Click on the delete button_Excel$")
	public void i_Click_on_the_delete_button_Excel() throws Throwable {
		 WebElement strTable = driver.findElement(By.cssSelector("#cm-content > div > table"));
		  List<WebElement> tableRows = new WebDriverWait(driver, 10).until(ExpectedConditions.visibilityOfNestedElementsLocatedBy(strTable, By.tagName("tr")));
			 for (int i = 2; i <= tableRows.size(); i++) {
				 String strAct = driver.findElement(By.xpath("//*[@id='cm-content']/div/table/tbody/tr["+i+"]/td[1]")).getText();
				 System.out.println("strAct" + strAct);
				 if(strAct.equalsIgnoreCase(getDataFromExcel(1, 9))) {
					 System.out.println("inside" + strAct + getDataFromExcel(1, 9));
					 driver.findElement(By.xpath("//*[@id='cm-content']/div/table/tbody/tr["+i+"]/td[4]/a[3]/img")).click();
				 }
	  }
	}

	@Then("^I Verify deletemessage_Excel displayed after deletion$")
	public void i_Verify_deletemessage_Excel_displayed_after_deletion() throws Throwable {
		String strSuccText = driver.findElement(By.cssSelector("#cm-content > div > div.alert.alert-info")).getText();
		if(strSuccText.equalsIgnoreCase(getDataFromExcel(1, 10))) {
			System.out.println("pass:" + strSuccText);
			
		}else {
			
			System.out.println("fail:"+ strSuccText);
		}
	}

	
}
