const nodemailer = require('nodemailer');

// 创建一个SMTP传输器
const transporter = nodemailer.createTransport({
  service: 'SMTP', // 你的SMTP服务提供商
  auth: {
    user: '你的邮箱@gmail.com', // 发送邮件的邮箱地址
    pass: '你的邮箱密码或应用程序密码' // 发送邮件的邮箱密码或应用程序密码
  }
});

// 封装发送邮件的函数
function sendEmail(name, role, recipientEmail) {
  // 构建邮件内容
  const mailOptions = {
    from: '你的邮箱@gmail.com', // 发件人邮箱地址
    to: recipientEmail, // 收件人邮箱地址
    subject: '邮件主题',
    text: `${name}，您已於${getCurrentTime()}登入43rd中原大學會計學系代會檔案上傳與查詢系統之檔案上傳系統，若非本人操作，请尽速联系协助人员处理。`
  };

  // 发送邮件
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('发送邮件失败：' + error);
    } else {
      console.log('邮件已发送：' + info.response);
    }
  });
}

// 获取当前时间并格式化
function getCurrentTime() {
  const now = new Date();
  return now.toLocaleTimeString('zh-TW');
}

module.exports = sendEmail;

