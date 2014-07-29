# Script: Custom weapons

## Loading the weapons
To access your action/weapon via script, you have to load it previously at beggining of the script. Create a global variable where you will store actions.
```
declare Ident[Text] G_Actions; ///< Actions used in mode
```
Indexing the array with ```Text``` may help you in selecting action later. Now let's add some weapons. Put this in `***StartServer***` label (and change the weapon name!):
```
ActionList_Begin();
G_Actions["Torpede"]    = ActionList_Add("Torpede.Action.Gbx");
ActionList_End();
```
If your action is in subfolder, use double backslash `\\` to access a subfolder. Now if you want to bind a weapon for player:
* Load it to a slot: ```ActionLoad(Player, CSmMode::EActionSlot::Slot_A, G_Actions["Torpede"]);```
* Bind to input: ```ActionBind(Player, CSmMode::EActionSlot::Slot_A, CSmMode::EActionInput:::Weapon);```

There are 8 available slots, from `Slot_A` to `Slot_H`. You can modify slots when player is unspawned to give him more than 8 weapons. Possible inputs for actions are:
* Weapon: `CSmMode::EActionInput:::Weapon`
* Stamina replacement: `CSmMode::EActionInput:::Movement` (player can't jump!)
* Alphanumeric keys, from 1 to 4: `CSmMode::EActionInput:::Activable1`
* Consumable keys (Q and E): `CSmMode::EActionInput:::Consumable1` (1 = Q, 2 = E)

### Small interface tip

If you bind to Consumables, over gauge bars icon and bullet amount of the action will appear. If it ruins your interface, hide them by pasting this:
```
declare UI for Player <=> UIManager.GetUI(Player);
UI.OverlayHideConsumables = True;
```

And your action is available to use now!

## Weapon hit event
The weapon is useless if it doesn't deal any damage. This is small help about handling hit of custom weapon in maniascript. To do it correctly, paste following code in `PendingEvents` foreach loop:
```
  // ---------------------------------- //
  // On custom weapon hit
  else if (Event.Type == CSmModeEvent::EType::OnActionCustomEvent) {
    if (Event.Shooter == Null && Event.Victim == Null && Event.Shooter != Event.Victim) {
      declare Damage = TextLib::ToInteger(Event.Param2[0]);
      declare Points = Damage / 100;
      
      Score::AddPoints(Event.Shooter, Points);
      RemovePlayerArmor(Event.Victim, Damage, Event.Shooter, Points);
      
      PassOn(Event);
    }
  }
```

### How does it work?
Basic syntax is very similar to normal hit event, but there are two differences:
* You have to get damage amount from action;
* You need to call special function to deal the damage.

So let me also explain some parameters:
* `Event.Param2[0]` - the amount of damage taken by weapon;
* `Points` in `RemovePlayerArmor()` is number to display as "+1".

### Good to know
This code works fine on all weapons that deal damage 100, 200 etc. If weapon does other amount of damage (eg. 82), the damage is taken, but shooter gets no "+1" on his/her interface. Only when damage pass through round armor number (eg. 100) there will be a +0 message (if damage > 100 there should be +1).

Second thing is natural armor regeneration. If victim take half damage, he/she will restore some armor to round amount. There's simple way to avoid this: put this code in `Players` foreach loop:
`Player.ArmorGain = 0;`

## Set ammo max for a weapon
It's not the best solution to set max ammo for weapon, but it works. Click "Custom mode" while editing action and add this in the script after `EnergyReload = C_EnergyReload`:
```
declare Integer[Text] Player_AmmoCount for Owner;
Player_AmmoCount["ActionName"] = EnergyMax / EnergyCost;
```
Then, use this in `while(True)` loop:
```
EnergyMax = Player_AmmoCount["ActionName"] * EnergyCost;
```
In your mode declare same thing as in action:
```
declare Integer[Text] Player_AmmoCount for Player;
```
Now anytime you change `Player_AmmoCount["ActionName"]` the weapon will set more or less maximum bullets!
