  // 跑马灯的文本内容
  const marqueeText = 
  "◉歡迎來到中原大學會計系活動報名系統。 ◉致富導航器活動將於2023年12月06日(三)舉行。 ◉企業參訪活動將於2023年12月15日(五)舉行。 ◉致富導航器活動報名系統將於2023年11月20日12:00至2023年12月01日23:59開放報名。 ◉企業參訪活動將於2023年12月15日(五)舉行。 ◉企業參訪活動報名系統將於2023年11月25日12:00至2023年12月01日23:59開放報名。  ◉報名狀態查詢將於2023年12月04日00:00至2023年12月06日23:59開放查詢。";

  const marqueeContentElement = document.getElementById('marquee-content');
  marqueeContentElement.textContent = marqueeText;

  document.addEventListener("DOMContentLoaded", function () {
    var signupButton = document.getElementById("signupButton");
    var signupButton = document.getElementById("signup2Button");
    var statusButton = document.getElementById("statusButton");

    // 定義開放時間範圍
    var signupOpenTime = new Date("2023-11-20T12:00:00+08:00");
    var signupCloseTime = new Date("2023-12-01T23:59:00+08:00");

    var signup2OpenTime = new Date("2023-11-25T13:00:00+08:00");
    var signup2CloseTime = new Date("2023-12-01T23:59:00+08:00");

    var statusOpenTime = new Date("2023-12-04T00:00:00+08:00");
    var statusCloseTime = new Date("2023-12-06T23:59:00+08:00");

    signupButton.addEventListener("click", function () {
        checkOpenTime(signupOpenTime, signupCloseTime);
    });

    signup2Button.addEventListener("click", function () {
        checkOpenTime(signup2OpenTime, signup2CloseTime);
    });

    statusButton.addEventListener("click", function () {
        checkOpenTime(statusOpenTime, statusCloseTime);
    });

    function checkOpenTime(openTime, closeTime) {
        var currentTime = new Date();

        if (currentTime < openTime || currentTime > closeTime) {
            alert("目前非開放時間，請於開放時間再試。 報名時間開放日期為2023/11/20 12:00至2023/12/01 23:59。  報名狀態查詢開放日期為2023/12/04 00:00至2023/12/06 23:59。");
            // 防止點擊動作
            event.preventDefault();
        }
    }
});
