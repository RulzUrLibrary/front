

var app = new Vue({
  el: '#app',
  created: function() {
    var that = this;
    fetch.get("books/", {
      success: function(resp) {
        that.books.push.apply(that.books, resp.data.books)
      }
    });
  },
  data: {
    books: []
  }
});
