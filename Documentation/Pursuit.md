# TrackMania² Pursuit

---

![pursuit-header](http://dominolink.aq.pl/common/pursuit.jpg)

### What is Pursuit?
Pursuit is a simple gamemode, where players can interact with other cars. Players are split into two teams: **Thieves** and **Police**. Thieves have to hide from Police and Police has to catch all the Thieves.

At the beginning of each round everyone join Thieves team and drive away from Spawn. After 15 seconds the first Policeman is randomly choosed. You can also request yourself as the first Policeman by pressing "Give up" key (Delete). During the round Police is chasing Theives. Thief is caught when a Policeman **drives through** him. Caught Thieves respawn and join the Police team. If the all Thieves are caught, the Police wins the round. If time reach limit Thieves are the round winners. If only one Thief remains when time ends, he becomes the round winner.

While the Police can respawn without limits, Thieves have to **wait 30 seconds** before they got respawn. Thieves can respawn instantly only before first Policeman is choosed.

If someone joins the game before first Policeman is choosed, he can start as Thief. If he joins too late, he becomes a Policeman.

**Pro tips**
* Color at bottom of screen tells you in which team you are.
* Make your clanmates and opponents visible :) (change their visibility by pressing **O**).
* Activate name tags to realize who is in which team (show/hide them with **~**).
* Make sure you turned on *Show all opponents* option in ManiaPlanet launcher.
* Bind "Freelook" (rear camera view) to any key to to see opponents from behind you.
* You can quickly remind the basic rules in Pause > Help menu.

Mode is created by **domino54** from Poland. Contact me wia ManiaPlanet forum (en/pl only):
https://forum.maniaplanet.com/ucp.php?i=pm&mode=compose&u=5031

---

### Scoring

* **+1** when someone is caught and you're still a Thief. **+1** *Sv* in scores table.
* **+2** for catching a Thief as the Police. **+1** *Cp* in scores table.
* **+5** for being a Thief when time reach the limit.
* **+*special calculation* **for beeing the first Policeman.

In scores table "Sv" means survival and "Cp" captures. Survival and capture stats in scores table are reset after round end. When map is over, these columns show summary of points from all previous rounds.

---

### Interface
![interface-screenshot](http://dominolink.aq.pl/common/instruction.jpg)
* 1. Thieves counter
* 2. Policemen conter
* 3. Your speed and traveled distance (or spectated player's)
* 4. Your position in ranking (or spectated player's)
* 5. Respawn safe time icon
* 6. Information for what you just got points
* 7. Thief respawn countdown
* 8. Global messages (someone caught someone, etc.)
* 9. Time to the end of the round
* 10. Window with police request instructions and your toss chance
* 11. MiniMap (experimental, activate with **F6**)

As seen above Police names are marked **Blue** and Thieves names are marked **Red**.

---

### Build a map

To build a map, just follow these instructions:
* Just build open complicated track with hidden or hard to find finish.
* Use multilap start instead open track start, if you want. Players wont respawn when they finish a lap.
* Border your map with something tall (eg. mountains) to prevent players going outside.
* Fill or avoid areas, where players can glitch under block or out of map.
* Don't place turbos in two way roads - players won't slow down when driving from opposite direction.
* Don't make hard to reach spots. Better create many easy ones and wide spaces between them.
* 64x64 Stadium base is way too big for Hide and Seek maps.

---

### Functions

#### Rounds
`S_RoundsPerMap 3`

Map is divided into 3 rounds by default. This amount can be changed in settings.

#### Dynamic time limit
`S_TimePerThief 60`

Every time someone is caught, the time limit changes in specific way. Basically, script cuts time limit to `Thieves amount x 60 seconds`. If time is smaller than new value, it's just kept unchanged. Time per Thief can be changed in game mode settings.

#### Safe time
Every time you respawn, you have 3 seconds safe time (after "321Go") disabling interaction with other players. This allows Thieves to respawn without pression, that AFK Police can catch them. This affects Police too - they can't catch anyone for the first seconds after respawn.

#### Going outside of the map
If anyone go outside of the editor construction area, he is respawned automatically. If anyone fall under the map using a glitch or bug, he is respawned too. Respawned players are warned with a big message.

#### Anti-camping plugin
`S_AntiCampPlugin True`

With this option on, Thieves that stand on a single block for longer than 30 seconds start to respawn automatically. The only way to abort respawn countdown timer is driving 200 meters away from the spot the player was camping.

#### Labels visibility
`S_LabelsVisibility False`

The nicknames over cars can be displayed through walls. This can be changed any time and affects all players on the server. Spectators always see everyone names.

#### Reseting leavers scores
`S_ResetScoreLeavers True`

At the end of the map, scores of all players that left the game or switched into spectator mode are reset to 0. This option can be turned off.

#### AFK manager
`S_AutoManageAFK True`

With AFK manager on, inactive (not moving for 2 minutes) Police players are forced to spectate the game. To be able to play again, just disable spectator mode in the pause menu.

#### MiniMap (experimental)
The Minimap is hidden by default. You can enable it by pressing **F6** key. Map displays your (or spectated player's) position and team color. If you don't spectate anyone, MiniMap is in map global overview mode. It will later display last Thief position as well as marker over him.

#### Graph library
You can track some information with the Graph. Press **F5** to activate this and follow something the mode creator tracks to make new tools.

#### Translations
Mode can be translated into your language! Checkout the forum topic for more instructions:
https://forum.maniaplanet.com/viewtopic.php?f=465&t=30696

---

### Mechanics
![interface-screenshot](http://dominolink.aq.pl/common/pursuit-playerhitbox.jpg)
#### Hitbox
In Pursuit thing called hitbox doesn't really exist. ~~The catch is realized if Cop is **3 meters** close to a Thief. With this we can imagine that player hitbox is 3m sphere with center at car middle.~~ Currently Pursuit is using the Cylinder Hitbox library to detect "collisions". From script point of view, players are just wide, short cylinders (discs), which shape depends on the car rotation. The catch is realized when these cylinders overlap themselves.

#### Teams management
Pursuit uses two script settings: `UseClans` and `UseForcedClans`. These options are disabled when Podium sequence is going on due the "no cars" bug. Players are forced to Red team at beginning and every catch is switch to Blue, that requires player to be despawned to make it work. If there is less than 2 players mode waits and one player can explore the map.

#### Display delay
As you probably know TrackMania has a little visual delay. I managed to reduce it to minimum with changing two script variables (`UiRounds` and `UiLaps`) to `True`. With this, the lag almost doesn't exists. Anyway keep in mind that not everything you see as catch can be received by the server.

#### Finish is respawning players
If someone pass all checkpoints and drives throuh finish he is respawned. I can't avoid it any way. Instead, you can put multilap start on the map, which disables the ability to finish a track op place huge amount of checkpoints.

#### HMD support
Interface of the whole mode supports virtual reality devices. It does mean, that elements which normally are outside of the screen are cut at the borders, what allows HMDs to have them hidden from UI. Noticeable bug is minimap but I can't fix this, only hiding map may solve the problem (TODO).

#### Idea for the OffZone
Like in ShootMania, there is ability to do an "OffZone". ~~Since finish respawns you, we can so a small trick. To do this, your map MUST have exactly one start (not multilap) and no checkpoints. Then we can do half-tanspaent non-collideable finish in full block size, we can place in other blocks and snap to the editor grid in places players shouldn't reach.~~ I'm working on a script library and editor plugin to allow map creators to define areas, where players will be respawned.
