var i=1; //counter
function randvalue(maxVal,no_of_time){
	i++; //counter increment
 	document.getElementById('txnew').innerHTML=''; //element made blank
 	//get a random no upto maxVal and round it to two decimal place
 	var theNumber = (Math.random()*parseInt(maxVal)).toFixed(0);
 	//put the number to that
 	document.getElementById('txnew').innerHTML=theNumber; //gett
 	if(i<=no_of_time)
   	setTimeout("randvalue("+maxVal+","+no_of_time+")",300);
 	else
 	i=1;
}

//
// Function: showBack(event)
// Called when the info button is clicked to show the back of the widget
//
// event: onClick event from the info button
//
function showBack(event)
{
    var front = document.getElementById("front");
    var back = document.getElementById("back");

    if (window.widget) {
        widget.prepareForTransition("ToBack");
    }

    front.style.display = "none";
    back.style.display = "block";

    if (window.widget) {
        setTimeout('widget.performTransition();', 0);
    }
}

//
// Function: showFront(event)
// Called when the done button is clicked from the back of the widget
//
// event: onClick event from the done button
//
function showFront(event)
{
    var front = document.getElementById("front");
    var back = document.getElementById("back");

    if (window.widget) {
        widget.prepareForTransition("ToFront");
    }

    front.style.display="block";
    back.style.display="none";

    if (window.widget) {
        setTimeout('widget.performTransition();', 0);
    }
}

if (window.widget) {
    widget.onremove = remove;
    widget.onhide = hide;
    widget.onshow = show;
    widget.onsync = sync;
}