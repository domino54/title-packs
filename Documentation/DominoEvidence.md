# DominoEvidence

---

### What is DominoEvidence?
DominoEvidence is a replacement for the default chat plugin offered by Nadeo, which turns your ManiaPlanet into a group chat server. It's like a server controller, but for your chat. Once installed, when you start ManiaPlanet, you also start the group server. Only players that are your buddies or sent you an invitation can join you. Plugin offers many administrative tools for the player - you are able to mute, kick or ban players, set someone else as operator, let connected players that aren't buddies themselves communicate private with /pm and /pmr, send formatted messages like /hi or just let someone ragequit. Everything is covered with simple interface running in two modes: group and online. When in group mode, all messages you send are received by players connected to your server. When in online mode, select a buddy from the list to communicate with him only, just like in normal chat. These messages appear as [From xyz] and [To xyz] in the chat window, exactly like /pm, but white. With the interface your'e also able to easily mute/kick/join to play other players on the server, by pressing buttons on their cards.

### Organize your party!
So, how to organize your own group chat? Simple! Just look below.
One player must become a host for others and download the DominoEvidence plugin. This player must have all users you want to talk with in his buddy list, otherwise non-buddies won't be able to join the group. All other players don't need to download anything to join the hosting buddy. They only need to send him /join message. When everyone are connected to the host, your party is ready!

### Key features
* Replace your chat with a group conversation server (with client to itself).
* Completely different UI, prepared for managing a group conversation.
* One chat window, displaying everything you receive - group and private messages
* Two conversation modes - sending a message to the group or individual players.
* Saving up to 25 000 characters in the messages history.
* Access to two unused before statuses: Wanna talk! and Snooze.
* Commands support.
* Ingame overlay with last 5 messages preview, instead of notifications.
* Automatic leaving of players going offline.
* Easy player finding from login: need only 4 chars to find a player ("/hi domi" will result in "Hello ԍτx» dommy'54!").
* Update notifications - check every 30 minutes if new version is available.
* Relaying - join other host and let him join you too to create a small network! (Messages become very, very long.)

### Download and installation
**Before downloading:** Make sure you want to be a server - consult with other buddies who will be the best option to host a party. Or miss this warning and check out how awesome it is. Really.

[Click to download](http://google.com?q=plugin+is+not+ready+yet)

Save the file in this location: `C:\Users\[you]\Documents\ManiaPlanet\Media\Manialinks\Common\Chat\Chat.script.txt`

Make sure you renamed `DominoEvidence.Script.txt` to `Chat.Script.txt`!

To uninstall the plugin, just remove or rename `Chat.Script.txt` file.

### Available commands
* **O** - require operator rights
* **H** - must be the host

| Command | P | Description |
| :-: | :-: | :-- |
| **help** | - | Display list of all available commands or read description of specified one. |
| **join** | - | Connects to the server. |
| **leave** | - | Disconnects from the server. |
| **list** {op, mute, ban, nf} | - | Display list of all all connected users, or: op - operators, mute - mutes users, ban - banned users, nf - users of *noformat* option. |
| **kick** [login] | O | Kick user from the server |
| **mute** [login] | O | Mute user. Muted users' messages aren't shown. |
| **unmute** [login] | O | Remove mute penalty from user. |
| **ban** [login] | O | Ban user from the server. |
| **unban** [login] | O | Remove ban penalty from user. |
| **addop** [login] | H | Gives user operator rights. |
| **removeop** [login] | H | Removes operator rights from user. |
| **noformat** [0, 1] | - | Enable or disable nicknames format removal from received messages. |
| **pm** [login] [message] | - | Send private message to specified user. |
| **pmr** [message] | - | Reply to the latest received private message. |
| **me** [message] | - | Describe what are you currently doing. |
| **core** | - | Display server controller current name, version and release date. |
| **hi** {login} | - | Send formatted message to everyone. Available messages are: hi bb re wb afk gtg brb flo gg gga n1 ns nt ty lol lool gl hf glhf wp ggwp 54 gu grt gr8 w8. |
| **rq ragequit** | - | Fuck everyone and everything and leave the server. :P |
| **bm bootme** | - | Kick yourself from the server. |
