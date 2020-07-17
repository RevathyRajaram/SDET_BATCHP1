$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ELSC_014.feature");
formatter.feature({
  "line": 3,
  "name": "ELSC_014",
  "description": "To Automate Elearning Application",
  "id": "elsc-014",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@ELSC_014"
    }
  ]
});
formatter.scenario({
  "comments": [
    {
      "line": 6,
      "value": "#"
    }
  ],
  "line": 8,
  "name": "Login to the Application",
  "description": "",
  "id": "elsc-014;login-to-the-application",
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
  "duration": 10709881501,
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
  "duration": 318389800,
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
  "duration": 258460001,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.i_click_on_Login_button()"
});
formatter.result({
  "duration": 5017021800,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.i_verify_the_homepage()"
});
formatter.result({
  "duration": 108706500,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "To verify whether application allows admin to add a course to user",
  "description": "",
  "id": "elsc-014;to-verify-whether-application-allows-admin-to-add-a-course-to-user",
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
  "name": "I want to Add user from userlist",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I want to Add course from courselist",
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
  "duration": 1066474300,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.i_want_to_click_the_Add_users_to_course_link()"
});
formatter.result({
  "duration": 1605487101,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.i_want_to_Add_user_from_userlist()"
});
formatter.result({
  "duration": 147344200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.i_want_to_Add_course_from_courselist()"
});
formatter.result({
  "duration": 88943599,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.i_Click_Add_to_the_course_s_button()"
});
formatter.result({
  "duration": 949896501,
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
  "duration": 89062699,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "To verify whether application allows admin to add new course category",
  "description": "",
  "id": "elsc-014;to-verify-whether-application-allows-admin-to-add-new-course-category",
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
  "name": "I want to verify the added category displayed in grid \"Blended Learning(BL_IBM_SDET)\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.i_want_to_click_the_Administration_link()"
});
formatter.result({
  "duration": 949342700,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.i_want_to_click_the_Courses_Categories_link()"
});
formatter.result({
  "duration": 1120200299,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.i_want_to_click_the_Add_Category_Icon()"
});
formatter.result({
  "duration": 896185001,
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
  "duration": 306859100,
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
  "duration": 248113400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.i_want_to_click_the_Category_radio_button()"
});
formatter.result({
  "duration": 133848600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.i_click_the_Add_Category_button()"
});
formatter.result({
  "duration": 1233343300,
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
  "duration": 115818600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blended Learning(BL_IBM_SDET)",
      "offset": 55
    }
  ],
  "location": "stepdefinitions.i_want_to_verify_the_added_category_displayed_in_grid(String)"
});
formatter.result({
  "duration": 51095500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\u0027cm-content\u0027]/div/table/tbody/tr[44]/td[1]\"}\n  (Session info: chrome\u003d83.0.4103.116)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027RERAJARA\u0027, ip: \u0027192.168.43.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\REVATH~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:51221}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: bca269f78bba2e196b0e13aaa6d08506\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027cm-content\u0027]/div/table/tbody/tr[44]/td[1]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepdefinitions.stepdefinitions.i_want_to_verify_the_added_category_displayed_in_grid(stepdefinitions.java:147)\r\n\tat ✽.Then I want to verify the added category displayed in grid \"Blended Learning(BL_IBM_SDET)\"(ELSC_014.feature:34)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 37,
  "name": "To delete the added course to make sure second occurrence of execution should not fail",
  "description": "",
  "id": "elsc-014;to-delete-the-added-course-to-make-sure-second-occurrence-of-execution-should-not-fail",
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
  "name": "I Click on the delete button",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I Verify \"Deleted\" message displayed after deletion",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.i_Click_on_the_delete_button()"
});
formatter.result({
  "duration": 19131799,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\u0027cm-content\u0027]/div/table/tbody/tr[44]/td[4]/a[3]/img\"}\n  (Session info: chrome\u003d83.0.4103.116)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027RERAJARA\u0027, ip: \u0027192.168.43.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\REVATH~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:51221}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: bca269f78bba2e196b0e13aaa6d08506\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027cm-content\u0027]/div/table/tbody/tr[44]/td[4]/a[3]/img}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepdefinitions.stepdefinitions.i_Click_on_the_delete_button(stepdefinitions.java:159)\r\n\tat ✽.When I Click on the delete button(ELSC_014.feature:39)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
});