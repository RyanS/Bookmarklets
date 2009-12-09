function find_style_attributes(){
  var els = Sizzle('*[style]');
  for (var i = els.length - 1; i >= 0; i--){
    els[i].style.background = "red";
    els[i].style.border = "2px solid blue";
  };
}

function g_mailto_links(){
  var els = Sizzle('a[href^="mailto:"]');
  for (var i = els.length - 1; i >= 0; i--){
    els[i].href = "http://mail.google.com/mail/?view=cm&fs=1&tf=1&to=" + els[i].href.substr(7);
  };
}

function find_links(){
  var c = document.createDocumentFragment(), div = document.createElement('div');
}

if (typeof(__bf__) != 'undefined' ) eval(__bf__);