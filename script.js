var row=0;
var col=0;
var count=0;
var win=0;

function instruction(){
    document.getElementById("instrBtn").click();
}

// alert("Before Starting the gameplay, we would reccomend you to see the instructions.")
// Creating 2D array   Matrices
var arr=new Array(3);
for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(3);
}
arr[0] = ['-','-','-'];
arr[1] = ['-','-','-'];
arr[2] = ['-','-','-'];

function startG(){
    for(i=0;i<3;i++) {
        for(j=0;j<3;j++) {
            pos=i*3+j;
            document.getElementById("pos"+pos).innerText="-"+arr[i][j];
        }
    }
}

function resetGame(){
    location.reload();
}

function winning_msg_on(x){
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlay").innerText=x;
}

function winning_msg_off() {
    document.getElementById("overlay").style.display = "none";
    resetGame();
}

console.log(arr)

function game(pos){
    var row=Math.floor(pos/3);
    var col=pos%3;
    userMove(row,col);
}

function userMove(i,j){
    console.log(i+" "+j)
    if(arr[i][j]=='-')
    {
        count=count+1;
        pos=i*3+j;
        document.getElementById("pos"+pos).innerText="X";
        arr[i][j]='X';
        var flag=1;
        if(count==1)
        {
            if(pos===4){
                arr[0][2]='O';
                computerMove(2);
                flag=0;
            }
            else{
                arr[1][1]='O';
                computerMove(4);
                flag=0;
            }
        }
    
        winUser();
        if(win==0 && flag==1)
            setTimeout("logic()",100);
        checkAndDisplay();
    }
}
function computerMove(x){
    document.getElementById("pos"+x).innerText="O";
    checkAndDisplay();

}

function checkAndDisplay(){
    if(win==0){
        if(count>=5)
            winning_msg_on("Game DRAW!...You gave a tough competition ;)\n");
        else{
            console.log("heolo");
        }
    }
    else if(win==1)
        winning_msg_on("You Lose!...BETTER LUCK NEXT TIME :(\n");
    else
        winning_msg_on("Hurray!...YOU WON :)\n");
}

function winUser()
{
    // winning condition for user
    if((arr[0][0]=='X'&&arr[0][1]=='X'&&arr[0][2]=='X')||(arr[1][0]=='X'&&arr[1][1]=='X'&&arr[1][2]=='X')||(arr[2][0]=='X'&&arr[2][1]=='X'&&arr[2][2]=='X')||(arr[0][0]=='X'&&arr[1][0]=='X'&&arr[2][0]=='X')||(arr[0][1]=='X'&&arr[1][1]=='X'&&arr[2][1]=='X')||(arr[0][2]=='X'&&arr[1][2]=='X'&&arr[2][2]=='X')||(arr[0][0]=='X'&&arr[1][1]=='X'&&arr[2][2]=='X')||(arr[2][0]=='X'&&arr[1][1]=='X'&&arr[0][2]=='X'))
    {
        win=2;
    }
}

function winSystem()
{
    // winning condition for computer
    if((arr[0][0]=='O'&&arr[0][1]=='O'&&arr[0][2]=='O')||(arr[1][0]=='O'&&arr[1][1]=='O'&&arr[1][2]=='O')||(arr[2][0]=='O'&&arr[2][1]=='O'&&arr[2][2]=='O')||(arr[0][0]=='O'&&arr[1][0]=='O'&&arr[2][0]=='O')||(arr[0][1]=='O'&&arr[1][1]=='O'&&arr[2][1]=='O')||(arr[0][2]=='O'&&arr[1][2]=='O'&&arr[2][2]=='O')||(arr[0][0]=='O'&&arr[1][1]=='O'&&arr[2][2]=='O')||(arr[2][0]=='O'&&arr[1][1]=='O'&&arr[0][2]=='O'))
    {
        win=1;
    }
}

function logic(x){
    var flag=x;   //too check system move
    var pos,i,j;

    //if system is near to win

    for(i=0;i<3;i++)                   //row move
    {
        if(arr[i][0]=='O' && arr[i][1]=='O' && arr[i][2]=='-')
        {
            arr[i][2]='O';
            pos=i*3+2;
            flag=1;
            break;
        }
        else if(arr[i][1]=='O' && arr[i][2]=='O'&& arr[i][0]=='-')
        {
            arr[i][0]='O';
            pos=i*3+0;
            flag=1;
            break;
        }
        else if(arr[i][2]=='O' && arr[i][0]=='O' && arr[i][1]=='-')
        {
            arr[i][1]='O';
            pos=i*3+1;
            flag=1;
            break;
        }
        else
           flag=0;
    }
    if(flag==0)
    for(i=0;i<3;i++)                   //column move
    {
        if(arr[0][i]=='O' && arr[1][i]=='O' && arr[2][i]=='-')
        {
            arr[2][i]='O';
            pos=i+3*2;
            flag=1;
            break;
        }
        else if(arr[1][i]=='O' && arr[2][i]=='O' && arr[0][i]=='-')
        {
            arr[0][i]='O';
            pos=i+3+0;
            flag=1;
            break;
        }
        else if(arr[2][i]=='O' && arr[0][i]=='O' && arr[1][i]=='-')
        {
            arr[1][i]='O';
            pos=i+3*1;
            flag=1;
            break;
        }
        else
	        flag=0;
    }
    if(flag==0)
        if(arr[0][0]=='O' && arr[1][1]=='O' && arr[2][2]=='-')
        {
            arr[2][2]='O';
            pos=8;
            flag=1;
        }
        else if(arr[1][1]=='O' && arr[2][2]=='O' && arr[0][0]=='-')
        {
            arr[0][0]='O';
            pos=0;
            flag=1;
        }
        else if(arr[2][2]=='O' && arr[0][0]=='O' && arr[1][1]=='-')
        {
            arr[1][1]='O';
            pos=4;
            flag=1;
        }
        else
	        flag=0;

    if(flag==0)
        if(arr[2][0]=='O' && arr[1][1]=='O' && arr[0][2]=='-')
        {
            arr[0][2]='O';
            pos=2;
            flag=1;
        }
        else if(arr[1][1]=='O' && arr[0][2]=='O' && arr[2][0]=='-')
        {
            arr[2][0]='O';
            pos=6;
            flag=1;
        }
        else if(arr[0][2]=='O' && arr[2][0]=='O' && arr[1][1]=='-')
        {
            arr[1][1]='O';
            pos=4;
            flag=1;
        }
        else
	        flag=0;



    if(flag==0)
    for(i=0;i<3;i++)                   //row move
    {
        if(arr[i][0]=='X' && arr[i][1]=='X' && arr[i][2]=='-')
        {
            arr[i][2]='O';
            pos=3*i+2;
            flag=1;
            break;
        }
        else if(arr[i][1]=='X' && arr[i][2]=='X' && arr[i][0]=='-')
        {
            arr[i][0]='O';
            pos=3*i;
            flag=1;
            break;
        }
        else if(arr[i][2]=='X' && arr[i][0]=='X' && arr[i][1]=='-')
        {
            arr[i][1]='O';
            pos=3*i+1;
            flag=1;
            break;
        }
        else
	        flag=0;
    }
    if(flag==0)
    for(i=0;i<3;i++)                   //column move
    {
        if(arr[0][i]=='X' && arr[1][i]=='X' && arr[2][i]=='-')
        {
            arr[2][i]='O';
            pos=6+i;
            flag=1;
            break;
        }
        else if(arr[1][i]=='X' && arr[2][i]=='X' && arr[0][i]=='-')
        {
            arr[0][i]='O';
            pos=i;
            flag=1;
            break;
        }
        else if(arr[2][i]=='X' && arr[0][i]=='X' && arr[1][i]=='-')
        {
            arr[1][i]='O';
            pos=3+i;
            flag=1;
            break;
        }
        else
	        flag=0;
    }
    if(flag==0)
        if(arr[0][0]=='X' && arr[1][1]=='X' && arr[2][2]=='-')
        {
            arr[2][2]='O';
            pos=8;
            flag=1;
        }
        else if(arr[1][1]=='X' && arr[2][2]=='X' && arr[0][0]=='-')
        {
            arr[0][0]='O';
            pos=0;
            flag=1;
        }
        else if(arr[2][2]=='X' && arr[0][0]=='X' && arr[1][1]=='-')
        {
            arr[1][1]='O';
            pos=4;
            flag=1;
        }
        else
	        flag=0;

    if(flag==0)
        if(arr[2][0]=='X' && arr[1][1]=='X' && arr[0][2]=='-')
        {
            arr[0][2]='O';
            pos=2;
            flag=1;
        }
        else if(arr[1][1]=='X' && arr[0][2]=='X' && arr[2][0]=='-')
        {
            arr[2][0]='O';
            pos=6;
            flag=1;
        }
        else if(arr[0][2]=='X' && arr[2][0]=='X' && arr[1][1]=='-')
        {
            arr[1][1]='O';
            pos=4;
            flag=1;
        }
        else
	        flag=0;

    if(flag==0)
    for(i=0;i<3;i++)
        if(flag==0)
	    for(j=0;j<3;j++)
            if(arr[i][j]=='-')
            {
                arr[i][j]='O';
                pos=3*i+j
                flag=1;
        		break;
            }
    console.log(pos);
    winSystem();
    computerMove(pos);

}