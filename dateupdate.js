// dateupdate.js

var lastModified = new Date(document.lastModified);

var formattedDate = lastModified.toLocaleDateString();

document.getElementById("dateupdate").innerHTML =
  "This page was last modified on " + formattedDate;