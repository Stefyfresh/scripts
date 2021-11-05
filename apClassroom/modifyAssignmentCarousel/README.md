# Intro
This script modifies the AP classroom assignment carousel (list of assignments in the tiled boxes) by adding a scroll bar for easy access to all the assignments.

# Installation
Prerequisites: An HTTP request proxy like Requestly (https://requestly.io/) which you can download for your browser.



In your proxy, create a new rule to *insert a script*.

Then add the script URL into the script source on the proxy. DO NOT use the script from this GitHub page! It will not work on some browsers.
The link to the working script is here: https://stefyfreshschool.github.io/programs/scripts/apClassroom/modifyAssignmentCarousel.js

Then set the rule to check if the *request URL contains* "https://apclassroom.collegeboard.org/8/home".

Enable the rule and go on the AP website to check if it worked!

# Versions
There are multiple versions of this script available depending on what you want. If you want to use a different version, just use these URLs instead.

The lite version updates less frequently and is somewhat minified, so it is useful for slow computers/connections. The V2.0 version does not remove the buttons, so if you like the buttons even with the scroll bar for some reason, you can keep them.


Lite version: https://stefyfreshschool.github.io/programs/scripts/apClassroom/modifyAssignmentCarouselLite.js

V2.0 version: https://stefyfreshschool.github.io/programs/scripts/apClassroom/modifyAssignmentCarouselV2.0.js
