var kickSiteInfo = {}, kickSitePageInfo = {};
function kickSiteInfoLoad(callback) {
    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', '/_$kicksite.json', false);
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
             kickSiteInfo = JSON.parse(xobj.responseText);
             var path = window.location.pathname;
             path = (path || '').toLowerCase();
             if(path === '/index.html'){path = '/';}
             kickSitePageInfo = kickSiteInfo[path] || {title:'',descr:'',keys:'',tags:[],cats:[]};
             var body = document.getElementsByTagName("body")[0];
             body.style.transition = 'all 0.2s ease';
             setTimeout(function(){                
                var allAs = document.querySelectorAll("a[href='"+path+"']");
                [].forEach.call(allAs, function(a) {
                    var classString = a.className || '';
                    var newClass = classString.concat(" active");
                    a.className = newClass;
                  });
                }, 250);
          }
    };
    xobj.send(null);
}
kickSiteInfoLoad();
