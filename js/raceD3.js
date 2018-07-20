
////////////////////////////////////////////////////
/////////////// INTRO SECTION ELEMENTS /////////////
////////////////////////////////////////////////////


///Basic accordion functionality for intro section //////////
//from https://www.w3schools.com/howto/howto_js_accordion.asp
//Collapse and expand functionality for each accordion option
//Plus will re-trigger the scroller position calculations because the height to the first graph will have changed
//Plus will re-trigger the scroller position calculations because the height to the first graph will have changed
var accordionOptions = document.getElementsByClassName("accordion");

for (var i = 0; i < accordionOptions.length; i++) {
  accordionOptions[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}



///////////////////////////////////////////
////////////// HTML CONTENT ///////////////
///////////////////////////////////////////

// !!!!!!!!! EDITED FOR PORTFOLIO VERSION !!!!!!!! //

////// Titles //////////
var propStackTitle = 'Race/ethnicity of people experiencing homelessness compared with the general population',
  	propLinesTitle = 'Percent of people experiencing sheltered homelessness over 12 months, 2008-2016',
  	propLinesCompTitle = 'Percentage point difference between share of homeless population and share of general population, 2008–2016',
  	propLinesCompTitle2 = 'Ratio of share of homeless population and share of general population, 2008–2016',
  	propMapTitle = 'Percentage point difference between share of homeless population and share of general population, by state',
  	rateBarsTitle = 'Rate of homelessness among racial/ethnic groups per 10,000 people in the general population',
  	rateMapTitle = 'Rate of homelessness among racial/ethnic groups per 10,000 people in the general population, by state',
  	rateMajMinMapTitle = 'Ratio of per capita homelessness for minorities versus Whites or Non-Hispanics',
  	shelPiesTitle = 'Race/ethnicity of people experiencing sheltered or unsheltered homelessness on a given night',
  	shelBarsTitle = 'Likelihood for each racial/ethnic group of being sheltered versus unsheltered on a given night',
    ntnlLocationTitle= 'Race/ethnicity as a percent of annual participants in various homelessness interventions';

var propStackExplain = '<br><span style="font-weight:bold">Data this graph displays:</span> This graph shows the percent of people who identified as each race or ethnicity in three populations (datasets): the general U.S. population as of July 1st (labeled "General pop 2016" on the horizontal axis); people counted as homeless in the annual Point-in-Time count that occurs each January ("One night in 2017"); and people who utilized either emergency shelter or transitional housing at least one night in a 12 month period ("Sheltered in 2016"). See the Sources pop-up for more information. In each of these datasets, ethnicity and race are distinct categories; people identifying as Hispanic or non-Hispanic also identified as one or more races. <br><br><span style="font-weight:bold">What the data shows:</span> In the U.S., African Americans, Native Americans, and Native Hawaiians and Pacific Islanders are over-represented in both one-night and annual counts of homelessness compared to the general population. African Americans are highly over-represented, making up more than 40% of people experiencing homelessness but less than 13% of the population. Asians and especially Whites are under-represented. Nationally, the percent of Hispanics in the homeless population is similar to the general population, although later graphs show there is significant variation among states.<br><br><span style="font-weight:bold">Tips for exploring the graph:</span> 1) The "Grouped" option can help in side-by-side comparison of each group. 2) Because the graph shows the most recently-released data by default, the drop-down menu ("Data released in") refers to the year in which the data was released. While Point-in-Time data is released in the same calendar year as it is collected, both the general population (Census Bureau) and annual sheltered homeless data are released in the following calendar year.',
  	propLinesExplain = "<br><span style='font-weight:bold'>Data this graph displays:</span> This graph reflects the percent of people who utilized either emergency shelter or transitional housing (which comprise 'sheltered homelessness') over a 12 months period who identified as each race or ethnicity, and how this proportion has changed over time. <br><br><span style='font-weight:bold'>What the data shows:</span> As seen in the first graph, African Americans and Whites make up a similar proportion of the homeless population despite African Americans making up a much smaller proportion of the general population (the size of this gap is visualized in the next graph). The race composition of the homeless population is relatively stable over time, at least for individuals. However, African Americans and Hispanics in families make up an increasingly large proportion of homeless people in families, with African Americans surpassing 50 percent of homeless people in families in 2015. The opposite is true for Non-Hispanic White people in families.",
  	propLinesCompExplain = "<br><span style='font-weight:bold'>Data this graph displays:</span> Related to the preceding graph, this graph reflects the <span style='font-style:italic'>size</span> of each racial group's over- or under-representation in the homeless population (people utilizing emergency shelter or transitional housing in a year), and how this has changed over time. The default view is <span style='font-weight:bold; font-style:italic;'>Pct point,</span> which displays this gap as the percent of the homeless population minus the percent of the general population (the percentage point difference). The center line represents no difference and a positive number, over-representation. For example, a value of 29.9 for African Americans in 2016 reflects 40.7% of the homeless population minus 12.6% of the general population. <br><br>Switching to the <span style='font-weight:bold; font-style:italic;'>Ratio</span> view shows percent of the general population <span style='font-style:italic'>divided by</span> percent of the homeless population. A ratio of 3.4 for African Americans, for example, means that people experiencing homelessness were 3.4 times as likely to identify as African American as were people in the general population.<br><br><span style='font-weight:bold'>What the data shows:</span> The disparity is primarily between African Americans and Non-Hispanic Whites, and this disparity is not improving over time. Since at least 2010 the disparity has been worsening for African American families.",
  	propMapExplain = "<br><span style='font-weight:bold'>Data this graph displays:</span> This map shows the gap (subtraction) between a racial group's percent of the homeless population and percent of the general population (e.g., there is a 25 percentage point difference between 40% of the homeless population and 15% of the general population). Unlike the previous graph, this data is based on one-night counts of people experiencing homelessness. Red reflects over-representation and blue under-representation. <br><br><span style='font-weight:bold'>What the data shows:</span> Across states, African Americans and Native Americans are consistently over-represented among people experiencing homelessness, whereas Whites and Asians are consistently under-represented. Unsurprisingly, states in which a racial group makes up a larger percent of the general population generally see that group as a larger percent of the homeless population. However, states with higher proportions of African Americans or Native Americans in the general population (horizontal axis) tend to have <span style='font-style:italic'>even higher</span> over-representation of African Americans or Native Americans in the homeless population (increasing distance from the center line).<br><br><span style='font-weight:bold'> Tips for exploring the graph:</span> 1) There are three ways to view this data, each of which helps to visualize the data in a different way: map (ideal for spotting regional trends), bar chart (ideal for sorting), and scatter plot (ideal for seeing outliers and the relationship of both variables). The year and racial group selection in the drop-down menus will persist between graph types. 2) Pan the map and scatter-plot by dragging the background, zoom by double-clicking, and reset to the original position by clicking 'Reset pan/zoom'. 3) On the scatter plot, the dotted line represents no difference between the two proportions, and a dot's distance from that line reflects the distance between the two proportions. 4) Scroll the bar chart by dragging the background and toggle the sort order of the bars using the radio buttons (either alphabetical order by state or from highest to lowest value).",
  	rateBarsExplain = "<br><span style='font-weight:bold'>Data this graph displays:</span> This chart shows the number of people in each racial or ethnic groups who experienced homelessness per 10,000 people (of that racial or ethnic group) in the U.S. population. A rate of 100, for example, indicates 100 out of every 10,000 members of a racial/ethnic group is experiencing homelessness—equivalent to 1% of that group. The left-most group of bars reflects the number of people who utilized emergency shelter or transitional housing over a 12 month period. The second group shows the total number of people counted as homeless on one night in the annual Point-in-Time count, and the third is the number of people in an unsheltered location (streets, cars, or other places not meant for human habitation) on that same night.<br><br>*Note that Guam and the Virgin Islands are included in estimates of annual sheltered homelessness but excluded in the Census population estimates; however, even if all Guam residents were to identify as Pacific Islander the rate of annual sheltered homelessness for Native Hawaiians and Pacific Islanders would still be highest among racial groups (at least 189.9), and the Virgin Islands (where the majority of residents identified as non-Hispanic Black in the 2010 Census) would have almost no effect on the rate for African Americans.<br><br><span style='font-weight:bold'>What the data shows:</span> Native Hawaiians and Pacific Islanders experience the highest rates of homelessness, followed by Native Americans and African Americans. This is fairly consistent year to year and between the one-night and annual homelessness data.";
  	rateMapExplain = "<br><span style='font-weight:bold'>Data this graph displays:</span> This map shows a racial or ethnic group's per capita rate of homelessness in each state, or the number of people experiencing homelessness on a given night per 10,000 people of that racial or ethnic group in the state's population. <br><br>Note that some states reported counts of homelessness for a particular racial or ethnic group that are extraordinarily high compared to Census population estimates (especially for Native Hawaiians and Pacific Islanders), and count fluctuations result in some rates being highly variable from year to year. For example, New York City alone reported more than 1,000 Native Hawaiians and Pacific Islanders experiencing homelessness on a given night in 2017 compared to less than 5,000 in the general population. So, although calculated rates are shown based on reported homelessness and Census counts, cases of extraordinarily high rates should be seen with caution, and these states and communities should carefully review data collection strategies.<br><br><span style='font-weight:bold'>What the data shows:</span> Generally, higher rates in the West and Northeast are reflective of higher counts overall. However, states with high rates per capita for a racial or ethnic group are not necessarily the same states as those with a high disproportion between the homeless and general populations (as explored in Part 1). For example, although African Americans are quite over-represented among the homeless population in the South and Midwest (as seen in Part 1), rates per capita in these regions are relatively low.<br><br><span style='font-weight:bold'>Tips for exploring the graph:</span> 1) There are three ways to view this data, each of which helps to visualize the data in a different way: map (ideal for spotting regional trends), bar chart (ideal for sorting), and scatter plot (ideal for seeing outliers and the relationship of both variables). The year and racial group selection in the drop-down menus will persist between graph types. 2) Pan the map and scatter-plot by dragging the background, zoom by double-clicking, and reset to the original position by clicking 'Reset pan/zoom'. 3) Scroll the bar chart by dragging the background and toggle the sort order of the bars using the radio buttons (either alphabetical order by state or from highest to lowest value).",
  	rateMajMinMapExplain = '<br><span style="font-weight:bold">Data this graph displays:</span> This map shows how many times more likely minorities are to experience homelessness on a given night compared to either Whites (for race) or Non-Hispanics (for ethnicity) in each state. A value of 1.0 reflects no difference in rate of homelessness per 10,000 population. Red represents a higher rate (a ratio greater than 1) and blue a lower rate (a fraction between 0 and 1) compared to that of Whites or Non-Hispanics.  <br><br><span style="font-weight:bold">What the data shows:</span> Minority versus majority disparities for African Americans and Native Americans are highest in upper Midwestern states. The disparity for Hispanics appears highest in the Northeast, while Hispanics in the South see lower rates of homelessness than non-Hispanics. In almost every state, Asians are less likely to experience homelessness than Whites. <br><br><span style="font-weight:bold">Tips for exploring the graph:</span> 1) There are three ways to view this data, each of which helps to visualize the data in a different way: map (ideal for spotting regional trends), bar chart (ideal for sorting), and scatter plot (ideal for seeing outliers and the relationship of both variables). The year and racial group selection in the drop-down menus will persist between graph types. 2) Pan the map and scatter-plot by dragging the background, zoom by double-clicking, and reset to the original position by clicking "Reset pan/zoom". 3) On the scatter plot, the dotted line represents no difference between the two rates (pivoting the line counter-clockwise like the hand of a clock would pass through dots with increasingly disparate rates compared to Whites or Non-Hispanics; clockwise the opposite). 4) Scroll the bar chart by dragging the background and toggle the sort order of the bars using the radio buttons (either alphabetical order by state or from highest to lowest value).',
  	shelPiesExplain = '<br><span style="font-weight:bold">Data this graph displays:</span> This chart shows the percent of people experiencing homelessness on a given night overall, in sheltered locations (such as emergency shelter or transitional housing), or in unsheltered locations (such as streets or vehicles). <br><br><span style="font-weight:bold">What the data shows:</span> African Americans make up a relatively larger proportion of the sheltered population and Whites a relatively larger proportion of the unsheltered population.',
  	shelBarsExplain = '<br><span style="font-weight:bold">Data this graph displays:</span> Each bar represents the total number of people (or single individuals or people in families) counted in the annual one-night count of people experiencing homelessness, colored by the proportion that was counted in a sheltered (emergency shelter or transitional housing program) versus unsheltered location (street, vehicle, or place not meant for human habitation). <br><br><span style="font-weight:bold">What the data shows:</span> People in families are always more likely to be sheltered than individuals. African American individuals and families are more likely to be sheltered compared to other racial or ethnic groups, while Native Hawaiian and Pacific Islander individuals and families are most likely to be unsheltered. This may reflect higher African American populations in Northeastern states where sheltered homelessness (including right-to-shelter laws) is more common, and higher rates of Pacific Islanders in the West where unsheltered homelessness is more common.',
    ntnlLocationExplain = '<br><span style="font-weight:bold">Data this graph displays:</span> This graph shows the percent of people identifying as the selected race or ethnicity in emergency shelter, transitional housing, permanent supportive housing, or the Supportive Services for Veteran Families (which includes rapid re-housing and homelessness prevention) programs over the course of the fiscal year. Demographic data for other rapid re-housing programs is not available, nor are demographic breakdowns for permanent supportive housing or rapid re-housing at a state or local level.<br><br><span style="font-weight:bold">What the data shows:</span> For most racial groups, representation in each of these program types is fairly similar. Although African Americans are over-represented in the homeless population, they also make up a larger proportion of permanent supportive housing and SSVF participants than of people in emergency shelter or transitional housing. Compared to people in emergency shelter or transitional housing, groups that appear slightly under-represented in permanent supportive housing include Hispanics (especially in a family), White individuals, and Native Hawaiian or Pacific Islanders in a family. Non-Hispanic Whites appear to be over-represented in permanent supportive housing.';
	
var propStackSource = '<br>Annual one-night Point-in-Time counts are published in the <a href="https://www.hudexchange.info/programs/hdx/guides/ahar/#reports" target="_blank" rel="noopener">Annual Homeless Assessment Report to Congress, Part 1</a>. Data on race and ethnicity are only available for one-night counts beginning in 2015 and are published in the accompanying <a href="https://www.hudexchange.info/programs/coc/coc-homeless-populations-and-subpopulations-reports/" target="_blank" rel="noopener">CoC Homeless Populations and Subpopulations Reports</a>. <br><br>Annual counts of people experiencing sheltered homelessness include persons utilizing emergency shelter, transitional housing, or safe haven services over a 12 month period and are published in supporting resources of the <a href="https://www.hudexchange.info/programs/hdx/guides/ahar/#reports" target="_blank" rel="noopener">Annual Homeless Assessment Report to Congress, Part 2</a>. <br><br>General population estimates by single race or ethnicity are as of July 1, per U.S. Census Bureau American Community Survey 1-year estimates. Tables B02001 (race) and B03002 (ethnicity) were generated using <a href="https://factfinder.census.gov/faces/nav/jsf/pages/index.xhtml" target="_blank" rel="noopener">American FactFinder</a>. Population totals include Puerto Rico but exclude Guam, Virgin Islands, and Northern Mariana Islands. <br><br><span style="font-style:italic;">A note on categories or race and ethnicity:</span> In both Census and homelessness data, race and ethnicity are distinct categories. Hispanic is not included as a race and people identify as either Hispanic or not Hispanic and one or more races. In homelessness data, race categories reflect people identifying as one race only, or a person is included under "multiple races" (or "two or more races"). Although data from the American Community Survey (A.C.S.) allows further break-down for "multiple races", "one race" categories are used for comparison. "Native American" is used as an abbreviation for American Indian and Alaskan Native; and "NHPI" or "Pacific Islander" are used as abbreviations for Native Hawaiian and Pacific Islander.',
  	propLinesSource = '<br>Data are from <a href="https://www.hudexchange.info/programs/hdx/guides/ahar/#reports" target="_blank" rel="noopener">each year’s</a> Annual Homeless Assessment Report to Congress (AHAR) (Part 2 where published in two parts) and reflect the number of persons utilizing emergency shelter, transitional housing, or safe haven services over a 12 month period. National estimates are based on a national sample of jurisdictions. Because AHAR reports published between 2005 and 2007 used different sample sizes and/or time frames, data prior to 2008 are excluded. Data on Asians, Native Americans, and Native Hawaiians and Pacific Islanders are in some cases combined in the AHAR Part 2. This data does not capture people who are unsheltered if they do not utilize emergency shelter or transitional housing during the year. State and local breakdowns are not available.',
  	propLinesCompSource = '<br>Data are from <a href="https://www.hudexchange.info/programs/hdx/guides/ahar/#reports" target="_blank" rel="noopener">each year’s</a> Annual Homeless Assessment Report to Congress (AHAR) (Part 2 where published in two parts) and reflect the number of persons utilizing emergency shelter, transitional housing, or safe haven services over a 12 month period. Because AHAR reports published between 2005 and 2007 used different sample sizes and/or time frames, data prior to 2008 are excluded. Data on Asians, Native Americans, and Native Hawaiians and Pacific Islanders are generally combined in the AHAR Part 2. <br><br>For this graph, percent of the general population is as published in <a href="https://www.hudexchange.info/programs/hdx/guides/ahar/#reports" target="_blank" rel="noopener">each year’s</a> Annual Homeless Assessment Report to Congress (AHAR) (Part 2 where published in two parts). Data on individuals or people in families are not available prior to 2010.',
  	propMapSource = '<br>Annual one-night Point-in-Time counts are published in the <a href="https://www.hudexchange.info/programs/hdx/guides/ahar/#reports" target="_blank" rel="noopener">Annual Homeless Assessment Report to Congress, Part 1</a>. Data on race and ethnicity are only available for one-night counts beginning in 2015 and are published in the accompanying <a href="https://www.hudexchange.info/programs/coc/coc-homeless-populations-and-subpopulations-reports/" target="_blank" rel="noopener">CoC Homeless Populations and Subpopulations Reports</a>. State data are aggregated from reported Point-in-Time counts in approximately 400 <a class="jumpLink" href="https://endhomelessness.org/resource/what-is-a-continuum-of-care/" target="_blank" rel="noopener">Continuum of Care</a> regions each year. A minority of Continuum of Care regions only conduct unsheltered Point-in-Time counts in odd years, in which case the unsheltered counts are considered identical to the previous year. Variations in methodology and self-report result in variability of counts and especially demographic breakdowns. Proportions and rates presented here are imperfect estimates that should be considered in light of year-to-year variations and in comparison to the annual homelessness data where possible. <br><br>General population estimates by single race or ethnicity are as of July 1 of the preceding year (i.e. July 1, 2015 for comparison to the January 2016 homelessness count), per U.S. Census Bureau American Community Survey 1-year estimates. Tables B02001 (race) and B03002 (ethnicity) were generated using <a href="https://factfinder.census.gov/faces/nav/jsf/pages/index.xhtml" target="_blank" rel="noopener">American FactFinder</a>. Population totals include Puerto Rico but exclude Guam, Virgin Islands, and Northern Mariana Islands.',
  	rateBarsSource = '<br>Annual sheltered counts are from the <a href="https://www.hudexchange.info/programs/coc/coc-homeless-populations-and-subpopulations-reports/" target="_blank" rel="noopener">Annual Homeless Assessment Report to Congress, Part 2</a>. Because state-level data is not unavailable on annual sheltered homelessness (AHAR Part 2), counts for U.S. territories remain included. As a result, the rate of annual sheltered homelessness for Native Hawaiians and Pacific Islanders in particular may be overestimated (see the Explanation pop-up). <br><br>One-night overall and unsheltered counts are from the Annual Homeless Assessment Report to Congress, Part 1, <a href="https://www.hudexchange.info/programs/coc/coc-homeless-populations-and-subpopulations-reports/" target="_blank" rel="noopener">CoC Homeless Populations and Subpopulations Reports</a>. For comparison to population data, counts from Guam, Virgin Islands, and Northern Mariana Islands were excluded.<br><br>General population estimates by single race or ethnicity are as of July 1 (same year for annual sheltered counts or previous year for one-night counts), per U.S. Census Bureau American Community Survey 1-year estimates. Tables B02001 (race) and B03002 (ethnicity) were generated using <a href="https://factfinder.census.gov/faces/nav/jsf/pages/index.xhtml" target="_blank" rel="noopener">American FactFinder</a>. Population totals include Puerto Rico but exclude Guam, Virgin Islands, and Northern Mariana Islands.',
  	rateMapSource = '<br>Annual one-night Point-in-Time counts are published in the <a href="https://www.hudexchange.info/programs/hdx/guides/ahar/#reports" target="_blank" rel="noopener">Annual Homeless Assessment Report to Congress, Part 1</a>. Data on race and ethnicity are only available for one-night counts beginning in 2015 and are published in the accompanying <a href="https://www.hudexchange.info/programs/coc/coc-homeless-populations-and-subpopulations-reports/" target="_blank" rel="noopener">CoC Homeless Populations and Subpopulations Reports</a>. <br><br>General population estimates by single race or ethnicity are as of July 1 (same year for annual sheltered counts or previous year for one-night counts), per U.S. Census Bureau American Community Survey 1-year estimates. Tables B02001 (race) and B03002 (ethnicity) were generated using <a href="https://factfinder.census.gov/faces/nav/jsf/pages/index.xhtml" target="_blank" rel="noopener">American FactFinder</a>. Population totals include Puerto Rico but exclude Guam, Virgin Islands, and Northern Mariana Islands.',
  	rateMajMinMapSource = '<br>Annual one-night Point-in-Time counts are published in the <a href="https://www.hudexchange.info/programs/hdx/guides/ahar/#reports" target="_blank" rel="noopener">Annual Homeless Assessment Report to Congress, Part 1</a>. Data on race and ethnicity are only available for one-night counts beginning in 2015 and are published in the accompanying <a href="https://www.hudexchange.info/programs/coc/coc-homeless-populations-and-subpopulations-reports/" target="_blank" rel="noopener">CoC Homeless Populations and Subpopulations Reports</a>. <br><br>General population estimates by single race or ethnicity are as of July 1 (same year for annual sheltered counts or previous year for one-night counts), per U.S. Census Bureau American Community Survey 1-year estimates. Tables B02001 (race) and B03002 (ethnicity) were generated using <a href="https://factfinder.census.gov/faces/nav/jsf/pages/index.xhtml" target="_blank" rel="noopener">American FactFinder</a>. Population totals include Puerto Rico but exclude Guam, Virgin Islands, and Northern Mariana Islands.',
  	shelPiesSource = '<br>Annual one-night Point-in-Time counts are published in the <a href="https://www.hudexchange.info/programs/hdx/guides/ahar/#reports" target="_blank" rel="noopener">Annual Homeless Assessment Report to Congress, Part 1</a>. Data on race and ethnicity are only available for one-night counts beginning in 2015 and are published in the accompanying <a href="https://www.hudexchange.info/programs/coc/coc-homeless-populations-and-subpopulations-reports/" target="_blank" rel="noopener">CoC Homeless Populations and Subpopulations Reports</a>.',
  	shelBarsSource = '<br>Annual one-night Point-in-Time counts are published in the <a href="https://www.hudexchange.info/programs/hdx/guides/ahar/#reports" target="_blank" rel="noopener">Annual Homeless Assessment Report to Congress, Part 1</a>. Data on individuals and families in sheltered versus unsheltered locations are provided in tables in the full report.',
    ntnlLocationSource = '<br>Annual counts of people utilizing emergency shelter, transitional housing, and permanent supportive housing Estimates over a 12 month period are published in supporting resources of the <a href="https://www.hudexchange.info/programs/hdx/guides/ahar/#reports" target="_blank" rel="noopener">Annual Homeless Assessment Report to Congress, Part 2</a>. <br><br>Annual Reports for the SSVF program are available from the U.S. Department of Veterans Affairs: <a href="https://www.va.gov/HOMELESS/ssvf/docs/SSVFUniversity/SSVF_Annual_Report_FY_2013.pdf" target="_blank" rel="noopener">2013</a>, <a href="https://www.va.gov/HOMELESS/ssvf/docs/SSVF_FY2014_Annual_Report_FINAL.pdf" target="_blank" rel="noopener">2014</a>, <a href="https://www.va.gov/HOMELESS/ssvf/docs/SSVF_Annual_Report_for_FY_2015.pdf" target="_blank" rel="noopener">2015</a>, and <a href="https://www.va.gov/HOMELESS/ssvf/docs/SSVF_FY2016_Annual_Report_508c.pdf" target="_blank" rel="noopener">2016</a>.';	
	
	
	













///////////////////////////////////////////
////////////// BASIC SVGS /////////////////
///////////////////////////////////////////
var width = parseInt(d3.select('#chartDiv1').style("width")), //per css
  height = parseInt(d3.select('#chartDiv1').style("height")); //per css
	  
d3.select('#chartDiv1').append('svg')
  .attr('class','svg')
  .attr('id','chartDiv1Svg')
  .attr("width",width)
  .attr("height",height);
d3.select('#chartDiv2').append('svg')
  .attr('class','svg')
  .attr('id','chartDiv2Svg')
  .attr("width",width)
  .attr("height",height);
d3.select('#chartDiv3').append('svg')
  .attr('class','svg')
  .attr('id','chartDiv3Svg')
  .attr("width",width)
  .attr("height",height);
d3.select('#chartDiv4').append('svg')
  .attr('class','svg')
  .attr('id','chartDiv4Svg')
  .attr("width",width)
  .attr("height",height);
d3.select('#chartDiv5').append('svg')
  .attr('class','svg')
  .attr('id','chartDiv5Svg')
  .attr("width",width)
  .attr("height",height);
d3.select('#chartDiv6').append('svg')
  .attr('class','svg')
  .attr('id','chartDiv6Svg')
  .attr("width",width)
  .attr("height",height);
d3.select('#chartDiv7').append('svg')
  .attr('class','svg')
  .attr('id','chartDiv7Svg')
  .attr("width",width)
  .attr("height",height);
d3.select('#chartDiv8').append('svg')
  .attr('class','svg')
  .attr('id','chartDiv8Svg')
  .attr("width",width)
  .attr("height",height);
d3.select('#chartDiv9').append('svg')
  .attr('class','svg')
  .attr('id','chartDiv9Svg')
  .attr("width",width)
  .attr("height",height);
d3.select('#chartDiv10').append('svg')
  .attr('class','svg')
  .attr('id','chartDiv10Svg')
  .attr("width",width)
  .attr("height",height);


// TITLES TO LOAD FROM BEGINNING ALSO
d3.select('#chartDiv1').append('div')
  .attr('class','chartTitle chartTitleBody')
  .html(propMapTitle);
d3.select('#chartDiv2').append('div')
  .attr('class','chartTitle chartTitleBody')
  .html(propStackTitle);
d3.select('#chartDiv3').append('div')
  .attr('class','chartTitle chartTitleBody')
  .html(propLinesCompTitle);
d3.select('#chartDiv4').append('div')
  .attr('class','chartTitle chartTitleBody')
  .html(shelPiesTitle);
d3.select('#chartDiv5').append('div')
  .attr('class','chartTitle chartTitleBody')
  .html(shelBarsTitle);
d3.select('#chartDiv6').append('div')
  .attr('class','chartTitle chartTitleBody')
  .html(rateBarsTitle);
d3.select('#chartDiv7').append('div')
  .attr('class','chartTitle chartTitleBody')
  .html(ntnlLocationTitle);
d3.select('#chartDiv8').append('div')
  .attr('class','chartTitle chartTitleBody')
  .html(shelPiesTitle);
d3.select('#chartDiv9').append('div')
  .attr('class','chartTitle chartTitleBody')
  .html(shelBarsTitle);
d3.select('#chartDiv10').append('div')
  .attr('class','chartTitle chartTitleBody')
  .html(ntnlLocationTitle);


  
  
  
  
  
  

	
	
	
	
	

/////////////////////////////////////////////
///////// DATA TO HTML CONVERSIONS //////////
/////////////////////////////////////////////
var keyToCategory = {'black':'Black','white':'White','nhpi':'NHPI','nativeAmerican':'Native American','multipleRaces':'2+ races','asian':'Asian','hispanic':'Hispanic','nonHispanic':'Non-Hispanic'};
var keyToCategoryLines = {'black':'Black','asianNhpiNativeAm':'Asian, NHPI, Native American','multipleRaces':'2+ races','hispanic':'Hispanic','nonHispanic':'Non-Hispanic', 'nonHispWhite':'Non-Hispanic White'};
var pitCatToText = {'pctPit':'all homeless on a given night', 'pctShel':'sheltered homeless on a given night', 'pctUnsh':'unsheltered homeless on a given night'};
var stackCatToText = {'pctPit':'homeless on a given night', 'pctShel':'people accessing shelter in a year', 'pctPop':'the general population'};


/////////////////////////////////
////////// TOOLTIPS /////////////
/////////////////////////////////
var tooltipWidth = 150;

d3.select('#tooltip')
  .style('width', tooltipWidth+'px')
  .style('height','auto');

var tooltipYOffset = -100,
    tooltipXOffset = {'right':20, 'left': -(tooltipWidth + 25)};



//////////////////////////////////////
//////////// COLORS //////////////////
//////////////////////////////////////

var colors = {'black':'#00b2a9', 
              'asian':'#b7312c', 
              'nativeAmerican':'#0055bc',
              'multipleRaces':'#b9975b',
              'nhpi':'#9cdbd9',
              'otherRace':'#d0d3d4',
              'white':'#002b49', //'#00b2a9',
              'hispanic':'#5c6068',
              'nonHispanic':'#b3b7b8',
              'asianNhpiNativeAm':'#b7312c',
              'nonHispWhite':'#002b49'
              };


 /*

var colors = {'black':'#0055bc', 
              'asian':'#00b2a9', 
              'nativeAmerican':'#b9975b',
              'multipleRaces':'#b7312c',
              'nhpi':'#9cdbd9',
              'otherRace':'#d0d3d4',
              'white':'#002b49',
              'hispanic':'#5c6068',
              'nonHispanic':'#b3b7b8',
              'asianNhpiNativeAm':'#00b2a9',
              'nonHispWhite':'#002b49'
              };
*/              
              
              

////////// EXPLANATION AND SOURCE BUTTONS //////////
var helpSourceBoxWidth = 125, 
    helpSourceBoxHeight = 25,
    corners = 10;

var helpColor = 'rgb(181, 38, 37)',
    sourceColor = 'rgb(92, 96, 104)',
    helpColorA = 'rgba(181, 38, 37, 0.3)',
    sourceColorA = 'rgba(92, 96, 104, 0.3)';

var helpFadeDuration = 2000,
	helpFadeDelay = 2000;









function raceVizzes(div, type) {

  var chartDiv = d3.select(div);
  var activeViz = type;

  var width = parseInt(chartDiv.style("width")), //per css
      height = parseInt(chartDiv.style("height")); //per css
      

  //////////////////////////////////////////////
  //////////// STACKED BARS CHART //////////////
  //////////////////////////////////////////////      
  function drawNtnlProportions(){
    "use strict";


    // DEFINITIONS  
    var leftMargin = 52,
        rightMargin = width * 0.05,
        bottomToAxis = 170,
        optionsPosFromTop = 125;      

    var numColumns = 3,
        numCategoriesRace = 7,
        numCategoriesEthn = 2,
        padding = width * 0.0003;
    
    var vizOffsetFromTop = 200; //main area of visualization (below headers)

    // CANVAS AND SECTIONS
    var uniqueSvgId = div.slice(1) + 'Svg',
        uniqueSvgIdNum = '#' + uniqueSvgId;
    var svgChart = d3.select(uniqueSvgIdNum);
      
    var vizSection = svgChart.append('g')
      .attr('transform','translate(' + 0 + ',' + vizOffsetFromTop + ')');

      

    ///////////// DROPDOWN(S) ///////////////
    //create dropdowns
    var yearsDropdown = chartDiv.append('select')
      .attr('id','years' + div.slice(1))
      .attr('class','displayToggle dropdown');


    yearsDropdown
      .style('display','inline')
      .style('right',rightMargin +'px')
      .style('top', optionsPosFromTop + 5 +'px')
      ;
  
    //options relevant to this viz
    yearsDropdown.selectAll('option')
    .data([2017,2016,2015])
    .enter()
    .append('option')
      .text(function(d) { return d })
      .attr('value', function(d) { return d });
  
    var selectYearLabel = svgChart.append('g')
      .attr('class', 'dropdownHeader vizToClear')
      .attr('transform','translate(' + (width-rightMargin) + ',' + optionsPosFromTop + ')')
      .append('text')
        .attr('text-anchor','end')
        .text('Data released in');     

    var selectedYear = +document.getElementById('years' + div.slice(1)).value;



    ////////// HELP AND SOURCE BOXES //////////
    
	var popUpId = div.slice(1) + 'PopUp',
		popUpIdNum = '#' + popUpId,
		popUpBkgdId = div.slice(1) + 'PopUpBkgd',
		popUpBkgdIdNum = '#' + popUpBkgdId;

    var helpBox = svgChart.append('rect')
      .attr('class', 'helpSourceRect')
      .attr('width', helpSourceBoxWidth)
      .attr('height', helpSourceBoxHeight)
      .attr('transform','translate(' + (width - helpSourceBoxWidth * 2 - 10 - 10) + ',' + 10 + ')')
      .style('fill', 'white')
      .style('stroke', helpColorA)
      .attr('rx', corners)
      .attr('ry', corners)
      .on('mouseover', function() {
        helpBox.style('fill', helpColor);
        helpText.style('fill', 'white').style('font-weight','bold');
      })
      .on('mouseout', function() {
        helpBox.style('fill', 'white');
        helpText.style('fill', helpColor).style('font-weight','normal'); 
      })
      .on('click', function() {
        d3.select(popUpBkgdIdNum).style('visibility','visible');
		d3.select(popUpIdNum).style('visibility','visible');
		d3.select(popUpIdNum).select('.helpAndSourceName').html('Explanation');
        d3.select(popUpIdNum).select('.helpAndSourceContent').html(propStackExplain);
		});
    
    var sourceBox = svgChart.append('rect')
      .attr('class', 'helpSourceRect')
      .attr('width', helpSourceBoxWidth)
      .attr('height', helpSourceBoxHeight)
      .attr('transform','translate(' + (width - helpSourceBoxWidth - 10) + ',' + 10 + ')')
      .style('fill', 'white')
      .style('stroke', sourceColorA)
      .attr('rx', corners)
      .attr('ry', corners)
      .on('mouseover', function() {
        sourceBox.style('fill', sourceColor);
        sourceText.style('fill', 'white').style('font-weight','bold');
      })
      .on('mouseout', function() {
        sourceBox.style('fill', 'white');
        sourceText.style('fill', sourceColor).style('font-weight','normal');    
      })
      .on('click', function() {
		d3.select(popUpBkgdIdNum).style('visibility','visible');
        d3.select(popUpIdNum).style('visibility','visible');
        d3.select(popUpIdNum).select('.helpAndSourceName').html('Sources');
        d3.select(popUpIdNum).select('.helpAndSourceContent').html(propStackSource);
		});
    
    var helpText = svgChart.append('text')
      .text('EXPLAIN THIS')
      .attr('class', 'helpSourceText')
      .attr('transform', 'translate(' + (width - 10*2 - helpSourceBoxWidth*1.5) + ',' + 28 + ')')
      .attr('fill', 'rgb(181,38,37)')
      ;
    
    var sourceText = svgChart.append('text')
      .text('SOURCES')
      .attr('class', 'helpSourceText')
      .attr('transform', 'translate(' + (width - 10 - helpSourceBoxWidth*0.5) + ',' + 28 + ')')
      .attr('fill', 'dark gray')
      ;
		
	//FADE IN ON LOAD
	d3.select(uniqueSvgIdNum).selectAll('.helpSourceRect, .helpSourceText')
		.transition()
		.duration(helpFadeDuration)
		.delay(helpFadeDelay)
		.style('opacity',1);
	  
    
    //BUTTON TO CLOSE
    d3.select(popUpIdNum).select('.helpAndSourceClose')
      .on('click', function() { 
        d3.select(popUpIdNum).style('visibility', 'hidden');
		d3.select(popUpBkgdIdNum).style('visibility','hidden');
		helpBox.style('display','block');
		sourceBox.style('display','block');	
      });

	var gapVizTopToPopUp = height * 0.95;
	
	//LOOK AND POSITIONING OF THE INFO BOX
	d3.select(popUpBkgdIdNum)
	  .style('display','block')
	  .style('width', width + 'px')
	  .style('height', height + 'px')
	  .style('margin-top', -height + 'px');
	  
	d3.select(popUpIdNum).select('.helpAndSourceContent')
	  .style('display','block')
      .style('width', (width * 0.9) + 'px')
	  .style('height', (height * 0.8) + 'px')
	  .style('left', (width * 0.05) + 'px')
	  .style('margin-top', -gapVizTopToPopUp + 'px');

	d3.select(popUpIdNum).select('.helpAndSourceHeader')
	  .style('display','block')
      .style('width', (width * 0.9) + 'px')
	  .style('left', (width * 0.05) + 'px')
	  .style('margin-top', -gapVizTopToPopUp + 'px');


	


 
 
    ///////////// RADIO BUTTONS /////////////
    var radioOuterR = 7;
    var radioInnerR = 4.5;
    var radioColor = 'rgb(181,38,37)';
    var activeRadio = 1;
  
    var radioGroup = svgChart.append('g')
      .attr('class','vizToClear')
      .attr('id','radioGroup');
  
    var outerRadio1 = radioGroup.append('circle')
      .attr('class', 'outerRadioCircle')
      .attr('r', radioOuterR)
      .attr('cx', 95)
      .attr('cy', optionsPosFromTop - 5)
      .style('stroke', '	#404040')
      .style('stroke-width', 1.5)
      .style('fill', '#fff');
  
    var outerRadio2 = radioGroup.append('circle')
      .attr('class', 'outerRadioCircle')
      .attr('r', radioOuterR)
      .attr('cx', 95)
      .attr('cy', optionsPosFromTop + 18)
      .style('stroke', '#404040')
      .style('stroke-width', 1.5)
      .style('fill', '#fff');
  
    var innerRadio1 = radioGroup.append('circle')
      .attr('class', 'innerRadioCircle')
      .attr('r', radioInnerR)
      .attr('cx', 95)
      .attr('cy', optionsPosFromTop - 5)
      .style('opacity', 0.8)
      .style('fill', 'rgb(0, 85, 188)'); //rgb(183, 49, 44) for red
  
    var innerRadio2 = radioGroup.append('circle')
      .attr('class', 'innerRadioCircle')
      .attr('r', 0)
      .attr('cx', 95)
      .attr('cy', optionsPosFromTop + 18)
      .style('opacity', 0.8)
      .style('fill', 'rgb(0, 85, 188)');
      
    var sensorRadio1 = radioGroup.append('circle')
      .attr('class', 'sensorRadioCircle')
      .attr('r', radioOuterR)
      .attr('cx', 95)
      .attr('cy', optionsPosFromTop - 5)
      .style('opacity', 0)
      .style('cursor', 'pointer');
  
    var sensorRadio2 = radioGroup.append('circle')
      .attr('class', 'sensorRadioCircle')
      .attr('r', radioOuterR)
      .attr('cx', 95)
      .attr('cy', optionsPosFromTop + 18)
      .style('opacity', 0)
      .style('cursor', 'pointer');
  
    var radioHeader1 = radioGroup.append('text')
      .attr('class','dropdownHeader')
      .html('Stacked')
      .attr('transform','translate(' + 15 + ',' + optionsPosFromTop + ')');
  
    var radioHeader2 = radioGroup.append('text')
      .attr('class','dropdownHeader')
      .html('Grouped')
      .attr('transform','translate(' + 15 + ',' + (optionsPosFromTop + 24) + ')');
  
  
  
    //////////////////////////////
    var raceChart = vizSection.append('g').attr('class','vizToClear');
    var ethnChart = vizSection.append('g').attr('class','vizToClear');
    
    //AXES
    var xScaleRace = d3.scaleBand()
      .rangeRound([leftMargin, (leftMargin + (width - leftMargin)/2 - rightMargin)])
      .padding(padding);
  
    var xScaleEthn = d3.scaleBand()
      .rangeRound([(leftMargin + (width - leftMargin)/2), (width - rightMargin)])
      .padding(padding);
      
    var yScale = d3.scaleLinear()
      .domain([0,1])
      .range([(height - vizOffsetFromTop - bottomToAxis),0]);
    
    var yAxis = raceChart.append('g')
    .attr('class','axis yAxis stackedAxis')
    .attr('transform','translate(' + leftMargin + ',' + 0 + ')')
    .call(d3.axisLeft(yScale)
      .tickSize(-(width - leftMargin - rightMargin))
      .ticks(5)
      .tickFormat(d3.format(".0%")))
    .selectAll('text')
      .attr('class','axisLabels');
  
    d3.select(uniqueSvgIdNum).selectAll('.stackedAxis').selectAll('path')
      .style('opacity',0);    
       
    d3.select(uniqueSvgIdNum).selectAll(".tick line")
      .attr("stroke", "#BEBEBE");
  
    d3.select(uniqueSvgIdNum).selectAll(".tick:not(:first-of-type) line")
      .attr("stroke-dasharray", "2,2");
  
       
        
    d3.csv("../../../yml_to_csv/raceVizNationalProportionsStackedBars.csv", function(data){
      data.forEach(function(d) {  //Forcing numeric in order for sorting to work correctly
        d.dataReleaseYear = +d.dataReleaseYear;
        d.asian = +d.asian;
        d.black = +d.black;
        d.nativeAmerican = +d.nativeAmerican;
        d.multipleRaces = +d.multipleRaces;
        d.nhpi = +d.nhpi;
        d.otherRace = + d.otherRace;
        d.white = +d.white;
        d.hispanic = +d.hispanic;
        d.nonHispanic = +d.nonHispanic;
      });
  
  
  
      //create an array of keys for race and another for ethnicity to use for the 'stack' data format below
      var keys = data.columns.slice(3); //get column names aka races/ethnicities starting at the second column
      var keysRace = keys.filter(function(item) { 
        return item !== 'hispanic' & item !== 'nonHispanic';
      });
      var keysEthn = keys.filter(function(item) { 
        return item == 'hispanic' || item == 'nonHispanic';
      });
      //console.log(keys);
  
    
      var currentData = data.filter(function(d) { return d.dataReleaseYear === selectedYear; });
      //console.log(currentData);
      //create a stack generator aka reshaped dataset that calculates the y-values of everything stacked up
      var stackRace = d3.stack().keys(keysRace)(currentData); 
      var stackEthn = d3.stack().keys(keysEthn)(currentData); 
    
  
      //update x axis domains with the categories in the CSV file
      xScaleRace.domain(currentData.map(function(d) {return d.category;}));
      xScaleEthn.domain(currentData.map(function(d) {return d.category;}));
  
  
      //call the x axes
      var xAxisRaceCall = d3.axisBottom(xScaleRace)
          .tickSize(0)
          .tickFormat(function(d){ //rename CSV category names for labels
            if(d=='pctPit'){
              return 'One night in ' + selectedYear;
            } else if(d=='pctShel'){
              return 'Sheltered in ' + (selectedYear - 1);
            } else if(d=='pctPop'){
              return 'General pop ' + (selectedYear - 1);
            }
          });
          
      var xAxisEthnCall = d3.axisBottom(xScaleEthn)
          .tickSize(0)
          .tickFormat(function(d){
            if(d=='pctPit'){
              return 'One night in ' + selectedYear;
            } else if(d=='pctShel'){
              return 'Sheltered in ' + (selectedYear - 1);
            } else if(d=='pctPop'){
              return 'General pop ' + (selectedYear - 1);
            }
          });
          
      var xAxisRace = raceChart.append('g')
        .attr('class','axis xAxis xStackedAxis')
        .attr('id', 'xAxisRace')
        .attr('transform','translate(' + 0 + ',' + (height - vizOffsetFromTop - bottomToAxis) + ')')
        .call(xAxisRaceCall);
      
      var xAxisEthn = ethnChart.append('g')
        .attr('class','axis xAxis xStackedAxis')
        .attr('id', 'xAxisEthn')
        .attr('transform','translate(' + 0 + ',' + (height - vizOffsetFromTop - bottomToAxis) + ')')
        .call(xAxisEthnCall);
  
  
      //styling of axes
      d3.select(uniqueSvgIdNum).selectAll('.xStackedAxis').selectAll('text')
          .attr('class','axisLabels yAxisLabels')
          .attr("y", 10)
          .attr("x", 0)
          .attr("dy", ".35em")
          .attr("transform", "rotate(-45)")
          .style('opacity',0)
          .style("text-anchor", "end");
  
      //transition in label text smoothly
      d3.select(uniqueSvgIdNum).selectAll('.xStackedAxis').selectAll('path')
        .style('opacity',0);
      
      d3.select(uniqueSvgIdNum).selectAll('.yAxisLabels').transition().duration(1500).style('opacity',1);
  
    
    
      //create the rectangles
      var seriesRace = raceChart.selectAll('.series') //need to have g elements and then rects because g holds the key, array data for each grouping/category
        .data(stackRace) //bind to the stack generator revised data format
        .enter().append('g')
          .attr('fill',function(d) { return colors[d.key] });
      
      var rectsRace = seriesRace.selectAll('rect')
        .data(function(d) { return d; }) //one d for each rectangle 
        .enter()
        .append('rect')
          .attr('x', function(d, i){ return xScaleRace(d.data.category); })
          .attr('y', (height - vizOffsetFromTop - bottomToAxis)) //setting y value to be x-axis to start, to animate in. See below for value it will be. 
          .attr('width', xScaleRace.bandwidth())
          .attr('height', 0) //setting zero height to start, to animate in. See below for value it will be.
          .on("mouseover", function(d,i) {
            // ENSURE CORRECT TOOLTIP STYLE
            d3.select("#tooltip").selectAll(".tipSpan").text(null).classed('tipSpanOff', true).classed('tooltipBold', false).classed('tooltipItalic', false).style('color','white');
            d3.select('#tooltip').classed('lineTooltip',false);

            //get mouse X position
            var xPosition = d3.mouse(chartDiv.node())[0];
  
            //Update the tooltip position and value
            if (xPosition < width/2) {
            d3.select("#tooltip")
              .style("top", (d3.event.pageY + tooltipYOffset)+"px")
              .style("left", (d3.event.pageX + tooltipXOffset.right)+"px");
            } else {
            d3.select("#tooltip")
              .style("top", (d3.event.pageY + tooltipYOffset)+"px")
              .style("left", (d3.event.pageX + tooltipXOffset.left)+"px");            
            }
     
            //d3.select('#tooltip').style('height','auto');       
            //update the contents
            d3.select('#tooltip').select('#header')
              .classed('tipSpanOff', false)
              .text(keyToCategory[d3.select(this.parentNode).datum().key]); //the key is in the parent g element as currently bound
            
            d3.select('#tooltip').select("#p1span1")
              .classed('tipSpanOff', false)
              .classed('tooltipBold', true)
              .text(d3.format(".1%")(d[1] - d[0])); //stacked charts have a 0 and 1 data item for the start and stop value
            
            d3.select("#tooltip").select("#p1span2")
              .classed('tipSpanOff', false)
              .text('of ' + stackCatToText[d.data.category]); 
              
            //Show the tooltip
            d3.select("#tooltip").classed("hidden", false);
            }) 
          .on('mouseout', function(d) {
            d3.select("#tooltip").classed("hidden", true);
          })
        ;
      
          
          
    
      var seriesEthn = ethnChart.selectAll('.series')
        .data(stackEthn) //bind to the stack generator revised data format
        .enter().append('g')
          .attr('fill',function(d) { return colors[d.key] });
  
      var rectsEthn = seriesEthn.selectAll('rect')
        .data(function(d){return d; }) //one d for each rectangle
        .enter()
        .append('rect')
          .attr('x', function(d, i) { return xScaleEthn(d.data.category); })
          .attr('y', (height - vizOffsetFromTop - bottomToAxis)) //setting y value to be x-axis to start, to animate in. See below for value it will be. 
          .attr('width', xScaleEthn.bandwidth())
          .attr('height', 0) //setting zero height to start, to animate in. See below for value it will be.
          .on("mouseover", function(d,i) {
            // ENSURE CORRECT TOOLTIP STYLE
            d3.select("#tooltip").selectAll(".tipSpan").text(null).classed('tipSpanOff', true).classed('tooltipBold', false).classed('tooltipItalic', false).style('color','white');
            d3.select('#tooltip').classed('lineTooltip',false);
            
            //get mouse X position
            var xPosition = d3.mouse(chartDiv.node())[0];
    
            //Update the tooltip position and value
            if (xPosition < width/2) {
            d3.select("#tooltip")
              .style("top", (d3.event.pageY + tooltipYOffset)+"px")
              .style("left", (d3.event.pageX + tooltipXOffset.right)+"px");
            } else {
            d3.select("#tooltip")
              .style("top", (d3.event.pageY + tooltipYOffset)+"px")
              .style("left", (d3.event.pageX + tooltipXOffset.left)+"px");            
            }
            
            //update the contents
            d3.select('#tooltip').select('#header')
              .classed('tipSpanOff', false)
              .text(keyToCategory[d3.select(this.parentNode).datum().key]); //the key is in the parent g element as currently bound
            
            d3.select('#tooltip').select("#p1span1")
              .classed('tipSpanOff', false)
              .classed('tooltipBold', true)
              .text(d3.format(".1%")(d[1] - d[0])); //stacked charts have a 0 and 1 data item for the start and stop value
            
            d3.select('#tooltip').select("#p1span2")
              .classed('tipSpanOff', false)
              .text('of ' + stackCatToText[d.data.category]); 
            
            //Show the tooltip
            d3.select("#tooltip").classed("hidden", false);
            }) 
          .on('mouseout', function(d) {
            d3.select("#tooltip").classed("hidden", true);
        })
        ;
    
      //Effect of bars coming up from bottom
      rectsRace.transition()
        .delay(function(d, i) { return i * 125; }) //animate in from left to right
        .duration(900)
        .attr("y", function(d) { return yScale(d[1]); }) //Why d[1] and d[0]? On inspection you can see each rect is assigned a 0 and 1 value (bottom, top)
        .attr("height", function(d) { return yScale(d[0]) - yScale(d[1]); });
    
      rectsEthn.transition()
        .delay(function(d, i) { return i * 100; }) //slightly different pace for effect
        .duration(1100)
        .attr("y", function(d) { return yScale(d[1]); })
        .attr("height", function(d) { return yScale(d[0]) - yScale(d[1]); });
  
  
      //Set up transition functionality between stacked and grouped
      
      //--- old version for html radio buttons ---//
      //d3.selectAll(".ntnlProportionOptions")
      //  .on("change", function(){
      //    if (this.value === "grouped") transitionGrouped();
      //    else transitionStacked();
      //  }
      //);
      
      sensorRadio1
        .on('click', function() {
           if (activeRadio === 1) {
             return;
           } else {
             innerRadio1.transition()
              .duration(1500)
              .ease(d3.easeElastic)
              .attr('r', radioInnerR);
            
            innerRadio2.transition()
              .duration(500)
              .attr('r', 0);
           }
    
           activeRadio = 1;
           
           transitionStacked();
        });
    
      sensorRadio2
        .on('click', function() {
           if (activeRadio === 2) {
             return;
           } else {
             innerRadio2.transition()
              .duration(1500)
              .ease(d3.easeElastic)
              .attr('r', radioInnerR);
            
            innerRadio1.transition()
              .duration(500)
              .attr('r', 0);
           }
           
           activeRadio = 2;
           
           transitionGrouped();
        });    
      
  
      //draw headers
      var raceHeader = vizSection.append('text')
        .attr('class','heavyChartHeader vizToClear')
        .style('opacity',0)
        .attr('transform','translate(' + (leftMargin + (((width - leftMargin)/2) - rightMargin)/2) + ',' + -25 + ')')
        .text('RACE');
        
      var ethnHeader = vizSection.append('text')
        .attr('class','heavyChartHeader vizToClear')
        .style('opacity',0)
        .attr('transform','translate(' + (xScaleEthn('pctPit') + xScaleEthn.bandwidth()/2) + ',' + -25 + ')')
        .text('ETHNICITY');
  
      d3.select(uniqueSvgIdNum).selectAll('.heavyChartHeader').transition().duration(1500).style('opacity',1);
  
      var homelessHeader1 = vizSection.append('text')
        .attr('class','homelessChartHeader vizToClear')
        .style('opacity',0)
        .style('letter-spacing', function() {
          if (width > 700) {
            return 5;
          } else if (width > 500) {
            return 4;
          } else {
            return 1;
          }
        })
        .attr('transform','translate(' + (xScaleRace('pctShel') - xScaleRace.bandwidth()/7) + ',' + -4 + ')')
        //.attr('transform','translate(' + (leftMargin + (((width - leftMargin)/2) - rightMargin)/3) + ',' + -4 + ')')
        .text('homeless');
  
      var homelessHeader2 = vizSection.append('text')
        .attr('class','homelessChartHeader vizToClear')
        .style('opacity',0)
        .style('letter-spacing', function() {
          if (width > 700) {
            return 5;
          } else if (width > 500) {
            return 4;
          } else {
            return 1;
          }
        })
        .attr('transform','translate(' + (xScaleEthn('pctShel') - xScaleEthn.bandwidth()/7) + ',' + -4 + ')')
        //.attr('transform','translate(' + (xScaleEthn('pctShel') - rightMargin/2.45) + ',' + -4 + ')')
        .text('homeless');
        
      d3.select(uniqueSvgIdNum).selectAll('.homelessChartHeader').transition().duration(1500).style('opacity',1);
  
  
  
  
  
  
      //////// LEGEND ///////
      var legendBoxSize = 15,
          legendFromBottom = height-65;
      var column1XPos = width - 310,
          column2XPos = width - 220,
          column3XPos = width - 130,
          row1YPos = 0,
          row2YPos = 20,
          row3YPos = 40;
      var column1XPosLabel = column1XPos + 20,
          column2XPosLabel = column2XPos + 20,
          column3XPosLabel = column3XPos + 20,
          row1YPosLabel = row1YPos + 13,
          row2YPosLabel = row2YPos + 13,
          row3YPosLabel = row3YPos + 13;
          
      var legendG = svgChart.append('g')
        .attr('class','legend vizToClear')
        .attr('id','legendG')
        .attr('transform','translate(' + 1000 + ',' + legendFromBottom + ')');
      
      var legendBoxes = legendG.selectAll('rect')
        .data(d3.entries(keyToCategory))
        .enter()
        .append('rect')
        .attr('id',function(d) { return d.key + 'Box'})
        .attr('class','legendBox vizToClear')
        .attr('width', legendBoxSize)
        .attr('height', legendBoxSize)
        .attr('fill', function(d) { return colors[d.key]; });
  
      d3.select('#blackBox')
        .attr('transform','translate(' + column1XPos + ',' + row1YPos + ')');
  
      d3.select('#asianBox')
        .attr('transform','translate(' + column1XPos + ',' + row2YPos + ')');
  
      d3.select('#whiteBox')
        .attr('transform','translate(' + column1XPos + ',' + row3YPos + ')');
  
      d3.select('#multipleRacesBox')
        .attr('transform','translate(' + column2XPos + ',' + row1YPos + ')');
  
      d3.select('#nhpiBox')
        .attr('transform','translate(' + column2XPos + ',' + row2YPos + ')');
  
      //d3.select('#otherRaceBox')
      //  .attr('transform','translate(' + column2XPos + ',' + row3YPos + ')');
  
      d3.select('#nativeAmericanBox')
        .attr('transform','translate(' + column2XPos + ',' + row3YPos + ')');
  
      d3.select('#hispanicBox')
        .attr('transform','translate(' + column3XPos + ',' + row1YPos + ')');
  
      d3.select('#nonHispanicBox')
        .attr('transform','translate(' + column3XPos + ',' + row2YPos + ')');
  
      var legendTexts = legendG.selectAll('text')
        .data(d3.entries(keyToCategory))
        .enter()
        .append('text')
        .attr('id', function(d) { return d.key + 'Label'; })
        .attr('class','legendLabel vizToClear')
        .text(function(d) { return keyToCategory[d.key]; });
  
      d3.select('#blackLabel')
        .attr('transform','translate(' + column1XPosLabel + ',' + row1YPosLabel + ')');
  
      d3.select('#asianLabel')
        .attr('transform','translate(' + column1XPosLabel + ',' + row2YPosLabel + ')');
  
      d3.select('#whiteLabel')
        .attr('transform','translate(' + column1XPosLabel + ',' + row3YPosLabel + ')');
  
      d3.select('#multipleRacesLabel')
        .attr('transform','translate(' + column2XPosLabel + ',' + row1YPosLabel + ')');
  
      d3.select('#nhpiLabel')
        .attr('transform','translate(' + column2XPosLabel + ',' + row2YPosLabel + ')');
  
      //d3.select('#otherRaceLabel')
      //  .attr('transform','translate(' + column2XPosLabel + ',' + row3YPosLabel + ')');
  
      d3.select('#nativeAmericanLabel')
        .attr('transform','translate(' + column2XPosLabel + ',' + row3YPosLabel + ')');
  
      d3.select('#hispanicLabel')
        .attr('transform','translate(' + column3XPosLabel + ',' + row1YPosLabel + ')');
  
      d3.select('#nonHispanicLabel')
        .attr('transform','translate(' + column3XPosLabel + ',' + row2YPosLabel + ')');
  
      
      legendG.transition()
        .duration(2500)
        .attr('transform','translate(' + 0 + ',' + legendFromBottom + ')');
  
  
  
  
      function transitionGrouped() {
        rectsRace.transition()
            .duration(500)
            .delay(function(d,i) { return i *50 })
            //normal xScale position  + divided bandwidth by number of categories * the parent node's aka g element for category index (the numCategories - this... just reverses it, and the -1 is because it was shifting one extra)
            .attr('x', function(d,i) { return xScaleRace(d.data.category) + ((xScaleRace.bandwidth() / numCategoriesRace) * (numCategoriesRace - this.parentNode.__data__.index - 1)) })
            .attr('width', xScaleRace.bandwidth() / numCategoriesRace)
          .transition()
            .attr('y', function(d) { return yScale(d[1] - d[0]); })
            .attr('height', function(d) { return yScale(0) - yScale(d[1] - d[0]); });
      
        rectsEthn.transition()
            .duration(500)
            .delay(function(d,i) { return i *70 })
            //Same as above for race, but using race widths for consistency
            .attr('x', function(d,i) { return xScaleEthn(d.data.category) + ((xScaleEthn.bandwidth() / numCategoriesRace) * (numCategoriesRace - this.parentNode.__data__.index - 3)) })
            .attr('width', xScaleRace.bandwidth() / numCategoriesRace)
          .transition()
            .attr('y', function(d) { return yScale(d[1] - d[0]); })
            .attr('height', function(d) { return yScale(0) - yScale(d[1] - d[0]); });      
      }
      
      function transitionStacked() {
        rectsRace.transition()
            .duration(500)
            .delay(function(d,i) { return i *45 })
            .attr('y', function(d) { return yScale(d[1]); }) //going back, move y position first, then blend width
            .attr('height', function(d) { return yScale(d[0]) - yScale(d[1]); })
          .transition()
            .attr('x', function(d) { return xScaleRace(d.data.category); })
            .attr('width', xScaleRace.bandwidth());
  
         rectsEthn.transition()
            .duration(500)
            .delay(function(d,i) { return i *75 })
            .attr('y', function(d) { return yScale(d[1]); }) //going back, move y position first, then blend width
            .attr('height', function(d) { return yScale(d[0]) - yScale(d[1]); })
          .transition()
            .attr('x', function(d) { return xScaleEthn(d.data.category); })
            .attr('width', xScaleEthn.bandwidth());   
      }
  
  
      ///////////// YEARS CHANGE UPDATES ////////////
      yearsDropdown
        .on('change', function() {
          
          selectedYear = +document.getElementById('years' + div.slice(1)).value;
          
          currentData = data.filter(function(d) { return d.dataReleaseYear === selectedYear; });
          //console.log('currentData',currentData);
        
          stackRace = d3.stack().keys(keysRace)(currentData); 
          stackEthn = d3.stack().keys(keysEthn)(currentData); 
          
          
          // UPDATE AXIS LABELS
          xAxisRaceCall
              .tickFormat(function(d){ //rename CSV category names for labels
                if(d=='pctPit'){
                  return 'One night in ' + selectedYear;
                } else if(d=='pctShel'){
                  return 'Sheltered in ' + (selectedYear - 1);
                } else if(d=='pctPop'){
                  return 'General pop ' + (selectedYear - 1);
                }
              });
              
          xAxisEthnCall
              .tickFormat(function(d){
                if(d=='pctPit'){
                  return 'One night in ' + selectedYear;
                } else if(d=='pctShel'){
                  return 'Sheltered in ' + (selectedYear - 1);
                } else if(d=='pctPop'){
                  return 'General pop ' + (selectedYear - 1);
                }
              });        
          
          xAxisRace
            .call(xAxisRaceCall);
          
          xAxisEthn
            .call(xAxisEthnCall);
            
          d3.select(uniqueSvgIdNum).selectAll('.xStackedAxis').selectAll('text')
              .attr('class','axisLabels')
              .attr("y", 10)
              .attr("x", 0)
              .attr("dy", ".35em")
              .attr("transform", "rotate(-45)")
              .style("text-anchor", "end");
        
        
          // UPDATE BARS
          //--- old html radio button version--- if (d3.select('input[name="ntnlProportionOptions"]:checked').property("value") === 'stacked') {
          if (activeRadio === 1) {
            seriesRace
              .data(stackRace)
              .enter();
            
            rectsRace
              .data(function(d) { return d; }) 
              .transition()
              .duration(1000)
              .attr("y", function(d) { return yScale(d[1]); }) 
              .attr("height", function(d) { return yScale(d[0]) - yScale(d[1]); }); 
              
            seriesEthn
              .data(stackEthn)
              .enter();
            
            rectsEthn
              .data(function(d) { return d; }) 
              .transition()
              .duration(1000)
              .attr("y", function(d) { return yScale(d[1]); }) 
              .attr("height", function(d) { return yScale(d[0]) - yScale(d[1]); });           
          //--- old html radio button version--- } else if (d3.select('input[name="ntnlProportionOptions"]:checked').property("value") === 'grouped') {
          } else if (activeRadio === 2) {
            seriesRace
              .data(stackRace)
              .enter();
            
            rectsRace
              .data(function(d) { return d; }) 
              .transition()
              .duration(1000)
              .attr('y', function(d) { return yScale(d[1] - d[0]); })
              .attr("height", function(d) { return yScale(d[0]) - yScale(d[1]); }); 
              
            seriesEthn
              .data(stackEthn)
              .enter();
            
            rectsEthn
              .data(function(d) { return d; }) 
              .transition()
              .duration(1000)
              .attr('y', function(d) { return yScale(d[1] - d[0]); })
              .attr("height", function(d) { return yScale(d[0]) - yScale(d[1]); });             
          }
        });
    }); //end of read CSV call-back
  } //end of function drawNtnlProportions      
      
      
  //////////////////////////////////////////////
  //////////////// LINE CHART //////////////////
  //////////////////////////////////////////////         
  function drawNtnlPropLines() {
    "use strict";
    
    // DEFINITIONS
    var leftMargin = 52,
        rightMargin = width * 0.05,
        bottomToAxis = 170,
        optionsPosFromTop = 125;    
        
    var vizOffsetFromTop = 200; //main area of visualization (below headers)

    var linesChartWidth = width - leftMargin - rightMargin,
        linesChartHeight = height - vizOffsetFromTop - bottomToAxis;  
  
    var linesInDuration = 3000;  
  

    // CANVAS AND SECTIONS
    var uniqueSvgId = div.slice(1) + 'Svg',
        uniqueSvgIdNum = '#' + uniqueSvgId;
    var svgChart = d3.select(uniqueSvgIdNum);
      
    var vizSection = svgChart.append('g')
      .attr('transform','translate(' + 0 + ',' + vizOffsetFromTop + ')');

	  
	  
   ////////// HELP AND SOURCE BOXES //////////
    
	var popUpId = div.slice(1) + 'PopUp',
		popUpIdNum = '#' + popUpId,
		popUpBkgdId = div.slice(1) + 'PopUpBkgd',
		popUpBkgdIdNum = '#' + popUpBkgdId;

    var helpBox = svgChart.append('rect')
      .attr('class', 'helpSourceRect')
      .attr('width', helpSourceBoxWidth)
      .attr('height', helpSourceBoxHeight)
      .attr('transform','translate(' + (width - helpSourceBoxWidth * 2 - 10 - 10) + ',' + 10 + ')')
      .style('fill', 'white')
      .style('stroke', helpColorA)
      .attr('rx', corners)
      .attr('ry', corners)
      .on('mouseover', function() {
        helpBox.style('fill', helpColor);
        helpText.style('fill', 'white').style('font-weight','bold');
      })
      .on('mouseout', function() {
        helpBox.style('fill', 'white');
        helpText.style('fill', helpColor).style('font-weight','normal'); 
      })
      .on('click', function() {
        d3.select(popUpBkgdIdNum).style('visibility','visible');
        d3.select(popUpIdNum).style('visibility','visible');
        d3.select(popUpIdNum).select('.helpAndSourceName').html('Explanation');
        if (activeViz === "ntnlPropLines") {
          d3.select(popUpIdNum).select('.helpAndSourceContent').html(propLinesExplain);
        } else {
          d3.select(popUpIdNum).select('.helpAndSourceContent').html(propLinesCompExplain);          
        }
		});
    
    var sourceBox = svgChart.append('rect')
      .attr('class', 'helpSourceRect')
      .attr('width', helpSourceBoxWidth)
      .attr('height', helpSourceBoxHeight)
      .attr('transform','translate(' + (width - helpSourceBoxWidth - 10) + ',' + 10 + ')')
      .style('fill', 'white')
      .style('stroke', sourceColorA)
      .attr('rx', corners)
      .attr('ry', corners)
      .on('mouseover', function() {
        sourceBox.style('fill', sourceColor);
        sourceText.style('fill', 'white').style('font-weight','bold');
      })
      .on('mouseout', function() {
        sourceBox.style('fill', 'white');
        sourceText.style('fill', sourceColor).style('font-weight','normal');    
      })
      .on('click', function() {
        d3.select(popUpBkgdIdNum).style('visibility','visible');
        d3.select(popUpIdNum).style('visibility','visible');
        d3.select(popUpIdNum).select('.helpAndSourceName').html('Sources');
        if (activeViz === "ntnlPropLines") {               
          d3.select(popUpIdNum).select('.helpAndSourceContent').html(propLinesSource);
        } else {
          d3.select(popUpIdNum).select('.helpAndSourceContent').html(propLinesCompSource);          
        }
		});
    
    var helpText = svgChart.append('text')
      .text('EXPLAIN THIS')
      .attr('class', 'helpSourceText')
      .attr('transform', 'translate(' + (width - 10*2 - helpSourceBoxWidth*1.5) + ',' + 28 + ')')
      .attr('fill', 'rgb(181,38,37)')
      ;
    
    var sourceText = svgChart.append('text')
      .text('SOURCES')
      .attr('class', 'helpSourceText')
      .attr('transform', 'translate(' + (width - 10 - helpSourceBoxWidth*0.5) + ',' + 28 + ')')
      .attr('fill', 'dark gray')
      ;

	  //FADE IN ON LOAD
	d3.select(uniqueSvgIdNum).selectAll('.helpSourceRect, .helpSourceText')
		.transition()
		.duration(helpFadeDuration)
		.delay(helpFadeDelay)
		.style('opacity',1);
	      
    
    //BUTTON TO CLOSE
    d3.select(popUpIdNum).select('.helpAndSourceClose')
      .on('click', function() { 
        d3.select(popUpIdNum).style('visibility', 'hidden');
		d3.select(popUpBkgdIdNum).style('visibility','hidden');
		helpBox.style('display','block');
		sourceBox.style('display','block');	
      });

	var gapVizTopToPopUp = height * 0.95;
	
	//LOOK AND POSITIONING OF THE INFO BOX
	d3.select(popUpBkgdIdNum)
	  .style('display','block')
	  .style('width', width + 'px')
	  .style('height', height + 'px')
	  .style('margin-top', -height + 'px');
	  
	d3.select(popUpIdNum).select('.helpAndSourceContent')
	  .style('display','block')
      .style('width', (width * 0.9) + 'px')
	  .style('height', (height * 0.8) + 'px')
	  .style('left', (width * 0.05) + 'px')
	  .style('margin-top', -gapVizTopToPopUp + 'px');

	d3.select(popUpIdNum).select('.helpAndSourceHeader')
	  .style('display','block')
      .style('width', (width * 0.9) + 'px')
	  .style('left', (width * 0.05) + 'px')
	  .style('margin-top', -gapVizTopToPopUp + 'px');

	  

    //CLIP PATH
    var defs = svgChart.append("defs");

    defs.append("clipPath") 
          .attr("id", "linesClip")
        .append("rect")
          .attr("width", width - leftMargin - rightMargin)
          .attr("height", height - vizOffsetFromTop - bottomToAxis)
          .attr('transform','translate(' + leftMargin + ',' + 0 + ')');


      
      
      
      
      
    ///////////// DROPDOWN(S) ///////////////
    //create dropdowns
    var categoriesDropdown = chartDiv.append('select')
      .attr('id','categories' + div.slice(1))
      .attr('class','displayToggle dropdown');

    categoriesDropdown
      .style('display','inline')
      .style('right',rightMargin +'px')
      .style('top', optionsPosFromTop + 5 +'px')
      ;

    var categoriesOptions = ['All people', 'Individuals (not in a family)', 'People in a family'];
    var categoriesOptionsVals = {'All people':'all', 'Individuals (not in a family)':'indiv', 'People in a family':'inFam'};
    
    categoriesDropdown.selectAll('option')
    .data(categoriesOptions)
    .enter()
    .append('option')
      .text(function(d) { return d })
      .attr('value', function(d) { return categoriesOptionsVals[d]; });

    var selectGroupLabel = svgChart.append('g')
      .attr('class', 'dropdownHeader vizToClear')
      .attr('transform','translate(' + (width-rightMargin) + ',' + (optionsPosFromTop) + ')')
      .append('text')
        .attr('text-anchor','end')
        .text('Select population');
  
    var selectedGroup = document.getElementById('categories' + div.slice(1)).value;
 
 
 
 
 
 
      //////// LEGEND ///////
      var legendBoxSize = 15,
          legendFromBottom = height-65;
      var column1XPos,
          column2XPos = width - 310,
          column3XPos = width - 110,
          row1YPos = 0,
          row2YPos = 20,
          row3YPos = 40;
      var column1XPosLabel = column1XPos + 20,
          column2XPosLabel = column2XPos + 20,
          column3XPosLabel = column3XPos + 20,
          row1YPosLabel = row1YPos + 13,
          row2YPosLabel = row2YPos + 13,
          row3YPosLabel = row3YPos + 13;
          
      var legendG = svgChart.append('g')
        .attr('class','legend vizToClear legendG')
        .attr('id','legendG')
        .attr('opacity',0)
        .attr('transform','translate(' + 0 + ',' + legendFromBottom + ')');
      
      var legendBoxes = d3.select(uniqueSvgIdNum).select('.legendG').selectAll('rect')
        .data(d3.entries(keyToCategoryLines))
        .enter()
        .append('rect')
        .attr('id',function(d) { return d.key + 'Box'})
        .attr('class','legendBox vizToClear')
        .attr('width', legendBoxSize)
        .attr('height', legendBoxSize)
        .attr('fill', function(d) { return colors[d.key]; });
  
      d3.select(uniqueSvgIdNum).select('#blackBox')
        .attr('transform','translate(' + column2XPos + ',' + row1YPos + ')');
  
      d3.select(uniqueSvgIdNum).select('#asianNhpiNativeAmBox')
        .attr('transform','translate(' + column2XPos + ',' + row2YPos + ')');
  
      d3.select(uniqueSvgIdNum).select('#nonHispWhiteBox')
        .attr('transform','translate(' + column2XPos + ',' + row3YPos + ')');
  
      d3.select(uniqueSvgIdNum).select('#multipleRacesBox')
        .attr('transform','translate(' + column3XPos + ',' + row1YPos + ')');
  
      d3.select(uniqueSvgIdNum).select('#hispanicBox')
        .attr('transform','translate(' + column3XPos + ',' + row2YPos + ')');
  
      d3.select(uniqueSvgIdNum).select('#nonHispanicBox')
        .attr('transform','translate(' + column3XPos + ',' + row3YPos + ')');
      
      var legendTexts = d3.select(uniqueSvgIdNum).select('.legendG').selectAll('text')
        .data(d3.entries(keyToCategoryLines))
        .enter()
        .append('text')
        .attr('id', function(d) { return d.key + 'Label'; })
        .attr('class','legendLabel vizToClear')
        .text(function(d) { return keyToCategoryLines[d.key]; });
  
      d3.select(uniqueSvgIdNum).select('#blackLabel')
        .attr('transform','translate(' + column2XPosLabel + ',' + row1YPosLabel + ')');
  
      d3.select(uniqueSvgIdNum).select('#asianNhpiNativeAmLabel')
        .attr('transform','translate(' + column2XPosLabel + ',' + row2YPosLabel + ')');
  
      d3.select(uniqueSvgIdNum).select('#nonHispWhiteLabel')
        .attr('transform','translate(' + column2XPosLabel + ',' + row3YPosLabel + ')');
  
      d3.select(uniqueSvgIdNum).select('#multipleRacesLabel')
        .attr('transform','translate(' + column3XPosLabel + ',' + row1YPosLabel + ')');
  
      d3.select(uniqueSvgIdNum).select('#hispanicLabel')
        .attr('transform','translate(' + column3XPosLabel + ',' + row2YPosLabel + ')');
  
      d3.select(uniqueSvgIdNum).select('#nonHispanicLabel')
        .attr('transform','translate(' + column3XPosLabel + ',' + row3YPosLabel + ')');

      if (activeViz === 'ntnlPropLines') { 
        d3.select(uniqueSvgIdNum).select('#nonHispanicBox').style('display', 'none');
        d3.select(uniqueSvgIdNum).select('#nonHispanicLabel').style('display', 'none');
      }

  
      legendG.transition()
        .duration(3500)
        .attr('opacity',1);
  
  
  
    ////// RADIO BUTTONS ///////
    var radioOuterR = 7;
    var radioInnerR = 4.5;
    var radioColor = 'rgb(181,38,37)';
    var activeRadio = 1;
  
    var radioGroup = svgChart.append('g')
      .attr('class','vizToClear')
      .attr('id','radioGroup');
  
    var outerRadio1, outerRadio2, innerRadio1, innerRadio2, sensorRadio1, sensorRadio2;
  
    if (activeViz === 'ntnlPropLines') { radioGroup.style('display','none'); };
    
    
     outerRadio1 = radioGroup.append('circle')
      .attr('class', 'outerRadioCircle')
      .attr('r', 0)
      .attr('cx', 95)
      .attr('cy', optionsPosFromTop - 5)
      .style('stroke', '	#404040')
      .style('stroke-width', 1.5)
      .style('fill', '#fff');
  
     outerRadio2 = radioGroup.append('circle')
      .attr('class', 'outerRadioCircle')
      .attr('r', 0)
      .attr('cx', 95)
      .attr('cy', optionsPosFromTop + 18)
      .style('stroke', '#404040')
      .style('stroke-width', 1.5)
      .style('fill', '#fff');
  
     innerRadio1 = radioGroup.append('circle')
      .attr('class', 'innerRadioCircle')
      .attr('r', radioInnerR)
      .attr('cx', 95)
      .attr('cy', optionsPosFromTop - 5)
      .style('opacity', 0.8)
      .style('fill', 'rgb(0, 85, 188)'); //rgb(183, 49, 44) for red
  
     innerRadio2 = radioGroup.append('circle')
      .attr('class', 'innerRadioCircle')
      .attr('r', 0)
      .attr('cx', 95)
      .attr('cy', optionsPosFromTop + 18)
      .style('opacity', 0.8)
      .style('fill', 'rgb(0, 85, 188)');
  
     sensorRadio1 = radioGroup.append('circle')
      .attr('class', 'sensorRadioCircle')
      .attr('r', 0)
      .attr('cx', 95)
      .attr('cy', optionsPosFromTop - 5)
      .style('opacity', 0)
      .style('cursor', 'pointer');
  
     sensorRadio2 = radioGroup.append('circle')
      .attr('class', 'sensorRadioCircle')
      .attr('r', 0)
      .attr('cx', 95)
      .attr('cy', optionsPosFromTop + 18)
      .style('opacity', 0)
      .style('cursor', 'pointer');
        
  
    var radioHeader1 = radioGroup.append('text')
      .attr('class','dropdownHeader')
      .html('Pct point')
      .attr('transform','translate(' + 15 + ',' + optionsPosFromTop + ')');
  
    var radioHeader2 = radioGroup.append('text')
      .attr('class','dropdownHeader')
      .html('Ratio')
      .attr('transform','translate(' + 15 + ',' + (optionsPosFromTop + 24) + ')');
  
    //delay the radio buttons appearing (r>0) until after lines have fully entered (or will interrupt)
    outerRadio1.transition()
      .delay(linesInDuration)
      .duration(1000)
      .attr('r', radioOuterR);
  
    outerRadio2.transition()
      .delay(linesInDuration)
      .duration(1000)
      .attr('r', radioOuterR);
  
    innerRadio1.transition()
      .delay(linesInDuration)
      .duration(1000)
      .attr('r', radioInnerR);
  
    sensorRadio1.transition()
      .delay(linesInDuration)
      .duration(1000)
      .attr('r', radioOuterR);
  
    sensorRadio2.transition()
      .delay(linesInDuration)
      .duration(1000)
      .attr('r', radioOuterR);
    
  
  

    
    
    var years = [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
        numYears = years.length;
  
  
    var lineChart = vizSection.append('g').attr('class','lineChartG vizToClear');
  
  
  
    //AXES
    var xScaleLines = d3.scaleLinear()
      .range([leftMargin, (width - rightMargin)]);
      
    var yScaleLines = d3.scaleLinear()
      .range([linesChartHeight,0]);
  
  
  
    function drawLines(data, nestedData, tooltipData){
      //finish defining and calling axes
      xScaleLines.domain([d3.min(data, function(d) { return d.year; }), d3.max(data, function(d) { return d.year; })]); //using original data to take highest and lowest values of all scope categories
      
      if (activeViz === 'ntnlPropLines') {
        yScaleLines.domain([0, 0.55])
      } else {
        yScaleLines.domain([-0.4, 0.4]);
      }
      //---ratioVersion---> yScaleLines.domain([0,5]); this is set when selecting the radio button
  
      var xAxisLinesCall = d3.axisBottom(xScaleLines)
          .tickSize(0)
          .ticks(numYears)
        .tickFormat(d3.format("0"));
          
      var yAxisLinesCall = d3.axisLeft(yScaleLines)
        .tickSize(-(width - leftMargin - rightMargin))
        .ticks(5)
        .tickFormat(d3.format(".0%"));
        //--radio Version---> .tickFormat(d3.format(".1f"));
    
      var xAxisLines = lineChart.append('g')
        .attr('class','axis xAxis xAxisLines axisLines')
        .attr('id', 'xAxisLines')
        .attr('transform','translate(' + 0 + ',' + (height - vizOffsetFromTop - bottomToAxis) + ')')
        .call(xAxisLinesCall);
      
      var yAxisLines = lineChart.append('g')
      .attr('class','axis yAxis yAxisLines axisLines')
      .attr('transform','translate(' + leftMargin + ',' + 0 + ')')
      .call(yAxisLinesCall)
      .selectAll('text')
        .attr('class','axisLabels');
    
      //styling of x axis labels
      d3.select(uniqueSvgIdNum).selectAll('.xAxisLines').selectAll('text')
          .attr('class','axisLabels')
          .attr("y", 15)
          .attr("x", 0)
          .attr("dy", ".35em")
          .attr("transform", "rotate(-45)")
          .style("text-anchor", "end");  
  
      d3.select(uniqueSvgIdNum).selectAll('.axisLines').selectAll('path')
        .style('opacity',0);    
         
      d3.select(uniqueSvgIdNum).selectAll(".tick line")
        .attr("stroke", "#BEBEBE");
    
      d3.select(uniqueSvgIdNum).selectAll(".tick:not(:first-of-type) line")
        .attr("stroke-dasharray", "2,2");
  
      //create a line generator function --> determines the x,y per the scales
      var lineGenerator;
      if (activeViz === "ntnlPropLines") {
        lineGenerator = d3.line()
          .x(function(d) { return xScaleLines(d.year); })  //the scope of this d (individuals elements) is based on the data bind and then what's fed into the lineGenerator function below
          .defined(function(d) { return d.pctSheltered !== null; }) //Why not working right on IE or Edge?
          .y(function(d) { return yScaleLines(d.pctSheltered); });
      } else {
        lineGenerator = d3.line()
          .x(function(d) { return xScaleLines(d.year); })  //the scope of this d (individuals elements) is based on the data bind and then what's fed into the lineGenerator function below
          .defined(function(d) { return d.differencePopShel !== null; }) //Why not working right on IE or Edge?
          .y(function(d) { return yScaleLines(d.differencePopShel); });
          //---ratio version---> .y(function(d) { return yScaleLines(d.pctSheltered / d.pctPopulation); });
      }

      var linesG = d3.select(uniqueSvgIdNum).selectAll('.lineChartG').selectAll('.lines')
        .data(nestedData)
        .enter().append('g')
          .attr('class','lines');
      var lines = d3.select(uniqueSvgIdNum).selectAll('.lines').append('path')
          .attr('class','applyLinesClip') //not currently necessary
          .attr('d', function(d) { return lineGenerator(d.values[0].values); }) //values[0] is for 'all'; 2 for 'individuals'; 1 for 'inFamily'
          .attr('stroke', function(d) { return colors[d.key]});   
  
  
      //animate the lines from left to right
      //see http://bl.ocks.org/duopixel/4063326; http://bl.ocks.org/atmccann/8966400; https://bl.ocks.org/basilesimon/f164aec5758d16d51d248e41af5428e4
      var totalLength = lines.node().getTotalLength();
        //console.log(totalLength);
        
      lines
        .attr("stroke-dasharray", totalLength + " " + totalLength)
        .attr("stroke-dashoffset", -totalLength) //negative for drawing left to right, positive for right to left
        .transition()
          //.duration(function(d){return Math.floor(Math.random()*(1400-1000+1)+1000);}) //random number between x and y. From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
          //.ease(d3.easeBackOut) //see here for various ease (rate smoothing) options: https://github.com/d3/d3-ease; https://bl.ocks.org/d3noob/1ea51d03775b9650e8dfd03474e202fe
          .duration(function(d){return linesInDuration;}) //random number between x and y. From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
          .ease(d3.easeQuadInOut) //see here for various ease (rate smoothing) options: https://github.com/d3/d3-ease; https://bl.ocks.org/d3noob/1ea51d03775b9650e8dfd03474e202fe
          .attr("stroke-dashoffset", 0);
  
  
  
      /////// RADIO BUTTONS FUNCTIONALITY ////////
      sensorRadio1
        .on('click', function() {
          if (activeRadio === 1) {
             return;
          } else {
             innerRadio1.transition()
              .duration(1500)
              .ease(d3.easeElastic)
              .attr('r', radioInnerR);
            
            innerRadio2.transition()
              .duration(500)
              .attr('r', 0);
      
            activeRadio = 1;
    
            //update and re-call yScale
            yScaleLines.domain([-0.4, 0.4]);
    
            d3.select(uniqueSvgIdNum).select('.yAxisLines')
              .transition()
              .duration(1500)
              .call(d3.axisLeft(yScaleLines)
                  .tickSize(-(width - leftMargin - rightMargin))
                  .ticks(5)
                  .tickFormat(d3.format(".0%"))
                )
                .selectAll('text')
                .attr('class','axisLabels');
    
            d3.select(uniqueSvgIdNum).selectAll(".tick line")
              .attr("stroke", "#BEBEBE");
          
            d3.select(uniqueSvgIdNum).selectAll(".tick:not(:first-of-type) line")
              .attr("stroke-dasharray", "2,2");
    
    
            //Update the line generator and redraw (transition to) the lines
            lineGenerator
              .x(function(d) { return xScaleLines(d.year); })  //the scope of this d (individuals elements) is based on the data bind and then what's fed into the lineGenerator function below
              .defined(function(d) { return d.differencePopShel !== null; }) //Why not working right on IE or Edge?
              .y(function(d) { return yScaleLines(d.differencePopShel); });
    
            selectedCategory = document.getElementById('categories' + div.slice(1)).value;
  
            if (selectedCategory === "all") { 
              transitionAll(); 
            } else if (selectedCategory === "indiv") { 
              transitionIndivs(); 
            } else if (selectedCategory === "inFam") { 
              transitionInFamily(); 
            }         
    
    
            //Title
            chartDiv.select('.chartTitleBody')
              .html(propLinesCompTitle);
  
          }
        });
    
      sensorRadio2
        .on('click', function() {
          if (activeRadio === 2) {
             return;
          } else {
             innerRadio2.transition()
              .duration(1500)
              .ease(d3.easeElastic)
              .attr('r', radioInnerR);
            
          innerRadio1.transition()
              .duration(500)
              .attr('r', 0);
  
            activeRadio = 2;
    
            //update and re-call yScale
            yScaleLines.domain([0,5]);
             
            d3.select(uniqueSvgIdNum).select('.yAxisLines')
              .transition()
              .duration(1500)
              .call(d3.axisLeft(yScaleLines)
                  .tickSize(-(width - leftMargin - rightMargin))
                  .ticks(5)
                  .tickFormat(d3.format(".1f"))
                )
                .selectAll('text')
                .attr('class','axisLabels');
            
            d3.select(uniqueSvgIdNum).selectAll(".tick line")
              .attr("stroke", "#BEBEBE");
          
            d3.select(uniqueSvgIdNum).selectAll(".tick:not(:first-of-type) line")
              .attr("stroke-dasharray", "2,2");
    
              
            //Update the line generator and redraw (transition to) the lines
            lineGenerator
              .x(function(d) { return xScaleLines(d.year); })  //the scope of this d (individuals elements) is based on the data bind and then what's fed into the lineGenerator function below
              .defined(function(d) { return d.differencePopShel !== null; }) //Why not working right on IE or Edge?
              .y(function(d) { return yScaleLines(d.pctSheltered / d.pctPopulation); });
    
            selectedCategory = document.getElementById('categories' + div.slice(1)).value;
  
            if (selectedCategory === "all") { 
              transitionAll(); 
            } else if (selectedCategory === "indiv") { 
              transitionIndivs(); 
            } else if (selectedCategory === "inFam") { 
              transitionInFamily(); 
            }         
              
    
            //Title
            chartDiv.select('.chartTitleBody')
              .html(propLinesCompTitle2);
          }
           
        });    
  
  
  
  
      /////////// TOOLTIP AND VERTICAL REF LINE AND REF DOTS ///////////

      var selectedCategory = document.getElementById('categories' + div.slice(1)).value;
  
      //append G for the line and tooltip
      var targetG = svgChart.append('g')
        .attr('class','target vizToClear')
        .style('display','none');
      
      var tooltipLineX = targetG.append('line')
        .attr('class','tooltipLineX')
        .attr('x1',width)
        .attr('x2',width);
  
      var tooltipLineY = targetG.append('line')
        .attr('class','tooltipLineY')
        .attr('x1',0)
        .attr('y1',vizOffsetFromTop)
        .attr('x2',0)
        .attr('y2',height - bottomToAxis);
        
      
      var lineDotSize = 5;
      var blackCircle = targetG.append('circle')
        .attr('r', lineDotSize)
        .attr('class', 'lineDot')
        .style('stroke', colors.black);
      var asianNhpiNAmCircle = targetG.append('circle')
        .attr('r', lineDotSize)
        .attr('class', 'lineDot')
        .style('stroke', colors.asianNhpiNativeAm);
      var nonHispWhiteCircle = targetG.append('circle')
        .attr('r', lineDotSize)
        .attr('class', 'lineDot')
        .style('stroke', colors.nonHispWhite);
      var multiRaceCircle = targetG.append('circle')
        .attr('r', lineDotSize)
        .attr('class', 'lineDot')
        .style('stroke', colors.multipleRaces);
      var hispCircle = targetG.append('circle')
        .attr('r', lineDotSize)
        .attr('class', 'lineDot')
        .style('stroke', colors.hispanic);
      var nonHispCircle = targetG.append('circle')
        .attr('r', lineDotSize)
        .attr('class', 'lineDot')
        .style('stroke', colors.nonHispanic);
      
      if (activeViz === 'ntnlPropLines') { nonHispCircle.style('display', 'none'); }
  
  
      //rectangle for sensing mouseover
      var lineSensor = svgChart.append('rect')
        .attr('transform', 'translate(' + 0 + ',' + vizOffsetFromTop + ')')
        .attr('class', 'lineSensor vizToClear')
        .style('opacity','0')
        .style('pointer-events','all')
        .attr('width', width)
        .attr('height', height - vizOffsetFromTop - bottomToAxis)
        .on("mouseover", function() { 
          // ENSURE CORRECT TOOLTIP STYLE
          d3.select("#tooltip").selectAll(".tipSpan").text(null).classed('tipSpanOff', true).classed('tooltipBold', false).classed('tooltipItalic', false).style('color','white');
          d3.select('#tooltip').classed('lineTooltip',true);
          
          d3.select('#tooltip').style('width', 'auto');
          targetG.style("display", null); })
        .on("mouseout", function() { 
            targetG.style("display", "none");
            d3.select("#tooltip").classed("hidden", true);
            d3.select('#tooltip').style('width', tooltipWidth + 'px');
        })
        .on("mousemove", mousemove)
        ;
        
      //Define a bisector. This takes the domain-converted mouse position fed into it and finds what i position in the years array (x-axis) it would get if inserted (to the left) AKA what's the nearest year position to where the mouse is?
      var bisectYearPosition = d3.bisector(function(d) { return d; }).left; //https://github.com/d3/d3-array#bisectLeft
  
  
      function mousemove() {
        var x0 = Math.round(xScaleLines.invert(d3.mouse(this)[0])); 
        //.invert() gets the domain values (converts range position to domain) rather than other way around.
        //Math.round results in the mouse position returning whichever x-axis year is nearest. Otherwise, depending on .left or .right in the bisector, the space between years rounds completely up or completely down
        //console.log('x0 unrounded: ', xScaleLines.invert(d3.mouse(this)[0]), 'x0 rounded: ',x0);
        //note that having the sensor rectangle only overlay the graph area didn't work, as the mouse was returning a value as if it was the edge of the screen, but a full width sensor rectange seems to work.
        var iOfMouse = bisectYearPosition(years, x0); //find the x0 mouse position's nearest year index
        //console.log(iOfMouse);
        var applicableYear = years[iOfMouse]; //return the applicable closest year along the x axis
        //console.log(applicableYear);
  
        var xPosition = d3.mouse(chartDiv.node())[0];
    
        //Update the tooltip position and value
        if (xPosition < width/2) {
          d3.select("#tooltip")
            .style("top", (d3.event.pageY + tooltipYOffset)+"px")
            .style("left", (d3.event.pageX + tooltipXOffset.right)+"px");
        } else {
        d3.select("#tooltip")
          .style("top", (d3.event.pageY + tooltipYOffset)+"px")
          .style("left", (d3.event.pageX - 85)+"px"); //note this is different than usual because tooltip width is different for this chart      
        }
        
        
        //update the contents
        d3.select('#tooltip').select('#header')
          .classed('tipSpanOff', false)
          .style('color','black')
          .text(applicableYear);

        d3.select("#tooltip").select("#p1span1")
          .classed('tipSpanOff', false)
          .classed('tooltipBold', true);            
        d3.select("#tooltip").select("#p2span1")
          .classed('tipSpanOff', false)
          .classed('tooltipBold', true);
        d3.select("#tooltip").select("#p3span1")
          .classed('tipSpanOff', false)
          .classed('tooltipBold', true);
        d3.select("#tooltip").select("#p4span1")
          .classed('tipSpanOff', false)
          .classed('tooltipBold', true); 
        d3.select("#tooltip").select("#p5span1")
          .classed('tipSpanOff', false)
          .classed('tooltipBold', true);
        d3.select("#tooltip").select("#p6span1")
          .classed('tipSpanOff', false)
          .classed('tooltipBold', true);
  
  
        function tooltipText() {
          if (activeViz === 'ntnlPropLines') {
              d3.select("#tooltip").select("#p1span1")
                .style('color',colors.black)             
                .text(d3.format(".1%")(tooltipData[applicableYear].black[selectedCategory][0].pctSheltered));
              d3.select("#tooltip").select("#p2span1")
                .style('color',colors.nonHispWhite)
                .text(d3.format(".1%")(tooltipData[applicableYear].nonHispWhite[selectedCategory][0].pctSheltered));

              d3.select("#tooltip").select("#p3span1")
                .style('color',colors.hispanic)
                .text(d3.format(".1%")(tooltipData[applicableYear].hispanic[selectedCategory][0].pctSheltered));
              d3.select("#tooltip").select("#p4span1")
                .style('color',colors.multipleRaces)
                .text(d3.format(".1%")(tooltipData[applicableYear].multipleRaces[selectedCategory][0].pctSheltered));
              d3.select("#tooltip").select("#p5span1")
                .style('color',colors.asianNhpiNativeAm)
                .text(d3.format(".1%")(tooltipData[applicableYear].asianNhpiNativeAm[selectedCategory][0].pctSheltered));
              d3.select("#tooltip").select("#p6span1").text('');

    
              blackCircle.attr("transform", "translate(" + 0 + "," + (vizOffsetFromTop + yScaleLines(tooltipData[applicableYear].black[selectedCategory][0].pctSheltered)) + ")");
              asianNhpiNAmCircle.attr("transform", "translate(" + 0 + "," + (vizOffsetFromTop + yScaleLines(tooltipData[applicableYear].asianNhpiNativeAm[selectedCategory][0].pctSheltered)) + ")");
              nonHispWhiteCircle.attr("transform", "translate(" + 0 + "," + (vizOffsetFromTop + yScaleLines(tooltipData[applicableYear].nonHispWhite[selectedCategory][0].pctSheltered)) + ")");
              multiRaceCircle.attr("transform", "translate(" + 0 + "," + (vizOffsetFromTop + yScaleLines(tooltipData[applicableYear].multipleRaces[selectedCategory][0].pctSheltered)) + ")");
              hispCircle.attr("transform", "translate(" + 0 + "," + (vizOffsetFromTop + yScaleLines(tooltipData[applicableYear].hispanic[selectedCategory][0].pctSheltered)) + ")");
              nonHispCircle.attr("transform", "translate(" + 0 + "," + (vizOffsetFromTop + yScaleLines(tooltipData[applicableYear].nonHispanic[selectedCategory][0].pctSheltered)) + ")");
                    
          } else if (activeViz === 'ntnlPropLinesComp'){
            if (activeRadio === 1) {
							//Don't show tooltip, dots, or reference line for the missing data on individuals or people in families
							if ((applicableYear === 2008 || applicableYear === 2009) && (selectedCategory === 'indiv' || selectedCategory === 'inFam')) {
								targetG.style('opacity',0);
								d3.select("#tooltip").style('visibility','hidden');
							} else {
								targetG.style('opacity',1);
								d3.select("#tooltip").style('visibility','visible');
							}

							d3.select("#tooltip").select("#p1span1")
                .style('color',colors.black)
                .text(d3.format(".1%")(tooltipData[applicableYear].black[selectedCategory][0].differencePopShel));
              d3.select("#tooltip").select("#p2span1")
                .style('color',colors.multipleRaces)
                .text(d3.format(".1%")(tooltipData[applicableYear].multipleRaces[selectedCategory][0].differencePopShel));
              d3.select("#tooltip").select("#p3span1")
                .style('color',colors.nonHispanic)
                .text(d3.format(".1%")(tooltipData[applicableYear].nonHispanic[selectedCategory][0].differencePopShel));
              d3.select("#tooltip").select("#p4span1")
                .style('color',colors.hispanic)
                .text(d3.format(".1%")(tooltipData[applicableYear].hispanic[selectedCategory][0].differencePopShel));
              d3.select("#tooltip").select("#p5span1")
                .style('color',colors.asianNhpiNativeAm)
                .text(d3.format(".1%")(tooltipData[applicableYear].asianNhpiNativeAm[selectedCategory][0].differencePopShel));
              d3.select("#tooltip").select("#p6span1")
                .style('color',colors.nonHispWhite)
                .text(d3.format(".1%")(tooltipData[applicableYear].nonHispWhite[selectedCategory][0].differencePopShel));
    
              blackCircle.attr("transform", "translate(" + 0 + "," + (vizOffsetFromTop + yScaleLines(tooltipData[applicableYear].black[selectedCategory][0].differencePopShel)) + ")");
              asianNhpiNAmCircle.attr("transform", "translate(" + 0 + "," + (vizOffsetFromTop + yScaleLines(tooltipData[applicableYear].asianNhpiNativeAm[selectedCategory][0].differencePopShel)) + ")");
              nonHispWhiteCircle.attr("transform", "translate(" + 0 + "," + (vizOffsetFromTop + yScaleLines(tooltipData[applicableYear].nonHispWhite[selectedCategory][0].differencePopShel)) + ")");
              multiRaceCircle.attr("transform", "translate(" + 0 + "," + (vizOffsetFromTop + yScaleLines(tooltipData[applicableYear].multipleRaces[selectedCategory][0].differencePopShel)) + ")");
              hispCircle.attr("transform", "translate(" + 0 + "," + (vizOffsetFromTop + yScaleLines(tooltipData[applicableYear].hispanic[selectedCategory][0].differencePopShel)) + ")");
              nonHispCircle.attr("transform", "translate(" + 0 + "," + (vizOffsetFromTop + yScaleLines(tooltipData[applicableYear].nonHispanic[selectedCategory][0].differencePopShel)) + ")");
          
            } else if (activeRadio === 2) {
							//Don't show tooltip, dots, or reference line for the missing data on individuals or people in families
							if ((applicableYear === 2008 || applicableYear === 2009) && (selectedCategory === 'indiv' || selectedCategory === 'inFam')) {
								targetG.style('opacity',0);
								d3.select("#tooltip").style('visibility','hidden');
							} else {
								targetG.style('opacity',1);
								d3.select("#tooltip").style('visibility','visible');
							}

							d3.select("#tooltip").select("#p1span1")
                .style('color',colors.black)
                .text(d3.format(".1f")(tooltipData[applicableYear].black[selectedCategory][0].pctSheltered / tooltipData[applicableYear].black[selectedCategory][0].pctPopulation));
              d3.select("#tooltip").select("#p2span1")
                .style('color',colors.multipleRaces)
                .text(d3.format(".1f")(tooltipData[applicableYear].multipleRaces[selectedCategory][0].pctSheltered / tooltipData[applicableYear].multipleRaces[selectedCategory][0].pctPopulation));
              d3.select("#tooltip").select("#p3span1")
                .style('color',colors.nonHispanic)
                .text(d3.format(".1f")(tooltipData[applicableYear].nonHispanic[selectedCategory][0].pctSheltered / tooltipData[applicableYear].nonHispanic[selectedCategory][0].pctPopulation));
              d3.select("#tooltip").select("#p4span1")
                .style('color',colors.hispanic)
                .text(d3.format(".1f")(tooltipData[applicableYear].hispanic[selectedCategory][0].pctSheltered / tooltipData[applicableYear].hispanic[selectedCategory][0].pctPopulation));
              d3.select("#tooltip").select("#p5span1")
                .style('color',colors.nonHispWhite)
                .text(d3.format(".1f")(tooltipData[applicableYear].asianNhpiNativeAm[selectedCategory][0].pctSheltered / tooltipData[applicableYear].asianNhpiNativeAm[selectedCategory][0].pctPopulation));
              d3.select("#tooltip").select("#p6span1")
                .style('color',colors.asianNhpiNativeAm)
                .text(d3.format(".1f")(tooltipData[applicableYear].nonHispWhite[selectedCategory][0].pctSheltered / tooltipData[applicableYear].nonHispWhite[selectedCategory][0].pctPopulation));
    
              blackCircle.attr("transform", "translate(" + 0 + "," + (vizOffsetFromTop + yScaleLines(tooltipData[applicableYear].black[selectedCategory][0].pctSheltered / tooltipData[applicableYear].black[selectedCategory][0].pctPopulation)) + ")");
              asianNhpiNAmCircle.attr("transform", "translate(" + 0 + "," + (vizOffsetFromTop + yScaleLines(tooltipData[applicableYear].asianNhpiNativeAm[selectedCategory][0].pctSheltered / tooltipData[applicableYear].asianNhpiNativeAm[selectedCategory][0].pctPopulation)) + ")");
              nonHispWhiteCircle.attr("transform", "translate(" + 0 + "," + (vizOffsetFromTop + yScaleLines(tooltipData[applicableYear].nonHispWhite[selectedCategory][0].pctSheltered / tooltipData[applicableYear].nonHispWhite[selectedCategory][0].pctPopulation)) + ")");
              multiRaceCircle.attr("transform", "translate(" + 0 + "," + (vizOffsetFromTop + yScaleLines(tooltipData[applicableYear].multipleRaces[selectedCategory][0].pctSheltered / tooltipData[applicableYear].multipleRaces[selectedCategory][0].pctPopulation)) + ")");
              hispCircle.attr("transform", "translate(" + 0 + "," + (vizOffsetFromTop + yScaleLines(tooltipData[applicableYear].hispanic[selectedCategory][0].pctSheltered / tooltipData[applicableYear].hispanic[selectedCategory][0].pctPopulation)) + ")");
              nonHispCircle.attr("transform", "translate(" + 0 + "," + (vizOffsetFromTop + yScaleLines(tooltipData[applicableYear].nonHispanic[selectedCategory][0].pctSheltered / tooltipData[applicableYear].nonHispanic[selectedCategory][0].pctPopulation)) + ")");
            }
          }
        }
        tooltipText();
  
  
        //Show the tooltip and move circle positions
        d3.select("#tooltip").classed("hidden", false);      
        targetG.attr("transform", "translate(" + xScaleLines(applicableYear) + "," + 0 + ")");
  
  
      } // end of mousemove function
  
  
  
      //Set up transition functionality between stacked and grouped
      categoriesDropdown
        .on("change", function(){
          selectedCategory = document.getElementById('categories' + div.slice(1)).value;
          
          if (this.value === "all") { 
            transitionAll(); 
          } else if (this.value === "indiv") { 
            transitionIndivs(); 
          } else if (this.value === "inFam") { 
            transitionInFamily(); 
          }
        });
  
      function transitionAll() {
        lines.transition().duration(2000)
          .attr('d', function(d) { return lineGenerator(d.values[0].values); })
          .ease(d3.easePolyOut) 
          ;
      }
  
      function transitionInFamily() {
        lines.transition().duration(2000)
          .attr('d', function(d) { return lineGenerator(d.values[2].values); })
          .ease(d3.easePolyOut) 
          ;
      }
      
      function transitionIndivs() {
        lines.transition().duration(2000)
          .attr('d', function(d) { return lineGenerator(d.values[1].values); })        
          .ease(d3.easePolyOut) 
          ;
      }
    }
  
    d3.json("../../../yml_to_json/raceVizNationalProportionsLines.json", function(error, data){
      if (error) throw error;
      
      /*
      data.forEach(function(d) {  //Forcing numeric in order for sorting to work correctly
        d.year = +d.year;
        d.differencePopShel = +d.differencePopShel;
        d.pctSheltered = +d.pctSheltered;
        d.pctPopulation = +d.pctPopulation;
      });
      */
    
      // Reshape aka nest the data by group and then by scope
      //The sortValues is necessary to consistently order the leaves by year. See http://bl.ocks.org/phoebebright/raw/3176159/
      var nestedData = d3.nest()
          .key(function(d) { return d.group; })
          .key(function(d) { return d.scope; }).sortValues(function(a,b) { return ((a.year < b.year)) }) //see comment above
          .entries(data);
      
      nestedData.sort(function(d){
         return d3.ascending(d.year);
      });
      //console.log(nestedData);
  
      var tooltipData = d3.nest()
        .key(function(d) { return d.year; })
        .key(function(d) { return d.group; })
        .key(function(d) { return d.scope; })
        .object(data);
  
      drawLines(data, nestedData, tooltipData);
    });
  } //end of function drawNtnlPropLines
  




  ////////////////////////////////////////////////
  //////// NATIONAL LOCATION PROPORTIONS /////////
  ////////////////////////////////////////////////
  function drawNtnlLocation() {
    "use strict";

    // DEFINITIONS  
    var leftMargin = 52,
        rightMargin = width * 0.05,
        bottomToAxis = 100,
        optionsPosFromTop = 125;   

    var vizOffsetFromTop = 230; //main area of visualization (below headers)
        
        
        
  
    // CANVAS AND SECTIONS
    var uniqueSvgId = div.slice(1) + 'Svg',
        uniqueSvgIdNum = '#' + uniqueSvgId;
    var svgChart = d3.select(uniqueSvgIdNum);
 

    ////////// HELP AND SOURCE BOXES //////////
    
    var popUpId = div.slice(1) + 'PopUp',
      popUpIdNum = '#' + popUpId,
      popUpBkgdId = div.slice(1) + 'PopUpBkgd',
      popUpBkgdIdNum = '#' + popUpBkgdId;

    var helpBox = svgChart.append('rect')
      .attr('class', 'helpSourceRect')
      .attr('width', helpSourceBoxWidth)
      .attr('height', helpSourceBoxHeight)
      .attr('transform','translate(' + (width - helpSourceBoxWidth * 2 - 10 - 10) + ',' + 10 + ')')
      .style('fill', 'white')
      .style('stroke', helpColorA)
      .attr('rx', corners)
      .attr('ry', corners)
      .on('mouseover', function() {
        helpBox.style('fill', helpColor);
        helpText.style('fill', 'white').style('font-weight','bold');
      })
      .on('mouseout', function() {
        helpBox.style('fill', 'white');
        helpText.style('fill', helpColor).style('font-weight','normal'); 
      })
      .on('click', function() {
        d3.select(popUpBkgdIdNum).style('visibility','visible');
		d3.select(popUpIdNum).style('visibility','visible');
		d3.select(popUpIdNum).select('.helpAndSourceName').html('Explanation');
        d3.select(popUpIdNum).select('.helpAndSourceContent').html(ntnlLocationExplain);
		});
    
    var sourceBox = svgChart.append('rect')
      .attr('class', 'helpSourceRect')
      .attr('width', helpSourceBoxWidth)
      .attr('height', helpSourceBoxHeight)
      .attr('transform','translate(' + (width - helpSourceBoxWidth - 10) + ',' + 10 + ')')
      .style('fill', 'white')
      .style('stroke', sourceColorA)
      .attr('rx', corners)
      .attr('ry', corners)
      .on('mouseover', function() {
        sourceBox.style('fill', sourceColor);
        sourceText.style('fill', 'white').style('font-weight','bold');
      })
      .on('mouseout', function() {
        sourceBox.style('fill', 'white');
        sourceText.style('fill', sourceColor).style('font-weight','normal');    
      })
      .on('click', function() {
		d3.select(popUpBkgdIdNum).style('visibility','visible');
        d3.select(popUpIdNum).style('visibility','visible');
        d3.select(popUpIdNum).select('.helpAndSourceName').html('Sources');
        d3.select(popUpIdNum).select('.helpAndSourceContent').html(ntnlLocationSource);
		});
    
    var helpText = svgChart.append('text')
      .text('EXPLAIN THIS')
      .attr('class', 'helpSourceText')
      .attr('transform', 'translate(' + (width - 10*2 - helpSourceBoxWidth*1.5) + ',' + 28 + ')')
      .attr('fill', 'rgb(181,38,37)')
      ;
    
    var sourceText = svgChart.append('text')
      .text('SOURCES')
      .attr('class', 'helpSourceText')
      .attr('transform', 'translate(' + (width - 10 - helpSourceBoxWidth*0.5) + ',' + 28 + ')')
      .attr('fill', 'dark gray')
      ;
    
 	//FADE IN ON LOAD
	d3.select(uniqueSvgIdNum).selectAll('.helpSourceRect, .helpSourceText')
		.transition()
		.duration(helpFadeDuration)
		.delay(helpFadeDelay)
		.style('opacity',1);
	  
	  
    //BUTTON TO CLOSE
    d3.select(popUpIdNum).select('.helpAndSourceClose')
      .on('click', function() { 
        d3.select(popUpIdNum).style('visibility', 'hidden');
		d3.select(popUpBkgdIdNum).style('visibility','hidden');
		helpBox.style('display','block');
		sourceBox.style('display','block');	
      });

    var gapVizTopToPopUp = height * 0.95;
    
    //LOOK AND POSITIONING OF THE INFO BOX
    d3.select(popUpBkgdIdNum)
      .style('display','block')
      .style('width', width + 'px')
      .style('height', height + 'px')
      .style('margin-top', -height + 'px');
      
    d3.select(popUpIdNum).select('.helpAndSourceContent')
      .style('display','block')
        .style('width', (width * 0.9) + 'px')
      .style('height', (height * 0.8) + 'px')
      .style('left', (width * 0.05) + 'px')
      .style('margin-top', -gapVizTopToPopUp + 'px');

    d3.select(popUpIdNum).select('.helpAndSourceHeader')
      .style('display','block')
        .style('width', (width * 0.9) + 'px')
      .style('left', (width * 0.05) + 'px')
      .style('margin-top', -gapVizTopToPopUp + 'px');


      
    ///////////// DROPDOWN(S) ///////////////
    var groupsDropdown = chartDiv.append('select')
      .attr('id','groups' + div.slice(1))
      .attr('class','displayToggle dropdown');

    var categoriesDropdown = chartDiv.append('select')
      .attr('id','categories' + div.slice(1))
      .attr('class','displayToggle dropdown');

    var yearsDropdown = chartDiv.append('select')
      .attr('id','years' + div.slice(1))
      .attr('class','displayToggle dropdown');
 
    groupsDropdown
      .style('display','inline')
      .style('right',rightMargin +'px')
      .style('top', 115 +'px')
      ;
      
    categoriesDropdown
      .style('display','inline')
      .style('right',rightMargin +'px')
      .style('top', 140 +'px')
      ;

    yearsDropdown
      .style('display','inline')
      .style('right',rightMargin +'px')
      .style('top', 165 +'px')
      ;
 
    var groupsOptions = ['Black', 'White', 'Asian', 'Native American', 'NHPI', '2+ races', 'Non-Hispanic', 'Hispanic', 'Non-Hispanic White', 'Hispanic White'];
    var groupsOptionsVals = {'Black':'black', 'White':'white', 'Asian':'asian', 'Native American':'nativeAmerican', 'NHPI':'nhpi', '2+ races':'multipleRaces', 'Non-Hispanic':'nonHispanic', 'Hispanic':'hispanic', 'Non-Hispanic White':'nonHispWhite', 'Hispanic White':'hispWhite'};
    var groupsKeyToCat = {'black':'Black', 'white':'White', 'asian':'Asian', 'nativeAmerican':'Native American', 'nhpi':'NHPI', 'multipleRaces':'2+ races', 'nonHispanic':'Non-Hispanic', 'hispanic':'Hispanic', 'nonHispWhite':'Non-Hispanic White', 'hispWhite':'Hispanic White'};
    var categoriesOptions = ['All people', 'Individuals (not in a family)', 'People in a family'];
    var categoriesOptionsVals = {'All people':'all', 'Individuals (not in a family)':'indiv', 'People in a family':'inFam'};
    var typesToVals = {'es':'emergency shelter', 'th':'transitional housing', 'psh':'permanent supportive housing', 'ssvf':'SSVF rapid re-housing or prevention'};
    var typeColors = {'es':'#00b2a9', 'th':'#009991', 'psh':'#007f79', 'ssvf':'#006660'}
    
    groupsDropdown.selectAll('option')
    .data(groupsOptions)
    .enter()
    .append('option')
      .text(function(d) { return d })
      .attr('value', function(d) { return groupsOptionsVals[d]; });
 
    categoriesDropdown.selectAll('option')
    .data(categoriesOptions)
    .enter()
    .append('option')
      .text(function(d) { return d })
      .attr('value', function(d) { return categoriesOptionsVals[d]; });

    yearsDropdown.selectAll('option')
    .data([2016,2015,2014,2013])
    .enter()
    .append('option')
      .text(function(d) { return d })
      .attr('value', function(d) { return d });
      
    var selectGroupLabel = svgChart.append('g')
      .attr('class', 'dropdownHeader vizToClear')
      .attr('transform','translate(' + (width - rightMargin - 163) + ',' + (129) + ')')
      .append('text')
        .attr('text-anchor','end')
        .text('Race/ethnicity');

    var selectCategoryLabel = svgChart.append('g')
      .attr('class', 'dropdownHeader vizToClear')
      .attr('transform','translate(' + (width - rightMargin - 209) + ',' + (154) + ')')
      .append('text')
        .attr('text-anchor','end')
        .text('Population');
        
    var selectYearLabel = svgChart.append('g')
      .attr('class', 'dropdownHeader vizToClear')
      .attr('transform','translate(' + (width - rightMargin - 66) + ',' + 179 + ')')
      .append('text')
        .attr('text-anchor','end')
        .text('Year');    
        
    var selectedGroup = document.getElementById('groups' + div.slice(1)).value;
    var selectedCategory = document.getElementById('categories' + div.slice(1)).value;
    var selectedYear = +document.getElementById('years' + div.slice(1)).value;

    
    

    ///////// DEFINE DIMENSIONS ///////////////
    var locationBarsWidth = width - leftMargin - rightMargin,
        locationBarsHeight = height - vizOffsetFromTop - bottomToAxis;
    
    var typesInOrder = ['es','th','psh','ssvf'];
    
    ////////////// DEFINE AXES SCALES /////////////////
    var xScaleLocations = d3.scaleBand()
      .domain(typesInOrder)
      .rangeRound([leftMargin, width - rightMargin])
      .padding(0.25);
    
    var yScaleLocations = d3.scaleLinear()
      .rangeRound([vizOffsetFromTop, height - bottomToAxis]);
  
  
    ///////////// READ THE DATA ///////////////
    d3.csv('../../../yml_to_csv/raceVizNationalLocations.csv',  function(data) {
    
      data.forEach(function(d){
        d.year = +d.year;
        d.nonHispWhite = +d.nonHispWhite;
        d.hispWhite = +d.hispWhite;
        d.white = +d.white;
        d.black = +d.black;
        d.asian = +d.asian;
        d.nativeAmerican = +d.nativeAmerican;
        d.nhpi = +d.nhpi;
        d.multipleRaces = +d.multipleRaces;
        d.nonHispanic = +d.nonHispanic;
        d.hispanic = +d.hispanic;
        });
 
      var nestedData = d3.nest()
              .key(function(d) { return d.type }).sortKeys(function(a,b) { return typesInOrder.indexOf(a) - typesInOrder.indexOf(b); }) 
              .key(function(d) { return d.year })
              .key(function(d) { return d.category }).sortKeys(d3.ascending)
              .rollup(function(v) { return { //without this, a [0] index with ALL of the properties (including year, etc.) is within each location type, so this specifies the values we want in there explicitly
                  black: +v[0].black,
                  white: +v[0].white,
                  asian: +v[0].asian,
                  nativeAmerican: +v[0].nativeAmerican,
                  nhpi: +v[0].nhpi,
                  multipleRaces: +v[0].multipleRaces,
                  nonHispanic: +v[0].nonHispanic,
                  hispanic: +v[0].hispanic,
                  nonHispWhite: +v[0].nonHispWhite,
                  hispWhite: +v[0].hispWhite,
               }})
              .object(data);

      //console.log(nestedData);




      /////////// UPDATE SCALE DOMAINS AND RANGES ///////////      
      //calculate current max proportion for y domain
      var domainMax = Math.max(
        nestedData['es'][selectedYear][selectedCategory][selectedGroup],
        nestedData['th'][selectedYear][selectedCategory][selectedGroup],
        nestedData['psh'][selectedYear][selectedCategory][selectedGroup],
        nestedData['ssvf'][selectedYear][selectedCategory][selectedGroup]
      )        
      
      domainMax = domainMax * 1.1;
      
      yScaleLocations
        .domain([domainMax, 0]);


      //////// CALL AXES /////////
      var xAxisLocations = svgChart.append('g')
        .attr('class','axis xAxis vizToClear')
        .attr('transform','translate(' + 0 + ',' + (height-bottomToAxis) + ')')
        .call(d3.axisBottom(xScaleLocations)
          .tickSize(0)
          .tickFormat(''));
      
      var yAxisLocations = svgChart.append('g')
        .attr('class','axis yAxis yAxisLocations vizToClear')
        .attr('transform','translate(' + leftMargin + ',' + 0 + ')')
        .call(d3.axisLeft(yScaleLocations)
          .tickSize(-(width - leftMargin - rightMargin))
          .ticks(5)
          .tickFormat(d3.format(".0%"))
        )
        .selectAll('text')
          .attr('class','axisLabels');
  
      d3.select(uniqueSvgIdNum).selectAll('.axis').selectAll('path')
        .style('opacity',0);    
         
      d3.select(uniqueSvgIdNum).selectAll(".tick line")
        .attr("stroke", "#BEBEBE");
    
      d3.select(uniqueSvgIdNum).selectAll(".tick:not(:last-of-type) line")
        .attr("stroke-dasharray", "2,2");
 
      ////////// DRAW BARS ///////////
      var locationBarsG = d3.select(uniqueSvgIdNum).append('g').attr('class','vizToClear locationBarsG');
      var locationBars = locationBarsG.selectAll('rect')
        .data(d3.entries(nestedData))
        .enter()
        .append('rect')
          .attr('x', function(d) { return xScaleLocations(d.key); })
          .attr('y', function(d) { return yScaleLocations(0); })
          .attr('height', 0)
          .attr('width', xScaleLocations.bandwidth())
          .attr('fill', function(d) { return typeColors[d.key]; })
          .on("mouseover", function(d,i) {
            //get mouse X position
            var xPosition = d3.mouse(chartDiv.node())[0];
  
            //Update the tooltip position and value
            if (xPosition < width/2) {
            d3.select("#tooltip")
              .style("top", (d3.event.pageY + tooltipYOffset)+"px")
              .style("left", (d3.event.pageX + tooltipXOffset.right)+"px");
            } else {
            d3.select("#tooltip")
              .style("top", (d3.event.pageY + tooltipYOffset)+"px")
              .style("left", (d3.event.pageX + tooltipXOffset.left)+"px");            
            }
            
            //update the contents
            d3.select("#tooltip").selectAll(".tipSpan").text(null).classed('tipSpanOff', true).classed('tooltipBold', false).classed('tooltipItalic', false).style('color','white');
    		    d3.select('#tooltip').classed('lineTooltip',false);
		
            d3.select('#tooltip').select('#header')
              .classed('tipSpanOff', false)
              .text(function() {return groupsKeyToCat[selectedGroup]; });
            
            d3.select("#tooltip").select("#p1span1")
              .classed('tipSpanOff', false)
              .classed('tooltipBold', true)
              .text(d3.format('.1%')(d.value[selectedYear][selectedCategory][selectedGroup]));
 
            d3.select("#tooltip").select("#p1span2")
              .classed('tipSpanOff', false)
              .text('of people in ' + typesToVals[d.key]);
              
            //Show the tooltip
            d3.select("#tooltip").classed("hidden", false);
            }) 
          .on('mouseout', function(d) {
            d3.select("#tooltip").classed("hidden", true);
          })
        ;

      /////////////// X AXIS LABELS (CUSTOM TEXT BOXES) //////////////
      var labelOffsetLine1 = 20,
          labelOffsetLine2 = 35,
          labelOffsetLine3 = 50;

      var axisLabelsG = svgChart.append('g')
        .attr('class','locationsAxisLabels vizToClear');

      if (width > 500) {         
        axisLabelsG.append('text')
          .attr('class','axisLabels')
          .style('text-anchor','middle')
          .attr('transform','translate(' + (xScaleLocations('es') + xScaleLocations.bandwidth()/2) + ',' + (height - bottomToAxis + labelOffsetLine1) + ')')
          .text('Emergency');
    
        axisLabelsG.append('text')
          .attr('class','axisLabels')
          .style('text-anchor','middle')
          .attr('transform','translate(' + (xScaleLocations('es') + xScaleLocations.bandwidth()/2) + ',' + (height - bottomToAxis + labelOffsetLine2) + ')')
          .text('Shelter');
          
        axisLabelsG.append('text')
          .attr('class','axisLabels')
          .style('text-anchor','middle')
          .attr('transform','translate(' + (xScaleLocations('th') + xScaleLocations.bandwidth()/2) + ',' + (height - bottomToAxis + labelOffsetLine1) + ')')
          .text('Transitional');    
    
        axisLabelsG.append('text')
          .attr('class','axisLabels')
          .style('text-anchor','middle')
          .attr('transform','translate(' + (xScaleLocations('th') + xScaleLocations.bandwidth()/2) + ',' + (height - bottomToAxis + labelOffsetLine2) + ')')
          .text('Housing');
    
        axisLabelsG.append('text')
          .attr('class','axisLabels')
          .style('text-anchor','middle')
          .attr('transform','translate(' + (xScaleLocations('psh') + xScaleLocations.bandwidth()/2) + ',' + (height - bottomToAxis + labelOffsetLine1) + ')')
          .text('Permanent');    
        
        axisLabelsG.append('text')
          .attr('class','axisLabels')
          .style('text-anchor','middle')
          .attr('transform','translate(' + (xScaleLocations('psh') + xScaleLocations.bandwidth()/2) + ',' + (height - bottomToAxis + labelOffsetLine2) + ')')
          .text('Supportive');    
        
        axisLabelsG.append('text')
          .attr('class','axisLabels')
          .attr('id','updateLabel3')
          .style('text-anchor','middle')
          .attr('transform','translate(' + (xScaleLocations('psh') + xScaleLocations.bandwidth()/2) + ',' + (height - bottomToAxis + labelOffsetLine3) + ')')
          .text('Housing');
    
        axisLabelsG.append('text')
          .attr('class','axisLabels')
          .style('text-anchor','middle')
          .attr('transform','translate(' + (xScaleLocations('ssvf') + xScaleLocations.bandwidth()/2) + ',' + (height - bottomToAxis + labelOffsetLine1) + ')')
          .text('Supportive');    
        
        axisLabelsG.append('text')
          .attr('class','axisLabels')
          .style('text-anchor','middle')
          .attr('transform','translate(' + (xScaleLocations('ssvf') + xScaleLocations.bandwidth()/2) + ',' + (height - bottomToAxis + labelOffsetLine2) + ')')
          .text('Services for');    
        
        axisLabelsG.append('text')
          .attr('class','axisLabels')
          .attr('id','updateLabel3')
          .style('text-anchor','middle')
          .attr('transform','translate(' + (xScaleLocations('ssvf') + xScaleLocations.bandwidth()/2) + ',' + (height - bottomToAxis + labelOffsetLine3) + ')')
          .text('Vet. Families');
      } else {
        axisLabelsG.append('text')
          .attr('class','axisLabels')
          .style('text-anchor','middle')
          .attr('transform','translate(' + (xScaleLocations('es') + xScaleLocations.bandwidth()/2) + ',' + (height - bottomToAxis + labelOffsetLine1) + ')')
          .text('ES');
          
        axisLabelsG.append('text')
          .attr('class','axisLabels')
          .style('text-anchor','middle')
          .attr('transform','translate(' + (xScaleLocations('th') + xScaleLocations.bandwidth()/2) + ',' + (height - bottomToAxis + labelOffsetLine1) + ')')
          .text('TH');    
    
        axisLabelsG.append('text')
          .attr('class','axisLabels')
          .style('text-anchor','middle')
          .attr('transform','translate(' + (xScaleLocations('psh') + xScaleLocations.bandwidth()/2) + ',' + (height - bottomToAxis + labelOffsetLine1) + ')')
          .text('PSH');    
    
        axisLabelsG.append('text')
          .attr('class','axisLabels')
          .style('text-anchor','middle')
          .attr('transform','translate(' + (xScaleLocations('ssvf') + xScaleLocations.bandwidth()/2) + ',' + (height - bottomToAxis + labelOffsetLine1) + ')')
          .text('SSVF');         
      }
 
      // ADD A LABEL FOR 'N/A' WHEN NO DATA IS AVAILABLE
        var NaLabel1 = axisLabelsG.append('text')
          .attr('class','axisLabels')
          .style('text-anchor','middle')
          .style('visibility','hidden')
          .attr('transform','translate(' + (xScaleLocations('es') + xScaleLocations.bandwidth()/2) + ',' + (height - bottomToAxis - 15) + ')')
          .text('N/A');
          
        var NaLabel2 = axisLabelsG.append('text')
          .attr('class','axisLabels')
          .style('text-anchor','middle')
          .style('visibility','hidden')
          .attr('transform','translate(' + (xScaleLocations('th') + xScaleLocations.bandwidth()/2) + ',' + (height - bottomToAxis - 13) + ')')
          .text('N/A');    
    
        var NaLabel3 = axisLabelsG.append('text')
          .attr('class','axisLabels')
          .style('text-anchor','middle')
          .style('visibility','hidden')
          .attr('transform','translate(' + (xScaleLocations('psh') + xScaleLocations.bandwidth()/2) + ',' + (height - bottomToAxis - 13) + ')')
          .text('N/A');    
    
        var NaLabel4 = axisLabelsG.append('text')
          .attr('class','axisLabels')
          .style('text-anchor','middle')
          .style('opacity',0)
          .attr('transform','translate(' + (xScaleLocations('ssvf') + xScaleLocations.bandwidth()/2) + ',' + (height - bottomToAxis - 13) + ')')
          .text('N/A');        
        
        function setNaLabels() {
          if(nestedData['es'][selectedYear][selectedCategory][selectedGroup] === 0) { 
            NaLabel1.transition().duration(1000).style('opacity',1)
          } else {
            NaLabel1.transition().duration(1000).style('opacity',0)         
          }
          if(nestedData['th'][selectedYear][selectedCategory][selectedGroup] === 0) { 
            NaLabel2.transition().duration(1000).style('opacity',1)
          } else {
            NaLabel2.transition().duration(1000).style('opacity',0)         
          }
          if(nestedData['psh'][selectedYear][selectedCategory][selectedGroup] === 0) { 
            NaLabel3.transition().duration(1000).style('opacity',1)
          } else {
            NaLabel3.transition().duration(1000).style('opacity',0)         
          }
          if(nestedData['ssvf'][selectedYear][selectedCategory][selectedGroup] === 0) { 
            NaLabel4.transition().duration(1000).style('opacity',1)
          } else {
            NaLabel4.transition().duration(1000).style('opacity',0)         
          }
        }
        setNaLabels();
        
 
      ///////////// TRANSITION BARS IN //////////////
      locationBars
        .transition()
        .duration(function(d,i) { return i * 100 + 1200; })
        .attr('y', function(d) { return yScaleLocations(d.value[selectedYear][selectedCategory][selectedGroup]); })
        .attr('height', function(d) { return yScaleLocations(0) - yScaleLocations(d.value[selectedYear][selectedCategory][selectedGroup]); })
      ;
      
  
      ////////////// UPDATE ON DROPDOWN CHANGES SELECTION /////////////
      yearsDropdown
        .on("change", function(){
          selectedYear = +document.getElementById('years' + div.slice(1)).value;
  
          //UPDATE Y SCALE   
          domainMax = Math.max(
            nestedData['es'][selectedYear][selectedCategory][selectedGroup],
            nestedData['th'][selectedYear][selectedCategory][selectedGroup],
            nestedData['psh'][selectedYear][selectedCategory][selectedGroup],
            nestedData['ssvf'][selectedYear][selectedCategory][selectedGroup]
          )        
          
          var domainToUse;
          if (domainMax > 0.6) {
            domainToUse = 1;           
          } else {
            domainToUse = 0.5;
          }
          yScaleLocations
            .domain([domainToUse, 0]);

          d3.select(uniqueSvgIdNum).select('.yAxisLocations')
            .transition()
            .duration(1500)
            .call(d3.axisLeft(yScaleLocations)
              .tickSize(-(width - leftMargin - rightMargin))
              .ticks(5)
              .tickFormat(d3.format(".0%"))
            )
            .selectAll('text')
              .attr('class','axisLabels');

          d3.select(uniqueSvgIdNum).selectAll(".tick line")
            .attr("stroke", "#BEBEBE");
        
          d3.select(uniqueSvgIdNum).selectAll(".tick:not(:first-of-type) line")
            .attr("stroke-dasharray", "2,2");

          //update bars
          locationBars
            .transition()
            .duration(1500)
            .attr('y', function(d) { return yScaleLocations(d.value[selectedYear][selectedCategory][selectedGroup]); })
            .attr('height', function(d) { return yScaleLocations(0) - yScaleLocations(d.value[selectedYear][selectedCategory][selectedGroup]); });
          
          setNaLabels();
        });
      
      groupsDropdown
        .on("change", function(){
          selectedGroup = document.getElementById('groups' + div.slice(1)).value;
 
          //UPDATE Y SCALE   
          domainMax = Math.max(
            nestedData['es'][selectedYear][selectedCategory][selectedGroup],
            nestedData['th'][selectedYear][selectedCategory][selectedGroup],
            nestedData['psh'][selectedYear][selectedCategory][selectedGroup],
            nestedData['ssvf'][selectedYear][selectedCategory][selectedGroup]
          )        
          
          var domainToUse;
          if (domainMax > 0.6) {
            domainToUse = 1;           
          } else {
            domainToUse = 0.5;
          }
          yScaleLocations
            .domain([domainToUse, 0]);

          d3.select(uniqueSvgIdNum).select('.yAxisLocations')
            .transition()
            .duration(1500)
            .call(d3.axisLeft(yScaleLocations)
              .tickSize(-(width - leftMargin - rightMargin))
              .ticks(5)
              .tickFormat(d3.format(".0%"))
            )
            .selectAll('text')
              .attr('class','axisLabels');

          d3.select(uniqueSvgIdNum).selectAll(".tick line")
            .attr("stroke", "#BEBEBE");
        
          d3.select(uniqueSvgIdNum).selectAll(".tick:not(:first-of-type) line")
            .attr("stroke-dasharray", "2,2");

          //update bars
          locationBars
            .transition()
            .duration(1500)
            .attr('y', function(d) { return yScaleLocations(d.value[selectedYear][selectedCategory][selectedGroup]); })
            .attr('height', function(d) { return yScaleLocations(0) - yScaleLocations(d.value[selectedYear][selectedCategory][selectedGroup]); });
          
          setNaLabels();
        });     
      
      categoriesDropdown
        .on("change", function(){
          selectedCategory = document.getElementById('categories' + div.slice(1)).value;

          //UPDATE Y SCALE   
          domainMax = Math.max(
            nestedData['es'][selectedYear][selectedCategory][selectedGroup],
            nestedData['th'][selectedYear][selectedCategory][selectedGroup],
            nestedData['psh'][selectedYear][selectedCategory][selectedGroup],
            nestedData['ssvf'][selectedYear][selectedCategory][selectedGroup]
          )        
          
          var domainToUse;
          if (domainMax > 0.6) {
            domainToUse = 1;           
          } else {
            domainToUse = 0.5;
          }
          yScaleLocations
            .domain([domainToUse, 0]);

          d3.select(uniqueSvgIdNum).select('.yAxisLocations')
            .transition()
            .duration(1500)
            .call(d3.axisLeft(yScaleLocations)
              .tickSize(-(width - leftMargin - rightMargin))
              .ticks(5)
              .tickFormat(d3.format(".0%"))
            )
            .selectAll('text')
              .attr('class','axisLabels');

          d3.select(uniqueSvgIdNum).selectAll(".tick line")
            .attr("stroke", "#BEBEBE");
        
          d3.select(uniqueSvgIdNum).selectAll(".tick:not(:first-of-type) line")
            .attr("stroke-dasharray", "2,2");

          //update bars
          locationBars
            .transition()
            .duration(1500)
            .attr('y', function(d) { return yScaleLocations(d.value[selectedYear][selectedCategory][selectedGroup]); })
            .attr('height', function(d) { return yScaleLocations(0) - yScaleLocations(d.value[selectedYear][selectedCategory][selectedGroup]); });
          
          setNaLabels();
        });

  
    }); // end of reading the data   

  } //end of drawNtnlLocation function



















  
      
  //////////////////////////////////////////////
  //////////////// RATE BARS ///////////////////
  //////////////////////////////////////////////       
  function drawRateBars() {
    "use strict";

    // DEFINITIONS  
    var leftMargin = 52,
        rightMargin = width * 0.05,
        bottomToAxis = 170,
        optionsPosFromTop = 125;   

    var vizOffsetFromTop = 200; //main area of visualization (below headers)
        
        
        
  
    // CANVAS AND SECTIONS
    var uniqueSvgId = div.slice(1) + 'Svg',
        uniqueSvgIdNum = '#' + uniqueSvgId;
    var svgChart = d3.select(uniqueSvgIdNum);
 

    ////////// HELP AND SOURCE BOXES //////////
    
    var popUpId = div.slice(1) + 'PopUp',
      popUpIdNum = '#' + popUpId,
      popUpBkgdId = div.slice(1) + 'PopUpBkgd',
      popUpBkgdIdNum = '#' + popUpBkgdId;

    var helpBox = svgChart.append('rect')
      .attr('class', 'helpSourceRect')
      .attr('width', helpSourceBoxWidth)
      .attr('height', helpSourceBoxHeight)
      .attr('transform','translate(' + (width - helpSourceBoxWidth * 2 - 10 - 10) + ',' + 10 + ')')
      .style('fill', 'white')
      .style('stroke', helpColorA)
      .attr('rx', corners)
      .attr('ry', corners)
      .on('mouseover', function() {
        helpBox.style('fill', helpColor);
        helpText.style('fill', 'white').style('font-weight','bold');
      })
      .on('mouseout', function() {
        helpBox.style('fill', 'white');
        helpText.style('fill', helpColor).style('font-weight','normal'); 
      })
      .on('click', function() {
        d3.select(popUpBkgdIdNum).style('visibility','visible');
		d3.select(popUpIdNum).style('visibility','visible');
		d3.select(popUpIdNum).select('.helpAndSourceName').html('Explanation');
        d3.select(popUpIdNum).select('.helpAndSourceContent').html(rateBarsExplain);
		});
    
    var sourceBox = svgChart.append('rect')
      .attr('class', 'helpSourceRect')
      .attr('width', helpSourceBoxWidth)
      .attr('height', helpSourceBoxHeight)
      .attr('transform','translate(' + (width - helpSourceBoxWidth - 10) + ',' + 10 + ')')
      .style('fill', 'white')
      .style('stroke', sourceColorA)
      .attr('rx', corners)
      .attr('ry', corners)
      .on('mouseover', function() {
        sourceBox.style('fill', sourceColor);
        sourceText.style('fill', 'white').style('font-weight','bold');
      })
      .on('mouseout', function() {
        sourceBox.style('fill', 'white');
        sourceText.style('fill', sourceColor).style('font-weight','normal');    
      })
      .on('click', function() {
		d3.select(popUpBkgdIdNum).style('visibility','visible');
        d3.select(popUpIdNum).style('visibility','visible');
        d3.select(popUpIdNum).select('.helpAndSourceName').html('Sources');
        d3.select(popUpIdNum).select('.helpAndSourceContent').html(rateBarsSource);
		});
    
    var helpText = svgChart.append('text')
      .text('EXPLAIN THIS')
      .attr('class', 'helpSourceText')
      .attr('transform', 'translate(' + (width - 10*2 - helpSourceBoxWidth*1.5) + ',' + 28 + ')')
      .attr('fill', 'rgb(181,38,37)')
      ;
    
    var sourceText = svgChart.append('text')
      .text('SOURCES')
      .attr('class', 'helpSourceText')
      .attr('transform', 'translate(' + (width - 10 - helpSourceBoxWidth*0.5) + ',' + 28 + ')')
      .attr('fill', 'dark gray')
      ;
    
	//FADE IN ON LOAD
	d3.select(uniqueSvgIdNum).selectAll('.helpSourceRect, .helpSourceText')
		.transition()
		.duration(helpFadeDuration)
		.delay(helpFadeDelay)
		.style('opacity',1);
	  
	  
    //BUTTON TO CLOSE
    d3.select(popUpIdNum).select('.helpAndSourceClose')
      .on('click', function() { 
        d3.select(popUpIdNum).style('visibility', 'hidden');
		d3.select(popUpBkgdIdNum).style('visibility','hidden');
		helpBox.style('display','block');
		sourceBox.style('display','block');	
      });

	var gapVizTopToPopUp = height * 0.95;
	
	//LOOK AND POSITIONING OF THE INFO BOX
	d3.select(popUpBkgdIdNum)
	  .style('display','block')
	  .style('width', width + 'px')
	  .style('height', height + 'px')
	  .style('margin-top', -height + 'px');
	  
	d3.select(popUpIdNum).select('.helpAndSourceContent')
	  .style('display','block')
      .style('width', (width * 0.9) + 'px')
	  .style('height', (height * 0.8) + 'px')
	  .style('left', (width * 0.05) + 'px')
	  .style('margin-top', -gapVizTopToPopUp + 'px');

	d3.select(popUpIdNum).select('.helpAndSourceHeader')
	  .style('display','block')
      .style('width', (width * 0.9) + 'px')
	  .style('left', (width * 0.05) + 'px')
	  .style('margin-top', -gapVizTopToPopUp + 'px');



 




  
    ///////////// DROPDOWNS ///////////////

    var yearsDropdown = chartDiv.append('select')
      .attr('id','years' + div.slice(1))
      .attr('class','displayToggle dropdown');

	  yearsDropdown
      .style('display','inline')
      .style('right',rightMargin +'px')
      .style('top', optionsPosFromTop + 5 +'px')
      ;
  
    yearsDropdown.selectAll('option')
    .data([2017,2016,2015])
    .enter()
    .append('option')
      .text(function(d) { return d })
      .attr('value', function(d) { return d });
  
    var selectYearLabel = d3.select(uniqueSvgIdNum).append('g')
      .attr('class', 'dropdownHeader vizToClear')
      .attr('transform','translate(' + (width-rightMargin) + ',' + optionsPosFromTop + ')')
      .append('text')
        .attr('text-anchor','end')
        .text('Data released in');     

    var selectedYear = +document.getElementById('years' + div.slice(1)).value;






  
  
    ///////// DEFINE DIMENSIONS ///////////////
    var rateBarsWidth = width - leftMargin - rightMargin,
        rateBarsHeight = height - vizOffsetFromTop - bottomToAxis;
    
    
    
    ////////////// DEFINE AXES SCALES /////////////////
    var xScaleMeasures = d3.scaleBand()
      .rangeRound([leftMargin, width-rightMargin])
      .paddingInner(0.15);
    
    var xScaleCategories = d3.scaleBand() //within each measure
      .padding(0.05);
    
    var yScaleRateBars = d3.scaleLinear()
      .rangeRound([vizOffsetFromTop, height - bottomToAxis]);
  
  
    ///////////// READ THE DATA ///////////////
    d3.csv('../../../yml_to_csv/raceVizNationalRatesBars.csv',  function(data) {
    
      data.forEach(function(d){
        d.dataYear = +d.dataYear;
        d.usPopWithPR = +d.usPopWithPR;
        d.count50StDcPr = +d.count50StDcPr;
        d.ratePer10k = +d.ratePer10k;
      });
      
      var categoriesInOrder = ['asian','white','hispanic','multipleRaces','nativeAmerican','black','nhpi'];
      
      var nestedData = d3.nest()
              .key(function(d) { return d.measure }).sortKeys(d3.ascending)
              .key(function(d) { return d.yearDataReleased }).sortKeys(d3.ascending)
              .key(function(d) { return d.category }).sortKeys(d3.ascending)
              .rollup(function(v) { return { //without this, a [0] index with all of the properties (state, year, etc.) is within each group, so this specifies the values we want explicitly
                  dataYear: +v[0].dataYear,
                  usPopWithPR: +v[0].usPopWithPR,
                  count50StDcPr: +v[0].count50StDcPr,
                  ratePer10k: +v[0].ratePer10k
              }})
              .object(data);
  
      var nestedDataKV = d3.map(nestedData).entries();
  
      var selectedYear = +document.getElementById('years' + div.slice(1)).value;
  
      ///////// CALCULATE MAX RATE FOR Y DOMAIN //////////
      //to better see the difference year to year, this grabs the max rate across all years to be used in the y domain
      var maxRate = 0;
      for (var i = 0; i < data.length; i++) {
        if (data[i].ratePer10k > maxRate) {
          maxRate = data[i].ratePer10k;
        }
      }
      
      //to calculate based on only the selected year, use this instead...
      //var dataByYear = d3.nest()
      //  .key(function(d) { return d.yearDataReleased })
      //  .object(data);
      //
      //var maxRate = 0;
      //for (var i = 0; i < dataByYear[selectedYear].length; i++) {
      //  if (dataByYear[selectedYear][i].ratePer10k > maxRate) {
      //    maxRate = dataByYear[selectedYear][i].ratePer10k;
      //  }
      //}
  
  
      /////////// UPDATE SCALE DOMAINS AND RANGES ///////////
      xScaleMeasures.domain(d3.keys(nestedData));
      
      xScaleCategories
        .domain(categoriesInOrder)
        .rangeRound([0, xScaleMeasures.bandwidth()]);
      
      yScaleRateBars
        .domain([maxRate, 0]);
      
      
      //////// CALL AXES /////////
      var xAxisRateBars = svgChart.append('g')
        .attr('class','axis xAxis vizToClear')
        .attr('transform','translate(' + 0 + ',' + (height-bottomToAxis) + ')')
        .call(d3.axisBottom(xScaleMeasures)
          .tickSize(0)
          .tickFormat(''));
      
      var yAxisRateBars = svgChart.append('g')
        .attr('class','axis yAxis yAxisRateBars vizToClear')
        .attr('transform','translate(' + leftMargin + ',' + 0 + ')')
        .call(d3.axisLeft(yScaleRateBars)
          .tickSize(-(width - leftMargin - rightMargin))
          .ticks(6))
        .selectAll('text')
          .attr('class','axisLabels');
  
  
      d3.select(uniqueSvgIdNum).selectAll('.axis').selectAll('path')
        .style('opacity',0);    
         
      d3.select(uniqueSvgIdNum).selectAll(".tick line")
        .attr("stroke", "#BEBEBE");
    
      d3.select(uniqueSvgIdNum).selectAll(".tick:not(:last-of-type) line")
        .attr("stroke-dasharray", "2,2");
  
  
  
      
      ////////// DRAW BARS ///////////
      var rateBarsG = svgChart.append('g').attr('class','vizToClear');
      var rateBarsGroups = rateBarsG.selectAll('g')
        .data(nestedDataKV) //first the 3 groups positioned along the measures scale
        .enter()
        .append('g')
          .attr('class','rateBarsGroups')
          .attr('id', function(d) { return 'group' + d.key; })
          .attr('transform',function(d) { return 'translate(' + xScaleMeasures(d.key) + ',0)'; })
        ;
  
      //console.log(d3.entries(nestedDataKV[0].value[selectedYear]));
      var rateBars = d3.select(uniqueSvgIdNum).selectAll('.rateBarsGroups').selectAll('rect')
        .data(function(d){ return d3.entries(d.value[selectedYear]); }) //needed to convert data to this in order to work. d.value[selectedYear] didn't.
        .enter()
        .append('rect')
          .attr('x', function(d) { return xScaleCategories(d.key); })
          .attr('y', function(d) { return yScaleRateBars(0) })
          .attr('height', 0)
          .attr('width', xScaleCategories.bandwidth())
          .attr('fill', function(d) { return colors[d.key] })
          .on("mouseover", function(d,i) {
            //get mouse X position
            var xPosition = d3.mouse(chartDiv.node())[0];
  
            //Update the tooltip position and value
            if (xPosition < width/2) {
            d3.select("#tooltip")
              .style("top", (d3.event.pageY + tooltipYOffset)+"px")
              .style("left", (d3.event.pageX + tooltipXOffset.right)+"px");
            } else {
            d3.select("#tooltip")
              .style("top", (d3.event.pageY + tooltipYOffset)+"px")
              .style("left", (d3.event.pageX + tooltipXOffset.left)+"px");            
            }
            
            //to check parent group ID to add *'s to only that NHPI header to indicate footnote caution
            var parentNodeId = d3.select(this).node().parentNode.id;
            
            //update the contents
            d3.select("#tooltip").selectAll(".tipSpan").text(null).classed('tipSpanOff', true).classed('tooltipBold', false).classed('tooltipItalic', false).style('color','white');
    		    d3.select('#tooltip').classed('lineTooltip',false);
		
            d3.select('#tooltip').select('#header')
              .classed('tipSpanOff', false)
              .text(function() { return keyToCategory[d.key]; });
            
            d3.select("#tooltip").select("#p1span1")
              .classed('tipSpanOff', false)
              .classed('tooltipBold', true)
              .text(d3.format('.1f')(d.value.ratePer10k));
  
            d3.select("#tooltip").select("#p1span2")
              .classed('tipSpanOff', false)
              .text(' per 10,000');
  
            d3.select("#tooltip").select("#p2span1")
              .classed('tipSpanOff', false)
              .classed('tooltipItalic', true)
              .text(d3.format(',')(d.value.count50StDcPr) + ' in a population of ' + d3.format(',')(d.value.usPopWithPR));
  
            
            //Show the tooltip
            d3.select("#tooltip").classed("hidden", false);
            }) 
          .on('mouseout', function(d) {
            d3.select("#tooltip").classed("hidden", true);
          })
        ;
      
  
  
      
      /////////////// X AXIS LABELS (CUSTOM TEXT BOXES) //////////////
      var labelOffsetLine1 = 20,
          labelOffsetLine2 = 35,
          labelOffsetLine3 = 52;
          
  
      
      var axisLabelsG = svgChart.append('g')
        .attr('class','rateBarsAxisLabels vizToClear');
  
      if (width > 390) {
        axisLabelsG.append('text')
          .attr('class','axisLabels')
          .style('text-anchor','middle')
          .attr('transform','translate(' + (xScaleMeasures('shelteredAnnual') + xScaleMeasures.bandwidth()/2) + ',' + (height - bottomToAxis + labelOffsetLine1) + ')')
          .text('Used shelter');
    
        axisLabelsG.append('text')
          .attr('class','axisLabels')
          .style('text-anchor','middle')
          .attr('transform','translate(' + (xScaleMeasures('shelteredAnnual') + xScaleMeasures.bandwidth()/2) + ',' + (height - bottomToAxis + labelOffsetLine2) + ')')
          .text('during');
    
        axisLabelsG.append('text')
          .attr('class','axisLabels')
          .attr('id','updateLabel1')
          .style('text-anchor','middle')
          .attr('transform','translate(' + (xScaleMeasures('shelteredAnnual') + xScaleMeasures.bandwidth()/2) + ',' + (height - bottomToAxis + labelOffsetLine3) + ')')
          .text(function(d) { return selectedYear-1 });
          
        axisLabelsG.append('text')
          .attr('class','axisLabels')
          .style('text-anchor','middle')
          .attr('transform','translate(' + (xScaleMeasures('homelessOneNight') + xScaleMeasures.bandwidth()/2) + ',' + (height - bottomToAxis + labelOffsetLine1) + ')')
          .text('Homeless on a');    
    
        axisLabelsG.append('text')
          .attr('class','axisLabels')
          .style('text-anchor','middle')
          .attr('transform','translate(' + (xScaleMeasures('homelessOneNight') + xScaleMeasures.bandwidth()/2) + ',' + (height - bottomToAxis + labelOffsetLine2) + ')')
          .text('given night in');
    
        axisLabelsG.append('text')
          .attr('class','axisLabels')
          .attr('id','updateLabel2')
          .style('text-anchor','middle')
          .attr('transform','translate(' + (xScaleMeasures('homelessOneNight') + xScaleMeasures.bandwidth()/2) + ',' + (height - bottomToAxis + labelOffsetLine3) + ')')
          .text(function(d) { return selectedYear });
          
        axisLabelsG.append('text')
          .attr('class','axisLabels')
          .style('text-anchor','middle')
          .attr('transform','translate(' + (xScaleMeasures('unshelteredOneNight') + xScaleMeasures.bandwidth()/2) + ',' + (height - bottomToAxis + labelOffsetLine1) + ')')
          .text('Unsheltered on a');    
        
        axisLabelsG.append('text')
          .attr('class','axisLabels')
          .style('text-anchor','middle')
          .attr('transform','translate(' + (xScaleMeasures('unshelteredOneNight') + xScaleMeasures.bandwidth()/2) + ',' + (height - bottomToAxis + labelOffsetLine2) + ')')
          .text('given night in');    
        
        axisLabelsG.append('text')
          .attr('class','axisLabels')
          .attr('id','updateLabel3')
          .style('text-anchor','middle')
          .attr('transform','translate(' + (xScaleMeasures('unshelteredOneNight') + xScaleMeasures.bandwidth()/2) + ',' + (height - bottomToAxis + labelOffsetLine3) + ')')
          .text(function(d) { return selectedYear });
      } else {
        axisLabelsG.append('text')
          .attr('class','axisLabels')
          .style('text-anchor','middle')
          .attr('transform','translate(' + (xScaleMeasures('shelteredAnnual') + xScaleMeasures.bandwidth()/2) + ',' + (height - bottomToAxis + labelOffsetLine1) + ')')
          .text('Sheltered');
    
        axisLabelsG.append('text')
          .attr('class','axisLabels')
          .style('text-anchor','middle')
          .attr('transform','translate(' + (xScaleMeasures('shelteredAnnual') + xScaleMeasures.bandwidth()/2) + ',' + (height - bottomToAxis + labelOffsetLine2) + ')')
          .text('during');
    
        axisLabelsG.append('text')
          .attr('class','axisLabels')
          .attr('id','updateLabel1')
          .style('text-anchor','middle')
          .attr('transform','translate(' + (xScaleMeasures('shelteredAnnual') + xScaleMeasures.bandwidth()/2) + ',' + (height - bottomToAxis + labelOffsetLine3) + ')')
          .text(function(d) { return selectedYear-1 });
          
        axisLabelsG.append('text')
          .attr('class','axisLabels')
          .style('text-anchor','middle')
          .attr('transform','translate(' + (xScaleMeasures('homelessOneNight') + xScaleMeasures.bandwidth()/2) + ',' + (height - bottomToAxis + labelOffsetLine1) + ')')
          .text('Homeless');    
    
        axisLabelsG.append('text')
          .attr('class','axisLabels')
          .style('text-anchor','middle')
          .attr('transform','translate(' + (xScaleMeasures('homelessOneNight') + xScaleMeasures.bandwidth()/2) + ',' + (height - bottomToAxis + labelOffsetLine2) + ')')
          .text('given night');
    
        axisLabelsG.append('text')
          .attr('class','axisLabels')
          .attr('id','updateLabel2')
          .style('text-anchor','middle')
          .attr('transform','translate(' + (xScaleMeasures('homelessOneNight') + xScaleMeasures.bandwidth()/2) + ',' + (height - bottomToAxis + labelOffsetLine3) + ')')
          .text(function(d) { return selectedYear });
          
        axisLabelsG.append('text')
          .attr('class','axisLabels')
          .style('text-anchor','middle')
          .attr('transform','translate(' + (xScaleMeasures('unshelteredOneNight') + xScaleMeasures.bandwidth()/2) + ',' + (height - bottomToAxis + labelOffsetLine1) + ')')
          .text('Unsheltered');    
        
        axisLabelsG.append('text')
          .attr('class','axisLabels')
          .style('text-anchor','middle')
          .attr('transform','translate(' + (xScaleMeasures('unshelteredOneNight') + xScaleMeasures.bandwidth()/2) + ',' + (height - bottomToAxis + labelOffsetLine2) + ')')
          .text('given night');    
        
        axisLabelsG.append('text')
          .attr('class','axisLabels')
          .attr('id','updateLabel3')
          .style('text-anchor','middle')
          .attr('transform','translate(' + (xScaleMeasures('unshelteredOneNight') + xScaleMeasures.bandwidth()/2) + ',' + (height - bottomToAxis + labelOffsetLine3) + ')')
          .text(function(d) { return selectedYear });      
      }
  
  
  
      //////// LEGEND ///////
      var legendBoxSize = 15,
          legendFromBottom = height-65;
      var column1XPos = width - 310,
          column2XPos = width - 220,
          column3XPos = width - 130,
          row1YPos = 0,
          row2YPos = 20,
          row3YPos = 40;
      var column1XPosLabel = column1XPos + 20,
          column2XPosLabel = column2XPos + 20,
          column3XPosLabel = column3XPos + 20,
          row1YPosLabel = row1YPos + 13,
          row2YPosLabel = row2YPos + 13,
          row3YPosLabel = row3YPos + 13;
          
      var legendG = svgChart.append('g')
        .attr('class','legend legendG')
        .attr('id','legendG')
        .attr('transform','translate(' + 0 + ',' + legendFromBottom + ')');
      
      var legendBoxes = d3.select(uniqueSvgIdNum).select('.legendG').selectAll('rect')
        .data(d3.entries(keyToCategory))
        .enter()
        .append('rect')
        .attr('class','legendBox vizToClear')
        .attr('id',function(d) { return d.key + 'Box'})
        .filter(function(d) { return (d.key !== 'nonHispanic' && d.key !== 'otherRace') ; })
        .attr('width', legendBoxSize)
        .attr('height', legendBoxSize)
        .attr('fill', function(d) { return colors[d.key]; });
  
      d3.select(uniqueSvgIdNum).select('#asianBox')
        .attr('transform','translate(' + column1XPos + ',' + row1YPos + ')');
  
      d3.select(uniqueSvgIdNum).select('#whiteBox')
        .attr('transform','translate(' + column1XPos + ',' + row2YPos + ')');
  
      d3.select(uniqueSvgIdNum).select('#hispanicBox')
        .attr('transform','translate(' + column1XPos + ',' + row3YPos + ')');
  
      d3.select(uniqueSvgIdNum).select('#multipleRacesBox')
        .attr('transform','translate(' + column2XPos + ',' + row1YPos + ')');
  
      d3.select(uniqueSvgIdNum).select('#blackBox')
        .attr('transform','translate(' + column2XPos + ',' + row2YPos + ')');
  
      d3.select(uniqueSvgIdNum).select('#nativeAmericanBox')
        .attr('transform','translate(' + column3XPos + ',' + row1YPos + ')');
  
      d3.select(uniqueSvgIdNum).select('#nhpiBox')
        .attr('transform','translate(' + column3XPos + ',' + row2YPos + ')');
  
      var legendTexts = legendG.selectAll('text')
        .data(d3.entries(keyToCategory))
        .enter()
        .append('text')
        .filter(function(d) { return (d.key !== 'nonHispanic' && d.key !== 'otherRace') ; })
        .attr('id', function(d) { return d.key + 'Label'; })
        .attr('class','legendLabel vizToClear')
        .text(function(d) { return keyToCategory[d.key]; });
  
      d3.select(uniqueSvgIdNum).select('#asianLabel')
        .attr('transform','translate(' + column1XPosLabel + ',' + row1YPosLabel + ')');
  
      d3.select(uniqueSvgIdNum).select('#whiteLabel')
        .attr('transform','translate(' + column1XPosLabel + ',' + row2YPosLabel + ')');
  
      d3.select(uniqueSvgIdNum).select('#hispanicLabel')
        .attr('transform','translate(' + column1XPosLabel + ',' + row3YPosLabel + ')');
  
      d3.select(uniqueSvgIdNum).select('#multipleRacesLabel')
        .attr('transform','translate(' + column2XPosLabel + ',' + row1YPosLabel + ')');
  
      d3.select(uniqueSvgIdNum).select('#blackLabel')
        .attr('transform','translate(' + column2XPosLabel + ',' + row2YPosLabel + ')');
  
      d3.select(uniqueSvgIdNum).select('#nativeAmericanLabel')
        .attr('transform','translate(' + column3XPosLabel + ',' + row1YPosLabel + ')');
  
      d3.select(uniqueSvgIdNum).select('#nhpiLabel')
        .attr('transform','translate(' + column3XPosLabel + ',' + row2YPosLabel + ')');
  
  
  
  
  
  
  
  
  
  
      ///////////// TRANSITION BARS IN //////////////
      rateBars
        .transition()
        .duration(1000)
        .attr('y', function(d) { return yScaleRateBars(d.value.ratePer10k) })
        .attr('height', function(d) { return yScaleRateBars(0) - yScaleRateBars(d.value.ratePer10k)})
      ;
      
  
      ////////////// UPDATE ON YEAR SELECTION /////////////
      yearsDropdown
        .on("change", function(){
          selectedYear = +document.getElementById('years' + div.slice(1)).value;
  
          /////////////// TRANSITION BARS ///////////////
          rateBars
          .data(function(d){ return d3.entries(d.value[selectedYear]); }) //needed to convert data to this in order to work. d.value[selectedYear] didn't.
          .transition()
          .duration(1500)
          .attr('y', function(d) { return yScaleRateBars(d.value.ratePer10k) })
          .attr('height', function(d) { return yScaleRateBars(0) - yScaleRateBars(d.value.ratePer10k)})
          ;
          
  
          /////////// UPDATE LABELS TO CORRECT YEARS /////////////
          d3.select(uniqueSvgIdNum).select('#updateLabel1')
            .text(function(d) { return selectedYear-1 });
          
          d3.select(uniqueSvgIdNum).select('#updateLabel2')
            .text(function(d) { return selectedYear });
          
          d3.select(uniqueSvgIdNum).select('#updateLabel3')
            .text(function(d) { return selectedYear });
        });
  
  
    }); // end of reading the data
  
  } // end of draw rates bars function  
  
      
      
  //////////////////////////////////////////////
  //////////////// SHEL PIES ///////////////////
  //////////////////////////////////////////////         
  function drawShelPies() {
  "use strict";
    

    // DEFINITIONS  
    var leftMargin = 52,
        rightMargin = width * 0.05,
        bottomToAxis = 170,
        optionsPosFromTop = 125;   

    var vizOffsetFromTop = 200; //main area of visualization (below headers)
        
        
        
  
    // CANVAS AND SECTIONS
    var uniqueSvgId = div.slice(1) + 'Svg',
        uniqueSvgIdNum = '#' + uniqueSvgId;
    var svgChart = d3.select(uniqueSvgIdNum);
  
 
   ////////// HELP AND SOURCE BOXES //////////
    
	var popUpId = div.slice(1) + 'PopUp',
		popUpIdNum = '#' + popUpId,
		popUpBkgdId = div.slice(1) + 'PopUpBkgd',
		popUpBkgdIdNum = '#' + popUpBkgdId;

    var helpBox = svgChart.append('rect')
      .attr('class', 'helpSourceRect')
      .attr('width', helpSourceBoxWidth)
      .attr('height', helpSourceBoxHeight)
      .attr('transform','translate(' + (width - helpSourceBoxWidth * 2 - 10 - 10) + ',' + 10 + ')')
      .style('fill', 'white')
      .style('stroke', helpColorA)
      .attr('rx', corners)
      .attr('ry', corners)
      .on('mouseover', function() {
        helpBox.style('fill', helpColor);
        helpText.style('fill', 'white').style('font-weight','bold');
      })
      .on('mouseout', function() {
        helpBox.style('fill', 'white');
        helpText.style('fill', helpColor).style('font-weight','normal'); 
      })
      .on('click', function() {
        d3.select(popUpBkgdIdNum).style('visibility','visible');
		d3.select(popUpIdNum).style('visibility','visible');
		d3.select(popUpIdNum).select('.helpAndSourceName').html('Explanation');
        d3.select(popUpIdNum).select('.helpAndSourceContent').html(shelPiesExplain);
		});
    
    var sourceBox = svgChart.append('rect')
      .attr('class', 'helpSourceRect')
      .attr('width', helpSourceBoxWidth)
      .attr('height', helpSourceBoxHeight)
      .attr('transform','translate(' + (width - helpSourceBoxWidth - 10) + ',' + 10 + ')')
      .style('fill', 'white')
      .style('stroke', sourceColorA)
      .attr('rx', corners)
      .attr('ry', corners)
      .on('mouseover', function() {
        sourceBox.style('fill', sourceColor);
        sourceText.style('fill', 'white').style('font-weight','bold');
      })
      .on('mouseout', function() {
        sourceBox.style('fill', 'white');
        sourceText.style('fill', sourceColor).style('font-weight','normal');    
      })
      .on('click', function() {
		d3.select(popUpBkgdIdNum).style('visibility','visible');
        d3.select(popUpIdNum).style('visibility','visible');
        d3.select(popUpIdNum).select('.helpAndSourceName').html('Sources');
        d3.select(popUpIdNum).select('.helpAndSourceContent').html(shelPiesSource);
		});
    
    var helpText = svgChart.append('text')
      .text('EXPLAIN THIS')
      .attr('class', 'helpSourceText')
      .attr('transform', 'translate(' + (width - 10*2 - helpSourceBoxWidth*1.5) + ',' + 28 + ')')
      .attr('fill', 'rgb(181,38,37)')
      ;
    
    var sourceText = svgChart.append('text')
      .text('SOURCES')
      .attr('class', 'helpSourceText')
      .attr('transform', 'translate(' + (width - 10 - helpSourceBoxWidth*0.5) + ',' + 28 + ')')
      .attr('fill', 'dark gray')
      ;
    
	//FADE IN ON LOAD
	d3.select(uniqueSvgIdNum).selectAll('.helpSourceRect, .helpSourceText')
		.transition()
		.duration(helpFadeDuration)
		.delay(helpFadeDelay)
		.style('opacity',1);
	  
	  
    //BUTTON TO CLOSE
    d3.select(popUpIdNum).select('.helpAndSourceClose')
      .on('click', function() { 
        d3.select(popUpIdNum).style('visibility', 'hidden');
		d3.select(popUpBkgdIdNum).style('visibility','hidden');
		helpBox.style('display','block');
		sourceBox.style('display','block');	
      });

	var gapVizTopToPopUp = height * 0.95;
	
	//LOOK AND POSITIONING OF THE INFO BOX
	d3.select(popUpBkgdIdNum)
	  .style('display','block')
	  .style('width', width + 'px')
	  .style('height', height + 'px')
	  .style('margin-top', -height + 'px');
	  
	d3.select(popUpIdNum).select('.helpAndSourceContent')
	  .style('display','block')
      .style('width', (width * 0.9) + 'px')
	  .style('height', (height * 0.8) + 'px')
	  .style('left', (width * 0.05) + 'px')
	  .style('margin-top', -gapVizTopToPopUp + 'px');

	d3.select(popUpIdNum).select('.helpAndSourceHeader')
	  .style('display','block')
      .style('width', (width * 0.9) + 'px')
	  .style('left', (width * 0.05) + 'px')
	  .style('margin-top', -gapVizTopToPopUp + 'px');



 




    ///////////// DROPDOWN(S) ///////////////
    //create dropdowns
    var yearsDropdown = chartDiv.append('select')
      .attr('id','years' + div.slice(1))
      .attr('class','displayToggle dropdown');


    yearsDropdown
      .style('display','inline')
      .style('right',rightMargin +'px')
      .style('top', 115 +'px')
      ;
  
    //options relevant to this viz
    yearsDropdown.selectAll('option')
    .data([2017,2016,2015])
    .enter()
    .append('option')
      .text(function(d) { return d })
      .attr('value', function(d) { return d });
  
    var selectYearLabel = svgChart.append('g')
      .attr('class', 'dropdownHeader vizToClear')
      .attr('transform','translate(' + (width - rightMargin - 65) + ',' + 129 + ')')
      .append('text')
        .attr('text-anchor','end')
        .text('Select year');     

    var selectedYear = +document.getElementById('years' + div.slice(1)).value;






  
  
  
    ////////// DEFINITIONS //////////
    var piesGroupWidth = Math.min(600, width*0.90);
    var leftMarginPies = (width - piesGroupWidth)/2;
    var rightMarginPies = (width - piesGroupWidth)/2;
    var yPosFromTopRacePies = 270;
    var yPosFromTopEthnPies = Math.min(440, width*1.15);
    
  
    var racePiesG = svgChart.append('g')
      .attr('id','racePiesG')
      .attr('class','vizToClear')
      .attr('transform','translate(' + 0 + ',' + yPosFromTopRacePies + ')');
  
    var ethnPiesG = svgChart.append('g')
      .attr('id','ethnPiesG')
      .attr('class','vizToClear')
      .attr('transform','translate(' + 0 + ',' + yPosFromTopEthnPies + ')');  
  
    
    //////////// GET THE DATA /////////////////
    d3.csv('../../../yml_to_csv/raceVizNationalPitPies.csv', function(data){
      
      data.forEach(function(d) {
        d.asian = +d.asian;
        d.black = +d.black;
        d.nativeAmerican = +d.nativeAmerican;
        d.multipleRaces = +d.multipleRaces;
        d.nhpi = +d.nhpi;
        d.white = +d.white;
        d.hispanic = +d.hispanic;
        d.nonHispanic = +d.nonHispanic;
        d.year = +d.year;
      });
  
  
      ///////// CREATE RACE VS ETHNICITY SETS. NOTE THIS IS THE ORDER FOR THE PIES!! ////////
      var nestedDataRace = d3.nest()
        .key(function(d) { return d.category })
        .key(function(d) { return d.year })
              .rollup(function(v) { return { //without this, a [0] index with all of the properties (state, year, etc.) is within each group, so this specifies the values we want explicitly
                  black: +v[0].black,
                  asian: +v[0].asian,
                  nativeAmerican: +v[0].nativeAmerican,
                  multipleRaces: +v[0].multipleRaces,
                  nhpi: +v[0].nhpi,
                  white: +v[0].white,
              }})
        .object(data);
  
      var nestedDataEthn = d3.nest()
        .key(function(d) { return d.category })
        .key(function(d) { return d.year })
              .rollup(function(v) { return { //without this, a [0] index with all of the properties (state, year, etc.) is within each group, so this specifies the values we want explicitly
                  hispanic: +v[0].hispanic,
                  nonHispanic: +v[0].nonHispanic,
              }})
        .object(data);
  
  
      //colors in the same order
      var raceColors = ['#00b2a9', '#b7312c', '#0055bc', '#b9975b', '#9cdbd9', '#002b49'],
          ethnColors = ['#5c6068', '#b3b7b8'];

/*
      var raceColors = ['#0055bc', '#00b2a9', '#b9975b', '#b7312c', '#9cdbd9', '#002b49'],
*/      
  
      ///// X SCALE FOR POSITIONING THE PIES AND TITLES ////////
      var xScalePies = d3.scaleBand()
        .rangeRound([leftMarginPies, width-rightMarginPies])
        .domain(['pctPit','pctShel','pctUnsh'])
        .paddingInner(0.05);
    
      var xAxisRacePies = svgChart.append('g')
        .attr('class','vizToClear')
        .attr('transform','translate(' + 0 + ',' + (yPosFromTopRacePies) + ')')
        .call(d3.axisBottom(xScalePies)
          .tickSize(0)
          .tickFormat(''));
    
      var xAxisEthnPies = svgChart.append('g')
        .attr('class','vizToClear')
        .attr('transform','translate(' + 0 + ',' + (yPosFromTopEthnPies) + ')')
        .call(d3.axisBottom(xScalePies)
          .tickSize(0)
          .tickFormat(''));
      
      xAxisRacePies.select('path')
        .style('stroke','none');
      xAxisEthnPies.select('path')
        .style('stroke','none');
        
  
  
      //////// PIE CHART DEFINITIONS //////////
      var radius = Math.min(80, xScalePies.bandwidth()/2);
      
      var arc = d3.arc()
        .outerRadius(radius)
        .innerRadius(0);
  
      var pie = d3.pie()
        .sort(null)
        .value(function(d) { return d.value; });
        
        
      ////////// RACE PIES //////////
      //console.log(d3.values(d3.map(nestedDataRace).entries()));
      var racePies = racePiesG.selectAll('g')
        .data(d3.map(nestedDataRace).entries())
        .enter()
        .append('g')
        .attr('class','racePies')
        .attr('transform',function(d) { return 'translate(' + (xScalePies(d.key) + xScalePies.bandwidth()/2) + ',' + 0 + ')'; });
      
      var racePieArcG = racePies.selectAll('arc')
        //.data(function(d) { return pie(d3.values(d.value[selectedYear])); })
        .data(function(d) { return pie(d3.entries(d.value[selectedYear])); })
        .enter()
        .append('g')
          .attr('class','raceArc')
          .on("mouseover", function(d) {
            //get mouse X position
            var xPosition = d3.mouse(chartDiv.node())[0];

            //reset contents
            d3.select("#tooltip").selectAll(".tipSpan").text(null).classed('tipSpanOff', true).classed('tooltipBold', false).classed('tooltipItalic', false).style('color','white');
	        	d3.select('#tooltip').classed('lineTooltip',false);
		
            //Update the tooltip position and value
            if (xPosition < width/2) {
            d3.select("#tooltip")
              .style("top", (d3.event.pageY + tooltipYOffset)+"px")
              .style("left", (d3.event.pageX + tooltipXOffset.right)+"px");
            } else {
            d3.select("#tooltip")
              .style("top", (d3.event.pageY + tooltipYOffset)+"px")
              .style("left", (d3.event.pageX + tooltipXOffset.left)+"px");            
            }
            
            //update the contents
            d3.select('#tooltip').select('#header')
              .classed('tipSpanOff', false)
              .text(keyToCategory[d.data.key]);
            
            d3.select("#tooltip").select("#p1span1")
              .classed('tipSpanOff', false)
              .classed('tooltipBold', true)
              .text(d3.format(".1%")(d.data.value));         
            
            d3.select("#tooltip").select("#p1span2")
              .classed('tipSpanOff', false)
              .text('of '+pitCatToText[d3.select(this.parentNode).datum().key]);
            
            //Show the tooltip
            d3.select("#tooltip").classed("hidden", false);
            }) 
          .on('mouseout', function(d){
            d3.select("#tooltip").classed("hidden", true);
          })
        ;
      
      racePieArcG.append('path').style('fill', function(d,i) { return raceColors[i] })
        .transition()
        .delay(function(d,i) {
          return i * 80; })
  	      .duration(1150)
  	      .attrTween('d', function(d) {
  		      var i = d3.interpolate(d.startAngle, d.endAngle);
  		      return function(t) {
  		        d.endAngle = i(t); 
  			      return arc(d);
  			    };
  	      });
        //.attr('d', arc)
  
  
  
      ////////// ETHNICITY PIES //////////
      var ethnPies = ethnPiesG.selectAll('g')
        .data(d3.entries(nestedDataEthn))
        .enter()
        .append('g')
        .attr('class','ethnPies')
        .attr('transform',function(d) { return 'translate(' + (xScalePies(d.key) + xScalePies.bandwidth()/2) + ',' + 0 + ')'; })
        ;
      
      var ethnPieArcG = ethnPies.selectAll('g')
        .data(function(d) { return pie(d3.entries(d.value[selectedYear])); })
        .enter()
        .append('g')
          .attr('class','ethnArc')
          .on("mouseover", function(d) {
            //get mouse X position
            //get mouse X position
            var xPosition = d3.mouse(chartDiv.node())[0];

            //reset contents
            d3.select("#tooltip").selectAll(".tipSpan").text(null).classed('tipSpanOff', true).classed('tooltipBold', false).classed('tooltipItalic', false).style('color','white');
	        	d3.select('#tooltip').classed('lineTooltip',false);
  
            //Update the tooltip position and value
            if (xPosition < width/2) {
            d3.select("#tooltip")
              .style("top", (d3.event.pageY + tooltipYOffset)+"px")
              .style("left", (d3.event.pageX + tooltipXOffset.right)+"px");
            } else {
            d3.select("#tooltip")
              .style("top", (d3.event.pageY + tooltipYOffset)+"px")
              .style("left", (d3.event.pageX + tooltipXOffset.left)+"px");            
            }
            
            //update the contents
            d3.select('#tooltip').select('#header')
              .classed('tipSpanOff', false)
              .text(keyToCategory[d.data.key]);
            
            d3.select("#tooltip").select("#p1span1")
              .classed('tipSpanOff', false)
              .classed('tooltipBold', true)
              .text(d3.format(".1%")(d.data.value));         
            
            d3.select("#tooltip").select("#p1span2")
              .classed('tipSpanOff', false)
              .text('of '+pitCatToText[d3.select(this.parentNode).datum().key]);
            
            //Show the tooltip
            d3.select("#tooltip").classed("hidden", false);
            }) 
          .on('mouseout', function(d){
            d3.select("#tooltip").classed("hidden", true);
          })
        ;
      
      ethnPieArcG.append('path').style('fill', function(d,i) { return ethnColors[i] })
        .transition()
        .delay(function(d,i) {
          return i * 75; })
  	      .duration(1300)
  	      .attrTween('d', function(d) {
  		      var i = d3.interpolate(d.startAngle, d.endAngle);
  		      return function(t) {
  		        d.endAngle = i(t); 
  			      return arc(d);
  			    };
  	      });
  
  
      /////////////// X AXIS LABELS (CUSTOM TEXT BOXES) //////////////
      var labelOffsetLine1 = 20;
      
      var axisLabelsG = svgChart.append('g')
        .attr('class','shelAxisLabels vizToClear');
      
      axisLabelsG.append('text')
        .attr('class','heavyChartHeader')
        .style('text-anchor','middle')
        .attr('transform','translate(' + (xScalePies('pctPit') + xScalePies.bandwidth()/2) + ',' + (yPosFromTopRacePies - radius - labelOffsetLine1) + ')')
        .text('Homeless');
  
      axisLabelsG.append('text')
        .attr('class','heavyChartHeader')
        .style('text-anchor','middle')
        .attr('transform','translate(' + (xScalePies('pctShel') + xScalePies.bandwidth()/2) + ',' + (yPosFromTopRacePies - radius - labelOffsetLine1) + ')')
        .text('Sheltered');    
  
      axisLabelsG.append('text')
        .attr('class','heavyChartHeader')
        .style('text-anchor','middle')
        .attr('transform','translate(' + (xScalePies('pctUnsh') + xScalePies.bandwidth()/2) + ',' + (yPosFromTopRacePies - radius - labelOffsetLine1) + ')')
        .text('Unsheltered');    
    
  
      //////// LEGEND ///////
      var legendBoxSize = 15,
          legendFromBottom = height-65;
      var column1XPos = width - 310,
          column2XPos = width - 220,
          column3XPos = width - 130,
          row1YPos = 0,
          row2YPos = 20,
          row3YPos = 40;
      var column1XPosLabel = column1XPos + 20,
          column2XPosLabel = column2XPos + 20,
          column3XPosLabel = column3XPos + 20,
          row1YPosLabel = row1YPos + 13,
          row2YPosLabel = row2YPos + 13,
          row3YPosLabel = row3YPos + 13;
          
      var legendG = svgChart.append('g')
        .attr('class','legend legendG')
        .attr('id','legendG')
        .attr('transform','translate(' + 0 + ',' + legendFromBottom + ')');
      
      var legendBoxes = d3.select(uniqueSvgIdNum).select('.legendG').selectAll('rect')
        .data(d3.entries(keyToCategory))
        .enter()
        .append('rect')
        .filter(function(d) { return d.key !== 'otherRace'; })
        .attr('id',function(d) { return d.key + 'Box'})
        .attr('class','legendBox vizToClear')
        .attr('width', legendBoxSize)
        .attr('height', legendBoxSize)
        .attr('fill', function(d) { return colors[d.key]; });
  
      d3.select(uniqueSvgIdNum).select('#blackBox')
        .attr('transform','translate(' + column1XPos + ',' + row1YPos + ')');
  
      d3.select(uniqueSvgIdNum).select('#asianBox')
        .attr('transform','translate(' + column1XPos + ',' + row2YPos + ')');
  
      d3.select(uniqueSvgIdNum).select('#whiteBox')
        .attr('transform','translate(' + column1XPos + ',' + row3YPos + ')');
  
      d3.select(uniqueSvgIdNum).select('#multipleRacesBox')
        .attr('transform','translate(' + column2XPos + ',' + row1YPos + ')');
  
      d3.select(uniqueSvgIdNum).select('#nhpiBox')
        .attr('transform','translate(' + column2XPos + ',' + row2YPos + ')');
  
      //d3.select(uniqueSvgIdNum).select('#otherRaceBox')
      //  .attr('transform','translate(' + column2XPos + ',' + row3YPos + ')');
  
      d3.select(uniqueSvgIdNum).select('#nativeAmericanBox')
        .attr('transform','translate(' + column2XPos + ',' + row3YPos + ')');
  
      d3.select(uniqueSvgIdNum).select('#hispanicBox')
        .attr('transform','translate(' + column3XPos + ',' + row1YPos + ')');
  
      d3.select(uniqueSvgIdNum).select('#nonHispanicBox')
        .attr('transform','translate(' + column3XPos + ',' + row2YPos + ')');
  
      var legendTexts = d3.select(uniqueSvgIdNum).select('.legendG').selectAll('text')
        .data(d3.entries(keyToCategory))
        .enter()
        .append('text')
        .filter(function(d) { return d.key !== 'otherRace'; })
        .attr('id', function(d) { return d.key + 'Label'; })
        .attr('class','legendLabel vizToClear')
        .text(function(d) { return keyToCategory[d.key]; });
  
      d3.select(uniqueSvgIdNum).select('#blackLabel')
        .attr('transform','translate(' + column1XPosLabel + ',' + row1YPosLabel + ')');
  
      d3.select(uniqueSvgIdNum).select('#asianLabel')
        .attr('transform','translate(' + column1XPosLabel + ',' + row2YPosLabel + ')');
  
      d3.select(uniqueSvgIdNum).select('#whiteLabel')
        .attr('transform','translate(' + column1XPosLabel + ',' + row3YPosLabel + ')');
  
      d3.select(uniqueSvgIdNum).select('#multipleRacesLabel')
        .attr('transform','translate(' + column2XPosLabel + ',' + row1YPosLabel + ')');
  
      d3.select(uniqueSvgIdNum).select('#nhpiLabel')
        .attr('transform','translate(' + column2XPosLabel + ',' + row2YPosLabel + ')');
  
      //d3.select(uniqueSvgIdNum).select('#otherRaceLabel')
      //  .attr('transform','translate(' + column2XPosLabel + ',' + row3YPosLabel + ')');
  
      d3.select(uniqueSvgIdNum).select('#nativeAmericanLabel')
        .attr('transform','translate(' + column2XPosLabel + ',' + row3YPosLabel + ')');
  
      d3.select(uniqueSvgIdNum).select('#hispanicLabel')
        .attr('transform','translate(' + column3XPosLabel + ',' + row1YPosLabel + ')');
  
      d3.select(uniqueSvgIdNum).select('#nonHispanicLabel')
        .attr('transform','translate(' + column3XPosLabel + ',' + row2YPosLabel + ')');
  
  
  
  
  
  
      ///////////// UPDATE ON YEAR SELECT //////////////
      yearsDropdown
        .on("change", function(){
          selectedYear = this.value;
  
          d3.select(uniqueSvgIdNum).selectAll('.racePies').selectAll('.raceArc')
            .data(function(d) { return pie(d3.entries(d.value[selectedYear])); })
            .select('path')
            .transition()
            .duration(1000)
            .attrTween('d',arcTween)
            //.attr('d',arc);
            ;
  
          d3.select(uniqueSvgIdNum).selectAll('.ethnPies').selectAll('.ethnArc')
            .data(function(d) { return pie(d3.entries(d.value[selectedYear])); })
            .select('path')
            .transition()
            .duration(1000)
            .attrTween('d',arcTween)
            //.attr('d',arc);
            ;
  
  
          
          
        });
  
      function arcTween(d) {
      
        var i = d3.interpolate(this._current, d);
      
        this._current = i(0);
      
        return function(t) {
          return arc(i(t));
        };
      }
  
    });
  
  } //end draw sheltered pies


  
  //////////////////////////////////////////////
  //////////////// SHEL BARS ///////////////////
  //////////////////////////////////////////////     
  function drawShelBars() {
    "use strict";
  
    // DEFINITIONS  
    var leftMargin = 52,
        rightMargin = width * 0.05,
        bottomToAxis = 170,
        optionsPosFromTop = 125;   

    var vizOffsetFromTop = 200; //main area of visualization (below headers)
        
        
        
  
    // CANVAS AND SECTIONS
    var uniqueSvgId = div.slice(1) + 'Svg',
        uniqueSvgIdNum = '#' + uniqueSvgId;
    var svgChart = d3.select(uniqueSvgIdNum);
  
 

    ////////// HELP AND SOURCE BOXES //////////
    
	var popUpId = div.slice(1) + 'PopUp',
		popUpIdNum = '#' + popUpId,
		popUpBkgdId = div.slice(1) + 'PopUpBkgd',
		popUpBkgdIdNum = '#' + popUpBkgdId;

    var helpBox = svgChart.append('rect')
      .attr('class', 'helpSourceRect')
      .attr('width', helpSourceBoxWidth)
      .attr('height', helpSourceBoxHeight)
      .attr('transform','translate(' + (width - helpSourceBoxWidth * 2 - 10 - 10) + ',' + 10 + ')')
      .style('fill', 'white')
      .style('stroke', helpColorA)
      .attr('rx', corners)
      .attr('ry', corners)
      .on('mouseover', function() {
        helpBox.style('fill', helpColor);
        helpText.style('fill', 'white').style('font-weight','bold');
      })
      .on('mouseout', function() {
        helpBox.style('fill', 'white');
        helpText.style('fill', helpColor).style('font-weight','normal'); 
      })
      .on('click', function() {
        d3.select(popUpBkgdIdNum).style('visibility','visible');
		d3.select(popUpIdNum).style('visibility','visible');
		d3.select(popUpIdNum).select('.helpAndSourceName').html('Explanation');
        d3.select(popUpIdNum).select('.helpAndSourceContent').html(shelBarsExplain);
		});
    
    var sourceBox = svgChart.append('rect')
      .attr('class', 'helpSourceRect')
      .attr('width', helpSourceBoxWidth)
      .attr('height', helpSourceBoxHeight)
      .attr('transform','translate(' + (width - helpSourceBoxWidth - 10) + ',' + 10 + ')')
      .style('fill', 'white')
      .style('stroke', sourceColorA)
      .attr('rx', corners)
      .attr('ry', corners)
      .on('mouseover', function() {
        sourceBox.style('fill', sourceColor);
        sourceText.style('fill', 'white').style('font-weight','bold');
      })
      .on('mouseout', function() {
        sourceBox.style('fill', 'white');
        sourceText.style('fill', sourceColor).style('font-weight','normal');    
      })
      .on('click', function() {
		d3.select(popUpBkgdIdNum).style('visibility','visible');
        d3.select(popUpIdNum).style('visibility','visible');
        d3.select(popUpIdNum).select('.helpAndSourceName').html('Sources');
        d3.select(popUpIdNum).select('.helpAndSourceContent').html(shelBarsSource);
		});
    
    var helpText = svgChart.append('text')
      .text('EXPLAIN THIS')
      .attr('class', 'helpSourceText')
      .attr('transform', 'translate(' + (width - 10*2 - helpSourceBoxWidth*1.5) + ',' + 28 + ')')
      .attr('fill', 'rgb(181,38,37)')
      ;
    
    var sourceText = svgChart.append('text')
      .text('SOURCES')
      .attr('class', 'helpSourceText')
      .attr('transform', 'translate(' + (width - 10 - helpSourceBoxWidth*0.5) + ',' + 28 + ')')
      .attr('fill', 'dark gray')
      ;
    
 	//FADE IN ON LOAD
	d3.select(uniqueSvgIdNum).selectAll('.helpSourceRect, .helpSourceText')
		.transition()
		.duration(helpFadeDuration)
		.delay(helpFadeDelay)
		.style('opacity',1);
	  
	  
    //BUTTON TO CLOSE
    d3.select(popUpIdNum).select('.helpAndSourceClose')
      .on('click', function() { 
        d3.select(popUpIdNum).style('visibility', 'hidden');
		d3.select(popUpBkgdIdNum).style('visibility','hidden');
		helpBox.style('display','block');
		sourceBox.style('display','block');	
      });

	var gapVizTopToPopUp = height * 0.95;
	
	//LOOK AND POSITIONING OF THE INFO BOX
	d3.select(popUpBkgdIdNum)
	  .style('display','block')
	  .style('width', width + 'px')
	  .style('height', height + 'px')
	  .style('margin-top', -height + 'px');
	  
	d3.select(popUpIdNum).select('.helpAndSourceContent')
	  .style('display','block')
      .style('width', (width * 0.9) + 'px')
	  .style('height', (height * 0.8) + 'px')
	  .style('left', (width * 0.05) + 'px')
	  .style('margin-top', -gapVizTopToPopUp + 'px');

	d3.select(popUpIdNum).select('.helpAndSourceHeader')
	  .style('display','block')
      .style('width', (width * 0.9) + 'px')
	  .style('left', (width * 0.05) + 'px')
	  .style('margin-top', -gapVizTopToPopUp + 'px');








    ///////////// DROPDOWN(S) ///////////////
    var categoriesDropdown = chartDiv.append('select')
      .attr('id','categories' + div.slice(1))
      .attr('class','displayToggle dropdown');

    var yearsDropdown = chartDiv.append('select')
      .attr('id','years' + div.slice(1))
      .attr('class','displayToggle dropdown');
      
    categoriesDropdown
      .style('display','inline')
      .style('right',rightMargin +'px')
      .style('top', 115 +'px')
      ;

    yearsDropdown
      .style('display','inline')
      .style('right',rightMargin +'px')
      .style('top', 140 +'px')
      ;
      
    var categoriesOptions = ['All people', 'Individuals (not in a family)', 'People in a family'];
    var categoriesOptionsVals = {'All people':'all', 'Individuals (not in a family)':'indiv', 'People in a family':'inFam'};
    
    categoriesDropdown.selectAll('option')
    .data(categoriesOptions)
    .enter()
    .append('option')
      .text(function(d) { return d })
      .attr('value', function(d) { return categoriesOptionsVals[d]; });

    yearsDropdown.selectAll('option')
    .data([2017,2016,2015])
    .enter()
    .append('option')
      .text(function(d) { return d })
      .attr('value', function(d) { return d });
      
    var selectGroupLabel = svgChart.append('g')
      .attr('class', 'dropdownHeader vizToClear')
      .attr('transform','translate(' + (width - rightMargin - 212) + ',' + (129) + ')')
      .append('text')
        .attr('text-anchor','end')
        .text('Population');

    var selectYearLabel = svgChart.append('g')
      .attr('class', 'dropdownHeader vizToClear')
      .attr('transform','translate(' + (width - rightMargin - 66) + ',' + 154 + ')')
      .append('text')
        .attr('text-anchor','end')
        .text('Year');    
        
    var selectedGroup = document.getElementById('categories' + div.slice(1)).value;
    var selectedYear = +document.getElementById('years' + div.slice(1)).value;


  
  
    ////////// DIMENSIONS, DEFINITIONS ////////////
    var leftMarginShelBars = 120,
        rightMarginShelBars = width * 0.05,
        bottomToAxisShelBars = height*0.1,
        vizOffsetFromTopShelBars = 200;
    
    var unshelteredColor = 'rgb(0, 178, 169)', //'#b9975b', //#9cdbd9
        shelteredColor = '#002b49';
        
        
    ///////// AXIS SCALES /////////
    var xScalePropBars = d3.scaleLinear()
      .range([leftMarginShelBars, width - rightMarginShelBars])
      .domain([0,1]);
      
    var yScalePropBars = d3.scaleBand()
      .rangeRound([vizOffsetFromTopShelBars, height - bottomToAxisShelBars])
      .domain(['black','white','asian','nativeAmerican','multipleRaces','nhpi','hispanic','nonHispanic'])
      .paddingInner(0.45)
      .paddingOuter(0.1);
      
    var numberOfTicks;
    if (width > 500) { numberOfTicks = 10; } else { numberOfTicks = 5; }
    
    ////// CALL AXES (domains are known) /////////
    var xAxisShelBars = svgChart.append('g')
      .attr('class','axis xAxis vizToClear')
      .attr('transform','translate(' + 0 + ',' + (height - bottomToAxisShelBars) + ')')
      .call(d3.axisBottom(xScalePropBars)
        .tickSize(-(height - vizOffsetFromTopShelBars - bottomToAxisShelBars))
        .tickFormat(d3.format(".0%"))
        .ticks(numberOfTicks))
      .selectAll('text')
        .attr('class','axisLabels');
        
    var yAxisShelBars = svgChart.append('g')
      .attr('class','axis yAxis vizToClear')
      .attr('transform','translate(' + leftMarginShelBars + ',' + 0 + ')')
      .call(d3.axisLeft(yScalePropBars)
        .tickSize(0))
      .selectAll('text')
        .attr('class','axisLabels')
        .text(function(d) { return keyToCategory[d]; });
  
    d3.select(uniqueSvgIdNum).selectAll('.axis').selectAll('path')
      .style('opacity',0);    
       
    d3.select(uniqueSvgIdNum).selectAll(".tick line")
      .attr("stroke", "#BEBEBE");
  
    d3.select(uniqueSvgIdNum).selectAll(".tick:not(:first-of-type) line")
      .attr("stroke-dasharray", "2,2");
  
  
    //////// LEGEND ///////
    var legendBoxSize = 15,
        legendFromBottom = height-30;
    var column1XPos = width - 250,
        column2XPos = width - 125,
        column1XPosLabel = column1XPos + 20,
        column2XPosLabel = column2XPos + 20,
        row1YPosLabel = 13,
        row2YPosLabel = 13;
        
    var shelUnshelColors = {'Sheltered':shelteredColor, 'Unsheltered':unshelteredColor};
        
    var legendG = svgChart.append('g')
      .attr('class','legend legendG')
      .attr('id','legendG')
      .attr('transform','translate(' + 0 + ',' + legendFromBottom + ')');
    
    var legendBoxes = d3.select(uniqueSvgIdNum).select('.legendG').selectAll('rect')
      .data(['Sheltered','Unsheltered'])
      .enter()
      .append('rect')
      .attr('id',function(d) { return d + 'Box'; })
      .attr('class','legendBox vizToClear')
      .attr('width', legendBoxSize)
      .attr('height', legendBoxSize)
      .attr('fill', function(d) { return shelUnshelColors[d]; });
  
    d3.select(uniqueSvgIdNum).select('#ShelteredBox')
      .attr('transform','translate(' + column1XPos + ',' + 0 + ')');
  
    d3.select(uniqueSvgIdNum).select('#UnshelteredBox')
      .attr('transform','translate(' + column2XPos + ',' + 0 + ')');
  
    var legendTexts = d3.select(uniqueSvgIdNum).select('.legendG').selectAll('text')
      .data(['Sheltered','Unsheltered'])
      .enter()
      .append('text')
      .attr('id', function(d) { return d + 'Label'; })
      .attr('class','legendLabel vizToClear')
      .text(function(d) { return d; });
  
    d3.select(uniqueSvgIdNum).select('#ShelteredLabel')
      .attr('transform','translate(' + column1XPosLabel + ',' + row1YPosLabel + ')');
  
    d3.select(uniqueSvgIdNum).select('#UnshelteredLabel')
      .attr('transform','translate(' + column2XPosLabel + ',' + row2YPosLabel + ')');
  
    
  
  
    //////// LOAD DATA ///////////
    d3.csv('../../../yml_to_csv/raceVizNationalShelteredStatusBars.csv', function(data){
        
      var nestedData = d3.nest()
        .key(function(d) { return d.category })
        .key(function(d) { return d.situation })
        .key(function(d) { return d.year })
              .rollup(function(v) { return { //without this, a [0] index with all of the properties (state, year, etc.) is within each group, so this specifies the values we want explicitly
                  black: +v[0].black,
                  asian: +v[0].asian,
                  nativeAmerican: +v[0].nativeAmerican,
                  multipleRaces: +v[0].multipleRaces,
                  nhpi: +v[0].nhpi,
                  white: +v[0].white,
                  hispanic: +v[0].hispanic,
                  nonHispanic: +v[0].nonHispanic
              }})
        .object(data);
    
        var nestedDataKV = d3.entries(nestedData);
  
        var selectedYear = +document.getElementById('years' + div.slice(1)).value;
        var selectedCategory = document.getElementById('categories' + div.slice(1)).value;
  
        
        //////// DRAW BARS /////////
        
        var shelBarsG = svgChart.append('g')
          .attr('class','shelBarsG vizToClear');
        
        var shelBars = shelBarsG.selectAll('rect')
          .data(d3.entries(nestedData[selectedCategory].shel[selectedYear]))
          .enter()
          .append('rect')
          .attr('width', 0)
          .attr('height', 0)
          .attr('y', function(d) { return yScalePropBars(d.key); })
          .attr('x', function(d) { return xScalePropBars(d.value); })
          .attr('fill', shelteredColor) //'#b9975b'
          .on("mouseover", function(d) {
            //get mouse X position
            //var xPosition = d3.mouse(this)[0];
            var xPosition = d3.mouse(chartDiv.node())[0];
            
            //reset tooltip values
            d3.select("#tooltip").selectAll(".tipSpan").text(null).classed('tipSpanOff', true).classed('tooltipBold', false).classed('tooltipItalic', false).style('color','white');
		        d3.select('#tooltip').classed('lineTooltip',false);
		
            //Update the tooltip position and value
            if (xPosition < width/2) {
            d3.select("#tooltip")
              .style("top", (d3.event.pageY + tooltipYOffset)+"px")
              .style("left", (d3.event.pageX + tooltipXOffset.right)+"px");
            } else {
            d3.select("#tooltip")
              .style("top", (d3.event.pageY + tooltipYOffset)+"px")
              .style("left", (d3.event.pageX + tooltipXOffset.left)+"px");            
            }
            
            //update the contents
            d3.select('#tooltip').select('#header')
              .classed('tipSpanOff', false)
              .text(keyToCategory[d.key]);
            
            d3.select("#tooltip").select("#p1span1")
              .classed('tipSpanOff', false)
              .classed('tooltipBold', true)
              .text(d3.format(".1%")(d.value));         
            
            d3.select("#tooltip").select("#p1span2")
              .classed('tipSpanOff', false)
              .text(' are sheltered on a given night');
            
            //Show the tooltip
            d3.select("#tooltip").classed("hidden", false);
            
            })
          .on('mouseout', function(d) {
            d3.select("#tooltip").classed("hidden", true);
          })
          ;
      
        var unshelBarsG = svgChart.append('g')
          .attr('class','unshelBarsG vizToClear');
        
        var unshelBars = unshelBarsG.selectAll('rect')
          .data(d3.entries(nestedData[selectedCategory].unshel[selectedYear]))
          .enter()
          .append('rect')
          .attr('width', 0)
          .attr('height', 0)
          .attr('y', function(d) { return yScalePropBars(d.key); })
          .attr('x', function(d) { return xScalePropBars(1-d.value); })
          .attr('fill', unshelteredColor)
          .on("mouseover", function(d) {
            //get mouse X position
            //var xPosition = d3.mouse(this)[0];
            var xPosition = d3.mouse(chartDiv.node())[0];
            
            //reset tooltip values
            d3.select("#tooltip").selectAll(".tipSpan").text(null).classed('tipSpanOff', true).classed('tooltipBold', false).classed('tooltipItalic', false).style('color','white');
		        d3.select('#tooltip').classed('lineTooltip',false);
  
            //Update the tooltip position and value
            if (xPosition < width/2) {
            d3.select("#tooltip")
              .style("top", (d3.event.pageY + tooltipYOffset)+"px")
              .style("left", (d3.event.pageX + tooltipXOffset.right)+"px");
            } else {
            d3.select("#tooltip")
              .style("top", (d3.event.pageY + tooltipYOffset)+"px")
              .style("left", (d3.event.pageX + tooltipXOffset.left)+"px");            
            }
            
            //update the contents
            d3.select('#tooltip').select('#header')
              .classed('tipSpanOff', false)
              .text(keyToCategory[d.key]);
            
            d3.select("#tooltip").select("#p1span1")
              .classed('tipSpanOff', false)
              .classed('tooltipBold', true)
              .text(d3.format(".1%")(d.value));         
            
            d3.select("#tooltip").select("#p1span2")
              .classed('tipSpanOff', false)
              .text(' are unsheltered on a given night');
            
            //Show the tooltip
            d3.select("#tooltip").classed("hidden", false);
            
            })
          .on('mouseout', function(d) {
            d3.select("#tooltip").classed("hidden", true);
          })
          ;    
          
          
          
        ////////// TRANSITIONS IN //////////
        shelBars.transition()
          .duration(1000)
          .ease(d3.easeCubicIn)
          .attr('x', function(d) { return xScalePropBars(0); })
          
            .attr('width', function(d) { return xScalePropBars(d.value) - xScalePropBars(0)})
            .attr('height', yScalePropBars.bandwidth());     
       
        unshelBars.transition()
          .duration(1000)
            .ease(d3.easeCubicIn)
            .attr('width', function(d) { return xScalePropBars(d.value) - xScalePropBars(0)})
            .attr('height', yScalePropBars.bandwidth());
  
      
     
        //////////// ON DROPDOWNS UPDATE /////////////
        function updateBars() {
          shelBars.data(d3.entries(nestedData[selectedCategory].shel[selectedYear]))
            .transition()
            .duration(1000)
            //.delay(function(d,i) { return i * 20 })
            .ease(d3.easePolyInOut)
            .attr('width', function(d) { return xScalePropBars(d.value) - xScalePropBars(0)})
            ;
  
          unshelBars.data(d3.entries(nestedData[selectedCategory].unshel[selectedYear]))
            .transition()
            .duration(1000)
            //.delay(function(d,i) { return i * 20 })
            .ease(d3.easePolyInOut)
            .attr('width', function(d) { return xScalePropBars(d.value) - xScalePropBars(0)})
            .attr('x', function(d) { return xScalePropBars(1-d.value); })
            ;        
        }
  
        categoriesDropdown
          .on("change", function(){
            selectedCategory = this.value;
          
            updateBars();
          });
            
        yearsDropdown
          .on("change", function(){
            selectedYear = this.value;
  
            updateBars();
          }); 
  
    }); //end of read data
  
  } //end of drawShelBars function
  
  
    
  
  //////////////////////////////////////////////
  ////////// MAP + BAR + SCATTER CHART /////////
  //////////////////////////////////////////////    
      
  function drawMap(){
    "use strict";

    function onSubPageChange() {
      d3.select(uniqueSvgIdNum).selectAll('.subPageChangeRemove').remove();
      //d3.select("#barsSort").style('display','none');
      d3.select(uniqueSvgIdNum).selectAll('.mapToHide').style('display','none');
      d3.select(uniqueSvgIdNum).selectAll('.dragLabel').remove();
      subPageRetention = 1;
      d3.selectAll(".tipSpan").text('').classed('tipSpanOff', true).classed('tooltipBold', false).classed('tooltipItalic', false);
      d3.select('#tooltip').classed('lineTooltip',false);
    }  

    // DEFINITIONS
    var subPageRetention; //used to not re-draw certain elements between related line/map/dot subpages

    var bezierLineHeight = height * 0.06;

    var leftMargin = 52,
        rightMargin = width * 0.05,
        bottomToAxis = 170,
        optionsPosFromTop = 125;

    var vizOffsetFromTop = 200;

    var dotsIconRect;  

    var activeSubPage = 'map';

    var stateToSt = {'Alabama':'AL','Alaska':'AK','Arizona':'AZ','Arkansas':'AR','California':'CA','Colorado':'CO','Connecticut':'CT','Delaware':'DE','District of Columbia':'DC','Florida':'FL','Georgia':'GA','Hawaii':'HI','Idaho':'ID','Illinois':'IL','Indiana':'IN','Iowa':'IA','Kansas':'KS','Kentucky':'KY','Louisiana':'LA','Maine':'ME','Maryland':'MD','Massachusetts':'MA','Michigan':'MI','Minnesota':'MN','Mississippi':'MS','Missouri':'MO','Montana':'MT','Nebraska':'NE','Nevada':'NV','New Hampshire':'NH','New Jersey':'NJ','New Mexico':'NM','New York':'NY','North Carolina':'NC','North Dakota':'ND','Ohio':'OH','Oklahoma':'OK','Oregon':'OR','Pennsylvania':'PA','Puerto Rico':'PR','Rhode Island':'RI','South Carolina':'SC','South Dakota':'SD','Tennessee':'TN','Texas':'TX','Utah':'UT','Vermont':'VT','Virginia':'VA','Washington':'WA','West Virginia':'WV','Wisconsin':'WI','Wyoming':'WY'};

    var colorKeyColorDuration = 700,
        colorKeyLabelDuration = 710;

    /////////////// ASSIGN ACTIVE VIZ ///////////////
    
    //if (activeCategory === 'proportion') {
    //  activeViz = 'statePropMap';
    //} else if (activeCategory === 'rate' && activePage === 2) {
    //  activeViz = 'stateRateMap';
    //} else if (activeCategory === 'rate' && activePage === 3) {
    //  activeViz = 'stateMinVsMajMap';
    //}
    //else if (activeCategory === 'rate' && activePage === 3) {
    //  activeViz = 'stateOtherCompsMap';
    //}
  
    //activeSubPage = 'map';

    
    //APPEND THE SVG 
    var uniqueSvgId = div.slice(1) + 'Svg',
        uniqueSvgIdNum = '#' + uniqueSvgId;
    var svgChart = d3.select(uniqueSvgIdNum);
	
    var defs = svgChart.append("defs");


   ////////// HELP AND SOURCE BOXES //////////
    
	var popUpId = div.slice(1) + 'PopUp',
		popUpIdNum = '#' + popUpId,
		popUpBkgdId = div.slice(1) + 'PopUpBkgd',
		popUpBkgdIdNum = '#' + popUpBkgdId;

    var helpBox = svgChart.append('rect')
      .attr('class', 'helpSourceRect')
      .attr('width', helpSourceBoxWidth)
      .attr('height', helpSourceBoxHeight)
      .attr('transform','translate(' + (width - helpSourceBoxWidth * 2 - 10 - 10) + ',' + 10 + ')')
      .style('fill', 'white')
      .style('stroke', helpColorA)
      .attr('rx', corners)
      .attr('ry', corners)
      .on('mouseover', function() {
        helpBox.style('fill', helpColor);
        helpText.style('fill', 'white').style('font-weight','bold');
      })
      .on('mouseout', function() {
        helpBox.style('fill', 'white');
        helpText.style('fill', helpColor).style('font-weight','normal'); 
      })
      .on('click', function() {
        d3.select(popUpBkgdIdNum).style('visibility','visible');
		d3.select(popUpIdNum).style('visibility','visible');
		d3.select(popUpIdNum).select('.helpAndSourceName').html('Explanation');
        d3.select(popUpIdNum).select('.helpAndSourceContent').html(function() {
			if (activeViz === 'statePropMap') {
				return propMapExplain;
			} else if (activeViz === 'stateRateMap') {
				return rateMapExplain;
			} else if (activeViz === 'stateMinVsMajMap') {
				return rateMajMinMapExplain;
			}
		});
	  });
    
    var sourceBox = svgChart.append('rect')
      .attr('class', 'helpSourceRect')
      .attr('width', helpSourceBoxWidth)
      .attr('height', helpSourceBoxHeight)
      .attr('transform','translate(' + (width - helpSourceBoxWidth - 10) + ',' + 10 + ')')
      .style('fill', 'white')
      .style('stroke', sourceColorA)
      .attr('rx', corners)
      .attr('ry', corners)
      .on('mouseover', function() {
        sourceBox.style('fill', sourceColor);
        sourceText.style('fill', 'white').style('font-weight','bold');
      })
      .on('mouseout', function() {
        sourceBox.style('fill', 'white');
        sourceText.style('fill', sourceColor).style('font-weight','normal');    
      })
      .on('click', function() {
		d3.select(popUpBkgdIdNum).style('visibility','visible');
        d3.select(popUpIdNum).style('visibility','visible');
        d3.select(popUpIdNum).select('.helpAndSourceName').html('Sources');
        d3.select(popUpIdNum).select('.helpAndSourceContent').html(function() {
			if (activeViz === 'statePropMap') {
				return propMapSource;
			} else if (activeViz === 'stateRateMap') {
				return rateMapSource;
			} else if (activeViz === 'stateMinVsMajMap') {
				return rateMajMinMapSource;
			}
		});
	  });
    
    var helpText = svgChart.append('text')
      .text('EXPLAIN THIS')
      .attr('class', 'helpSourceText')
      .attr('transform', 'translate(' + (width - 10*2 - helpSourceBoxWidth*1.5) + ',' + 28 + ')')
      .attr('fill', 'rgb(181,38,37)')
      ;
    
    var sourceText = svgChart.append('text')
      .text('SOURCES')
      .attr('class', 'helpSourceText')
      .attr('transform', 'translate(' + (width - 10 - helpSourceBoxWidth*0.5) + ',' + 28 + ')')
      .attr('fill', 'dark gray')
      ;
    
	//FADE IN ON LOAD
	d3.select(uniqueSvgIdNum).selectAll('.helpSourceRect, .helpSourceText')
		.transition()
		.duration(helpFadeDuration)
		.delay(helpFadeDelay)
		.style('opacity',1);
	  
	  
    //BUTTON TO CLOSE
    d3.select(popUpIdNum).select('.helpAndSourceClose')
      .on('click', function() { 
        d3.select(popUpIdNum).style('visibility', 'hidden');
		d3.select(popUpBkgdIdNum).style('visibility','hidden');
		helpBox.style('display','block');
		sourceBox.style('display','block');	
      });

	var gapVizTopToPopUp = height * 0.95;
	
	//LOOK AND POSITIONING OF THE INFO BOX
	d3.select(popUpBkgdIdNum)
	  .style('display','block')
	  .style('width', width + 'px')
	  .style('height', height + 'px')
	  .style('margin-top', -height + 'px');
	  
	d3.select(popUpIdNum).select('.helpAndSourceContent')
	  .style('display','block')
      .style('width', (width * 0.9) + 'px')
	  .style('height', (height * 0.8) + 'px')
	  .style('left', (width * 0.05) + 'px')
	  .style('margin-top', -gapVizTopToPopUp + 'px');

	d3.select(popUpIdNum).select('.helpAndSourceHeader')
	  .style('display','block')
      .style('width', (width * 0.9) + 'px')
	  .style('left', (width * 0.05) + 'px')
	  .style('margin-top', -gapVizTopToPopUp + 'px');
	
	
	
 
    
  
    if (parseInt(d3.select(div).style("width")) < 450) {
      svgChart.append('text')
        .attr('class','smallDeviceText vizToClear subPageChangeRemove')
        .text('Small device? Switch charts below.')
        .attr('transform','translate(' + (width/2) + ',' + (height - 85) + ')');
        
    }
  


    ///////////// ICONS /////////////////
    var iconClassThisViz = div.slice(1) + 'Icons';
    var mapIcon = chartDiv
      .append('text')
      .attr('class','icon fa fa-map-o subPageIcons subPageMapIcons selectedIcon')
      .classed(iconClassThisViz, true)
      .style('display','none')
      .style('left',width/2 - 15 + 'px')
      .style('top', height - 33 + 'px');

    
    var mapIcon2 = chartDiv
      .append('text')
      .attr('class','icon fa fa-map-pin subPageIcons subPageMapIcons selectedIcon')
      .classed(iconClassThisViz, true)
      .attr('id','mapIcon2')
      .style('display','none')
      .style('left', width/2 - 7 + 'px')
      .style('top', height - 50 + 'px');
    
    var barChartIcon = chartDiv
      .append('text')
      .attr('class','icon fa fa-bar-chart subPageIcons')
      .classed(iconClassThisViz, true)
      .style('display','none')
      .style('left', width/2 - 70 + 'px')
      .style('top', height - 33 + 'px');
    
    var dot1Icon = chartDiv
      .append('text')
      .attr('class','icon fa fa-circle subPageIcons subPageDotIcons')
      .classed(iconClassThisViz, true)
      .style('display','none')
      .style('left', width/2 + 43 + 'px')
      .style('top', height - 33 + 'px');
    
    var dot2Icon = chartDiv
      .append('text')
      .attr('class','icon fa fa-circle subPageIcons subPageDotIcons')
      .classed(iconClassThisViz, true)
      .style('display','none')
      .style('left', width/2 + 59 + 'px')
      .style('top', height - 29 + 'px');
    
    var dot3Icon = chartDiv
      .append('text')
      .attr('class','icon fa fa-circle subPageIcons subPageDotIcons')
      .classed(iconClassThisViz, true)
      .style('display','none')
      .style('left', width/2 + 48 + 'px')
      .style('top', height - 17 + 'px');
    
    var dot4Icon = chartDiv
      .append('text')
      .attr('class','icon fa fa-circle subPageIcons subPageDotIcons')
      .classed(iconClassThisViz, true)
      .style('display','none')
      .style('left', width/2 + 65 + 'px')
      .style('top', height - 19 + 'px');


    var thisVizzesIcons = '.' + iconClassThisViz;
    d3.selectAll(thisVizzesIcons).style('display','inline');
  


    //turn off currentMaxBottomplot icon for rates maps
    //if (activeCategory !== 'proportion') {
    //  d3.selectAll('.subPageDotIcons').style('display','none');
    //  d3.select('#dotsIconRect').style('display','none');   /////////////// FIX THIS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //}
  
  
  
  /*
  OLD METHOD
    //defs.append("clipPath") 
    //    .attr("id", "mapClip")
    //  .append("rect")
    //    .attr("width", width)
    //    .attr("height", height - 129 - 50)
    //    .attr('transform','translate(' + 0 + ',' + 129 + ')');
  
     /////////////// ZOOM AND PAN FUNCTIONALITY //////////////////////
    //see example at https://bl.ocks.org/mbostock/4e3925cdc804db257a86fdef3a032a45
    //for more options, such as limiting extents of pan or zoom, see https://github.com/d3/d3-zoom/blob/master/README.md#zoom_scaleExtent
    var zoomObject = d3.zoom();
    
    var zoomRect = svgChart.append("rect") //invisible rectangle that is the window for the zoom behavior to work
        .attr("width", width)
        .attr("height", height - bezierLineHeight - vizOffsetFromTop)
        .attr('id','mapZoomRect')
        .attr('class','vizToClear subPageChangeRemove')
        .attr('transform','translate(' + 0 + ',' + vizOffsetFromTop + ')')
        .style("fill", "none")
        .style("pointer-events", "all") //see https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events
        //.call(zoomObject
          //.on("zoom", zoomed))
          ;
    
    function zoomed() {
      mapG.selectAll('path').attr("transform", d3.event.transform);
    }
    
    function resetZoom() {
      svgChart.transition().duration(750).call(zoomObject.transform, d3.zoomIdentity); //see https://github.com/d3/d3-zoom/issues/107
    }
    
    svgChart.call(zoomObject
      .on("zoom", zoomed)); 
  
  
    //Reset to original position (in case of switching back from other subpage after having zoomed previously)
    resetZoom();
  
  
    //Clip path for map
    d3.select("#mapClip").select("rect")
        .attr("width", width)
        .attr("height", height - 129 - 50)
        .attr('transform','translate(' + 0 + ',' + 129 + ')');
  
  */
  
  
    ///////////// ZOOM AND PAN BACKGROUND PANEL AND FUNCTIONALITY ///////////////
    //see example at https://bl.ocks.org/mbostock/4e3925cdc804db257a86fdef3a032a45
    //for more options, such as limiting extents of pan or zoom, see https://github.com/d3/d3-zoom/blob/master/README.md#zoom_scaleExtent
  
    //Step 1. Create G to contain the zoom rectangle sensor, the clip path, and any elements to show as zoomed or panned
    var mapZoomPanelG = svgChart.append('g')
      .attr('id','mapZoomPanelG')
      .attr('class', 'vizToClear applyMapClip');
  
    //Step 2. Create an opaque rectangle with the dimensions and position you want for the sensor (the boundaries of the clip path rectangle in the next step is what really matters though)
    var mapZoomRect = mapZoomPanelG.append('rect')
      .attr('width', width)
      .attr('height', height - 130 - bezierLineHeight)
      .attr('transform','translate(' + 0 + ',' + 130 + ')')
      .style('fill','#fff')  //must have fill to sense, but set opacity to 0
      .style('opacity',0)
      .attr('class','mapZoomRect vizToClear mapToHide')
      ;
  
    //Step 3. Define a clip path and another rectangle appended to that, which is basically the window that limits the zoom sensor to a specific area
    mapZoomPanelG.append("clipPath") 
        .attr("id", "mapClip")
      .append("rect")
        .attr('id','mapClipRect')
      .attr('width', width - (width *0.05)) // slight addition for dots on the edges
      .attr('height',  height - bezierLineHeight - 130)
        .attr('x',width * 0.025)
        .attr('y',130)
        ;       
  
    //Step 4. Define the zoom behavior. Include zoom or pan limits. Define what gets effected and how in the .on function
    var mapZoom = d3.zoom()
  //    .translateExtent([[-(width*0.8), -(height*0.8)], [width*1.8, height*1.5]])
      .on('zoom', function() { 
        mapG.selectAll('path').attr("transform", d3.event.transform);
      });
    
    //Step 5. Call the zoom on the sensor rectangle.
    mapZoomPanelG.call(mapZoom)
      .on("touchstart.zoom", null)
      .on("touchmove.zoom", null)
      .on("touchend.zoom", null)
      .on("wheel.zoom", null); //Added for scroller version of this viz, to prevent zooming map when scrolling down the page and coming across this viz
  
    //Step 6. (further below) Attach whatever viz elements are to be zoomed/panned to the zoom panel G (can be as another G)
    //You can have elements appended outside this G and then affected within the zoom function, but you may then find that those elements don't receive the pan and zoom behavior
    
    //Step 7. Create a reset function that returns the panel (with all the affected elements in it) to the original position
    // if it returns and then jumps when you click on something again, you may have returned some elements but not the parent g
    function resetMapZoom() {
      mapZoomPanelG
        .transition()
        .duration(750)
        .call(mapZoom.transform, d3.zoomIdentity); //see https://github.com/d3/d3-zoom/issues/107
    }
  
  
  
  
  
    ///////////// DROPDOWNS ///////////////
    //create dropdowns
    var categoriesDropdown = chartDiv.append('select')
      .attr('id','categories' + div.slice(1))
      .attr('class','displayToggle dropdown');
    
    var yearsDropdown = chartDiv.append('select')
      .attr('id','years' + div.slice(1))
      .attr('class','displayToggle dropdown');

    categoriesDropdown
      .style('display','inline')
      .style('right',rightMargin + 65 +'px')
      .style('top', optionsPosFromTop + 5 +'px')
      ;	
	
  	yearsDropdown
      .style('display','inline')
      .style('right',rightMargin +'px')
      .style('top', optionsPosFromTop + 5 +'px')
      ;
  
    //category options
    var generalCategories = ['Black','Native American','Pacific Islander','Asian','Two or more races','White','Hispanic','Non-Hispanic'],
        generalCategoriesVals = {'Black':'black','Native American':'nativeAmerican','Pacific Islander':'nhpi','Asian':'asian','Two or more races':'multipleRaces','White':'white','Hispanic':'hispanic','Non-Hispanic':'nonHispanic'},
        minVsMajCategories = ['Black vs. White','Native Am. vs. White','NHPI vs. White','Asian vs. White','2+ races vs. White','Hispanic vs. Non-Hisp.'],
        minVsMajCategoriesVals = {'Black vs. White':'blackVsWhite','Native Am. vs. White':'nativeAmericanVsWhite','NHPI vs. White':'nhpiVsWhite','Asian vs. White':'asianVsWhite','2+ races vs. White':'multipleRacesVsWhite','Hispanic vs. Non-Hisp.':'hispanicVsNonHispanic'},
        minVsMajSliced = {'blackVsWhite':{'minority':'Black','majority':'White'},'nativeAmericanVsWhite':{'minority':'Native American','majority':'White'},'asianVsWhite':{'minority':'Asian','majority':'White'},'nhpiVsWhite':{'minority':'Pacific Islander','majority':'White'},'multipleRacesVsWhite':{'minority':'two or more races','majority':'White'},'hispanicVsNonHispanic':{'minority':'Hispanic','majority':'Non-Hispanic'}},
        otherCompsCategories = ['Black vs. White Incarceration','Black vs. White Poverty'],
        otherCompsCategoriesVals = {'Black vs. White Incarceration':'blackVsWhiteIncarc','Black vs. White Poverty':'blackVsWhitePoverty'};
  
  
    if (subPageRetention != 1) { //don't reset dropdown values between subpage changes. subPageRetention is reset to 0 on page change.
      //assign dropdown options per active viz categories
      if (activeViz === 'statePropMap' || activeViz === 'stateRateMap') {
        categoriesDropdown.selectAll('option')
          .data(generalCategories)
          .enter()
          .append('option')
            .text(function(d) { return d })
            .attr('value', function(d) { return generalCategoriesVals[d] });
        
        yearsDropdown.selectAll('option')
        .data([2017, 2016, 2015])
        .enter()
        .append('option')
          .text(function(d) { return d })
          .attr('value', function(d) { return d });
          
      } else if (activeViz === 'stateMinVsMajMap') {
        categoriesDropdown.selectAll('option')
          .data(minVsMajCategories)
          .enter()
          .append('option')
            .text(function(d) { return d })
            .attr('value', function(d) { return minVsMajCategoriesVals[d] });
        
        yearsDropdown.selectAll('option')
        .data([2017, 2016, 2015])
        .enter()
        .append('option')
          .text(function(d) { return d })
          .attr('value', function(d) { return d });
          
      } else if (activeViz === 'stateOtherCompsMap') {
        categoriesDropdown.selectAll('option')
          .data(otherCompsCategories)
          .enter()
          .append('option')
            .text(function(d) { return d })
            .attr('value', function(d) { return otherCompsCategoriesVals[d] });
        
        yearsDropdown.selectAll('option')
        .data([2015])
        .enter()
        .append('option')
          .text(function(d) { return d })
          .attr('value', function(d) { return d });
      }  
    }
  
  
    /////////// ASSIGN SELECTED VALUES //////////////
    var selectedYear = +document.getElementById('years' + div.slice(1)).value,   
        selectedGroup = document.getElementById('categories' + div.slice(1)).value;
  
  
    ///////////// COLOR RAMP ////////////////
  	var colorRamp = d3.scaleLinear()
  	.range(['#0055bc','#e3e3e3','#b7312c']);
   
  
  
    ///////////// MAP PROJECTION AND PATHS ////////////////
    var mapG = mapZoomPanelG.append('g')
      .attr('class','map applyMapClip');
      
    var projection = albersUsaPr();  
  
    if (width > 710) {
      projection.scale(900)
        .translate([width * 0.47, height/1.8]);
    } else if (width > 640) { 
      projection.scale(800)
        .translate([width * 0.47, height/1.8]);
    } else if (width > 570) { 
      projection.scale(700)
        .translate([width * 0.47, height/1.8]);
    } else if (width > 530) { 
      projection.scale(650)
        .translate([width * 0.47, height/1.8]);
    } else if (width > 500) { 
      projection.scale(600)
        .translate([width * 0.47, height/1.8]);
    } else {
      projection.scale(width*1.3)
        .translate([width * 0.5, height/1.8]);
    }
    
    var geoPath = d3.geoPath()
      .projection(projection);
  
  
  
  
  
  
  
  
   
   
  
    //////////////// READ THE DATA //////////////////
  
    //NEST THE CSV DATA as states > years > groups > values
      //Resources: http://bl.ocks.org/shancarter/raw/4748131/
      //Resources: http://bl.ocks.org/phoebebright/raw/3176159/
      //Resources: http://learnjsdata.com/group_data.html
  
    function readTheData(file) {
      d3.csv(file, function(data) {
  
        var nestedData, primaryDisplayVar;
  
        ////////////// CONVERT DATA TO NESTED JSON //////////////
        if (activeViz === 'statePropMap') {
          nestedData = d3.nest()
            .key(function(d) { return d.state }).sortKeys(d3.ascending)
            .key(function(d) { return d.year }).sortKeys(d3.ascending)
            .key(function(d) { return d.category }).sortKeys(d3.ascending)
            .rollup(function(v) { return { //without this, a [0] index with all of the properties (state, year, etc.) was within each group, so this specifies the values we want explicitly
                pctPopulation: +v[0].pctPopulation,
                pctHomeless: +v[0].pctHomeless,
                primaryDisplayVar: +v[0].pctDiffPopHmls
            }})
            .object(data); //.entries() would create a structure like 0:'key':'Alabama', 'values':___ whereas .object() creates a direct strcuture like 'Alabama':2016 (see http://learnjsdata.com/group_data.html)
          
        } else if (activeViz === 'stateRateMap') {
          nestedData = d3.nest()
            .key(function(d) { return d.state }).sortKeys(d3.ascending)
            .key(function(d) { return d.year }).sortKeys(d3.ascending)
            .key(function(d) { return d.category }).sortKeys(d3.ascending)
            .rollup(function(v) { return { 
                homelessCount: +v[0].homelessCount,
                populationCount: +v[0].populationCount,
                primaryDisplayVar: +v[0].rate
            }})
            .object(data);
          
        } else if (activeViz === 'stateMinVsMajMap') {
          nestedData = d3.nest()
            .key(function(d) { return d.state }).sortKeys(d3.ascending)
            .key(function(d) { return d.year }).sortKeys(d3.ascending)
            .key(function(d) { return d.category }).sortKeys(d3.ascending)
            .rollup(function(v) { return { 
                primaryDisplayVar: +v[0].rateDiff,
                rateMaj: +v[0].rateMaj,
                rateMin: +v[0].rateMin
            }})
            .object(data);      
          
        } else if (activeViz === 'stateOtherCompsMap') {
          return;
        }
        
        ////////// KEY-VALUE VERSION //////////////
        var nestedDataKV = d3.map(nestedData).entries();
            
  
        
        /////////////////// MERGE WITH GEODATA ///////////////////////
        d3.json("../../../yml_to_json/us-states.json", function(geoData) {  
          
          // For each state in the nested data, find the matching geoJson state and add the data under a new 'values' key
          Object.keys(nestedData).forEach(function(k) { 
    
            for (var j = 0; j < geoData.features.length; j++) {
              if (k == geoData.features[j].properties.name) {
                geoData.features[j].values = nestedData[k];
                break; //stop looking through
              }
            }
          });
    
    
    
          //console.log('geoData updated:',geoData);
          //console.log('data before nest:',data);
          //console.log('nestedData:',nestedData);
          //console.log('nestedDataKV:',nestedDataKV);
          var statesThisViz = div.slice(1) + 'states';
    
          //BIND THE FEATURES DATA
          var states = mapG.selectAll('path')
            .data(geoData.features)
            .enter()
            .append('path')
            .attr('d', geoPath)
            .attr('class','states vizToClear mapToHide')
            .classed('statesThisViz', true)
            .attr('opacity',0)
            //.on('click', zoomed)
          .on("mouseover", function(d,i) {
            //Ensure correct tooltip format
            d3.select("#tooltip").selectAll(".tipSpan").text(null).classed('tipSpanOff', true).classed('tooltipBold', false).classed('tooltipItalic', false).style('color','white');
            d3.select('#tooltip').classed('lineTooltip',false);
      
            
            //get mouse X position
            var xPosition = d3.mouse(chartDiv.node())[0];
  
            //Update the tooltip position and value
            if (xPosition < width/2) {
            d3.select("#tooltip")
              .style("top", (d3.event.pageY + tooltipYOffset)+"px")
              .style("left", (d3.event.pageX + tooltipXOffset.right)+"px");
            } else {
            d3.select("#tooltip")
              .style("top", (d3.event.pageY + tooltipYOffset)+"px")
              .style("left", (d3.event.pageX + tooltipXOffset.left)+"px");            
            }
            
            //update the contents
            d3.select('#tooltip').select('#header')
              .classed('tipSpanOff', false)
              .text(d.properties.name);
  
            if (activeViz === 'statePropMap') {
              d3.select("#tooltip").select("#p1span1")
              .classed('tipSpanOff', false)
              .classed('tooltipBold', true)
              .text(d3.format(".1%")(Math.abs(d.values[selectedYear][selectedGroup].primaryDisplayVar)));
   
              var higherLower = '';
              if (d.values[selectedYear][selectedGroup].pctHomeless > d.values[selectedYear][selectedGroup].pctPopulation) { 
                higherLower = 'HIGHER';
              } else if (d.values[selectedYear][selectedGroup].pctPopulation > d.values[selectedYear][selectedGroup].pctHomeless) {
                higherLower = 'LOWER';
              }
                     
              d3.select("#tooltip").select("#p1span2")
                .classed('tipSpanOff', false)
                .text(' percentage points ' + higherLower);
    
              d3.select("#tooltip").select("#p2span1")
                .classed('tipSpanOff', false)
                .classed('tooltipItalic', true)
                .text(d3.format(".1%")(d.values[selectedYear][selectedGroup].pctHomeless) + ' of homeless vs. ' + d3.format(".1%")(d.values[selectedYear][selectedGroup].pctPopulation) + ' of the population');
  
            } else if (activeViz === 'stateRateMap') {
              d3.select("#tooltip").select("#p1span1")
                .classed('tipSpanOff', false)
                .classed('tooltipBold', true)
                .text(d3.format(".1f")(Math.abs(d.values[selectedYear][selectedGroup].primaryDisplayVar)));
   
              d3.select("#tooltip").select("#p1span2")
                .classed('tipSpanOff', false)
                .text(' in 10,000');
    
              d3.select("#tooltip").select("#p2span1")
                .classed('tipSpanOff', false)
                .classed('tooltipItalic', true)
                .text(d3.format(",")(d.values[selectedYear][selectedGroup].homelessCount) + ' homeless in ' + d3.format(",")(d.values[selectedYear][selectedGroup].populationCount) + ' population');
  
            } else if (activeViz === 'stateMinVsMajMap') {
              d3.select("#tooltip").select("#p1span1")
                .classed('tipSpanOff', false)
                .classed('tooltipBold', true)
                .text(d3.format(".1f")(Math.abs(d.values[selectedYear][selectedGroup].primaryDisplayVar)));
  
              d3.select("#tooltip").select("#p1span2")
                .classed('tipSpanOff', false)
                .text('times the rate for ' + minVsMajSliced[selectedGroup].minority + ' compared to ' + minVsMajSliced[selectedGroup].majority);
    
              d3.select("#tooltip").select("#p2span1")
                .classed('tipSpanOff', false)
                .classed('tooltipItalic', true)
                .text(minVsMajSliced[selectedGroup].minority + ': ' + d3.format(",")(d.values[selectedYear][selectedGroup].rateMin) + ' in 10,000; ' + minVsMajSliced[selectedGroup].majority + ': ' + d3.format(",")(d.values[selectedYear][selectedGroup].rateMaj) + ' in 10,000');
  
            } else if (activeViz === 'stateOtherCompsMap') {
              return '';
            }          
            
            
            //Show the tooltip
            d3.select("#tooltip").classed("hidden", false);
            }) 
          .on('mouseout', function(d) {
            d3.select("#tooltip").classed("hidden", true);
          })          
            ;
    
  
          /////////////// MIN MAX DOMAIN FOR COLOR RAMP /////////////////
    
          //.min and .max weren't working directly on nestedData with function(d){return d[selectedYear][selectedGroup].primaryDisplayVar
          //but this solution seems to work
          //console.log(d3.map(nestedData).entries());
          var currentMin = d3.min(nestedDataKV, function(d) { return d.value[selectedYear][selectedGroup].primaryDisplayVar });
          var currentMax = d3.max(nestedDataKV, function(d) { return d.value[selectedYear][selectedGroup].primaryDisplayVar });
          
          //get highest or lowest (strongest) value to use as maxium color value in either direction. This is to not have +40 as strongest red while -2 as strongest blue.
          //only matters for proportions vs population vizzes as those have diversing values +/- zero
          var highestAbsVal = Math.max(Math.abs(currentMin), Math.abs(currentMax));
  
  
          if (activeViz === 'statePropMap') {
            colorRamp
              .domain([Math.min(0, -highestAbsVal), 0, Math.max(0, highestAbsVal)]);
          } else if (activeViz === 'stateRateMap') {
            colorRamp
              .domain([Math.min(0, currentMin), 0, Math.max(0, currentMax)]);
          } else if (activeViz === 'stateMinVsMajMap') {
            colorRamp
              .domain([0, 1, Math.max(1, currentMax)]); //[Math.min(1, currentMin), 1, Math.max(1, currentMax)]
          }
  
          /////////////////// COLOR THE MAP //////////////////
          var ranOnce = 0;
          function colorTheMap() {
            //console.log(selectedGroup);
            states
              .transition()
              .duration(1000)
/*              .delay(function(d,i) { 
                if (ranOnce === 0){
                  return i * 10; 
                } else {
                  return i * 0;
              }}) */ //consider making this sweep from left to right
              .style('fill',function(d){
                if (activeViz === 'stateMinVsMajMap' && d.values[selectedYear][selectedGroup].primaryDisplayVar === 0.0) {
                  return ('#a6a6a6');
                } else {
                  return colorRamp(d.values[selectedYear][selectedGroup].primaryDisplayVar)
                }
              })
              .style('opacity',1);
          }
          colorTheMap();
          ranOnce = 1;
          
  
          ////////// ADD COLOR KEY //////////
          var colorKeyHeight = 150,
              colorKeyWidth = width * 0.03, //25,
              colorKeyPosFromTop = height - 300;
  
          var colorKeyG = svgChart.append('g')
            .attr('transform','translate(' + (width - rightMargin - colorKeyWidth) + ',' + colorKeyPosFromTop + ')')
            .attr('id','colorKeyG')
            .attr('class', 'colorKey vizToClear mapToHide');
  
          if (width < 500) { 
            colorKeyG.attr('display','none');
          }
  
  
          //find stop position of 0 in the domain to put it in correct position in the color gradient
          var colorRampEndToEnd = currentMax - currentMin;
          //the middle neutral color might be found anywhere from top to bottom of the scale.
          //e.g., max = 20 and min = -3. endToEnd = 23. Position of zero is 0 -(-3) = 3, then 3/23. If min is above 0, then 0 is to be used as bottom of scale anyway.
          var gradientOffsetZero = ((0 - Math.min(currentMin, 0)) / colorRampEndToEnd);
          
          var gradientOffsetOne;
          //for majVsMin map, 1 is the neutral color, 0 to 1 blue, and >1 red.
          //e.g., max = 20 and min = 0.4. endToEnd = 20.4. Position of one is 1 - 0.4 = 0.6, then 0.6/20.4. If min is above 1, then 1 is to be used as bottom of scale anyway.
          //e.g., max = 20 and min = 4. endToEnd = 16. Position of 1 is nowhere in the domain; set minimum on key to be 1.
          if (currentMin < 1) {
            gradientOffsetOne = ((1 - currentMin)  / colorRampEndToEnd);
          } else {
            gradientOffsetOne = 0;
          }

          var uniqueGradientId = div.slice(1) + 'Grad',
              uniqueGradientIdNum = '#' + uniqueGradientId,
              uniqueGradientSt1Num = '#' + uniqueGradientId + 'St1',
              uniqueGradientSt2Num = '#' + uniqueGradientId + 'St2',
              uniqueGradientSt3Num = '#' + uniqueGradientId + 'St3'
              ;
          // THE RECTANGLE
          var colorKeyGradientY = defs.append('linearGradient')
            .attr('class','vizToClear')
            .attr('id',uniqueGradientId)
            .attr('x1','0')
            .attr('x2','0')
            .attr('y1','0')
            .attr('y2','1');
          colorKeyGradientY.insert('stop')
            .attr('id',String(uniqueGradientId + 'St1'));
          colorKeyGradientY.insert('stop')
            .attr('id',String(uniqueGradientId + 'St2'));    
          colorKeyGradientY.insert('stop')
            .attr('id',String(uniqueGradientId + 'St3'));
 
 
          if (activeViz === 'statePropMap') {
            d3.select(uniqueGradientSt1Num)
              .attr('offset','0%')
              .attr('stop-color',colorRamp(currentMax));
            d3.select(uniqueGradientSt2Num)
              .attr('offset', 100 - (gradientOffsetZero*100) + '%')
              .attr('stop-color', colorRamp(0));
            d3.select(uniqueGradientSt3Num)
              .attr('offset','100%')
              .attr('stop-color',colorRamp(currentMin));
          } else if (activeViz === 'stateRateMap') {
            d3.select(uniqueGradientSt1Num)
              .attr('offset','0%')
              .attr('stop-color',colorRamp(currentMax));
            d3.select(uniqueGradientSt2Num)
              .attr('offset', '100%') //not necessary for state rate map; always lowest value is 0.
              .attr('stop-color', colorRamp(0));
            d3.select(uniqueGradientSt3Num)
              .attr('offset','100%')
              .attr('stop-color',colorRamp(0));
          } else if (activeViz === 'stateMinVsMajMap') {
            d3.select(uniqueGradientSt1Num)
              .attr('offset','0%')
              .attr('stop-color',colorRamp(currentMax));
            d3.select(uniqueGradientSt2Num)
              .attr('offset', 100 - (gradientOffsetOne*100) + '%')
              .attr('stop-color', colorRamp(1));
            d3.select(uniqueGradientSt3Num)
              .attr('offset','100%')
              .attr('stop-color',colorRamp(Math.min(currentMin, 1)));
          }

          var uniqueFillValue = String('url("' + uniqueGradientIdNum + '")');
  
          var colorKeyRect = colorKeyG.append('rect')
            .attr('id','colorKeyRect')
            .attr('height', colorKeyHeight)
            .attr('width', colorKeyWidth)
            .style('fill', uniqueFillValue);
  
          
          // THE LABELS AND LINES
          //note this is the scale for only the numbering, so it doesn't need three stops like the colors
          var colorKeyScale = d3.scaleLinear() 
            .range([colorKeyHeight, 0]);
  
          if (activeViz !== 'stateMinVsMajMap') {
            colorKeyScale
              .domain([Math.min(0, currentMin), Math.max(0, currentMax)]);
          } else if (activeViz === 'stateMinVsMajMap') {
            colorKeyScale
              .domain([Math.min(1, currentMin), Math.max(1, currentMax)]);
          }
  
          var colorKeyAxisCall = d3.axisLeft(colorKeyScale)
              .tickSize(-(colorKeyWidth))
              .ticks();
              
          if (activeViz === 'statePropMap') {
            colorKeyAxisCall.tickFormat(d3.format(".0%"));
            
            //if the neutral center (0 or 1) is too close to the end of the color scale, label two points at 1/3 and 2/3 of the way. Otherwise label 0 or 1 and the two endpoints.
            if (gradientOffsetZero < 0.1 || gradientOffsetZero > 0.9) {
              
              //First label (bottom) is the current minimum or 0
              //Second label is 1/3 of the way up the range between current minimum and current maximum. Treated separately for maximum of <= 0 because otherwise returns positive values (e.g., 10 - -20 = 30; 30/3 = 10).
              //Third label is 2/3 of the way up the range, like second label.
              //Fourth label is the current maximum or 0.
              if (currentMax <= 0) {
                colorKeyAxisCall.tickValues([Math.min(0, currentMin), -(Math.max(0, currentMax)-Math.min(0, currentMin))/3, -((Math.max(0, currentMax)-Math.min(0, currentMin))/3)*2,  Math.max(0, currentMax)]);
              } else {
              colorKeyAxisCall.tickValues([Math.min(0, currentMin), ((Math.max(0, currentMax)-Math.min(0, currentMin))/3)-(0-currentMin), (((Math.max(0, currentMax)-Math.min(0, currentMin))/3)*2)-(0-currentMin),  Math.max(0, currentMax)]);
              }
              
            } else {
              colorKeyAxisCall.tickValues([currentMin, 0, currentMax]);
            }     
          
          //Inner rate map labels (at 1/3 and 2/3 of the way) are rounded to #.0 to appear cleaner  
          } else if (activeViz === 'stateRateMap') {
              colorKeyAxisCall.tickFormat(d3.format(".1f"));
              colorKeyAxisCall.tickValues([0, Math.round(currentMax / 3), Math.round((currentMax/3)*2), currentMax]);
          
          } else if (activeViz === 'stateMinVsMajMap') {
              colorKeyAxisCall.tickFormat(d3.format(".1f"));
              if (gradientOffsetOne < 0.1 || gradientOffsetOne > 0.9) {
                colorKeyAxisCall.tickValues([Math.min(1, currentMin), Math.round((Math.max(1, currentMax)-Math.min(1, currentMin))/3), Math.round(((Math.max(1, currentMax)-Math.min(1, currentMin))/3)*2),  Math.max(1, currentMax)]);
              } else {
                colorKeyAxisCall.tickValues([currentMin, 1, currentMax]);
              }  
          }
          
          var colorKeyAxis = colorKeyG.append('g')
            .attr('class', 'colorKeyAxis')
            .call(colorKeyAxisCall);
          
  
          //color key axis styling
          d3.select(uniqueSvgIdNum).select('#colorKeyG').selectAll('.tick').selectAll('text').attr('class','axisLabels');
          
          d3.select(uniqueSvgIdNum).selectAll('.colorKeyAxis').selectAll('path').style('opacity',0);
          
          d3.select(uniqueSvgIdNum).select('#colorKeyG').selectAll(".tick line")
            .attr("stroke", "#4d4d4d")
            .attr('stroke-width', 2)
            .attr("stroke-dasharray", "2,2");
            
			
		  /////// PAN AND ZOOM INSTRUCTION ////////
          if (width > 620) {
            d3.select(uniqueSvgIdNum)
              .append('text')
								.attr('class', 'smallInstruction')
                .attr('transform','translate(' + (rightMargin / 2) + ',' + (height - 37) + ')')
                .text('Double-click to zoom, drag to pan');
					}

					if (width > 770) {
            d3.select(uniqueSvgIdNum)
              .append('text')
								.attr('class', 'smallInstruction2')
                .attr('transform','translate(' + (7) + ',' + (100) + ')')
                .text('');						
					}
 
   
          /////// PAN AND ZOOM RESET ////////
          svgChart.append('g') //Label to click in top area to reset zoom
            .attr('class','resetText resetTextMap vizToClear');
          
          if (width > 500) {
            d3.select(uniqueSvgIdNum).selectAll('.resetTextMap')
              .append('text')
                .attr('transform','translate(' + (width - rightMargin) + ',' + (optionsPosFromTop - 20) + ')')
                .text('Reset pan/zoom')
                .on('click', resetMapZoom);
          } else {
            d3.select(uniqueSvgIdNum).selectAll('.resetTextMap')
              .append('text')
                .attr('transform','translate(' + (width - rightMargin) + ',' + (optionsPosFromTop + 40) + ')')
                .text('Reset pan/zoom')
                .on('click', resetMapZoom);          
          }
  
          /////////////// DRAW SUBPAGE ICONS AND ELEMENTS ///////////////
          //only draw once, not on each subpage change
          if (subPageRetention != 1) {
            drawSubPageElements();
          }
  
    
          ////////////////// ICONS FUNCTIONALITY /////////////////
          mapIcon
            .on('click', function(d) {
              d3.selectAll(thisVizzesIcons).classed('selectedIcon', false);
              mapIcon.classed('selectedIcon', true);
              mapIcon2.classed('selectedIcon', true);
              onSubPageChange();
              d3.select(uniqueSvgIdNum).selectAll('.resetTextMap').style('visibility','visible');
              d3.select(uniqueSvgIdNum).selectAll('.resetTextScatter').style('visibility','hidden');
              d3.select(uniqueSvgIdNum).selectAll('.mapToHide').style('opacity',0);
              d3.select(uniqueSvgIdNum).selectAll('.mapToHide').style('display','inline');
              d3.select(uniqueSvgIdNum).selectAll('.mapToHide:not(.mapZoomRect)')
                .transition()
                .duration(1000)
                .style('opacity',1);
/*               
              d3.selectAll('.mapToHide:not(.mapZoomRect):not(.statesThisViz)')
                .style('opacity',1);
              d3.select(uniqueSvgIdNum).selectAll('.mapToHide:not(.mapZoomRect):not(.statesThisViz)').style('opacity',1);
              d3.select(uniqueSvgIdNum).selectAll('.statesThisViz')
                .transition()
                .duration(500)
                .delay(function(d, i) { return i * 15 })
                .style('opacity',1); 
*/
							d3.select(uniqueSvgIdNum).selectAll('.smallInstruction').text('Double-click to zoom, drag to pan');
							d3.select(uniqueSvgIdNum).selectAll('.smallInstruction2').text('');
              catYearUpdate();
            });
          
          mapIcon2
            .on('click', function(d) {
              d3.selectAll(thisVizzesIcons).classed('selectedIcon', false);
              mapIcon.classed('selectedIcon', true);
              mapIcon2.classed('selectedIcon', true);
              onSubPageChange();
              d3.select(uniqueSvgIdNum).selectAll('.resetTextMap').style('visibility','visible');
              d3.select(uniqueSvgIdNum).selectAll('.resetTextScatter').style('visibility','hidden');
              d3.select(uniqueSvgIdNum).selectAll('.mapToHide').style('opacity',0);
              d3.select(uniqueSvgIdNum).selectAll('.mapToHide').style('display','inline');
              d3.select(uniqueSvgIdNum).selectAll('.mapToHide:not(.mapZoomRect)')
                .transition()
                .duration(1000)
                .style('opacity',1);
							d3.select(uniqueSvgIdNum).selectAll('.smallInstruction').text('Double-click to zoom, drag to pan');
							d3.select(uniqueSvgIdNum).selectAll('.smallInstruction2').text('');
            catYearUpdate();
            });
          
          barChartIcon
            .on('click', function(d) {
              d3.selectAll(thisVizzesIcons).classed('selectedIcon', false);
              barChartIcon.classed('selectedIcon', true);
              onSubPageChange();
              d3.select(uniqueSvgIdNum).selectAll('.resetTextMap').style('visibility','hidden');
              d3.select(uniqueSvgIdNum).selectAll('.resetTextScatter').style('visibility','hidden');
							d3.select(uniqueSvgIdNum).selectAll('.smallInstruction').text('Drag chart background to scroll');
              d3.select(uniqueSvgIdNum).selectAll('.smallInstruction2').text('Sort bars by');
							switchToBars();
			  });
        
          dotsIconRect
            .on('click', function(d) {
			  d3.selectAll(thisVizzesIcons).classed('selectedIcon', false);
              dot1Icon.classed('selectedIcon', true);
              dot2Icon.classed('selectedIcon', true);
              dot3Icon.classed('selectedIcon', true);
              dot4Icon.classed('selectedIcon', true);
              d3.select(uniqueSvgIdNum).selectAll('.resetTextMap').style('visibility','hidden');
              d3.select(uniqueSvgIdNum).selectAll('.resetTextScatter').style('visibility','visible');
              onSubPageChange();
							d3.select(uniqueSvgIdNum).selectAll('.smallInstruction').text('Double-click to zoom, drag to pan');
      				d3.select(uniqueSvgIdNum).selectAll('.smallInstruction2').text('');
							switchToDots();
            });
    
    
    
    
    
    
          /////////////////////////////////////////////////////////////
          ///////////////// BAR GRAPH VERSION /////////////////////////
          /////////////////////////////////////////////////////////////  
    
          //SOME BAR CHART ELEMENTS
          //Here because referred to by dropdown change functions
          var activeRadio;
          
          var xScaleBarsFromTop = vizOffsetFromTop,
              xScaleBarsFromBottom = height - 65,
              leftMarginBars = 35,
              barClipHeight = xScaleBarsFromBottom - xScaleBarsFromTop,
              barChartFullHeight = (nestedDataKV.length * 18) - 30, //change to affect bar height. The - 25 is to adjust for it cutting off the bottom few states (WHY?)
              barChartWidth = width - leftMarginBars - rightMargin;
          var barsChart;
    
          var xScaleBars = d3.scaleLinear()
            .range([leftMarginBars, width-rightMargin])
            .domain([Math.min(0, currentMin), Math.max(0, currentMax)]);      
  
          var numberOfTicks;
          if (width > 500) { numberOfTicks = 10; } else { numberOfTicks = 5; }
          
          var xScaleBarsCall = d3.axisTop(xScaleBars)
              .tickSize(0)
              .ticks(numberOfTicks);
          
          if (activeViz === 'statePropMap') {
            xScaleBarsCall.tickFormat(d3.format(".0%"));
          } else {
            xScaleBarsCall.tickFormat(d3.format(".1f"));
          }
              
          var xScaleBarsRefLinesCall = d3.axisTop(xScaleBars)
              .tickSize(-(barChartFullHeight))
              .tickFormat('')
              .ticks(numberOfTicks);
              
          var yBarsPadding = 0.15;
          
          var yScaleBars, yScaleBarsCall, bars, sortedStates;
    
    
          //////////// DRAW THE BAR GRAPH FUNCTION /////////////////
          function switchToBars() {
    
            //http://bl.ocks.org/nbremer/326fb6de768e85261bfd47aa1f497863
            //Reference: https://codepen.io/ghiden/pen/EhBpy
            //Reference: http://bl.ocks.org/billdwhite/36d15bc6126e6f6365d0
            //Reference: http://bl.ocks.org/lmatteis/895a134f490626b0e62796e92a06b9c1
            //http://computationallyendowed.com/blog/2013/01/21/bounded-panning-in-d3.html
            
            
            
            activeSubPage = 'bar';
            

            ///////////// INITIAL SORT ORDER ///////////////
            nestedDataKV.sort(function(a, b) {
                       return d3.descending(a.value[selectedYear][selectedGroup].primaryDisplayVar,b.value[selectedYear][selectedGroup].primaryDisplayVar);
                 });
                 
            //get state names in descending values order to be the domain
            sortedStates = [];
            for (var i = 0; i < nestedDataKV.length; i ++) {
                sortedStates.push(nestedDataKV[i].key);
            }
            //console.log('sorted states', sortedStates);
               
   
  
            ///////////// CHART BACKGROUND COLOR PANEL //////////////
            var barsChartBackgroundPanel = svgChart.append('rect')
              .attr('width', width - leftMarginBars - rightMargin) //width - leftMarginBars - rightMargin
              .attr('height', barClipHeight)
              .attr('class','vizToClear subPageChangeRemove')
              .attr('transform','translate(' + (leftMarginBars) + ',' + xScaleBarsFromTop + ')')
              .style('fill','url("#whiteGradient")')
              ;
  
               
            ///////////// SCROLL BACKGROUND PANEL AND FUNCTIONALITY ///////////////
            //create the rectangle that acts as a sensor for the 'zoom' (in this case only scroll) behavior
            var barsChartZoomPanelG = svgChart.append('g')
              .attr('class', 'vizToClear subPageChangeRemove');
            
            var barsChartZoomPanel = barsChartZoomPanelG.append('rect')
              .attr('width', width - leftMarginBars - rightMargin + 25)
              .attr('height', barClipHeight)
              .attr('transform','translate(' + (leftMarginBars - 25) + ',' + xScaleBarsFromTop + ')')
              .style('fill','white')
              .style('opacity',0)
              .attr('class','barsChartZoomPanel')
              //.attr("pointer-events", "all")
              ;
              
            //Define clip path rectangle
            //unique id per viz
            var barsZoomVizId = div.slice(1) + 'BarZoom',
                barsZoomVizIdNum = '#' + barsZoomVizId;
            var barsClipVizId = div.slice(1) + 'BarClip',
                barsClipVizIdNum = '#' + barsClipVizId;
            barsChartZoomPanelG.append("clipPath") 
                .attr("id", barsClipVizId)
              .append("rect")
                .attr('id', barsZoomVizId)
                .attr("width", width - leftMarginBars - rightMargin + 25)
                .attr("height", barClipHeight) //barClipHeight
                .attr('x',leftMarginBars-25)
                .attr('y',0)
                //.attr('transform','translate(' + -leftMarginBars + ',' + 0 + ')')          
                ;               
    
            //define the zoom (in this case only panning) behavior
            var barsZoomScroll = d3.zoom()
              .scaleExtent([1,1]) // turn off the zooming
              .translateExtent([[width, 0], [0, nestedDataKV.length * 22.5]])
              .on('zoom', barsChartScroll);
     
            //var barsZoomScroll = d3.zoom() //define a zoom object
            //  .on("zoom",null);
            
            // barsChartZoomPanel.call(barsZoomScroll)
            //    .on('wheel.zoom', scroll)
            //    .on("mousedown.zoom", null)
            //    .on("touchstart.zoom", null)
            //   .on("touchmove.zoom", null)
            //    .on("touchend.zoom", null);
     
              
            barsChartZoomPanel.call(barsZoomScroll);
      
            function barsChartScroll() {
              //it appears the chart is clipped before being transformed, so the clipped part is shifted upwards
              //need to readjust the clip rectangle position
              d3.select(barsZoomVizIdNum).attr('y', -d3.event.transform.y); //??? https://stackoverflow.com/questions/25142240/how-to-apply-d3-js-svg-clipping-after-zooming
              
              //move the scrollable G area based on the zoom event
              barsChartScrollable.attr('transform', d3.event.transform);
              //return barsChartScrollable.attr('transform','translate(0,' + d3.event.transform.y + ')'); //example => to do only y axis, alternative to translateExtent
            }
            
            
            /// 'Drag to scroll' label - only on first load
            var dragToScrollLabel = d3.select('#svgChart').append('text')
              .text('drag this')
              .attr('class','dragLabel vizToClear')
              .attr('text-anchor','middle')
              .attr('x', width - rightMargin - 70)
              .attr('y',height - 150);
              
            var dragToScrollLabel2 = d3.select('#svgChart').append('text')
              .text('background')
              .attr('class','dragLabel vizToClear')
              .attr('text-anchor','middle')
              .attr('x', width - rightMargin - 70)
              .attr('y',height - 130);         
  
            var dragToScrollLabel3 = d3.select('#svgChart').append('text')
              .text('to scroll')
              .attr('class','dragLabel vizToClear')
              .attr('text-anchor','middle')
              .attr('x', width - rightMargin - 70)
              .attr('y',height - 110);
  
            d3.select(uniqueSvgIdNum).selectAll('.dragLabel')
              .transition()
              .duration(15000)
              .style('opacity',0);
  
            ///////////// DRAW AXES AND BARS ///////////////
            barsChart = svgChart.append('g')
              .attr('class','barsChart vizToClear subPageChangeRemove')
              .attr('transform','translate(' + 0 + ',' + xScaleBarsFromTop + ')');
            
            //unique clip path class
            var vizApplyBarsClip = div.slice(1) + 'ApplyClip',
                vizApplyBarsClipNum = '#' + vizApplyBarsClip;
            //group for the scrollable aspects of the bars chart (besides x axis)
            var barsChartScrollable = barsChart.append('g')
              .attr('id','barsChartScrollable')
              //.attr('clip-path','url("#barsClip")')
              .attr('class', vizApplyBarsClip);
            
            
              
            xScaleBars
             .domain([Math.min(0, currentMin), Math.max(0, currentMax)]);  
            
            //draw the axes
            var xScaleBarsAxis = barsChart.append('g')
              .attr('class','axis xAxis xScaleBarsAxis')
              .attr('transform','translate(' + 0 + ',' + 0 + ')')
              .call(xScaleBarsCall)
              .selectAll('text')
                .attr('class','axisLabels')
                .style('pointer-events','none');
  
            var xScaleBarsAxisRefLines = barsChartScrollable.append('g')
              .attr('class','axis xAxis xScaleBarsAxisRefLines')
              .attr('transform','translate(' + 0 + ',' + 0 + ')')
              .call(xScaleBarsRefLinesCall);
   
             yScaleBars = d3.scaleBand()
              .padding(yBarsPadding)
              .range([0, barChartFullHeight])
              .domain(sortedStates);
              //.domain(d3.keys(nestedData)); //previous
            
            yScaleBarsCall = d3.axisLeft(yScaleBars)
              .tickSize(0)
              .tickPadding(3)
              .tickFormat(function(d) { return stateToSt[d]; }); //convert to state abbreviation
                       
            var yScaleBarsAxis = barsChartScrollable.append('g')
              .attr('class','axis yAxis')
              .attr('id','yScaleBarsAxis')
              .attr('transform','translate(' + leftMarginBars + ',' + 0 + ')')
              .call(yScaleBarsCall)
              .selectAll('text')
                .attr('class','axisLabels')
                .style('pointer-events','none');
  
  
            d3.select(uniqueSvgIdNum).selectAll('.axis').selectAll('path')
              .style('opacity',0);    
               
            d3.select(uniqueSvgIdNum).selectAll(".tick line")
              .attr("stroke", "#BEBEBE")
              .attr("stroke-dasharray", "2,2");
  
  
  
  
            
            //DRAW THE BARS with joined data
            bars = d3.select(uniqueSvgIdNum).select('#barsChartScrollable').selectAll('.bar')
              .data(nestedDataKV)
              .enter()
              .append('rect')
              .attr('class','bar')
              .attr('x', function(d) { return xScaleBars(0)})
              .attr('y', function(d) { return yScaleBars(d.key); })
              .attr('width', 0)
              .attr('height', yScaleBars.bandwidth())
              .style('fill', function(d) { return colorRamp(d.value[selectedYear][selectedGroup].primaryDisplayVar); })
              .on("mouseover", function(d,i) {
                d3.select("#tooltip").selectAll(".tipSpan").text(null).classed('tipSpanOff', true).classed('tooltipBold', false).classed('tooltipItalic', false).style('color','white');
                d3.select('#tooltip').classed('lineTooltip',false);

                //get mouse X position
                var xPosition = d3.mouse(chartDiv.node())[0];
      
                //Update the tooltip position and value
                if (xPosition < width/2) {
                d3.select("#tooltip")
                  .style("top", (d3.event.pageY + tooltipYOffset)+"px")
                  .style("left", (d3.event.pageX + tooltipXOffset.right)+"px");
                } else {
                d3.select("#tooltip")
                  .style("top", (d3.event.pageY + tooltipYOffset)+"px")
                  .style("left", (d3.event.pageX + tooltipXOffset.left)+"px");            
                }
                
                //update the contents
                if (activeViz === 'statePropMap') {
                  d3.select('#tooltip').select('#header')
                    .classed('tipSpanOff', false)
                    .text(d.key);
                  
                  d3.select("#tooltip").select("#p1span1")
                    .classed('tipSpanOff', false)
                    .classed('tooltipBold', true)
                    .text(d3.format(".1%")(Math.abs(d.value[selectedYear][selectedGroup].primaryDisplayVar)));
       
                  var higherLower = '';
                  if (d.value[selectedYear][selectedGroup].pctHomeless > d.value[selectedYear][selectedGroup].pctPopulation) { 
                    higherLower = 'HIGHER';
                  } else if (d.value[selectedYear][selectedGroup].pctPopulation > d.value[selectedYear][selectedGroup].pctHomeless) {
                    higherLower = 'LOWER';
                  }
                         
                  d3.select("#tooltip").select("#p1span2")
                    .classed('tipSpanOff', false)
                    .text(' percentage points ' + higherLower);
        
                  d3.select("#tooltip").select("#p2span1")
                    .classed('tipSpanOff', false)
                    .classed('tooltipItalic', true)
                    .text(d3.format(".1%")(d.value[selectedYear][selectedGroup].pctHomeless) + ' of homeless vs. ' + d3.format(".1%")(d.value[selectedYear][selectedGroup].pctPopulation) + ' of population');
      
                } else if (activeViz === 'stateRateMap') {
                  d3.select('#tooltip').select('#header')
                    .classed('tipSpanOff', false)
                    .text(d.key);
                  
                  d3.select("#tooltip").select("#p1span1")
                    .classed('tipSpanOff', false)
                    .classed('tooltipBold', true)
                    .text(d3.format(".1f")(Math.abs(d.value[selectedYear][selectedGroup].primaryDisplayVar)));
       
                  d3.select("#tooltip").select("#p1span2")
                    .classed('tipSpanOff', false)
                    .text(' in 10,000');
        
                  d3.select("#tooltip").select("#p2span1")
                    .classed('tipSpanOff', false)
                    .classed('tooltipItalic', true)
                    .text(d3.format(",")(d.value[selectedYear][selectedGroup].homelessCount) + ' homeless in ' + d3.format(",")(d.value[selectedYear][selectedGroup].populationCount) + ' population');
  
                } else if (activeViz === 'stateMinVsMajMap') {
                  d3.select('#tooltip').select('#header')
                    .classed('tipSpanOff', false)
                    .text(d.key);
                  
                  d3.select("#tooltip").select("#p1span1")
                    .classed('tipSpanOff', false)
                    .classed('tooltipBold', true)
                    .text(d3.format(".1f")(Math.abs(d.value[selectedYear][selectedGroup].primaryDisplayVar)));
      
      
                  d3.select("#tooltip").select("#p1span2")
                    .classed('tipSpanOff', false)
                    .text('times the rate for ' + minVsMajSliced[selectedGroup].minority + ' compared to ' + minVsMajSliced[selectedGroup].majority);
        
                  d3.select("#tooltip").select("#p2span1")
                    .classed('tipSpanOff', false)
                    .classed('tooltipItalic', true)
                    .text(minVsMajSliced[selectedGroup].minority + ': ' + d3.format(",")(d.value[selectedYear][selectedGroup].rateMin) + ' in 10,000; ' + minVsMajSliced[selectedGroup].majority + ': ' + d3.format(",")(d.value[selectedYear][selectedGroup].rateMaj) + ' in 10,000');
                                  
                  
                } else if (activeViz === 'stateOtherCompsMap') {
                  return '';
                }          
                
                
                //Show the tooltip
                d3.select("#tooltip").classed("hidden", false);
                }) 
              .on('mouseout', function(d) {
                d3.select("#tooltip").classed("hidden", true);
              })                
              ;
    
            //Transition bars in on first load
            bars.transition()
              .duration(1000)
              .attr('x', function(d) { return xScaleBars(Math.min(0,d.value[selectedYear][selectedGroup].primaryDisplayVar)); })
              .attr('width', function(d) { return Math.abs(xScaleBars(d.value[selectedYear][selectedGroup].primaryDisplayVar) - xScaleBars(0)); });
    
    
    
    
      
  
            
    
            ////////// RADIO BUTTONS SORTING ///////////
  
          
            /* --- old html radio buttons version ---
            //https://bl.ocks.org/mbostock/3885705
            //http://chimera.labs.oreilly.com/books/1230000000345/ch10.html#_click_to_sort
          
            //remove if already exists (to not repopulate when switching between subpage graphs)
            d3.selectAll('#barsSort').remove();
            
            var barsForm = d3.select('#chartDiv').append('form')
              .attr('id','barsSort')
              .attr('class','vizToClear');
              
            barsForm.append('label')
              .text('Value ')
              .classed('dropdownHeader',true)
              .insert('input')
                .attr('type','radio')
                .attr('name', 'barsSort')
                .attr('value', 'byValue')
                .attr('class', 'barsSort')
                .attr('checked',true);
            
             barsForm.append('br');
             barsForm.append('label')
              .text(' State  ')
              .classed('dropdownHeader',true)
              .insert('input')
                .attr('type','radio')
                .attr('name', 'barsSort')
                .attr('value', 'byAlpha')
                .attr('class', 'barsSort');
            
            d3.select("#barsSort")
              .style('display','block')
              .style('left', 7 +'px')
              .style('top', (110) +'px')
              ;
              
            d3.selectAll(".barsSort")
              .on("change", function(){
                if (this.value === "byValue") {
                  
                  //update states order and domain per current selected category and year
                  nestedDataKV.sort(function(a, b) {
                     return d3.descending(a.value[selectedYear][selectedGroup].primaryDisplayVar,b.value[selectedYear][selectedGroup].primaryDisplayVar);
                  });
                } else {
                  nestedDataKV.sort(function(a, b) {
                     return d3.ascending(a.key,b.key);
                  });
                }
                var sortedStates = [];
                for (var i = 0; i < nestedDataKV.length; i ++) {
                    sortedStates.push(nestedDataKV[i].key);
                }
               //console.log('current sort of states', sortedStates);
     
                yScaleBars.domain(sortedStates);
    
                bars.transition()
                  .duration(600)
                  .delay(function(d,i) { return i * 4 })
                  .attr('y', function(d) { return yScaleBars(d.key); });
                
                //change axis text labels
                d3.select('#yScaleBarsAxis').selectAll('text')
                  .text(function(d,i) { return stateToSt[sortedStates[i]]; });
    
                //WHY NOT WORKING TO HAVE AXIS ST LABELS SHIFT TO NEW SPOT?
                //d3.select('#yScaleBarsAxis').selectAll('text')
                //  .transition()
                //  .duration(1000)
                //  .attr('y',function(d) { return yScaleBars(d); });          
              });
    
            */
  
          
            var radioOuterR = 7;
            var radioInnerR = 4.5;
            var radioColor = 'rgb(181,38,37)';
            activeRadio = 1;
          
            var radioGroup = svgChart.append('g')
              .attr('class','vizToClear subPageChangeRemove')
              .attr('id','radioGroup');
          
            var outerRadio1 = radioGroup.append('circle')
              .attr('class', 'outerRadioCircle')
              .attr('r', radioOuterR)
              .attr('cx', 65)
              .attr('cy', optionsPosFromTop - 5)
              .style('stroke', '#404040')
              .style('stroke-width', 1.5)
              .style('fill', '#fff');
          
            var outerRadio2 = radioGroup.append('circle')
              .attr('class', 'outerRadioCircle')
              .attr('r', radioOuterR)
              .attr('cx', 65)
              .attr('cy', optionsPosFromTop + 18)
              .style('stroke', '#404040')
              .style('stroke-width', 1.5)
              .style('fill', '#fff');
          
            var innerRadio1 = radioGroup.append('circle')
              .attr('class', 'innerRadioCircle')
              .attr('r', radioInnerR)
              .attr('cx', 65)
              .attr('cy', optionsPosFromTop - 5)
              .style('opacity', 0.8)
              .style('fill', 'rgb(183, 49, 44)'); //rgb(183, 49, 44) //rgb(0, 85, 188)
          
            var innerRadio2 = radioGroup.append('circle')
              .attr('class', 'innerRadioCircle')
              .attr('r', 0)
              .attr('cx', 65)
              .attr('cy', optionsPosFromTop + 18)
              .style('opacity', 0.8)
              .style('fill', 'rgb(183, 49, 44)');
              
            var sensorRadio1 = radioGroup.append('circle')
              .attr('class', 'sensorRadioCircle')
              .attr('r', radioOuterR)
              .attr('cx', 65)
              .attr('cy', optionsPosFromTop - 5)
              .style('opacity', 0)
              .style('cursor', 'pointer')
              .on('click', function() {
                if (activeRadio === 1) {
                  return
                } else {
                  //update states order and domain per current selected category and year
                  nestedDataKV.sort(function(a, b) {
                     return d3.descending(a.value[selectedYear][selectedGroup].primaryDisplayVar,b.value[selectedYear][selectedGroup].primaryDisplayVar);
                  });         
                
                  var sortedStates = [];
                  for (var i = 0; i < nestedDataKV.length; i ++) {
                      sortedStates.push(nestedDataKV[i].key);
                  }
                  //console.log('current sort of states', sortedStates);
     
                  yScaleBars.domain(sortedStates);
      
                  bars.transition()
                    .duration(600)
                    .delay(function(d,i) { return i * 4 })
                    .attr('y', function(d) { return yScaleBars(d.key); });
                  
                  //change axis text labels
                  d3.select('#yScaleBarsAxis').selectAll('text')
                    .text(function(d,i) { return stateToSt[sortedStates[i]]; });
      
                  //WHY NOT WORKING TO HAVE AXIS ST LABELS SHIFT TO NEW SPOT?
                  //d3.select('#yScaleBarsAxis').selectAll('text')
                  //  .transition()
                  //  .duration(1000)
                  //  .attr('y',function(d) { return yScaleBars(d); }); 
  
  
                  innerRadio1.transition()
                    .duration(1500)
                    .ease(d3.easeElastic)
                    .attr('r', radioInnerR);
                  
                  innerRadio2.transition()
                    .duration(500)
                    .attr('r', 0);
                }
                
                activeRadio = 1;
              });
          
            var sensorRadio2 = radioGroup.append('circle')
              .attr('class', 'sensorRadioCircle')
              .attr('r', radioOuterR)
              .attr('cx', 65)
              .attr('cy', optionsPosFromTop + 18)
              .style('opacity', 0)
              .style('cursor', 'pointer')
              .on('click', function() {
                 if (activeRadio === 2) {
                   return;
                 } else {
                    nestedDataKV.sort(function(a, b) {
                       return d3.ascending(a.key,b.key);
                    });        
                    
                    var sortedStates = [];
                    for (var i = 0; i < nestedDataKV.length; i ++) {
                        sortedStates.push(nestedDataKV[i].key);
                    }
                    //console.log('current sort of states', sortedStates);
                    
                    yScaleBars.domain(sortedStates);
                    
                    bars.transition()
                      .duration(600)
                      .delay(function(d,i) { return i * 4 })
                      .attr('y', function(d) { return yScaleBars(d.key); });
                    
                    //change axis text labels
                    d3.select('#yScaleBarsAxis').selectAll('text')
                      .text(function(d,i) { return stateToSt[sortedStates[i]]; });                  
                    
                     
                    innerRadio2.transition()
                      .duration(1500)
                      .ease(d3.easeElastic)
                      .attr('r', radioInnerR);
                    
                    innerRadio1.transition()
                      .duration(500)
                      .attr('r', 0);
                    }
                    
                    activeRadio = 2;
              });    
  
            var radioHeader1 = radioGroup.append('text')
              .attr('class','dropdownHeader')
              .html('Value')
              .attr('transform','translate(' + 7 + ',' + optionsPosFromTop + ')');
          
            var radioHeader2 = radioGroup.append('text')
              .attr('class','dropdownHeader')
              .html('State')
              .attr('transform','translate(' + 7 + ',' + (optionsPosFromTop + 24) + ')');
          
  
  
      
  
  
  
  
  
            //////// DROPDOWN CHANGES ///////
            categoriesDropdown
              .on("change", function(){
                selectedGroup = this.value;
              
                currentMin = d3.min(d3.map(nestedData).entries(), function(d) { return d.value[selectedYear][selectedGroup].primaryDisplayVar });
                currentMax = d3.max(d3.map(nestedData).entries(), function(d) { return d.value[selectedYear][selectedGroup].primaryDisplayVar });
                //console.log(colorRamp(currentMin), currentMax);
                highestAbsVal = Math.max(Math.abs(currentMin), Math.abs(currentMax));
        
                if (activeViz === 'statePropMap') {
                  colorRamp
                    .domain([Math.min(0, -highestAbsVal), 0, Math.max(0, highestAbsVal)]);
                } else if (activeViz === 'stateMinVsMajMap') {
                  colorRamp
                    .domain([0, 1, Math.max(1, currentMax)]); //[Math.min(1, currentMin), 1, Math.max(1, currentMax)]
                } else if (activeViz === 'stateRateMap') {
                  colorRamp
                    .domain([Math.min(0, currentMin), 0, Math.max(0, currentMax)]);
                } 
    
                xScaleBars.domain([Math.min(0, currentMin), Math.max(0, currentMax)]);
                d3.select(uniqueSvgIdNum).select('.xScaleBarsAxis')
                  .transition()
                  .duration(1500)
                  .call(xScaleBarsCall)
                .selectAll('text')
                  .attr('class','axisLabels')
                  .style('pointer-events','none');
  
                //ref lines move to new positions (set 0 opacity and come back; was blinky)
                d3.select(uniqueSvgIdNum).select('.xScaleBarsAxisRefLines')
                  .style('opacity',0);
  
                d3.select(uniqueSvgIdNum).select('.xScaleBarsAxisRefLines')
                  .call(xScaleBarsRefLinesCall)
                  .transition()
                  .duration(2700)
                  .style('opacity',1);
                
                updateBarsSortOnDrowpdown();
                catYearUpdate(); // also update the map that's hidden behind
            });
            
            yearsDropdown
              .on("change", function(){
                selectedYear = this.value;
              
                currentMin = d3.min(d3.map(nestedData).entries(), function(d) { return d.value[selectedYear][selectedGroup].primaryDisplayVar });
                currentMax = d3.max(d3.map(nestedData).entries(), function(d) { return d.value[selectedYear][selectedGroup].primaryDisplayVar });
                //console.log(colorRamp(currentMin), currentMax);
                highestAbsVal = Math.max(Math.abs(currentMin), Math.abs(currentMax));
  
                if (activeViz === 'statePropMap') {
                  colorRamp
                    .domain([Math.min(0, -highestAbsVal), 0, Math.max(0, highestAbsVal)]);
                } else if (activeViz === 'stateMinVsMajMap') {
                  colorRamp
                    .domain([0, 1, Math.max(1, currentMax)]); //[Math.min(1, currentMin), 1, Math.max(1, currentMax)]
                } else if (activeViz === 'stateRateMap') {
                  colorRamp
                    .domain([Math.min(0, currentMin), 0, Math.max(0, currentMax)]);
                }
    
                xScaleBars.domain([Math.min(0, currentMin), Math.max(0, currentMax)]);
                d3.select(uniqueSvgIdNum).select('.xScaleBarsAxis')
                  .transition()
                  .duration(2000)
                  .call(xScaleBarsCall)
                .selectAll('text')
                  .attr('class','axisLabels')
                  .style('pointer-events','none');
  
                //ref lines move to new positions (set 0 opacity and come back; was blinky)
                d3.select(uniqueSvgIdNum).select('.xScaleBarsAxisRefLines')
                  .style('opacity',0);
  
                d3.select(uniqueSvgIdNum).select('.xScaleBarsAxisRefLines')
                  .call(xScaleBarsRefLinesCall)
                  .transition()
                  .duration(2700)
                  .style('opacity',1);
                  
                updateBarsSortOnDrowpdown();
                catYearUpdate(); // also update the map that's hidden behind
              });
    
    
    
            
          } // end of draw bars
          
          function updateBarsSortOnDrowpdown(){
            
            /*--- old html radios version ---//
            if (d3.select('input[name="barsSort"]:checked').property("value") === "byValue") {
              //update states order and domain per current selected category and year
              nestedDataKV.sort(function(a, b) {
                 return d3.descending(a.value[selectedYear][selectedGroup].primaryDisplayVar,b.value[selectedYear][selectedGroup].primaryDisplayVar);
              });
            } else {
              nestedDataKV.sort(function(a, b) {
                 return d3.ascending(a.key,b.key);
              });
            }
            */
            if (activeRadio === 1) {
              //update states order and domain per current selected category and year
              nestedDataKV.sort(function(a, b) {
                 return d3.descending(a.value[selectedYear][selectedGroup].primaryDisplayVar,b.value[selectedYear][selectedGroup].primaryDisplayVar);
              });            
            } else if (activeRadio === 2) {
              nestedDataKV.sort(function(a, b) {
                 return d3.ascending(a.key,b.key);
              });            
            }
            
            var sortedStates = [];
            for (var i = 0; i < nestedDataKV.length; i ++) {
                sortedStates.push(nestedDataKV[i].key);
            }
            //console.log('current sort of states', sortedStates);
    
            yScaleBars.domain(sortedStates);
    
    
            //Transition the bars -- first to new length and color, then sorted (if by values)
            d3.select(uniqueSvgIdNum).selectAll('.bar')
              .transition().duration(1500)
                .attr('x', function(d) { return xScaleBars(Math.min(0,d.value[selectedYear][selectedGroup].primaryDisplayVar)); })
                .attr('width', function(d) { return Math.abs(xScaleBars(d.value[selectedYear][selectedGroup].primaryDisplayVar) - xScaleBars(0)); })
                .style('fill', function(d) { return colorRamp(d.value[selectedYear][selectedGroup].primaryDisplayVar); })        
              .transition()
                  .duration(800)
                  .delay(function(d,i) { return i * 4 })
                  .attr('y', function(d) { return yScaleBars(d.key); });
                  
            //change axis text labels
            d3.select(uniqueSvgIdNum).select('#yScaleBarsAxis').selectAll('text')
              .transition()
              .delay(2100)
              .text(function(d,i) { return stateToSt[sortedStates[i]]; });
    
            //WHY NOT WORKING TO HAVE AXIS ST LABELS SHIFT TO NEW SPOT?
            //d3.select('#yScaleBarsAxis').selectAll('text')
            //  .transition()
            //  .duration(1000)
            //  .attr('y',function(d) { return yScaleBars(d); });          
            
            
            //remove 'drag to scroll' text
            //d3.selectAll('.dragLabel').remove();
            
            //new axis labels format update
            d3.select(uniqueSvgIdNum).selectAll(".tick line")
              .attr("stroke", "#BEBEBE")
              .attr("stroke-dasharray", "2,2");
            
          }     
          
          
          
          
          ////////////////////////////////////////////////////
          /////////////// DRAW SCATTER PLOTS /////////////////
          ////////////////////////////////////////////////////
          //Switch to dots version
          function switchToDots() {
  
            activeSubPage = 'scatter';
  
            /////////// DIMENSIONS ///////////
            var bottomToAxisScatter = height * 0.17,
                offsetFromTopScatter = 170,
                heightAndWidth = Math.min(height - offsetFromTopScatter - bottomToAxisScatter, width*0.70),
                leftMarginScatter,
                rightMarginScatter;
                
                if (width > 600) {
                  leftMarginScatter = ((width - heightAndWidth)/2);
                  rightMarginScatter = ((width - heightAndWidth)/2);                
                } else if (width > 450) {
                  leftMarginScatter = ((width - heightAndWidth)/5)*3;
                  rightMarginScatter = ((width - heightAndWidth)/5)*2;
                } else {
                  leftMarginScatter = Math.max((width - heightAndWidth)*0.15, 75);
                  rightMarginScatter = Math.max((width - heightAndWidth)*0.15, 20);
                }
                
            var scatterWidth = width - leftMarginScatter - rightMarginScatter;
            
            /////////// SCALES ///////////
            
            //Get maxes and mins
            var currentMaxBottom, currentMaxLeft; 
  
            if (activeViz === 'statePropMap') {
              currentMaxBottom = d3.max(d3.map(nestedData).entries(), function(d) { return d.value[selectedYear][selectedGroup].pctPopulation });
              currentMaxLeft = d3.max(d3.map(nestedData).entries(), function(d) { return d.value[selectedYear][selectedGroup].pctHomeless });
  
            } else if (activeViz === 'stateRateMap') {
              currentMaxBottom = d3.max(d3.map(nestedData).entries(), function(d) { return d.value[selectedYear][selectedGroup].populationCount });
              currentMaxLeft = d3.max(d3.map(nestedData).entries(), function(d) { return d.value[selectedYear][selectedGroup].homelessCount }); 
   
            } else if (activeViz === 'stateMinVsMajMap') {
              currentMaxBottom = d3.max(d3.map(nestedData).entries(), function(d) { return d.value[selectedYear][selectedGroup].rateMaj });
              currentMaxLeft = d3.max(d3.map(nestedData).entries(), function(d) { return d.value[selectedYear][selectedGroup].rateMin });
  
            }
            
            // Set the ranges and domains
            var xScaleScatter = d3.scaleLinear()
              .range([leftMarginScatter, width - rightMarginScatter]);
            var yScaleScatter = d3.scaleLinear()
              .range([offsetFromTopScatter, height - bottomToAxisScatter]);
  
            var maxValueForBothAxes;
  
            if (activeViz === 'statePropMap') {
              //for the proportions scatter, want to lock both axes as the same since it's a 1 to 1 comparison
              maxValueForBothAxes = Math.max(currentMaxBottom, currentMaxLeft);
              
              xScaleScatter.domain([0, maxValueForBothAxes * 1.05]);
              yScaleScatter.domain([maxValueForBothAxes * 1.05, 0]);
  
            } else if (activeViz === 'stateRateMap') {
              xScaleScatter.domain([0, currentMaxBottom * 1.05]);
              yScaleScatter.domain([currentMaxLeft * 1.05, 0]); 
   
            } else if (activeViz === 'stateMinVsMajMap') {
              maxValueForBothAxes = Math.max(currentMaxBottom, currentMaxLeft);
  
              xScaleScatter.domain([0, maxValueForBothAxes * 1.05]);
              yScaleScatter.domain([maxValueForBothAxes * 1.05, 0]);
  
            }          
  
  
  
            ///////////// BACKGROUND COLOR PANEL ///////////////
            var scatterBackgroundPanel = svgChart.append('rect')
              .attr('width', width - leftMarginScatter - rightMarginScatter)
              .attr('height', height - offsetFromTopScatter - bottomToAxisScatter)
              .attr('id','scatterBackgroundPanel')
              .attr('class','vizToClear subPageChangeRemove')
              .attr('transform','translate(' + leftMarginScatter + ',' + offsetFromTopScatter + ')')
              .style('fill','#fcfcfc')   //url("#whiteGradient") //#616161
              ;
  
  
  
            ////////// DRAW AXES /////////
            var numberOfTicks;
            if (activeViz === 'statePropMap') {
              if (width > 415) { numberOfTicks = 10; } else { numberOfTicks = 5; }
            } else if (activeViz === 'stateRateMap') {
              if (width > 415) { numberOfTicks = 7; } else { numberOfTicks = 4; }
            } else if (activeViz === 'stateMinVsMajMap') {
              if (width > 415) { numberOfTicks = 10; } else { numberOfTicks = 5; }
            }
          
            var xAxisScatterG = svgChart.append('g')
              .attr('class','axis xAxis vizToClear subPageChangeRemove');
            
            var formatStyle;
            if (activeViz === 'statePropMap') {
              formatStyle = '.0%';
            } else if (activeViz === 'stateRateMap') {
              formatStyle = '.2s';
            } else if (activeViz === 'stateMinVsMajMap') {
              formatStyle = '.0f';
            }
            
            
            var xAxisScatter = xAxisScatterG.append('g')
              .attr('transform','translate(' + 0 + ',' + (height - bottomToAxisScatter) + ')')
              .attr('class','xAxisScatter')
              .call(d3.axisBottom(xScaleScatter)
                .tickSize(-(height - offsetFromTopScatter - bottomToAxisScatter))
                .ticks(numberOfTicks)
                .tickFormat(d3.format(formatStyle))
              );
  
  
            var yAxisScatterG = svgChart.append('g')
              .attr('class','axis xAxis vizToClear subPageChangeRemove');
            
            var yAxisScatter = yAxisScatterG.append('g')
              .attr('transform','translate(' + leftMarginScatter + ',' + 0 + ')')
              .attr('class','yAxisScatter')
              .call(d3.axisLeft(yScaleScatter)
                .tickSize(-scatterWidth)
                .ticks(numberOfTicks)
                .tickFormat(d3.format(formatStyle)));    
            
            //axis and reference line styling
            d3.select(uniqueSvgIdNum).selectAll('.tick').selectAll('text').attr('class','axisLabels');
            
            d3.select(uniqueSvgIdNum).selectAll('.axis').selectAll('path').style('opacity',0);
            
            d3.select(uniqueSvgIdNum).selectAll(".tick line")
              .attr("stroke", "#BEBEBE")
              .attr("stroke-dasharray", "2,2");
  
            
            var scatterWidth = width - leftMarginScatter - rightMarginScatter;
            var scatterHeight = height - offsetFromTopScatter - bottomToAxisScatter;
  
  
            ///////////// ZOOM AND PAN BACKGROUND PANEL AND FUNCTIONALITY ///////////////
            //G to contain the zoom rectangle sensor, the clip path, and any elements to show as zoomed or panned
            var vizApplySctrClip = div.slice(1) + 'ApplySctrClip',
                vizApplySctrClipNum = '#' + vizApplySctrClip;
            var sctrClipVizId = div.slice(1) + 'SctrClip',
                sctrClipVizIdNum = '#' + sctrClipVizId;

            var scatterZoomPanelG = svgChart.append('g')
              .attr('class', 'vizToClear subPageChangeRemove scatterZoomPanelG')
              .classed(vizApplySctrClip, true);
  
            var scatterZoomPanel = scatterZoomPanelG.append('rect')
              .attr('width', width - leftMarginScatter - rightMarginScatter)
              .attr('height', height - offsetFromTopScatter - bottomToAxisScatter)
              .attr('transform','translate(' + leftMarginScatter + ',' + offsetFromTopScatter + ')')
              .style('fill','#fcfcfc')
              .style('opacity',0)
              .attr('class','scatterZoomPanel')
              //.attr("pointer-events", "all")
              ;
  
            //Define clip path rectangle window so the zoom and functionality doesn't cover the screen

            
            scatterZoomPanelG.append("clipPath") 
                .attr("id", sctrClipVizId)
              .append("rect")
               // .attr('id','barsClipRect')
              .attr('width', scatterWidth + 7) // slight addition for dots on the edges
              .attr('height', scatterHeight + 7)
                .attr('x',leftMarginScatter - 7)
                .attr('y',offsetFromTopScatter)
                ;       
  
  
            //define the zoom behavior and call it on the rectangle sensor
            var scatterZoom = d3.zoom()
              .scaleExtent([1,5]) // too close started repeating the axis numbers (rounded)
              //.translateExtent([[width, 0], [0, height]])
              .on('zoom', function() { 
                //console.log(d3.event.transform);
                d3.select(uniqueSvgIdNum).select('.scatterZoomPanelG').selectAll('circle').attr('transform', d3.event.transform);
                
                if (activeViz === 'statePropMap') {
                  noDiffLine.attr('transform', d3.event.transform);
                } else if (activeViz === 'stateMinVsMajMap') {
                  noDiffLine.attr('transform', d3.event.transform);
                }
    
    
                //the axes aren't appended to the zoom panel G, but are updated with .rescaleX and .rescaleY. See https://bl.ocks.org/mbostock/db6b4335bf1662b413e7968910104f0f
                //In short, re-call the axes as usual, but for example, with y being the defined scale, add: .scale(d3.event.transform.rescaleY(y));
                xAxisScatter.call(d3.axisBottom(xScaleScatter)
                  .tickSize(-(height - offsetFromTopScatter - bottomToAxisScatter))
                  .ticks(numberOfTicks)
                  .tickFormat(d3.format(formatStyle))
                  .scale(d3.event.transform.rescaleX(xScaleScatter)));
                yAxisScatter.call(d3.axisLeft(yScaleScatter)
                  .tickSize(-scatterWidth)
                  .ticks(numberOfTicks)
                  .tickFormat(d3.format(formatStyle))
                  .scale(d3.event.transform.rescaleY(yScaleScatter)));
            
                //update the axis & reference line formatting for newly created lines
                d3.select(uniqueSvgIdNum).selectAll('.tick').selectAll('text').attr('class','axisLabels');
                
                d3.select(uniqueSvgIdNum).selectAll('.axis').selectAll('path').style('opacity',0);
                
                d3.select(uniqueSvgIdNum).selectAll(".tick line")
                  .attr("stroke", "#BEBEBE")
                  .attr("stroke-dasharray", "2,2");
  
  
                //keep circle size and no difference line the same
                //console.log(d3.zoomTransform(this));  //this is the transformation position: k scale, x position, y position
                d3.select(uniqueSvgIdNum).select('.scatterZoomPanelG').selectAll('circle')
                  .attr('r', 5/d3.zoomTransform(this).k)
                  .attr('stroke-width', 1/d3.zoomTransform.k)
                  ;
                
                //d3.selectAll('.noDiffLine')
                //  //.style('stroke-dasharray',('3,3'))
                //  //.style('stroke','gray')
                //  .attr('stroke-width', 1/d3.zoomTransform.k);
              });
  
  
            //indicate which sensor area should trigger the call
            // !!!!!! scatterZoomPanel (the rect) that gives this shape did not work right...
            // It zoomed in always to the wrong place. WHY?? scatterZoomPanelG works, however.
            // Note that in the scatter update and reset functions this also had to be updated to the G rather than the rect.
            scatterZoomPanelG.call(scatterZoom)
              .on("touchstart.zoom", null)
              .on("touchmove.zoom", null)
              .on("touchend.zoom", null)
              .on("wheel.zoom", null);
            
  
  
            ////////// AXIS LABELS /////////
            
            var xLabel, yLabel;
            if (activeViz === 'statePropMap') {
              xLabel = 'Percent of population';
              yLabel = 'Percent of homeless';
            } else if (activeViz === 'stateRateMap') {
              xLabel = 'Total population';
              yLabel = 'Total homeless';
            } else if (activeViz === 'stateMinVsMajMap') {
              xLabel = 'Rate for ' + minVsMajSliced[selectedGroup].majority;
              yLabel = 'Rate for ' + minVsMajSliced[selectedGroup].minority;
            }
            var xAxisScatterLabel = svgChart.append('text')
              .attr('class','heavyChartHeader vizToClear subPageChangeRemove')
              .attr('transform','translate(' + (leftMarginScatter + (heightAndWidth/2)) + ',' +  (height - bottomToAxisScatter + 40) + ')')
              .text(xLabel);       
              
            var yAxisScatterLabel = svgChart.append('text')
              .attr('class','heavyChartHeader vizToClear subPageChangeRemove')
              .attr('transform','translate(' + (leftMarginScatter - 50) + ',' +  (offsetFromTopScatter + (height - offsetFromTopScatter - bottomToAxisScatter)/2) + ') rotate(-90)')
              .text(yLabel);
  
  
            ////////// COLOR RAMP //////////
            currentMin = d3.min(d3.map(nestedData).entries(), function(d) { return d.value[selectedYear][selectedGroup].primaryDisplayVar });
            currentMax = d3.max(d3.map(nestedData).entries(), function(d) { return d.value[selectedYear][selectedGroup].primaryDisplayVar });
            //console.log(colorRamp(currentMin), currentMax);
            highestAbsVal = Math.max(Math.abs(currentMin), Math.abs(currentMax));
  
            if (activeViz === 'statePropMap') {
              colorRamp
                .domain([Math.min(0, -highestAbsVal), 0, Math.max(0, highestAbsVal)]);
            } else if (activeViz === 'stateMinVsMajMap') {
              colorRamp
                .domain([0, 1, Math.max(1, currentMax)]); //[Math.min(1, currentMin), 1, Math.max(1, currentMax)]
            } else if (activeViz === 'stateRateMap') {
              colorRamp
                .domain([Math.min(0, currentMin), 0, Math.max(0, currentMax)]);
            }
  
  
            ///////// NO DIFFERENCE LINE ////////
            //var noDiffLineG = svgChart.append('g')
            //  .attr('class','noDiffLine vizToClear subPageChangeRemove');
           
            var noDiffLine;
            if (activeViz === 'statePropMap') {
              noDiffLine = scatterZoomPanelG.append('line')  //to be affected by zoom
                .attr('class','noDiffLine vizToClear subPageChangeRemove')
                .style('stroke-dasharray',('3,3'))
                .attr('x1', xScaleScatter(0))
                .attr('x2', xScaleScatter(maxValueForBothAxes * 1.05))
                .attr('y1', yScaleScatter(0))
                .attr('y2', yScaleScatter(maxValueForBothAxes * 1.05));
            } else if (activeViz === 'stateMinVsMajMap') {
              noDiffLine = scatterZoomPanelG.append('line')  //to be affected by zoom
                .attr('class','noDiffLine vizToClear subPageChangeRemove')
                .style('stroke-dasharray',('3,3'))
                .attr('x1', xScaleScatter(0))
                .attr('x2', xScaleScatter(maxValueForBothAxes * 1.05))
                .attr('y1', yScaleScatter(0))
                .attr('y2', yScaleScatter(maxValueForBothAxes * 1.05));
            }      
        
  
  
  
            //////////// DRAW DOTS ///////////
            //var dotsG = svgChart.append('g')
            //  .attr('class','dotsG vizToClear subPageChangeRemove');
            
            var dots = scatterZoomPanelG.selectAll('circle') //append to the zoom G
              .data(nestedDataKV)
              .enter()
              .append('circle')
              .attr('class','circle')
              .attr('r',5)
              .attr('cx',function(d) {
                if (activeViz === 'statePropMap') {
                  return xScaleScatter(d.value[selectedYear][selectedGroup].pctPopulation);
                } else if (activeViz === 'stateRateMap') {
                  return xScaleScatter(d.value[selectedYear][selectedGroup].populationCount);
                } else if (activeViz === 'stateMinVsMajMap') {
                  return xScaleScatter(d.value[selectedYear][selectedGroup].rateMaj);
                }
              })
              .attr('cy',-10)
              .attr('stroke','#404040')
              .attr('stroke-width', 1)
              .attr('fill', function(d) { return colorRamp(d.value[selectedYear][selectedGroup].primaryDisplayVar)})
              .on("mouseover", function(d,i) {
                d3.select("#tooltip").selectAll(".tipSpan").text(null).classed('tipSpanOff', true).classed('tooltipBold', false).classed('tooltipItalic', false).style('color','white');
                d3.select('#tooltip').classed('lineTooltip',false);

                //get mouse X position
                var xPosition = d3.mouse(chartDiv.node())[0];
      
                //Update the tooltip position and value
                if (xPosition < width/2) {
                d3.select("#tooltip")
                  .style("top", (d3.event.pageY + tooltipYOffset)+"px")
                  .style("left", (d3.event.pageX + tooltipXOffset.right)+"px");
                } else {
                d3.select("#tooltip")
                  .style("top", (d3.event.pageY + tooltipYOffset)+"px")
                  .style("left", (d3.event.pageX + tooltipXOffset.left)+"px");            
                }
                
                //update the contents
                if (activeViz === 'statePropMap') {
                  d3.select('#tooltip').select('#header')
                    .classed('tipSpanOff', false)
                    .text(d.key);
                  
                  d3.select("#tooltip").select("#p1span1")
                    .classed('tipSpanOff', false)
                    .classed('tooltipBold', true)
                    .text(d3.format(".1%")(Math.abs(d.value[selectedYear][selectedGroup].primaryDisplayVar)));
       
                  var higherLower = '';
                  if (d.value[selectedYear][selectedGroup].pctHomeless > d.value[selectedYear][selectedGroup].pctPopulation) { 
                    higherLower = 'HIGHER';
                  } else if (d.value[selectedYear][selectedGroup].pctPopulation > d.value[selectedYear][selectedGroup].pctHomeless) {
                    higherLower = 'LOWER';
                  }
                         
                  d3.select("#tooltip").select("#p1span2")
                    .classed('tipSpanOff', false)
                    .text(' percentage points ' + higherLower);
        
                  d3.select("#tooltip").select("#p2span1")
                    .classed('tipSpanOff', false)
                    .classed('tooltipItalic', true)
                    .text(d3.format(".1%")(d.value[selectedYear][selectedGroup].pctHomeless) + ' of homeless vs. ' + d3.format(".1%")(d.value[selectedYear][selectedGroup].pctPopulation) + ' of population');
      
                } else if (activeViz === 'stateRateMap') {
                  d3.select('#tooltip').select('#header')
                    .classed('tipSpanOff', false)
                    .text(d.key);
                  
                  d3.select("#tooltip").select("#p1span1")
                    .classed('tipSpanOff', false)
                    .classed('tooltipBold', true)
                    .text(d3.format(".1f")(Math.abs(d.value[selectedYear][selectedGroup].primaryDisplayVar)));
       
                  d3.select("#tooltip").select("#p1span2")
                    .classed('tipSpanOff', false)
                    .text(' in 10,000');
        
                  d3.select("#tooltip").select("#p2span1")
                    .classed('tipSpanOff', false)
                    .classed('tooltipItalic', true)
                    .text(d3.format(",")(d.value[selectedYear][selectedGroup].homelessCount) + ' homeless in ' + d3.format(",")(d.value[selectedYear][selectedGroup].populationCount) + ' population');
  
                } else if (activeViz === 'stateMinVsMajMap') {
                  d3.select('#tooltip').select('#header')
                    .classed('tipSpanOff', false)
                    .text(d.key);
                  
                  d3.select("#tooltip").select("#p1span1")
                    .classed('tipSpanOff', false)
                    .classed('tooltipBold', true)
                    .text(d3.format(".1f")(Math.abs(d.value[selectedYear][selectedGroup].primaryDisplayVar)));
      
                  d3.select("#tooltip").select("#p1span2")
                    .classed('tipSpanOff', false)
                    .text('times the rate for ' + minVsMajSliced[selectedGroup].minority + ' compared to ' + minVsMajSliced[selectedGroup].majority);
        
                  d3.select("#tooltip").select("#p2span1")
                    .classed('tipSpanOff', false)
                    .classed('tooltipItalic', true)
                    .text(minVsMajSliced[selectedGroup].minority + ': ' + d3.format(",")(d.value[selectedYear][selectedGroup].rateMin) + ' in 10,000; ' + minVsMajSliced[selectedGroup].majority + ': ' + d3.format(",")(d.value[selectedYear][selectedGroup].rateMaj) + ' in 10,000');
                }
                
                
                //Show the tooltip
                d3.select("#tooltip").classed("hidden", false);
              }) 
              .on('mouseout', function(d) {
                d3.select("#tooltip").classed("hidden", true);
              })              
              ;
       
         
            /////// TRANSITION IN //////////
            dots.transition()
            .duration(1000)
            .delay(function(d,i) { return i * 20})
            .attr('cy',function(d) { 
              if (activeViz === 'statePropMap') {
                return yScaleScatter(d.value[selectedYear][selectedGroup].pctHomeless);
              } else if (activeViz === 'stateRateMap') {
                return yScaleScatter(d.value[selectedYear][selectedGroup].homelessCount);
              } else if (activeViz === 'stateMinVsMajMap') {
                return yScaleScatter(d.value[selectedYear][selectedGroup].rateMin);
              }
            });
            
           
           
  
          /////// PAN AND ZOOM RESET ////////
          svgChart.append('g') //Label to click in top area to reset zoom
            .attr('class','resetText resetTextScatter vizToClear subPageChangeRemove');
          
          if (width > 500) {
            d3.select(uniqueSvgIdNum).selectAll('.resetTextScatter')
              .append('text')
                .attr('transform','translate(' + (width - rightMargin) + ',' + (optionsPosFromTop - 20) + ')')
                .text('Reset pan/zoom')
                .on('click', resetZoomScatter);
          } else {
            d3.select(uniqueSvgIdNum).selectAll('.resetTextScatter')
              .append('text')
                .attr('transform','translate(' + (width - rightMargin) + ',' + (optionsPosFromTop + 40) + ')')
                .text('Reset pan/zoom')
                .on('click', resetZoomScatter);          
          }
  
          function resetZoomScatter() {
            scatterZoomPanelG
              .transition()
              .duration(750)
              .call(scatterZoom.transform, d3.zoomIdentity); //see https://github.com/d3/d3-zoom/issues/107
          }
  
  
           
           
            ////////////// ON SCATTER DROPDOWN CHANGE ////////////
            function updateScatter() {
              //// RESET ZOOM IF ZOOMED OR PANNED ////
              resetZoomScatter();
              
              
              ///// UPDATE AXIS LABELS /////
              if (activeViz === 'stateMinVsMajMap') {
                xLabel = 'Rate for ' + minVsMajSliced[selectedGroup].majority;
                yLabel = 'Rate for ' + minVsMajSliced[selectedGroup].minority;
              
                xAxisScatterLabel.text(xLabel);
                yAxisScatterLabel.text(yLabel);
              }
              
  
              //// UPDATE COLOR RAMP ///////         
              currentMin = d3.min(d3.map(nestedData).entries(), function(d) { return d.value[selectedYear][selectedGroup].primaryDisplayVar });
              currentMax = d3.max(d3.map(nestedData).entries(), function(d) { return d.value[selectedYear][selectedGroup].primaryDisplayVar });
              //console.log(colorRamp(currentMin), currentMax);
              highestAbsVal = Math.max(Math.abs(currentMin), Math.abs(currentMax));
    
              if (activeViz === 'statePropMap') {
                colorRamp
                  .domain([Math.min(0, -highestAbsVal), 0, Math.max(0, highestAbsVal)]);
              } else if (activeViz === 'stateMinVsMajMap') {
                colorRamp
                  .domain([0, 1, Math.max(1, currentMax)]); //[Math.min(1, currentMin), 1, Math.max(1, currentMax)]
              } else if (activeViz === 'stateRateMap') {
                colorRamp
                  .domain([Math.min(0, currentMin), 0, Math.max(0, currentMax)]);
              }
              
              
              ///// UPDATE DIMENSIONS AND AXES /////
              if (activeViz === 'statePropMap') {
                currentMaxBottom = d3.max(d3.map(nestedData).entries(), function(d) { return d.value[selectedYear][selectedGroup].pctPopulation });
                currentMaxLeft = d3.max(d3.map(nestedData).entries(), function(d) { return d.value[selectedYear][selectedGroup].pctHomeless });
    
              } else if (activeViz === 'stateRateMap') {
                currentMaxBottom = d3.max(d3.map(nestedData).entries(), function(d) { return d.value[selectedYear][selectedGroup].populationCount });
                currentMaxLeft = d3.max(d3.map(nestedData).entries(), function(d) { return d.value[selectedYear][selectedGroup].homelessCount }); 
     
              } else if (activeViz === 'stateMinVsMajMap') {
                currentMaxBottom = d3.max(d3.map(nestedData).entries(), function(d) { return d.value[selectedYear][selectedGroup].rateMaj });
                currentMaxLeft = d3.max(d3.map(nestedData).entries(), function(d) { return d.value[selectedYear][selectedGroup].rateMin });
    
              }
              
  
              if (activeViz === 'statePropMap') {
                //for the proportions scatter, want to lock both axes as the same since it's a 1 to 1 comparison
                maxValueForBothAxes = Math.max(currentMaxBottom, currentMaxLeft);
                
                xScaleScatter.domain([0, maxValueForBothAxes * 1.05]);
                yScaleScatter.domain([maxValueForBothAxes * 1.05, 0]);
    
              } else if (activeViz === 'stateRateMap') {
                xScaleScatter.domain([0, currentMaxBottom * 1.05]);
                yScaleScatter.domain([currentMaxLeft * 1.05, 0]); 
     
              } else if (activeViz === 'stateMinVsMajMap') {
                maxValueForBothAxes = Math.max(currentMaxBottom, currentMaxLeft);
    
                xScaleScatter.domain([0, maxValueForBothAxes * 1.05]);
                yScaleScatter.domain([maxValueForBothAxes * 1.05, 0]);
    
              }     
  
  
              ///// HOW MANY TICKS /////
              if (activeViz === 'statePropMap') {
                if (width > 415) { numberOfTicks = 10; } else { numberOfTicks = 5; }
              } else if (activeViz === 'stateRateMap') {
                if (width > 415) { numberOfTicks = 7; } else { numberOfTicks = 4; }
              } else if (activeViz === 'stateMinVsMajMap') {
                if (width > 415) { numberOfTicks = 10; } else { numberOfTicks = 5; }
              }
  
              ///// RE-CALL AXES /////
              d3.select(uniqueSvgIdNum).select('.xAxisScatter')
                .transition()
                .duration(1500)
                .call(d3.axisBottom(xScaleScatter)
                .tickSize(-(height - offsetFromTopScatter - bottomToAxisScatter))
                .ticks(numberOfTicks)
                .tickFormat(d3.format(formatStyle)));           
              
              d3.select(uniqueSvgIdNum).select('.yAxisScatter')
                .transition()
                .duration(1500)
                .call(d3.axisLeft(yScaleScatter)
                .tickSize(-scatterWidth)
                .ticks(numberOfTicks)
                .tickFormat(d3.format(formatStyle)));            
  
              //axis and reference line styling
              d3.select(uniqueSvgIdNum).selectAll('.tick').selectAll('text').attr('class','axisLabels');
              
              d3.select(uniqueSvgIdNum).selectAll('.axis').selectAll('path').style('opacity',0);
              
              d3.select(uniqueSvgIdNum).selectAll(".tick line")
                .attr("stroke", "#BEBEBE")
                .attr("stroke-dasharray", "2,2");
  
              
              ///////// UPDATE DOTS //////////
              dots.transition()
                .duration(1500)
                .attr('cx',function(d) { 
                  if (activeViz === 'statePropMap') {
                    return xScaleScatter(d.value[selectedYear][selectedGroup].pctPopulation);
                  } else if (activeViz === 'stateRateMap') {
                    return xScaleScatter(d.value[selectedYear][selectedGroup].populationCount);
                  } else if (activeViz === 'stateMinVsMajMap') {
                    return xScaleScatter(d.value[selectedYear][selectedGroup].rateMaj);
                  }
                })
                .attr('cy',function(d) {
                  if (activeViz === 'statePropMap') {
                    return yScaleScatter(d.value[selectedYear][selectedGroup].pctHomeless);
                  } else if (activeViz === 'stateRateMap') {
                    return yScaleScatter(d.value[selectedYear][selectedGroup].homelessCount);
                  } else if (activeViz === 'stateMinVsMajMap') {
                    return yScaleScatter(d.value[selectedYear][selectedGroup].rateMin);
                  }
                })
                .attr('fill', function(d) { return colorRamp(d.value[selectedYear][selectedGroup].primaryDisplayVar)});          
            
            } //end of scatter update function
            
          
            /////////// CALL SCATTER DROPDOWN CHANGE FUNCTION ON YEARS AND CATEGORIES DROPDOWNS //////////
            categoriesDropdown
              .on("change", function(){
                selectedGroup = this.value;
                updateScatter();
                catYearUpdate(); // also update the map that's hidden behind
              });     
              
             yearsDropdown
              .on("change", function(){
                selectedYear = this.value;
                updateScatter();
                catYearUpdate(); // also update the map that's hidden behind
              });      
            
          } //end of draw scatter plot
    
    
    
    
    
          ////////////////////////////////////////////////////////////////
          /////////////// MAP DROPDOWN SELECTION CHANGES /////////////////

          function catYearUpdate() {
            selectedGroup = document.getElementById('categories' + div.slice(1)).value;
            selectedYear = document.getElementById('years' + div.slice(1)).value;


            currentMin = d3.min(d3.map(nestedData).entries(), function(d) { return d.value[selectedYear][selectedGroup].primaryDisplayVar });
            currentMax = d3.max(d3.map(nestedData).entries(), function(d) { return d.value[selectedYear][selectedGroup].primaryDisplayVar });
            //console.log(colorRamp(currentMin), currentMax);
            highestAbsVal = Math.max(Math.abs(currentMin), Math.abs(currentMax));

            if (activeViz === 'statePropMap') {
              colorRamp
                .domain([Math.min(0, -highestAbsVal), 0, Math.max(0, highestAbsVal)]);
            } else if (activeViz === 'stateMinVsMajMap') {
              colorRamp
                .domain([0, 1, Math.max(1, currentMax)]); //[Math.min(1, currentMin), 1, Math.max(1, currentMax)]
            } else if (activeViz === 'stateRateMap') {
              colorRamp
                .domain([Math.min(0, currentMin), 0, Math.max(0, currentMax)]);
            }
            //map
            colorTheMap();

            //update color key
            colorRampEndToEnd = currentMax - currentMin;
            
            gradientOffsetZero = ((0 - Math.min(currentMin, 0)) / colorRampEndToEnd);
            
            if (currentMin < 1) {
              gradientOffsetOne = ((1 - currentMin)  / colorRampEndToEnd);
            } else {
              gradientOffsetOne = 0;
            }
    
            if (activeViz === 'statePropMap') {
              d3.select(uniqueGradientSt1Num)
                .transition()
                .duration(colorKeyColorDuration)
                .attr('offset','0%')
                .attr('stop-color',colorRamp(currentMax));
              d3.select(uniqueGradientSt2Num)
                .transition()
                .duration(colorKeyColorDuration)
                .attr('offset', 100 - (gradientOffsetZero*100) + '%')
                .attr('stop-color', colorRamp(0));
              d3.select(uniqueGradientSt3Num)
                .transition()
                .duration(colorKeyColorDuration)
                .attr('offset','100%')
                .attr('stop-color',colorRamp(currentMin));
            } else if (activeViz === 'stateRateMap') {
              d3.select(uniqueGradientSt1Num)
                .transition()
                .duration(colorKeyColorDuration)
                .attr('offset','0%')
                .attr('stop-color',colorRamp(currentMax));
              d3.select(uniqueGradientSt2Num)
                .transition()
                .duration(colorKeyColorDuration)
                .attr('offset', '100%') //not necessary for state rate map; always lowest value is 0.
                .attr('stop-color', colorRamp(0));
              d3.select(uniqueGradientSt3Num)
                .transition()
                .duration(colorKeyColorDuration)
                .attr('offset','100%')
                .attr('stop-color',colorRamp(0));
            } else if (activeViz === 'stateMinVsMajMap') {
              d3.select(uniqueGradientSt1Num)
                .transition()
                .duration(colorKeyColorDuration)
                .attr('offset','0%')
                .attr('stop-color',colorRamp(currentMax));
              d3.select(uniqueGradientSt2Num)
                .transition()
                .duration(colorKeyColorDuration)
                .attr('offset', 100 - (gradientOffsetOne*100) + '%') // 100 - (gradientOffsetOne*100) + '
                .attr('stop-color', colorRamp(1));
              d3.select(uniqueGradientSt3Num)
                .transition()
                .duration(colorKeyColorDuration)
                .attr('offset','100%')
                .attr('stop-color',colorRamp(Math.min(currentMin, 1)));
            }
          
          
  
            colorKeyRect
              .style('fill', uniqueFillValue);
  
  
            if (activeViz !== 'stateMinVsMajMap') {
              colorKeyScale
                .domain([Math.min(0, currentMin), Math.max(0, currentMax)]);
            } else if (activeViz === 'stateMinVsMajMap') {
              colorKeyScale
                .domain([Math.min(1, currentMin), Math.max(1, currentMax)]);
            }
  
  
            //////// COLOR KEY TEXT LABELS /////////
            colorKeyAxisCall = d3.axisLeft(colorKeyScale)
                .tickSize(-(colorKeyWidth))
                .ticks();
            
            // If the center (1 or 0) is not too close to the end (to avoid overlap), display it and the two endpoints. Otherwise, display the end points and the point at 1/3 and 2/3 along the way.
            if (activeViz === 'statePropMap') {
                colorKeyAxisCall.tickFormat(d3.format(".0%"));
                if (gradientOffsetZero < 0.1 || gradientOffsetZero > 0.9) {
                  if (currentMax <= 0) {
                    colorKeyAxisCall.tickValues([Math.min(0, currentMin), -(Math.max(0, currentMax)-Math.min(0, currentMin))/3, -((Math.max(0, currentMax)-Math.min(0, currentMin))/3)*2,  Math.max(0, currentMax)]);
                  } else {
                  colorKeyAxisCall.tickValues([Math.min(0, currentMin), ((Math.max(0, currentMax)-Math.min(0, currentMin))/3)-(0-currentMin), (((Math.max(0, currentMax)-Math.min(0, currentMin))/3)*2)-(0-currentMin),  Math.max(0, currentMax)]);
                  }
                } else {
                  colorKeyAxisCall.tickValues([currentMin, 0, currentMax]);
                }    
            } else if (activeViz === 'stateRateMap') {
                colorKeyAxisCall.tickFormat(d3.format(".1f"));
                colorKeyAxisCall.tickValues([0, Math.round(currentMax / 3), Math.round((currentMax/3)*2), currentMax]);
            } else if (activeViz === 'stateMinVsMajMap') {
                colorKeyAxisCall.tickFormat(d3.format(".1f"));
                if (gradientOffsetOne < 0.1 || gradientOffsetOne > 0.9) {
                  colorKeyAxisCall.tickValues([Math.min(1, currentMin), Math.round((Math.max(1, currentMax)-Math.min(1, currentMin))/3), Math.round(((Math.max(1, currentMax)-Math.min(1, currentMin))/3)*2),  Math.max(1, currentMax)]);
                } else {
                  colorKeyAxisCall.tickValues([currentMin, 1, currentMax]);
                }  
            }
          
            //Transition labels to new position
            d3.select(uniqueSvgIdNum).select('.colorKeyAxis')
              .transition()
              .duration(colorKeyLabelDuration)
              .call(colorKeyAxisCall);
  
            //Color key axis label styling
            d3.select(uniqueSvgIdNum).select('#colorKeyG').selectAll('.tick').selectAll('text').attr('class','axisLabels');
            
            d3.select(uniqueSvgIdNum).selectAll('.colorKeyAxis').selectAll('path').style('opacity',0);
            
            d3.select(uniqueSvgIdNum).select('#colorKeyG').selectAll(".tick line")
              .attr("stroke", "#4d4d4d")
              .attr('stroke-width', 2)
              .attr("stroke-dasharray", "2,2");           
          }
             
             
              
          categoriesDropdown
            .on("change", catYearUpdate);
            
          yearsDropdown
            .on("change", catYearUpdate); 
            
        });
      });
    
    
    
    
    } //end of readTheData function
  
  
  
  
    if (activeViz === 'statePropMap') {
      readTheData('../../../yml_to_csv/raceVizStatesProportions.csv'); 
    } else if (activeViz === 'stateRateMap') {
      readTheData('../../../yml_to_csv/raceVizStatesRates.csv'); 
    } else if (activeViz === 'stateMinVsMajMap') {
      readTheData('../../../yml_to_csv/raceVizStatesRatesMajVsMin.csv'); 
    } else if (activeViz === 'stateOtherCompsMap') {
      return;
    }


    function drawSubPageElements() {
    
      /////////////// DROPDOWN LABELS //////////////////
      var selectGroupLabel = svgChart.append('g')
        .attr('class', 'dropdownHeader vizToClear')
        .attr('transform','translate(' + (width - rightMargin - 65) + ',' + (optionsPosFromTop) + ')')
        .append('text')
          .attr('text-anchor','end')
          .text('Demographic');
    
      var selectYearLabel = svgChart.append('g')
        .attr('class', 'dropdownHeader vizToClear')
        .attr('transform','translate(' + (width - rightMargin) + ',' + (optionsPosFromTop) + ')')
        .append('text')
          .attr('text-anchor','end')
          .text('Year');
    
    
    
      /////////////// BEZIER CURVE AND ICONS AT BOTTOM ///////////////////
      var bezierLineGenerator = d3.line()
        .x(function(d) { return d[0]; })  //the scope of this d (individuals elements) is based on the data bind and then what's fed into the line generator function below
        .y(function(d) { return d[1]; })
        .curve(d3.curveCardinal); //see http://bl.ocks.org/emmasaunders/c25a147970def2b02d8c7c2719dc7502
    
      var bezierG = svgChart.append('g')
          .attr('class','bezierLineArea vizToClear')
          .attr('transform','translate(' + 0 + ',' + height + ')');
      
      var bezierLine = bezierG.append('path')
          .attr('d', bezierLineGenerator([[0, 0], [(width * 0.1),(-bezierLineHeight/8)], [(width/2), -bezierLineHeight],[(width-(width * 0.1)),(-bezierLineHeight/8)], [width, 0]]))
          .attr("stroke", "gray")
          .attr("stroke-width", 2)
          .attr("fill", "none");  
    
      var bezierLine2 = bezierG.append('path')
          .attr('d', bezierLineGenerator([[0, 0], [(width * 0.1),(-bezierLineHeight/8)], [(width/2), -bezierLineHeight],[(width-(width * 0.1)),(-bezierLineHeight/8)], [width, 0]]))
          .attr("stroke", "gray")
          .attr("stroke-width", 2)
          .attr("fill", "none"); 
    
      //animate the line from left to right
      var totalLength = bezierLine.node().getTotalLength();
    
      bezierLine
        .attr("stroke-dasharray", totalLength + " " + totalLength)
        .attr("stroke-dashoffset", totalLength) //negative for drawing left to right, positive for right to left
        .transition()
          .duration(5000) //random number between x and y. From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
          .ease(d3.easeCubicOut) //see here for various ease (rate smoothing) options: https://github.com/d3/d3-ease; https://bl.ocks.org/d3noob/1ea51d03775b9650e8dfd03474e202fe
          .attr("stroke-dashoffset", 0)
          .attr('fill','#f9f9f9');
    
      bezierLine2
        .attr("stroke-dasharray", totalLength + " " + totalLength)
        .attr("stroke-dashoffset", -totalLength) //negative for drawing left to right, positive for right to left
        .transition()
          .duration(5000) //random number between x and y. From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
          .ease(d3.easeCubicOut) //see here for various ease (rate smoothing) options: https://github.com/d3/d3-ease; https://bl.ocks.org/d3noob/1ea51d03775b9650e8dfd03474e202fe
          .attr("stroke-dashoffset", 0);
    
      dotsIconRect = svgChart.append('g') //this will trigger the click, not the individual dots
        .attr('id','dotsIconRect')
        .attr('class', 'vizToClear')
        .attr('transform','translate(' + (width/2+40) + ',' + (height-35) + ')')
        .attr('cursor','pointer')
        .append('rect')
          .attr('height', 35)
          .attr('width', 40)
          .attr('opacity',0);  
      
    } // end of drawSubPageElements function
  } //end of drawMap function      
      
      
      
      
      
      
      
      
      
      
      
  // Which of the above functions to draw ?
  switch (activeViz) {
    case 'ntnlProportions':
      drawNtnlProportions();
      break;
    case 'ntnlPropLines':
      drawNtnlPropLines();
      break;
    case 'ntnlPropLinesComp':
      drawNtnlPropLines();
      break;
    case 'statePropMap':
      drawMap();
      break;
    case 'rateBars':
      drawRateBars();
      break;
    case 'shelPies':
      drawShelPies();
      break;
    case 'shelBars':
      drawShelBars();
      break;
    case 'stateRateMap':
      drawMap();
      break; 
    case 'stateMinVsMajMap':
      drawMap();
      break; 
    case 'ntnlLocation':
      drawNtnlLocation();
      break;
    }      
      
}




///////////////////////////////////////////////////////////////////////
//////////////// MODIFIED ALBERS WITH PUERTO RICO /////////////////////
///////////////////////////////////////////////////////////////////////

//from https://bl.ocks.org/Fil/7723167596af40d9159be34ffbf8d36b
//A modified d3.geoAlbersUsa to include Puerto Rico.
function albersUsaPr() {
  var ε = 1e-6;

  var lower48 = d3.geoAlbers();

  // EPSG:3338
  var alaska = d3.geoConicEqualArea()
      .rotate([154, 0])
      .center([-2, 58.5])
      .parallels([55, 65]);

  // ESRI:102007
  var hawaii = d3.geoConicEqualArea()
      .rotate([157, 0])
      .center([-3, 19.9])
      .parallels([8, 18]);

  // XXX? You should check that this is a standard PR projection!
  var puertoRico = d3.geoConicEqualArea()
      .rotate([66, 0])
      .center([0, 18])
      .parallels([8, 18]);

  var point,
      pointStream = {point: function(x, y) { point = [x, y]; }},
      lower48Point,
      alaskaPoint,
      hawaiiPoint,
      puertoRicoPoint;

  function albersUsa(coordinates) {
    var x = coordinates[0], y = coordinates[1];
    point = null;
    (lower48Point(x, y), point)
        || (alaskaPoint(x, y), point)
        || (hawaiiPoint(x, y), point)
        || (puertoRicoPoint(x, y), point);
    return point;
  }

  albersUsa.invert = function(coordinates) {
    var k = lower48.scale(),
        t = lower48.translate(),
        x = (coordinates[0] - t[0]) / k,
        y = (coordinates[1] - t[1]) / k;
    return (y >= 0.120 && y < 0.234 && x >= -0.425 && x < -0.214 ? alaska
        : y >= 0.166 && y < 0.234 && x >= -0.214 && x < -0.115 ? hawaii
        : y >= 0.204 && y < 0.234 && x >= 0.320 && x < 0.380 ? puertoRico
        : lower48).invert(coordinates);
  };

  // A naïve multi-projection stream.
  // The projections must have mutually exclusive clip regions on the sphere,
  // as this will avoid emitting interleaving lines and polygons.
  albersUsa.stream = function(stream) {
    var lower48Stream = lower48.stream(stream),
        alaskaStream = alaska.stream(stream),
        hawaiiStream = hawaii.stream(stream),
        puertoRicoStream = puertoRico.stream(stream);
    return {
      point: function(x, y) {
        lower48Stream.point(x, y);
        alaskaStream.point(x, y);
        hawaiiStream.point(x, y);
        puertoRicoStream.point(x, y);
      },
      sphere: function() {
        lower48Stream.sphere();
        alaskaStream.sphere();
        hawaiiStream.sphere();
        puertoRicoStream.sphere();
      },
      lineStart: function() {
        lower48Stream.lineStart();
        alaskaStream.lineStart();
        hawaiiStream.lineStart();
        puertoRicoStream.lineStart();
      },
      lineEnd: function() {
        lower48Stream.lineEnd();
        alaskaStream.lineEnd();
        hawaiiStream.lineEnd();
        puertoRicoStream.lineEnd();
      },
      polygonStart: function() {
        lower48Stream.polygonStart();
        alaskaStream.polygonStart();
        hawaiiStream.polygonStart();
        puertoRicoStream.polygonStart();
      },
      polygonEnd: function() {
        lower48Stream.polygonEnd();
        alaskaStream.polygonEnd();
        hawaiiStream.polygonEnd();
        puertoRicoStream.polygonEnd();
      }
    };
  };

  albersUsa.precision = function(_) {
    if (!arguments.length) return lower48.precision();
    lower48.precision(_);
    alaska.precision(_);
    hawaii.precision(_);
    puertoRico.precision(_);
    return albersUsa;
  };

  albersUsa.scale = function(_) {
    if (!arguments.length) return lower48.scale();
    lower48.scale(_);
    alaska.scale(_ * 0.35);
    hawaii.scale(_);
    puertoRico.scale(_);
    return albersUsa.translate(lower48.translate());
  };

  albersUsa.translate = function(_) {
    if (!arguments.length) return lower48.translate();
    var k = lower48.scale(), x = +_[0], y = +_[1];

    lower48Point = lower48
        .translate(_)
        .clipExtent([[x - 0.455 * k, y - 0.238 * k], [x + 0.455 * k, y + 0.238 * k]])
        .stream(pointStream).point;

    alaskaPoint = alaska
        .translate([x - 0.307 * k, y + 0.201 * k])
        .clipExtent([[x - 0.425 * k + ε, y + 0.120 * k + ε], [x - 0.214 * k - ε, y + 0.234 * k - ε]])
        .stream(pointStream).point;

    hawaiiPoint = hawaii
        .translate([x - 0.205 * k, y + 0.212 * k])
        .clipExtent([[x - 0.214 * k + ε, y + 0.166 * k + ε], [x - 0.115 * k - ε, y + 0.234 * k - ε]])
        .stream(pointStream).point;

    puertoRicoPoint = puertoRico
        .translate([x + 0.350 * k, y + 0.224 * k])
        .clipExtent([[x + 0.320 * k, y + 0.204 * k], [x + 0.380 * k, y + 0.234 * k]])
        .stream(pointStream).point;

    return albersUsa;
  };

  return albersUsa.scale(1070);
}





//////// SCROLLER ////////////
//see http://vallandingham.me/scroller.html
//http://vallandingham.me/scroll_demo/
//https://github.com/vlandham/scroll_demo/blob/gh-pages/js/scroller.js

//var lastIndex = -1;
//var activeIndex = 0;


var vizRun1 = 0, //used below to run only one time
	vizRun2 = 0,
	vizRun3 = 0,
	vizRun4 = 0,
	vizRun5 = 0,
	vizRun6 = 0,
	vizRun7 = 0,
	vizRun8 = 0,
	vizRun9 = 0,
  vizRun10 = 0;
  
function startTheViz() {
  //////// Set up the scroll functionality. Define values to be used within scroller(). //////////
  
  //we are running the re-useable scroller function but with the container being the #graphic div (rather than the very top of the body)
  //Within scroller is a function scroll.container that either uses the body or replaces container with what's specified otherwise
  var scroll = scroller()
    .container(d3.select('#graphic'));
  
  //run that "scroll" instance of scoller, passing in the selection of desired sections
  //starts the position and resize functions on window scroll or window resize
  scroll(d3.selectAll('.vizSection'));
  
  // !!!!!!! EDITED ORDER FOR PERSONAL SITE PORTFOLIO !!!!!!! //
  scroll.on('active', function (index) {
    // run viz based on current index position
    if (index === 0) {
        if (vizRun1 > 0) {  //to run only one time
          return 
        } else { 
          raceVizzes('#chartDiv1', 'statePropMap'); 
        }
        vizRun1 = 1;
        
      } else if (index === 1) {
        if (vizRun2 > 0) {
          return 
        } else { 
          raceVizzes('#chartDiv2', 'ntnlProportions');
        }
        vizRun2 = 1;

      } else if (index === 2) {
        if (vizRun3 > 0) {
          return 
        } else { 
          raceVizzes('#chartDiv3', 'ntnlPropLinesComp');
        }
        vizRun3 = 1;

      } else if (index === 3) {
        if (vizRun4 > 0) {
          return 
        } else { 
          raceVizzes('#chartDiv4', 'shelPies');
        }
        vizRun4 = 1;

      } else if (index === 4) {
        if (vizRun5 > 0) {
          return 
        } else { 
          raceVizzes('#chartDiv5', 'shelBars');
        }
        vizRun5 = 1;

      } else if (index === 5) {
        if (vizRun6 > 0) {
          return 
        } else { 
          raceVizzes('#chartDiv6', 'rateBars');
        }
        vizRun6 = 1;

      } else if (index === 6) {
        if (vizRun7 > 0) {
          return 
        } else { 
          raceVizzes('#chartDiv7', 'ntnlLocation');
        }
        vizRun7 = 1;

      } else if (index === 7) {
        if (vizRun8 > 0) {
          return 
        } else { 
          raceVizzes('#chartDiv8', 'shelPies');
        }
        vizRun8 = 1;

      } else if (index === 8) {
        if (vizRun9 > 0) {
          return 
        } else { 
          raceVizzes('#chartDiv9', 'shelBars');
        }
        vizRun9 = 1;

      } else if (index === 9) {
        if (vizRun10 > 0) {
          return 
        } else { 
          raceVizzes('#chartDiv10', 'ntnlLocation');
        }
        vizRun10 = 1;
      }
  }); 
  
}

///// DUE TO JUMPINESS I THAT COULDN'T DIAGNOSE WHEN SCROLLING UP,
///// LOAD ALL PRIOR VIZZES IF SOMEONE USES THE TABLE OF CONTENTS TO JUMP
d3.selectAll('.jumpLoad2') //If jumping to part 2, load all in part 1
  .on('click', function(d){
    if (vizRun1 === 0) {  //to run only one time
      raceVizzes('#chartDiv1', 'ntnlProportions'); 
      vizRun1 = 1;       
    }
    if (vizRun2 === 0) {
      raceVizzes('#chartDiv2', 'ntnlPropLines');
      vizRun2 = 1;
    }
    if (vizRun3 === 0) {
      raceVizzes('#chartDiv3', 'ntnlPropLinesComp');
      vizRun3 = 1;
    }        
    if (vizRun4 === 0) {
      raceVizzes('#chartDiv4', 'statePropMap');
      vizRun4 = 1;
    }
  });
  
d3.selectAll('.jumpLoad3') //If jumping to part 3, load all in parts 1 and 2
  .on('click', function(d){

    if (vizRun1 === 0) {  //to run only one time
      raceVizzes('#chartDiv1', 'ntnlProportions'); 
      vizRun1 = 1;       
    }
    if (vizRun2 === 0) {
      raceVizzes('#chartDiv2', 'ntnlPropLines');
      vizRun2 = 1;
    }
    if (vizRun3 === 0) {
      raceVizzes('#chartDiv3', 'ntnlPropLinesComp');
      vizRun3 = 1;
    }        
    if (vizRun4 === 0) {
      raceVizzes('#chartDiv4', 'statePropMap');
      vizRun4 = 1;
    }
    if (vizRun5 === 0) {
      raceVizzes('#chartDiv5', 'rateBars');
      vizRun5 = 1;
    }
    if (vizRun6 === 0) {
      raceVizzes('#chartDiv6', 'stateRateMap');
      vizRun6 = 1;
    }
    if (vizRun7 === 0) {
      raceVizzes('#chartDiv7', 'stateMinVsMajMap');
      vizRun7 = 1;
    }
  });







/*
function sectionChange(index) {
  activeIndex = index;
  var sign = (activeIndex - lastIndex) < 0 ? -1 : 1;
  var scrolledSections = d3.range(lastIndex + sign, activeIndex + sign, sign); //range with indices of sections you scrolled through
  //scrolledSections.forEach(function (i) {
  //  activateFunctions[i]();
  //});
  lastIndex = activeIndex;
};  
*/


function scroller() {
  var container = d3.select('#chartDiv1'); //viz container

  // event dispatcher
  var dispatch = d3.dispatch('active', 'progress');

  // d3 selection of all the text sections that will be scrolled through
  var sections = null;

  // array that will hold the y coordinate of each section that is scrolled through
  var sectionPositions = [];
  var currentIndex = -1;
  var containerStart = 0;



  /////// SCROLL CONSTRUCTOR to monitor scrolling of textSections selection (textSectionElmnts) ////////

  function scroll(textSectionElmnts) {
    sections = textSectionElmnts;

    // when window is scrolled call position. When it is resized call resize.
    d3.select(window)
      .on('scroll.scroller', position)
      .on('resize.scroller', resize);


    // manually call resize initially to setup scroller.
    resize();

    // hack to get position to be called once for the scroll position on load.
    // @v4 timer no longer stops if you return true at the end of the callback
    // function - so here we stop it explicitly.
    var timer = d3.timer(function () {
      position();
      timer.stop();
    });
  }

  /* Resize - called initially and also when page is resized.
   * Sets or resets the sectionPositions array containing all of the section positions
   */
  function resize() {
    // sectionPositions will be each sections starting position relative to the top of the first section.
    //console.log('resized, section positions determined');

    sectionPositions = [];
    var startPos;
    
    sections.each(function (d, i) {
      var top = this.getBoundingClientRect().top;
      
      if (i === 0) { //the intro section gets no viz but is included here, so chart 1 starts at index 1
        startPos = top;
      }
      //console.log('Section',i,"is at position",top-startPos,"below the intro section's position");
      
      sectionPositions.push(top - startPos);
    });
    
    //get position of the graphic/viz container.
    containerStart = container.node().getBoundingClientRect().top + window.pageYOffset;

    //console.log('Container position is',containerStart,' and position of intro section is',startPos);
    //console.log('Section positions relative to first section:',sectionPositions);

  }

  //Call resize again if the intro accordion dropdowns have been used
  //Slight timeout delay to allow accordion transition to happen before the new calculation
  for (var i = 0; i < accordionOptions.length; i++) {
    accordionOptions[i].addEventListener("click", function() {
      setTimeout(function() {
        resize();
        //console.log(sectionPositions);
      }, 200);
    });
  }



  /**
   * position - get current users position.
   * if user has scrolled to new section,
   * dispatch active event with new section
   * index.
   *
   */
  function position() {
    var pos = window.pageYOffset - containerStart; //is approx. zero when first section is at top of the window
 
    //Adding this to tweak the position
    var posTweak = 0;
    var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    if (windowHeight > height) {
      posTweak = (windowHeight/2) - 0;  ////////////// POSITION OFFSET FOR DETECTING WHEN TO SWITCH ///////////////
    } else {
      posTweak = 0; //because of the unused space at the top of the SVG canvas from the old menu bar
    }   

    pos = pos + posTweak; //offset if needed
    
    //console.log('window top (scroll) position relative to section 1 is',pos);
    
    var sectionIndex = d3.bisect(sectionPositions, pos) - 1;
    sectionIndex = Math.min(sections.size() - 1, sectionIndex); //at max is the highest index in sectionPositions
    //console.log('The active section (index) is',sectionIndex, "of", sections.size());

    if (currentIndex !== sectionIndex) {
      // @v4 you now `.call` the dispatch callback
      dispatch.call('active', this, sectionIndex);
      currentIndex = sectionIndex;
    }

    var prevIndex = Math.max(sectionIndex - 1, 0);
    var prevTop = sectionPositions[prevIndex];
    var progress = (pos - prevTop) / (sectionPositions[sectionIndex] - prevTop);
    // @v4 you now `.call` the dispatch callback
    dispatch.call('progress', this, currentIndex, progress);
  }

  /**
   * container - get/set the parent element
   * of the sections. Useful for if the
   * scrolling doesn't start at the very top
   * of the page.
   *
   * @param value - the new container value
   */
  scroll.container = function (value) {
    if (arguments.length === 0) {
      return container;
    }
    container = value;
    return scroll;
  };

  // @v4 There is now no d3.rebind, so this implements
  // a .on method to pass in a callback to the dispatcher.
  scroll.on = function (action, callback) {
    dispatch.on(action, callback);
  };

  return scroll;
}



















//RELOAD ON WINDOW RESIZE. Posted here: https://stackoverflow.com/questions/14915653/refresh-page-on-resize-with-javascript-or-jquery
$(window).bind('resize', function(e)
{
  if (window.RT) clearTimeout(window.RT);
  window.RT = setTimeout(function()
  {
    this.location.reload(false); /* false to get page from cache */
  }, 100);
});



//RUN THE VIZZES
/*
raceVizzes('#chartDiv1', 'ntnlProportions');
raceVizzes('#chartDiv2', 'ntnlPropLines');
raceVizzes('#chartDiv3', 'ntnlPropLinesComp');
raceVizzes('#chartDiv4', 'statePropMap');
raceVizzes('#chartDiv5', 'rateBars');
raceVizzes('#chartDiv6', 'stateRateMap');
raceVizzes('#chartDiv7', 'stateMinVsMajMap');
raceVizzes('#chartDiv8', 'shelPies');
raceVizzes('#chartDiv9', 'shelBars');
*/
startTheViz();