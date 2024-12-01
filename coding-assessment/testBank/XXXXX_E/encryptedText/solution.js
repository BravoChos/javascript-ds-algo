function solution(encrypted_text, key, rotation) {
  var answer = "";
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  let obj = {};
  let num = 1;
  for (let i = 0; i < alpha.length; i++) {
    obj[alpha[i]] = num;
    obj[num] = alpha[i];
    num++;
  }

  function rotateArray(_text, _number) {
    if (_number < 0) {
      let share = _text.length - (Math.abs(_number) % _text.length);
      let splicedText = _text.splice(0, share);
      return _text.concat(splicedText).join("");
    } else {
      let share = _number % _text.length;
      let splicedText = _text.splice(0, share);
      return _text.concat(splicedText).join("");
    }
  }
  let decrypted_text = rotateArray(encrypted_text.split(""), rotation);

  for (let j = 0; j < decrypted_text.length; j++) {
    let cal = obj[decrypted_text[j]] - obj[key[j]];
    if (cal <= 0) {
      cal = 26 + cal;
    }
    answer = answer + obj[cal];
  }
  return answer;
}
// abcdefg hijklmnop qrstuv wx yz => 26
// 100%
