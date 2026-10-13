Feature: User Authentication tests

Background: 
     Given User navigates to the application

Scenario:  Login should be success
     When User enter the emailID as "trina.bakshi@gmail.com"
     And User enter the password as "trina@123"
     And User click on the login button
     Then Login should be success

Scenario: Login should not be success
     When User enter the emailID as "rumi.bakshi@gmail.com"
     And User enter the password as "test@1230"
     And User click on the login button
     But Login should fail
     
