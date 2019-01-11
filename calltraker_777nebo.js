jQuery(document).ready(function($){
	console.log("asdsd");
	$calltraking=false; //false выключает подмену номеров на сайте, true включает
	
	if ($calltraking){
		var date = new Date;
		date.setDate(date.getDate() + 360);

		$replace=false;
		source = getURLParameter('utm_source');
		chanell = getURLParameter('utm_medium');
		$plat=get_cookie("calltraker_plarform");

		
		if	($plat==null){
			
			if (source==null){
				document.cookie = "calltraker_plarform=organic; expires="+date.toUTCString()+"; path=/; domain=sedmoenebo.kz";
			}else{
				document.cookie = "calltraker_plarform="+source+"; expires="+date.toUTCString()+"; path=/; domain=sedmoenebo.kz";
			}
		}
		$plat=get_cookie("calltraker_plarform");
		console.log($plat);


		if ($plat=="facebook"){
			$replace= true;
			var number_phone="87771111111";
			var number_phone_text="8(777) 111-11-11";

		}

		if ($plat=="google_cpc"){
			$replace=true;
			var number_phone="87772222222";
			var number_phone_text="8(777) 222-22-22";
		}


		if ($plat=="google_kmc"){
			$replace=true;
			var number_phone="87773333333";
			var number_phone_text="8(777) 333-33-33";
		}

		if ($plat=="yandex_cpc"){
			$replace=true;
			var number_phone="87774444444";
			var number_phone_text="8(777) 444-44-44";
		}


		if ($plat=="mytarget"){
			$replace=true;
			var number_phone="87775555555";
			var number_phone_text="8(777) 555-55-55";
		}
		
	}

	
	if ($replace){ // код подмены
		
		
		var tel = $('#fancy-title-4');
		$element=tel.children("span");
		$element_child=$element.children("a");
		$element_child[0].href="tel:"+number_phone;
		$element_child.text(number_phone_text);
		

		var tel = $('#fancy-title-10');
		$element=tel.children("span");
		$element_child=$element.children("a");
		$element_child[0].href="tel:"+number_phone;
		$element_child.text(number_phone_text);
		$element_child_p=$element.children("p");
		$element_child_p.remove();
		
		
		var tel = $('.mk-button--text');
		tel.text(number_phone_text);
		
		var tel = $('#text-3');
		$element=tel.children(".textwidget");
		$element.html("Ул. Шевченко, 204Б<br>ТД Саламат, 5 корпус, 3 этаж<br>бутик 18а<br>"+number_phone_text);
	
		
	} // end if ($replace){
	
	
	
	
	
	
	
	function get_cookie ( cookie_name ){
		var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );
			if ( results )
			return ( unescape ( results[2] ) );
			else
		return null;
	}


	function getURLParameter(name) {
	  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
	}	

});
