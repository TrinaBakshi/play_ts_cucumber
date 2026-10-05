Feature: User Authentication tests

Background: 
     Given User navigates to the application
     And User click on the login screen

Scenario:  Login should be success
     And User enter the Email ID as "trina.bakshi@gmail.com"
     And User enter the password as "trina@123"
     When User click on the Login button
     Then Login should be success

Scenario: Login should not be success
     Given User enter the Email ID as "rumi.bakshi@gmail.com"
     Given User enter the password as "test@1230"
     When User click on the Login button
     But Login should fail
     
