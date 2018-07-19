/*
jQuery(document).ready(function($){
  var newWidth = '';
  var ww = $(window).width();
  if(ww<=768) {
    newWidth = ww-200;
  } else {
    newWidth = 700;
  }
  //console.log(newWidth);
*/

var width = 700;
var height = 740;

var svg = d3.select('div.chartcontainer')
  .append('svg')
  .attr('class','svg')
  .attr('width', width)
  .attr('height', height);

var margin = {top: 70, right: 05, bottom: 140, left: 05}; //only affecting map placement
var chartHeight = height-  margin.top - margin.bottom;
var chartWidth = width - margin.right - margin.left;

var mapScale = 870;

var cityCircleOpacity = 0.5;
var cityCircleProportion = 0.013;

var selectedCity = 0;

var clickIsActive = 0; //Used in HoverOff. If a city is selected (not hovered), then HoverOff will not take effect


////////////////////////////////////
//CHART AREA ELEMENTS
var entireSVG = svg.append('g');

var chartBackground = entireSVG.append('rect') //beige background, accepts click to reset
  .attr('width', width)
  .attr('height', height)
  .attr('class','chartBackground')
  .on('click', function(d){clickIsActive = 0; cityHoverOff()});

var mapArea = svg.append('g')
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var map = mapArea.append('g')
  .attr('class','ignorePointer')
  .attr('width', chartWidth)
  .attr('height', chartHeight);

var cosmeticBox = entireSVG.append('rect')
  .attr('width', width)
  .attr('height', 89.5)
  .attr('class','cosmeticBox ignorePointer');

var cosmeticBox2 = entireSVG.append('rect')
  .attr('width', width)
  .attr('height', 115)
  .attr('class','cosmeticBox ignorePointer')
  .attr('transform','translate(' + 0 + ',' + (height-115) + ')');


////////////////////////////////////
//Titles
var title = svg.append('g')
  .attr('class','mainTitle ignorePointer')
  .attr('transform','translate(' + width/2 + ',' + 30 + ')');

title.append('text')
  .attr('class','mainTitle main ignorePointer')
  .text('HOMELESSNESS IN THE MOST POPULOUS U.S. METRO AREAS, 2016');

var subTitle1 = title.append('text')
  .attr("transform", "translate(" + 0 + "," + 26 + ")")
  .attr('class','mainTitle sub ignorePointer')
  .text('The 25 most populous metropolitan areas in the U.S. have 42 percent of the');

var subTitle2 = title.append('text')
  .attr("transform", "translate(" + 0 + "," + 42 + ")")
  .attr('class','mainTitle sub ignorePointer')
  .text('U.S. population but 55 percent of people experiencing homelessness.');


////////////////////////////////////
//MAP elements. Define the projection and path generator.
var projection = d3.geo.albersUsa()
  .translate([chartWidth/2, chartHeight/2])   //center it
  .scale([mapScale]);      //size out of 1000

var path = d3.geo.path()
  .projection(projection);


////////////////////////////////////
//Center circle with pie and summary text
var centerCircleTranslateRight = chartWidth/2;
var centerCircleTranslateDown = chartHeight/2 - 10;
var centerCircleRadius = 120;

var centerCircle = svg.append('g')
  .attr('class','centerCircle')
  .attr('id','centerCircleG')
  .attr('transform','translate(' + (margin.left+ centerCircleTranslateRight) + ',' + (margin.top + centerCircleTranslateDown) + ')');

var pieG = svg.append('g')
  .attr('class','pieChart')
  .attr('id','pieChartG')
  .attr('transform','translate(' + (margin.left+ centerCircleTranslateRight) + ',' + (margin.top + centerCircleTranslateDown) + ')');

var centerCircleBackground = centerCircle.append('circle')
  .attr('r', centerCircleRadius)
  .attr('id','centerCircleBackground');

//Text in center circle
var centerCircleText = centerCircle.append('g')
  .attr('class','centerCircleText');

centerCircleText.append('text')
  .attr('class','centerCircleText centerCircleSubtitle')
  .attr('transform','translate(' + (0) + ',' + (-65) + ')')
  .text('Total Homeless');

centerCircleText.append('text')
  .attr('id','totalHomelessValue')
  .attr('class','centerCircleText centerCircleValue')
  .attr('transform','translate(' + (0) + ',' + (-40) + ')')
  .text('');

centerCircleText.append('text')
  .attr('class','centerCircleText centerCircleSubtitle')
  .attr('transform','translate(' + (0) + ',' + (-2) + ')')
  .text('Rate per 10,000 Population'); 

centerCircleText.append('text')
  .attr('id','rateValue')
  .attr('class','centerCircleText centerCircleValue')
  .attr('transform','translate(' + (0) + ',' + (23) + ')')
  .text('');

centerCircleText.append('text')
  .attr('class','centerCircleText centerCircleSubtitle')
  .attr('transform','translate(' + (0) + ',' + (55) + ')')
  .text('General Population');

centerCircleText.append('text')
  .attr('id','populationValue')
  .attr('class','centerCircleText centerCircleValue')
  .attr('transform','translate(' + (0) + ',' + (80) + ')')
  .text('');



////////////////////////////////////
//PIE COLOR LEGEND, COUNTS TABLE, COSMETIC GOLD LINES
var colors = ['#2c708d', '#b9975b']
var legendRectWidth = 12;
var legendRectHeight = legendRectWidth;

var legendPanel = svg.append('g')
  .attr('transform','translate(' + (0) + ',' + (height - 208) + ')'); //LOWER LEGEND POSITION

var legend = legendPanel.append('g')
  .attr('transform','translate(' + (width/2) + ',' + (50) + ')');

var lines = legendPanel.append('g')
  .attr('class','linesGroup');
  
var line1 = lines.append('line')
  .attr('x1', 50)
  .attr('x2', width-50)
  .attr('y1', 0)
  .attr('y2', 0)
  .attr('transform', 'translate(' + (0) + ',' + (94) + ')'); //Position of line at bottom

var line2 = entireSVG.append('line')
  .attr('class','linesGroup')
  .attr('x1', 50)
  .attr('x2', width-50)
  .attr('y1', 0)
  .attr('y2', 0)
  .attr('transform', 'translate(' + (0) + ',' + (89) + ')'); //Position of line at top. Used to be part of legendPanel.
  

//Table labels for subpopulations, total, sheltered, unsheltered
var labelOffsetLeft = 20;

var verticalOffsetRowHeight = 17;
var labelOffsetRow0 = 22;
var labelOffsetRow1 = labelOffsetRow0 + verticalOffsetRowHeight + 3;
var labelOffsetRow2 = labelOffsetRow1 + verticalOffsetRowHeight;
var labelOffsetRow3 = labelOffsetRow2 + verticalOffsetRowHeight;

var countsOffsetCol1 = 180;
var countsOffsetCol2 = 290;
var countsOffsetCol3 = 400;
var countsOffsetCol4 = 510;
var countsOffsetCol5 = 620;

var countsOffsetCol1Header = 187;
var countsOffsetCol2Header = 316;
var countsOffsetCol3Header = 418;
var countsOffsetCol4Header = 515;
var countsOffsetCol5Header = 664;

var pieLegendLineOneVertical = -60;
var pieLegendLineTwoVertical = -40;
var pieLegendBoxVerticalOffset = 11;
var pieLegendBoxHorizontal = 20;
var pieLegendTextHorizontal = 40;
var pieLegendPctHorizontal = 145;


// Pie Chart Legend labels and text
var pieLegendShelteredLabel = legendPanel.append('g')
  .attr('class','legend legendLabel legendLeft ignorePointer')
  .attr('transform','translate(' + pieLegendTextHorizontal + ',' + (pieLegendLineOneVertical) + ')');
  
pieLegendShelteredLabel.append('text')
  .text('Sheltered');
  
var pieLegendUnshelteredLabel = legendPanel.append('g')
  .attr('class','legend legendLabel legendLeft ignorePointer')
  .attr('transform','translate(' + pieLegendTextHorizontal + ',' + (pieLegendLineTwoVertical) + ')');
  
pieLegendUnshelteredLabel.append('text') 
  .text('Unsheltered');

var shelteredPercent = legendPanel.append('g')
  .attr('class','legend legendLabel legendCount legendLeft ignorePointer')
  .attr('transform','translate(' + pieLegendPctHorizontal + ',' + (pieLegendLineOneVertical) + ')');
  
shelteredPercent.append('text')
  .attr('id','shelteredPercent')
  .text('33%');

var unshelteredPercent = legendPanel.append('g')
  .attr('class','legend legendLabel legendCount legendLeft ignorePointer')
  .attr('transform','translate(' + pieLegendPctHorizontal + ',' + (pieLegendLineTwoVertical) + ')');
  
unshelteredPercent.append('text')
  .attr('id','unshelteredPercent')
  .text('44%');


// Pie Chart Legend Color squares
legendPanel.append('rect')   //sheltered color box
  .attr('class', 'legendRect ignorePointer')
  .attr('width', legendRectWidth)
  .attr('height', legendRectHeight)
  .attr('fill', colors[0])
  .attr('transform', 'translate(' + (pieLegendBoxHorizontal) + ',' + (pieLegendLineOneVertical - pieLegendBoxVerticalOffset) + ')');

legendPanel.append('rect')   //unsheltered color box
  .attr('class', 'legendRect ignorePointer')
  .attr('width', legendRectWidth)
  .attr('height', legendRectHeight)
  .attr('fill', colors[1])
  .attr('transform', 'translate(' + (pieLegendBoxHorizontal) + ',' + (pieLegendLineTwoVertical - pieLegendBoxVerticalOffset) + ')');


// Data table LABELS
var shelteredLabel = legendPanel.append('g')
  .attr('class','legend legendLabel legendLeft ignorePointer')
  .attr('transform','translate(' + labelOffsetLeft + ',' + (labelOffsetRow1) + ')');
  
shelteredLabel.append('text')
  .text('Sheltered');
  
var unshelteredLabel = legendPanel.append('g')
  .attr('class','legend legendLabel legendLeft ignorePointer')
  .attr('transform','translate(' + labelOffsetLeft + ',' + (labelOffsetRow2) + ')');
  
unshelteredLabel.append('text') 
  .text('Unsheltered');

var totalLabel = legendPanel.append('g')
  .attr('class','legend legendLabel legendLeft ignorePointer')
  .attr('transform','translate(' + labelOffsetLeft + ',' + (labelOffsetRow3) + ')');

totalLabel.append('text') 
  .text('Total');

var legendIndivs = legendPanel.append('g') 
  .attr('class', 'legend legendIndivs');

legendIndivs.append('text') //text label for individuals
  .attr('class','legend legendLabel legendTop ignorePointer')
  .text('Individuals')
  .attr('transform', 'translate(' + (countsOffsetCol1Header) + ',' + (labelOffsetRow0) + ')');

var legendFamilies = legendPanel.append('g')
  .attr('class', 'legend legendFamilies ignorePointer');

legendFamilies.append('text') //text label for people in families
  .attr('class','legend legendLabel legendTop ignorePointer')
  .text('People in Families')
  .attr('transform', 'translate(' + (countsOffsetCol2Header) + ',' + (labelOffsetRow0) + ')');

var legendYouth = legendPanel.append('g')
  .attr('class', 'legend legendYouth ignorePointer');

legendYouth.append('text') //text label for youth
  .attr('class','legendLabel legendTop ignorePointer')
  .text('Youth (<25)')
  .attr('transform', 'translate(' + (countsOffsetCol3Header) + ',' + (labelOffsetRow0) + ')');

var legendVets = legendPanel.append('g')
  .attr('class', 'legend legendVets ignorePointer');

legendVets.append('text') //text label for vets
  .attr('class','legendLabel legendTop ignorePointer')
  .text('Veterans')
  .attr('transform', 'translate(' + (countsOffsetCol4Header) + ',' + (labelOffsetRow0) + ')');

var legendChronic = legendPanel.append('g')
  .attr('class', 'legend legendChronic ignorePointer');

legendChronic.append('text') //text label for chronic
  .attr('class','legendLabel legendTop ignorePointer')
  .text('Chronically Homeless')
  .attr('transform', 'translate(' + (countsOffsetCol5Header) + ',' + (labelOffsetRow0) + ')');
  

// Data table COUNTS
var legendIndivsShelCount = legendPanel.append('text') //sheltered number
  .attr('class','legend legendCount ignorePointer')
  .text(' ')
  .attr('transform', 'translate(' + (countsOffsetCol1) + ',' + (labelOffsetRow1 + 1) + ')');  
var legendIndivsUnshelCount = legendPanel.append('text') //unsheltered number
  .attr('class','legend legendCount ignorePointer')
  .text(' ')
  .attr('transform', 'translate(' + (countsOffsetCol1) + ',' + (labelOffsetRow2 + 1) + ')');
var legendIndivsTotalCount = legendPanel.append('text') //total number
  .attr('class','legend legendCount ignorePointer')
  .text(' ')
  .attr('transform', 'translate(' + (countsOffsetCol1) + ',' + (labelOffsetRow3 + 1) + ')');

var legendFamiliesShelCount = legendPanel.append('text') //sheltered count
  .attr('class','legend legendCount ignorePointer')
  .text(' ')
  .attr('transform', 'translate(' + (countsOffsetCol2) + ',' + (labelOffsetRow1 + 2) + ')');
var legendFamiliesUnshelCount = legendPanel.append('text') //unsheltered count
  .attr('class','legend legendCount ignorePointer')
  .text(' ')
  .attr('transform', 'translate(' + (countsOffsetCol2) + ',' + (labelOffsetRow2 + 2) + ')');
var legendFamiliesTotalCount = legendPanel.append('text') //total number
  .attr('class','legend legendCount ignorePointer')
  .text(' ')
  .attr('transform', 'translate(' + (countsOffsetCol2) + ',' + (labelOffsetRow3 + 1) + ')');

var legendYouthShelCount = legendPanel.append('text') //sheltered count
  .attr('class','legend legendCount ignorePointer')
  .text(' ')
  .attr('transform', 'translate(' + (countsOffsetCol3) + ',' + (labelOffsetRow1 + 2) + ')');
var legendYouthUnshelCount = legendPanel.append('text') //unsheltered count
  .attr('class','legend legendCount ignorePointer')
  .text(' ')
  .attr('transform', 'translate(' + (countsOffsetCol3) + ',' + (labelOffsetRow2 + 2) + ')');
var legendYouthTotalCount = legendPanel.append('text') //total number
  .attr('class','legend legendCount ignorePointer')
  .text(' ')
  .attr('transform', 'translate(' + (countsOffsetCol3) + ',' + (labelOffsetRow3 + 1) + ')');

var legendVetsShelCount = legendPanel.append('text') //sheltered count
  .attr('class','legend legendCount ignorePointer')
  .text(' ')
  .attr('transform', 'translate(' + (countsOffsetCol4) + ',' + (labelOffsetRow1 + 2) + ')');
var legendVetsUnshelCount = legendPanel.append('text') //unsheltered count
  .attr('class','legend legendCount ignorePointer')
  .text(' ')
  .attr('transform', 'translate(' + (countsOffsetCol4) + ',' + (labelOffsetRow2 + 2) + ')');
var legendVetsTotalCount = legendPanel.append('text') //total number
  .attr('class','legend legendCount ignorePointer')
  .text(' ')
  .attr('transform', 'translate(' + (countsOffsetCol4) + ',' + (labelOffsetRow3 + 1) + ')');

var legendChronicShelCount = legendPanel.append('text') //sheltered count
  .attr('class','legend legendCount ignorePointer')
  .text(' ')
  .attr('transform', 'translate(' + (countsOffsetCol5) + ',' + (labelOffsetRow1 + 2) + ')');
var legendChronicUnshelCount = legendPanel.append('text') //unsheltered count
  .attr('class','legend legendCount ignorePointer')
  .text(' ')
  .attr('transform', 'translate(' + (countsOffsetCol5) + ',' + (labelOffsetRow2 + 2) + ')');
var legendChronicTotalCount = legendPanel.append('text') //total number
  .attr('class','legend legendCount ignorePointer')
  .text(' ')
  .attr('transform', 'translate(' + (countsOffsetCol5) + ',' + (labelOffsetRow3 + 1) + ')');



//////////////////////////////////////////
//AXIS AND SCALE FOR SORTED ROW OF DOTS
//reference: https://bl.ocks.org/cool-Blue/418d3f6d91915602e4fd
//reference: https://bl.ocks.org/mbostock/3885705

var dotsRowPlacement = height-140;
var dotsLegendPlacementV = 64;  //shift down from dots row placement

var xScale = d3.scale.ordinal();

var xAxis = d3.svg.axis()
  .scale(xScale)
  .orient("bottom")
  .tickSize(0);

var dotsRowContainer = svg.append('g')
  .attr('id','dotsRowContainer')
  .attr('width', chartWidth)
  .attr('height', margin.bottom)
  .attr('transform', 'translate(' + (margin.left + 7) + ',' + (dotsRowPlacement) + ')');


//Legend and selections for toggling dot row chart. Dots will be drawn in draw function.
var toggleSelection = 'total'; //default

var toggle = dotsRowContainer.append('g')
  .attr('transform','translate(' + (0) + ',' + (dotsLegendPlacementV) + ')');


toggle.append('g')
  .attr('class','totalToggle')
  .attr('transform','translate(' + (130) + ',' + (dotsLegendPlacementV) + ')'); //change here the position of toggle categories along with boxes
toggle.append('g')
  .attr('class','rateToggle')
  .attr('transform','translate(' + (247) + ',' + (dotsLegendPlacementV) + ')');
toggle.append('g')
  .attr('class','populationToggle')
  .attr('transform','translate(' + (405) + ',' + (dotsLegendPlacementV) + ')');
toggle.append('g')
  .attr('class','unshelteredToggle')
  .attr('transform','translate(' + (545) + ',' + (dotsLegendPlacementV) + ')');


d3.selectAll('.totalToggle')
  .append('text')
  .text('Total Homeless')
  .attr('class','toggle toggleCategory totalToggle');
d3.selectAll('.totalToggle')
  .append('rect')
  .attr("x", -16)
  .attr("y", -9)
  .attr("width", 10)
  .attr("height", 10)
  .attr('class','toggleBox totalToggleBox');

d3.selectAll('.populationToggle')
  .append('text')
  .text('General Population')
  .attr('class','toggle toggleCategory populationToggle');
d3.selectAll('.populationToggle')
  .append('rect')
  .attr("x", -16)
  .attr("y", -9)
  .attr("width", 10)
  .attr("height", 10)
  .attr('class','toggleBox populationToggleBox');

d3.selectAll('.rateToggle')
  .append('text')
  .text('Rate of Homelessness')
  .attr('class','toggle toggleCategory rateToggle');
d3.selectAll('.rateToggle')
  .append('rect')
  .attr("x", -16)
  .attr("y", -9)
  .attr("width", 10)
  .attr("height", 10)
  .attr('class','toggleBox rateToggleBox');
  
d3.selectAll('.unshelteredToggle')
  .append('text')
  .text('Percent Unsheltered')
  .attr('class','toggle toggleCategory rateToggle');
d3.selectAll('.unshelteredToggle')
  .append('rect')
  .attr("x", -16)
  .attr("y", -9)
  .attr("width", 10)
  .attr("height", 10)
  .attr('class','toggleBox unshelteredToggleBox');
  
  
var toggleTitle = toggle.append('g')
  .attr('class','toggleTitle')
  .append('text')
  .text('Change sort:')
  .attr('transform','translate(' + (20) + ',' + (dotsLegendPlacementV) + ')');

var toggleTitle2 = toggle.append('g')
  .attr('class','toggleTitle2')
  .append('text')
  .text('Circle size always reflects total homeless. ')
  .attr('transform','translate(' + (width/2) + ',' + (dotsLegendPlacementV - 87) + ')');


//Full metro name and "SELECTED" text above the map
var warningLineA = 'IS SELECTED. ';
var warningLineB = 'Hover is off. Select another city, or click chart background to clear.';
var warningLineHover = 'Click to retain selection.';
var instructionText = 'Select a metro area';
var metroLabelFromTop = 120,
  selectedWarningsFromTop = 140;

var metroLabelG = entireSVG.append('g')
  .attr('class', 'metroLabel ignorePointer');

var metroLabel = metroLabelG.append('text')
  .text('')
  .attr('transform','translate(' + (chartWidth/2) + ',' + metroLabelFromTop + ')');  //Position of metro name label

var selectedWarningG = entireSVG.append('g')
  .attr('class', 'selectedWarning ignorePointer');

var selectedWarningA = selectedWarningG.append('text')
  .text('')
  .attr('id','selectedWarningA')
  .attr('transform','translate(' + (chartWidth/3 - 8) + ',' + selectedWarningsFromTop + ')');

var selectedWarningB = selectedWarningG.append('text')
  .text('')
  .attr('id','selectedWarningB')
  .attr('transform','translate(' + (chartWidth/3) + ',' + selectedWarningsFromTop + ')');

var selectedWarningHover = selectedWarningG.append('text')
  .text('')  //will be filled in via hover function
  .attr('id','selectedWarningHover')
  .attr('transform','translate(' + (chartWidth/2) + ',' + selectedWarningsFromTop + ')');

var instructionG = entireSVG.append('g')
  .attr('class', 'instructionLabel ignorePointer');
  
var instruction = instructionG.append('text')
  .text(instructionText)
  .attr('transform','translate(' + (chartWidth/2) + ',' + metroLabelFromTop + ')');

////END OF INITIALIZATION ELEMENTS////


/*-------------------------------------------------*/


function drawMap(d) {
  "use strict";

  //draw states (create path elements from json data)
  var states = map.selectAll("path")
    .data(d.features)
    .enter()
    .append("path")
    .attr("d", path);

  states
    .attr('class','states');
}



/*-------------------------------------------------*/


function drawCities(d) {
  "use strict";
  
  d.forEach(function(d) {  //Forcing numeric in order for sorting to work correctly
    d.total = +d.total;
    d.rate = +d.rate;
    d.population = +d.population;
    d.indivshel = +d.indivshel;
    d.indivunshel = +d.indivunshel;
    d.familyshel = +d.familyshel;
    d.familyunshel = +d.familyunshel;
    d.youthshel = +d.youthshel;
    d.youthunshel = +d.youthunshel;
    d.veteranshel = +d.veteranshel;
    d.veteranunshel = +d.veteranunshel;
    d.chronicshel = +d.chronicshel;
    d.chronicunshel = +d.chronicunshel;
  });
  
  //Draw city circles. Define hover and click behavior.
  var cityCircles = mapArea.selectAll('.cityCircles')
    .data(d)
    .enter()
    .append('circle')
    .attr('class',function(d){return 'cityCircles '+'upperChartCircles '+d.city.replace(/\s+/g, '').replace(/\.+/g,'')}) //city name as class, spaces & dots removed
    .attr("cx", function(d) {
      return projection([d.longitude, d.latitude])[0];
    })
    .attr("cy", function(d) {
      return projection([d.longitude, d.latitude])[1];
    })
    .attr("r", function(d) {
      return Math.sqrt(parseInt(d.total) * cityCircleProportion);  //size of circles
    })
    .style("opacity", cityCircleOpacity)
    .on('mouseover', function(d){
      selectedCity = d.city.replace(/\s+/g, '').replace(/\.+/g,''); //used to highlight hovered or selected dots
      if(clickIsActive === 0){cityHover(d);} //test if in hover mode (no clicked selection) then run the cityHover function
    })
    .on('mouseout', function(d){
      selectedCity = 0; 
      cityHoverOff(d); //Will only run if in hover mode (no clicked selection). First line tests clickIsActive.
    })
    .on('click', function(d){
      selectedCity = d.city.replace(/\s+/g, '').replace(/\.+/g,''); 
      clickIsActive = 1; 
      cityHover(d); 
      selectedWarningA.text(warningLineA);
      selectedWarningB.text(warningLineB);
      selectedWarningHover.text('');
    });


  //Draw row of dots chart. Define hover and click behavior to be same as above.
  xScale
  .range(rangeCalculation(d, toggleSelection))
  .domain(domainCalculation(d, toggleSelection));
  
  var axisContainer = dotsRowContainer.append("g")
    .attr("transform", "translate(" + (margin.left+10) + "," + (margin.bottom/2) + ")")
    .call(xAxis);

  d3.selectAll('.tick').selectAll('text').remove();  //remove axis labels
  
  axisContainer.selectAll('.lowerChartCircles')
    .data(d)
    .enter()
    .append('circle')
    .attr('class',function(d){
      return 'cityCircles '+'lowerChartCircles '+d.city.replace(/\s+/g, '').replace(/\.+/g,'');
    })
    .style("opacity", cityCircleOpacity)
    .attr("cx", function(d){return xScale(d.city)})
    .attr("cy", 0)
    .attr("r", function(d) {
      return Math.sqrt(parseInt(d.total) * cityCircleProportion);
    })
    .on('mouseover', function(d){
      selectedCity = d.city.replace(/\s+/g, '').replace(/\.+/g,''); 
      if(clickIsActive === 0){cityHover(d);}
    })
    .on('mouseout', function(d){
      selectedCity = 0; 
      cityHoverOff(d);
    })
    .on('click', function(d){
      selectedCity = d.city.replace(/\s+/g, '').replace(/\.+/g,''); 
      clickIsActive = 1; 
      cityHover(d); 
      selectedWarningA.text(warningLineA);
      selectedWarningB.text(warningLineB);
      selectedWarningHover.text('');
    });


  //Define toggle click behavior for sorting row of dots
  d3.select('.totalToggle')
    .on('click', function(){
      toggleSelection = 'total'; 
      toggleChange(d, toggleSelection);
    });
  d3.select('.populationToggle')
    .on('click', function(){
      toggleSelection = 'population'; 
      toggleChange(d, toggleSelection);
    });
  d3.select('.rateToggle')
    .on('click', function(){
      toggleSelection = 'rate'; 
      toggleChange(d, toggleSelection);
    });
  d3.select('.unshelteredToggle')
    .on('click', function(){
      toggleSelection = 'unsheltered'; 
      toggleChange(d, toggleSelection);
    });

//END OF DRAWCITIES FUNCTION   
}



////////////////////////////////////////////////// 
function cityHover(d) {
  
  //Reset highlight colors of all dots first (otherwise, in selection mode would retain highlighted dots)
  d3.selectAll('.upperChartCircles').style('opacity', cityCircleOpacity);
  d3.selectAll('.lowerChartCircles').style('opacity', cityCircleOpacity);


  //highlight (AKA remove opacity) the dot for the selected city
  var selectedCityClass = "." + selectedCity;

  d3.selectAll(selectedCityClass).style('opacity',1);


  //Set text above the map as metro name label; "click to retain" instruction
  //Hide 'Select a metro area'
  metroLabel
    .text(d.metro);

  selectedWarningHover.text(warningLineHover);
  
  d3.select('.instructionLabel').style('opacity','1e-6');
  d3.select('.instructionLabel').style('display','none');//ADDED BY WHAT ARMY FOR iOS

  //update data table and pie legend counts
  legendIndivsShelCount
    .text(d3.format(',')(d.indivshel));
  legendIndivsUnshelCount
    .text(d3.format(',')(d.indivunshel));
  legendIndivsTotalCount
    .text(d3.format(',')(d.indivshel+d.indivunshel));
    
  legendFamiliesShelCount
    .text(d3.format(',')(d.familyshel));
  legendFamiliesUnshelCount
    .text(d3.format(',')(d.familyunshel));  
  legendFamiliesTotalCount
    .text(d3.format(',')(d.familyshel+d.familyunshel));
    
  legendYouthShelCount
    .text(d3.format(',')(d.youthshel));  
  legendYouthUnshelCount
    .text(d3.format(',')(d.youthunshel));  
  legendYouthTotalCount
    .text(d3.format(',')(d.youthshel+d.youthunshel));
    
  legendVetsShelCount
    .text(d3.format(',')(d.veteranshel));  
  legendVetsUnshelCount
    .text(d3.format(',')(d.veteranunshel));  
  legendVetsTotalCount
    .text(d3.format(',')(d.veteranshel+d.veteranunshel));
        
  legendChronicShelCount
    .text(d3.format(',')(d.chronicshel));  
  legendChronicUnshelCount
    .text(d3.format(',')(d.chronicunshel));  
  legendChronicTotalCount
    .text(d3.format(',')(d.chronicshel+d.chronicunshel));
        
  d3.selectAll('#shelteredPercent')
    .text(function(){return d3.format("0%")((d.indivshel + d.familyshel)/d.total)});
  d3.selectAll('#unshelteredPercent')
    .text(function(){return d3.format("0%")((d.indivunshel + d.familyunshel)/d.total)});


  //Make pie chart legend boxes visible.
  d3.selectAll('.legendRect').style('opacity',.97); 
  
  //Make legend and data table text labels visible.
  d3.selectAll('.legendLabel').style('opacity',.8);
  
  
  //update center circle text title and numbers
  d3.select('#totalHomelessValue')
    .text(d3.format(',')(d.total));
  d3.select('#rateValue')
    .text(d.rate);
  d3.select('#populationValue')
    .text(d3.format(',')(d.population));
  
  
  //CREATE PIE CHART
  var shelCount = d.indivshel + d.familyshel;
  var unshelCount = d.indivunshel + d.familyunshel;
  var counts = [shelCount, unshelCount];
  
  d3.selectAll('.pieSlices').remove();
  
  var pieColors = d3.scale.ordinal(colors);

  var pieRadius = centerCircleRadius+25;
  var arc = d3.svg.arc()
    .innerRadius(pieRadius-30)
    .outerRadius(pieRadius);
  
  var pie = d3.layout.pie() //defines a pie function to convert data to arcpaths
    .value(function(d){return d;})
    .sort(null);
  
  var path = pieG.selectAll('path')
    .data(pie(counts));
  
  path.enter()
    .append('path')
    .attr('d',arc)
    .attr('class','pieSlices')
    .attr('fill', function(d,i){return colors[i]})
    .style('opacity',1e-6);      


  //Make center circle, pie chart, data table counts visible
  d3.selectAll('.centerCircle')
    .style('opacity',1);
  d3.selectAll('.legendCount')
    .style('opacity',1);      
  d3.selectAll('.pieSlices')
    .style('opacity',1);
}



////////////////////////////////////////////////// 
function cityHoverOff(d) {
  if(clickIsActive == 1){return} //if a city had been clicked on, not applied


  //Remove highlight opacity change for this city
  var selectedCityClass = "."+selectedCity;

  d3.selectAll('.upperChartCircles').style('opacity', cityCircleOpacity);
  d3.selectAll('.lowerChartCircles').style('opacity', cityCircleOpacity);


  //Hide center pie, circle, pie legend, and data table elements
  d3.selectAll('.centerCircle')
    .style('opacity',1e-6);
  
  d3.selectAll('.legendCount')
    .style('opacity',1e-6);

  d3.selectAll('.pieSlices')
    .style('opacity',1e-6);

  d3.selectAll('.legendRect')
    .style('opacity',1e-6);

  d3.selectAll('.legendLabel')
    .style('opacity',1e-6);


  //Clear metro name and instructions texts
  metroLabel.text('');
  
  selectedWarningA.text('');
  selectedWarningB.text('');
  selectedWarningHover.text('');
  
  
  //Make visible again the text to 'Select a metro area'
  d3.select('.instructionLabel').style('opacity', 1);
  d3.select('.instructionLabel').style('display', 'block'); //ADDED BY WHAT ARMY FOR iOS
}


 
////////////////////////////////////////////////// 
//TOGGLE SELECTION AND DOTS SORTING FUNCTIONS

//domain and range calculations to space dots based on each other's size even when sorted
function domainCalculation(data, toggleSelection){
  var sortedCases = data.sort(function(a,b){return d3.descending(a.total, b.total);});

  return sortedCases.map(function(d){return d.city;});
}

function rangeCalculation(data, toggleSelection){
  var numberOfCases = 25; //number is known, but could've used: d.map(function(d){return d.total}).length;
  var padding = 4; //space between dots. Keeping dots the same size as map above, this value results in the ideal length for the row of dots
  var rangeList = [];
  
  //this is the default starting range calculation: data sorted by total homeless.
  var sortedCases = data.sort(function(a,b){return b.total - a.total;});
  //Map the radius of each item to an array in the sorted order
  var sortedRadii = sortedCases.map(function(d) {return Math.sqrt(parseInt(d.total) * cityCircleProportion)});

  //Create the custom range list based on the cumulative radii of indices + padding leading up to each item
  var sumSoFar = 0;
  for (i=0; i < numberOfCases; i++){
    if (i===0){
      rangeList.push(sortedRadii[0]);  //first item --> radii added to the range values list
      sumSoFar = (sortedRadii[0]*2 + padding); //width + padding added to cumulative space used so far
    }else{
      rangeList.push(sumSoFar + sortedRadii[i]); //otherwise, the range spot will be the cumulative space used so far + the current radius
      sumSoFar += (sortedRadii[i]*2 + padding);
    }
  }
  
  return(rangeList)
}

function toggleChange(d, toggleSelection){
  //Clear the fill on all toggle boxes
  d3.selectAll('.toggleBox')
    .style('fill','#f3f3f3');

  //Update the custom range scale per measure being sorted.
  //This was established initially via the customRangeScale function, which is similar.
  var numberOfCases = 25;
  var padding = 4;
  var rangeList = [];
  var sortedCases;

  //Create a sort order for selected measure, fill the selected toggle box
  if(toggleSelection == 'total'){
    d3.selectAll('.totalToggleBox').style('fill','#004976');
    sortedCases = d.sort(function(a,b){return b.total - a.total;});
  } 
  else if (toggleSelection =='population'){
    d3.selectAll('.populationToggleBox').style('fill','#004976');
    sortedCases = d.sort(function(a,b){return b.population - a.population});
  } 
  else if (toggleSelection == 'rate'){
    d3.selectAll('.rateToggleBox').style('fill','#004976');
    sortedCases = d.sort(function(a,b){return b.rate - a.rate});
  }
  else if (toggleSelection == 'unsheltered'){
    d3.selectAll('.unshelteredToggleBox').style('fill','#004976');
    sortedCases = d.sort(function(a,b){return ((b.indivunshel + b.familyunshel)/b.total) - ((a.indivunshel + a.familyunshel)/a.total)});
  }
  
  //Map the radius of each item to an array in the sorted order
  var sortedRadii = sortedCases.map(function(d) {return Math.sqrt(parseInt(d.total) * cityCircleProportion)});

  //Create the custom range list based on the cumulative radii of indices + padding leading up to each item
  var sumSoFar = 0;
  for (i=0; i < numberOfCases; i++){
    if (i===0){
      rangeList.push(sortedRadii[0]);
      sumSoFar = (sortedRadii[0]*2 + padding);
    }else{
      rangeList.push(sumSoFar + sortedRadii[i]);
      sumSoFar += (sortedRadii[i]*2 + padding);
    }
  }

  //Reset the x axis range BEFORE transitioning the dimension items (dots) to the new positions (or spacing would be old version)
  xScale.range(rangeList);

  //Update the domain AKA the order of metros based on the new sorting of cases
  var newDomain = xScale.domain(sortedCases.map(function(d) { return d.city; }));
  
  //The selectAll selection, which is an array of circle elements, is RE-ORDERED based on sorting order of new domain positions
  d3.selectAll('.lowerChartCircles')
    .sort(function(a,b){return newDomain(a.city) - newDomain(b.city);});
  
  //Make the cx transition from prior domain position of city to new domain position of city
  d3.selectAll('.lowerChartCircles')
    .transition()
    .duration(900)
    .delay(function(d,i){return i * 50;})  //array of circles re-ordered above, so new indices => left-most items move/arrive first
    .attr("cx", function(d) { return newDomain(d.city); });
  
}



/*-------------------------------------------------*/

/*
  var domain_ = document.domain;
  d3.json("/wp-content/themes/facta/js/msa-map/us-states.json", function(geoData) {
    drawMap(geoData);
  });    


  d3.csv("/wp-content/themes/facta/js/msa-map/MSAdata.csv", function(citiesData) {
    drawCities(citiesData);
  });

  
},jQuery());
*/


d3.json("../../../yml_to_json/us-states.json", function(error, geoData) {
  if (error) throw error;
  
  drawMap(geoData);
});    


d3.csv("../../../yml_to_csv/MSAdata.csv", function(error, citiesData) {
  if (error) throw error;

  console.log(citiesData);
  
  drawCities(citiesData);
});


 





