(function(window) {

  //Event Listeners!!!
  //Event Handler!(the function that I pass to the event Listener)
  //All we do in the controller document is add an event listener and give it the event Handler
  // Event Listeners in Vanilla Js would be: document.querySelector('some-element').addEventListener('some-event', function() {});
  //In jQuery: $('some-element').on('some-event', function() {});
  //Do some stuff when 'some-event' fires on 'some-element'.....

  $('some-element').on('some-event', doSomeStuff);

  /**
   *Event Handler
   *
   * @param {event} event that fires
   */

  function doSomeStuff(event) {
      //Do some stuff when 'some-event' fires on 'some-element'.....
      //- CRUD the model
      // - Update the View with data from the model
    } //End doSomeStuff



})(window);