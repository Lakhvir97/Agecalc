// let cal = () => {};

document.querySelector("#calculator").addEventListener("click", function () {
  let inputdate = new Date(document.getElementById("birth_date").value);

  let birthdetails = {
    date: inputdate.getDate(),
    month: inputdate.getMonth() + 1,
    year: inputdate.getFullYear(),
  };

  let today = new Date();
  month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let currentyear = today.getFullYear();
  let currentmonth = today.getMonth() + 1;
  let currentdate = today.getDate();
  if (
    birthdetails.year > currentyear ||
    (birthdetails.month > currentmonth && birthdetails.year > currentyear) ||
    (birthdetails.date > currentdate &&
      birthdetails.month == currentmonth &&
      birthdetails.year == currentyear)
  ) {
    alert("Not born");
    // return;
  }

  let birthyear = currentyear - birthdetails.year;

  if (currentmonth >= birthdetails.month) {
    birthmonth = currentmonth - birthdetails.month;
    console.log(birthmonth + "if");
  } else {
    birthyear--;
    birthmonth = 12 + currentmonth - birthdetails.month;
    console.log("inside else month");
    console.log(birthyear, birthmonth);
  }
  if (currentdate >= birthdetails.date) {
    birthdate = currentdate - birthdetails.date;

    console.log(birthdate);
  } else {
    birthmonth--;
    days = month[currentmonth] - 2;

    birthdate = days + currentdate - birthdetails.date;
    // if (birthmonth < 0) {
    //   birthmonth = 11;
    //   birthyear--;
    //   console.log("days nested if");
    // }
  }

  displayresult(birthyear, birthmonth, birthdate);

  function displayresult() {
    document.getElementById("age_container").innerText =
      birthyear + " years " + birthmonth + " months " + birthdate + " days";
  }

  //   let birthmonth = 12 + currentmonth - birthdetails.month;

  //   let birthdate = currentdate - birthdetails.date;

  //   console.log(birthyear);
  //   console.log(birthmonth);
  //   console.log(birthdate);

  function leapyear(year) {
    if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) {
      month[1] = 29;
    } else {
      month[1] = 28;
    }
    // console.log(year, month[1]);
  }

  leapyear(currentyear);
});
