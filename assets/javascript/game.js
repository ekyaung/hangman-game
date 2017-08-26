
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js">
	<script type="text/javascript">


	var answerKey = ["kerropi", "batz", "hello kitty"]

	var batz = ["b","a","t","z"];
	var answer = answerKey[Math.floor(Math.random() * answerKey.length)];

	var a;
	var count = 0;
	var answerArray = [];

	function startUp(){
		var i = 0;
			for (i = 0; answer.length; i++);
			{
				answerArray[i] = " _ ";
			}
		a = answer.join("  ");
		document.getElementById("answer").innerHTML = a;
	}

	function Letter(){
		var letter = document.getElementById("letter").value;
		if (letter.length > 0){
			for (var i = 0; i < answerKey.length; i++){
				if (answerKey[i] === letter){
					answerArray[i] = letter;
				}
			}
		}

	count++;
	document.getElementById("counter").innerHTML = "# of clicks: " + count;
	document.getElementById("answer").innerHTML = answerArray.join("  ");
	
	if (count < 12){
		document.getElementById("alert").innerHTML = "Game over - - - Try again!"
	}
	
	}
	 	
	</script>