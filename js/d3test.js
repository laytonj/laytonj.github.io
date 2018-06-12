var svgFromJson = d3.select('#vizFromJson').append('svg')
  .attr('height', 500)
  .attr('width', 500)
  .style('background-color', '#f3f3f3');

var svgFromCsv = d3.select('#vizFromCsv').append('svg')
  .attr('height', 500)
  .attr('width', 500)
  .style('background-color', '#f4f4f4');
  
d3.json('../../../yml_to_json/d3test.json', function(error, data) {
  if (error) throw error;

  console.log(data);
  
  svgFromJson.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('height', function(d){return d.h;})
    .attr('width', function(d){return d.w;})
    .attr('transform', function(d,i){return 'translate(' + (i * 60) + ',' + (i * 70) + ')'});
});

d3.csv('../../../yml_to_csv/d3test.csv', function(error, data) {
  if (error) throw error;

  console.log(data);

  svgFromCsv.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('height', function(d){return d.h * 1.5;})
    .attr('width', function(d){return d.w * 1.7;})
    .attr('transform', function(d,i){return 'translate(' + (i * 60) + ',' + (i * 70) + ')'})
    .style('cursor','pointer')
    .on('click', function(){d3.select(this).style('fill','blue')});
  
});