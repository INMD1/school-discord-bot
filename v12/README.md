## 봇의 기능을 추가하는 방법
첫번째로 폴더에 들어거면 `commands` 라는 파일이 보임니다.
```
commands
    ㄴ chart
    ㄴ foodt.js
    ㄴ food.js
    ㄴ luck.js
    ㄴ schoolfood.js
    ㄴ star.js
    ㄴ Template.js
    ㄴ weather.js
```
여기서 `Template.js`에 들어가 줌니다.
```
module.exports = {	
	name: '', // 파일이름을 적어주세요.
	execute(message) {        
	const  Discord = require("discord.js"); //안쓸떄는 지워도 되요 근데 오류나면 지우세요.
	},
};
```
저희는 구조를 모듈로 만들었기 때문에  `Template.js` 파일을 참고해서 자기가 원하는 기능을 넣어주세요.

이제 `app.js`에 들어가 줘서 이코드를 확인해 주세요.

```
  client.on("message", message => {
    var prefix = "" //자신이 원하는 접두사를 정해주세요!
    if (message.content.indexOf(prefix) !== 0) return;
   
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    switch (command){
        case "날씨" :
            client.commands.get('weather').execute(message, args);
            break;
        case "운세" :
            client.commands.get('luck').execute(message, args);
            break;
        case "별자리" :
            client.commands.get('star').execute(message, args);
            break;
        case "식단정보" :
             client.commands.get('food').execute(message, args);
            break;
        case "내식" :
              client.commands.get('food_t').execute(message, args);
            break;
        case "차트" :
              client.commands.get('chart').execute(message, args);
            break; 
        case "학식" :
              client.commands.get('schoolfood').execute(message, args);
            break;     
    };
   });  	
```
위코드에 자기가 만들었던 모듈을 넣어주는데 저는 switch문과 if문 둘다 넣었습니다. 왜냐하면 switch문에서 안되는 경우가 있기때문에 만약에 안되면 if문에서 넣어 보시기 바람니다.

swich문에서 모듈을 추가하는 방법은

```
        case '명령어 이름 이건 파일이름을 따르지 않아도 됨니다!' {
       	client.commands.get('파일 이름(파일형식은 저거)').execute(message, args);
        breack;
```
이걸 코드에 보이는 것 처럼 아래에 코드를 추가해 주시고 테스트를 진행해주세요.

## 여러 기능들
제가 다 알려드릴수 없기 때문에 공식 가이드를 들어가서 참고 하시기 바람니다.<br>
하시다가 안되는 거는 issues에 들어가서 문의해주세요!<br>
https://v12.discordjs.guide/