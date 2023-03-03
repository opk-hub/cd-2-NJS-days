const addDays = require("date-fns/addDays");

const getAfterXDays = (days) => {
  const newDate = addDays(new Date(2020, 7, 22), days);

  return `${newDate.getDate()}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()}`;
};
module.exports = getAfterXDays;
console.log(getAfterXDays);
