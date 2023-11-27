const activities = [
    { name: "海綿寶寶會救我!有怪獸!", status: ["completed", "completed", "completed"] },
    { name: "金計機國的闖關者", status: ["completed", "completed", "completed"] },
    { name: "新生手冊", status: ["completed", "completed", "completed"] },
    { name: "分區迎新", status: ["completed", "completed", "completed"] },
    { name: "新生搬宿", status: ["completed", "completed", "completed"] },
    { name: "新生註冊", status: ["completed", "completed", "completed"] },
    { name: "食字路口", status: ["completed", "completed", "completed"] },
    { name: "迎新宿營", status: ["completed", "completed", "incomplete"] },
    { name: "常會(上)", status: ["completed", "incomplete", "incomplete"] },
    { name: "青春洋溢，會樂與你", status: ["completed", "completed", "completed"] },
    { name: "六系聯合萬聖趴", status: ["completed", "completed", "completed"] },
    { name: "校慶運動會", status: ["completed", "completed", "completed"] },
    { name: "期初佈置", status: ["completed", "completed", "completed"] },
    { name: "全員逃走中", status: ["completed", "incomplete", "incomplete"] },
    { name: "公關傳情", status: ["completed", "incomplete", "incomplete"] },
    { name: "學術演講", status: ["completed", "incomplete", "incomplete"] },
    { name: "讀書週暨暖心期中宵", status: ["completed", "completed", "completed"] },
    { name: "致富導航器", status: ["completed", "incomplete", "incomplete"] },
    { name: "企業參訪", status: ["completed", "incomplete", "incomplete"] },
];

function addActivity() {
    const activityName = document.getElementById('activityName').value;
    const status = document.getElementById('status').value;
    const activity = { name: activityName, status: [status, status, status] };
    activities.push(activity);
    document.getElementById('activityName').value = '';
    updateTable();
}

function getActivityColor(status) {
    if (status.every(s => s === 'completed')) {
        return 'completed';
    } else if (status.every(s => s === 'incomplete')) {
        return 'incomplete';
    } else {
        return 'partially-completed';
    }
}

function updateTable() {
    const activityTable = document.getElementById('activityTable');
    activityTable.innerHTML = '<tr><th>活動名稱</th><th>系代會</th><th>檢討會</th><th>結帳</th><th>活動狀態</th></tr>';

    activities.forEach(activity => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${activity.name}</td>`;
        activity.status.forEach(status => {
            const cell = document.createElement('td');
            cell.classList.add(status === 'completed' ? 'completed' : status === 'incomplete' ? 'incomplete' : 'partially-completed');
            cell.textContent = status === 'completed' ? 'O' : status === 'incomplete' ? 'X' : '△';
            row.appendChild(cell);
        });

        const statusCell = document.createElement('td');
        const statusColor = getActivityColor(activity.status);
        // 检查檢討會部分是否为叉，如果是则将活动状态设为"尚未完成"
        if (activity.status[1] === 'incomplete') {
            statusCell.classList.add('incomplete');
            statusCell.textContent = '尚未完成';
        } else {
            statusCell.classList.add(statusColor);
            statusCell.textContent = statusColor === 'completed' ? '已完成' : statusColor === 'incomplete' ? '尚未完成' : '部份完成';
        }
        row.appendChild(statusCell);

        activityTable.appendChild(row);
    });
}

function filterTable() {
    const filterStatus = document.getElementById('filterStatus').value;
    const activityRows = document.querySelectorAll('#activityTable tr');
    activityRows.forEach((row, index) => {
        if (index === 0) {
            return; // Skip header row
        }

        const statusCell = row.querySelector('td:last-child');
        if (filterStatus === 'all' || statusCell.classList.contains(filterStatus)) {
            row.style.display = 'table-row';
        } else {
            row.style.display = 'none';
        }
    });
}

function searchTable() {
    const searchText = document.getElementById('searchActivity').value.toLowerCase();
    const activityRows = document.querySelectorAll('#activityTable tr');
    activityRows.forEach((row, index) => {
        if (index === 0) {
            return; // Skip header row
        }

        const activityName = row.querySelector('td:first-child').textContent.toLowerCase();
        if (activityName.includes(searchText)) {
            row.style.display = 'table-row';
        } else {
            row.style.display = 'none';
        }
    });
}

updateTable();