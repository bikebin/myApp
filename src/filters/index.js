//后台传回的时间戳 ==> 2018-10-20
export function normalTime(time)  {
  if (time) {
    var odate = new Date(time);
    var year = odate.getFullYear();
    var month = odate.getMonth() + 1;
    var day = odate.getDate();
    var hours = odate.getHours()>10?odate.getHours():'0'+odate.getHours();
    var minutes = odate.getMinutes()>10?odate.getMinutes():'0'+odate.getMinutes();
    var seconds = odate.getSeconds()>10?odate.getSeconds():'0'+odate.getSeconds();
    return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
  }
}
//后台传回的时间戳 ==> 2018年10月20日
export function getDate (timestamp) {
  var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var Y = date.getFullYear() + '年';
  var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '月';
  var D = date.getDate() < 10 ?  '0'+date.getDate() : date.getDate() + '日';
  return Y+M+D;
}
export function changeType(num)  {
  return `￥${num}`
}

//手机用**隐藏
export function hideNumber(val) {
  //包头不包尾
  return val.substr(0,3) + '****' + val.substr(7,10)
}


