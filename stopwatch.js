var Stopwatch = function(options) {

  var offset,
      clock,
      interval;

  options = options || {};
  options.delay = options.delay || 1;

  // initialize
  reset();

  // private functions
  function start() {
    if (!interval) {
      offset   = Date.now();
      interval = setInterval(update, options.delay);
    }
  }
  function stop() {
    if (interval) {
      clearInterval(interval);
      interval = null;
    }
  }
  function reset() {
    clock = 0;
  }
  function lap() {
    // should record the elapsed time
    //timer.innerHTML = clock/1000; 
    console.log("lap: ", clock);
  }
  function update() {
    clock += delta();
  }
  function delta() {
    var now = Date.now(),
	d   = now - offset;
    offset = now;
    return d;
  }
  // public API
  this.start  = start;
  this.stop   = stop;
  this.reset  = reset;
  this.lap    = lap;
};
var totStopwatch = new Stopwatch(tot, {delay: 100});
    totStopwatch.start();
    totStopwatch.lap();
    totStopwatch.stop();
    totStopwatch.reset();
