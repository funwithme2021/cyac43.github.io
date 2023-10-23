
        const activities = [
            { name: "海綿寶寶會救我!有怪獸!", status: ["completed", "completed", "completed"] },
            { name: "金計機國的闖關者", status: ["completed", "completed", "completed"] },
            { name: "新生手冊", status: ["completed", "completed", "completed"] },
            { name: "分區迎新", status: ["completed", "incomplete", "completed"] },
            { name: "新生搬宿", status: ["completed", "completed", "completed"] },
            { name: "新生註冊", status: ["completed", "incomplete", "completed"] },
            { name: "十字路口", status: ["completed", "incomplete", "completed"] },
            { name: "迎新宿營", status: ["completed", "incomplete", "incomplete"] },
            { name: "常會(上)", status: ["completed", "incomplete", "incomplete"] },
            { name: "青春洋溢，會樂與你", status: ["completed", "incomplete", "incomplete"] },
            { name: "六系聯合萬聖趴", status: ["completed", "incomplete", "incomplete"] },
            { name: "校慶運動會", status: ["completed", "incomplete", "incomplete"] },
            { name: "期初佈置", status: ["completed", "incomplete", "incomplete"] },
        ];

        function addActivity() {
            const activityName = document.getElementById('activityName').value;
            const status = document.getElementById('status').value;
            const activity = { name: activityName, status: [status, status, status] };
            activities.push(activity);
            document.getElementById('activityName').value = '';
            updateTable();
        }

        function updateTable() {
            const activityTable = document.getElementById('activityTable');
            activityTable.innerHTML = '<tr><th>活動名稱</th><th>系代會</th><th>檢討會</th><th>結帳</th><th>活動狀態</th></tr>';

            activities.forEach(activity => {
                const row = document.createElement('tr');
                row.innerHTML = `<td>${activity.name}</td>`;
                activity.status.forEach(status => {
                    const cell = document.createElement('td');
                    cell.classList.add(status === 'completed' ? 'completed' : 'incomplete');
                    cell.textContent = status === 'completed' ? 'O' : 'X';
                    row.appendChild(cell);
                });

                const statusCell = document.createElement('td');
                statusCell.classList.add(activity.status.every(s => s === 'completed') ? 'completed' : 'incomplete');
                statusCell.textContent = activity.status.every(s => s === 'completed') ? '已完成' : '尚未完成';
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
    

