

## 1. Create a Discord App

* Login to https://discordapp.com/developers/
* "Create an application"
* Give it a name

## 2. Create a bot account

* Navigate `Settings` > `Bot`
* Click `Add Bot` > `Yes, do it!`
* Turn off `PUBLIC BOT` (recommended)

## 3. Collect token

* Click `Copy` token
* Paste it into `config.json`

## 4. Create invite link

* Navigate `OAuth2`
* Select `bot` scope
* Select permissions (alternatively, manually set to `59456`)
* Copy inivite link
  * eg `https://discordapp.com/api/oauth2/authorize?client_id=CLIENT_ID&permissions=59456&scope=bot`



Invite Link

```
https://discordapp.com/oauth2/authorize?client_id=494849754287570946&scope=bot
```