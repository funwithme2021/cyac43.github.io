const loginButton = document.getElementById("loginButton");
const loginResult = document.getElementById("loginResult");
const announcementSection = document.getElementById("announcementSection");
const paginationSection = document.getElementById("paginationSection");
const validAccounts = [
    { role: "訪客", username: "訪客", password: "a12345678", name: "訪客" , gmail: "12345678@cycu.org.tw" },
    { role: "紀錄", username: "李芯妮", password: "a11043136", name: "李芯妮" , gmail: "11043136@cycu.org.tw"},
    { role: "主席", username: "邱偉軒", password: "a11043101", name: "邱偉軒" , gmail: "11043101@cycu.org.tw"},
    { role: "會 長", username: "詹沛臻", password: "a11043139", name: "詹沛臻" , gmail: "11043139@cycu.org.tw"},
    { role: "副會長", username: "賴佳均", password: "a11043130", name: "賴佳均" , gmail: "11043130@cycu.org.tw"},
    { role: "副會長", username: "鍾品萬", password: "a11043240", name: "鍾品萬" , gmail: "11043240@cycu.org.tw"},
    { role: "活動部長", username: "張語芹", password: "a11043226", name: "張語芹" , gmail: "11043226@cycu.org.tw"},
    { role: "活動秘書", username: "黃宛婷", password: "a11043202", name: "黃宛婷" , gmail: "11043202@cycu.org.tw"},
    { role: "公關部長", username: "薛詠齡", password: "a11043241", name: "薛詠齡" , gmail: "11043241@cycu.org.tw"},
    { role: "公關秘書", username: "陳茹筠", password: "a11043337", name: "陳茹筠" , gmail: "11043337@cycu.org.tw"},
    { role: "體育部長", username: "李辰彥", password: "a11043250", name: "李辰彥" , gmail: "11043250@cycu.org.tw"},
    { role: "體育秘書", username: "黃珮煊", password: "a11043152", name: "黃珮煊" , gmail: "11043152@cycu.org.tw"},
    { role: "美宣部長", username: "徐筱茹", password: "a11043207", name: "徐筱茹" , gmail: "11043207@cycu.org.tw"},
    { role: "文書部長", username: "吳婉如", password: "a11043143", name: "吳婉如" , gmail: "11043143@cycu.org.tw"},
    { role: "學術部長", username: "鄭葦瑧", password: "a11043214", name: "鄭葦瑧" , gmail: "11043214@cycu.org.tw"},
    { role: "執行秘書", username: "鍾岱璉", password: "a11043126", name: "鍾岱璉" , gmail: "11043126@cycu.org.tw"},
    { role: "資產委員", username: "呂承恩", password: "a11043210", name: "呂承恩" , gmail: "11043210@cycu.org.tw"},
    { role: "資產委員", username: "陳庭嫻", password: "a11043138", name: "陳庭嫻" , gmail: "11043138@cycu.org.tw"},
    { role: "資產委員", username: "林明君", password: "a11043107", name: "林明君" , gmail: "11043107@cycu.org.tw"},
    { role: "財務委員", username: "徐佩珊", password: "a11043141", name: "徐佩珊" , gmail: "11043141@cycu.org.tw"}, 
    { role: "財務委員", username: "陳冠瑜", password: "a11043104", name: "陳冠瑜" , gmail: "11043104@cycu.org.tw"},
    { role: "財務委員", username: "郭璇潔", password: "a11043109", name: "郭璇潔" , gmail: "11043109@cycu.org.tw"},
    { role: "會 計", username: "林姮儀", password: "a11043238", name: "林姮儀" , gmail: "11043238@cycu.org.tw"},
    { role: "出 納", username: "劉品然", password: "a11043149", name: "劉品然" , gmail: "11043149@cycu.org.tw"},
    { role: "鯊魚", username: "林愷威", password: "a11113106", name: "林愷威" , gmail: "11113106@cycu.org.tw"},
    { role: "教職人員", username: "教師", password: "a00000000", name: "教師" , gmail: "00000000@cycu.org.tw"},
  ];
  loginButton.addEventListener("click", () => {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const inputUsername = usernameInput.value;
  const inputPassword = passwordInput.value;
  const validAccount = validAccounts.find(account => 
    account.username === inputUsername && account.password === inputPassword
  );

  if (validAccount) {
    loginResult.style.color = "green";
    loginResult.textContent = `登入成功，歡迎 ${validAccount.name} ${validAccount.role}!`;
    announcementSection.style.display = "block"; // 顯示檔案列表區域

    // 設定登入有效時間為0.5分鐘 (30秒)
    const expirationTime = new Date().getTime() + 0.5 * 60 * 1000;
    localStorage.setItem("loginExpiration", expirationTime);

    // 0.5分鐘後檢查是否超時
    setTimeout(() => {
      const currentTime = new Date().getTime();
      const loginExpTime = parseInt(localStorage.getItem("loginExpiration"));

      if (currentTime > loginExpTime) {
        // 登入超時，隱藏內容並提示重新登入
        announcementSection.style.display = "none";
        paginationSection.style.display = "none"; // 額外隱藏分頁區域
        alert("已超時，請重新登入！");
      }
    }, 10 * 60 * 1000);

    // 登入成功的程式碼
    paginationSection.style.display = "block"; // 顯示分頁區域
    // 清空帳號和密碼欄位
usernameInput.value = "";
passwordInput.value = "";
  } else {
    loginResult.style.color = "red";
    loginResult.textContent = "登入失敗，請重新登入！";
    announcementSection.style.display = "none"; // 隱藏檔案列表區域
    paginationSection.style.display = "none"; // 隱藏分頁區域
  }
});
    document.getElementById("itemsPerPageSelect").addEventListener("change", () => {
        itemsPerPage = parseInt(document.getElementById("itemsPerPageSelect").value);
        currentPage = 1;
        updateAnnouncementTable();
        updatePagination();
    });
    const announcements = [
    {
    date: "2023-07-20",
    title: "結算表",
    note: "<a href='https://reurl.cc/QXDez5'>金計機國的闖關者(1112)</a>"
  },
  {
    date: "2023-07-20",
    title: "查核表",
    note: "<a href='https://reurl.cc/nDXreX'>金計機國的闖關者(1112)</a>"
  },
  {
    date: "2023-07-20",
    title: "結算表",
    note: "<a href='https://reurl.cc/WGWRe7'>海綿寶寶會救我(1112)</a>"
  },
  {
    date: "2023-07-20",
    title: "結算明細表",
    note: "<a href='https://reurl.cc/QXDe1o'>海綿寶寶會救我(1112)</a>"
  },
  {
    date: "2023-07-20",
    title: "查核表",
    note: "<a href='https://reurl.cc/N0D45m'>海綿寶寶會救我(1112)</a>"
  },
  {
    date: "2023-07-20",
    title: "結算表",
    note: "<a href='https://reurl.cc/qLXr9R'>常會(下)(1112)</a>"
  },
  {
    date: "2023-07-20",
    title: "查核表",
    note: "<a href='https://reurl.cc/94y7d8'>常會(下)(1112)</a>"
  },
  {
    date: "2023-07-20",
    title: "決算表",
    note: "<a href='https://reurl.cc/EoD4qA'>新生搬宿(1121)</a>"
  },
  {
    date: "2023-07-20",
    title: "決算表",
    note: "<a href='https://reurl.cc/dmmxV6'>新生註冊(1121)</a>"
  },
  {
    date: "2023-07-20",
    title: "決算表",
    note: "<a href='https://reurl.cc/L6677a'>新生手冊(1121)</a>"
  },
  {
    date: "2023-07-20",
    title: "決算明細表",
    note: "<a href='https://reurl.cc/0ZZx26'>新生手冊(1121)</a>"
  },
  {
    date: "2023-07-20",
    title: "決算表",
    note: "<a href='https://reurl.cc/qLXVzD'>常會(上)(1121)</a>"
  },
  {
    date: "2023-07-20",
    title: "決算明細表",
    note: "<a href='https://reurl.cc/9RR5GX'>常會(上)(1121)</a>"
  },
  {
    date: "2023-07-20",
    title: "決算表",
    note: "<a href='https://reurl.cc/8j7v4o'>食字路口(1121)</a>"
  },
  {
    date: "2023-07-20",
    title: "決算明細表",
    note: "<a href='https://reurl.cc/XmmljM'>食字路口(1121)</a>"
  },
  {
    date: "2023-07-20",
    title: "決算表",
    note: "<a href='https://reurl.cc/y7XL16'>迎新宿營(1121)</a>"
  },
  {
    date: "2023-07-20",
    title: "決算明細表",
    note: "<a href='https://reurl.cc/p6X3nr'>迎新宿營(1121)</a>"
  },
  {
    date: "2023-07-20",
    title: "決算表",
    note: "<a href='https://reurl.cc/v7Xa3a'>分區迎新(1121)</a>"
  },
  {
    date: "2023-07-20",
    title: "應收退預算表",
    note: "<a href='https://reurl.cc/OjjEN9'>112年6月份(1112)</a>"
  },
  {
    date: "2023-07-20",
    title: "發預算表",
    note: "<a href='https://reurl.cc/MyyXKX'>112年6月份(1121)</a>"
  },
  {
    date: "2023-07-20",
    title: "現金帳",
    note: "<a href='https://reurl.cc/x661VN'>112年5月份(1112)</a>"
  },
  {
    date: "2023-07-20",
    title: "帳簿",
    note: "<a href='https://reurl.cc/7MMjzl'>112年5月份(1112)</a>"
  },
  {
    date: "2023-09-20",
    title: "開會通知",
    note: "<a href='https://reurl.cc/3ejNWl'>112年6月份(1121)</a>"
  },
  {
    date: "2023-09-20",
    title: "開會通知",
    note: "<a href='https://reurl.cc/E1p2e0'>112年9月份(1121)</a>"
  },
  {
    date: "2023-09-20",
    title: "會議簽到",
    note: "<a href='https://reurl.cc/nLEnM6'>112年6月份(1121)</a>"
  },
  {
    date: "2023-09-20",
    title: "會議紀錄",
    note: "<a href='https://reurl.cc/Ryj6ox'>112年6月份(1121)</a>"
  },
  {
    date: "2023-10-02",
    title: "檢討會",
    note: "<a href='https://reurl.cc/XmmlR3'>新生搬宿(1121)</a>"
  },
  {
    date: "2023-10-02",
    title: "檢討會",
    note: "<a href='https://reurl.cc/2EEo6v'>新生手冊(1121)</a>"
  },
  {
    date: "2023-10-02",
    title: "檢討會",
    note: "<a href='https://reurl.cc/y6YanO'>部員大會(1121)</a>"
  },
  {
    date: "2023-10-02",
    title: "企劃書",
    note: "<a href='https://reurl.cc/gaazGR'>期初佈置(1121)</a>"
  },
  {
    date: "2023-10-02",
    title: "企劃書",
    note: "<a href='https://reurl.cc/q001r3'>青春洋溢，會樂與你(1121)</a>"
  },
  {
    date: "2023-10-02",
    title: "企劃書",
    note: "<a href='https://reurl.cc/4WWXN3'>校慶運動會(1121)</a>"
  },
  {
    date: "2023-10-02",
    title: "企劃書",
    note: "<a href='https://reurl.cc/l77576'>六系聯合萬聖趴(1121)</a>"
  },
  {
    date: "2023-10-02",
    title: "決算表",
    note: "<a href='https://reurl.cc/L66Xza'>期初佈置(1121)</a>"
  },
  {
    date: "2023-10-02",
    title: "決算表",
    note: "<a href='https://reurl.cc/K33XWR'>青春洋溢，會樂與你(1121)</a>"
  },
  {
    date: "2023-10-02",
    title: "決算明細表",
    note: "<a href='https://reurl.cc/y66m86'>青春洋溢，會樂與你(1121)</a>"
  },
  {
    date: "2023-10-02",
    title: "決算表",
    note: "<a href='https://reurl.cc/RyyOVn'>校慶運動會(1121)</a>"
  },
  {
    date: "2023-10-02",
    title: "決算明細表",
    note: "<a href='https://reurl.cc/o55Z23'>校慶運動會(1121)</a>"
  },
  {
    date: "2023-10-02",
    title: "決算表",
    note: "<a href='https://reurl.cc/9RR1NX'>六系聯合萬聖趴(1121)</a>"
  },
  {
    date: "2023-10-02",
    title: "結算表",
    note: "<a href='https://reurl.cc/p55gYZ'>新生搬宿(1121)</a>"
  },
  {
    date: "2023-10-02",
    title: "查核表",
    note: "<a href='https://reurl.cc/0ZZ6Yl'>新生搬宿(1121)</a>"
  },
  {
    date: "2023-10-02",
    title: "結算表",
    note: "<a href='https://reurl.cc/8NN3bX'>新生註冊(1121)</a>"
  },
  {
    date: "2023-10-02",
    title: "查核表",
    note: "<a href='https://reurl.cc/bllG1v'>新生註冊(1121)</a>"
  },
  {
    date: "2023-10-02",
    title: "結算表",
    note: "<a href='https://reurl.cc/bllXNM'>新生手冊(1121)</a>"
  },
  {
    date: "2023-10-02",
    title: "結算明細表",
    note: "<a href='https://reurl.cc/0ZZjmb'>新生手冊(1121)</a>"
  },
  {
    date: "2023-10-02",
    title: "查核表",
    note: "<a href='https:1234567890.COM'>新生手冊(1121)(免查核表)</a>"
  },
  {
    date: "2023-10-02",
    title: "結算表",
    note: "<a href='https://reurl.cc/E14vn1'>食字路口(1121)</a>"
  },
  {
    date: "2023-10-02",
    title: "結算明細表",
    note: "<a href='https://reurl.cc/o55gXg'>食字路口(1121)</a>"
  },
  {
    date: "2023-10-02",
    title: "查核表",
    note: "<a href='https://reurl.cc/8NN51j'>食字路口(1121)</a>"
  },
  {
    date: "2023-10-02",
    title: "結算表",
    note: "<a href='https://reurl.cc/V4NoER'>分區迎新(1121)</a>"
  },
  {
    date: "2023-10-02",
    title: "查核表",
    note: "<a href='https://reurl.cc/MyyXYv'>分區迎新(1121)</a>"
  },
  {
    date: "2023-10-02",
    title: "應收退預算表",
    note: "<a href='https://reurl.cc/o55gaM'>112年9月份(1121)</a>"
  },
  {
    date: "2023-10-02",
    title: "發預算表",
    note: "<a href='https://reurl.cc/1GpenD'>112年9月份(1121)</a>"
  },
  {
    date: "2023-10-02",
    title: "現金帳",
    note: "<a href='https://reurl.cc/Xmqblj'>112年9月份(1112)</a>"
  },
  {
    date: "2023-10-02",
    title: "帳簿",
    note: "<a href='https://reurl.cc/E14vZ1'>112年9月份(1112)</a>"
  },
  {
    date: "2023-10-02",
    title: "會議簽到",
    note: "<a href='https://reurl.cc/nLLoj2'>112年9月份(1121)</a>"
  },
  {
    date: "2023-10-02",
    title: "會議紀錄",
    note: "<a href='https://reurl.cc/p55Zkl'>112年9月份(1121)</a>"
  },
  {
    date: "2023-10-09",
    title: "預算領取簽證",
    note: "<a href='https://reurl.cc/0Z9ejY'>常會(上)(1121)</a>"
  },
  {
    date: "2023-10-24",
    title: "預算領取簽證",
    note: "<a href='https://reurl.cc/dmqNmV'>食字路口(1121)</a>"
  },
  {
    date: "2023-10-24",
    title: "預算領取簽證",
    note: "<a href='https://reurl.cc/jvmzvD'>六系聯合萬聖趴(一)(1121)</a>"
  },
  {
    date: "2023-10-24",
    title: "預算領取簽證",
    note: "<a href='https://reurl.cc/4WbKWL'>六系聯合萬聖趴(二)(1121)</a>"
  },
  {
    date: "2023-10-24",
    title: "預算領取簽證",
    note: "<a href='https://reurl.cc/MyMpyL'>青春洋溢，會樂與你(1121)</a>"
  },
  {
    date: "2023-10-24",
    title: "預算領取簽證",
    note: "<a href='https://reurl.cc/Wv86v9'>校慶運動會(1121)</a>"
  },
  {
    date: "2023-10-24",
    title: "預算領取簽證",
    note: "<a href='https://reurl.cc/NyNvyk'>分區迎新(1121)</a>"
  },
  {
    date: "2023-10-24",
    title: "開會通知",
    note: "<a href='https://reurl.cc/2El1z6'>112年10月份(1121)</a>"
  },
  {
    date: "2023-10-30",
    title: "會議簽到",
    note: "<a href='https://reurl.cc/NynkMQ'>112年10月份(1121)</a>"
  },
  {
    date: "2023-10-30",
    title: "會議紀錄",
    note: "<a href='https://reurl.cc/gaxOAL'>112年10月份(1121)</a>"
  },
  {
    date: "2023-11-01",
    title: "企劃書",
    note: "<a href='https://reurl.cc/Xm3d8a'>公關傳情(1121)</a>"
  },
  {
    date: "2023-11-01",
    title: "企劃書",
    note: "<a href='https://reurl.cc/Xmbl8M'>全員逃走中(1121)</a>"
  },
  {
    date: "2023-11-01",
    title: "企劃書",
    note: "<a href='https://reurl.cc/jvegE2'>學術演講(1121)</a>"
  },
  {
    date: "2023-11-01",
    title: "企劃書",
    note: "<a href='https://reurl.cc/0ZypQl'>讀書週暨暖心期中宵(1121)</a>"
  },
  {
    date: "2023-11-01",
    title: "檢討會",
    note: "<a href='https://reurl.cc/NyDke5'>分區迎新(1121)</a>"
  },
  {
    date: "2023-11-01",
    title: "檢討會",
    note: "<a href='https://reurl.cc/E1D3An'>新生註冊(1121)</a>"
  },
  {
    date: "2023-11-01",
    title: "檢討會",
    note: "<a href='https://reurl.cc/2EOoR9'>迎新宿營(1121)</a>"
  },
  {
    date: "2023-11-01",
    title: "檢討會",
    note: "<a href='https://reurl.cc/V4o5b6'>食字路口(1121)</a>"
  },
  {
    date: "2023-11-01",
    title: "檢討會",
    note: "<a href='https://reurl.cc/OjokKA'>青春洋溢，會樂與你(1121)</a>"
  },
  {
    date: "2023-11-01",
    title: "檢討會",
    note: "<a href='https://reurl.cc/QZo6q0'>校慶運動會(1121)</a>"
  },
  {
    date: "2023-11-02",
    title: "決算表",
    note: "<a href='https://reurl.cc/3eZo4L'>讀書週暨暖心期中宵(1121)</a>"
  },
  {
    date: "2023-11-02",
    title: "決算明細表",
    note: "<a href='https://reurl.cc/L6Zml9'>讀書週暨暖心期中宵(1121)</a>"
  },
  {
    date: "2023-11-02",
    title: "決算表",
    note: "<a href='https://reurl.cc/a47nZY'>全員逃走中(1121)</a>"
  },
  {
    date: "2023-11-02",
    title: "決算明細表",
    note: "<a href='https://reurl.cc/nLR1m2'>全員逃走中(1121)</a>"
  },
  {
    date: "2023-11-02",
    title: "決算表",
    note: "<a href='https://reurl.cc/6QeEdM'>學術演講(1121)</a>"
  },
  {
    date: "2023-11-02",
    title: "決算明細表",
    note: "<a href='https://reurl.cc/gaE0GR'>學術演講(1121)</a>"
  },
  {
    date: "2023-11-02",
    title: "決算表",
    note: "<a href='https://reurl.cc/RyDaXZ'>公關傳情(1121)</a>"
  },
  {
    date: "2023-11-02",
    title: "決算明細表",
    note: "<a href='https://reurl.cc/z6XmN0'>公關傳情(1121)</a>"
  },
  {
    date: "2023-11-02",
    title: "發預算表",
    note: "<a href='https://reurl.cc/E1arr1'>112年10月份(1121)</a>"
  },
  {
    date: "2023-11-11",
    title: "現金帳",
    note: "<a href='https://reurl.cc/Y0ojzo'>112年08月份(1112)</a>"
  },
  {
    date: "2023-11-11",
    title: "帳簿",
    note: "<a href='https://reurl.cc/MyoklX'>112年08月份(1112)(01)</a>"
  },
  {
    date: "2023-11-11",
    title: "帳簿",
    note: "<a href='https://reurl.cc/9R95Kv'>112年08月份(1112)(02)</a>"
  },
  {
    date: "2023-11-11",
    title: "現金帳",
    note: "<a href=''>112年07月份(1112)(無)</a>"
  },
  {
    date: "2023-11-11",
    title: "帳簿",
    note: "<a href=''>112年07月份(1112)(無)</a>"
  },
  {
    date: "2023-11-11",
    title: "現金帳",
    note: "<a href='https://reurl.cc/9R95la'>112年06月份(1112)</a>"
  },
  {
    date: "2023-11-11",
    title: "帳簿",
    note: "<a href='https://reurl.cc/6QRDoy'>112年06月份(1112)</a>"
  },
  {
    date: "2023-11-14",
    title: "結算表",
    note: "<a href=''>迎新宿營(1121)</a>"
  },
  {
    date: "2023-11-14",
    title: "結算明細表",
    note: "<a href=''>迎新宿營(1121)</a>"
  },
  {
    date: "2023-11-14",
    title: "結算表",
    note: "<a href='https://reurl.cc/kabZd3'>青春洋溢，會樂與你(1121)</a>"
  },
  {
    date: "2023-11-14",
    title: "結算明細表",
    note: "<a href='https://reurl.cc/K3zAky'>青春洋溢，會樂與你(1121)</a>"
  },
  {
    date: "2023-11-14",
    title: "結算表",
    note: "<a href='https://reurl.cc/Ry70d6'>校慶運動會(1121)</a>"
  },
  {
    date: "2023-11-14",
    title: "結算明細表",
    note: "<a href='https://reurl.cc/x6bGDe'>校慶運動會(1121)</a>"
  },
  {
    date: "2023-11-14",
    title: "查核表",
    note: "<a href=''>迎新宿營(1121)</a>"
  },
  {
    date: "2023-11-14",
    title: "查核表",
    note: "<a href='https://reurl.cc/kabZM9'>青春洋溢，會樂與你(1121)</a>"
  },
  {
    date: "2023-11-14",
    title: "查核表",
    note: "<a href='https://reurl.cc/E1Nngn'>校慶運動會(1121)</a>"
  },
  {
    date: "2023-11-04",
    title: "應收退預算表",
    note: "<a href='https://reurl.cc/A0WkkK'>112年10月份(1121)</a>"
  },
  {
    date: "2023-11-17",
    title: "開會通知",
    note: "<a href='https://reurl.cc/gayNob'>112年11月份(1121)</a>"
  },
  {
    date: "2023-11-27",
    title: "會議簽到",
    note: "<a href='https://reurl.cc/Wv9eL9'>112年11月份(1121)</a>"
  },
  {
    date: "2023-11-27",
    title: "會議紀錄",
    note: "<a href='https://reurl.cc/Y0zMW0'>112年11月份(1121)</a>"
  },
  {
    date: "2023-11-27",
    title: "應收退預算表",
    note: "<a href='https://reurl.cc/nLgQ3X'>112年11月份(1121)</a>"
  },
  {
    date: "2023-11-27",
    title: "結算表",
    note: "<a href='https:'>(1121)</a>"
  },
  {
    date: "2023-11-27",
    title: "結算表",
    note: "<a href='https://reurl.cc/a4W0v4'>六系聯合萬聖趴(1121)</a>"
  },
  {
    date: "2023-11-27",
    title: "結算表",
    note: "<a href='https://reurl.cc/Ojy713'>期初佈置(1121)</a>"
  },
  {
    date: "2023-11-27",
    title: "結算明細表",
    note: "<a href='https://reurl.cc/2EdM0E'>讀書週暨暖心期中宵(1121)</a>"
  },
  {
    date: "2023-11-27",
    title: "結算表",
    note: "<a href='https://reurl.cc/1G5jQX'>讀書週暨暖心期中宵(1121)</a>"
  },
  {
    date: "2023-11-27",
    title: "檢討會",
    note: "<a href='https://reurl.cc/a4W054'>讀書週暨暖心期中宵(1121)</a>"
  },
  {
    date: "2023-11-27",
    title: "檢討會",
    note: "<a href='https://reurl.cc/Ny71rQ'>期初佈置(1121)</a>"
  },
  {
    date: "2023-11-27",
    title: "檢討會",
    note: "<a href='https://reurl.cc/Wv2aXD'>六系聯合萬聖趴(1121)</a>"
  },
  {
    date: "2023-11-27",
    title: "發預算表",
    note: "<a href='https://reurl.cc/GK3Zlv'>112年11月份(1121)</a>"
  },
  {
    date: "2023-11-27",
    title: "決算表",
    note: "<a href='https://reurl.cc/GK3ZvW'>企業參訪(1121)</a>"
  },
  {
    date: "2023-11-27",
    title: "決算明細表",
    note: "<a href='https://reurl.cc/kazNWr'>企業參訪(1121)</a>"
  },
  {
    date: "2023-11-27",
    title: "決算表",
    note: "<a href='https://reurl.cc/V4dpg5'>致富導航器(1121)</a>"
  },
  {
    date: "2023-11-27",
    title: "決算明細表",
    note: "<a href='https://reurl.cc/v6Z32L'>致富導航器(1121)</a>"
  },


  {
    date: "2023-11-27",
    title: "結算表",
    note: "<a href='https:'>(1121)</a>"
  },

  {
    date: "2023-11-27",
    title: "結算明細表",
    note: "<a href='https:'>(1121)</a>"
  },
  {
    date: "2023-11-20",
    title: "查核表",
    note: "<a href='https:'>(1121)</a>"
  },
  {
    date: "2023-12-05",
    title: "開會通知",
    note: "<a href='htt'>112年12月份(1121)</a>"
  },  
  {
    date: "2023-12-20",
    title: "會議簽到",
    note: "<a href='https:'>112年11月份(1121)</a>"
  },
  {
    date: "2023-12-20",
    title: "會議紀錄",
    note: "<a href='https:'>112年11月份(1121)</a>"
  },

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
            <th>上傳日期</th>
            <th>檔案類別</th>
            <th>檔案名稱(點擊下載)</th>
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
  filteredAnnouncements = announcements.filter((announcement) => {
    return (
      (announcement.title.includes(keyword) || announcement.note.includes(keyword)) &&
      (selectedKeyword === "" || announcement.title.includes(selectedKeyword) || announcement.note.includes(selectedKeyword) || selectedKeyword === "全部檔案類別")
    );
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
  const keywordSelect = document.getElementById("keywordSelect");
  const selectedKeyword = keywordSelect.value;

  if (selectedKeyword) {
    // 如果选择了特定关键字，则使用选择的关键字进行过滤
    searchAnnouncements(selectedKeyword);
  } else if (keyword) {
    // 如果未选择特定关键字但输入了关键字，则使用输入的关键字进行过滤
    searchAnnouncements(keyword);
  }
});

document.getElementById("searchInput").addEventListener("input", () => {
  const keywordSelect = document.getElementById("keywordSelect");
  keywordSelect.value = ""; // 重置选择的关键字

  const searchInput = document.getElementById("searchInput");
  const keyword = searchInput.value.trim();

  if (keyword === "") {
    searchAnnouncements(""); // 使用空字符串进行搜索，以显示所有公告信息
  } else {
    searchAnnouncements(keyword);
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

document.getElementById("keywordSearchButton").addEventListener("click", () => {
  const keywordSelect = document.getElementById("keywordSelect");
  const selectedKeyword = keywordSelect.value;

  if (selectedKeyword === "") {
    searchAnnouncements(""); // 使用空字符串进行搜索，以显示所有公告信息
  } else {
    searchAnnouncements(selectedKeyword);
  }
});
let selectedKeyword = ""; // 在全局范围内定义 selectedKeyword 变量