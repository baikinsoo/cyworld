const startWord = () => {
    let myword = document.getElementById("myword").value
    // 입력창의 값을 가져와야 하기 때문에 value를 사용했다.
    let word = document.getElementById("word").innerText

    let lastWord = word[word.length - 1]
    let firstWord = myword[0]

    if (firstWord === lastWord) {
        //정답일때
        document.getElementById("result").innerText = "정답입니다!";
        document.getElementById("word").innerText = myword;
        document.getElementById("myword").value = "";
    } else {
        //오답일때
        document.getElementById("result").innerText = "땡!"
        document.getElementById("myword").value = "";
    }
};

const random = () => {
    var tokenList = [,,,,,];

    for (let i = 0; i < 6; i++) {
        let token = String(Math.floor(Math.random() * 100))
        tokenList[i] = token
        console.log(tokenList[i])
    }
    document.getElementById("first").innerText = tokenList[0]
    document.getElementById("second").innerText = tokenList[1]
    document.getElementById("third").innerText = tokenList[2]
    document.getElementById("fourth").innerText = tokenList[3]
    document.getElementById("fifth").innerText = tokenList[4]
    document.getElementById("sixth").innerText = tokenList[5]
};