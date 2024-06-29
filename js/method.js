//Function rút gọn cách lấy giá trị từ id
function getID(ID) {
    var id = document.getElementById(ID).value;
    return id;
}

//Function giới hạn chỉ nhập số nguyên 
// function validateInput(input) {
//     input.value = input.value.replace(/[^-?\d]/g, '');  
// }

//Function đổi vị trí trong mảng
function swap(pos1, pos2) {
    let temp = arrSo[pos1];
    arrSo[pos1] = arrSo[pos2];
    arrSo[pos2] = temp;
}

//Thuật toán Bubble sort tăng dần
function bubbleSort(arrSo) {
    for(let i = 0; i < arrSo.length; i++) {
        for(let j = 0; j < arrSo.length - i - 1; j++) {
            if(arrSo[j] > arrSo[j + 1]) {
                swap(j, j + 1);
            }
        }
    }
    return arrSo;
}

//Function xác định số nguyên tố 
function soNguyenTo(soNT) {

    if(soNT <= 1) return false;

    for(let i = 2; i < soNT; i++) {
        if(soNT % i == 0) {
            return false;
        }
    }
    return true;
}

//Function xác định số nguyên (method isInteger là type boolean)
function soNguyen(int) {
    return Number.isInteger(int);
}