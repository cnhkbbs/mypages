// 一言
fetch('https://v1.hitokoto.cn')
	.then(function(res) {
		return res.json();
	})
	.then(function(data) {
		var hitokoto = document.getElementById('hitokoto');
		hitokoto.innerText = data.hitokoto;
	})
	.catch(function(err) {
		console.error(err);
	})
//解决Audio摸鱼问题
function toggleSound() {
	var music = document.getElementById("player"); //获取ID  
	console.log(music);
	console.log(music.paused);
	if (music.paused) { //判读是否播放  
		music.paused = false;
		music.play(); //没有就播放 
	}
}
setInterval("toggleSound()", 1);
