# A_Crash

A game inspired by A dark room made using React.js


# Doumentation

Constructors:


Action( label, callback )
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


Progression( description, advanceAction, thresholdObject )
- description: a short description of the game's progression point
- advanceAction: an Action object detailing the changes being made for progression
- thresholdObject: object where key is the checks name and the value is one of two options.__
1. a function that returns true or false depending on a condition set.__
2. a false value which another Action will set to true (failing to will render the progression impossible)


Game ()