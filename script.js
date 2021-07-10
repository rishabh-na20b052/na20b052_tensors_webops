let fn, ln,p,w;
fn=ln=p=null;
let n=1; document.getElementById("submit").disabled=n%2;

function button(){
n++;
document.getElementById("submit").disabled=n%2;
}

function mfn(){
    fn=document.getElementById("first_name").value;
    ln=document.getElementById("last_name").value;
    p=document.getElementById("password").value;
    w=fn+"@"+ln;
    if(fn&&ln&&p){
      if(p==w)alert('SUCCESS');
      else alert('WRONG CREDENTIALS : password should be "first name"@"last name" (case sensitive)');
    }
    else alert('ERROR : all fields required');
}