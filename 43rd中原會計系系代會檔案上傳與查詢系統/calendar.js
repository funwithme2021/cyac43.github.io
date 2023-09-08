
const events = [
{ date: "2023 年 8 月 23 日", time: "11:00 - 14:32", name: "測試使用" },
{ date: "2023 年 8 月 24 日", time: "11:00 - 14:40", name: "測試使用" },
{ date: "2023 年 8 月 25 日", time: "11:00 - 14:32", name: "測試使用" },
{ date: "2023 年 8 月 27 日", time: "11:00 - 15:59", name: "分區迎新" },
{ date: "2023 年 9 月 06 日", time: "00:00 - 23:59", name: "食字路口" },
{ date: "2023 年 9 月 08 日", time: "00:00 - 23:59", name: "迎新宿營" },
{ date: "2023 年 9 月 09 日", time: "00:00 - 23:59", name: "迎新宿營" },
{ date: "2023 年 9 月 10 日", time: "00:00 - 23:59", name: "迎新宿營" },
{ date: "2023 年 9 月 11 日", time: "00:00 - 23:59", name: "全校開學日" },
{ date: "2023 年 9 月 29 日", time: "00:00 - 23:59", name: "中秋節" },
{ date: "2023 年 10 月 10 日", time: "00:00 - 23:59", name: "國慶日" },
{ date: "2023 年 11 月 06 日", time: "00:00 - 23:59", name: "期中考試週" },
{ date: "2023 年 11 月 07 日", time: "00:00 - 23:59", name: "期中考試週" },
{ date: "2023 年 11 月 08 日", time: "00:00 - 23:59", name: "期中考試週" },
{ date: "2023 年 11 月 09 日", time: "00:00 - 23:59", name: "期中考試週" },
{ date: "2023 年 11 月 10 日", time: "00:00 - 23:59", name: "期中考試週" },
{ date: "2024 年 1 月 01 日", time: "00:00 - 23:59", name: "開國紀念日" },
{ date: "2024 年 1 月 08 日", time: "00:00 - 23:59", name: "期末考試週" },
{ date: "2024 年 1 月 09 日", time: "00:00 - 23:59", name: "期末考試週" },
{ date: "2024 年 1 月 10 日", time: "00:00 - 23:59", name: "期末考試週" },
{ date: "2024 年 1 月 11 日", time: "00:00 - 23:59", name: "期末考試週" },
{ date: "2024 年 1 月 12 日", time: "00:00 - 23:59", name: "期末考試週" },
// 其他活動...
];

function displayUpcomingEvents() {
const upcomingEventsContainer = document.getElementById("upcomingEvents");
upcomingEventsContainer.innerHTML = ""; // 清空原有內容

const now = new Date();
const upcomingEvents = events.filter(event => {
const eventDateParts = event.date.split(" ");
const eventYear = parseInt(eventDateParts[0]);
const eventMonth = parseInt(eventDateParts[2]);
const eventDay = parseInt(eventDateParts[4]);

const [startHour] = event.time.split(":");

const eventDate = new Date(eventYear, eventMonth - 1, eventDay, parseInt(startHour));
return eventDate >= now;
});


upcomingEvents.slice(0, 5).forEach(event => {
const eventInfo = document.createElement("div");
eventInfo.classList.add("event-info");

const eventDateParts = event.date.split(" ");
const eventYear = eventDateParts[0];
const eventDate = document.createElement("div");
eventDate.classList.add("event-date");
eventDate.textContent = `${eventYear} 年 ${eventDateParts[2]} ${eventDateParts[3]} ${eventDateParts[4]}`;

const eventTime = document.createElement("div");
eventTime.classList.add("event-time");
eventTime.textContent = event.time;

const eventName = document.createElement("div");
eventName.classList.add("event-name");
eventName.textContent = event.name;

eventInfo.appendChild(eventDate);
eventInfo.appendChild(eventTime);
eventInfo.appendChild(eventName);

upcomingEventsContainer.appendChild(eventInfo);
});
}

function searchByKeyword() {
const keyword = document.getElementById("searchKeyword").value;
const filteredEvents = events.filter(event => event.name.includes(keyword));
displayFilteredEvents(filteredEvents);
}

function searchByDateRange() {
const startDate = new Date(document.getElementById("startDate").value);
const endDate = new Date(document.getElementById("endDate").value);
endDate.setHours(23, 59, 59);

const filteredEvents = events.filter(event => {
  const eventDateParts = event.date.split(" ");
  const eventYear = parseInt(eventDateParts[0]);
  const eventMonth = parseInt(eventDateParts[2]);
  const eventDay = parseInt(eventDateParts[4]);
  const [startHour] = event.time.split(":");

  const eventDate = new Date(eventYear, eventMonth - 1, eventDay, parseInt(startHour));
  return eventDate >= startDate && eventDate <= endDate;
});

displayFilteredEvents(filteredEvents);
}

function displayFilteredEvents(filteredEvents) {
const searchResultElement = document.getElementById("searchResult");
const upcomingEventsContainer = document.getElementById("upcomingEvents");
upcomingEventsContainer.innerHTML = ""; // 清空原有內容

if (filteredEvents.length === 0) {
  searchResultElement.textContent = "查無符合活動或輸入的內容有誤與不完整，請重新查詢!";
} else {
  searchResultElement.textContent = "";
  filteredEvents.sort((eventA, eventB) => {
    const dateA = parseEventDate(eventA.date, eventA.time);
    const dateB = parseEventDate(eventB.date, eventB.time);
    return dateA - dateB;
  });

  filteredEvents.slice(0, 5).forEach(event => {
    const eventInfo = document.createElement("div");
    eventInfo.classList.add("event-info");
    eventInfo.innerHTML = `
      <div class="event-date">${event.date}</div>
      <div class="event-time">${event.time}</div>
      <div>${event.name}</div>
    `;
    upcomingEventsContainer.appendChild(eventInfo);
  });
}
}
function parseEventDate(dateStr, timeStr) {
const [month, day] = dateStr.split(" ");
const [startHour] = timeStr.split(":");
return new Date(new Date().getFullYear(), parseInt(month) - 1, parseInt(day), parseInt(startHour));
}

function clearSearch() {
document.getElementById("searchKeyword").value = "";
displayUpcomingEvents();
}

function clearDateSearch() {
document.getElementById("startDate").value = "";
document.getElementById("endDate").value = "";
displayUpcomingEvents();
}

displayUpcomingEvents(); // 初始顯示即將發生的活動

  function updateCurrentTime() {
    const currentTimeElement = document.getElementById("current-time");
    const now = new Date();
    const formattedTime = now.toLocaleTimeString("zh-TW");
    currentTimeElement.textContent = formattedTime;
  }

  function updateUsageCount() {
    const usageCountElement = document.getElementById("usage-count");
    usageCountElement.textContent = "42";
  }

  function updateOnlineUsers() {
    const onlineUsersElement = document.getElementById("online-users");
    onlineUsersElement.textContent = "5";
  }

  updateCurrentTime();
  updateUsageCount();
  updateOnlineUsers();
  setInterval(updateCurrentTime, 1000);
  setInterval(updateUsageCount, 5000);
  setInterval(updateOnlineUsers, 10000);
