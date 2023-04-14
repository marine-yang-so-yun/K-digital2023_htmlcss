const show = () => {
    event.preventDefault();

    // 랜덤수 생성
    let n = Math.floor(Math.random() * 6) + 1;

    var radios = document.getElementsByName("num");

    var value = 0;

    for (var radio of radios) {
        if (radio.checked)
            value = radio.value; 
    }


    value = Number(value);

    //console.log(value);
    document.querySelector(".h2Class").innerHTML = `<img src="./image/${n}.png">`;
    if (n === value) {
        document.querySelector("#result").innerHTML = "맞았습니다.";
        //document.querySelector("article h1").innerHTML = textContent = '주사위게임 맞음(승)';
    }
    else {
        document.querySelector("#result").innerHTML = "틀렸습니다.";
        //document.querySelector("article h1").innerHTML = textContent = '주사위게임 틀림(패)';
    }
}

