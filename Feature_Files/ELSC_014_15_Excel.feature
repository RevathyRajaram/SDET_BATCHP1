
@ELSC_014_015_Excel
Feature: ELSC_014_015_Excel
  To Automate Elearning Application Using Excel Testdata
  

  @Login
  Scenario: Login to the Application
  Given I want to navigate the url_Excel
  Given I want to give the username_Excel
  Given I want to give the password_Excel
  When I click on Login button
  Then I verify the homepage
  
  @AddUserstocourse
  Scenario: To verify whether application allows admin to add a course to user
  Given I want to click the Administration link
  Given I want to click the Add users to course link
  Given I want to Add user from userlist_Excel
  Given I want to Add course from courselist_Excel
  When I Click Add to the course(s) button
  Then I verify message_Excel displayed
  
  @AddUserstocourse
  Scenario: To verify whether application allows admin to add new course category
  Given I want to click the Administration link
  Given I want to click the Courses Categories link
  Given I want to click the Add Category Icon
  Given I want to give the Category code_Excel
  Given I want to give the Category name_Excel
  Given I want to click the Category radio button
  When  I click the Add Category button
  Then  I Verify addmessage_Excel displayed
  Then  I want to verify the added category displayed in grid_Excel
  
  @DeleteCourse
  Scenario: To delete the added course to make sure second occurrence of execution should not fail
  
  When I Click on the delete button_Excel
  Then  I Verify deletemessage_Excel displayed after deletion
  
  @Logout
  Scenario: Logout from the Application
  Given I want to click on logout button
  
  
  
  
   
  