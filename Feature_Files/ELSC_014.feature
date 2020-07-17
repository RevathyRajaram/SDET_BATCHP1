
@ELSC_014
Feature: ELSC_014
  To Automate Elearning Application
  
#
  @Login
  Scenario: Login to the Application
  Given I want to navigate the "http://elearningm1.upskills.in/"
  Given I want to give the username "admin"
  Given I want to give the password "admin@123"
  When I click on Login button
  Then I verify the homepage
  
  @AddUserstocourse
  Scenario: To verify whether application allows admin to add a course to user
  Given I want to click the Administration link
  Given I want to click the Add users to course link
  Given I want to Add user from userlist
  Given I want to Add course from courselist
  When I Click Add to the course(s) button
  Then I verify "The selected users are subscribed to the selected course" message displayed
  
  @AddUserstocourse
  Scenario: To verify whether application allows admin to add new course category
  Given I want to click the Administration link
  Given I want to click the Courses Categories link
  Given I want to click the Add Category Icon
  Given I want to give the Category code "BL_IBM_SDET"
  Given I want to give the Category name "Blended Learning"
  Given I want to click the Category radio button
  When  I click the Add Category button
  Then  I Verify "Created" message displayed
  Then  I want to verify the added category displayed in grid "Blended Learning(BL_IBM_SDET)"
  
  @DeleteCourse
  Scenario: To delete the added course to make sure second occurrence of execution should not fail
  
  When I Click on the delete button
  Then  I Verify "Deleted" message displayed after deletion
  
  
  
  
   
  