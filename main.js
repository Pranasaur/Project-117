var random_number;
var timer_counter = 0;
var timer_check = ''
var drawn_sketch = '';
var answer_holder = '';
var score = 0;

random_number= Math.floor(Math.random() * quick_draw_data_set.length);

console.log(quick_draw_data_set[random_number]);

var sketch = quick_draw_data_set[random_number];

document.getElementById("sketchtobedrawn").textContent = 'Sketch To be Drawn: ' + sketch;

