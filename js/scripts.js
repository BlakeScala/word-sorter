$(document).ready(function() {
  $("form").submit(function(event) {
    var paragraph = $("input#paragraph").val();
    counter = 0;
    var a = [];
    var b = [];
    var c = [];

    prev = -1;

    alert(paragraph);

    var newpara = paragraph.split(" ");
    newpara.sort();

    alert(newpara);

    newpara.forEach(function(str){
      if(str !== newpara[prev])
      {
        a.push(str);
        b.push(1);
      }
      else
      {
        b[b.length-1]++;
      }
      prev += 1;

    });

    alert(a);
    alert(b);

    b.forEach(function(int){
      c.push(int + " " + a[counter]);
      counter += 1;
    });



    alert(c);


    event.preventDefault();
  });
});
