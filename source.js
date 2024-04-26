let arrNum = [];

function inputArray() {
    let n = +document.getElementById('n').value;
    for (let i = 0; i < n; i++) {
        let pt = +prompt('Nhập phần tử thứ ' + i);
        arrNum.push(pt)
    }
    document.getElementById('pt').innerHTML = 'các phần tử trong mảng là: ' + arrNum;
}

function findMin() {
    let min = arrNum [0];
    for (let i = 0; i < arrNum.length; i++) {
        if (min > arrNum[i]) {
            min = arrNum[i];
        }
    }
    document.getElementById('min').innerHTML = ' Giá trị min là: ' + min;
}

function find() {
    let minchan = arrNum[0];
    for (let i = 0; i < arrNum.length; i++) {
        if (arrNum[i] % 2 === 0 && minchan > arrNum[i]) {
            minchan = arrNum[i];
        }
    }
    document.getElementById('minchan').innerHTML = ' Giá trị min của các phần tử chẵn là: ' + minChan;
}

function findMax2() {
    let max = arrNum[0];
    let max2 = null;
    for (let i = 0; i < arrNum.length; i++) {
        if (max < arrNum[i]) {
            max2 = max;
            max = arrNum[i];
        } else if (arrNum[i] > max2 && arrNum[i] != max) {
            max2 = arrNum[i];
        }
    }
    document.getElementById('max2').innerHTML = ' Giá trị max thứ 2 là: ' + max2;
}

function kiemtra() {
    let kq = "";
    for (let i = 1; i < arrNum.length; i++) {
        if (arrNum[i] < arrNum[i - 1]) {
            kq = "Mảng không luôn tăng dần";
        } else {
            kq = "Mảng luôn tăng dần";
        }
    }
    document.getElementById('kt').innerHTML = kq;
}