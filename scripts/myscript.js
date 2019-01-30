var li = document.getElementsByClassName('sel');

for(var i=0;i<li.length;i++)
{
    li[i].addEventListener('click',function () {
        var x = this.textContent ;
        deletion(x);
    });
}

function deletion(data)
{
  var xhttp = new XMLHttpRequest();
  xhttp.open('Delete','/index/'+data, true);
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      
      M.toast({html: 'Deleting...'});
      setTimeout(function() {
        location.reload();
      }, 500);
     
      
    }
  };
  xhttp.send();
};