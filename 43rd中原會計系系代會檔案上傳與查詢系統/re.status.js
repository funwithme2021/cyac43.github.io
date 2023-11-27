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
    { "name": "李辰彥", "studentId": "11043250", "role": "致富導航器","activityName": "正取1(AC0001)", "paymentAmount": "新台幣0元整", "gmail": "", "phone": "0910550161","remark": "","remar": "ian20030522@gmail.com"},
    { "name": "邱偉軒", "studentId": "11043101", "role": "致富導航器","activityName": "正取2(AC0002)", "paymentAmount": "新台幣0元整", "gmail": "", "phone": "0911015003","remark": "","remar": "chiu10455019@gmail.com"},
    { "name": "鍾品萬", "studentId": "11043240", "role": "致富導航器","activityName": "正取3(AC0003)", "paymentAmount": "新台幣0元整", "gmail": "", "phone": "0939788115","remark": "","remar": "kevin920418@gmail.com" },
    { "name": "張語芹", "studentId": "11043226", "role": "致富導航器","activityName": "正取4(AC0006)", "paymentAmount": "新台幣0元整", "gmail": "", "phone": "0905438491","remark": "","remar": "mondaylove520@gmail.com"  },
    { "name": "劉品然", "studentId": "11043149", "role": "致富導航器","activityName": "正取5(AC0007)", "paymentAmount": "新台幣0元整", "gmail": "", "phone": "0965069796","remark": "","remar": "sherry77771@yahoo.com"  },
    { "name": "徐佩珊", "studentId": "11043141", "role": "致富導航器","activityName": "正取6(AC0008)", "paymentAmount": "新台幣0元整", "gmail": "", "phone": "0908193290","remark": "","remar": "peishan.cycu@gmail.com"  },
    { "name": "傅昱誠", "studentId": "11243107", "role": "致富導航器","activityName": "正取7(AC0009)", "paymentAmount": "新台幣0元整", "gmail": "", "phone": "0963768300","remark": "","remar": "20050820f@gmail.com"  },
    { "name": "陳姿穎", "studentId": "11143107", "role": "致富導航器","activityName": "正取8(AC0010)", "paymentAmount": "新台幣0元整", "gmail": "", "phone": "0906867221","remark": "","remar": "qazwsxedc99013@gmail.com"  },
    { "name": "張恩瑋", "studentId": "11143126", "role": "致富導航器","activityName": "正取9(AC0012)", "paymentAmount": "新台幣0元整", "gmail": "", "phone": "0926766244","remark": "","remar": "teen930323@gmail.com"  },
    { "name": "黃瑜珮", "studentId": "11143115", "role": "致富導航器","activityName": "正取10(AC0013)", "paymentAmount": "新台幣0元整", "gmail": "", "phone": "0932207126","remark": "","remar": "yupei0419@gmail.com"  },
    { "name": "莊詠緁", "studentId": "11143122", "role": "致富導航器","activityName": "正取11(AC0014)", "paymentAmount": "新台幣0元整", "gmail": "", "phone": "0908927163","remark": "","remar": "emma20030927@gmail.com"  },
    { "name": "孫巧柔", "studentId": "11143214", "role": "致富導航器","activityName": "正取12(AC0015)", "paymentAmount": "新台幣0元整", "gmail": "", "phone": "0902331715","remark": "","remar": "qiaorous@gmail.com"  },
    { "name": "尹暄堯", "studentId": "11143235", "role": "致富導航器","activityName": "正取13(AC0017)", "paymentAmount": "新台幣0元整", "gmail": "", "phone": "0933082773","remark": "","remar": "yinhsuanyao@gmail.com"  },
    { "name": "孫巧馨", "studentId": "11143114", "role": "致富導航器","activityName": "正取14(AC0018)", "paymentAmount": "新台幣0元整", "gmail": "", "phone": "0906171170","remark": "","remar": "0905802445c@gmail.com"  },
    { "name": "郭唐伶", "studentId": "11143137", "role": "致富導航器","activityName": "正取15(AC0019)", "paymentAmount": "新台幣0元整", "gmail": "", "phone": "0900751668","remark": "","remar": "shmps40118@gmail.com"  },
    { "name": "黃珮煊", "studentId": "11043152", "role": "致富導航器","activityName": "正取16(AC0020)", "paymentAmount": "新台幣0元整", "gmail": "", "phone": "0976833613","remark": "","remar": "peggy920214@gmail.com"  },
    { "name": "李芯妮", "studentId": "11043136", "role": "致富導航器","activityName": "正取17(AC0021)", "paymentAmount": "新台幣0元整", "gmail": "", "phone": "0976757795","remark": "","remar": "ni920614@gmail.com"  },
    { "name": "徐唯軒", "studentId": "11043205", "role": "致富導航器","activityName": "正取18(AC0023)", "paymentAmount": "新台幣0元整", "gmail": "", "phone": "0919217568","remark": "","remar": "dennyhsu0713@gmail.com"  },
    { "name": "劉秉華", "studentId": "11043253", "role": "致富導航器","activityName": "正取19(AC0024)", "paymentAmount": "新台幣0元整", "gmail": "", "phone": "0983595185","remark": "","remar": "angel60207@gmail.com"  },
    { "name": "汪育賢", "studentId": "11043223", "role": "致富導航器","activityName": "正取20(AC0025)", "paymentAmount": "新台幣0元整", "gmail": "", "phone": "0985061030","remark": "","remar": "eason10305678@gmail.com"  },
    { "name": "", "studentId": "11043", "role": "致富導航器","activityName": "正取(AC00)", "paymentAmount": "新台幣0元整", "gmail": "", "phone": "","remark": "","remar": ""  },
    { "name": "", "studentId": "11043", "role": "致富導航器","activityName": "正取(AC00)", "paymentAmount": "新台幣0元整", "gmail": "", "phone": "","remark": "","remar": ""  },
    
    { "name": "陳茹筠", "studentId": "11043337", "role": "企業參訪","activityName": "正取1(BU0001)", "paymentAmount": "新台幣100元整", "gmail": "", "phone": "0935166578","remark": "11/29 12:00-13:10於會計系聯收取保證金。","remar": "tiffany920312@yahoo.com.tw"  },
    { "name": "莊凱伊", "studentId": "11043127", "role": "企業參訪","activityName": "正取2(BU0004)", "paymentAmount": "新台幣100元整", "gmail": "", "phone": "0933127665","remark": "11/29 12:00-13:10於會計系聯收取保證金。","remar": "tina08191102@gmail.com"  },
    { "name": "孫巧柔", "studentId": "11143214", "role": "企業參訪","activityName": "正取3(BU0005)", "paymentAmount": "新台幣100元整", "gmail": "", "phone": "0902331715","remark": "11/29 12:00-13:10於會計系聯收取保證金。","remar": "qiaorous@gmail.com"  },
    { "name": "孫巧馨", "studentId": "11143114", "role": "企業參訪","activityName": "正取4(BU0006)", "paymentAmount": "新台幣100元整", "gmail": "", "phone": "0906171170","remark": "11/29 12:00-13:10於會計系聯收取保證金。","remar": "0905802445c@gmail.com"  },
    { "name": "張恩瑋", "studentId": "11143126", "role": "企業參訪","activityName": "正取5(BU0007)", "paymentAmount": "新台幣100元整", "gmail": "", "phone": "0926766244","remark": "11/29 12:00-13:10於會計系聯收取保證金。","remar": "teen930323@gmail.com"  },
    { "name": "郭唐伶", "studentId": "11143137", "role": "企業參訪","activityName": "正取6(BU0008)", "paymentAmount": "新台幣100元整", "gmail": "", "phone": "0900751668","remark": "11/29 12:00-13:10於會計系聯收取保證金。","remar": "shmps40118@gmail.com"  },
    { "name": "陳儀祐", "studentId": "11143226", "role": "企業參訪","activityName": "正取7(BU0009)", "paymentAmount": "新台幣100元整", "gmail": "", "phone": "0908692002","remark": "11/29 12:00-13:10於會計系聯收取保證金。","remar": "yoyo20031208@gmail.com"  },
    { "name": "郭宜睿", "studentId": "11143227", "role": "企業參訪","activityName": "正取8(BU0011)", "paymentAmount": "新台幣100元整", "gmail": "", "phone": "0900350435","remark": "11/29 12:00-13:10於會計系聯收取保證金。","remar": "eva1230913@gmail.com"  },
    { "name": "陳綵瑜", "studentId": "11143352", "role": "企業參訪","activityName": "正取9(BU0012)", "paymentAmount": "新台幣100元整", "gmail": "", "phone": "0971763957","remark": "11/29 12:00-13:10於會計系聯收取保證金。","remar": "rosa20040711@gmail.com"  },
    { "name": "", "studentId": "11043", "role": "企業參訪","activityName": "正取10(BU00)", "paymentAmount": "新台幣100元整", "gmail": "", "phone": "","remark": "11/29 12:00-13:10於會計系聯收取保證金。","remar": ""  },
    { "name": "", "studentId": "11043", "role": "企業參訪","activityName": "正取11(BU00)", "paymentAmount": "新台幣100元整", "gmail": "", "phone": "","remark": "11/29 12:00-13:10於會計系聯收取保證金。","remar": ""  },
    { "name": "", "studentId": "11043", "role": "企業參訪","activityName": "正取12(BU00)", "paymentAmount": "新台幣100元整", "gmail": "", "phone": "","remark": "11/29 12:00-13:10於會計系聯收取保證金。","remar": ""  },
    ];
  
        const matchingAnnouncements = announcements.filter(announcement => {
        return announcement.phone === searchName && announcement.studentId === searchStudentId;
      });  //登入資訊要改成什麼就把announcement.「gmail/studentId」改掉
  
      tableBody.innerHTML = ""; // 清空表格內容
  
      if (matchingAnnouncements.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="5">尚未報名或輸入的內容有誤! 請重新輸入或聯繫協助人員。</td></tr>`;
      } else {
        matchingAnnouncements.forEach(announcement => {
          const newRow = tableBody.insertRow(-1);
          const nameCell = newRow.insertCell(0);
          const studentIdCell = newRow.insertCell(1);
          const roleCell = newRow.insertCell(2);
          const activityNameCell = newRow.insertCell(3);
          const paymentAmountCell = newRow.insertCell(4);
          const remarkCell = newRow.insertCell(5); // 新增的備註欄位
          const remarCell = newRow.insertCell(6); // 新增的備註欄位
        
          nameCell.textContent = announcement.name;
          studentIdCell.textContent = announcement.studentId;
          roleCell.textContent = announcement.role;
          activityNameCell.textContent = announcement.activityName;
          paymentAmountCell.textContent = announcement.paymentAmount;
          remarkCell.textContent = announcement.remark || ''; 
          remarCell.textContent = announcement.remar || '';
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
      }, 50000);
    });
      // 超時提示的自動隱藏
      setTimeout(() => {
        timeoutMessage.style.display = "block";
        setTimeout(() => {
          timeoutMessage.style.display = "none";
        }, 50000);
      }, 50000);
      // 自動關閉結果
      setTimeout(() => {
        searchResult.style.display = "none";
      }, 50000);
    });