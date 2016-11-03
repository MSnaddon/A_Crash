# A_Crash

A game inspired by A dark room made using React.js


# Doumentation

Constructors:


Action( label, callback, cooldown )
- label: Label to appear on button in game. If being used in a progression, label convention is to start with '#' but is otherwise unaffected.
- callback: function bound to the game object allowing action to be played out


Area( name, actions )
- name: simple short name for area
- actions: an object with key value pairing of Actions. ie {swingSword: new Action(....)}


Event ( description )
- description: a short description of the event that will appear on the ticker.


InventoryItem( name, initialQuantity )
- name: a short name for the item to appear on the inventory view
- initialQuantity: initial quantity for inventory


Progression( description, advanceAction, thresholdObject , counters)
- description: a short description of the game's progression point
- advanceAction: an Action object detailing the changes being made for progression
- thresholdObject: object where key is the checks name and the value is one of two options.



A function that returns true or false depending on a condition set.


A false value which another Action will set to true (failing to will render the progression impossible)
- counters: An object that holds counters for the thresholds to check. Should be modified by actions but this is likely to be refactored.


Game ({options})
- options: an object containing various information
-- areas : object with {key => areas} references
-- eventFeed : an array for displaying the initial events
-- inventory : your initial inventory
-- progressions : an object with {key => progression} references.