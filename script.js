

    var srcs=[];
    var isflipped=[];
    var imgs=document.getElementsByClassName("images");

        for(i=0;i<6;i++){
            isflipped[i+1]=0;
            srcs[i]=imgs[i].getAttribute("src");
            imgs[i].setAttribute("src", "images/cover.png");
        }


function flip(index) {

    var flippedcards= check(index);
    console.log(flippedcards);
    if(isflipped[index]==0 && flippedcards==0){flip1(index);}
    else if(isflipped[index]==0 && flippedcards==1){flipall();}
    else{console.log("There is an ERROR");
            // fclip(index);
        }
    // else if(isflipped[index]==1){flip2(index);
    }



function check(index) {
    let flippedcards=0;
    for(i=1;i<=6;i++){
                if(isflipped[i]==1){                /////////FINAL TEST////////////
                                            if(srcs[i-1]==srcs[index-1]){
                                                                alert("Hurrayyy! YOU WON THE GAME.");
                                                                console.log("Hurrayyy! YOU WON THE GAME.");
                                                                prompt("Hurrayyy! YOU WON THE GAME.");
                                                          //////////GAME WON/////////////////////////      
                                            }
                    flippedcards++;}
    }
    console.log(flippedcards);
    return flippedcards;}



function flip1(index){
    var img = document.getElementById('img'+index);
    img.setAttribute("src", srcs[index-1]);
    isflipped[index]=1;

}


function flipall(index){
                for(i=1;i<=6;i++){
                    var img = document.getElementById('img'+i);
                    img.setAttribute("src", "images/cover.png");
                    isflipped[i]=0;
                    console.log(i);

                }

        // console.log(index);

        // var img = document.getElementById('img'+index);
        // // console.log(img.getAttribute("src"));
        // // srcs[index] = img.getAttribute("src");
        // img.setAttribute("src", "images/cover.png");
        // // console.log(img.getAttribute("src"));

        // isflipped[index]=0;
       
}        





