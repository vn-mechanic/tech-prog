<!DOCTYPE html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" >
  <title>Chat</title>
  <style>
	body {
		padding: 5px;
	}
	.qwer {
		border: 5px double #e2e8eb;
		margin: 0 auto;
		width: 1000px;
	}
	h2 {
		text-align: center;
	}
	#chat, table {
		margin: 0 auto;
	}
	#chat {
		border: 3px solid black;
		height: 600px;
		margin: 0 auto;
		overflow-x: none;
		overflow-y: auto;
		width: 1000px;
	}
	p {
		margin: 0;
	}
	img {
		width: 600px;
	}
  </style>
  <script src="script_chat.js">

  </script>

</head>
<body onload="chat();">
<div class="qwer">
  <h2>Chat</h2>
  <div id="chat" class="chat" name="chat">
  </div>
  <br>
  <table>
    <tr>
      <td>Name:</td>
      <td><input type="text" name="name" id="name"></td>
    </tr>
    <tr>
      <td>Message:</td>
      <td><input type="text" name="message" id="message"></td>
    </tr>
    <tr>
      <td colspan="2">
        <input type="button" value="Send!" onclick="addMessage();">
      </td>
    </tr>
  </table>
</div>
</body>
</html>
