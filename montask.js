function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
function hehe(i){
	//for (let i = 0; i < 230; i++) {
		sleep(2000);
		fetch("https://app.monprotocol.ai/api/trpc/quests.setQuestCompletion", {
		  method: "POST",
		  headers: {
			'Cookie': '',
			'Content-Type': "application/json"
		  },
		  body: JSON.stringify({
			json: i
		  })
		});
		//setTimeout(5000);
	//}
}

for (let i = 0; i < 230; i++){
		hehe(i)
		console.log(i)
	}