

var app = new Vue({
  el: '#app',
  created: function() {
    var that = this;
    fetch.get("assets/json/books.json", {
      success: function(resp) {
        that.books.push.apply(that.books, resp.data.books)
      }
    });
  },
  data: {
    books: []
  }
});
