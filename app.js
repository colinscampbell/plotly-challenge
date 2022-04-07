function init() {
    var data = [{
        values: 5,
        labels: "asdf",
        type: "pie"
      }];
    
      var layout = {
        height: 600,
        width: 800
      };
    
      Plotly.newPlot("pie", data, layout);
}

init();