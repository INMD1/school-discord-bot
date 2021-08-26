# 폴더 구조 설명
```
v13
ㄴ jsonfile //설정파일들이 저장되는 곳입니다
ㄴ paser  //기숙사 식단 파싱을 하기위한 파일이 있는 곳입니다
ㄴ paserfile // 파싱을 하고 결과를 저장하는 곳입니다
ㄴ public //디스코드 서버에서 작동알 기능들을 모아둔곳입니다
ㄴ screenshot //자동매크로 한 결과를 저장해서 보관하는 파일
ㄴ Secret //민감한 정보는 DM에서 해결하기 때문에 따로 분리한 파일
ㄴ slash_command_refresh //v13 업데이트해서 생긴 커맨드 기능
ㄴ main.js //실행파일(주)
```
# 기능 추가
기능 추가는 v12애서는 `command` 폴더에 한번 적고 기능을 실행시키기 위해서는 app.js에 한번더 적어야 했는데 v13으로 올라오면서 `Secret, public`에 기능들을 적으면 자동으로 불려와 기능을 실행할 수 있게 준비합니다.<br>

[주의사항]<br>
저는 DM으로 따로 작업하는 기능을 넣기 위해 의도와 다르게 만들었습니다. 그래서 서버에서 이 봇을 초대를 했으면 이 기능만 보이게 될 것입니다. <br>
그래서 다른 기능들도 보이게 할 거면 public에 있는 파일을 Secret으로 복사하시기 바랍니다.

 ## 양식
 ```js
 const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping') //명령어
		.setDescription('testing!'), //명령어 설명
	async execute(interaction) {
        // 아래로는 실행할 코드 넣고 보내기
		await interaction.reply('Pong!');
	},

};
```
## 여러 기능들
공식 가이드를 들어가서 참고 하시기 바람니다.<br>
https://discordjs.guide/interactions/replying-to-slash-commands.html



