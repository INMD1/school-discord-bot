# 사용법
이래에 있는 걸 설치해 주세요.
```
node.js

node.js 라이브러리
 
puppeteer
node-schedule
moment
moment-timezone
```
그리고 `node timer`를 입력을 해주시고 실행하시면 자동으로 정보를 가지고 와서 저장을 합니다.

그려면 hyomin.json이랑 happy.json에 데이터가 저장이 됨니다.

```
이번에 따로 반복할 파일 그리고 반복하지 파일을 따로 분리를 해놓았습니다.
반복문 O

timer_week.js

반복문 X

timer.js

*반복을 안할 경우 아래에 라이브러리는 설치 안해도 됨니다.

node-schedule
moment
moment-timezone

```

# 타이머 설정
```js
const schedule = require('node-schedule');
const rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [0, new schedule.Range(0, 4)];
rule.hour = 00
rule.minute = 01;
const k = schedule.scheduleJob(rule, () => {
    var moment = require('moment'); 
    require('moment-timezone'); 
    moment.tz.setDefault("Asia/Seoul"); 
    var date = moment().format('YYYY-MM-DD HH:mm:ss');
    console.log("데이터를 수집함니다.");
    console.log(date);
    data();
})
```
현재 저는 node-schedule 타이머를 설정해서 자동으로 실행하게 만들었습니다
기본값은 월~금 00시01분에 자동으로 실행하게 설정 했는데 요일을 바꾸고 싶으면 
```js
rule.dayOfWeek = [0, new schedule.Range(0, 4]; //요일 설정 (월:1 화:2 수:3 목:4 금:5 토:6 일:0)
rule.hour = 00 //시간
rule.minute = 01; //분
```
이부분을 바꾸면 됨니다.
만약에 자신은 타이머가 필요가 없고 한번만 실행할 경우 위에 내용을 지워버리고
```
data();
```
을 넣어서 실행을 해주면 바로 실행이 됨니다.
