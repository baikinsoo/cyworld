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