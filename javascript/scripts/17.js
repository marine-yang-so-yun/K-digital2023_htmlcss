document.addEventListener("DOMContentLoaded", () => {

    const beforeCal = document.querySelector("#beforeCal");
    const afterCal = document.querySelector("#afterCal");

    const beforeCalName = document.querySelector("#beforeCalName");
    const afterCalName = document.querySelector("#afterCalName");

    const beforeCalNum = document.querySelector("#beforeCalNum");
    const afterCalNum = document.querySelector("#afterCalNum");

    // 단위 표시

    beforeCalName.textContent = beforeCal.value;
    afterCalName.textContent = afterCal.value;


    //select 값이 변경이 될 때 

    beforeCal.addEventListener('change', () => {
        beforeCalName.textContent = beforeCal.value;
        beforeCalNum.value = "";
    });
    afterCal.addEventListener('change', () => {
        afterCalName.textContent = afterCal.value;
        beforeCalNum.value = "";
    });

    beforeCalNum.addEventListener('input', () =>{

        var before = beforeCalNum.value;

        if (beforeCal.value == afterCal.value)  {
            afterCalNum.value = before;
        }

        else if (beforeCal.value == "℃") {
            afterCalNum.value= (before * (9/5)) + 32;
        }

        else if (beforeCal.value == "℉") {
            afterCalNum.value = (before - 32) * (5/9);
        }
    });

});


// 함수를 만드는 방법도 가능
// const cToF = (temp) => {
//     let ftemp = (temp * (9/5)) + 32;
//     return ftemp;
// }

// const fToC = (temp) => {
//     let ctemp = (temp - 32) * (5/9);
//     return ctemp;
// }
