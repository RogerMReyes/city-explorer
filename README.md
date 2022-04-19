# City Explorer

**Author**: Roger Reyes
**Version**: 1.0.0 
<!-- increment the patch/fix version number if you make more commits past your first submission -->

## Overview

This application allows you to enter the location of any US City or State and returns information related to it. The information returned includes the full location name, the longitude and latitude, and a map image of the location. If an unexpected input is received the user will be notified what kind of error they have run into. 

## Getting Started

In order for another user to get this program running on their machine they must have a few key features. They must acquire an api key from locationIQ in order to have access to their API so the program can properly pull information from their database

## Architecture

This application is utilizing axios, react-bootstrap, javascript, html5, and css3. Through the use of Event Listeners off the text input and explore button, information is pulled based of the string value inside the text box. Using the value we use the locationIQ API library to pull information regarding the given location. The information is then saved into state in order to be used for various tasks.

![City Explorer Whiteboard](src/imgs/USPlaceholder.jpg)

## Change Log

Name of feature: #1 Lat and Long Locations

Estimate of time needed to complete: 1 hour

Start time: 3:00pm

Finish time: 4:25pm

Actual time needed to complete: 1 hr 25 min

---

Name of feature: #2 Map image

Estimate of time needed to complete: 2 hours

Start time: 5:00pm

Finish time: 6:16pm
Actual time needed to complete: 1 hr 30 min

---

Name of feature: #3 Error try/catch

Estimate of time needed to complete: 15 min

Start time: 6:25pm

Finish time: 6:35pm

Actual time needed to complete: 10 min

## Credit and Collaborations

Color Scheme Picker:
<https://coolors.co/3a7ca5-ffa69e-aa4465-031926-defff2>

Placeholder Image:
<https://www.freeimages.com/photo/united-states-on-charts-1458255>

React-Bootstrap:
<https://react-bootstrap.github.io/>
