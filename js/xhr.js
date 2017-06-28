(function (global, undef) {
  var getXHR = global.XMLHttpRequest? function(){
    return new global.XMLHttpRequest();
  }: function(){
    return new ActiveXObject('Microsoft.XMLHTTP');
  }
  var noop = function(){};


  var fetch = function(method, url, options) {
    var xhr = new getXHR();
    var success = options.success || noop;
    var error = options.error || noop;
    var complete = options.complete || noop;

    xhr.open(method, url);
    xhr.onload = function() {
      xhr.data = JSON.parse(xhr.response);
      xhr.status === 200 ?  success(xhr): error(xhr);
      complete(xhr);
    };
    xhr.send();
  }

  fetch.get = fetch.bind(global, "GET")
  fetch.post = fetch.bind(global, "POST")

  global.fetch = fetch

})(window)
