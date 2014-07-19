/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Vector2 = require('vector2');
var ws = require('webservice');


var main = new UI.Card({
  title: 'Pebble.js',
  icon: 'images/menu_icon.png',
  subtitle: 'Hello World!',
  body: 'Press any button.'
});

main.show();

main.on('click', 'up', function(e) {
  var menitems =[];
    for(var i=0;i<ws.cats.length;i++){
        menitems.push({title:ws.cats[i].Name, guid:ws.cats[i].Guid});
  }
    
    var menu = new UI.Menu({
    sections: [{
      items:menitems
    }]
  });
  menu.on('select', function(e) {
  var card = new UI.Card();
  card.title(ws.cats[e.item].Title);
      card.scrollable(true);
  card.subtitle('');
      var details='';
  for (var t = 0; t < ws.listings.length; t++) {
			if (ws.listings[t].guid === ws.cats[e.item].Guid) {
				details += ws.listings[t].title + '\r\n';
			}
		}
      card.body(details);
  card.show();
      
  });
  menu.show();
});

/*main.on('click', 'select', function(e) {
  var wind = new UI.Window();
  var textfield = new UI.Text({
    position: new Vector2(0, 50),
    size: new Vector2(144, 30),
    font: 'gothic-24-bold',
    text: 'Text Anywhere!',
    textAlign: 'center'
  });
  wind.add(textfield);
  wind.show();
});*/

/*main.on('click', 'down', function(e) {
  var card = new UI.Card();
  card.title('A Card');
  card.subtitle('Is a Window');
  card.body('The simplest window type in Pebble.js.');
  card.show();
});*/
