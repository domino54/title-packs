# TrackMania Pursuit

---

![pursuit-header](http://dominolink.aq.pl/common/pursuit.jpg)

### What is Pursuit?
Pursuit is simple gamemode about interacing with other players. Players are split into **Thieves**, that escape the **Police**, which must catch them all.

At the beginning of each round random first Policeman is tossed after some seconds. This allows Thieves to move away. You can also vote yourself as Policeman by pressing **"Give up"** key (Delete). During the round, Police is chasing Theives. The Thief is caught if any Policeman **drives through** him. Caught Thieves respawn and become the Police. Round ends if **all Thieves are caught** or **time reaches the limit**. If time reached the limit and only one Thief remains, he is the **round winner**.

While the Police can respawn freely, Thieves have to **wait 30 seconds** before they got respawn. Thief can respawn instantly only before first Policeman is toss.

If someone joins the game before first Policeman is tossed, he can be a Thief. If he joins too late he becomes a Policeman.

**Pro tips**
* Color at bottom of screen tells you in which team you are.
* Turn opponents visible :) (change visibility by pressing **O**).
* Activate nicknames to realize who is who (show/hide with **~**).
* Bind freelook (rear camera) to see your opponents from behind.
* You can quickly remind basic rules in Pause > Help menu.

---

### Scores

* **+1** for surviving other catch. **+1** round survival in scores table.
* **+2** for catching a Thief. **+1** in round captures in scores table.
* **+5** for beeing uncaught at the round end.
* **+Thieves count/4 + 1** for beeing the first Policeman.

In scores table "Sv" means survival and "Ch" captures. Survival and capture stats in scores table are reset each round begin.

---

### Interface
![interface-screenshot](http://dominolink.aq.pl/common/instruction.jpg)
* 1. Thieves counter
* 2. Policemen conter
* 3. Your speed and traveled distance (or spectated player's)
* 4. Your score ranking (or spectated player's)
* 5. Non-interaction safe time icon
* 6. Displays for what you just get the points
* 7. Thief respawn countdown
* 8. Global messages (someone caught someone, etc.)
* 9. Time to the end of the round
* 10. Window with police request instructions and your toss chance
* 11. MiniMap (experimental, activate with **F6**)

As seen above Policemen labels are marked **blue** and Thieves labels are marked **red**.

---

### Build a map

To build a map, keep these instructions:
* Just build complicated race track with hidden/hard to reach finish.
* Use multilap start instead, if you want. Players wont respawn when finishing then.
* Border your map with something tall (eg. mountains) to prevent players going outside.
* Fill or avoid areas, where players can glitch under/out of block/map.
* Don't place turbos in two way roads - players won't get slower driving from opposite direction.
* Don't make hard to reach spots. Better create many easy ones and wide spaces.
* 64x64 Stadium base is way too big for Hide and Seek maps.

---

### Functions

#### Rounds
`S_RoundsPerMap 3`

Map is divided into 3 rounds by default. This amount can be changed in settings.

#### Dynamic time limit
`S_TimePerThief 60`

Every catch time limit changes in specific way. Basically, when someone is caught time cuts to `Thieves amount x 60 seconds`. If time is smaller than that, it just keeps counting down unchanged. Time per Thief can be changed in game mode settings.

#### Safe time
Every time you spawn you have 3 seconds safe time (after "321Go") disabling interaction with others. This allows Thieves to respawn without pression, that AFK Policemen can catch him. This affects Policemen too.

#### Going outside of the map
If any Thief goes out of editor construction aera, he is respawned automatically. If anyone (even the Police) falls under the map by a glitch, he is respawned too. Respawned players are warned with UI big message.

#### Anti-camping plugin
`S_AntiCampPlugin True`

With this option on, Thieves that stand on single block for longer than 30 seconds start to respawn automatically. The only way to abort countdown is driving 200 meters away from the spot player has camped.

#### Labels visibility modes
`S_LabelsVisibility False`

The nicknames over cars can be displayed through walls. Can be changed any time and affects every player on the server.

#### Reseting leavers scores
`S_ResetScoreLeavers True`

At the end of the map scores of all players that left the game or switched into spectator mode are reset to 0. This option can be turned off.

#### AFK manager
`S_AutoManageAFK True`

With AFK manager on, inactive (not moving) Policemen are forced to spectate the game after 2 minutes. To be able to play again, just unspec in the pause menu.

#### MiniMap
The Minimap is hidden by default. You can enable it by pressing **F6**. Map displays current player positiin and team. If you don't spectate anyone, map is in overview mode. It will later display last Thief position as well as marker over him.

#### Graph library
You can track some information with Graph. Press **F5** to activate this and follow all players count.

#### Translations
Mode can be translated into your language! Checkout the forum topic for more instructions:
https://forum.maniaplanet.com/viewtopic.php?f=465&t=30696

---

### Mechanics
![interface-screenshot](http://dominolink.aq.pl/common/pursuit-playerhitbox.jpg)
#### Hitbox
In Pursuit thing called hitbox doesn't really exist. The catch is realized if Cop is **3 meters** close to a Thief. With this we can imagine that player hitbox is 3m sphere with center at car middle.

#### Teams management
Pursuit uses two script settings: `UseClans` and `UseForcedClans`. These options are disabled when Podium sequence is going on due a "no cars" bug. Players are forced to Red team at beginning and every catch is switch to Blue, that requires player to be despawned to make it work. If there is less than 2 players mode waits and one player can explore the map.

#### Display delay
As you probably know TrackMania has a little visual delay. I managed to reduce it to minimum with changing two script variables (`UiRounds` and `UiLaps`) to `True`. With this, the lag almost doesn't exists. Anyway keep in mind that not everything you see as catch can be received by the server.

#### Finish and map dimensions
Map dimensions used by auto-respawn fit perfectly to the map construction aera. If someone passes all checkpoints and drives throuh finish he is respawned. I can't avoid it any way. Instead, you can put multilap start on the map, which disables the ability to finish a track.

#### HMD support
Interface of the whole mode supports virtual reality devices. It does mean, that elements that normally are outside of the screen are cut at the borders, what allows HMDs to have them hidden from UI. Noticeable bug is minimap but I can't fix this, only hiding map may solve the problem (TODO).

#### Idea for the OffZone
Like in ShootMania, there is ability to do an "OffZone". Since finish respawns you, we can so a small trick. To do this, your map MUST have exactly one start (not multilap) and no checkpoints. Then we can do half-tanspaent non-collideable finish in full block size, we can place in other blocks and snap to the editor grid in places players shouldn't reach.
