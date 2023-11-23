$(document).ready(function () {
    const generateAccountAndPassword = (name, studentId) => {
      const account = name;
      const password = 'a' + studentId;
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
    const announcements = [
    { "name": "訪客", "studentId": "12345678", "role": "訪客" , "gmail": "12345678@cycu.org.tw" },
    { "name": "李芯妮", "studentId": "11043136", "role": "紀錄" , "gmail": "11043136@cycu.org.tw"},
    { "name": "邱偉軒", "studentId": "11043101", "role": "主席" , "gmail": "11043101@cycu.org.tw"},
    { "name": "詹沛臻", "studentId": "11043139", "role": "會 長" , "gmail": "11043139@cycu.org.tw"},
    { "name": "賴佳均", "studentId": "11043130", "role": "副會長" , "gmail": "11043130@cycu.org.tw"},
    { "name": "鍾品萬", "studentId": "11043240", "role": "副會長" , "gmail": "11043240@cycu.org.tw"},
    { "name": "張語芹", "studentId": "11043226", "role": "活動部長" , "gmail": "11043226@cycu.org.tw"},
    { "name": "黃宛婷", "studentId": "11043202", "role": "活動秘書" , "gmail": "11043202@cycu.org.tw"},
    { "name": "薛詠齡", "studentId": "11043241", "role": "公關部長" , "gmail": "11043241@cycu.org.tw"},
    { "name": "陳茹筠", "studentId": "11043337", "role": "公關秘書" , "gmail": "11043337@cycu.org.tw"},
    { "name": "李辰彥", "studentId": "11043250", "role": "體育部長" , "gmail": "11043250@cycu.org.tw"},
    { "name": "黃珮煊", "studentId": "11043152", "role": "體育秘書" , "gmail": "11043152@cycu.org.tw"},
    { "name": "徐筱茹", "studentId": "11043207", "role": "美宣部長" , "gmail": "11043207@cycu.org.tw"},
    { "name": "吳婉如", "studentId": "11043143", "role": "文書部長" , "gmail": "11043143@cycu.org.tw"},
    { "name": "鄭葦瑧", "studentId": "11043214", "role": "學術部長" , "gmail": "11043214@cycu.org.tw"},
    { "name": "鍾岱璉", "studentId": "11043126", "role": "執行秘書" , "gmail": "11043126@cycu.org.tw"},
    { "name": "呂承恩", "studentId": "11043210", "role": "資產委員" , "gmail": "11043210@cycu.org.tw"},
    { "name": "陳庭嫻", "studentId": "11043138", "role": "資產委員" , "gmail": "11043138@cycu.org.tw"},
    { "name": "林明君", "studentId": "11043107", "role": "資產委員" , "gmail": "11043107@cycu.org.tw"},
    { "name": "徐佩珊", "studentId": "11043141", "role": "財務委員" , "gmail": "11043141@cycu.org.tw"},
    { "name": "陳冠瑜", "studentId": "11043104", "role": "財務委員" , "gmail": "11043104@cycu.org.tw"},
    { "name": "郭璇潔", "studentId": "11043109", "role": "財務委員" , "gmail": "11043109@cycu.org.tw"},
    { "name": "林姮儀", "studentId": "11043238", "role": "會 計" , "gmail": "11043238@cycu.org.tw"},
    { "name": "劉品然", "studentId": "11043149", "role": "出 納" , "gmail": "11043149@cycu.org.tw"},
    { "name": "林愷威", "studentId": "11113106", "role": "鯊魚" , "gmail": "11113106@cycu.org.tw"},
    { "name": "教職人員", "studentId": "00000000", "role": "教職人員" , "gmail": "00000000@cycu.org.tw"},
        ];
  
        const matchingAnnouncements = announcements.filter(announcement => {
        return announcement.name === searchName && announcement.studentId === searchStudentId;
      });
  
      tableBody.innerHTML = ""; // 清空表格內容
  
      if (matchingAnnouncements.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="5">尚未註冊或輸入的內容有誤! 請重新輸入或連繫協助人員。</td></tr>`;
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