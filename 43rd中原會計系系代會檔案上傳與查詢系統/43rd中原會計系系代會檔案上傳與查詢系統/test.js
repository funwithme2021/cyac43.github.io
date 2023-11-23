<div class="overlay" id="overlay">
<div class="modal">
    <p align="left">「<b>預算表、預算明細表</b>」請使用<b>pdf檔</b>上傳；<br>
                    「<b>查核表</b>」請使用<b>Excel檔</b>上傳；<br>
                    「<b>現金帳、帳簿、發預算表、應收退預算表</b>」請<b>截圖後使用圖片</b>上傳；<br>
                    「<b>其他檔案</b>」請使用<b>pdf檔</b>上傳。
    </p>
    <button class="modal-button" onclick="closeModal()">確定</button>
</div>
</div>

<script>
      // 获取提示框和遮罩层的引用
      const overlay = document.getElementById('overlay');

      // 显示提示框
      function openModal() {
          overlay.style.display = 'flex';
      }

      // 关闭提示框
      function closeModal() {
          overlay.style.display = 'none';
      }

      // 在页面加载后显示提示框
      window.addEventListener('load', openModal);

  </script>