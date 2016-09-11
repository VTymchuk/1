var acct = Cookies.get('acct');

var blackRock = function(dough) {
  var Aladdin = new blk.API();
  Aladdin.performanceData({
    identifiers: 'AAPL,MSFT'
  }, function(data) {
    $('#returns').highcharts('StockChart', {
      rangeSelector: {
        selected: 5
      },
      title: {
        text: data.resultMap.RETURNS.map(function(returns) {
          return returns.ticker
        }).join('/') + ' Stock Return ($' + dough + ' Investment)'
      },
      series: data.resultMap.RETURNS.map(function(returns) {
        return {
          name: returns.ticker,
          data: returns.performanceChart.map(function(point) {
            return [point[0], point[1] * Number(dough)]
          }),
          tooltip: {
            valueDecimals: 2
          }
        }
      })
    });
  });
};

$(document).ready(function(){
  var url = "https://ksoe6lbns5.execute-api.us-east-1.amazonaws.com/dev/days?id=57d5215de63c5995587e896e&days=111";
  $.get(url, function(data){
    $("#here").html("$" + Math.floor(Number(data)));
  });

$("#saveTarget").click(function(){
  var goal = $("#TARGET").val();
  var amtLeft = goal - 939;
  alert ("You have "+ amtLeft + " to save!");


})
  $("#back").click(function(){
    $("#section-two-container").animate({left: "2%"}, 1000);
  });

  $("#invest").click(function(){
    var dough = $("#cash").val();
    blackRock(dough);
    $("#section-two-container").animate({right: "100%"}, 1000);
  });
});
