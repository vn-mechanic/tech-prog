  var array = new Array();
    function getXmlHttp() {
      var xmlhttp;
      try {
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
      } catch (e) {
			try {
			  xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (E) {
				xmlhttp = false;
			}
      }
      if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
      	xmlhttp = new XMLHttpRequest();
      }
      return xmlhttp;
    }
    function chat() {
      var xmlhttp = getXmlHttp();
      xmlhttp.open("POST", "functions.php", true);
      xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xmlhttp.send("update=1");
      xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4) {
          if (xmlhttp.status == 200) {
            var response = xmlhttp.responseText;
            response = JSON.parse(response);			
			//alert(response);
            if (array.length == response.length) return;
            var start = array.length;
            array = response;
            var messages = document.getElementById("chat").innerHTML;
            for (i = start; i < array.length; i++) {
              messages = messages + "<p><b>" + array[i].name + ":</b> " + array[i].message + "</p>";
            }
            document.getElementById("chat").innerHTML = messages;
            document.getElementById("chat").scrollTop = 1000000;
          }
        }
      }
      setTimeout("chat()", 1000);
    }
    function addMessage () {
      	var xmlhttp = getXmlHttp();
      	var name = document.getElementById("name").value;
      	var message = document.getElementById("message").value;
      	xmlhttp.open("POST", "functions.php", true);
      	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      	xmlhttp.send("name=" + encodeURIComponent(name) + "&message=" + encodeURIComponent(message));
		alert("Сообщение отправлено!")
    } 