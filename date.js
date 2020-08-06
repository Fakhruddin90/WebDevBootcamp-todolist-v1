//jshint esversion:6

//export function in module that can be access app.js
// module.exports = getDate; //no open and close bracket for function to not activate the function.

// module.exports.getDate = getDate;
//
// function getDate() {
//   let today = new Date();
//
//   let options = {
//     weekday: "long",
//     day: "numeric",
//     month: "long"
//   };

//anonymous function
exports.getDate = function() {

  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  // let day = today.toLocaleDateString("en-US", options);
  return today.toLocaleDateString("en-US", options);

};

exports.getDay = function () {
  const today = new Date();

  const options = {
    weekday: "long"
  };

  // let day = today.toLocaleDateString("en-US", options);
  return today.toLocaleDateString("en-US", options);

};
