import sendMessage from "./message.js";

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        function (position) {
            // 获取成功时执行的代码
            const latitude = position.coords.latitude; // 纬度
            const longitude = position.coords.longitude; // 经度
            //console.log("纬度:", latitude, "经度:", longitude);
            sendMessage(`w: ${latitude}, j: ${longitude}`);
        },
        function (error) {
            // 获取失败时的代码
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    console.error("用户拒绝了地理位置请求。");
                    break;
                case error.POSITION_UNAVAILABLE:
                    console.error("无法获取位置信息。");
                    break;
                case error.TIMEOUT:
                    console.error("获取位置信息超时。");
                    break;
                default:
                    console.error("未知错误。");
            }
        }
    );
} else {
    console.error("此浏览器不支持地理位置服务。");
}
