"use strict";

var width = 800,
    height = 600
    

//////////////// CONTROL PANEL/OPTIONS SETUP ///////////////
d3.select('#missionControl').style('max-width', width);


/////// DEFAULTS FOR CONTROL PARAMETERS ////////
document.getElementById('numUnsh').value = 100;
document.getElementById('numEs').value = 100;
document.getElementById('numTh').value = 100;
document.getElementById('numRrh').value = 100;
document.getElementById('numPsh').value = 100;

document.getElementById('rrhSuccess').value = .85;
document.getElementById('rrhAvgStay').value = 18;

document.getElementById('pshNegTurnover').value = .15;
document.getElementById('pshMovingOn').value = .05;

document.getElementById('thSuccess').value = .75;
document.getElementById('thAvgStay').value = 12;

document.getElementById('esAvgStay').value = 6; //for people not exiting to homeless services
document.getElementById('esSelfResolve').value = .05; //KNOWN To have gone to indep housing; otherwise assumed to unsh

document.getElementById('unshSelfResolve').value = .05;

document.getElementById('indHToUnsh').value = .15;

var defaultSpeed = 2; // half week per second
var defaultPctEsFromUnsh = 80;
var defaultPctThFromUnsh = 20;
var defaultPctRrhFromUnsh = 10;
var defaultPctRrhFromEs = 60;
var defaultPositionRrhFromEs = defaultPctRrhFromEs + defaultPctRrhFromUnsh;
var defaultPctPshFromUnsh = 10;
var defaultPctPshFromEs = 80;
var defaultPositionPshFromEs = defaultPctPshFromEs + defaultPctPshFromUnsh;


////////// SLIDERS //////////
/////Speed slider/////
//locate slider div
var sliderSpeed = document.getElementById('sliderSpeed');

//construct slider
noUiSlider.create(sliderSpeed, {
	start: [ defaultSpeed ],
	step: 1,
	range: {
	  'min': 1,
	  'max': 4
	},
  pips: {
		mode: 'count',
    values: 4,
    density: 33,
    step: true
  }
});

//format markers
d3.select('#sliderSpeed').select('.noUi-pips').selectAll('.noUi-value')
  .style('opacity', 0);
d3.select('#sliderSpeed').selectAll('.noUi-marker')
  .style('background','rgb(94, 133, 164)');

//update the labels on change
var speedVals = {1:0.0333, 2:0.125, 3:0.25, 4:0.5, 5:1, 6:2, 7:3};
var speedLabels = {1:'1 day per second (slow)', 2:'1/2 week per second', 3:'1 week per second', 4:'1/2 month per second', 5:'1 month per second', 6:'2 months per second', 7:'3 months per second (quite fast)'};

sliderSpeed.noUiSlider.on('update', function(values){
  d3.select('#sliderSpeedSelection')
    .html(speedLabels[parseInt(values)])
  });
  

/////Into ES slider/////
//locate the slider div
var sliderIntoEs = document.getElementById('sliderIntoEs');

//construct the slider
noUiSlider.create(sliderIntoEs, {
	start: [ defaultPctEsFromUnsh ],
	step: 1,
	range: {
	  'min': [ 0 ],
	  'max': [ 100 ]
	},
  pips: {
		mode: 'count',
    values: 5,
    density: 10,
    step: true
  }
});

//format the slider markers
d3.select('#sliderIntoEs').select('.noUi-pips').selectAll('.noUi-value')
  .each(function() { 
    d3.select(this)
      .html(d3.select(this).attr('data-value') + '%')
});
  
//starting values
var pctToEsFromUnsh = defaultPctEsFromUnsh;
var pctToEsFromIndH = 100 - pctToEsFromUnsh;

//reassigning variables and changing values on slide
sliderIntoEs.noUiSlider.on('update', function(values){
  pctToEsFromUnsh = parseInt(values);
  pctToEsFromIndH = 100 - pctToEsFromUnsh;  
  
  d3.select('#sliderIntoEsFromUnsh')
    .html(parseInt(values) + '%')
  d3.select('#sliderIntoEsFromIndH')
    .html((100 - parseInt(values)) + '%')
  });
 

/////Into TH slider/////
//locate the slider div
var sliderIntoTh = document.getElementById('sliderIntoTh');

//construct the slider
noUiSlider.create(sliderIntoTh, {
	start: [ defaultPctThFromUnsh ],
	step: 1,
	range: {
	  'min': [ 0 ],
	  'max': [ 100 ]
	},
  pips: {
		mode: 'count',
    values: 5,
    density: 10,
    step: true
  }
});

//format the slider marks
d3.select('#sliderIntoTh').select('.noUi-pips').selectAll('.noUi-value')
  .each(function() { 
    d3.select(this)
      .html(d3.select(this).attr('data-value') + '%')
  });

//starting values
var pctToThFromUnsh = defaultPctThFromUnsh;
var pctToThFromEs = 100 - pctToThFromUnsh;

//reassigning variables and changing values on slide
sliderIntoTh.noUiSlider.on('update', function(values){
  pctToThFromUnsh = parseInt(values);
  pctToThFromEs = 100 - pctToThFromUnsh;
  
  d3.select('#sliderIntoThFromUnsh')
    .html(parseInt(values) + '%')
  d3.select('#sliderIntoThFromEs')
    .html((100 - parseInt(values)) + '%')
  });


/////Into RRH slider///// 
//locate the slider div
var sliderIntoEs = document.getElementById('sliderIntoRrh');

//construct the slider
noUiSlider.create(sliderIntoRrh, {
	start: [ defaultPctRrhFromUnsh, defaultPositionRrhFromEs ],
	step: 1,
	range: {
	  'min': [ 0 ],
	  'max': [ 100 ]
	},
  pips: {
		mode: 'count',
    values: 5,
    density: 10,
    step: true
  }
});


//format the slider marks
d3.select('#sliderIntoRrh').select('.noUi-pips').selectAll('.noUi-value')
  .each(function() { 
    d3.select(this)
      .html(d3.select(this).attr('data-value') + '%')
  });

//starting values
var rrhLeftValue = defaultPctRrhFromUnsh, 
    rrhMiddleValue = defaultPositionRrhFromEs, 
    rrhRightValue = 100 - defaultPctRrhFromUnsh - defaultPctRrhFromEs;

//reassigning variables and changing values on slide
sliderIntoRrh.noUiSlider.on('update', function(values, handle){
  rrhLeftValue = parseInt(values[0]);
  rrhMiddleValue = parseInt(values[1]) - parseInt(values[0]);
  rrhRightValue = 100 - rrhMiddleValue - rrhLeftValue;
  
  d3.select('#sliderIntoRrhFromUnsh')
    .html(rrhLeftValue + '%');
      
  d3.select('#sliderIntoRrhFromEs')
    .html(rrhMiddleValue + '%');
   
  d3.select('#sliderIntoRrhFromTh')
    .html(rrhRightValue + '%');
});


/////Into PSH slider///// 
//locate the slider div
var sliderIntoPsh = document.getElementById('sliderIntoPsh');

//construct the slider
noUiSlider.create(sliderIntoPsh, {
	start: [ defaultPctPshFromUnsh, defaultPositionPshFromEs ],
	step: 1,
	range: {
	  'min': [ 0 ],
	  'max': [ 100 ]
	},
  pips: {
		mode: 'count',
    values: 5,
    density: 10,
    step: true
  }
});

//format the slider marks
d3.select('#sliderIntoPsh').select('.noUi-pips').selectAll('.noUi-value')
  .each(function() { 
    d3.select(this)
      .html(d3.select(this).attr('data-value') + '%')
  });

//starting values
var pshLeftValue = defaultPctPshFromUnsh, 
    pshMiddleValue = defaultPositionPshFromEs, 
    pshRightValue = 100 - defaultPctPshFromUnsh - defaultPctPshFromEs;

//reassigning variables and changing values on slide
sliderIntoPsh.noUiSlider.on('update', function(values, handle){
  pshLeftValue = parseInt(values[0]);
  pshMiddleValue = parseInt(values[1]) - parseInt(values[0]);
  pshRightValue = 100 - pshMiddleValue - pshLeftValue;
  
  d3.select('#sliderIntoPshFromUnsh')
    .html(pshLeftValue + '%');
      
  d3.select('#sliderIntoPshFromEs')
    .html(pshMiddleValue + '%');
   
  d3.select('#sliderIntoPshFromTh')
    .html(pshRightValue + '%');
});


 
// All slider handles style
var handleDimensions = {'height':22, 'width':22};
d3.selectAll('.noUi-handle')
  .style('background', '#aec2d1')
  .style('width', handleDimensions.width + 'px')
  .style('height', handleDimensions.height + 'px')
  .style('border', 'none')
  .style('border-radius', '35%')
  .style('box-shadow', '-4px 3px 3px #6c6c6c');
  
// All slider pip labels style
d3.selectAll('.sliderDiv').selectAll('.noUi-value')
  .style('font-size', 12 + 'px')
  .style('margin-top', 5 + 'px');




//////////////////////////////////////////
/////////////// SVG SETUP ////////////////
var svg = d3.select('div.chartcontainer')
  .append('svg')
  .attr('class','svg')
  .attr('id','svg')
  .attr('width', width)
  .attr('height', height);

var defs = svg.append('defs');
var gradient = defs.append('linearGradient')
  .attr('id', 'leftRectGradient')
  .attr('x1','0%')
  .attr('y1','0%')
  .attr('x2','100%')
  .attr('y2','100%')
  .attr('gradientTransform','rotate(-65)');
gradient.append('stop')
  .attr('offset','0%')
  .style('stop-color','#e7b586')
  .style('stop-opacity', 1);
gradient.append('stop')
  .attr('offset','50%')
  .style('stop-color','#f1d3b7')
  .style('stop-opacity', 1);
  
var rectangle2 = svg.append('g')
  .append('rect')
  .attr('id','rightRectangle')
  .attr('class','backgroundRectangle')
  .attr('width',width/2)
  .attr('height',height)
  .attr('x',width/2)
  .attr('y',0);

var rectangle1 = svg.append('g')
  .append('rect')
  .attr('id','leftRectangle')
  .attr('class','backgroundRectangle')
  .attr('width', width * 0.6)
  .attr('height', height)
  .attr('x',0)
  .attr('y',0);

//Dot sizes and padding
function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

var minRadiusAdjustment = 850, //was 1200
    maxRadiusAdjustment = 900; //was 1500
var nodePadding = 1.5;


//Groups and positions
var unshelX = width*0.35,
    unshelY = height*0.2,
    esX = width*0.33,
    esY = height*0.5,
    thX = width*0.47,
    thY = height*0.76,
    rrhX = width*0.72,
    rrhY = height*0.8,
    pshX = width*0.87,
    pshY = height*0.6,
    indHX = width*0.75,
    indHY = height*0.04;
var xCenters = [unshelX, esX, thX, rrhX, pshX, indHX];
var yCenters = [unshelY, esY, thY, rrhY, pshY, indHY];

var colors = ['#886488','#CE7E81','#F3A57E','#D3CA93','#5E85A4','grey'];

var classToNum = {'unsh':0, 'es':1, 'th':2, 'rrh':3,'psh':4,'indH':5};
var classToColor = {'unsh':colors[0], 'es':colors[1], 'th':colors[2], 'rrh':colors[3],'psh':colors[4],'indH':colors[5]};


/////////// TEXT ELEMENTS ////////////
//homeless count counter
var homelessCountG = svg.append('g')
  .attr('transform','translate(' + (width*0.39) +',' + (height*0.05) + ')');

//months elapsed timer
var monthsElapsedG = svg.append('g')
  .attr('transform','translate(' + (50) +',' + (height - 35) + ')');

var monthsElapsedNum = monthsElapsedG.append('text')
  .attr('id','monthsElapsedNum')
  .attr('class','monthsElapsedGroup')
  .attr('x', 0)
  .attr('y', 0)
  .style('opacity', 0)
  .text('0'); 
  
var elapsedLabel = svg.append('text')
  .html('months')
  .attr('class','elapsedLabel monthsElapsedGroup')
  .style('opacity', 0)
  .attr('transform','translate(' + 10 + ',' + (height - 90) + ')');

var elapsedLabel2 = svg.append('text')
  .html('elapsed:')
  .attr('class','elapsedLabel monthsElapsedGroup')
  .style('opacity', 0)
  .attr('transform','translate(' + 10 + ',' + (height - 70) + ')');


//////////// GROUPS OF DOTS /////////////
var xOffsetFromGroupCenter = -10,
    yOffsetFromGroupCenter = 80,
    yOffsetFromGroupCenterLine2 = yOffsetFromGroupCenter + 17,
    yOffsetFromGroupCenterLine3 = yOffsetFromGroupCenterLine2 + 17,
    xOffsetIndH = 80,
    yOffsetIndH = 90,
    yOffsetIndHLine2 = yOffsetIndH + 17,
    yOffsetIndHLine3 = yOffsetIndHLine2 + 17;

var unshLabelG = svg.append('g')
  .attr('transform','translate(' + unshelX + ',' + unshelY + ')');
var unshLabel = unshLabelG.append('text')
  .attr('id','unshLabel')
  .attr('class','groupLabels')
  .attr('x',xOffsetFromGroupCenter)
  .attr('y',yOffsetFromGroupCenter)
  .text('unsheltered');

 
var esLabelG = svg.append('g')
  .attr('transform','translate(' + esX + ',' + esY + ')');
var esLabel = esLabelG.append('text')
  .attr('id','esLabel')
  .attr('class','groupLabels')
  .attr('x',xOffsetFromGroupCenter)
  .attr('y',yOffsetFromGroupCenter)
  .text('emergency');
var esLabel2 = esLabelG.append('text')
  .attr('id','esLabel2')
  .attr('class','groupLabels')
  .attr('x',xOffsetFromGroupCenter)
  .attr('y',yOffsetFromGroupCenterLine2)
  .text('shelter');

var thLabelG = svg.append('g')
  .attr('transform','translate(' + thX + ',' + thY + ')');
var thLabel = thLabelG.append('text')
  .attr('id','thLabel')
  .attr('class','groupLabels')
  .attr('x',xOffsetFromGroupCenter)
  .attr('y',yOffsetFromGroupCenter)
  .text('transitional');
var thLabel2 = thLabelG.append('text')
  .attr('id','thLabel2')
  .attr('class','groupLabels')
  .attr('x',xOffsetFromGroupCenter)
  .attr('y',yOffsetFromGroupCenterLine2)
  .text('housing');

var rrhLabelG = svg.append('g')
  .attr('transform','translate(' + rrhX + ',' + rrhY + ')');
var rrhLabel = rrhLabelG.append('text')
  .attr('id','rrhLabel')
  .attr('class','groupLabels')
  .attr('x',0)
  .attr('y',yOffsetFromGroupCenter)
  .text('rapid');
var rrhLabel2 = rrhLabelG.append('text')
  .attr('id','rrhLabel2')
  .attr('class','groupLabels')
  .attr('x',0)
  .attr('y',yOffsetFromGroupCenterLine2)
  .text('re-housing');

var pshLabelG = svg.append('g')
  .attr('transform','translate(' + pshX + ',' + pshY + ')');
var pshLabel = pshLabelG.append('text')
  .attr('id','pshLabel')
  .attr('class','groupLabels')
  .attr('x',0)
  .attr('y',yOffsetFromGroupCenter)
  .text('permanent');
var pshLabel2 = pshLabelG.append('text')
  .attr('id','pshLabel2')
  .attr('class','groupLabels')
  .attr('x',0)
  .attr('y',yOffsetFromGroupCenterLine2)
  .text('supportive');
var pshLabel3 = pshLabelG.append('text')
  .attr('id','pshLabel3')
  .attr('class','groupLabels')
  .attr('x',0)
  .attr('y',yOffsetFromGroupCenterLine3)
  .text('housing');

var indHLabelG = svg.append('g')
  .attr('transform','translate(' + indHX + ',' + indHY + ')');
var indHLabel = indHLabelG.append('text')
  .attr('id','indHLabel')
  .attr('class','groupLabels')
  .attr('x',xOffsetIndH)
  .attr('y',yOffsetIndH)
  .text('housed');
var indHLabel2 = indHLabelG.append('text')
  .attr('id','indHLabel2')
  .attr('class','groupLabels')
  .attr('x',xOffsetIndH)
  .attr('y',yOffsetIndHLine2)
  .text('elsewhere');
var indHLabel3 = indHLabelG.append('text')
  .attr('id','indHLabel3')
  .attr('class','groupLabels')
  .attr('x',xOffsetIndH)
  .attr('y',yOffsetIndHLine3)
  .text('(community)');
  
//homeless and housed labels
var homelessLabelG = svg.append('g')
  .attr('transform','translate(' + (width * 0.6) +',' + (height / 2) + ')');
var homelessLabel = homelessLabelG.append('text')
  .attr('id','homelessLabel')
  .attr('class','homelessLabels')
  .attr('x',height*.06)
  .attr('y',-15)
  .attr('transform','rotate(-90)')
  .text('HOMELESS');
var housedLabelG = svg.append('g')
  .attr('transform','translate(' + (width / 2) +',' + (height / 2) + ')');
var housedLabel = housedLabelG.append('text')
  .attr('id','housedLabel')
  .attr('class','homelessLabels')
  .attr('x',height*.06)
  .attr('y',-93)
  .attr('transform','rotate(90)')
  .text('HOUSED');

//TRIANGLES
var triangleSizeToHomeless = 1000; //default for initial view
var triangleSizeToHoused = 1000; //default for initial view

var triangleToHomeless = d3.symbol()
            .type(d3.symbolTriangle)
            .size(triangleSizeToHomeless);
            
var triangleToHoused = d3.symbol()
            .type(d3.symbolTriangle)
            .size(triangleSizeToHoused);

homelessLabelG.append("path")
            .attr("d", triangleToHomeless)
            .attr("fill", '#f1d3b7')
            .attr('transform','translate(' + 27 + ',' + 0 + ') rotate(90)');            
            //.attr('transform','translate(' + (width*.015 + Math.sqrt(triangleSizeToHomeless / (Math.sqrt(3) * 3))) + ',' + 0 + ') rotate(90)');

housedLabelG.append("path")
            .attr("d", triangleToHoused)
            .attr("fill", '#fefbf8')
            .attr('transform','translate(' + 52 + ',' + 0 + ') rotate(-90)');
            //.attr('transform','translate(' + (-width*.015 - Math.sqrt(triangleSizeToHoused / (Math.sqrt(3) * 3))) + ',' + 0 + ') rotate(-90)');

            
            

var rrhAvgStay, rrhSuccessRate, rrhRecidivismRate, percentsOutOfRrh, percentsToRrhFrom, pshMovingOnRate, pshRecidivismRate, percentsToPshFrom, thAvgStay, thSuccessRate, thRecidivismRate, percentsOutOfTh, percentsToThFrom, esAvgStay, esSelfResolve, esToUnshRate, percentsOutOfEs, percentsToEsFrom, unshSelfResolve, indHToUnsh;



var monthsElapsed = 0;
var restartCount = -1;
var compareToRestartCount = 0;
var monthsPerSecond = speedVals[parseInt(sliderSpeed.noUiSlider.get())];

var t;

var playButtonG = svg.append('g')
  .attr('transform','translate(' + (0) + ',' + (0) + ')');
var playButton = playButtonG.append('text')
  .attr('id','playButton')
  .attr('x', width * 0.35)
  .attr('y', height * 0.54)
  .attr('fill',colors[0])
  .attr('font-size','70px') //update to be responsive
  .attr('text-anchor','middle')
  .attr('font-style','italic')
  .attr('font-family','sans-serif')
  .attr('font-weight','bold')
  .text('S')
  .attr('cursor','pointer');

playButton.append("svg:tspan").style("fill",colors[1]).text("T"); //see https://groups.google.com/forum/#!topic/d3-js/d2ceKITfTx0
playButton.append("svg:tspan").style("fill",colors[2]).text("A");
playButton.append("svg:tspan").style("fill",colors[3]).text("R");
playButton.append("svg:tspan").style("fill",colors[4]).text("T");



playButton
  .on('click',function(){
    t = d3.now();
    restartCount = restartCount + 1;
    //console.log("restarted",restartCount,"times");
    if (restartCount <= 0){
//      startTimers(); //start all the timers only on the first click of play
      startSimulation();
      startTimers();
      shiftPlayButton();
    } else {
      startSimulation();
    };
  });

function shiftPlayButton(){
  var playB = d3.select('#playButton');
  playB
    .transition(500)
    .attr('x',(width - 10))
    .attr('y',(30))
    .style('fill','rgb(206, 126, 129)')
    .style('text-anchor','end')
    .style('font-style','normal')
    .style('font-size','20px');  //update to be responsive
  playB
    .text('RESTART');    
}


//VARIABLES TO BE DEFINED UPON PLAY
var numUnshel,numES,numTH,numRRH,numPSH,numAllBeds,numIndHousing,numAllNodes,numNodesToDisplay,dotsToDisplayProportion,oneDotEquals,
numUnshelToDisplay,numESToDisplay,numTHToDisplay,numRRHToDisplay,numPSHToDisplay;

var unshDotsOnScreen,
    esDotsOnScreen,
    thDotsOnScreen,
    rrhDotsOnScreen,
    pshDotsOnScreen,
    indHDotsOnScreen,
    rrhOnePersonLeavesEvery,
    pshOnePersonMovesOnEvery,
    pshOnePersonReturnsEvery,
    thOnePersonLeavesEvery,
    esOnePersonLeavesEvery, //not to homeless svcs programs only
    unshOnePersonResolvesEvery,
    indHOnePersonUnshEvery;

//SET UP THE SIMULATION
var forceStrength = 0.1;
function charge(d) { //to base on size, see https://github.com/vlandham/bubble_chart_v4/blob/master/src/bubble_chart.js
  return -3
}

var simulation = d3.forceSimulation() //nodes not passed yet (created below)
  .velocityDecay(0.2)
  //.alphaDecay(0.0001)  //how quickly simulation stabilizes (careful not to stabilize before it positions, but on the other hand not to stay active forever readjusting)
  .force('x',d3.forceX().x(function(d){return xCenters[d.location];}).strength(forceStrength))
  .force('y',d3.forceY().y(function(d){return yCenters[d.location];}).strength(forceStrength))
  .force('charge',d3.forceManyBody().strength(charge)) //+ attracts, - repels
  .force('collision',d3.forceCollide().radius(function(d){return d.r + nodePadding})) //must specify radius of elements, and included a little padding
  .on('tick',ticked);

simulation.stop(); //hold off on running it (automatic) until nodes are identified


//DEFINE NODES
var nodes = d3.range(30) //temp number for initializing simulation until press play
  .map(function(d,i){return {
    location: setOriginalLocation(i),
    r: randomIntFromInterval(1/numNodesToDisplay*minRadiusAdjustment,1/numNodesToDisplay*maxRadiusAdjustment)
}});

function setOriginalLocation(i){  //assigns a value 0 to 5 based on index position
  if (i < numUnshelToDisplay){return 0}
  else if (i < numUnshelToDisplay + numESToDisplay){return 1}
  else if (i < numUnshelToDisplay + numESToDisplay + numTHToDisplay){return 2}
  else if (i < numUnshelToDisplay + numESToDisplay + numTHToDisplay + numRRHToDisplay){return 3}
  else if (i < numUnshelToDisplay + numESToDisplay + numTHToDisplay + numRRHToDisplay + numPSHToDisplay) {return 4}
  else {return 5}
}   
function setOriginalClass(d){
  if (d.location === 0){return 'unsh'}
  else if (d.location === 1){return 'es'}
  else if (d.location === 2){return 'th'}
  else if (d.location === 3){return 'rrh'}
  else if (d.location === 4) {return 'psh'}
  else {return 'indH'}
}   

//Set up the dots -- will be redrawn on play, but this part is necessary here to work
var dots = d3.select('.svg')
    .selectAll('circle')
    .data(nodes,function(d){return d.location});

var dotsE;


simulation.nodes(nodes);
simulation.alpha(0.2).restart();


function ticked(){
  dots
      .attr('cx', function (d) { return d.x; })
      .attr('cy', function (d) { return d.y; });
}

function dragstarted() {
  if (!d3.event.active) simulation.alphaTarget(0.1).restart();
  d3.event.subject.fx = d3.event.subject.x;
  d3.event.subject.fy = d3.event.subject.y;
}

function dragged() {
  d3.event.subject.fx = d3.event.x;
  d3.event.subject.fy = d3.event.y;
}

function dragended() {
  if (!d3.event.active) simulation.alphaTarget(0.1);
  d3.event.subject.fx = null;
  d3.event.subject.fy = null;
}


var dotSpeed = 0.05;
var initialDelay = t;

function moveIt(fromClass,toClass){
  var className = "."+fromClass;
  var totalInClass = d3.selectAll(className).size();
  var randomlySelected = getRandomInt(0,totalInClass-1);
  //console.log(randomlySelected,'of',totalInClass)
  try{
    d3.selectAll(className)
      .filter(function(d,i){return i === randomlySelected}) //get random indexed item to not pull the latest added (just moved)
      .attr('fill',classToColor[toClass])
      .attr('class',toClass)
      .datum()['location']=classToNum[toClass];
  }
  catch(err){
    return;
  }
  simulation.force('x',d3.forceX().x(function(d){return xCenters[d.location];}).strength(forceStrength)); //refresh x and y locations
  simulation.force('y',d3.forceY().y(function(d){return yCenters[d.location];}).strength(forceStrength));
  simulation.alphaTarget(dotSpeed).restart();    
  //console.log(fromClass, totalInClass)
}


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}




/////////// BAR CHART BASICS //////////
var startLineHeight = 8, startLineWidth = 65;
var startLine = svg.append('rect')
  .attr('width', startLineWidth)
  .attr('height', startLineHeight)
  .attr('fill', '#fefbf8') //#f9f9f9
  .style('opacity', 0);
    
var barLeftMargin = 110, barTopMargin = 40, barBottomMargin = 20;
var barWidth = 35;

var barChartG = svg.append('g')
  .attr('id', 'barChartG')
  .attr('transform', 'translate(' + barLeftMargin + ',' + 0 + ')');

var xScale = d3.scaleBand()
  .rangeRound([barLeftMargin, width - barLeftMargin - barWidth])
  .domain(['only'])
  .padding(0.1);

var yScale = d3.scaleLinear()
  .rangeRound([height - barBottomMargin, barTopMargin]);

var barColors = {'es':colors[1], 'unshel':colors[0], 'th':colors[2]};

var barStackGenerator = d3.stack()
  .keys(['th', 'es', 'unshel']) //the order in which the stack is stacked
  .order(d3.stackOrderNone)
  .offset(d3.stackOffsetNone);

var numHmlsDots, numEsDots, numUnshDots, numThDots;
var startHmls, domainMax, yAxisG, barData, barStackSeries, barsGroup, barsGs, bars;


// LABELS
var startLineLabelsG = svg.append('g')
  .attr('transform','translate(' + 10 + ',' + (height/2 + 21) + ')')
  .attr('class','startLineLabels')
  .style('opacity', 0);

startLineLabelsG.append('text')
  .html('@ start:')
  .attr('transform','translate(' + 0 + ',' + (-8) + ')');
var startLineLabelCount = startLineLabelsG.append('text')
  .html(startHmls)
  .style('font-size','24px')
  .style('font-weight','bold')
  .attr('transform','translate(' + 0 + ',' + (20) + ')');
startLineLabelsG.append('text')
  .html('people')
  .attr('transform','translate(' + 0 + ',' + (40) + ')');
startLineLabelsG.append('text')
  .html('homeless')
  .attr('transform','translate(' + 0 + ',' + (55) + ')');


var legendText1 = svg.append('text')
  .html('one')
  .attr('class', 'legendText legend')
  .attr('transform','translate(' + 10 + ',' + (140) + ')');
  
var legendText2 = svg.append('text')
  .html('=')
  .attr('class', 'legendText legend')
  .attr('transform','translate(' + 73 + ',' + (140) + ')');
    
var legendText3 = svg.append('text')
  .html('approx.')
  .attr('class', 'legendText legend')
  .attr('transform','translate(' + 10 + ',' + (160) + ')'); 

var legendText4 = svg.append('text')
  .html('###')
  .attr('id', 'legendNum')
  .attr('class', 'legendText legend')
  .attr('transform','translate(' + 10 + ',' + (185) + ')'); 
  
//ICONS

var svgX = document.getElementById('svg').getBoundingClientRect().x;
var svgY = document.getElementById('svg').getBoundingClientRect().y;
var chartContainerX = document.getElementById('chartcontainer').getBoundingClientRect().x;
var chartContainerY = document.getElementById('chartcontainer').getBoundingClientRect().y;

var svgToContainerOffsetX = svgX - chartContainerX; //need to account for svg offset within the div

var peopleFromLeft = 0;

var personIcon = d3.select('#chartcontainer')
  .append('text')
  .attr('class','fas fa-male personIcon legend')
  .style('left', svgToContainerOffsetX + peopleFromLeft + 'px')
  .style('top', 165 + 'px');

var personIcon2 = d3.select('#chartcontainer')
  .append('text')
  .attr('class','fas fa-female personIcon legend')
  .style('left', svgToContainerOffsetX + peopleFromLeft + 'px')
  .style('top', 165 + 'px');
  
var circleIcon = d3.select('#chartcontainer')
  .append('text')
  .attr('class','fas fa-circle circleIcon legend')
  .style('left', svgToContainerOffsetX + 50 + 'px')
  .style('top', 128 + 'px');

d3.selectAll('.legend')
  .style('opacity', 0);
  
  
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
function startSimulation(){  //Get parameter values

  //////////// GET PARAMETER VALUES //////////////
  //SPEED
  monthsPerSecond = speedVals[parseInt(sliderSpeed.noUiSlider.get())];
 
  //RRH
  rrhAvgStay = document.getElementById('rrhAvgStay').value * (1000/monthsPerSecond); //rate of exiting RRH (successful or not). Months in dropdown converted to ms (1 second = 1 month)
  rrhSuccessRate = document.getElementById('rrhSuccess').value * 100;
  rrhRecidivismRate = 100 - rrhSuccessRate;
  percentsOutOfRrh = {'indH':rrhSuccessRate, 'unsh':rrhRecidivismRate};
  percentsToRrhFrom = {'unsh':rrhLeftValue,'es':rrhMiddleValue,'th':rrhRightValue};  //triggers these

  //PSH
  pshMovingOnRate = document.getElementById('pshMovingOn').value;
  pshRecidivismRate = document.getElementById('pshNegTurnover').value;
  percentsToPshFrom = {'unsh':pshLeftValue,'es':pshMiddleValue,'th':pshRightValue}; //triggers these. Default very few coming from TH


  //TH
  thAvgStay = document.getElementById('thAvgStay').value * (1000/monthsPerSecond); //rate of exiting TH (successful or not)
  thSuccessRate = document.getElementById('thSuccess').value * 100;
  thRecidivismRate = 100 - thSuccessRate;
  percentsOutOfTh = {'indH':thSuccessRate, 'unsh':thRecidivismRate};
  percentsToThFrom = {'unsh':pctToThFromUnsh,'es':pctToThFromEs};  //triggers these

  //Flow into ES is currently limited (from PSH, RRH, INDH, TH) unless create logic for if ES full or not. AKA assume ES is full.
  //ES
  esAvgStay = document.getElementById('esAvgStay').value * (1000/monthsPerSecond); //rate of exiting ES to non-homeless srvs program
  esSelfResolve = document.getElementById('esSelfResolve').value * 100;
  esToUnshRate = 100 - esSelfResolve;
  percentsOutOfEs = {'indH':esSelfResolve, 'unsh':esToUnshRate};
  percentsToEsFrom = {'unsh':pctToEsFromUnsh,'indH':pctToEsFromIndH}; //triggers these
  //currently not allowing from TH, PSH, or RRH---don't want to cause a pull out of those for a vacancy here.
  //forcing a pull from independent housing when ES has a vacancy is suggestive of the fact that not everyone comes from unsh into shelter, and that having more shelter may result in more people entering the system

  //UNSH
  unshSelfResolve = document.getElementById('unshSelfResolve').value; //no trigger. This is SELF RESOLVE from homelessness

  //INDEPENDENT HOUSING TO NEW UNSH (ESTIMATE)
  indHToUnsh = document.getElementById('indHToUnsh').value;

  
  
  
  
  //clear bar chart if already exists (on restart)
  d3.select('#barChartG').selectAll('*').remove();
 
  //Flow into ES is currently limited (from PSH, RRH, INDH, TH) unless create logic for if ES full or not. AKA assume ES is full.
  
  //RRH
  rrhAvgStay = document.getElementById('rrhAvgStay').value * (1000 / monthsPerSecond); //rate of exiting RRH (successful or not). Months in dropdown converted to ms per monthsPerSecond
  rrhSuccessRate = document.getElementById('rrhSuccess').value * 100;
  rrhRecidivismRate = 100 - rrhSuccessRate;
  percentsOutOfRrh = {'indH':rrhSuccessRate, 'unsh':rrhRecidivismRate};
  percentsToRrhFrom = {'unsh':rrhLeftValue,'es':rrhMiddleValue,'th':rrhRightValue}; 


  //PSH
  pshMovingOnRate = document.getElementById('pshMovingOn').value;
  pshRecidivismRate = document.getElementById('pshNegTurnover').value;
  percentsToPshFrom = {'unsh':pshLeftValue,'es':pshMiddleValue,'th':pshRightValue}; 


  //TH
  thAvgStay = document.getElementById('thAvgStay').value * (1000/monthsPerSecond); //rate of exiting TH (successful or not)
  thSuccessRate = document.getElementById('thSuccess').value * 100;
  thRecidivismRate = 100 - thSuccessRate;
  percentsOutOfTh = {'indH':thSuccessRate, 'unsh':thRecidivismRate};
  percentsToThFrom = {'unsh':pctToThFromUnsh,'es':pctToThFromEs}; 
  
  
  //ES
  esAvgStay = document.getElementById('esAvgStay').value * (1000 / monthsPerSecond); //rate of exiting ES to non-homeless srvs program
  esSelfResolve = document.getElementById('esSelfResolve').value * 100;
  esToUnshRate = 100 - esSelfResolve;
  percentsOutOfEs = {'indH':esSelfResolve, 'unsh':esToUnshRate};
  percentsToEsFrom = {'unsh':pctToEsFromUnsh,'indH':pctToEsFromIndH}; 
  //currently not allowing from TH, PSH, or RRH---don't want to cause a pull out of those for a vacancy here.
  //forcing a pull from independent housing when ES has a vacancy is suggestive of the fact that not everyone comes from unsh into shelter, and that having more shelter may result in more people entering the system
  

  //UNSH
  unshSelfResolve = document.getElementById('unshSelfResolve').value; //no trigger. This is SELF RESOLVE from homelessness

  
  //INDEPENDENT HOUSING TO NEW UNSH (ESTIMATE)
  indHToUnsh = document.getElementById('indHToUnsh').value;
  


  numUnshel = parseInt(d3.select('#numUnsh').property('value'));
  numES = parseInt(d3.select('#numEs').property('value'));
  numTH = parseInt(d3.select('#numTh').property('value'));
  numRRH = parseInt(d3.select('#numRrh').property('value'));
  numPSH = parseInt(d3.select('#numPsh').property('value'));
  numAllBeds = numUnshel + numES + numTH + numRRH + numPSH;
  numIndHousing = numAllBeds * 0.5; //independent housing pool, just based on the rest of dots
  numAllNodes = numAllBeds + numIndHousing;
  
  numNodesToDisplay = Math.min(numAllNodes,200);   //display 1:1 dots or maximum of this many (half this number for max number of beds)
  dotsToDisplayProportion = numNodesToDisplay / numAllNodes;   //proportion of dots to actually display vs number of counts
  oneDotEquals = numAllNodes / numNodesToDisplay;   //one dot represents this many count
  numUnshelToDisplay = numUnshel * dotsToDisplayProportion; //how many dots to actually display
  numESToDisplay = numES * dotsToDisplayProportion;
  numTHToDisplay = numTH * dotsToDisplayProportion;
  numRRHToDisplay = numRRH * dotsToDisplayProportion;
  numPSHToDisplay = numPSH * dotsToDisplayProportion;
  

  
  ////////////////// BAR CHART /////////////////////
  startHmls = (numUnshel + numES + numTH);
  domainMax = (startHmls * 2);
  
  yScale.domain([0, domainMax]);
    
  yAxisG = barChartG.append('g')
    .attr('class', 'yAxis')
    .style('opacity', 0)
    .call(d3.axisLeft(yScale));
  
  barData = [{'item': 'only', 'es': numES, 'th': numTH, 'unshel': numUnshel }];

  barStackSeries = barStackGenerator(barData);

  barsGroup = barChartG.append('g');
  
  barsGs = barsGroup.selectAll('g')
    .data(barStackSeries)
    .enter().append('g')
      .attr('fill', function(d) { return barColors[d.key]; })
      .attr('class', function(d) { return 'bar bar-' + d.key; });
  
  bars = barsGs.selectAll('rect')
    .data(function(d) { return d; })
    .enter().append('rect')
      .attr('x', function(d) { return xScale(d.item); })
      .attr('y', function(d) { return yScale(0); })
      .attr('height', 0)
      .attr('width', barWidth);

  //Start point line and label, legend, etc.
  var oneDotRepresents;
  d3.select('#legendNum').html(d3.format(',')(Math.round(oneDotEquals)));
  
  var legendNumWidth = document.getElementById("legendNum").getComputedTextLength();
  
  svgX = document.getElementById('svg').getBoundingClientRect().x;
  chartContainerX = document.getElementById('chartcontainer').getBoundingClientRect().x;
  svgToContainerOffsetX = svgX - chartContainerX; //update to account for svg offset within the div
  
  peopleFromLeft = legendNumWidth + 20;
  personIcon.style('left', svgToContainerOffsetX + peopleFromLeft + 12 + 'px');
  personIcon2.style('left', svgToContainerOffsetX + peopleFromLeft + 26 + 'px');
  circleIcon.style('left', svgToContainerOffsetX + 50 + 'px');
  
  startLine
    .attr('transform','translate(' + (barLeftMargin - (startLineWidth/2) + (barWidth/2)) + ',' + (yScale(startHmls) - (startLineHeight/2)) + ')')
    .transition()
    .style('opacity', 1);
    
  startLineLabelCount.html(d3.format(',')(startHmls));

  startLineLabelsG
    .transition()
    .style('opacity', 1);
  d3.selectAll('.monthsElapsedGroup')
    .transition()
    .style('opacity', 1);
  d3.selectAll('.legend')
    .transition()
    .style('opacity', 1);
        
  //Bars slide into view
  bars
    .transition()
    .duration(1500)
    .attr('y', function(d) { return yScale(d[1]); })
    .attr('height', function(d) { return yScale(d[0]) - yScale(d[1]); });

      

  //////////// DRAW THE DOTS ////////////
  nodes = d3.range(numNodesToDisplay)
    .map(function(d,i){return {
      location: setOriginalLocation(i),
      r: randomIntFromInterval(1/numNodesToDisplay*minRadiusAdjustment,1/numNodesToDisplay*maxRadiusAdjustment)
  }});
  
  dots = d3.select('.svg')
      .selectAll('circle')
      .data(nodes,function(d){return d.location});
  
  var dotsE = dots.enter().append('circle')
      .attr('r',0)
      .attr('class',function(d){return setOriginalClass(d)})
      .attr('fill',function(d,i){return colors[d.location];})
      //.attr('stroke','black')
      //.attr('stroke-width',0.5)
      ;
  dots.exit().remove();
  dots = dots.merge(dotsE); //merge original empty selection with enter selection
  dots.transition().duration(2000).attr("r", function(d) { return d.r; }); //fade in size effect
  
  dots    
    .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));
  
  
  simulation.nodes(nodes);
  simulation.alpha(0.2).restart();
    


  //update initial number of dots actually displayed in each group (will be kept track of in movements)
  unshDotsOnScreen = document.getElementsByClassName("unsh").length,
  esDotsOnScreen = document.getElementsByClassName("es").length,
  thDotsOnScreen = document.getElementsByClassName("th").length,
  rrhDotsOnScreen = document.getElementsByClassName("rrh").length,
  pshDotsOnScreen = document.getElementsByClassName("psh").length,
  indHDotsOnScreen = document.getElementsByClassName("indH").length;


  rrhOnePersonLeavesEvery = rrhAvgStay / rrhDotsOnScreen; //everyone cycles through (at an even interval) every '# length of stay' months
  pshOnePersonMovesOnEvery = (12000 / monthsPerSecond) / (pshDotsOnScreen * pshMovingOnRate);  //e.g., if 15% or 15 out of 100 people leave every 12000 ms, that is one every 800 ms
  pshOnePersonReturnsEvery = (12000 / monthsPerSecond) / (pshDotsOnScreen * pshRecidivismRate);
  thOnePersonLeavesEvery = thAvgStay / thDotsOnScreen;
  esOnePersonLeavesEvery = esAvgStay / esDotsOnScreen; //exits to non-homeless services programs only
  unshOnePersonResolvesEvery = (12000 / monthsPerSecond) / (unshDotsOnScreen * unshSelfResolve);  
  indHOnePersonUnshEvery = (12000 / monthsPerSecond) / ((unshDotsOnScreen + esDotsOnScreen + thDotsOnScreen) * indHToUnsh);


  //NUMBER OF DOTS FOR CALCULATING % CHANGE FOR BAR 
  numHmlsDots = document.getElementsByClassName("unsh").length+document.getElementsByClassName("es").length+document.getElementsByClassName("th").length;
  numUnshDots = document.getElementsByClassName("unsh").length;
  numEsDots = document.getElementsByClassName("es").length;
  numThDots = document.getElementsByClassName("th").length;
  
}; //END OF START SIMULATION FUNCTION




function updateBar() {
   var newBarData = [{'item': 'only', 
    'es': (document.getElementsByClassName("es").length / numEsDots) * numES, 
    'th': (document.getElementsByClassName("th").length / numThDots) * numTH, 
    'unshel': (document.getElementsByClassName("unsh").length / numUnshDots) * numUnshel }];

  barsGs = barsGroup.selectAll('g')
    .data(barStackGenerator(newBarData));
  
  bars = barsGs.selectAll("rect")
    .data(function(d) {return d;});
    
  bars.transition()
    .attr("y", function(d){ return yScale(d[1]); })
    .attr("height", function(d){ return yScale(d[0]) - yScale(d[1]); });
}





var rrhAvLengthRanCounter = 0;
var pshMoveOnRanCounter = 0;
var pshRecidivismRanCounter = 0;
var thAvLengthRanCounter = 0;
var esAvLengthRanCounter = 0;
var unshSelfResolveRanCounter = 0;
var indHToUnshRanCounter = 0;
var monthsCounter = 0;


function startTimers(){
  var mainTimer = d3.timer(function(elapsed) {
   
    //MONITOR CHANGES IN PARAMETERS besides counts (if slows down the simulation too much, turn this off to only update on 'RESTART')
    monthsPerSecond = speedVals[parseInt(sliderSpeed.noUiSlider.get())];
   
   
   
    //RRH SUCCESS OR RECIDIVISM PER AVG LENGTH OF STAY
    if(elapsed > (rrhAvLengthRanCounter + rrhOnePersonLeavesEvery)){
      var random = getRandomInt(0,100);
      if (random <= percentsOutOfRrh['indH']){
        moveIt('rrh','indH');
      } else {
        moveIt('rrh','unsh');
      }
      rrhAvLengthRanCounter = rrhAvLengthRanCounter + rrhOnePersonLeavesEvery;
      rrhVacancyTrigger(); 
      rrhOnePersonLeavesEvery = rrhAvgStay / rrhDotsOnScreen; //recalculate rate for new number of dots (e.g., avg 6 months for 6 dots = one every second, but avg 6 months for 3 dots = one every two seconds)
    } 
    
    //PSH MOVING ON
     if(elapsed > (pshMoveOnRanCounter + pshOnePersonMovesOnEvery)){
      moveIt('psh','indH');
      pshMoveOnRanCounter = pshMoveOnRanCounter + pshOnePersonMovesOnEvery;
      pshVacancyTrigger(); 
      pshOnePersonMovesOnEvery = (12000 / monthsPerSecond) / (pshDotsOnScreen * pshMovingOnRate); //recalculate rate for new number of dots
     }
    
    //PSH RECIDIVISM
    if(elapsed > (pshRecidivismRanCounter + pshOnePersonReturnsEvery)){
      moveIt('psh','unsh');
      pshRecidivismRanCounter = pshRecidivismRanCounter + pshOnePersonReturnsEvery;
      pshVacancyTrigger(); 
      pshOnePersonReturnsEvery = (12000 / monthsPerSecond) / (pshDotsOnScreen * pshRecidivismRate); //recalculate rate for new number of dots
    }
    
    //TH SUCCESS OR RECIDIVISM PER AVG LENGTH OF STAY
    if(elapsed > (thAvLengthRanCounter + thOnePersonLeavesEvery)){
      var random = getRandomInt(0,100);
      if (random <= percentsOutOfTh['indH']){
        moveIt('th','indH');
      } else {
        moveIt('th','unsh');
      }
      thAvLengthRanCounter = thAvLengthRanCounter + thOnePersonLeavesEvery;
      thVacancyTrigger(); 
      thOnePersonLeavesEvery = thAvgStay / thDotsOnScreen; //recalculate rate for new number of dots (e.g., avg 6 months for 6 dots = one every second, but avg 6 months for 3 dots = one every two seconds)
    
    //ES SELF RESOLVE OR RECIDIVISM PER AVG LENGTH OF STAY OF PEOPLE WHO EXIT BUT NOT TO HOMELESS PROGRAMS
    if(elapsed > (esAvLengthRanCounter + esOnePersonLeavesEvery)){
      var random = getRandomInt(0,100);
      if (random <= percentsOutOfEs['indH']){
        moveIt('es','indH');
      } else {
        moveIt('es','unsh');
      }
      esAvLengthRanCounter = esAvLengthRanCounter + esOnePersonLeavesEvery;
      esVacancyTrigger(); 
      esOnePersonLeavesEvery = esAvgStay / esDotsOnScreen; //recalculate rate for new number of dots (e.g., avg 6 months for 6 dots = one every second, but avg 6 months for 3 dots = one every two seconds)
    }    
 
    //UNSH SELF RESOLVE (ESTIMATE)
     if(elapsed > (unshSelfResolveRanCounter + unshOnePersonResolvesEvery)){
      moveIt('unsh','indH');
      unshSelfResolveRanCounter = unshSelfResolveRanCounter + unshOnePersonResolvesEvery;
      //unshDotsOnScreen = Math.max(pshDotsOnScreen - 1,0); 
      unshOnePersonResolvesEvery = (12000 / monthsPerSecond) / (unshDotsOnScreen * unshSelfResolve); //recalculate rate for new number of dots
      d3.select('#unshNum').text(document.getElementsByClassName("unsh").length);
     }    
    
    //INDEPENDENTLY HOUSED TO UNSHELTERED (ESTIMATE)
     if(elapsed > (indHToUnshRanCounter + indHOnePersonUnshEvery)){
      moveIt('indH','unsh');
      indHToUnshRanCounter = indHToUnshRanCounter + indHOnePersonUnshEvery;
      //unshDotsOnScreen = Math.max(unshDotsOnScreen - 1,0); 
      indHOnePersonUnshEvery = (12000 / monthsPerSecond) / ((unshDotsOnScreen + esDotsOnScreen + thDotsOnScreen) * indHToUnsh); //recalculate rate for new number of dots

     }

  //TRIGGERS
    function rrhVacancyTrigger(){ //fill the spot
      var random2 = getRandomInt(0,100);
      if (random2 <= percentsToRrhFrom['unsh']){
        moveIt('unsh','rrh');
      }
      else if (random2 <= percentsToRrhFrom['unsh'] + percentsToRrhFrom['es']){
        moveIt('es','rrh');    
        esVacancyTrigger();
      }
      else {
        moveIt('th','rrh');
        thVacancyTrigger();
      }
    }    
    
    function thVacancyTrigger(){ //fill the spot
      var random2 = getRandomInt(0,100);
      if (random2 <= percentsToThFrom['unsh']){
        moveIt('unsh','th');
      }
      else {
        moveIt('es','th');
        esVacancyTrigger();
      }
    }    
    
    function pshVacancyTrigger(){ //fill the spot
      var random2 = getRandomInt(0,100);
      if (random2 <= percentsToPshFrom['unsh']){
        moveIt('unsh','psh');
      }
      else if (random2 <= percentsToPshFrom['unsh'] + percentsToPshFrom['es']){
        moveIt('es','psh');    
        esVacancyTrigger();
      }
      else {
        moveIt('th','psh');
        thVacancyTrigger();
      }
    }    
    
    function esVacancyTrigger(){ //fill the spot
      var random2 = getRandomInt(0,100);
      if (random2 <= percentsToEsFrom['unsh']){
        moveIt('unsh','es');
      }
      else {
        moveIt('indH','es');
      }
      updateBar();
    }    
    

  //MONTHS TIMER
    if(compareToRestartCount != restartCount) { //if restart count went up by one then it won't match the compareTo- variable; reset the count and add one to compareTo- to then match
      monthsElapsed = 0;
      d3.select('#monthsElapsedNum').text(0);
      compareToRestartCount = compareToRestartCount+1;
    }
      
    if(elapsed > (monthsCounter + (1000/monthsPerSecond))){
      monthsElapsed = monthsElapsed + 1;
      d3.select('#monthsElapsedNum').text(monthsElapsed);
      monthsCounter = monthsCounter + (1000/monthsPerSecond);
    }
  }, initialDelay);

}


//SIMPLE RESIZE LISTENER FOR UPDATING THE POSITIONED HTML ICONS
function debounce(func){
  var timer;
  return function(event){
    if(timer) clearTimeout(timer);
    timer = setTimeout(func,100,event);
  };
}
window.addEventListener("resize", debounce(function(e){
  var legendNumWidth = document.getElementById("legendNum").getComputedTextLength();
  
  svgX = document.getElementById('svg').getBoundingClientRect().x;
  chartContainerX = document.getElementById('chartcontainer').getBoundingClientRect().x;
  svgToContainerOffsetX = svgX - chartContainerX; //update to account for svg offset within the div
  
  peopleFromLeft = legendNumWidth + 20;
  personIcon.style('left', svgToContainerOffsetX + peopleFromLeft + 12 + 'px');
  personIcon2.style('left', svgToContainerOffsetX + peopleFromLeft + 26 + 'px');
  circleIcon.style('left', svgToContainerOffsetX + 50 + 'px');
}));



