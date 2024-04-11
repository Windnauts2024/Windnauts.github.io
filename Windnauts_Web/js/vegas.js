$(function() {
    $('#mainimg').vegas({
        slides: [
            { src: './images/win.jpeg' },	
            { src: './images/start.jpeg' },
            { src: './images/propera.jpeg' },	
            { src: './images/steer.jpeg' },	
            { src: './images/gtf.jpeg' },	
        ],
		transition: 'blur',			//https://vegas.jaysalvat.com/documentation/transitions/から好みのtransitionを選んで置き換えられます。
		transitionDuration: 1000, //スライドの遷移アニメーションの時間
        animation: 'kenburns',		//https://vegas.jaysalvat.com/documentation/transitions/から好みのanimationを選んで置き換えられます。
		delay: 4500,				//次の画像を表示するまでの時間
		animationDuration: 7000,	//アニメーション間の引き継ぎタイミング。
    });
});
