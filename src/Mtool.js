(function (factory) {
  if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = factory();
  } else if (typeof window !== "undefined") {
    window.Mtool = factory();
  }
})(function () {
  var Mtool = function () {
    return console.log("这是我个人封装的常用方法");
  };

  /**
   * @desc 函数防抖
   * @param func 函数
   * @param wait 延迟执行毫秒数
   * @param immediate true立即执行，false非立即执行
   */
  Mtool.debounce = function (func, wait, immediate = true) {
    var timeout;
    return function () {
      var context = this;
      var args = arguments;
      if (timeout) {
        clearTimeout(timeout);
      }
      if (immediate) {
        if (timeout === undefined) {
          func.apply(context, args);
        }
        timeout = setTimeout(function () {
          timeout = undefined;
        }, wait);
      } else {
        timeout = setTimeout(function () {
          func.apply(context, args);
        }, wait);
      }
    };
  };

  /**
   * @desc 函数节流
   * @param func 函数
   * @param wait 间隔执行毫秒数
   */
  Mtool.throttle = function (func, wait) {
    var timeout;
    return function () {
      var centext = this;
      var args = arguments;
      if (!timeout) {
        timeout = setTimeout(function () {
          timeout = undefined;
        }, wait);
        func.apply(centext, args);
      }
    };
  };

  Mtool.fn = Mtool.prototype;
  return Mtool;
});
