// @ts-nocheck

const completedBtn = document.querySelectorAll(".complete_btn");
for (let i = 0; i < completedBtn.length; i++) {
  const btn = completedBtn[i];
  btn.addEventListener("click", function (event) {
    const taskAssignedEl = document.getElementById("taskAssigned");
    const taskCount = parseInt(taskAssignedEl.innerText);
    const HeaderButton = document.getElementById("HeaderButton");
    const HeaderButtonCount = parseInt(HeaderButton.innerText);
    const addHeadings = document.querySelectorAll(".addHeading");
    const PTagAppendChild = document.getElementById("PTagAppendChild");
    // console.log(addHeadings);

    for (let i = 0; i < addHeadings.length; i++) {
      heading = addHeadings[i].innerText;
      console.log(heading);

      const newHeading = document.createElement("h2");
      newHeading.innerText = "You have completed" + heading;
      PTagAppendChild.appendChild(newHeading);
      // console.log(newHeading.innerText);
    }

    document
      .getElementById("clearHistoryButton")
      .addEventListener("click", function () {
        PTagAppendChild.innerHTML = "";
      });

    if (taskCount > 0) {
      taskAssignedEl.innerText = taskCount - 1;
    }
    if (HeaderButtonCount > 0) {
      HeaderButton.innerText = HeaderButtonCount + 1;
    }

    alert("Board updated Successfully");
    event.target.disabled = true;

    if (Array.from(completedBtn).every((btn) => btn.disabled)) {
      alert("Congratulations! You have completed all the current task");
    }
  });
}

function changeColor() {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  console.log(randomColor);
  document.body.style.backgroundColor = randomColor;
}

function updateDate() {
  const date = new Date();

  const WeekDay = { weekday: "short" };
  const WeekDayConvert = date.toLocaleDateString("en-US", WeekDay);

  const mountDayYear = { month: "short", day: "2-digit", year: "numeric" };
  const mountDayYearConvert = date
    .toLocaleDateString("en-US", mountDayYear)
    .replace(",", "");

  console.log(WeekDayConvert, mountDayYearConvert);
  document.querySelector(".weekAdd").innerText = WeekDayConvert + ", ";
  document.querySelector(".mountDayYearAdd").innerText = mountDayYearConvert;
}

updateDate();

document.getElementById("goBlogPage").addEventListener("click", function () {
  window.location.href = "/blog.html";
});

// document.getElementById("backToDeskBtn").addEventListener("click", function () {
//   window.location.replace = "/index.html";
// });
