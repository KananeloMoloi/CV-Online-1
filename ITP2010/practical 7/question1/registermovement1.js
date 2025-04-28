//function myfunction()
//{
    //var op3n= document.getElementsByClassName('container')
    //var x

    //for(x=0;x<op3n.length;x++)
        //{
        //    op3n[x].addEventListener("click",function() {
          //      this.classList.toggle("active")

          //      var panell = this.nextElementSibling
           ///     if(panell.style.display === "block")
              //      panell.style.display = "none"
            
            //else
            //{
              //  panell.style.display ="block"
            //}
        //}
        //)
        //}

//}
var acc = document.getElementsByClassName("container");
var i;
var image= document.getElementById("image_plus")

    for (i = 0; i < acc.length; i++) 
    {
  acc[i].addEventListener("click", function myfunction() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") 
    {
      panel.style.display = "none";
    
    }
    else
    {
      panel.style.display = "block";
      //document.getElementsByClassName("container").src='minus.jpg'
    }
  });
  }

  














   var image= $('image_plus1', 'image_plus2','image_plus3')
   //function whtfunction(){
     image_plus1.src= 'images/minus.jpg';
     if(image_plus1.src.match("plus"))
       {
         image_plus1.src="images/minus.jpg"
   
         document.getElementById("p1").classList.toggle("open")
       }
       else
       {
         image_plus1.src="images/plus.jpg"
       }
   //}