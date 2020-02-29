var backCardType = "back.jpg";
var undo  = [];
score = 0;
addScore  = 100;
takeScore = 200;
finalMountScore = 150;
timer = false;

// :=:=:=:=:=:=:=:=:  The definition of playing cards random order :=:=:=:=:=:=:=:=:=:=:=:
// :=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:  
   
var mounts    = new Array;
var final     = new Array;
var buyCards  = new Array;
var BoughtCards = new Array;
var mCards = new Array(4);

var final0 = new Array;
var final1 = new Array;
var final2 = new Array;
var final3 = new Array;

var mount1 = new Array;
var mount2 = new Array;
var mount3 = new Array;
var mount4 = new Array;
var mount5 = new Array;
var mount6 = new Array;
var mount7 = new Array;

mCards[0]  = { number: 1,  color: "red", suit: "hearts", state: false, row: "", column: "" }
mCards[1]  = { number: 2,  color: "red", suit: "hearts", state: false, row: "", column: "" }
mCards[2]  = { number: 3,  color: "red", suit: "hearts", state: false, row: "", column: "" }
mCards[3]  = { number: 4,  color: "red", suit: "hearts", state: false, row: "", column: "" }
mCards[4]  = { number: 5,  color: "red", suit: "hearts", state: false, row: "", column: "" }
mCards[5]  = { number: 6,  color: "red", suit: "hearts", state: false, row: "", column: "" }
mCards[6]  = { number: 7,  color: "red", suit: "hearts", state: false, row: "", column: "" }
mCards[7]  = { number: 8,  color: "red", suit: "hearts", state: false, row: "", column: "" }
mCards[8]  = { number: 9,  color: "red", suit: "hearts", state: false, row: "", column: "" }
mCards[9]  = { number: 10, color: "red", suit: "hearts", state: false, row: "", column: "" }
mCards[10] = { number: 11, color: "red", suit: "hearts", state: false, row: "", column: "" }
mCards[11] = { number: 12, color: "red", suit: "hearts", state: false, row: "", column: "" }
mCards[12] = { number: 13, color: "red", suit: "hearts", state: false, row: "", column: "" }

mCards[13] = { number: 1,  color: "black", suit: "spades", state: false, row: "", column: ""}
mCards[14] = { number: 2,  color: "black", suit: "spades", state: false, row: "", column: ""}
mCards[15] = { number: 3,  color: "black", suit: "spades", state: false, row: "", column: ""}
mCards[16] = { number: 4,  color: "black", suit: "spades", state: false, row: "", column: ""}
mCards[17] = { number: 5,  color: "black", suit: "spades", state: false, row: "", column: ""}
mCards[18] = { number: 6,  color: "black", suit: "spades", state: false, row: "", column: ""}
mCards[19] = { number: 7,  color: "black", suit: "spades", state: false, row: "", column: ""}
mCards[20] = { number: 8,  color: "black", suit: "spades", state: false, row: "", column: ""}
mCards[21] = { number: 9,  color: "black", suit: "spades", state: false, row: "", column: ""}
mCards[22] = { number: 10, color: "black", suit: "spades", state: false, row: "", column: ""}
mCards[23] = { number: 11, color: "black", suit: "spades", state: false, row: "", column: ""}
mCards[24] = { number: 12, color: "black", suit: "spades", state: false, row: "", column: ""}
mCards[25] = { number: 13, color: "black", suit: "spades", state: false, row: "", column: ""}

mCards[26] = { number: 1,  color: "black", suit: "clubs", state: false, row: "", column: "" }
mCards[27] = { number: 2,  color: "black", suit: "clubs", state: false, row: "", column: "" }
mCards[28] = { number: 3,  color: "black", suit: "clubs", state: false, row: "", column: "" }
mCards[29] = { number: 4,  color: "black", suit: "clubs", state: false, row: "", column: "" }
mCards[30] = { number: 5,  color: "black", suit: "clubs", state: false, row: "", column: "" }
mCards[31] = { number: 6,  color: "black", suit: "clubs", state: false, row: "", column: "" }
mCards[32] = { number: 7,  color: "black", suit: "clubs", state: false, row: "", column: "" }
mCards[33] = { number: 8,  color: "black", suit: "clubs", state: false, row: "", column: "" }
mCards[34] = { number: 9,  color: "black", suit: "clubs", state: false, row: "", column: "" }
mCards[35] = { number: 10, color: "black", suit: "clubs", state: false, row: "", column: "" }
mCards[36] = { number: 11, color: "black", suit: "clubs", state: false, row: "", column: "" }
mCards[37] = { number: 12, color: "black", suit: "clubs", state: false, row: "", column: "" }
mCards[38] = { number: 13, color: "black", suit: "clubs", state: false, row: "", column: "" }

mCards[39] = { number: 1,  color: "red", suit: "diamonds", state: false, row: "", column: ""}
mCards[40] = { number: 2,  color: "red", suit: "diamonds", state: false, row: "", column: ""}
mCards[41] = { number: 3,  color: "red", suit: "diamonds", state: false, row: "", column: ""}
mCards[42] = { number: 4,  color: "red", suit: "diamonds", state: false, row: "", column: ""}
mCards[43] = { number: 5,  color: "red", suit: "diamonds", state: false, row: "", column: ""}
mCards[44] = { number: 6,  color: "red", suit: "diamonds", state: false, row: "", column: ""}
mCards[45] = { number: 7,  color: "red", suit: "diamonds", state: false, row: "", column: ""}
mCards[46] = { number: 8,  color: "red", suit: "diamonds", state: false, row: "", column: ""}
mCards[47] = { number: 9,  color: "red", suit: "diamonds", state: false, row: "", column: ""}
mCards[48] = { number: 10, color: "red", suit: "diamonds", state: false, row: "", column: ""}
mCards[49] = { number: 11, color: "red", suit: "diamonds", state: false, row: "", column: ""}
mCards[50] = { number: 12, color: "red", suit: "diamonds", state: false, row: "", column: ""}
mCards[51] = { number: 13, color: "red", suit: "diamonds", state: false, row: "", column: ""}

function shuffle(array) {
    
    var m = array.length, t, i;

    while (m) {
    i = Math.floor(Math.random() * m--);      
    t = array[m];
    array[m] = array[i];
    array[i] = t;
    }
    return array;
}

mCards = shuffle(mCards);

for ( var bM = 0 ; bM < 24 ; bM++ ) { buyCards.push( mCards[bM] ); }

mount1.push(mCards[24]);
mount1[0].state = true;

mount2.push(mCards[25]);
mount2.push(mCards[26]);
mount2[1].state = true;

mount3.push(mCards[27]);
mount3.push(mCards[28]);
mount3.push(mCards[29]);
mount3[2].state = true;

mount4.push(mCards[30]);
mount4.push(mCards[31]);
mount4.push(mCards[32]);
mount4.push(mCards[33]);
mount4[3].state = true;

mount5.push(mCards[34]);
mount5.push(mCards[35]);
mount5.push(mCards[36]);
mount5.push(mCards[37]);
mount5.push(mCards[38]);
mount5[4].state = true;

mount6.push(mCards[39]);
mount6.push(mCards[40]);
mount6.push(mCards[41]);
mount6.push(mCards[42]);
mount6.push(mCards[43]);
mount6.push(mCards[44]);
mount6[5].state = true;

mount7.push(mCards[45]);
mount7.push(mCards[46]);
mount7.push(mCards[47]);
mount7.push(mCards[48]);
mount7.push(mCards[49]);
mount7.push(mCards[50]);
mount7.push(mCards[51]);
mount7[6].state = true;

final  = [ final0, final1, final2, final3];

mounts = [ mount1, mount2, mount3, mount4, mount5, mount6, mount7, 
            buyCards, BoughtCards, final0, final1, final2, final3 ];

// :=:=:=:=:=:=:=:=:=:=:=:  This part is to the first redering :=:=:=:=:=:=:=:=:=:=:=:=:=:
// :=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:   
    
var mountStr;
var posiStr;
var idStr;
var finalInner;
var nInner;
var tInner; 
var sInner;
var numtimes = 1;

var mountStr   = 0;
var posiStr    = 0;
var idStr      = 0;
var finalInner = 0;
var nInner     = 0;
var tInner     = 0; 
var sInner     = 0;

for ( var Am = 0; Am < 7; Am++ ) {

    for ( var Ap = 0 ; Ap < numtimes ; Ap++ ) { 

    mountStr = Am; posiStr = Ap;

    mountStr = mountStr.toString();     
    posiStr  = posiStr.toString();  

    idStr =  "c-" + mountStr + "-" + posiStr;

    finalInner = document.getElementById(idStr);

    nInner = mounts[Am][Ap].number;  
    tInner = mounts[Am][Ap].suit;   
    sInner = mounts[Am][Ap].state;

    if ( sInner == true  && nInner >= 1 && nInner <= 13) {
        finalInner.style.display = "block";
        finalInner.style.backgroundImage = "url(cards/" + nInner + "_of_" + tInner + ".svg)";
    }
    else if ( nInner > 0 ) {
        finalInner.style.display = "block";
        finalInner.style.backgroundImage = "url(cards/" + backCardType + ")";
    }
    }
    numtimes++;
}

for ( var Am = 0 ; Am < 24 ; Am++ ) {

    mountStr = Am;

    mountStr = mountStr.toString(); 

    idStr =  "a-0-" + mountStr ;

    finalInner = document.getElementById(idStr);

    nInner = buyCards[Am].number;  
    tInner = buyCards[Am].suit;   
    sInner = buyCards[Am].state;

    if ( nInner > 0 ) {
        finalInner.style.display = "block";
        finalInner.style.backgroundImage = "url(cards/" + backCardType + ")";
    }
}

// :=:=:=:=:=:=:=:=:=:  This part is to the selection function :=:=:=:=:=:=:=:=:=:=:=:=:=:
// :=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:      

var contSelect = new Array;

function selected(SelectId) { 

    var selId = SelectId.split("-");

    var mSelId = parseInt(selId[1]);
    var pSelId = parseInt(selId[2]);

    if ( selId[0] == "c" && mounts[mSelId][pSelId].state == true ) {
        contSelect.push(SelectId);
        finalSelect = SelectId;
    }

    else if ( selId[0] == "a" || selId[0] == "b" ) {
        contSelect.push(SelectId);
        finalSelect = SelectId;
    }

    if ( contSelect.length < 1 && finalSelect != undefined) {

        document.getElementById(finalSelect).style.border = "none";
    
    }
    else if ( contSelect.length == 1) { 
        for ( var a = 0 ; a < 1 ; a++ ) {
            document.getElementById(contSelect[a]).style.border = "none";
        }
        contSelect = []; 
    }
  }

// :=:=:=:=:=:=:=:=:  This part is to the buy and bought playing cards :=:=:=:=:=:=:=:=:=:
// :=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:      
    
function buyToBought(buyId) {
    
    toBoughtId = buyId.split("-");
    var BoughtId = parseInt(toBoughtId[2]);
    
    BoughtCards.push(buyCards[BoughtId]);
    buyCards.splice(BoughtId, 1) ;

    document.getElementById(buyId).style.backgroundImage = "none";
    document.getElementById(buyId).style.display = "none";

    for ( var Bought = 0 ; Bought < BoughtCards.length ; Bought++ ) { 

        var IdBought = Bought.toString();

        finalBoughtInner = document.getElementById("a-1-" + IdBought);

        nBoughtInner = BoughtCards[Bought].number;  
        tBoughtInner = BoughtCards[Bought].suit;   
        sBoughtInner = BoughtCards[Bought].state = true;

        finalBoughtInner.style.display = "block";
        finalBoughtInner.style.backgroundImage = "url(cards/" + nBoughtInner + "_of_" + tBoughtInner + ".svg)";
        
        if ( buyCards.length == 0 && BoughtCards.lenght != 0 ) { 
            document.getElementById("reset").style.display = "block";
        } 
        if ( buyCards.length == 0 && BoughtCards.length == 1 ){ 
            document.getElementById("reset").style.display = "none";    
        } 
    }
  }

function resetBuyMount() {

    document.getElementById("reset").style.display = "none";  

    for ( var reset = (BoughtCards.length - 1) ; reset >= 0 ; reset-- ) {

        toReset = reset.toString();
        idReset = "a-0-" + toReset;

        toBought = reset.toString();
        idBought = "a-1-" + toBought;

        buyCards.push(BoughtCards[reset]);

        cardImg = "url(cards/back.jpg)";

        document.getElementById(idBought).style.backgroundImage = "none";
        document.getElementById(idBought).style.display = "none";

        document.getElementById(idReset).style.backgroundImage = cardImg;
        document.getElementById(idReset).style.display = "block"
    } 
    BoughtCards.length = 0;

    if ( score > 17 ) 
        score -= takeScore; 

    else { score = 0; }

    put_score(score);
  }

// :=:=:=:=:=:=:=:=:=:  This part is to the options and efects :=:=:=:=:=:=:=:=:=:=:=:=:=:
// :=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:      

var chosen = new Array;
var suspended = new Array;

function change(id) {
      
    var mounts_data = []; 
    var suspended_data = [];

    var id = id.split("-");
    var id1 = parseInt(id[1]);
    var id2 = parseInt(id[2]);

    if ( id[0] == "a") { var state = BoughtCards[id2].state; }

    if ( id[0] == "b") { var state = final[id1][id2].state; }

    if ( id[0] == "c") { var state = mounts[id1][id2].state; }

    // The condition for the up playing card
    if (state == true) {

      if ( id[0] == "c" ) {
        var chosed = id[0] + "-" + id[1] + "-" + id[2];

        var Cnumber = mounts[id1][id2].number;
        var Ccolor  = mounts[id1][id2].color;
        var Csuit   = mounts[id1][id2].suit;
      }

      if ( id[0] == "b" ) {
        var chosed = id[0] + "-" + id[1] + "-" + id[2];

        var Cnumber = final[id1][id2].number;
        var Ccolor  = final[id1][id2].color;
        var Csuit   = final[id1][id2].suit;
      }

      if ( id[0] == "a" ) {
        var chosed = id[0] + "-" + id[1] + "-" + id[2];

        var Cnumber = BoughtCards[id2].number;
        var Ccolor  = BoughtCards[id2].color;
        var Csuit   = BoughtCards[id2].suit;
      }

      var state;  

      // The condition for the non-first playing card
      if (id[2] != "0" && id[0] != "a" && id[0] != "b") { 

        column = id2 - 1; 
        state = mounts[id1][column].state;
        column.toString(); 

        var behind  = id[0] + "-" + id[1] + "-" + column;
        var Bnumber = mounts[id1][column].number;
        var Bcolot  = mounts[id1][column].color;
        var Bsuit   = mounts[id1][column].suit;
        var Bstate  = mounts[id1][column].state = true;

        if (state == false) {

          chosen.push(behind);
      } 
    }

    rowSize = (mounts[id1].length - 1);

    // If have more cards beyond the chosed
    for ( var i = id2 ; i < rowSize && id[0] != "a" && id[0] != "b" ; i++ ) {

    var ii     = i + 1;
    var id2s   = ii.toString();
    var row    = id[0] + "-" + id1 + "-" + id2s;

    var sa = a;
    var sb = b;
    mounts[id[1]][i].row    = id1;
    mounts[id[1]][i].column = id2s;

    suspended.push(row);
    suspended_data.push(mounts[id1][i + 1]);
    }
  }

  // Puts in mounts_data Array all playing cards in the top layers
  for ( var a = 0 ; a < 7 ; a++ ) {
  
    for (var b = 0 ; b < mounts[a].length ; b++) {

      if ( mounts[a][b].state == true && (b + 1) == mounts[a].length) {
        var fa = a;
        var fb = b;
        mounts[a][b].row = fa.toString();
        mounts[a][b].column = fb.toString();
        mounts_data.push(mounts[a][b]);
      }
    }
  }

  if ( contSelect.length == 0 ) { 

    var checkChange = false;
    var finalCheck = false;
    var suit;
    var finalColumn;
    var not_possible = 0;

    switch (Csuit != "") {
      case (Csuit == "diamonds"):
        if (final[0].length > -1){ 
          if (Cnumber == ( final[0].length + 1 )) {
            suit = 0;
            finalCheck = true; 
            finalColumn = final[0].length.toString();
          }
        }
        break;
      case (Csuit == "spades"):
        if (final[1].length > -1){ 
          if (Cnumber == ( final[1].length + 1 )) {
            suit = 1;
            finalCheck = true; 
            finalColumn = final[1].length.toString();
          }
        }
        break;
      case (Csuit == "clubs"):
        if (final[2].length > -1){ 
          if (Cnumber == ( final[2].length + 1 )) {
            suit = 2;
            finalCheck = true; 
            finalColumn = final[2].length.toString();
          }
        }
        break;
      case (Csuit == "hearts"):
        if (final[3].length > -1){ 
          if (Cnumber == ( final[3].length + 1 )) {
            suit = 3;
            finalCheck = true; 
            finalColumn = final[3].length.toString();
          }
        }
        break;
    }

    if ( finalCheck == true && suspended_data.length == 0 ) {
      
      if ( id[0] == "c" ) { mounts[id1].splice(id2,1); }

      if ( id[0] == "b" ) { final[id1].splice(id2,1); }

      if ( id[0] == "a" ) { BoughtCards.splice(id2,1); }

      document.getElementById(chosed).style.display = "none";
      document.getElementById(chosed).style.backgroundImage = "none";

      if (id[2] != "0" && id[0] != "a" && id[0] != "b") { 
        var behindImg  = "url(cards/" + Bnumber.toString() + "_of_" + Bsuit + ".svg)";
        document.getElementById(behind).style.backgroundImage = behindImg;
      }

      var finalCard = {number: Cnumber,color: Ccolor,suit: Csuit,state: true,column: "",row: ""};
      final[suit].push(finalCard);

      var finalCardId  = "b-" + suit.toString() + "-" + finalColumn;
      var finalCardImg = "url(cards/" + Cnumber + "_of_" + Csuit + ".svg)"; 

      document.getElementById(finalCardId).style.display = "block";
      document.getElementById(finalCardId).style.backgroundImage = finalCardImg;

      checkChange = true;

      score += finalMountScore;
      put_score(score);
    }
    else { not_possible++; }

    if ( Cnumber == 13  && checkChange == false ){

      for ( var i = 0 ; i < 7 ; i++) {

        if ( mounts[i].length == 0 ) {

          if ( id[0] == "c" ) {
            mounts[id1].splice(id2,1);
          }

          if ( id[0] == "b" ) {
            final[id1].splice(id2,1);
          }

          if ( id[0] == "a" ) {
            BoughtCards.splice(id2,1);
          }

          document.getElementById(chosed).style.display = "none";
          document.getElementById(chosed).style.backgroundImage = "none";


          if (id[2] != "0" && id[0] != "a" && id[0] != "b") { 

            var behindImg   = "url(cards/" + Bnumber.toString() + "_of_" + Bsuit + ".svg)";
            document.getElementById(behind).style.backgroundImage = behindImg;
          }

          var king = {number: Cnumber,color: Ccolor,suit: Csuit,state: true,column: id[2],row: id[1]};
          mounts[i].push(king);

          var kingId  = "c-" + i.toString() + "-" + "0";
          var kingImg = "url(cards/13_of_" + Csuit + ".svg)"; 

          var r  = king.row;
          var rr = parseInt(r) ;
                    
          if ( suspended_data.length > 0 ) { 

          for ( var ki = 0 ; ki < suspended_data.length ; ki++){

            var sus_chosed = suspended_data[ki];

            var sus_id     = "c-" + id[1] + "-" + (id2 + (ki + 1)).toString();
            var sus_des_id = "c-" + i.toString() + "-" + (ki + 1).toString();

            var sus_row    = parseInt(sus_chosed.row);
            var sus_column = parseInt(sus_chosed.column)
            var sus_number = sus_chosed.number;
            var sus_suit   = sus_chosed.suit;
            var sus_color  = sus_chosed.color;
            var sus_img    = "url(cards/" + sus_number.toString() + "_of_" + sus_suit + ".svg)";

            mounts[i].push({number: sus_number, color: sus_color, suit: sus_suit, state: true, row: "", column: ""});
            mounts[id1].splice(id2,1);

            document.getElementById(sus_id).style.display = "none";
            document.getElementById(sus_id).style.backgroundImage = "none";

            document.getElementById(sus_des_id).style.display = "block";
            document.getElementById(sus_des_id).style.backgroundImage = sus_img;
            }
            suspended_data = [];  
          }

          document.getElementById(kingId).style.display = "block";
          document.getElementById(kingId).style.backgroundImage = kingImg;

          i = 6; // this line prevents that when two positions are empty the king doubles

          checkChange = true;
          score += addScore;
          put_score(score);
        }   
      }
    }

    if ( checkChange == false ) {

      for ( var i = 0 ; i < mounts_data.length ; i++ ) {

        var r = mounts_data[i].row;
        var c = parseInt(mounts_data[i].column) + 1;

        var destiny = "c-" + r + "-" + c.toString();

        if ( (Cnumber + 1) == mounts_data[i].number){

          if ( Ccolor != mounts_data[i].color) { 

            var rr = parseInt(r);

            mounts[rr].push({number: Cnumber, color: Ccolor, suit: Csuit, state: true, row: "", column: ""});

            if ( id[0] == "c" ) { mounts[id1].splice(id2,1); }

            else if ( id[0] == "b" ) { final[id1].splice(id2,1); }

            else if ( id[0] == "a" ) { BoughtCards.splice(id2,1); }
            
            var destinyImg = "url(cards/" + Cnumber.toString() + "_of_" + Csuit + ".svg)";

            if (id[2] != "0" && id[0] != "a" && id[0] != "b") { 
              var behindImg   = "url(cards/" + Bnumber.toString() + "_of_" + Bsuit + ".svg)";
              document.getElementById(behind).style.backgroundImage = behindImg;
            }

            document.getElementById(chosed).style.display = "none";
            document.getElementById(chosed).style.backgroundImage = "none";
            
            score += addScore;
            put_score(score);

            if ( suspended_data.length > 0 ) { 

              for ( var i = 0 ; i < suspended_data.length ; i++){

                var sus_chosed = suspended_data[i];

                var sus_id     = "c-" + id[1].toString() + "-" + (id2 + (i + 1)).toString();
                var sus_des_id = "c-" + r.toString() + "-" +(c + (i + 1)).toString();

                var sus_row    = parseInt(sus_chosed.row);
                var sus_column = parseInt(sus_chosed.column)
                var sus_number = sus_chosed.number;
                var sus_suit   = sus_chosed.suit;
                var sus_color  = sus_chosed.color;
                var sus_img    = "url(cards/" + sus_number.toString() + "_of_" + sus_suit + ".svg)";

                mounts[rr].push({number: sus_number, color: sus_color, suit: sus_suit, state: true, row: "", column: ""});
                mounts[id1].splice(id2,1);

                document.getElementById(sus_id).style.display = "none";
                document.getElementById(sus_id).style.backgroundImage = "none";

                document.getElementById(sus_des_id).style.display = "block";
                document.getElementById(sus_des_id).style.backgroundImage = sus_img;
              }
              suspended_data = [];
            }
            document.getElementById(destiny).style.display = "block";
            document.getElementById(destiny).style.backgroundImage = destinyImg;
                        
            mounts_data.length = [];
            }
          }
        }
      } 
    }
  }

// :=:=:=:=:=:=:=:=:=:  This part is to the options and efects :=:=:=:=:=:=:=:=:=:=:=:=:=:
// :=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:    
  
document.addEventListener("keydown", keyPush);

function keyPush(event){
    if ( event.keyCode == 81 ) { pauseCont++; }
    if ( event.keyCode == 82 ) { reloadPage(); }
}

var pauseCont = 0;

setInterval(pauseGame, 1000);

function pauseGame() {

    if ( pauseCont === 0 ) { 
        document.getElementById("pause_title").innerHTML = "Start<Br><span style = 'font-size: 35px; margin-left: 18%;'>Press 'Q'</span>"; 
    }
    else { document.getElementById("pause_title").innerHTML = "Pause"; }

    if ( (pauseCont%2) !== 0 ) {
        document.getElementById('sureToBG').style.display = "none"; 
        document.getElementById('pause_title').style.display = "none"; 
        document.getElementById('pause_bttn').style.backgroundImage = "url(src/pause.png)";
        document.getElementById('pause_bttn').title = "Pause (or press 'Q')";
        document.getElementById("sureToReload").style.display = "none"; 
        chronometer();
    }
    else { 
        document.getElementById('sureToBG').style.display = "block"; 
        document.getElementById('pause_title').style.display = "block"; 
        document.getElementById('pause_bttn').style.backgroundImage = "url(src/play.png)"; 
        document.getElementById('pause_bttn').title = "Play (or press 'Q')";
    }
}

var second = 0;
var minute = 0;

function chronometer() {

    second = parseInt(second);
    minute = parseInt(minute);
    second++;

    if ( second == 60) { minute++; second = 0; }

    if ( minute < 10 ) { minute.toString(); minute = "0" + minute; }

    if ( second < 10 ) { second.toString(); second = "0" + second; }

    document.getElementById('timer').innerHTML = minute + ":" + second;
}

function reloadPage() {

    document.getElementById("sureToReload").style.display = "block";
    if ( (pauseCont%2) !== 0 ) {pauseCont++; }
}

function SureReloadPage(condition) {

    if ( condition == "yesSure" ) {
        document.getElementById("sureToReload").style.display = "none";
        document.getElementById("sureToBG").style.display = "none";
        closeGameOver();
        if ( (pauseCont%2) !== 0 ) {pauseCont++; }
    }
    else { 
        document.getElementById("sureToReload").style.display = "none"; 
        document.getElementById("sureToBG").style.display = "none";
        if ( (pauseCont%2) !== 0 ) {pauseCont++; }
    }
}

function put_score(score) { document.getElementById('score').innerHTML = score; } 

function makesBorder(id) {

    var Id = id.split("-");
    var id1 = parseInt(Id[1]);
    var id2 = parseInt(Id[2]);

    if ( Id[0] == "a") { var state = BoughtCards[id2].state; }

    if ( Id[0] == "b") { var state = final[id1][id2].state; }

    if ( Id[0] == "c") { var state = mounts[id1][id2].state; }

    if (state == true) {

        document.getElementById(id).style.width = "99px";
        document.getElementById(id).style.border = "2px solid rgba(0,255,50,1)";
    }
}

function destroyBorder(id) {

    document.getElementById(id).style.width = "100px";
    document.getElementById(id).style.border = "none";
}  
    
function openWarning()    { document.getElementById("warning_page").style.display = "block";}

function closeWarning()   { document.getElementById("warning_page").style.display = "none";}

function openChangelog()  { document.getElementById("changelog_page").style.display = "block";}
 
function closeChangelog() { document.getElementById("changelog_page").style.display = "none";}

function gameOver() {

    var contFinal = 0;
    var confirm;

    for ( var end = 0 ; end < 4 ; end++ ) {
        if ( final[end].length == 13 ) { contFinal++; } 
    }

    if ( contFinal == 4 ) {  
        document.getElementById("GameOverScreen").style.display = "block"; 
        document.getElementById("GameOverBG").style.display = "block;"
        pauseCont = 0; }

    if (confirm == true) {
        parent.window.document.location.href = ''; }

    if ( buyCards.length == 0 && BoughtCards.length == 0 ) { 
        document.getElementById("reset").style.display = "none"; }

}
setInterval(gameOver, 400);

function closeGameOver() {

    document.getElementById("GameOverScreen").style.display = "none";
    parent.window.document.location.href = '';
}     

function undoing() { 

    for ( var a = (undo[7].length - 1); a >= 0 ; a-- ){
        var undo_pos = a.toString();

        document.getElementById("a-0-" + undo_pos).style.backgroundImage = "url(cards/back.jpg)";            
    }

    for ( var b = (undo[8].length - 1); b >= 0 ; b-- ){

        var undo_pos = b.toString();

        var undo_number = undo[8][b].number.toString();
        var undo_suit   = undo[8][b].suit;

        var undoCard = "url(cards/" + undo_number + "_of_" + undo_suit + ".svg)";
        document.getElementById("a-1-" + undo_pos).style.backgroundImage = undoCard;    
    }
}