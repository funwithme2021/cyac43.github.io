
const events = [
  { date: "2023 年 8 月 27 日", time: "11:00 - 15:59", name: "分區迎新" },
  { date: "2023 年 9 月 06 日", time: "00:00 - 23:59", name: "食字路口" },
  { date: "2023 年 9 月 08 日", time: "00:00 - 23:59", name: "迎新宿營" },
  { date: "2023 年 9 月 09 日", time: "00:00 - 23:59", name: "迎新宿營" },
  { date: "2023 年 9 月 10 日", time: "00:00 - 23:59", name: "迎新宿營" },
  { date: "2023 年 9 月 11 日", time: "00:00 - 23:59", name: "全校開學日" },
  { date: "2023 年 9 月 22 日", time: "19:00 - 21:00", name: "部員大會" },
  { date: "2023 年 9 月 29 日", time: "00:00 - 23:59", name: "中秋節" },
  { date: "2023 年 10 月 02 日", time: "21:00 - 23:59", name: "1121學期9月份系代會" },
  { date: "2023 年 10 月 02 日", time: "21:00 - 23:59", name: "1121學期9月份結帳" },
  { date: "2023 年 10 月 10 日", time: "00:00 - 23:59", name: "國慶日" },
  { date: "2023 年 10 月 12 日", time: "19:00 - 21:30", name: "青春洋溢，會樂與你" },
  { date: "2023 年 10 月 14 日", time: "08:00 - 18:00", name: "運動會" },
  { date: "2023 年 10 月 26 日", time: "21:00 - 23:59", name: "六系聯合萬聖趴" },
  { date: "2023 年 10 月 30 日", time: "21:00 - 23:59", name: "1121學期10月份系代會" },
  { date: "2023 年 11 月 04 日", time: "00:00 - 23:59", name: "讀書週暨暖心期中宵" },
  { date: "2023 年 11 月 05 日", time: "00:00 - 23:59", name: "讀書週暨暖心期中宵" },
  { date: "2023 年 11 月 06 日", time: "00:00 - 23:59", name: "期中考試週" },
  { date: "2023 年 11 月 07 日", time: "00:00 - 23:59", name: "期中考試週" },
  { date: "2023 年 11 月 08 日", time: "00:00 - 23:59", name: "期中考試週" },
  { date: "2023 年 11 月 09 日", time: "00:00 - 23:59", name: "期中考試週" },
  { date: "2023 年 11 月 10 日", time: "00:00 - 23:59", name: "期中考試週" },
  { date: "2023 年 11 月 13 日", time: "21:00 - 23:59", name: "1121學期10月份結帳" },
  { date: "2023 年 11 月 22 日", time: "00:00 - 23:59", name: "學術演講" },
  { date: "2023 年 11 月 22 日", time: "21:00 - 23:59", name: "1121學期11月份系代會" },
  { date: "2023 年 11 月 27 日", time: "21:00 - 23:59", name: "1121學期11月份結帳" },
  { date: "2023 年 12月 02 日", time: "00:00 - 23:59", name: "全員逃走中" },
  { date: "2023 年 12月 06 日", time: "18:30 - 21:00", name: "致富導航器" },
  { date: "2023 年 12月 15 日", time: "07:45 - 17:30", name: "企業參訪" },
  { date: "2023 年 12月 20 日", time: "00:00 - 23:59", name: "公關傳情" },
  { date: "2023 年 12月 21 日", time: "00:00 - 23:59", name: "公關傳情" },
  { date: "2023 年 12月 22 日", time: "00:00 - 23:59", name: "公關傳情" },
  { date: "2023 年 12 月 18 日", time: "21:00 - 23:59", name: "1121學期12月份系代會" },
  { date: "2024 年 1 月 01 日", time: "00:00 - 23:59", name: "開國紀念日" },
  { date: "2024 年 1 月 08 日", time: "00:00 - 23:59", name: "期末考試週" },
  { date: "2024 年 1 月 09 日", time: "00:00 - 23:59", name: "期末考試週" },
  { date: "2024 年 1 月 10 日", time: "00:00 - 23:59", name: "期末考試週" },
  { date: "2024 年 1 月 11 日", time: "00:00 - 23:59", name: "期末考試週" },
  { date: "2024 年 1 月 12 日", time: "00:00 - 23:59", name: "期末考試週" },
  { date: "2024 年 1 月 15 日", time: "00:00 - 23:59", name: "寒假開始" },
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
