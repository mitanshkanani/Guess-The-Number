const computerval=Math.floor(Math.random()*100+1)
console.log(computerval);
function guess(){
    const main1=document.getElementById("part1");
    console.log(main1.value);
    var p3=document.getElementById('part3');
    div=p3.querySelector('div')
    if (main1.value<computerval) {
        div.innerHTML=
        `
        <p> Your Guess Is Smaller Than the computers value</p>
        `
    } else if(main1.value>computerval) {
        div.innerHTML=
        `
        <p> Your Guess Is Greater Than the computers value</p>

        `
    }
    else{
        div.innerHTML=`
        <h1>Congrats Your guess Matched the computer value</h1>
        `
    }
}