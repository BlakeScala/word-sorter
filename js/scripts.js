
$(document).ready(function() {
  $("form").submit(function(event) {
    var paragraph = $("input#paragraph").val();
    counter = 0;
    var a = [];
    var b = [];
    var c = [];
    var newb = [];
    var answer =[];

    prev = -1;


    var newpara = paragraph.split(" ");
    newpara.sort();

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

    var newb = b.slice();
    newb.sort();
    newb.reverse();

    for(var i = 0; i < b.length ; i++)
    {
      for(var j = 0; j < b.length ; j++)
      {
        if(newb[i] === b[j])
        {
            answer.push(newb[i] + " " + a[j]);
        }
      }
    }

    answer = answer.filter(function(item, pos) {
    return answer.indexOf(item) == pos;
    });

    alert(answer);


    event.preventDefault();
  });
});
