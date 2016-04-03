var cssComputeResults = {};

(function () {
  var stylesheetElements = document.querySelectorAll('link[rel=stylesheet]:not(.css-compute-ignore)');
  var computedStyles = {};
  var classCounter = [];

  var webkitProperties = ['alignContent', 'alignItems', 'alignSelf', 'alignmentBaseline', 'all', 'animation', 'animationDelay', 'animationDirection', 'animationDuration', 'animationFillMode', 'animationIterationCount', 'animationName', 'animationPlayState', 'animationTimingFunction', 'backfaceVisibility', 'background', 'backgroundAttachment', 'backgroundBlendMode', 'backgroundClip', 'backgroundColor', 'backgroundImage', 'backgroundOrigin', 'backgroundPosition', 'backgroundPositionX', 'backgroundPositionY', 'backgroundRepeat', 'backgroundRepeatX', 'backgroundRepeatY', 'backgroundSize', 'baselineShift', 'border', 'borderBottom', 'borderBottomColor', 'borderBottomLeftRadius', 'borderBottomRightRadius', 'borderBottomStyle', 'borderBottomWidth', 'borderCollapse', 'borderColor', 'borderImage', 'borderImageOutset', 'borderImageRepeat', 'borderImageSlice', 'borderImageSource', 'borderImageWidth', 'borderLeft', 'borderLeftColor', 'borderLeftStyle', 'borderLeftWidth', 'borderRadius', 'borderRight', 'borderRightColor', 'borderRightStyle', 'borderRightWidth', 'borderSpacing', 'borderStyle', 'borderTop', 'borderTopColor', 'borderTopLeftRadius', 'borderTopRightRadius', 'borderTopStyle', 'borderTopWidth', 'borderWidth', 'bottom', 'boxShadow', 'boxSizing', 'bufferedRendering', 'captionSide', 'clear', 'clip', 'clipPath', 'clipRule', 'color', 'colorInterpolation', 'colorInterpolationFilters', 'colorRendering', 'content', 'counterIncrement', 'counterReset', 'cssFloat', 'cssText', 'cursor', 'cx', 'cy', 'direction', 'display', 'dominantBaseline', 'emptyCells', 'fill', 'fillOpacity', 'fillRule', 'filter', 'flex', 'flexBasis', 'flexDirection', 'flexFlow', 'flexGrow', 'flexShrink', 'flexWrap', 'float', 'floodColor', 'floodOpacity', 'font', 'fontFamily', 'fontFeatureSettings', 'fontKerning', 'fontSize', 'fontStretch', 'fontStyle', 'fontVariant', 'fontVariantLigatures', 'fontWeight', 'height', 'imageRendering', 'isolation', 'justifyContent', 'left', 'length', 'letterSpacing', 'lightingColor', 'lineHeight', 'listStyle', 'listStyleImage', 'listStylePosition', 'listStyleType', 'margin', 'marginBottom', 'marginLeft', 'marginRight', 'marginTop', 'marker', 'markerEnd', 'markerMid', 'markerStart', 'mask', 'maskType', 'maxHeight', 'maxWidth', 'maxZoom', 'minHeight', 'minWidth', 'minZoom', 'mixBlendMode', 'motion', 'motionOffset', 'motionPath', 'motionRotation', 'objectFit', 'objectPosition', 'opacity', 'order', 'orientation', 'orphans', 'outline', 'outlineColor', 'outlineOffset', 'outlineStyle', 'outlineWidth', 'overflow', 'overflowWrap', 'overflowX', 'overflowY', 'padding', 'paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop', 'page', 'pageBreakAfter', 'pageBreakBefore', 'pageBreakInside', 'paintOrder', 'parentRule', 'perspective', 'perspectiveOrigin', 'pointerEvents', 'position', 'quotes', 'r', 'resize', 'right', 'rx', 'ry', 'shapeImageThreshold', 'shapeMargin', 'shapeOutside', 'shapeRendering', 'size', 'speak', 'src', 'stopColor', 'stopOpacity', 'stroke', 'strokeDasharray', 'strokeDashoffset', 'strokeLinecap', 'strokeLinejoin', 'strokeMiterlimit', 'strokeOpacity', 'strokeWidth', 'tabSize', 'tableLayout', 'textAlign', 'textAlignLast', 'textAnchor', 'textCombineUpright', 'textDecoration', 'textIndent', 'textOrientation', 'textOverflow', 'textRendering', 'textShadow', 'textTransform', 'top', 'touchAction', 'transform', 'transformOrigin', 'transformStyle', 'transition', 'transitionDelay', 'transitionDuration', 'transitionProperty', 'transitionTimingFunction', 'unicodeBidi', 'unicodeRange', 'userZoom', 'vectorEffect', 'verticalAlign', 'visibility', 'webkitAppRegion', 'webkitAppearance', 'webkitBackgroundClip', 'webkitBackgroundComposite', 'webkitBackgroundOrigin', 'webkitBorderAfter', 'webkitBorderAfterColor', 'webkitBorderAfterStyle', 'webkitBorderAfterWidth', 'webkitBorderBefore', 'webkitBorderBeforeColor', 'webkitBorderBeforeStyle', 'webkitBorderBeforeWidth', 'webkitBorderEnd', 'webkitBorderEndColor', 'webkitBorderEndStyle', 'webkitBorderEndWidth', 'webkitBorderHorizontalSpacing', 'webkitBorderImage', 'webkitBorderStart', 'webkitBorderStartColor', 'webkitBorderStartStyle', 'webkitBorderStartWidth', 'webkitBorderVerticalSpacing', 'webkitBoxAlign', 'webkitBoxDecorationBreak', 'webkitBoxDirection', 'webkitBoxFlex', 'webkitBoxFlexGroup', 'webkitBoxLines', 'webkitBoxOrdinalGroup', 'webkitBoxOrient', 'webkitBoxPack', 'webkitBoxReflect', 'webkitClipPath', 'webkitColumnBreakAfter', 'webkitColumnBreakBefore', 'webkitColumnBreakInside', 'webkitColumnCount', 'webkitColumnGap', 'webkitColumnRule', 'webkitColumnRuleColor', 'webkitColumnRuleStyle', 'webkitColumnRuleWidth', 'webkitColumnSpan', 'webkitColumnWidth', 'webkitColumns', 'webkitFilter', 'webkitFontSizeDelta', 'webkitFontSmoothing', 'webkitHighlight', 'webkitHyphenateCharacter', 'webkitLineBreak', 'webkitLineClamp', 'webkitLocale', 'webkitLogicalHeight', 'webkitLogicalWidth', 'webkitMarginAfter', 'webkitMarginAfterCollapse', 'webkitMarginBefore', 'webkitMarginBeforeCollapse', 'webkitMarginBottomCollapse', 'webkitMarginCollapse', 'webkitMarginEnd', 'webkitMarginStart', 'webkitMarginTopCollapse', 'webkitMask', 'webkitMaskBoxImage', 'webkitMaskBoxImageOutset', 'webkitMaskBoxImageRepeat', 'webkitMaskBoxImageSlice', 'webkitMaskBoxImageSource', 'webkitMaskBoxImageWidth', 'webkitMaskClip', 'webkitMaskComposite', 'webkitMaskImage', 'webkitMaskOrigin', 'webkitMaskPosition', 'webkitMaskPositionX', 'webkitMaskPositionY', 'webkitMaskRepeat', 'webkitMaskRepeatX', 'webkitMaskRepeatY', 'webkitMaskSize', 'webkitMaxLogicalHeight', 'webkitMaxLogicalWidth', 'webkitMinLogicalHeight', 'webkitMinLogicalWidth', 'webkitPaddingAfter', 'webkitPaddingBefore', 'webkitPaddingEnd', 'webkitPaddingStart', 'webkitPerspectiveOriginX', 'webkitPerspectiveOriginY', 'webkitPrintColorAdjust', 'webkitRtlOrdering', 'webkitRubyPosition', 'webkitTapHighlightColor', 'webkitTextCombine', 'webkitTextDecorationsInEffect', 'webkitTextEmphasis', 'webkitTextEmphasisColor', 'webkitTextEmphasisPosition', 'webkitTextEmphasisStyle', 'webkitTextFillColor', 'webkitTextOrientation', 'webkitTextSecurity', 'webkitTextStroke', 'webkitTextStrokeColor', 'webkitTextStrokeWidth', 'webkitTransformOriginX', 'webkitTransformOriginY', 'webkitTransformOriginZ', 'webkitUserDrag', 'webkitUserModify', 'webkitUserSelect', 'webkitWritingMode', 'whiteSpace', 'widows', 'width', 'willChange', 'wordBreak', 'wordSpacing', 'wordWrap', 'writingMode', 'x', 'y', 'zIndex', 'zoom'];
  var standardProperties = ['alignContent', 'alignItems', 'alignSelf', 'alignmentBaseline', 'all', 'animation', 'animationDelay', 'animationDirection', 'animationDuration', 'animationFillMode', 'animationIterationCount', 'animationName', 'animationPlayState', 'animationTimingFunction', 'backfaceVisibility', 'background', 'backgroundAttachment', 'backgroundBlendMode', 'backgroundClip', 'backgroundColor', 'backgroundImage', 'backgroundOrigin', 'backgroundPosition', 'backgroundPositionX', 'backgroundPositionY', 'backgroundRepeat', 'backgroundRepeatX', 'backgroundRepeatY', 'backgroundSize', 'baselineShift', 'border', 'borderBottom', 'borderBottomColor', 'borderBottomLeftRadius', 'borderBottomRightRadius', 'borderBottomStyle', 'borderBottomWidth', 'borderCollapse', 'borderColor', 'borderImage', 'borderImageOutset', 'borderImageRepeat', 'borderImageSlice', 'borderImageSource', 'borderImageWidth', 'borderLeft', 'borderLeftColor', 'borderLeftStyle', 'borderLeftWidth', 'borderRadius', 'borderRight', 'borderRightColor', 'borderRightStyle', 'borderRightWidth', 'borderSpacing', 'borderStyle', 'borderTop', 'borderTopColor', 'borderTopLeftRadius', 'borderTopRightRadius', 'borderTopStyle', 'borderTopWidth', 'borderWidth', 'bottom', 'boxShadow', 'boxSizing', 'bufferedRendering', 'captionSide', 'clear', 'clip', 'clipPath', 'clipRule', 'color', 'colorInterpolation', 'colorInterpolationFilters', 'colorRendering', 'content', 'counterIncrement', 'counterReset', 'cssFloat', 'cssText', 'cursor', 'cx', 'cy', 'direction', 'display', 'dominantBaseline', 'emptyCells', 'fill', 'fillOpacity', 'fillRule', 'filter', 'flex', 'flexBasis', 'flexDirection', 'flexFlow', 'flexGrow', 'flexShrink', 'flexWrap', 'float', 'floodColor', 'floodOpacity', 'font', 'fontFamily', 'fontFeatureSettings', 'fontKerning', 'fontSize', 'fontStretch', 'fontStyle', 'fontVariant', 'fontVariantLigatures', 'fontWeight', 'height', 'imageRendering', 'isolation', 'justifyContent', 'left', 'length', 'letterSpacing', 'lightingColor', 'lineHeight', 'listStyle', 'listStyleImage', 'listStylePosition', 'listStyleType', 'margin', 'marginBottom', 'marginLeft', 'marginRight', 'marginTop', 'marker', 'markerEnd', 'markerMid', 'markerStart', 'mask', 'maskType', 'maxHeight', 'maxWidth', 'maxZoom', 'minHeight', 'minWidth', 'minZoom', 'mixBlendMode', 'motion', 'motionOffset', 'motionPath', 'motionRotation', 'objectFit', 'objectPosition', 'opacity', 'order', 'orientation', 'orphans', 'outline', 'outlineColor', 'outlineOffset', 'outlineStyle', 'outlineWidth', 'overflow', 'overflowWrap', 'overflowX', 'overflowY', 'padding', 'paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop', 'page', 'pageBreakAfter', 'pageBreakBefore', 'pageBreakInside', 'paintOrder', 'parentRule', 'perspective', 'perspectiveOrigin', 'pointerEvents', 'position', 'quotes', 'r', 'resize', 'right', 'rx', 'ry', 'shapeImageThreshold', 'shapeMargin', 'shapeOutside', 'shapeRendering', 'size', 'speak', 'src', 'stopColor', 'stopOpacity', 'stroke', 'strokeDasharray', 'strokeDashoffset', 'strokeLinecap', 'strokeLinejoin', 'strokeMiterlimit', 'strokeOpacity', 'strokeWidth', 'tabSize', 'tableLayout', 'textAlign', 'textAlignLast', 'textAnchor', 'textCombineUpright', 'textDecoration', 'textIndent', 'textOrientation', 'textOverflow', 'textRendering', 'textShadow', 'textTransform', 'top', 'touchAction', 'transform', 'transformOrigin', 'transformStyle', 'transition', 'transitionDelay', 'transitionDuration', 'transitionProperty', 'transitionTimingFunction', 'unicodeBidi', 'unicodeRange', 'userZoom', 'vectorEffect', 'verticalAlign', 'visibility', 'whiteSpace', 'widows', 'width', 'willChange', 'wordBreak', 'wordSpacing', 'wordWrap', 'writingMode', 'x', 'y', 'zIndex', 'zoom'];
  // Change to 'webkitProperties' to compute webkit vendor prefixed properties
  var properties = standardProperties;

  /**
   * Compute the styling for a single DOM element, and add it to the ledger of computed styles.
   * Recursively invoke self on each child of the node.
   *
   * @param element: The element to get styles on
   * @param level: The level that the traversal is on
   * @param additive: True when we should add to the ledger, false when we should remove duplicates
   */
  var computeDomLayer = function (element, level, additive) {
    var computedStyleClass;

    // Iterate the computed class counter
    if (typeof classCounter[level] !== 'number') {
      classCounter[level] = 0;
    } else {
      classCounter[level]++;
    }

    computedStyleClass = 'e' + classCounter.join('-');

    // Compute the styles for this element
    if (additive) {
      computedStyles[computedStyleClass] = {};
    }

    // Loop through all properties
    for (var i = 0; i < properties.length; i++) {
      var property = properties[i];

      if (additive) {
        computedStyles[computedStyleClass][property] = window.getComputedStyle(document.body)[property];
      } else {
        if (computedStyles[computedStyleClass][property] === window.getComputedStyle(document.body)[property]) {
          delete computedStyles[computedStyleClass][property];
        }
      }
    }

    // Loop through the children
    for (var j = 0; j < element.children.length; j++) {
      computeDomLayer(element.children[j], level + 1, additive);
    }

    // Reset the last counter in the class counter
    classCounter = classCounter.slice(0, level + 1);
  };

  // Calculate all styles
  computeDomLayer(document.body, 0, true);

  // Remove styles from page
  for (var i = 0; i < stylesheetElements.length; i++) {
    stylesheetElements[i].disabled = true;
  }

  // Reset the counter, and traverse the doc, removing duplicate styles
  classCounter = [];
  computeDomLayer(document.body, 0, false);

  // Save the results
  cssComputeResults.asObject = computedStyles;
  cssComputeResults.asString = JSON.stringify(computedStyles);
})();

console.log('Computed Styles:', cssComputeResults.asObject);
console.log('Computed Almost Stylesheet:', cssComputeResults.asString);
console.log('Computed Styles Length:', cssComputeResults.asString.length);
