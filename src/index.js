"use strict";
((global, Mtool) => {
  if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = Mtool;
  }
  global.Mtool = Mtool;
})(typeof window !== "undefined" ? window : this, require("./Mtool").default);