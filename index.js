    // console.log(1_230.56);
    // console.log(`複数行の
    // 文字列を
    // 入れたい`);
    // let a;
    // console.log(a); 
    // const inputValue = 0;
    // // `inputValue`がnullishの場合は、`value`には42が入る
    // // `inputValue`が`0`の場合は、`value`に`0`が入る
    // const value = inputValue ?? 42;
    // console.log();

    // const userInput = "34テスト";
    // const num = Number.parseInt(userInput, 10);
    // if (Number.isNaN(num)) {
    //     console.log("パースした結果NaNになった", num);
    // }
    // else{
    //     console.log("成功", num);
    // }

// function echo(x = "デフォルト値") {
//     return x;
// }

// console.log(echo()); 

// function fn(...args) {
//     //console.log(arg1); // => "a"
//     console.log(args); // => ["b", "c"]
// }
// fn("a", "b", "c");

function fn(x, y, z) {
    console.log(x); // => 1
    console.log(y); // => 2
    console.log(z); // => 3
}
const array = [1, 2, 3];
fn(...array);

function fn(x, y, z) {
    console.log(fn(4,5,6)); // => 1
    
}
const user = {
    id: 42
};
// オブジェクトの分割代入
const { id } = user;
const id = user.id;
const id.user=id

const myFunc = function() {
    console.log("test")
};
myFunc();

total += num;
total = total + num
上も下も同じ

//これは8固定の並列を示す？
const typedArray = new Int8Array(8);

これは、異なる参照を持つオブジェクト同士は===で比較しても一致しないためです。

宣言の演算子　変数　＝　

const x = function() {
    console.log(x);
}
