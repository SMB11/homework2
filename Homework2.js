const first_variable = 50,
	  second_variable = 10;
 

window.onload = function () {

    var a = document.getElementById('button');
    var b = document.getElementById('button2');
    var c = document.getElementById('button3');
    var d = document.getElementById('button4');
    
    a.onclick = function() {
        console.log(first_variable + second_variable)
        alert(first_variable+ second_variable + "  also written in console")
    }
    b.onclick = function(){
    	console.log(first_variable - second_variable)
    	alert(first_variable - second_variable + "  also written in console")
    }
    c.onclick = function(){
    	console.log(first_variable * second_variable)
    	alert(first_variable * second_variable + "  also written in console")
    }
    d.onclick = function(){
    	console.log(first_variable / second_variable)
    	alert(first_variable / second_variable + "  also written in console")
    }
}