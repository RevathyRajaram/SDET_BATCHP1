$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ELSC_014_015.feature");
formatter.feature({
  "line": 3,
  "name": "ELSC_014_015",
  "description": "To Automate Elearning Application",
  "id": "elsc-014-015",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@ELSC_014_015"
    }
  ]
});
formatter.scenario({
  "line": 8,
  "name": "Login to the Application",
  "description": "",
  "id": "elsc-014-015;login-to-the-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I want to navigate the \"http://elearningm1.upskills.in/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I want to give the username \"admin\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I want to give the password \"admin@123\"",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on Login button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I verify the homepage",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://elearningm1.upskills.in/",
      "offset": 24
    }
  ],
  "location": "stepdefinitions.i_want_to_navigate_the(String)"
});
formatter.result({
  "duration": 12817241500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 29
    }
  ],
  "location": "stepdefinitions.i_want_to_give_the_username(String)"
});
formatter.result({
  "duration": 389020800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@123",
      "offset": 29
    }
  ],
  "location": "stepdefinitions.i_want_to_give_the_password(String)"
});
formatter.result({
  "duration": 312707500,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.i_click_on_Login_button()"
});
formatter.result({
  "duration": 4023462200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.i_verify_the_homepage()"
});
formatter.result({
  "duration": 96216300,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "To verify whether application allows admin to add a course to user",
  "description": "",
  "id": "elsc-014-015;to-verify-whether-application-allows-admin-to-add-a-course-to-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@AddUserstocourse"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I want to click the Administration link",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I want to click the Add users to course link",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I want to Add user from userlist \"AcharyaNNE MousumiHWI (MousumiHWI)\"",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I want to Add course from courselist \"(ASBD) selenium\"",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I Click Add to the course(s) button",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I verify \"The selected users are subscribed to the selected course\" message displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.i_want_to_click_the_Administration_link()"
});
formatter.result({
  "duration": 877520800,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.i_want_to_click_the_Add_users_to_course_link()"
});
formatter.result({
  "duration": 986436200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AcharyaNNE MousumiHWI (MousumiHWI)",
      "offset": 34
    }
  ],
  "location": "stepdefinitions.i_want_to_Add_user_from_userlist(String)"
});
formatter.result({
  "duration": 1125156100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "(ASBD) selenium",
      "offset": 38
    }
  ],
  "location": "stepdefinitions.i_want_to_Add_course_from_courselist(String)"
});
formatter.result({
  "duration": 1416243400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.i_Click_Add_to_the_course_s_button()"
});
formatter.result({
  "duration": 1013772600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The selected users are subscribed to the selected course",
      "offset": 10
    }
  ],
  "location": "stepdefinitions.i_verify_message_displayed(String)"
});
formatter.result({
  "duration": 61908400,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "To verify whether application allows admin to add new course category",
  "description": "",
  "id": "elsc-014-015;to-verify-whether-application-allows-admin-to-add-new-course-category",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@AddUserstocourse"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I want to click the Administration link",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I want to click the Courses Categories link",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I want to click the Add Category Icon",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I want to give the Category code \"BL_IBM_SDET\"",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I want to give the Category name \"Blended Learning\"",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I want to click the Category radio button",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I click the Add Category button",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I Verify \"Created\" message displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "I want to verify the added category displayed in grid \"Blended Learning (BLIBMSDET)\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.i_want_to_click_the_Administration_link()"
});
formatter.result({
  "duration": 754767700,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.i_want_to_click_the_Courses_Categories_link()"
});
formatter.result({
  "duration": 1128969300,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.i_want_to_click_the_Add_Category_Icon()"
});
formatter.result({
  "duration": 990134400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BL_IBM_SDET",
      "offset": 34
    }
  ],
  "location": "stepdefinitions.i_want_to_give_the_Category_code(String)"
});
formatter.result({
  "duration": 323062600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blended Learning",
      "offset": 34
    }
  ],
  "location": "stepdefinitions.i_want_to_give_the_Category_name(String)"
});
formatter.result({
  "duration": 259801600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.i_want_to_click_the_Category_radio_button()"
});
formatter.result({
  "duration": 144116900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.i_click_the_Add_Category_button()"
});
formatter.result({
  "duration": 1219764400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Created",
      "offset": 10
    }
  ],
  "location": "stepdefinitions.i_Verify_message_displayed(String)"
});
formatter.result({
  "duration": 59122900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blended Learning (BLIBMSDET)",
      "offset": 55
    }
  ],
  "location": "stepdefinitions.i_want_to_verify_the_added_category_displayed_in_grid(String)"
});
formatter.result({
  "duration": 1731985300,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "To delete the added course to make sure second occurrence of execution should not fail",
  "description": "",
  "id": "elsc-014-015;to-delete-the-added-course-to-make-sure-second-occurrence-of-execution-should-not-fail",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@DeleteCourse"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "I Click on the delete button \"Blended Learning (BLIBMSDET)\"",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I Verify \"Deleted\" message displayed after deletion",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Blended Learning (BLIBMSDET)",
      "offset": 30
    }
  ],
  "location": "stepdefinitions.i_Click_on_the_delete_button(String)"
});
formatter.result({
  "duration": 2268502100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Deleted",
      "offset": 10
    }
  ],
  "location": "stepdefinitions.i_Verify_message_displayed_after_deletion(String)"
});
formatter.result({
  "duration": 45299000,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Logout from the Application",
  "description": "",
  "id": "elsc-014-015;logout-from-the-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 42,
      "name": "@Logout"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "I want to click on logout button",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.i_want_to_click_on_logout_button()"
});
formatter.result({
  "duration": 1731516300,
  "status": "passed"
});
formatter.uri("ELSC_014_15_Excel.feature");
formatter.feature({
  "line": 3,
  "name": "ELSC_014_015_Excel",
  "description": "To Automate Elearning Application Using Excel Testdata",
  "id": "elsc-014-015-excel",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@ELSC_014_015_Excel"
    }
  ]
});
formatter.scenario({
  "line": 8,
  "name": "Login to the Application",
  "description": "",
  "id": "elsc-014-015-excel;login-to-the-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I want to navigate the url_Excel",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I want to give the username_Excel",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I want to give the password_Excel",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on Login button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I verify the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.i_want_to_navigate_the_url_Excel()"
});
formatter.result({
  "duration": 11703736000,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.i_want_to_give_the_username_Excel()"
});
formatter.result({
  "duration": 347243700,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.i_want_to_give_the_password_Excel()"
});
formatter.result({
  "duration": 401324800,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.i_click_on_Login_button()"
});
formatter.result({
  "duration": 4459720500,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.i_verify_the_homepage()"
});
formatter.result({
  "duration": 49584700,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "To verify whether application allows admin to add a course to user",
  "description": "",
  "id": "elsc-014-015-excel;to-verify-whether-application-allows-admin-to-add-a-course-to-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@AddUserstocourse"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I want to click the Administration link",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I want to click the Add users to course link",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I want to Add user from userlist_Excel",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I want to Add course from courselist_Excel",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I Click Add to the course(s) button",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I verify message_Excel displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.i_want_to_click_the_Administration_link()"
});
formatter.result({
  "duration": 831569200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.i_want_to_click_the_Add_users_to_course_link()"
});
formatter.result({
  "duration": 1656322500,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.i_want_to_Add_user_from_userlist_Excel()"
});
formatter.result({
  "duration": 1658769900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.i_want_to_Add_course_from_courselist_Excel()"
});
formatter.result({
  "duration": 1998966900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.i_Click_Add_to_the_course_s_button()"
});
formatter.result({
  "duration": 799929600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.i_verify_message_Excel_displayed()"
});
formatter.result({
  "duration": 78776400,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "To verify whether application allows admin to add new course category",
  "description": "",
  "id": "elsc-014-015-excel;to-verify-whether-application-allows-admin-to-add-new-course-category",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@AddUserstocourse"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I want to click the Administration link",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I want to click the Courses Categories link",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I want to click the Add Category Icon",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I want to give the Category code_Excel",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I want to give the Category name_Excel",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I want to click the Category radio button",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I click the Add Category button",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I Verify addmessage_Excel displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "I want to verify the added category displayed in grid_Excel",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.i_want_to_click_the_Administration_link()"
});
formatter.result({
  "duration": 856553000,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.i_want_to_click_the_Courses_Categories_link()"
});
formatter.result({
  "duration": 1696218300,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.i_want_to_click_the_Add_Category_Icon()"
});
formatter.result({
  "duration": 1028662300,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.i_want_to_give_the_Category_code_Excel()"
});
formatter.result({
  "duration": 328501200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.i_want_to_give_the_Category_name_Excel()"
});
formatter.result({
  "duration": 318168900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.i_want_to_click_the_Category_radio_button()"
});
formatter.result({
  "duration": 132836700,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.i_click_the_Add_Category_button()"
});
formatter.result({
  "duration": 1217663400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.i_Verify_addmessage_Excel_displayed()"
});
formatter.result({
  "duration": 64569200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.i_want_to_verify_the_added_category_displayed_in_grid_Excel()"
});
formatter.result({
  "duration": 2557243200,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "To delete the added course to make sure second occurrence of execution should not fail",
  "description": "",
  "id": "elsc-014-015-excel;to-delete-the-added-course-to-make-sure-second-occurrence-of-execution-should-not-fail",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@DeleteCourse"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "I Click on the delete button_Excel",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I Verify deletemessage_Excel displayed after deletion",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.i_Click_on_the_delete_button_Excel()"
});
formatter.result({
  "duration": 3060734900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.i_Verify_deletemessage_Excel_displayed_after_deletion()"
});
formatter.result({
  "duration": 51990500,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Logout from the Application",
  "description": "",
  "id": "elsc-014-015-excel;logout-from-the-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 42,
      "name": "@Logout"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "I want to click on logout button",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.i_want_to_click_on_logout_button()"
});
formatter.result({
  "duration": 1654857600,
  "status": "passed"
});
});