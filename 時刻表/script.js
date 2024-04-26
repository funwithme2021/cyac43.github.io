// 列車資訊陣列
const trainSchedule = [
    {
      trainNumber: '101',
      trainType: '新自強',
      route: '台北 ⇨ 高雄',
      departureTime: '08:00',
      arrivalTime: '10:30',
      duration: '2 小時 30 分鐘',
      stops: [
        { station: '台北', departureTime: '08:00' },
        { station: '板橋', departureTime: '08:15' },
        // 其他停靠站
        { station: '高雄', departureTime: '10:30' },
      ],
    },
    // 其他列車資訊
  ];
  
  // 根據起訖站查詢列車資訊
  function searchByStations() {
    const startStation = document.getElementById('startStation').value;
    const endStation = document.getElementById('endStation').value;
    const result = document.getElementById('result');
  
    // 根據起訖站過濾列車資訊
    const filteredTrains = trainSchedule.filter(train =>
      train.stops.some(stop =>
        stop.station === startStation && stop.station === endStation
      )
    );
  
    displayResult(filteredTrains);
  }
  
  // 根據車站查詢所有列車資訊
  function searchByStation() {
    const stationName = document.getElementById('station').value;
    const result = document.getElementById('result');
  
    // 根據車站過濾列車資訊
    const filteredTrains = trainSchedule.filter(train =>
      train.stops.some(stop => stop.station === stationName)
    );
  
    displayResult(filteredTrains);
  }
  
  // 根據車次查詢列車資訊
  function searchByTrainNumber() {
    const trainNumber = document.getElementById('trainNumber').value;
    const result = document.getElementById('result');
  
    // 根據車次查找列車資訊
    const foundTrain = trainSchedule.find(train => train.trainNumber === trainNumber);
  
    if (foundTrain) {
      displayResult([foundTrain]);
    } else {
      result.innerHTML = '找不到該車次的列車資訊。';
    }
  }
  
  // 顯示查詢結果
  function displayResult(trains) {
    const result = document.getElementById('result');
  
    if (trains.length > 0) {
      result.innerHTML = '<h2>查詢結果：</h2>';
      trains.forEach(train => {
        result.innerHTML += `
          <div>
            <strong>車次：</strong>${train.trainNumber}<br>
            <strong>車種：</strong>${train.trainType}<br>
            <strong>起訖站：</strong>${train.route}<br>
            <strong>出發時間：</strong>${train.departureTime}<br>
            <strong>抵達時間：</strong>${train.arrivalTime}<br>
            <strong>行車時間：</strong>${train.duration}<br>
          </div>
        `;
        // 如果是根據車次查詢，顯示停靠站詳細資訊
        if (train.stops) {
          result.innerHTML += '<strong>停靠站：</strong><ul>';
          train.stops.forEach(stop => {
            result.innerHTML += `<li>${stop.station} - ${stop.departureTime}</li>`;
          });
          result.innerHTML += '</ul>';
        }
      });
    } else {
      result.innerHTML = '找不到符合條件的列車資訊。';
    }
  }
  