function aniadir(){
	var AniadeTextoLista;
	AniadeTextoLista = document.getElementById("textoLista").value;
	document.getElementById("tituloLista").innerHTML= AniadeTextoLista;
	textoLista.value="";
	document.getElementById("cuadroLista").style.display="block"; 

	//alert("Hola Mundo");
}
function guardarTarea(){
	var AniadeTarea;
	AniadeTarea = document.getElementById("textoTarea").value;
	//alert(AniadeTarea);
	var cuadroLista=document.getElementById("cuadroLista");
	var marca=document.getElementById("textoTarea");
	var elemento=document.createElement("div");
	elemento.innerHTML= AniadeTarea;
	elemento.className = "tarea";
	cuadroLista.insertBefore(elemento, marca);
	textoTarea.value="";
	textoTarea.focus();

}

//Para lostas multiples se manejan elementos vivos o elementos on en Jquery

function aparecerForm(){
	document.getElementById("cuadroAniadir").style.display="block";
	//alert("Hola");
	document.getElementById("aniadirblue").style.display="none";
}