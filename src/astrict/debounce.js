"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @desc 防抖函数
 * @param func 绑定函数
 * @param wait 延迟执行毫秒数
 * @param immediate true立即执行，false非立即执行
 */
function debounce(func, wait, immediate) {
    if (wait === void 0) { wait = 1000; }
    if (immediate === void 0) { immediate = true; }
    var timeout = 0;
    return function () {
        var that = this;
        var arges = arguments;
        if (timeout) {
            clearTimeout(timeout);
        }
        if (immediate) {
            if (timeout === 0) {
                func.apply(that, arges);
            }
            timeout = setTimeout(function () {
                timeout = 0;
            }, wait);
        }
        else {
            timeout = setTimeout(function () {
                func.apply(that, arges);
            }, wait);
        }
    };
}
exports.default = debounce;
