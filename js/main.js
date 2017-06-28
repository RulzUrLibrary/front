var books = [
  {
    "id": 1,
    "title": "The S.H.I.E.L.D.",
    "subtitle": "The Strategic Homeland Intervention, Enforcement, and Logistics Division...",
    "avatar": "img/avatar-1.png"
  },
  {
    "id": 2,
    "title": "Lorem Ipsum",
    "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit....",
    "avatar": "img/avatar-2.png"
  },
  {
    "id": 3,
    "title": "The Avengers",
    "subtitle": "Earth's Mightiest Heroes joined forces to take on threats that were too big for any one hero to tackle...",
    "avatar": "img/avatar-3.png"
  }
];

Vue.component('book-tile', {
  // The todo-item component now accepts a
  // "prop", which is like a custom attribute.
  // This prop is called todo.
  props: ['book'],
  template: '<div class="column col-6"><div class="tile"><div class="tile-icon"><figure class="avatar avatar-lg"><img :src="book.avatar"> </figure> </div> <div class="tile-content"> <p class="tile-title">{{book.title}}</p><p class="tile-subtitle">{{book.subtitle}}</p><p><button class="btn btn-primary btn-sm">Join</button> <button class="btn btn-sm">Contact</button></p></div></div></div>'
});

var app = new Vue({
  el: '#app',
  data: {
    books: books
  }
});
