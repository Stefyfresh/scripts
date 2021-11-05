# Intro
This script modifies the AP classroom assignment carousel (list of assignments in the tiled boxes) by adding a scroll bar for easy access to all the assignments.

# Installation
Prerequisites: An HTTP request proxy like Requestly (https://requestly.io/) which you can download for your browser.



In your proxy, create a new rule to *insert a script*.

Then add the script URL into the script source on the proxy. DO NOT use the script from this GitHub page! It will not work on some browsers.
The link to the working script is here: https://stefyfreshschool.github.io/programs/scripts/apClassroom/modifyAssignmentCarousel.js

Then set the rule to check if the *request URL contains* "https://apclassroom.collegeboard.org/8/home".

Enable the rule and go on the AP website to check if it worked!
