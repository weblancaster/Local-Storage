// FIRST EXPERMENT WITH LOCAL STORAGE By MICHAEL LANCASTER

function init() {
        
        //REQUEST IDS SECTIONS
	var saveDataContent = document.getElementById("insert-content");
    var showDataContent = document.getElementById("db-content");
    
    	//REQUEST BTS
    var btSave = document.getElementById("bt-save");
    var btShow = document.getElementById("bt-show");
    var btBack = document.getElementById("bt-back");
    var btClear = document.getElementById("bt-clear");
    
    	//REQUEST LOCAL STORAGE ITENS
    var getFirstName = localStorage.getItem("nome");
    var getLastName = localStorage.getItem("sobrenome");
    	
    	//REQUEST LIST NAME and CREATE ELEMENT 
    var listName = document.getElementById("list-name");
    	elLi = document.createElement("li"); 
    	listName.appendChild(elLi);
    	
    	if (getFirstName === null && getLastName === null) {
    		elLi.innerHTML = "First Name" +" "+ "Last Name";
    	}
    	else {
    		elLi.innerHTML = getFirstName +" "+ getLastName;
    	}
     	
    	//START ACTIONS
    	btShow.addEventListener('click', function() {
            if (saveDataContent.style.display = "block") {
            	saveDataContent.style.display = "none";
            	showDataContent.style.display="block";
            };
        });
    		
    	btBack.addEventListener('click', function() {
    	    if (showDataContent.style.display = "block") {
    	    	showDataContent.style.display="none";
    	    	saveDataContent.style.display = "block";
    	    };
    	});
    		
    	btSave.addEventListener('click', function() { 
    	
    			//REQUEST INPUT and INPUT VALUEs    
    		var firstName = document.getElementById("first-name").value;
    		var lastName = document.getElementById("last-name").value;
    			
    			if (firstName === "" || lastName === "") {
    				alert("Please, Put Something in the Fields.");
    			}
    			else {
    					//SET LOCAL STORAGE
    				localStorage.setItem("nome",firstName);
    				localStorage.setItem("sobrenome",lastName);
    				
    					//REQUEST LOCAL STORAGE ITENS
    				var getFirstName = localStorage.getItem("nome");
    				var getLastName = localStorage.getItem("sobrenome");
    				elLi.innerHTML = getFirstName +" "+ getLastName;
    				
    				alert("Your data was saved!");
    			};
    	});	
    	
    		//CLEAR ALL DATA
    	btClear.addEventListener('click', function() {
    		var clearData = confirm("Are you sure?");
    	    if (clearData) {
    	    	localStorage.removeItem("nome");
    	    	localStorage.removeItem("sobrenome");
    	    };
    	});
};

window.onload = init;