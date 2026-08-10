

    function Calculate()
{
    

    let name = (document.getElementById("name").value);
     let roll_no = parseInt(document.getElementById("roll_no").value);
    let smark = parseInt(document.getElementById("science").value);
    let mmark = parseInt(document.getElementById("math").value);
    let emark = parseInt(document.getElementById("english").value);
    let to = parseInt(document.getElementById("total").value);
    let per  = parseInt(document.getElementById("per").value);

     let total = mmark+smark+emark;
    let percent = (total/300) *100;


    let t1 = document.getElementById("t1");
    let row = t1.insertRow()


    row.insertCell(0).innerHTML= name;
       row.insertCell(1).innerHTML=roll_no;
        row.insertCell(2).innerHTML= smark;
            row.insertCell(3).innerHTML= mmark
                row.insertCell(4).innerHTML= emark;
                    row.insertCell(5).innerHTML= total;
                        row.insertCell(6).innerHTML= percent.toFixed(2)+"%";


document.getElementById("name").value="";
document.getElementById("roll_no").value="";
 document.getElementById("science").value="";
 document.getElementById("math").value="";
 document.getElementById("english").value="";
 document.getElementById("total").value="";
 document.getElementById("per").value="";
}  

