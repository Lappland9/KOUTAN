var kotae = [
    [
        [//令和1年１回62問
        2,1,1,2,
        2,1,3,4,3,
        1,2,3,2,
        3,2,2,1,
        3,2,2,3,1,
        1,3,2,2,3,
        1,1,3,3,2,
        3,2,2,1,2,
        2,1,3,1,2,
        1,1,2,3,3,
        2,1,2,2,3,
        3,1,2,2,1,
        2,3,1,2,3
        ],
        [//令和1年2回62問
        3,2,1,3,
        3,2,1,2,3,
        3,2,4,2,
        2,2,3,1,
        2,3,1,2,3,
        3,2,3,1,2,
        3,1,1,2,3,
        3,2,1,3,2,
        2,1,1,2,3,
        3,1,2,2,3,
        3,1,2,3,2,
        3,1,3,2,2,
        3,2,1,2,3
        ]

    ],
    [
        [//令和2年１回62問
        ],
        [//令和2年2回62問
        3,1,2,2,
        3,3,1,2,1,
        2,1,3,1,
        2,1,4,2,
        3,1,2,3,3,
        3,1,4,2,1,
        2,1,3,1,3,
        3,2,1,4,3,
        3,2,3,2,3,
        2,2,1,3,3,
        3,3,2,2,1,
        2,1,3,1,3,
        3,2,3,1,2
        ]

    ],
    [
        [//令和3年１回62問
        3,1,2,3,
        1,2,3,3,2,
        2,2,3,1,
        1,3,3,1,
        2,3,2,1,3,
        2,1,3,2,3,
        1,1,3,2,2,
        3,1,1,2,3,
        2,1,4,3,1,
        3,1,3,2,3,
        1,3,2,1,3,
        1,2,3,1,3,
        3,1,3,1,2

        ],
        [//令和3年2回62問
        2,1,1,3,
        1,1,3,3,2,
        1,3,2,3,
        3,3,2,2,
        2,3,1,3,2,
        1,3,4,2,2,
        3,1,2,1,3,
        3,3,2,1,2,
        2,1,1,3,3,
        2,1,3,2,3,
        1,2,3,1,3,
        3,2,3,1,2,
        1,1,2,3,3
        ]

    ]
]
function button1click() {  //数字ボタンについての関数
    var str1 = "1";
    var stra = kotae[nennum-1][dainum-1][mondainum-1];
    document.getElementById("kaitou").innerHTML = str1 ;
    document.getElementById("kotae").innerHTML = stra ;
    judge1();

}
function button2click() {  //数字ボタンについての関数
    var str2 = "2";
    var stra = kotae[nennum-1][dainum-1][mondainum-1];
    document.getElementById("kaitou").innerHTML = str2 ;
    document.getElementById("kotae").innerHTML = stra ;
    judge2();

}
function button3click() {  //数字ボタンについての関数
    var str3 = "3";
    var stra = kotae[nennum-1][dainum-1][mondainum-1];
    document.getElementById("kaitou").innerHTML = str3 ;
    document.getElementById("kotae").innerHTML = stra ;
    judge3();

}
function button4click() {  //数字ボタンについての関数
    var str4 = "4";
    var stra = kotae[nennum-1][dainum-1][mondainum-1];
    document.getElementById("kaitou").innerHTML = str4 ;
    document.getElementById("kotae").innerHTML = stra ;
    judge4();

}
function button5click() {  //数字ボタンについての関数
    var str5 = "5";
    var stra = kotae[nennum-1][dainum-1][mondainum-1];
    document.getElementById("kaitou").innerHTML = str5 ;
    document.getElementById("kotae").innerHTML = stra ;
    judge5();

}
function button6click() {  //数字ボタンについての関数
    var str6 = "6";
    var stra = kotae[nennum-1][dainum-1][mondainum-1];
    document.getElementById("kaitou").innerHTML = str6 ;
    document.getElementById("kotae").innerHTML = stra ;
    judge6();

}

var imgnum = [];// 問題数についての配列
    for (var i = 0; i <= 61; i++) {
        imgnum [i] = i+1;
    }



var mondainum = 1;// 問題数を選ぶための変数
var dainum = 1;//第何回かを選ぶための変数
var nennum = 1;//年代を選ぶための変数

function judge1() {//正解かどうか判定する関数
    if (kotae[nennum-1][dainum-1][mondainum-1] == 1) {
        document.getElementById("kotaepng").src="marubatuPNG/mark_maru.png";
    } else {
        document.getElementById("kotaepng").src="marubatuPNG/mark_batsu.png";
    }
    
}

function judge2() {//正解かどうか判定する関数
    if (kotae[nennum-1][dainum-1][mondainum-1] == 2) {
        document.getElementById("kotaepng").src="marubatuPNG/mark_maru.png";
    } else {
        document.getElementById("kotaepng").src="marubatuPNG/mark_batsu.png";
    }
    
}

function judge3() {//正解かどうか判定する関数
    if (kotae[nennum-1][dainum-1][mondainum-1] == 3) {
        document.getElementById("kotaepng").src="marubatuPNG/mark_maru.png";
    } else {
        document.getElementById("kotaepng").src="marubatuPNG/mark_batsu.png";
    }
    
}

function judge4() {//正解かどうか判定する関数
    if (kotae[nennum-1][dainum-1][mondainum-1] == 4) {
        document.getElementById("kotaepng").src="marubatuPNG/mark_maru.png";
    } else {
        document.getElementById("kotaepng").src="marubatuPNG/mark_batsu.png";
    }
    
}

function judge5() {//正解かどうか判定する関数
    if (kotae[nennum-1][dainum-1][mondainum-1] == 5) {
        document.getElementById("kotaepng").src="marubatuPNG/mark_maru.png";
    } else {
        document.getElementById("kotaepng").src="marubatuPNG/mark_batsu.png";
    }
    
}

function judge6() {//正解かどうか判定する関数
    if (kotae[nennum-1][dainum-1][mondainum-1] == 6) {
        document.getElementById("kotaepng").src="marubatuPNG/mark_maru.png";
    } else {
        document.getElementById("kotaepng").src="marubatuPNG/mark_batsu.png";
    }
    
}

function next() {// 次の問題へ行くための関数
    if (mondainum == 62) {
        mondainum = 1;
        if (dainum == 2) {
            dainum = 1
            if (nennum == 3) {
                nennnum = 1;
            } else {
                nennum++;
            }
        }else {
            dainum++;
        }
    } else {
        mondainum++;
    }
    document.getElementById("img1").src="modaiPNG\\"+ nennum + "-"+ dainum + "-" + mondainum + ".jpg";
    document.getElementById("kaitou").innerHTML = "" ;
    document.getElementById("kotae").innerHTML = "" ;

}
