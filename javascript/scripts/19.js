//배열 filter 구현

const myFilter = (item) => {
    console.log(item);
}


document.addEventListener("DOMContentLoaded", () => {
    const cbt1s = document.querySelectorAll(".cbt1");
    const cbt2s = document.querySelectorAll(".cbt2");
    const cbt3s = document.querySelectorAll(".cbt3");
    const txt1 = document.querySelector("#txt1");
    const btreset = document.querySelector("#btreset");

    //배열의 초기화
    let arr = [];
    
    //버튼 이벤트 추가

    //reset 기능 구현
    btreset.addEventListener('click', () => {
        txt1.value = '';
        arr = [];
    });


    //배열에 자료 추가
    for (let cbt1 of cbt1s) {
        cbt1.addEventListener('click', (e) => {
            e.preventDefault();
            
            switch(cbt1.textContent)    {
                case '사과':
                    arr.push('🍎');
                    break;
                
                case '바나나':
                    arr.push('🍌');
                    break;
                
                case '오렌지':
                    arr.push('🍊');
                    break;
                
                case '수박':
                    arr.push('🍉');
                    break;
            }

            console.log(arr);
            //txt1.value = arr.toString();
            txt1.value = arr.join();
        });
    }

    for (let cbt2 of cbt2s) {
        cbt2.addEventListener('click', (e) => {
            e.preventDefault();
           
            let temp = [];
            for (let item of arr)   {
                switch (cbt2.textContent)   {
                    case '사과 삭제':
                        if (item != "🍎")   temp.push(item);
                        break;

                    case '바나나 삭제':
                        if (item != "🍌")   temp.push(item);
                        break;

                    case '오렌지 삭제':
                        if (item != "🍊")   temp.push(item);
                        break;     
 
                    case '수박 삭제':
                        if (item != "🍉")   temp.push(item);
                        break;     

                }

            }

            arr = temp;
            txt1.value = arr.join();
            
            // switch(cbt2.textContent)    {
            //     case '사과 삭제':
            //         arr = arr.filter((item) => item != '🍎');
            //         break;
                
            //     case '바나나 삭제':
            //         arr = arr.filter((item) => item != '🍌');
            //         break;
                
            //     case '오렌지 삭제':
            //         arr = arr.filter((item) => item != '🍊');
            //         break;
                
            //     case '수박 삭제':
            //         arr = arr.filter((item) => item != '🍉');
            //         break;
            // }

            console.log(arr);


        });
    } 

    for (let cbt3 of cbt3s) {
        cbt3.addEventListener('click', (e) => {
            e.preventDefault();

            let temp = [];
            for(let item of arr)    {
                switch(cbt3.textContent)    {
                    case '사과-> 당근':
                        if (item == "🍎")   temp.push("🥕");
                        else temp.push(item);
                        break;
                        
                    case '바나나->오이':
                        if (item == "🍌")   temp.push("🥒");
                        else temp.push(item);
                        break;   
                        
                    case '오렌지->아보카도':
                        if (item == "🍊")   temp.push("🥑");
                        else temp.push(item);
                        break;

                    case '수박-> 브로콜리':
                        if (item == "🍉")   temp.push("🥦");
                        else temp.push(item);
                        break;
                }
                console.log(temp);
            }

            console.log(arr);
            arr = temp;
            txt1.value = arr.join();
        });
    }

});


