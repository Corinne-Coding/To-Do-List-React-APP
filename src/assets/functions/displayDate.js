const displayDate = () => {
  const date = new Date();

  const dayNumber = date.getDate();
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();
  let dayName;
  let monthName;

  switch (day) {
    case 0:
      dayName = "Sunday";
      break;
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    case 6:
      dayName = "Saturday";
      break;
    default:
      monthName = null;
  }
  switch (month) {
    case 0:
      monthName = "january";
      break;
    case 1:
      monthName = "february";
      break;
    case 2:
      monthName = "march";
      break;
    case 3:
      monthName = "april";
      break;
    case 4:
      monthName = "may";
      break;
    case 5:
      monthName = "june";
      break;
    case 6:
      monthName = "july";
      break;
    case 7:
      monthName = "august";
      break;
    case 8:
      monthName = "september";
      break;
    case 9:
      monthName = "october";
      break;
    case 10:
      monthName = "november";
      break;
    case 11:
      monthName = "december";
      break;
    default:
      monthName = null;
  }
  const sentence = `${dayName}, ${dayNumber} ${monthName} ${year}`;

  return sentence;
};

export default displayDate;
