describe('poketrade check' , function(){
  function what_to_do(func){
    cy.get('#app > div.v-dialog__content.v-dialog__content--active > div > div > div.v-card__text > div').within(() => {
      switch(func){
        case 1:
        cy.get('div:nth-child(7) > div:nth-child(1) > div > div > div.vs__selected-options > input')
        .type('サルノリ{enter}')
        break;

        case 2:
        cy.get('div:nth-child(7) > div:nth-child(2) > div > div > div.vs__selected-options > input')
        .type('モンスターボール{enter}')
        break;

        case 3:
        cy.get('div:nth-child(7) > div:nth-child(3) > div > div > div.v-input__slot > div > input')
        .click({force: true})
        break;

        case 4:
        cy.get('div:nth-child(7) > div:nth-child(4) > div > div > div.v-input__slot > div > input')
        .click({force: true})
        break;

        case 5:
        cy.get('div:nth-child(13) > div > div > div > div.vs__selected-options > input')
        .type('アイスメモリ{enter}')
        break;

        case 6:
        cy.get('div:nth-child(17) > div:nth-child(1) > div > div > div.vs__selected-options > input')
        .type('バチンキー{enter}')
        break;

        case 7:
        cy.get('div:nth-child(17) > div:nth-child(2) > div > div > div.vs__selected-options > input')
        .type('マスターボール{enter}')
        break;

        case 8:
        cy.get('div:nth-child(17) > div:nth-child(3) > div > div > div.v-input__slot > div > input')
        .click({force: true})
        break;

        case 9:
        cy.get('div:nth-child(17) > div:nth-child(4) > div > div > div.v-input__slot > div > input')
        .click({force: true})
        break;

        case 10:
        cy.get('div:nth-child(23) > div > div > div > div.vs__selected-options > input')
        .type('あかいいと{enter}')
        break;

        case 11:
        cy.get('label').contains('投稿ID').next().type("aaaa")
        break;

        case 12:
        cy.get('label').contains('パスワード').next().type("aaaa")
        break;

        case 13:
        cy.get('label').contains('ルーム番号').next().type("1234")
        break;

        case 14:
        cy.get('label').contains('その他').next().type("CL+LR")
        break;   
      }
    })    
  }
  
  const combination = (nums, k) => { //組み合わせ生成
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
    
  }

  it('Normal system test',function(){
    //11番,12番と他3機能の正常系テスト
    cy.visit('http://localhost:8080/')
    var normal_value = [
    [1,6,7],
    [1,6,8],
    [1,6,9],
    [1,6,10],
    [1,6,13],
    [1,6,14],
    [1,5,6],
    [1,5,10],
    // [1,4,9],//異常系
    [1,4,10],
    [1,10,7],
    [1,10,8],
    [1,10,9],
    [1,10,13],
    [1,10,14],
    [2,5,6],
    [3,5,6],
    [3,5,10],
    [4,5,6],
    [4,5,10],
    [5,6,7],
    [5,6,8],
    [5,6,9],
    [5,6,14],
    [5,7,10],
    [5,8,10],
    [5,9,10],
    [5,10,13],
    [5,10,14]
    ];
    for(var i=normal_value.length-1 ; i>-1 ; i--){ //arrの最後尾からみる
     cy.then(() =>{
      console.count("最後尾から");
    });
     cy.get("#wrapper > div > div > div.row.addBtn > button").click()
     what_to_do(Number(11));
     what_to_do(Number(12));
     for (var j = 0; j < 3; j++) {
      what_to_do(normal_value[i][j]);
    }
    cy.get('button').contains('送信').click()
  }
})


  it('Abnormal system test pick 1 function', function(){

    cy.visit('http://localhost:8080/')
    for(var i=1; i<15 ;i++){
      cy.get("#wrapper > div > div > div.row.addBtn > button").click()

      what_to_do(i);

      cy.get('button').contains('送信').click()
      cy.get('button').contains('キャンセル').click()
    }
  })

  it('Abnormal system test pick 2 function', function(){ 
    var j=2;

    cy.visit('http://localhost:8080/')
    let arr = combination(['1', '2', '3','4','5','6','7','8','9','10',/**'11','12',**/'13','14'], j)

    for(var i=arr.length-1 ; i>-1 ; i--){ //arrの最後尾からみる
      cy.then(() =>{
        console.count("最後尾から");
      });

      cy.get("#wrapper > div > div > div.row.addBtn > button").click()
      for(var zerone=0 ; zerone < j ; zerone++){
        console.log(JSON.stringify(arr)); 
        what_to_do(Number(arr[i][zerone]));
      }

      what_to_do(Number(11));
      what_to_do(Number(12));
      cy.get('button').contains('送信').click()
      cy.get('button').contains('キャンセル').click()
    }
  })


//↓ 正常系と異常系を総当りする
  // it('Combination test', function(){ //10C2
  //   var j=4;

  //   cy.visit('http://localhost:8080/')
  //   let arr = combination(['1', '2', '3','4','5','6','7','8','9','10',/**'11','12',**/'13','14'], j)

  //   for(var i=arr.length-1 ; i>-1 ; i--){ //arrの最後尾からみる
  //     cy.then(() =>{

  //           console.count();

  //          });

  //   cy.get("#wrapper > div > div > div.row.addBtn > button").click()
  //     for(var zerone=0 ; zerone < j ; zerone++){
  //       console.log(JSON.stringify(arr)); 
  //          what_to_do(Number(arr[i][zerone]));
  //     }

  //     what_to_do(Number(11));
  //     what_to_do(Number(12));
  //     // what_to_do(Number(13));
  //     // what_to_do(Number(14));
  //     cy.get('button').contains('送信').click()
  //     cy.get('button').contains('キャンセル').click()
  // }

})