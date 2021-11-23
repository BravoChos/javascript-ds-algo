**006. Start Timer (Easy)**

The function _startTimer_ takes two arguments: a callback function (_callback_) and a time interval (_interval_). It should call the _callback_ every _interval_ milliseconds. The _callback_ receives the counter parameter and should return _true_ if the timer continues operating or _false_ if the timer should stop operating. _Interval_ milliseconds after the timer is started, the _callback_ should be called for the frist time. The first time the _callback_ is called, the _counter_ should equal 1, the second time it should equal 2, and so on. The

The timer should allow other code to be executed during the wait time, and multiple timers should be allowed to coexist.
