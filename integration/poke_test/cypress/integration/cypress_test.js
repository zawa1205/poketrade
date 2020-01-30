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
    
}
/**
  it('poketrade check_10C1', function(){

    cy.visit('http://localhost:8080/')
    for(var i=1; i<15 ;i++){
    cy.get("#wrapper > div > div > div.row.addBtn > button").click()
    
    what_to_do(i);
    
    // cy.get('.vs__selected').clear({force: true}) //spanを消すのでclearは使えない

    cy.get('button').contains('送信').click()
    cy.get('button').contains('キャンセル').click()
}
    })
**/
  it('Combination test', function(){
    //10C2
    var j=2;
    // var fs = require("fs");
    // var file = fs.CreateTextFile("text.txt");

    cy.visit('http://localhost:8080/')
    let arr = combination([/**'1', '2', '3','4',**/'5','6','7'/**,'8','9','10','11','12','13','14'**/], j)
    for(var i=arr.length-1 ; i>-1 ; i--){
    console.log(i, "times");
    // function open1(){
    cy.get("#wrapper > div > div > div.row.addBtn > button").click()
    // }
      for(var zerone=0 ; zerone < j ; zerone++){
           what_to_do(Number(arr[i][zerone]));
      }
      // what_to_do(Number(5));
      // what_to_do(Number(7));
      what_to_do(Number(11));
      what_to_do(Number(12));
      what_to_do(Number(13));
      what_to_do(Number(14));
      cy.get('button').contains('送信').click()
      cy.get('button').then(button => {
        console.log("hogeeeeeeeeeeeeee!!!!!")
        if (button.find('キャンセル').length) {
          button.contains('キャンセル').click()
        } else {
          // return;
          
          console.log("dame")
        }
      })
    
    // fs.writeFileSync("text.txt",arr[i][0] + ',' + arr[i][1]);
    // file.Close();
    // cy.writeFile('text.txt', arr[i][0] + ',' + arr[i][1])
    // open1()
      
     
// .then(open1)
  }


  })
})
