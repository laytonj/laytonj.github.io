var svg = d3.select('#viz').append('svg')
  .attr('height', 500)
  .attr('width', 500)
  .style('background-color', '#f3f3f3');

  
  
d3.json('../../../yml_to_json/d3test.json', function(error, data) {
  if (error) throw error;

  console.log(data);
  
  svg.selectAll('rect')
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
});