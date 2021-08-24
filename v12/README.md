# 디스코드 봇 오픈소스
이봇은 누구나 사용할수 있는 봇입니다.

# 봇 사용방법

## 설정파일 설정
config.json에 들어가면 

```json
{
"token" : ""
}
```
이런거 보이는데 여기다가 자신이 사용할 봇의 토큰을 넣으면 됨니다.

## 봇의 기능을 추가하는 방법
첫번째로 폴더에 들어거면 `commands` 라는 파일이 보임니다.
```js
commands
    ㄴ chart.js
    ㄴ Conch in magic.js
    ㄴ image.js
    ㄴ luck.js
    ㄴ pubg.js
    ㄴ star.js
    ㄴ Template.js
    ㄴ weather.js

```
여기서 `Template.js`에 들어가 줌니다.
```js
module.exports = {	
	name: '', // 파일이름을 적어주세요.
	execute(message) {        
	const  Discord = require("discord.js"); //안쓸떄는 지워도 되요 근데 오류나면 지우세요.

	},
};

```
저희는 구조를 모듈로 만들었기 때문에  `Template.js` 파일을 참고해서 자기가 원하는 기능을 넣어주세요.

이제 `app.js`에 들어가 줘서 이코드를 확인해 주세요.

```js
  client.on("message", message => {
    var prefix = "" //자신이 원하는 접두사를 정해주세요!
    if (message.content.indexOf(prefix) !== 0) return;
   
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    switch (command){
        case "차트" :
            client.commands.get('chart').execute(message, args);
            break;
        case "프샤" :
            client.commands.get('image').execute(message, args);
            break;
        case "날씨" :
            client.commands.get('weather').execute(message, args);
            break;
        case "배그동접자" :
            client.commands.get('pubg').execute(message, args);
            break;
        case "운세" :
            client.commands.get('luck').execute(message, args);
            break;
        case "별자리" :
            client.commands.get('star').execute(message, args);
            break;
  
          
    };

    if(command === '소라고동','소라고동님','마법에 소라고동') {
      client.commands.get('Conch in magic').execute(message, args);
     }
    });  	

```
위코드에 자기가 만들었던 모듈을 넣어주는데 저는 switch문과 if문 둘다 넣었습니다. 왜냐하면 switch문에서 안되는 경우가 있기때문에 만약에 안되면 if문에서 넣어 보시기 바람니다.

swich문에서 모듈을 추가하는 방법은

```js
        case '명령어 이름 이건 파일이름을 따르지 않아도 됨니다!' {
       	client.commands.get('파일 이름(파일형식은 저거)').execute(message, args);
        breack;
```
이걸 코드에 보이는 것 처럼 아래에 코드를 추가해 주시고 테스트를 진행해주세요.

if문에서 모듈을 추가하는 방법은

```js
        else if(command === '명령어 이름 이건 파일이름을 따르지 않아도 됨니다!') {
        client.commands.get('파일 이름(파일형식은 저거)').execute(message, args);
        }
```
이걸 코드에 보이는 것 처럼 아래에 코드를 추가해 주시고 테스트를 진행해주세요.

이제 모든 작업을 끝났으면 해달 폴더로 이동해주셔서 `node app.js`를 실행해주세요.

# 업데이트
오픈소스라서 업데이트가 느릴수 있습니다

# 업데이트 소식 (0.2.3)
모든기능을 모듈화로 변경 했습니다.

# 기타봇문의
이메일: lyw514549@office.deu.ac.kr
디스코드:https://discord.gg/XVWmPcT
# school-discord-bot
