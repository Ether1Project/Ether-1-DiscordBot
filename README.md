## 1. Create a Discord App

- Login to https://discordapp.com/developers/
- "Create an application"
- Give it a name

## 2. Create a bot account

- Navigate `Settings` > `Bot`
- Click `Add Bot` > `Yes, do it!`
- Turn off `PUBLIC BOT` (recommended)

## 3. Collect token

- Click `Copy` token, save it for later configuration

## 4. Create invite link

- Navigate `OAuth2`
- Select `bot` scope
- Select permissions (alternatively, manually set to `59456`)
- Copy inivite link
  - eg `https://discordapp.com/api/oauth2/authorize?client_id=CLIENT_ID&permissions=59456&scope=bot`

## 5. Setup Discord

- Follow the link, add to your server
- Select a bot channel and type `\#botchannel`
- Copy the channel ID, save it for later configuration

## A. Setup server

- Install Node.js

```
apt-get update
apt-get -y install npm
npm install -g npm
npm install -g n
n lts
node -v
```

- Ensure that the output of `node -v` exceeds `v8.xx.x`

## B. Download source code

- Clone repository

```
git clone https://github.com/lukepighetti/ether-1-bot
cd ether-1-bot
npm install
cp config.example.json config.json
```

## C. Configure the bot

- Edit `config.json`
  - to reflect your Discord bot token
  - the Discord ID of the bot channel

## D. Setup Process

- Setup PM2

*PM2 is a production-grade daemon for keeping Node.js processes alive*

```
npm install -g pm2
pm2 start index.js
pm2 startup
pm2 save
```
