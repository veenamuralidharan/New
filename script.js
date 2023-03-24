const calculate = () => {

    let english = document.querySelector("#English").value;
    let maths = document.querySelector("#Maths").value;
    let phy = document.querySelector("#Physics").value;
    let chem = document.querySelector("#Chemistry").value;
    let computer = document.querySelector('#Computer').value;
    

      
      if(english>100 || maths>100 || phy >100 || chem>100 || computer>100){
        alert("Please Enter marks in range of 100")
      }else{
        var total = parseInt(english) + parseInt(maths) + parseInt(phy) + parseInt(chem) + parseInt(computer);
        document.getElementById("total").innerHTML = "Total Marks : "+total;
        var average = total/5;
        document.getElementById("average").innerHTML="Your Average is :" +average;
        if (average <= 100 && average >= 90) {
            document.getElementById("grade").innerHTML="Your Grade is A";
          } else if (average <= 89 && average >= 80) {
            document.getElementById("grade").innerHTML="Your Grade is B";
          } else if (average <= 79 && average >= 70) {
            document.getElementById("grade").innerHTML="Your Grade is C";
          } else if (average <= 69 && average >= 60) {
            document.getElementById("grade").innerHTML="Your Grade is D";
          }else {
            document.getElementById("grade").innerHTML="Your Grade is F";
          }
    
         
      }

   
}
