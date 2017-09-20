function displayModal(e, ext){
  var elemId = e.target.id;
  if($(window).width() < 768)
  {
    window.open("files/"+elemId+ "." + ext, "_blank");
  }
  else {
    $("#myModal").show();
    if(ext == "jpg")
    {
      $("#img01").show();
      $("#frame").hide();
      $("#img01").attr("src", "files/"+elemId+".jpg");
    }
    else
    {
      $("#img01").hide();
      $("#frame").show();
      $("#frame").attr("src", "files/"+elemId+".pdf");
    }
  }
}
