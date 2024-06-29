var arrSo = new Array();
var arrFloat = [];
var arrInt = [];

//Function thêm số vào trong mảng, đồng thời in số lên giao diện
document.getElementById('themSo').onclick = function() {
    var so = Number(getID('number'));
    arrSo.push(so);

    document.getElementById('array').innerHTML = arrSo;
}

//Tính tổng các số dương trong mảng
document.getElementById('tinhTongDuong').onclick = function() {
    var tongDuong = 0;
    
    for(let i = 0; i < arrSo.length; i++) {
        if(arrSo[i] >= 0) {
            tongDuong += arrSo[i];
        }
    }

    document.getElementById('tongDuong').innerHTML = "Tổng số dương trong mảng là: " + tongDuong;
}

//Đếm tổng số dương có trong mảng
document.getElementById('demSoDuong').onclick = function() {
    var dem = 0;

    for(let i = 0; i < arrSo.length; i++) {
        if(arrSo[i] > 0) {
            dem++;
        }
    }

    document.getElementById('soDuong').innerHTML = "Số dương trong mảng gồm: " + dem + " số";
}

//Tìm số nhỏ nhất trong mảng
document.getElementById('timMin').onclick = function() {
    var min = arrSo[0];

    for(let i = 1; i < arrSo.length; i++) {
        if(arrSo[i] < min) {
            min = arrSo[i];
        }
    }

    document.getElementById('min').innerHTML = "Số nhỏ nhất trong mảng là: " + min;
}

// Tìm số dương nhỏ nhất trong mảng
document.getElementById('timMinPos').onclick = function() {
    var minPos = arrSo[0];

    for(let i = 1; i < arrSo.length; i++) {
        if(arrSo[i] < minPos && arrSo[i] > 0) {
            minPos = arrSo[i];
        }
    }

    document.getElementById('minPos').innerHTML = "Số dương nhỏ nhất trong mảng là: " + minPos;
}

//Tìm số chẵn cuối cùng trong mảng
document.getElementById('timLastEven').onclick = function() {
    var lastEven = -1;

    for(let i = 0; i < arrSo.length; i++) {
        if(arrSo[i] % 2 == 0) {
            lastEven = arrSo[i];
        }
    }

    document.getElementById('lastEven').innerHTML = "Số chẵn cuối cùng trong mảng là: " + lastEven;
}

//Đổi chỗ 2 vị trí trong mảng
document.getElementById('doiViTri').onclick = function() {
    let pos1 = getID('pos1');
    let pos2 = getID('pos2');
    
    swap(pos1, pos2);

    document.getElementById('ketQuaSwap').innerHTML = arrSo;
}

//Sắp xếp mảng tăng dần
document.getElementById('sapXepTang').onclick = function() {
    bubbleSort(arrSo);

    document.getElementById('tangDan').innerHTML = arrSo;
}

//Tìm số nguyên tố đầu tiên trong mảng
document.getElementById('timSoNguyenTo').onclick = function() {
    var result = -1;
    
    for(let i = 0; i < arrSo.length; i++) {
        if(soNguyenTo(arrSo[i])) {
            result = arrSo[i];
            break;
        }
    }

    document.getElementById('soNguyenTo').innerHTML = "Số nguyên tố đầu tiên trong mảng là: " + result;
}

//Thêm số thực vào 1 mảng mới 
document.getElementById('addFloat').onclick = function() {
    var so = Number(getID('floatNumber'));
    arrFloat.push(so);

    document.getElementById('arrFloat').innerHTML = arrFloat;
}

//Đếm số nguyên trong mảng số thực 
document.getElementById('countInt').onclick = function() {
    let dem = 0;

    for(let i = 0; i < arrFloat.length; i++) {
        if(soNguyen(arrFloat[i])) {
            dem++;
            arrInt.push(arrFloat[i]);
        }
    }

    document.getElementById('resultInt').innerHTML = "Trong mảng có " + dem + " số nguyên: " + arrInt;
}

//Đếm tổng số âm và số dương, so sánh số lượng tổng 2 số
document.getElementById('tinhTongSoLuong').onclick = function() {
    var demAm = 0;
    var demDuong = 0;

    for(let i = 0; i < arrSo.length; i++) {
        if(arrSo[i] > 0)
            demDuong++;
        else if(arrSo[i] < 0)
            demAm++;
    }

    document.getElementById('soLuong').innerHTML = "Tổng số dương: " + demDuong
    + ", tổng số âm: " + demAm + ". ";

    if(demDuong > demAm)
        document.getElementById('soLuong').innerHTML += "Số dương > số âm"
    else if(demAm > demDuong)
        document.getElementById('soLuong').innerHTML += "Số âm > số dương"
    else
        document.getElementById('soLuong').innerHTML += "Số dương = số âm"

}