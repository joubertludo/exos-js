
	var notes =[];
	var total = 0;

	for (var i=0; i <10; i++)
	{
	   notes[i]=Number(prompt(`Entrez la note n° ${i+1}`));
	   total = total+notes[i];
	}
	var moy = total/notes.length;
	alert("Ta moyenne est de" +moy);

	var premiernombre=prompt('entrez votre premier nombre');
	var deuxiemenombre=prompt('entrez votre deuxieme nombre');
	var somme=(Number(premiernombre) + Number(deuxiemenombre)) / 2;
	alert('le total est de '+somme);
	var cumulNotes=0;
	cumulNotes=cumulNotes + Number(prompt('entrez un nombre'));
	cumulNotes=cumulNotes + Number(prompt('entrez un nombre'));
	// console.log(cumulNotes/2);
	var cumulNotes=0;

	var nombreNotes=Number(prompt('combien de notes'));

	for(var i = 1; i<= nombreNotes; i++)
	{
		cumulNotes=cumulNotes + Number(prompt('entrez un nombre' + i));
	}
	console.log(cumulNotes/ nombreNotes);

	var x =prompt('entrez  nom de domaine');
	var nondomaineTab = x.split('.');
	var ext= nondomaineTab.length - 1;
	alert('mon nom domaine est' + nondomaineTab[ext]);

	var tab = Array('5','8','15','22','45');

	for(var i= 0;i < tab.length; i++){

	 if(tab[i]>=10)
	{console.log(tab[i])}

	else
	{
		console.log('les notes suivantes sont inferieur à 10 : ' + tab[i]);
	}
	}
	var tab= Array('10','5','16','25');

	var notesSup=0;
	var notesInf=0;

	for(var i =0 < tab;length;i++)
	{
	if(tab[i]<10)
		{notesInf ++;}
	else{notesSup ++;}
	
	var tab=[];
	var notesSup=0;
	var notesInf=0;

	for(var i = 0;i < 10 ; i++)

		{

			var nombreSaisie =Number(prompt('entrez 10 nombres'));
	        tab.push(nombreSaisie);
		}
		    console.log(tab);

	for(var i= 0;i< 10; i++)
	{
		if(tab[i]<10)
			{notesInf ++}
		else{notesSup ++}
	}
	console.log('notes inférieur à 10 :' + notesInf);
	console.log('notes supérieur à 10 :' + notesSup);

	var  codeOperation;
	var a = Number(prompt('saisis un nombre'));
	var b = Number(prompt('saisis un deuxième nombre'));


	while ((codeOperation!='+') && (codeOperation!='-') &&(codeOperation!='*') &&(codeOperation!='/'))

	{
		codeOperation = prompt('saisis un code operation');
	}

	if(codeOperation=='+')
	{
	 addition(a,b)
	}
	else 
	{
		 if(codeOperation=='-')
	 	{
	 	soustraction(a,b)
	 	}
	 	else
	 	{
			if(codeOperation=='*')
	 		{
	 		multiplication(a,b)
	 		}
	 		else
	 		{
	 		division(a,b)
	 		}

	 	}
	}



	 function addition(a,b){(console.log(a+b))};
	 function soustraction(a,b){(console.log(a-b))};
	 function multiplication(a,b){(console.log(a*b))};
	 function division(a,b){(console.log(a/b))};


	var chien1= {
		name:"Limbo",
		race:"husky",
		color:"white",
		nbrePattes:4,
		laisse : {color : "red"},
		parler : function (x)
		{
			alert('bonjour ' + x + " je m'appelle " + this.name);

		}

	}
	chien1.parler('franck')

	var chien2 = {
		name:"shadows",
		race:"caniche",
		color:"grey",
		nbrePattes:4,

	}
	var listchiens =[chien1,chien2]
	for(var i= 0;i<listchiens.length;i++)
	{
		console.log(listchiens[i].name);
	}
	chien1.parler(chien2.name);
	console.log(chien1.laisse.color);

	function Chien(a,b)
	{
		this.name = a;
		this.color = b;
		this.parler =function(x)
		{
			alert("bonjour  je m'appelle " + this.name);
		}
	}
	var chien1 = new Chien ('limbo','blue');
	var chien2 = new Chien ('uzo','noir');
	chien1.parler(' limbo');



	var  codeOperation;


	while ((codeOperation!='+') && (codeOperation!='-') &&(codeOperation!='*') &&(codeOperation!='/'))

	{
		codeOperation = prompt('saisis un code operation');
	}
	var a = Number(prompt('saisis un nombre'));
	var b = Number(prompt('saisis un deuxième nombre'));

	if(codeOperation=='+')
	{
	 addition(a,b)
	}
	else 
	{
		 if(codeOperation=='-')
	 	{
	 	soustraction(a,b)
	 	}
	 	else
	 	{
			if(codeOperation=='*')
	 		{
	 		multiplication(a,b)
	 		}
	 		else
	 		{
	 		division(a,b)
	 		}

	 	}
	}
	 function addition(a,b){(console.log(a+b))};
	 function soustraction(a,b){(console.log(a-b))};
	 function multiplication(a,b){(console.log(a*b))};
	 function division(a,b){(console.log(a/b))};


	var codeOp ;
	while((codeOp !='+') && (codeOp !='-') && (codeOp !='*') && (codeOp !='/'))
	{
		codeOp = prompt('saisie une opération');
	}
	var x =Number(prompt('saisie un nombre'));
	var y =Number(prompt('saisie un deuxième nombre'));

	if(codeOp=='+')
	{
		addition(x,y)
	}
	else
	{
		if(codeOp=='-')
		{
			soustraction(x,y)
		}
		else
		{
			if(codeOp=='*')
			{
				multiplication(x,y)
			}
			else
			{
				if(codeOp=='/')
				{
					division(x,y)
				}
			}
		}
	}
	function addition (x,y) {(console.log(x+y))};
	function soustraction (x,y) {(console.log(x-y))};
	function multiplication (x,y) {(console.log(x*y))};
	function division (x,y) {(console.log(x/y))};



	var entier =(entierAleatoire(1,100));

	var x = Number(prompt('saisir un nombre entre 1 et 100'));


	var tab=[];
	tab.push(x);


	while(x != entier)
	{
		
		if(x < entier)
		{   	
			console.log('saisie un nombre plus grand');
			x = Number(prompt('saisie un nombre plus grand'));
	    }

		else
		{
			console.log('saisie un nombre plus petit');
			x = Number(prompt('saisie un nombre plus petit'));
		}
	    tab.push(x);

	}
	       alert('bravo tu as trouvé ' + tab.length +  ' coups');


	for( var i = 0 ; i <tab.length ; i++)
	 {
	 	console.log(tab[i]);
	 }

	function entierAleatoire(min,max)
	{
		 return Math.floor(Math.random() * (max - min + 1)) + min;
	}


	var tab =['hortense|500','hortense|250','laurine|25','laurine|50'];

	var total=0;

	 for(var i = 0 ;i< tab.length ; i++)
	 {
	 	var tab2 =tab[i].split('|');
	    total=total + Number(tab2[1]);
	 }
	 alert(total);


	var tab = [['a','b'],['c','d']];

	for(var i = 0 ;i < tab.length ; i++)
	    {
	    	for(var a = 0; a < tab[i].length; a++)
	    		{
	    			console.log(tab[i][a]);
	    		}
	    }


	var chat1 ={
		color:"noir",
		name:"colt",
		parler:function(nom)
		{alert('bonjour ' + nom)}


	}
	alert(chat1.color);
	alert(chat1.name);
	chat1.parler('ludo')

	var chat2 ={
		color:"grey",
		name:"chonchon",

	}
	chat1.parler(chat2.name);


	function Chat(a,b)
	{
		this.name = a;
		this.color = b;
		this.disBonjour = function(x)
		{
	      alert("bonjour " + "je m'appelle " + this.name);
		}
	}
	var chat3 = new Chat("fun","red");
	var chat4 = new Chat("chie","vert");
	var monPremierChiffre = Number(prompt('quel est ton premier chiffre'));
	var monDeuxièmeChiffre = Number(prompt('quel est ton deuxième chiffre'));
	var operation1 = new Operation(monPremierChiffre,monDeuxièmeChiffre);
	console.log("le résultat de l'addition est " +operation1.addition());
	console.log("le résultat de la soustraction est " +operation1.soustraction());
	console.log("le résultat de la multiplication est " +operation1.multiplication());
	console.log("le résultat de la division est " +operation1.division());

	function Operation(a,b)
	{
		this.a =Number(a);
		this.b =Number(b )
		this.addition =function()
		 {return(this.a + this.b)};
		this.soustraction = function()
		 {return(this.a - this.b)};
		this.multiplication = function()
		 {return(this.a * this.b)};
		this.division = function()
	     {return(this.a / this.b)};
	}

	function maFunction(){
		console.log('bonjour');
	}
	window.onload =function()
	{
	var id1 = document.getElementById('id1')
	id1.onclick = function(e)
	{
		alert('salut tu as cliqué sur ' + e.target.id);
	}

	 window.onload =function()

	{
		var parent =document.getElementById('parent');
		var enfant =document.getElementById('enfant');
		parent.addEventListener('click',function(e)
			{alert('tu as cliqué sur '+ e.target.id + ' et tu es sur '+ e.currentTarget.id)},false);
		enfant.addEventListener('click',function(e){
			alert('tu as cliqué sur '+ e.target.id + ' et tu es sur '+ e.currentTarget.id ); e.stopPropagation();},false);
	}
	var id1 =document.getElementById('id1');

	id1.addEventListener('mouseover',function()
	{id1.src="img/image-2.jpg"})
	id1.addEventListener('mouseout',function()
	{id1.src="img/image-1.jpg"})

	var id1 = document.getElementById('id1');
	var id2 = document.getElementById('id2');
	var id3 = document.getElementById('id3');
	var texte = document.getElementById('texte');

	id1.addEventListener('click',function()
		{
			texte.style.color ='blue';
			texte.innerHTML= 'idiot';

		},false)
	id2.addEventListener('click', function()
		{
			texte.style.color = 'red';
			id1.innerHTML='con';
		},false)
	id3.addEventListener('click', function()
		{
			texte.style.color = 'green';
		},false)
	var id1 =document.getElementById('id1');
	var id2 =document.getElementById('id2');
	var id3=document.getElementById('id3');
	id2.addEventListener('click',function()
		{
			id3.innerHTML = getComputedStyle(id1).backgroundColor;
		})

	window.onload =function()
	var id1 = document.getElementById('id1');
	id1.addEventListener('click',function()
	{
		id1.classList.toggle('blue')
	})

	window.onload =function(){
	var bouton1=document.getElementById('bouton1');
	bouton1.onclick = function()
	{
	var elements = document.getElementsByClassName('class1');

	for(var i = 0 ; i< elements.length ; i++)
	{
		elements[i].style.color="green";
		elements[i].style.backgroundColor="pink";

	}
	}

	var bouton2 =document.getElementById('bouton2');
	bouton2.onclick = function()
	{
	var elements = document.getElementsByClassName('class1');
	for(var i = 0 ; i< elements.length ; i++)
	{
	     elements[i].style.color="red";
	     elements[i].style.backgroundColor="black";

	}
	}
	var bouton3=document.getElementById('bouton3');
	bouton3.onclick = function()
	{
	var elements = document.getElementsByClassName('class1');

	for(var i = 0 ; i< elements.length ; i++)
	{
		elements[i].style.color="blue",
		elements[i].style.backgroundColor="yellow";

	}
	}
	}
	var lien1 = document.getElementById('lien1');
	var newLink = document.createElement('a');
	newLink.href ="https://www.w3schools.com/js/js_htmldom_navigation.asp";
	newLink.innerHTML ="clic";
	document.getElementById('lien1').appendChild(newLink);

	 window.onload =function()

	 {
	   var compteur =1;
	 	document.getElementById("button1").addEventListener('click',function()
	 {
	     var nElement =document.createElement('div');
	     document.getElementById('section1').appendChild(nElement);
		nElement.innerHTML="element" + compteur;
		compteur ++;


	 })
	 }

	window.addEventListener('keydown',function(e)
	{ 
		document.getElementById("img1").style.transition ="all 0.4s";

	 if(e.keyCode ==39){
		document.getElementById("img1").style.left = document.getElementById("img1").offsetLeft + 100 + 'px';
	}
	if(e.keyCode ==40){
		document.getElementById("img1").style.top =document.getElementById("img1"). offsetTop +100 + 'px';
	}
	if(e.keyCode ==37){
		document.getElementById("img1").style.left = document.getElementById("img1").offsetLeft - 100 + 'px';
	}
	if(e.keyCode ==38){
		document.getElementById("img1").style.top = document.getElementById("img1").offsetTop -100 + 'px';
	}
	if(e.keyCode ==32){
		document.getElementById("son").play() ;
	   document.getElementById("img1").src = "img/images.jpg";
	}
	if(document.getElementById("img1").offsetLeft > 500 )

	 {   
	     document.getElementById("img1").src = "img/lion-3.jpg";

	}

	}) 

	var tabImage= ["image-1.jpg","image-2.jpg","images.jpg"];

	var x = 0;
	var indiceTabImage = 0;
	 var tps =setInterval(function() {
	changeImage();
	},1000);
	console.log(indiceTabImage);

	function changeImage (){

		document.getElementById("image").style.backgroundImage = "url('img/" + tabImage[indiceTabImage] +"')";
		indiceTabImage++;

		if(indiceTabImage ==tabImage.length -1){
			indiceTabImage =0;
		}
		

	}