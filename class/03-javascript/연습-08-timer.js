setTimeout(function(){
    console.log("펑")
},3000)
// VM208:2 펑
setInterval(function() {
    console.log("1초가 지났다")
},1000)

// 타이머를 이용한 시간 계산
let time = 10
setInterval(function(){
    if(time >= 0) {
        console.log(time)
        time = time - 1
    }
}, 1000)

// 타이머 분 초 나눠서 출력하기
let time = 180

setInterval(function() {

    if(time >= 0) {
        let min = Math.floor(time/60)
        let sec = String(time % 60).padEnd(2, "0")
        console.log(min + ":" + sec)
        time = time - 1
    }
},1000)