var textbox1 = parseInt(document.getElementById("textbox1").value);
var textbox2 = parseInt(document.getElementById("textbox2").value);



function oneevent(){11
    var one="1";
    const heading = document.getElementById("textbox1");

    heading.innerText += one;
}

function twoevent(){
    var two="2";
    const heading = document.getElementById("textbox1");
    heading.innerText += two;
}

function threeevent(){
    var three="3";
    const heading = document.getElementById("textbox1");
    heading.innerText += three;
}

function fourevent(){
    var four="4";
    const heading = document.getElementById("textbox1");
    heading.innerText += four;
}

function fiveevent(){
    var five="5";
    const heading = document.getElementById("textbox1");
    heading.innerText += five;
}

function sixevent(){
    var six="6";
    const heading = document.getElementById("textbox1");
    heading.innerText += six;
}

function sevenevent(){
 var seven="7";
 const heading=document.getElementById("textbox1");
 heading.innerText += seven;
}

function eightevent(){
    var eight="8";
    const heading=document.getElementById("textbox1");
    heading.innerText += eight;

}

function nineevent(){
    var nine="9";
    const heading=document.getElementById("textbox1");
    heading.innerText += nine;
}

function zeroevent(){
    var zero="0";
    const heading=document.getElementById("textbox1");
    heading.innerHTML += zero;
}

function clearevent(){
    const heading=document.getElementById("textbox1");
    const heading2=document.getElementById("textbox2");
    const heading3=document.getElementById("textbox3");
    heading.innerHTML= "";
    heading2.innerHTML="";
    heading3.innerHTML="";
}

function addition() {
    var textbox1 = parseInt(document.getElementById("textbox1").value);
    var textbox2 = parseInt(document.getElementById("textbox2").value);

    // Check if either of the values are NaN
    if (isNaN(textbox1) || isNaN(textbox2)) {
        alert("Please enter valid numbers in both textboxes.");
        return;
    }

    var sum = textbox1 + textbox2;
    const heading = document.getElementById("textbox3");
    heading.innerText += sum;
}

function subtraction() {
    var textbox1 = parseInt(document.getElementById("textbox1").value);
    var textbox2 = parseInt(document.getElementById("textbox2").value);

    // Check if either of the values are NaN
    if (isNaN(textbox1) || isNaN(textbox2)) {
        alert("Please enter valid numbers in both textboxes.");
        return;
    }

    var sub = textbox1 - textbox2;
    const heading = document.getElementById("textbox3");
    heading.innerText += sub;
}

function multiplication(){
  var textbox1 = parseInt(document.getElementById("textbox1").value);
  var textbox2 = parseInt(document.getElementById("textbox2").value);

  // Check if either of the values are NaN
  if (isNaN(textbox1) || isNaN(textbox2)) {
      alert("Please enter valid numbers in both textboxes.");
      return;
  }

  var sub = textbox1 * textbox2;
  const heading = document.getElementById("textbox3");
  heading.innerText += sub;
}

function division(){
  var textbox1 = parseInt(document.getElementById("textbox1").value);
  var textbox2 = parseInt(document.getElementById("textbox2").value);

  // Check if either of the values are NaN
  if (isNaN(textbox1) || isNaN(textbox2)) {
      alert("Please enter valid numbers in both textboxes.");
      return;
  }

  var sub = textbox1 / textbox2;
  const heading = document.getElementById("textbox3");
  heading.innerText += sub;
}