## vscode setting

[vscode download](https://code.visualstudio.com/)

## Creating User and Workspace Settings

https://code.visualstudio.com/docs/getstarted/settings

### setting.json 여는 방법
+ File(파일) > Preferences(기본설정) > Settings(설정) (※ Mac의 경우 : Code > Preferences > Settings)
+ Command Palette(`Ctrl`+`Shift`+`P`)를 열어 __Open User Settings__ 과 __Open Workspace Settings__ 를 검색한다. 
+ (`Ctrl`+`,`)

```json
// 설정을 이 파일에 넣어서 기본 설정을 덮어씁니다.
{
    "editor.tabSize": 2,
    "window.zoomLevel": 0,
}
```
### 설정파일 위치
+ __Windows__ %APPDATA%\Code\User\settings.json
+ __Mac__ $HOME/Library/Application Support/Code/User/settings.json
+ __Linux__ $HOME/.config/Code/User/settings.json

## Integrated Terminal

https://code.visualstudio.com/docs/editor/integrated-terminal#_windows

Windows 10에서는 PowerShell, 이전 버전에서는 Windows 용 cmd.exe가 기본값으로 사용된다.  
이러한 설정은 `terminal.integrated.shell. *`을 설정하여 수동으로 재정의 할 수 있다. 

사용할 쉘 경로를 지정한 json구문을 `setting.json`에 추가한다.

### ※ Windows

```json
// Git Bash
"terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe"
```