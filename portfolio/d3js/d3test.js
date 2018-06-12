var svg = d3.select('#viz').append('svg')
  .attr('height', 500)
  .attr('width', 500)
  .style('background-color', '#f3f3f3');
  
d3.csv('/data/d3test.csv', function(error, data) {
  if (error) throw error;

  console.log(data);
});
