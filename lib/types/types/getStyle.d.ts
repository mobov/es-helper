/**
 * 获取节点的CSS属性的值
 * @param element {Object} 节点
 * @param styleName {String} 属性名字
 * @returns {*}
 * @author: nocoolyoyo
 * @date: 2018-03-11
 */
declare const getStyle: (element: HTMLElement, styleName: number | "length" | "left" | "right" | "top" | "bottom" | "font" | "clipPath" | "cursor" | "filter" | "marker" | "mask" | "resize" | "alignContent" | "alignItems" | "alignSelf" | "alignmentBaseline" | "animation" | "animationDelay" | "animationDirection" | "animationDuration" | "animationFillMode" | "animationIterationCount" | "animationName" | "animationPlayState" | "animationTimingFunction" | "backfaceVisibility" | "background" | "backgroundAttachment" | "backgroundClip" | "backgroundColor" | "backgroundImage" | "backgroundOrigin" | "backgroundPosition" | "backgroundPositionX" | "backgroundPositionY" | "backgroundRepeat" | "backgroundSize" | "baselineShift" | "border" | "borderBottom" | "borderBottomColor" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStyle" | "borderBottomWidth" | "borderCollapse" | "borderColor" | "borderImage" | "borderImageOutset" | "borderImageRepeat" | "borderImageSlice" | "borderImageSource" | "borderImageWidth" | "borderLeft" | "borderLeftColor" | "borderLeftStyle" | "borderLeftWidth" | "borderRadius" | "borderRight" | "borderRightColor" | "borderRightStyle" | "borderRightWidth" | "borderSpacing" | "borderStyle" | "borderTop" | "borderTopColor" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStyle" | "borderTopWidth" | "borderWidth" | "boxShadow" | "boxSizing" | "breakAfter" | "breakBefore" | "breakInside" | "captionSide" | "clear" | "clip" | "clipRule" | "color" | "colorInterpolationFilters" | "columnCount" | "columnFill" | "columnGap" | "columnRule" | "columnRuleColor" | "columnRuleStyle" | "columnRuleWidth" | "columnSpan" | "columnWidth" | "columns" | "content" | "counterIncrement" | "counterReset" | "cssFloat" | "cssText" | "direction" | "display" | "dominantBaseline" | "emptyCells" | "enableBackground" | "fill" | "fillOpacity" | "fillRule" | "flex" | "flexBasis" | "flexDirection" | "flexFlow" | "flexGrow" | "flexShrink" | "flexWrap" | "floodColor" | "floodOpacity" | "fontFamily" | "fontFeatureSettings" | "fontSize" | "fontSizeAdjust" | "fontStretch" | "fontStyle" | "fontVariant" | "fontWeight" | "gap" | "glyphOrientationHorizontal" | "glyphOrientationVertical" | "grid" | "gridArea" | "gridAutoColumns" | "gridAutoFlow" | "gridAutoRows" | "gridColumn" | "gridColumnEnd" | "gridColumnGap" | "gridColumnStart" | "gridGap" | "gridRow" | "gridRowEnd" | "gridRowGap" | "gridRowStart" | "gridTemplate" | "gridTemplateAreas" | "gridTemplateColumns" | "gridTemplateRows" | "height" | "imeMode" | "justifyContent" | "justifyItems" | "justifySelf" | "kerning" | "layoutGrid" | "layoutGridChar" | "layoutGridLine" | "layoutGridMode" | "layoutGridType" | "letterSpacing" | "lightingColor" | "lineBreak" | "lineHeight" | "listStyle" | "listStyleImage" | "listStylePosition" | "listStyleType" | "margin" | "marginBottom" | "marginLeft" | "marginRight" | "marginTop" | "markerEnd" | "markerMid" | "markerStart" | "maskImage" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "msContentZoomChaining" | "msContentZoomLimit" | "msContentZoomLimitMax" | "msContentZoomLimitMin" | "msContentZoomSnap" | "msContentZoomSnapPoints" | "msContentZoomSnapType" | "msContentZooming" | "msFlowFrom" | "msFlowInto" | "msFontFeatureSettings" | "msGridColumn" | "msGridColumnAlign" | "msGridColumnSpan" | "msGridColumns" | "msGridRow" | "msGridRowAlign" | "msGridRowSpan" | "msGridRows" | "msHighContrastAdjust" | "msHyphenateLimitChars" | "msHyphenateLimitLines" | "msHyphenateLimitZone" | "msHyphens" | "msImeAlign" | "msOverflowStyle" | "msScrollChaining" | "msScrollLimit" | "msScrollLimitXMax" | "msScrollLimitXMin" | "msScrollLimitYMax" | "msScrollLimitYMin" | "msScrollRails" | "msScrollSnapPointsX" | "msScrollSnapPointsY" | "msScrollSnapType" | "msScrollSnapX" | "msScrollSnapY" | "msScrollTranslation" | "msTextCombineHorizontal" | "msTextSizeAdjust" | "msTouchAction" | "msTouchSelect" | "msUserSelect" | "msWrapFlow" | "msWrapMargin" | "msWrapThrough" | "objectFit" | "objectPosition" | "opacity" | "order" | "orphans" | "outline" | "outlineColor" | "outlineOffset" | "outlineStyle" | "outlineWidth" | "overflow" | "overflowX" | "overflowY" | "padding" | "paddingBottom" | "paddingLeft" | "paddingRight" | "paddingTop" | "pageBreakAfter" | "pageBreakBefore" | "pageBreakInside" | "parentRule" | "penAction" | "perspective" | "perspectiveOrigin" | "pointerEvents" | "position" | "quotes" | "rotate" | "rowGap" | "rubyAlign" | "rubyOverhang" | "rubyPosition" | "scale" | "scrollBehavior" | "stopColor" | "stopOpacity" | "stroke" | "strokeDasharray" | "strokeDashoffset" | "strokeLinecap" | "strokeLinejoin" | "strokeMiterlimit" | "strokeOpacity" | "strokeWidth" | "tableLayout" | "textAlign" | "textAlignLast" | "textAnchor" | "textCombineUpright" | "textDecoration" | "textIndent" | "textJustify" | "textKashida" | "textKashidaSpace" | "textOverflow" | "textShadow" | "textTransform" | "textUnderlinePosition" | "touchAction" | "transform" | "transformOrigin" | "transformStyle" | "transition" | "transitionDelay" | "transitionDuration" | "transitionProperty" | "transitionTimingFunction" | "translate" | "unicodeBidi" | "userSelect" | "verticalAlign" | "visibility" | "webkitAlignContent" | "webkitAlignItems" | "webkitAlignSelf" | "webkitAnimation" | "webkitAnimationDelay" | "webkitAnimationDirection" | "webkitAnimationDuration" | "webkitAnimationFillMode" | "webkitAnimationIterationCount" | "webkitAnimationName" | "webkitAnimationPlayState" | "webkitAnimationTimingFunction" | "webkitAppearance" | "webkitBackfaceVisibility" | "webkitBackgroundClip" | "webkitBackgroundOrigin" | "webkitBackgroundSize" | "webkitBorderBottomLeftRadius" | "webkitBorderBottomRightRadius" | "webkitBorderImage" | "webkitBorderRadius" | "webkitBorderTopLeftRadius" | "webkitBorderTopRightRadius" | "webkitBoxAlign" | "webkitBoxDirection" | "webkitBoxFlex" | "webkitBoxOrdinalGroup" | "webkitBoxOrient" | "webkitBoxPack" | "webkitBoxShadow" | "webkitBoxSizing" | "webkitColumnBreakAfter" | "webkitColumnBreakBefore" | "webkitColumnBreakInside" | "webkitColumnCount" | "webkitColumnGap" | "webkitColumnRule" | "webkitColumnRuleColor" | "webkitColumnRuleStyle" | "webkitColumnRuleWidth" | "webkitColumnSpan" | "webkitColumnWidth" | "webkitColumns" | "webkitFilter" | "webkitFlex" | "webkitFlexBasis" | "webkitFlexDirection" | "webkitFlexFlow" | "webkitFlexGrow" | "webkitFlexShrink" | "webkitFlexWrap" | "webkitJustifyContent" | "webkitMask" | "webkitMaskBoxImage" | "webkitMaskBoxImageOutset" | "webkitMaskBoxImageRepeat" | "webkitMaskBoxImageSlice" | "webkitMaskBoxImageSource" | "webkitMaskBoxImageWidth" | "webkitMaskClip" | "webkitMaskComposite" | "webkitMaskImage" | "webkitMaskOrigin" | "webkitMaskPosition" | "webkitMaskRepeat" | "webkitMaskSize" | "webkitOrder" | "webkitPerspective" | "webkitPerspectiveOrigin" | "webkitTapHighlightColor" | "webkitTextFillColor" | "webkitTextSizeAdjust" | "webkitTextStroke" | "webkitTextStrokeColor" | "webkitTextStrokeWidth" | "webkitTransform" | "webkitTransformOrigin" | "webkitTransformStyle" | "webkitTransition" | "webkitTransitionDelay" | "webkitTransitionDuration" | "webkitTransitionProperty" | "webkitTransitionTimingFunction" | "webkitUserModify" | "webkitUserSelect" | "webkitWritingMode" | "whiteSpace" | "widows" | "width" | "wordBreak" | "wordSpacing" | "wordWrap" | "writingMode" | "zIndex" | "zoom" | "getPropertyPriority" | "getPropertyValue" | "item" | "removeProperty" | "setProperty") => string;
export default getStyle;