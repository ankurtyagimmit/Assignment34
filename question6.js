
//6. Write a program which tells the number of days in a month.
let GDM = function(month,year) {
    // Here January is 1 based
    //Day 0 is the last day in the previous month
   return new Date(year, month, 0).getDate();
  // Here January is 0 based
  // return new Date(year, month+1, 0).getDate();
  };
  console.log(GDM(1, 2022));
  console.log(GDM(2, 2022));
  console.log(GDM(10, 2022));
  console.log(GDM(11, 2012));

  