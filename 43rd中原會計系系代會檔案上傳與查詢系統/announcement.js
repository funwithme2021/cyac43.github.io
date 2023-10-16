document.getElementById("itemsPerPageSelect").addEventListener("change", () => {
  itemsPerPage = parseInt(document.getElementById("itemsPerPageSelect").value);
  currentPage = 1;
  updateAnnouncementTable();
  updatePagination();
});
const announcements = [
{
date: "2023-07-20",
title: "每日13-14時及每週六0-6時為維護時段，暫停使用。",
note: "網頁維護公告"
},
{
date: "2023-10-11",
title: "電腦與手機版本網頁已完成修復，同步上線中，歡迎使用。",
note: "網頁上線公告"
},
{
date: "2023-10-09",
title: "112年10月30日21時0分，於中原大學管理大樓401室辦理1121學年度10月份結帳。",
note: "結帳通知公告"
},
{
date: "2023-10-09",
title: "112年10月30日21時0分，於中原大學管理大樓401室辦理1121學年度10月份系代會。",
note: "<a href='https:'>開會通知公告</a>"
},
{
date: "2023-09-20",
title: "112年10月2日21時0分，於中原大學管理大樓401室辦理1121學年度9月份結帳。",
note: "結帳通知公告"
},
{
date: "2023-09-20",
title: "112年10月2日21時0分，於中原大學管理大樓401室辦理1121學年度9月份系代會。",
note: "<a href='https://reurl.cc/E1p2e0'>開會通知公告</a>"
},
{
date: "2023-09-09",
title: "自112年9月9日起，簡易版本網頁停止運作，請使用電腦版本網頁操作。",
note: "網頁停止公告"
},
{
date: "2023-08-10",
title: "自112年8月10日起，簡易版本網頁內檔案查詢系統停止更新，請使用電腦版本網頁操作。",
note: "網頁停止公告"
},
{
date: "2023-08-05",
title: "電腦版本網頁",
note: "<a href='https://funwithme2021.github.io/cyac43.github.io/43rd%E4%B8%AD%E5%8E%9F%E6%9C%83%E8%A8%88%E7%B3%BB%E7%B3%BB%E4%BB%A3%E6%9C%83%E6%AA%94%E6%A1%88%E4%B8%8A%E5%82%B3%E8%88%87%E6%9F%A5%E8%A9%A2%E7%B3%BB%E7%B5%B1/index.html'>點擊進入系統</a>"
},
{
date: "2023-07-20",
title: "簡易版本網頁",
note: "<a href='https://unwithme2021.github.io/43rdac.github.io/43rd%E4%B8%AD%E5%8E%9F%E6%9C%83%E8%A8%88%E7%B3%BB%E7%B3%BB%E5%AD%B8%E6%9C%83%E6%AA%94%E6%A1%88%E4%B8%8A%E5%82%B3%E8%88%87%E6%9F%A5%E8%A9%A2%E4%B8%8A%E5%82%B3%E7%B3%BB%E7%B5%B1/index.html?fbclid=IwAR0FnADHDKRIGK2IvE-0p7Yri8e7WUJvBoaqs2dGFdnWpgcSBU2annykUyw'>點擊進入系統</a>"
},
{
date: "2023-07-15",
title: "網頁測試中",
note: "網頁上線公告"
},


// 輸入公告區// 輸入公告區// 輸入公告區// 輸入公告區// 輸入公告區// 輸入公告區// 輸入公告區// 輸入公告區// 輸入公告區
// 輸入公告區// 輸入公告區// 輸入公告區// 輸入公告區// 輸入公告區// 輸入公告區// 輸入公告區// 輸入公告區// 輸入公告區
// 輸入公告區// 輸入公告區// 輸入公告區// 輸入公告區// 輸入公告區// 輸入公告區// 輸入公告區// 輸入公告區// 輸入公告區
// 輸入公告區// 輸入公告區// 輸入公告區// 輸入公告區// 輸入公告區// 輸入公告區// 輸入公告區// 輸入公告區// 輸入公告區
// 輸入公告區// 輸入公告區// 輸入公告區// 輸入公告區// 輸入公告區// 輸入公告區// 輸入公告區// 輸入公告區// 輸入公告區
// 輸入公告區// 輸入公告區// 輸入公告區// 輸入公告區// 輸入公告區// 輸入公告區// 輸入公告區// 輸入公告區// 輸入公告區
];

let itemsPerPage = 10; // 初始每页显示的公告数量
let currentPage = 1;
let filteredAnnouncements = [...announcements];

function updateAnnouncementTable() {
const table = document.getElementById("announcementTable");
const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const currentPageAnnouncements = filteredAnnouncements.slice(startIndex, endIndex);

table.innerHTML = `
  <thead>
    <tr>
      <th>公告日期</th>
      <th>公告事項</th>
      <th>備註</th>
    </tr>
  </thead>
  <tbody>
    ${currentPageAnnouncements.map((announcement) => `
      <tr>
        <td>${announcement.date}</td>
        <td>${announcement.title}</td>
        <td>${announcement.note}</td>
      </tr>
    `).join("")}
  </tbody>
`;
}

function updatePagination() {
  const prevPageBtn = document.getElementById("prevPageBtn");
const nextPageBtn = document.getElementById("nextPageBtn");
const currentPageElement = document.getElementById("currentPage");
const totalPagesElement = document.getElementById("totalPages"); // 新增获取总页数的元素

prevPageBtn.disabled = currentPage === 1;
nextPageBtn.disabled = currentPage * itemsPerPage >= filteredAnnouncements.length;

currentPageElement.textContent = currentPage;
totalPagesElement.textContent = Math.ceil(filteredAnnouncements.length / itemsPerPage); // 更新总页数
}

function searchAnnouncements(keyword) {
  const searchInput = document.getElementById("searchInput"); // 正确引用搜索输入框元素
filteredAnnouncements = announcements.filter((announcement) => {
return announcement.title.includes(keyword) || announcement.note.includes(keyword);
});

currentPage = 1;
updateAnnouncementTable();
updatePagination();

// 如果没有符合条件的公告，则显示查无资料
const table = document.getElementById("announcementTable");
if (filteredAnnouncements.length === 0) {
table.innerHTML = "<tr><td colspan='3'>查無資料，請重新輸入關鍵字</td></tr>";
}
}
// 初始化
updateAnnouncementTable();
updatePagination();

// 事件处理
document.getElementById("prevPageBtn").addEventListener("click", () => {
if (currentPage > 1) {
  currentPage--;
  updateAnnouncementTable();
  updatePagination();
}
});

document.getElementById("nextPageBtn").addEventListener("click", () => {
if (currentPage * itemsPerPage < filteredAnnouncements.length) {
  currentPage++;
  updateAnnouncementTable();
  updatePagination();
}
});

document.getElementById("searchButton").addEventListener("click", () => {
const searchInput = document.getElementById("searchInput");
const keyword = searchInput.value.trim();
if (keyword) {
  searchAnnouncements(keyword);
}
});

// 在搜索框内输入时，显示所有公告
document.getElementById("searchInput").addEventListener("input", () => {
if (!searchInput.value.trim()) {
  filteredAnnouncements = announcements;
  updateAnnouncementTable();
  updatePagination();
}
});


document.getElementById("toggleSidebar").addEventListener("click", function () {
const sidebar = document.querySelector(".sidebar");
sidebar.classList.toggle("hide-sidebar");

const content = document.querySelector(".content");
content.classList.toggle("expanded");
});
document.getElementById("toggleSidebar").addEventListener("click", function () {
const sidebar = document.querySelector(".sidebar");
sidebar.classList.toggle("hide-sidebar");

const content = document.querySelector(".content");
content.classList.toggle("expanded");
});
