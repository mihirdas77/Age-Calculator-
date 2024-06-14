function calculateAge() {
  const dobInput = document.getElementById("dob").value;
  const dob = new Date(dobInput);
  const now = new Date();

  const age = calculateDiff(now, dob);

  const nextBirthday = calculateNextBirthday(dob);

  const ageIn = calculateAgeIn(age);

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
    <div id="main">
      <div id="st">
          <a><h3>Your Age:</h3><br> ${age.years} years, ${age.months} months, ${age.weeks} weeks, ${age.days} days</a>
      </div>
      <div id="nd">
          <a><h3>Next Birthday:</h3><br> ${nextBirthday.days} days, ${nextBirthday.hours} hours, ${nextBirthday.minutes} minutes, ${nextBirthday.seconds} seconds</a>
      </div>
    </div>
    <div id="child">
    <div id="rd"><h3>Age In Time:</h3>
    <p>Hours: ${ageIn.hours}</p>
    <p>Minutes: ${ageIn.minutes}</p>
    <p>Seconds: ${ageIn.seconds}</p>
    <p>Milliseconds: ${ageIn.milliseconds}</p>

</div>
    </div>
  `;
}

function calculateDiff(date1, date2) {
  const diffTime = Math.abs(date1 - date2);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const years = Math.floor(diffDays / 365);
  const months = Math.floor((diffDays % 365) / 30);
  const weeks = Math.floor((diffDays % 365) / 7);
  const days = diffDays % 365;

  return { years, months, weeks, days };
}

function calculateNextBirthday(dob) {
  const now = new Date();
  const nextBirthday = new Date(now.getFullYear(), dob.getMonth(), dob.getDate());

  if (nextBirthday < now) {
    nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
  }

  const diffTime = Math.abs(nextBirthday - now);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diffTime % (1000 * 60)) / 1000);

  return { days: diffDays, hours, minutes, seconds };
}

function calculateAgeIn(age) {
  const hours = age.years * 365 * 24 + age.months * 30 * 24 + age.days * 24;
  const minutes = hours * 60;
  const seconds = minutes * 60;
  const milliseconds = seconds * 1000;

  return { hours, minutes, seconds, milliseconds };
}
