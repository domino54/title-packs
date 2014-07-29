# Script: Custom weapon hit
So there is small help about handling hit of custom weapon in maniascript. To do it correctly, paste following code in ```PendingEvents``` foreach loop:
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
* ```Event.Param2[0]``` - the amount of damage taken by weapon;
* ```Points``` in ```RemovePlayerArmor()``` is number to display as "+1".

### Good to know
This code works fine on all weapons that deal damage 100, 200 etc. If weapon does other amount of damage (eg. 82), the damage is taken, but shooter gets no "+1" on his/her interface. Only when damage pass through round armor number (eg. 100) there will be a +0 message (if damage > 100 there should be +1).

Second thing is natural armor regeneration. If victim take half damage, he/she will restore some armor to round amount. There's simple way to avoid this: put this code in ```Players``` foreach loop:
```Player.ArmorGain = 0;```
