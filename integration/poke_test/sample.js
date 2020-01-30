// var data = { 
//   "1.ドリンク": ["チャイ", "ラッシー"],
//   "2.副菜": ["サモサ", "ティッカマサラ", "サブジ"],
//   "3.主菜": ["バターチキン", "キーマ", "ダール", "マトン"]
// }

// // 実行毎に結果の出力順序が一意になるようにソート
// var keys = Object.keys(data).sort();

// // 組み合わせの総数を事前に計算
// var total = 1;
// for (var key in data) {
//   total *= data[key].length;
// }

// var q, // 商, ループ中の配列で表現できない数
//     r, // 余り, ループ中の配列で表現する数
//     result = []; // 組み合わせを格納する配列

// // 組み合わせの総数回ループして、n番目にどの組み合わせが来るかどうかを求める
// for (var n=0; n < total; n++) {
//   result[n] = {};
//   q = n;

//   // dataのキー毎にループして、どの要素を使うか決定
//   for (i=0; i<keys.length; i++) {
//     key = keys[i];

//     // ループ対象の配列の要素数で割った余り = その配列で表現できる数 
//     r = q % data[key].length;

//     // ループ対象の配列の要素数で割った商 = その配列で表現できない数
//     q = Math.floor(q / data[key].length);

//     result[n][key] = data[key][r];
//   }
// }

// // 出力
// for (var i=0; i < result.length; i++) {
//    console.log(i+':'+JSON.stringify(result[i]));
// }

const combination = (nums, k) => {
    let ans = [];
    if (nums.length < k) {
        return []
    }
    if (k === 1) {
        for (let i = 0; i < nums.length; i++) {
            ans[i] = [nums[i]];
        }
    } else {
        for (let i = 0; i < nums.length - k + 1; i++) {
            let row = combination(nums.slice(i + 1), k - 1);
            for (let j = 0; j < row.length; j++) {
                ans.push([nums[i]].concat(row[j]));
            }
        }
    }
    return ans;
    // console.log(ans[0]+'\n')
}

let arr = combination(['1', '2', '3','4','5','6','7','8','9','10'], 2)
for(var i=arr.length-1 ; i>-1 ; i--){
console.log('(' + arr[i]+ ')' + '\n')
}
// console.log(arr+'\n')
console.log(JSON.stringify(arr))
console.log('\n' + Number(arr[0][0]) + ',' +arr[0][1])
toString.call(Number(arr[0][0]))
