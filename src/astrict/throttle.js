"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @desc 节流函数
 * @param func 绑定函数
 * @param wait 间隔执行毫秒数
 */
function throttle(func, wait) {
    if (wait === void 0) { wait = 1000; }
    var timeout = 0;
    return function () {
        var that = this;
        var arges = arguments;
        if (!timeout) {
            timeout = setTimeout(function () {
                timeout = 0;
            }, wait);
            func.apply(that, arges);
        }
    };
}
exports.default = throttle;
