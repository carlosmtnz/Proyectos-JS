var contador =1;
function cambiar(){
	document.getElementById("radio"+contador).checked=true;
	contador++;
	if(contador>3){
		contador=1;
	};
};	
setInterval(cambiar,5000);
