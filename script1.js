function change(){
	
	const c1=document.getElementById("cb1").checked;	
	const c2=document.getElementById("cb2").checked;	
	const c3=document.getElementById("cb3").checked;	
	const c4=document.getElementById("cb4").checked;
	
	// ustawienie koloru labela wybranego checkboxa oraz liczę ile jest wybranych checkboxów
	let sign_pick=0;	
	if(c1){
		sign_pick++;
		document.getElementById("lb1").style.color="lime";
	}else{
		document.getElementById("lb1").style.color="grey";
	}

	if(c2){
		sign_pick++;
		document.getElementById("lb2").style.color="lime";
	}else{
		document.getElementById("lb2").style.color="grey";
	}				

	if(c3){
		sign_pick++;					
		document.getElementById("lb3").style.color="lime";
	}else{
		document.getElementById("lb3").style.color="grey";
	}					

	if(c4){
		sign_pick++;					
		document.getElementById("lb4").style.color="lime";
	}else{
		document.getElementById("lb4").style.color="grey";
	}	

	document.getElementById("how_sign").min=sign_pick;	

	if(document.getElementById("how_sign").value<sign_pick){document.getElementById("how_sign").value=sign_pick;}

	if(sign_pick<=0){
		document.getElementById("btn_generate").disabled=true;
		document.getElementById("btn_generate").innerHTML="Zaznacz coś";
		document.getElementById("btn_generate").className="blink";
	}else{
		document.getElementById("btn_generate").disabled=false;
		document.getElementById("btn_generate").innerHTML="Generuj";
		document.getElementById("btn_generate").className="normal";
	}

	return sign_pick;
}




function generate(){
	
	let sign_pick=change();
	const sign=document.getElementById("how_sign").value;	

	const c1=document.getElementById("cb1").checked;	
	const c2=document.getElementById("cb2").checked;	
	const c3=document.getElementById("cb3").checked;	
	const c4=document.getElementById("cb4").checked;					

	const list_A=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","V","W","X","Y","Z"];
	const list_a=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","r","s","t","u","v","w","x","y","z"];
	const list_0=["0","1","2","3","4","5","6","7","8","9"];
	const list_s=["!","@","#","$","%","^","&","*","(",")"];				

	let box1=0;
	let box2=0;
	let box3=0;
	let box4=0;	
	
	// obliczenie po ile znaków losować danej kategorii
	let num_in_group=Math.trunc(sign/sign_pick);	
	
	if(c1){box1=num_in_group;}
	if(c2){box2=num_in_group;}
	if(c3){box3=num_in_group;}
	if(c4){box4=num_in_group;}

	if(sign%sign_pick!==0){					
		if(c1){
			box1+=1;						
		}else if(c2){
			box2+=1;						
		}else if(c3){
			box3+=1;					
		}else if(c4){
			box4+=1;						
		}				
	}					

	let pas="";

	/* pętla losująca z zaznaczonych boxów (w miare możliwosci taka sama ilość znakow z każdego z boxa) i losowo umieszczjaca je w ciagu tworzacym hasło 
	dzieki temu mamy różnorodność tworzonego hasła przy każdym losowaniu, a nie np zawsze napoczątku duze litery a potem cyfry  */
	while((box1+box2+box3+box4)>0){
		
		rand_box=Math.trunc(Math.random()*4)+1;				
		
		if(rand_box===1&&box1>0){
			rand=Math.trunc(Math.random()*list_A.length);
			pas+=list_A[rand];
			box1--;
		}
		
		if(rand_box===2&&box2>0){
			rand=Math.trunc(Math.random()*list_a.length);
			pas+=list_a[rand];
			box2--;
		}

		if(rand_box===3&&box3>0){
			rand=Math.trunc(Math.random()*list_0.length);
			pas+=list_0[rand];
			box3--;
		}
		
		if(rand_box===4&&box4>0){
			rand=Math.trunc(Math.random()*list_s.length);
			pas+=list_s[rand];
			box4--;
		}
	}
	
	document.querySelector("p").innerHTML=pas;					
}

window.onload=change();