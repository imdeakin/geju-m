// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
/**
 * 移动端rem单位适配
 * @param width 屏幕宽度
 * @param size  字体大小
 * @param max   最大比率
 */
function flexible(width, size, max) {
    width =  typeof width == 'number' ? width : 750;
    size =  typeof size == 'number' ? size : 100;
    max =  typeof max == 'number' ? max : 100;

    //var docBody = document.body || document.documentElement;
    this.setSize = function () {
        var ratio = size / width;
        var w = window.innerWidth;
        var newRatio = w * ratio;
        if (max && newRatio > max) {
            newRatio = max;
        }
        document.documentElement.style.fontSize = newRatio + 'px';
    };
    this.setSize();
    window.onresize = this.setSize;
}
