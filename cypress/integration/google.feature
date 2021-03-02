Feature: Search for HNT in Google

    Scenario: Google Search HNT Click Search
        Given As someone interested in cryptocurrencies
        When I type "HNT" in Google search input
        And I click on the search button
        Then I should see "helium.com" as one of the search results

    Scenario: Google Search HNT Press ENTER
        Given As someone interested in cryptocurrencies
        When I type "HNT" in Google search input
        And I press Enter
        Then I should see "helium.com" as one of the search results

