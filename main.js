//************************************************Home******************************************************
let home = document.getElementsByClassName("home");
let logo = document.getElementById("logo");
// --------------------------------------------------------------------------------------------------------------
let tdl_icon = document.getElementById("tdl_icon");
let to_do_list_section = document.getElementById("to_do_list");
tdl_icon.onclick = function () {
  home[0].style.display = "none";
  to_do_list_section.style.display = "block";
};

// --------------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------------
let focus_section = document.getElementsByClassName("focus");
let focus_icon = document.getElementById("focus_icon");
focus_icon.onclick = function () {
  home[0].style.display = "none";
  focus_section[0].style.display = "flex";
};
// --------------------------------------------------------------------------------------------------------------
let wallet_section = document.getElementsByClassName("wallet");
let wallet_icon = document.getElementById("wallet_icon");
wallet_icon.onclick = function () {
  home[0].style.display = "none";
  wallet_section[0].style.display = "flex";
};
// ---------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------
let journal_section = document.getElementsByClassName("journal_section");
let journal_icon = document.getElementById("journal_icon");
journal_icon.onclick = function () {
  home[0].style.display = "none";
  journal_section[0].style.display = "flex";
};
// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------
let gallery_section = document.getElementsByClassName("gallery_section");
let gallery_icon = document.getElementById("gallery_icon");
gallery_icon.onclick = function () {
  home[0].style.display = "none";
  gallery_section[0].style.display = "block";
};
// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------
let calendar_section = document.getElementsByClassName("calendar_section");
let calendar_icon = document.getElementById("calendar_icon");
calendar_icon.onclick = function () {
  home[0].style.display = "none";
  calendar_section[0].style.display = "block";
};
// --------------------------------------------------------------------------------------------------------------
logo.onclick = function () {
  home[0].style.display = "flex";
  to_do_list_section.style.display = "none";
  focus_section[0].style.display = "none";
  wallet_section[0].style.display = "none";
  journal_section[0].style.display = "none";
  gallery_section[0].style.display = "none";
  calendar_section[0].style.display = "none";

};

// **************************************************To do list*********************************************************
let add_btn = document.getElementById("add_btn");

let main = document.getElementsByTagName("main");
let tasks_lists = document.getElementById("tasks_lists");
let lists = document.createElement("ul");

add_btn.onclick = function () {
  let typing_text = document.form.typing_text.value;
  if (!(typing_text == "")) {
    let list = document.createElement("li");
    let text = document.createElement("p");
    text.textContent = typing_text;
    let trash = document.createElement("i");
    trash.setAttribute("class", "fa-solid fa-trash");
    trash.setAttribute("id", "delete");

    // for aside section*******************
    let task_list = document.createElement("li");
    let task_text = document.createElement("p");
    task_text.textContent = typing_text;
    let task_checkbox = document.createElement("i");
    task_checkbox.setAttribute("class", "fa-solid fa-square");
    task_checkbox.setAttribute("id", "task_checkbox");
    task_list.appendChild(task_checkbox);
    task_list.appendChild(task_text);
    tasks_lists.appendChild(task_list);
    // *************************************
    let checkbox = document.createElement("i");
    checkbox.setAttribute("class", "fa-light fa-square");
    checkbox.setAttribute("id", "checkbox");
    list.appendChild(text);
    list.appendChild(checkbox);
    list.appendChild(trash);
    lists.appendChild(list);

    to_do_list_section.appendChild(lists);
    trash.onclick = function () {
      list.remove();
      task_list.remove();
    };
    document.form.typing_text.value = "";
  }
};
// **************************************************************************************************************

// **************************************************Focus Time*********************************************************
var hoursInput = document.getElementById("hours");
var minutesInput = document.getElementById("minutes");
var secondsInput = document.getElementById("seconds");
var startTimerButton = document.getElementById("play_btn");
var pauseTimerButton = document.getElementById("pause_btn");
var timerDisplay = document.getElementById("timer_show");
var reset_btn=document.getElementById("reset_btn");
var x;

startTimerButton.addEventListener("click", function () {
  var hours = parseInt(hoursInput.value) || 0;
  var minutes = parseInt(minutesInput.value) || 0;
  var seconds = parseInt(secondsInput.value) || 0;

  var duration = hours * 60 * 60 + minutes * 60 + seconds;
  var countDownDate = new Date().getTime() + duration * 1000;

  x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timerDisplay.innerHTML = hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
      clearInterval(x);
      timerDisplay.innerHTML = "Finished";
    }
  }, 1000);
});

pauseTimerButton.addEventListener("click", function () {
  clearInterval(x);
});
reset_btn.addEventListener("click",function(){
  hoursInput.value="00";
  minutesInput.value="00";
  secondsInput.value="00"
  timerDisplay.innerHTML = "00:00:00";
  clearInterval(x);

})

// **************************************************************************************************************

// **************************************************Wallet*********************************************************
let money = document.getElementsByClassName("money");
for (let indexW = 0; indexW <= 2; indexW++) {
  if (money[indexW].textContent[0] == "-") {
    money[indexW].style.color = "red";
  } else {
    money[indexW].style.color = "green";
  }
}
// **************************************************************************************************************

// **************************************************Journal*********************************************************
let typing_area = document.getElementById("typing_area");
let title_journal = document.getElementById("title_journal");
let date_journal = document.getElementById("date_journal");
let save_btn_journal = document.getElementById("save_btn_journal");
let recents_j = document.getElementsByClassName("recents_j");

save_btn_journal.onclick = function () {
  if (title_journal.value != "" && date_journal.value != "") {
    let recent_journal = document.createElement("li");
    recent_journal.setAttribute("class", "recent_journal");
    recent_journal.textContent =
      title_journal.value + "(" + date_journal.value + ")";
    recents_j[0].appendChild(recent_journal);
    title_journal.value = "";
    date_journal.value = "";
    typing_area.value = "";
  }
};
let cancel_btn_journal = document.getElementById("cancel_btn_journal");
cancel_btn_journal.onclick = function () {
  title_journal.value = "";
  date_journal.value = "";
  typing_area.value = "";
};

// **************************************************************************************************************

document.getElementById("files").addEventListener("change", function(){
  if(this.files[0]){
    var picture= new FileReader();
    picture.readAsDataURL(this.files[0]);
    picture.addEventListener("load",function(event){
      document.getElementById("uploadedImage").setAttribute("src",event.target.result);
      document.getElementById("uploadedImage").style.display="block";
    })
  }
})