# [Party Parrot Bot](https://t.me/PartyParrotBot)

The only Slack reaction gif's you'll ever need. Now on Telegram.

## ![](https://raw.githubusercontent.com/jmhobbs/cultofthepartyparrot.com/master/parrots/confusedparrot.gif) How to use

1. Tag the [Party Parrot Bot](https://t.me/PartyParrotBot) with @partyparrotbot.
2. Click an image or filter more by typing a name of a party parrot.
3. Party all night long.

## ![](https://github.com/jmhobbs/cultofthepartyparrot.com/raw/master/parrots/shipitparrot.gif) Deployment

1.  Make sure NodeJS and NPM are installed.
2.  Install dependencies with `npm i`.
3.  Compile the TypeScript files `tsc`.
4.  Fill in your Telegram API code (and raven token if you have one) in `config/default.json`.
5.  Start the party: `npm start`.

## ![](https://raw.githubusercontent.com/jmhobbs/cultofthepartyparrot.com/master/parrots/congaparrot.gif) Docker support

Party Parrot Bot has support for [docker](https://hub.docker.com/r/dsluijk/partyparrot/), and it's really simple:

```Bash
docker run
  -e NODE_CONFIG='{
    "telegramAuth": "YOUR_TELEGRAM_TOKEN",
    "raven": "YOUR_OPTIONAL_RAVEN_TOKEN"
  }'
  -d
  dsluijk/partyparrot
```

## ![](https://github.com/jmhobbs/cultofthepartyparrot.com/raw/master/parrots/thumbsupparrot.gif) Things to check out

- [Cult of the party parrot](http://cultofthepartyparrot.com/)
- [Sirocco](https://www.youtube.com/watch?v=9T1vfsHYiKY)
