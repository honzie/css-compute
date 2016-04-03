var properties = ['alignContent', 'alignItems', 'alignSelf'];
var computedStyles = {};
var classCounter = [];

// Compute a single element and its children.
var computeDomLayer = function (element, level) {
  // Iterate the computed class counter
  if (classCounter[level] === undefined) {
    classCounter[level] = 0;
  } else {
    classCounter[level]++;
  }

  // Compute the styles for this element
  computedStyles['e' + classCounter.join('-')] = {};

  for (var i = 0; i < properties.length; i++) {
    var property = properties[i];

    computedStyles['e' + classCounter.join('-')][property] = window.getComputedStyle(document.body)[property];
  }

  // Loop through the children
  for (var j = 0; j < element.children.length; j++) {
    computeDomLayer(element.children[j], level + 1);
  }

  // Reset the last counter in the class counter
  classCounter = classCounter.slice(0, level + 1);
};

// Remove computed elements that are the same as the default styling
// TODO

computeDomLayer(document.body, 0);

console.log(computedStyles)
