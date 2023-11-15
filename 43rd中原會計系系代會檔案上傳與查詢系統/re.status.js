$(document).ready(function () {
    const generateAccountAndPassword = (name, studentId) => {
        const account = name;
        const password =  studentId;
      return { account, password };
    };
    const timeoutMessage = document.getElementById("timeoutMessage");
    const searchResult = document.getElementById("searchResult");
    const searchNameInput = document.getElementById("searchName");
    const searchStudentIdInput = document.getElementById("searchStudentId");
    const tableBody = document.getElementById("tableBody");
    document.getElementById("searchButton").addEventListener("click", function () {
    const searchName = searchNameInput.value;
    const searchStudentId = searchStudentIdInput.value;
    timeoutMessage.style.display = "none"; // 隱藏超時訊息
    const announcements = 
    [
    { "name": "鄭葦瑧", "studentId": "11043214", "role": "正取2(A0002)" , "gmail": "11043214@cycu.org.tw"},
    { "name": "邱偉軒", "studentId": "11043101", "role": "正取1(A0001)" , "gmail": "11043101@cycu.org.tw"},
    ];
  
        const matchingAnnouncements = announcements.filter(announcement => {
        return announcement.name === searchName && announcement.studentId === searchStudentId;
      });
  
      tableBody.innerHTML = ""; // 清空表格內容
  
      if (matchingAnnouncements.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="5">尚未報名或輸入的內容有誤! 請重新輸入或聯繫協助人員。</td></tr>`;
      } else {
        matchingAnnouncements.forEach(announcement => {
          const newRow = tableBody.insertRow(-1);
          const nameCell = newRow.insertCell(0);
          const studentIdCell = newRow.insertCell(1);
          const roleCell = newRow.insertCell(2);
          const accountCell = newRow.insertCell(3);
          const passwordCell = newRow.insertCell(4);
          nameCell.textContent = announcement.name;
          studentIdCell.textContent = announcement.studentId;
          roleCell.textContent = announcement.role;
          const generatedData = generateAccountAndPassword(announcement.name, announcement.studentId);
          accountCell.textContent = generatedData.account;
          passwordCell.textContent = generatedData.password;
        });
      }
      // 清空輸入框
      searchNameInput.value = "";
      searchStudentIdInput.value = "";
      // 顯示結果
      searchResult.style.display = "block";
      // 自動關閉結果
      setTimeout(() => {
        searchResult.style.display = "none";
      }, 30000);
    });
      // 超時提示的自動隱藏
      setTimeout(() => {
        timeoutMessage.style.display = "block";
        setTimeout(() => {
          timeoutMessage.style.display = "none";
        }, 30000);
      }, 30000);
      // 自動關閉結果
      setTimeout(() => {
        searchResult.style.display = "none";
      }, 30000);
    });