// Function to display date

const displayDate = (date) => {
  if (date) {
    const dateNow = Date.parse(date);

    date = new Date(dateNow);

    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    return date.toLocaleDateString("en-EN", options);
  } else {
    return "No date";
  }
};

export default displayDate;
