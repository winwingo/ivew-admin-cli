

function check_Float(rule, value, callback){
  if (!value) {
    return callback();
  }
  let patrn = /^[-\\+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/;
  if (patrn.exec(value) == null) {
    callback(new Error('请输入数字格式'));
  }
  callback();
}
