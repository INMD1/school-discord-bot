# 동의대 1학년 창소 디코방 서버 봇
![image](https://cdn.discordapp.com/avatars/826082134766780426/8ed343a5eddafc07a68eb7621089573a.png)<br><br>
이봇은 저희 창소디코방에서 쓰이는 봇입니다.<br>
(봇 이미지입니다...)

⚠ 리드미 작성중입니다.

## V12
V12는 `discord.js@12.5.3`기반으로 제작된 봇입니다.<br>
-> 하지만 v13으로 바뀌면서 기반을 살짝 변경중이니 오류가 나면 [issues]("https://github.com/INMD1/school-discord-bot/issues")로 제보 해주시기 바람니다.

## V13
V13는 `discord.js@13.1.0`기반으로 제작된 봇입니다.<br><br>

# 봇 사용법

## node.js && 라이브러리 설치

### v12
```
node.js(아무버전이나 상관없습);

*라이브러리
discord.js
os
moment
moment-timezone
cheerio
request
weather-js
node-schedule
```

### v13
```
node.js(최신버전);

*라이브러리
os
discord.js
moment
moment-timezone
cheerio
request
weather-js
puppeteer
node-schedule
```
## 설정파일 설정

### v12
config.json을 만들어서 이런 양식으로 해주세요.

```
{
"token" : ""
}
```

이런거 보이는데 여기다가 자신이 사용할 봇의 토큰을 넣으면 됨니다.<br>
준비가 다되었으면 `node app`을 입력해주세요<br><br>
또 기숙사 식단 정보도 파싱을 해야하기 때문에 다른 창을 이용해서 paser로 들어가서 `node timer` 실행해주세요<br>

### v13
v13폴더를 들어가서 config template.json을 찾으세요

```
{
    "admim" :"",
    "clientId": "",
    "guildId": "",
    "token" : ""
    
}  
```
여기서 보면 `admim,clientId,guildId`이 보이는데 admim은 넣지 않아도 되고 clientId,guildId넣고 `config.json`으로 `다른이름 저장`해주세요
이런거 보이는데 여기다가 자신이 사용할 봇의 토큰을 넣으면 됨니다.<br>
준비가 다되었으면 `node main`을 입력해주세요<br><br>

## 다른 사람들이 내용이 안보인다고 할경우
이 상황은 제가 답변을 자기만 볼수 있게 설정했기 때문입니다. 그걸 풀려면 config.josn에서 `see: false`를 `ture`로 바꿔주세요.

## 봇 개조
제 봇은 개조를 해도됨니다.
설명은 각 폴더안에 넣어두겟습니다.
