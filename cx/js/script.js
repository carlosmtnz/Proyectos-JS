var ValoresSeccion1=0;
var ValoresSeccion2=0;
var ValoresSeccion3=0;
function promedio(campo) {
	var seccionIndicada= parseInt (campo.substr(3,1));
	var seccionBusqueda= "s"+campo.substr(3,1)
	var seccion= document.getElementById(seccionBusqueda);
	var totalCampos=seccion.getElementsByTagName("select");
	var nomGrupo="ValoresSeccion"+campo.substr(3,1);
	var promedioFinal= this[nomGrupo]/(totalCampos.length);
	var redondeo= promedioFinal.toString().substr(0,4);
	document.getElementById(campo).innerHTML= redondeo;
};

function marcar(fila, campo, seccion)  {
	//Remueve el campo "Elige..." del select
	var sel=document.getElementById(campo);
	if(sel.length>=6){
	sel.remove(0);
	};
	var row = document.getElementById(fila);
	var celdasb = row.getElementsByClassName("bajo");
	if(celdasb.length>0){
		celdasb[0].className="escala";
	}
	var celdasm = row.getElementsByClassName("medio");
	if(celdasm.length>0){
		celdasm[0].className="escala";
	}	
	var celdasa = row.getElementsByClassName("alto");
	if(celdasa.length>0){
		celdasa[0].className="escala";
	}
	var valor= document.getElementById(campo).value;
	var celda=campo+valor;
	var numero=parseInt(valor);
	if(numero<=2){
		document.getElementById(celda).className="bajo";
	};
	if(numero==3){
		document.getElementById(celda).className="medio";
	};
	if(numero>=4){
		document.getElementById(celda).className="alto";
	};
	//document.getElementById(campo).style.display="none";
	var nomGrupo="ValoresSeccion"+seccion.substr(3,1);
	this[nomGrupo]+=numero;
	promedio (seccion);
	document.getElementById(campo).blur();
};

function mostrarOcultar(nuSec,no1,no2,no3){
	var idImg;
	var idSec;
	var cambioBot;
	var cambioSec;
	idImg="pic"+nuSec;
	idSec="s"+nuSec;
	var boton= document.getElementById(idImg);
	if(boton.src=="img/colapsado.png"){
		boton.src="img/expandido.png";
	}else{
		boton.src="img/colapsado.png";
	};
	var seccion=document.getElementById(idSec);
	if(seccion.style.display=="none"){
		seccion.style.display="block";
	}else{
		seccion.style.display="none";
	};
	var bo1="pic"+no1;
	var bo2="pic"+no2;
	var bo3="pic"+no3;
	var so1="s"+no1;
	var so2="s"+no2;
	var so3="s"+no3;
	var botOcultar1=document.getElementById(bo1);
	var botOcultar2=document.getElementById(bo2);
	var botOcultar3=document.getElementById(bo3);
	var secOcultar1=document.getElementById(so1);
	var secOcultar2=document.getElementById(so2);
	var secOcultar3=document.getElementById(so3);
	botOcultar1.src="img/colapsado.png";
	botOcultar2.src="img/colapsado.png";
	botOcultar3.src="img/colapsado.png";
	secOcultar1.style.display="none";
	secOcultar2.style.display="none";
	secOcultar3.style.display="none";
};


function imprimir() {
  document.getElementById("s0").style.display="none";
  document.getElementById("pic0").style.display="none";
  document.getElementById("titInstruc").style.display="none";
  document.getElementById("s1").style.display="block";
  document.getElementById("s2").style.display="block";
  document.getElementById("s3").style.display="block";
  document.getElementById("secImpresion").style.display="none";
  window.print();
  document.getElementById("secImpresion").style.display="block";
  document.getElementById("s0").style.display="none";
  document.getElementById("pic0").style.display="block";
  document.getElementById("titInstruc").style.display="block";
  document.getElementById("s1").style.display="none";
  document.getElementById("s2").style.display="none";
  document.getElementById("s3").style.display="none";
}

function resetear(campo,seccion) {
	var Valor= document.getElementById(campo).value;
	var ValorAlterar="ValoresSeccion"+seccion;
	if (Valor !="Elige..."|| Valor>0){
		var valorDescuento=parseInt(Valor);
		var nuevoValor= this[ValorAlterar]-valorDescuento;
		this[ValorAlterar]=nuevoValor;
	};	
};