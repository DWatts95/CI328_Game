The Archer Adventure
University Project for Internet Games Design
By Daniel Watts


Run index.html using a compatible search engine. 
Note: firefox is unable to play some sound files (.mp3).
Microsoft Edge seemed to work best for me. 

All images and sounds used can be found at the following directories:

https://opengameart.org/content/fire-blast - no information given to credit.

https://opengameart.org/content/pyromaniac-orc
https://opengameart.org/content/noble-ranger - credit to Calciumtrice

http://www.ludicarts.com/free-game-platform-tileset/ - credit to Franco Giachetti

https://opengameart.org/content/battle-in-the-winter - credit to Johann Brodd

Some found bugs:

if a Pyro Orc is on a ledge above or below the player with the same X coordinate, the Pyro Orc Velocity makes the sprite change direction constantly. 
Dead AI and player models remain throughout all attempts. - sometimes even after restarting the browser entirely: clearing the browser's cache seems to remove them.
because the nature of the update loop function, certain actions take priority over another e.g. Move right animation over move left, therefore if holding right then holding left and not letting go of right causees
the player to move left yet play the left movement animation.
Minor but the spritesheet for the player seems to have a 1 pixel line above its head during all the animations.
