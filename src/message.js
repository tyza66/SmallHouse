import axios from 'axios';

// Webhook 地址


function sendMessage(oneMessage) {
    // 消息内容
    // 获得当前的时间戳
    const timestamp = Date.now();
    const message = u1 + timestamp + u2 + oneMessage + u3;

    // 发送请求
    axios.get(message)
        .then(response => {
            console.log('Message sent successfully:', response.data);
        })
        .catch(error => {
            console.error('Error sending message:', error);
        });

}

export default sendMessage;
