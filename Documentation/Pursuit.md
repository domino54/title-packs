# TrackMania Pursuit

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

### Functions

#### Dynamic time limit
Every catch time limit changes in specific way. Basically, when someone is caught time cuts to `Thieves amount x 60 seconds`. If time is smaller than that, it just keeps counting down unchanged. Time per Thief can be changed in game mode settings.

#### Safe time
Every time you spawn you have 3 seconds safe time (after "321Go") disabling interaction with others. This allows Thieves to respawn without pression, that AFK Policemen can catch him. This affects Policemen too.

#### Anti-camping plugin
With this option on, Thieves that stand on single block for longer than 30 seconds start to respawn automatically. The only way to abort countdown is driving 200 meters away from the spot player has camped.

#### Labels visibility modes
The nicknames over cars can be displayed through walls. Can be changed any time and affects every player on the server.

#### Reseting leavers scores
At the end of the map scores of all players that left the game or switched into spectator mode are reset to 0. This option can be turned off.

#### AFK manager
With AFK manager on, inactive (not moving) Policemen are forced to spectate the game after 2 minutes. To be able to play again, just unspec in the pause menu.

---

### Mechanics
![interface-screenshot](http://dominolink.aq.pl/common/pursuit-playerhitbox.jpg)
#### Hitbox
In Pursuit thing called hitbox doesn't really exist. The catch is realized if Cop is **3 meters** close to a Thief. With this we can imagine that player hitbox is 3m sphere with center at car middle.

#### Display delay
As you probably know TrackMania has a little visual delay. I managed to reduce it to minimum with changing two script variables (`UiRounds` and `UiLaps`) to `True`. With this, the lag almost doesn't exists. Anyway keep in mind that not everything you see as catch can be received by the server.

#### HMD support
Interface of the whole mode supports virtual reality devices. It does mean, that elements that normally are outside of the screen are cut at the borders, what allows HMDs to have them hidden from UI. Noticeable bug is minimap but I can't fix this, only hiding map may solve the problem (TODO).
