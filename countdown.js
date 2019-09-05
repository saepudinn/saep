
var counter = 10;
function countDown() {
    if(counter>=0) {
    document.getElementById("timer").innerHTML = counter;
   }
   else {
       download();
        return;
     }
    counter -= 1;

   var counter2 = setTimeout("countDown()",1000);
   return;
}
function download() {
  document.getElementById("link").innerHTML = "<a href='<?php echo $domain; ?>/redirect/?site=<?php echo base64_encode($go); ?>'role='button'><div class='btn btn-md btn-primary'> Continue »</div></a>";
}