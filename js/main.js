
    var val = document.getElementById('valider').onclick = function(){
    alert("yes");
    var produit=document.getElementsByTagName("input")[0].value;
    var phrase=document.getElementsByTagName("input")[1].value;
    var description=document.getElementsByTagName("input")[2].value;

      $("p").empty();
     $(".fiche").append("<p> votre produit est : "
      + produit + "</p><p>votre phrase d'accroche est : "
      + phrase + "</p><p>votre description est : "
      + description + "</p>" );
      $('input').val('');

  };
