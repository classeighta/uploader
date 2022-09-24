// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5KOdReR8o66-IjwowAoijZDpHymCUEn4",
  authDomain: "fir-a0a13.firebaseapp.com",
  databaseURL: "https://fir-a0a13-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-a0a13",
  storageBucket: "fir-a0a13.appspot.com",
  messagingSenderId: "869971051033",
  appId: "1:869971051033:web:3c107530a4a374b9c22088"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import {getDatabase , ref ,get ,set, child , update,  remove}
from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";

  const db= getDatabase();
   
  var upBtn=document.querySelector("#upBtn");
  var EngInput="English -"+document.querySelector("#engtext").value;
  var HinInput="Hindi -"+document.querySelector("#hintext").value;
  var MatInput="Maths -"+document.querySelector("#mattext").value;
  var SciInput="Science -"+document.querySelector("#scitext").value;
  var SSTInput="SST -"+document.querySelector("#ssttext").value;
  var spaInput="Spanish -"+document.querySelector("#spatext").value;

  
  
  var today = new Date();
  var dd = String(today.getDate());
  var mm =String(today.getMonth()+1); //January is 0!

  var yyyy = today.getFullYear();
  var yy =String(yyyy).slice(-2);


  if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm} today = dd+mm+yy;
  
 


  function insertDat(){
    
    const dbref = ref(db);
    //Upload Hw
    get(child(dbref, "/values/"))
    .then((snapshot)=>{
        if(snapshot.exists()){
             var bruh = snapshot.val().name ;
             console.log(bruh);
             
             set(ref(db , "/values/hw/"), {
              hw:"<div id='"+today+"' class='content'><h2>"+ dd+"-"+mm+"-"+yyyy+"</h2><p>"+EngInput+"<br>"+HinInput+"<br>"+MatInput+"<br>"+SciInput+"<br>"+SSTInput+"<br>"+spaInput+"<br>"+"</p></div><br>  "+ bruh
            });
           
          }else {
            
            set(ref(db , "/values/hw/"), {
              hw:"<div id='"+today+"' class='content'><h2>"+ dd+"-"+mm+"-"+yyyy+"</h2><p>"+EngInput+"<br>"+HinInput+"<br>"+MatInput+"<br>"+SciInput+"<br>"+SSTInput+"<br>"+spaInput+"<br>"+"</p></div><br>  "
            });
          }
      })
      //Upload CW
    
      
    }
   
 
 upBtn.addEventListener('click',insertDat);

 document.getElementById("dbtn").addEventListener('click',datremo);
function datremo(){
  remove(ref(db , "/values/")
)}

