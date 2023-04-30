document.addEventListener('DOMContentLoaded', () =>{

    const boxes = document.querySelectorAll('.box');
    const mixBoom = document.querySelector("#mixBoom");

    let arr = [0, 0, 0, 0, 0, 0, 0, 0, 1];
    let flag = true;

    let cnt = 0;
    let selarr = [];

    mixBoom.addEventListener('click', () => {
        if (flag)   {
            arr.sort(() => Math.random() - 0.5);
            flag = false;
            cnt = 0;
            selarr = [];
            document.querySelector('h2').innerHTML = "";

            for (let box of boxes)  {
                box.innerHTML = box.getAttribute('id').replace('box', '');
            }
        }
    });


    for (let box of boxes)  {
        box.innerHTML = box.getAttribute('id').replace('box', '');

        box.addEventListener('click', () => {

            let n = parseInt(box.textContent);
            if (isNaN(n))   return;

            if (!flag)  {
                selarr.push(n);
                cnt++;

                if (arr[n-1] == 0)  {
                    box.innerHTML = '<img src = "./hart.png">';
                    if (cnt == 8)   {
                        flag = true;
                        document.querySelector('h2').innerHTML = "성공!";

                        let lastArr = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter((item) => selarr.includes(item));
                        boxes[lastArr[0] -1].innerHTML = '<img src = "./hart.png">';

                    }
                }
                else    {
                    box.innerHTML = '<img src = "./boom.png">';
                    flag = true;
                    document.querySelector('h2').innerHTML = "실패!";
                }
            }
        });
    }

});