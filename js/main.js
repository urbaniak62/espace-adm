
    var val = document.getElementById('valider').onclick = function(){
    alert("yes");
    var produit=document.getElementsByTagName("input")[0].value;
    var phrase=document.getElementsByTagName("input")[1].value;
    var description=document.getElementsByTagName("input")[2].value;
    var array=[produit,phrase,description];
    // return array;
    alert(array);

    //  alert(produit +"-----" + phrase + "-------" + description);
    //  alert(produit);
  }

  // function recup(array){
  //   this.produit=array[0],
  //   this.phrase=array[1],
  //   this.description=array[2],
  //   this.getName=function(){
  //
  //     var fiche = document.getElementsByClassName("fiche");
  //     fiche.append("<p>" + this.produit + "</p>"  );
// }
