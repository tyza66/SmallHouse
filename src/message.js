import axios from 'axios';

// Webhook 地址
const u1 = 'https://sousou.131.996h.cn/index.php/variable/add?public_key=souosou&private_key=sousou001&key='
const u2 = '&value='
const u3 = '&expiration_date=60000000000000&once=0';

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
