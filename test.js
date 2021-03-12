var valueTest=10;
function temperature() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    console.log(parseFloat(this.responseText));
      valueTest=parseFloat(this.responseText);
  }};
  xhttp.open('GET', '/temperature', true);
  xhttp.send();
  return valueTest;
  };
  
  
 var valueTest_1=10;
function gas() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    console.log(parseFloat(this.responseText));
      valueTest_1=parseFloat(this.responseText);}};
  xhttp.open('GET', '/gas', true);
  xhttp.send();
  return valueTest_1;
};

 var valueTest_2=10;
function humidity() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    console.log(parseFloat(this.responseText));
      valueTest_2=parseFloat(this.responseText);}};
  xhttp.open('GET', '/humidity', true);
  xhttp.send();
  return valueTest_2;
};

var time = new Date();
var data = [{ x: [time], y: [gas()], mode: 'lines', line: {color: '#F13108'}}];
Plotly.plot('graph', data, {title: { text:'Gas measurement', font: { family: 'Courier New, monospace', size: 24 }, xref: 'paper', x: 0.05}});
var cnt1 = 0;
var interval = setInterval(function() {
  var time = new Date();
  var update = { x:  [[time]], y: [[gas()]] };
  var olderTime = time.setMinutes(time.getMinutes() - 1);
  var futureTime = time.setMinutes(time.getMinutes() + 1);
  var minuteView = { xaxis: { type: 'date',  range: [olderTime,futureTime] } };
  Plotly.relayout('graph', minuteView);
  Plotly.extendTraces('graph', update, [0]);
  if(cnt1 === 100) clearInterval(interval);
}, 1000);


var time2 = new Date();
var data_2 = [{ x: [time2], y: [humidity()], mode: 'lines', line: {color: '#80CAF6'}}];
Plotly.plot('graph_2', data_2, {title: { text:'Humidity measurement', font: { family: 'Courier New, monospace', size: 24 }, xref: 'paper', x: 0.05 }});
var cnt2 = 0;
var interval_2 = setInterval(function() {
  var time2 = new Date();
  var update_2 = { x:  [[time2]],  y: [[humidity()]]};
  var olderTime_2 = time2.setMinutes(time2.getMinutes() - 1);
  var futureTime_2 = time2.setMinutes(time2.getMinutes() + 1);
  var minuteView_2 = {xaxis: { type: 'date', range: [olderTime_2,futureTime_2]}};
  Plotly.relayout('graph_2', minuteView_2);
  Plotly.extendTraces('graph_2', update_2, [0]);
  if(cnt2 === 100) clearInterval(interval_2);
}, 1000);


var time3 = new Date();
var data_3 = [{ x: [time3], y: [temperature()], mode: 'lines', line: {color: '#F5C009'}}];
Plotly.plot('graph_3', data_3, {title: { text:'Temperature measurement', font: {family: 'Courier New, monospace', size: 24}, xref: 'paper', x: 0.05}});
var cnt3 = 0;
var interval_3 = setInterval(function() {
  var time3 = new Date();
  var update_3 = { x: [[time3]], y: [[temperature()]] };
  var olderTime_3 = time3.setMinutes(time3.getMinutes() - 1);
  var futureTime_3 = time3.setMinutes(time3.getMinutes() + 1);
  var minuteView_3 = { xaxis: { type: 'date', range: [olderTime_3,futureTime_3] }};
  Plotly.relayout('graph_3', minuteView_3);
  Plotly.extendTraces('graph_3', update_3, [0]);
  if(cnt3 === 100) clearInterval(interval_3);
}, 1000);

var trace1 = { x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], y: [20, 14, 25, 16, 18, 22, 19, 15, 12, 16, 14, 17], type: 'bar', name: 'Primary Product', marker: { color: 'rgb(49,130,189)', opacity: 0.7 }};
var trace2 = { x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], y: [19, 14, 22, 14, 16, 19, 15, 14, 10, 12, 12, 16], type: 'bar', name: 'Secondary Product', marker: { color: 'rgb(204,204,204)', opacity: 0.5 }};
var trace3 = { x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], y: [19, 14, 22, 14, 16, 19, 15, 14, 10, 12, 12, 16], type: 'bar', name: 'Secondary Product', marker: { color: 'rgb(204,204,204)', opacity: 0.5 }};
var data = [trace1, trace2,trace1];
var layout = {title: { text:'Weekly average measurement',font: {family: 'Courier New, monospace', size: 24 }}, xaxis: { tickangle: -45 }, barmode: 'group'};
Plotly.newPlot('myDiv', data, layout);


var trace1 = {x: [20, 14, 23], y: ['giraffes', 'orangutans', 'monkeys'], name: 'SF Zoo', orientation: 'h', marker: { color: 'rgba(55,128,191,0.6)', width: 1}, type: 'bar'};
var trace2 = {x: [12, 18, 29], y: ['giraffes', 'orangutans', 'monkeys'], name: 'LA Zoo', orientation: 'h', type: 'bar', marker: {color: 'rgba(255,153,51,0.6)', width: 1 }};
var data = [trace1, trace2];
var layout = {title: {text:'Daily min and max measurement', font: {family: 'Courier New, monospace',size: 24}}, barmode: 'stack'};
Plotly.newPlot('myDiv1', data, layout);
