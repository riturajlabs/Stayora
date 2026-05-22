(() => {

    const forms = document.querySelectorAll('.needs-validation')

    Array.from(forms).forEach((form) => {

        form.addEventListener('submit', (event) => {

            if (!form.checkValidity()) {

                event.preventDefault()
                event.stopPropagation()

            }

            form.classList.add('was-validated')

        }, false)

    })

})()

const stars = document.querySelectorAll(".star-rating label");
const inputs = document.querySelectorAll(".star-rating input");

if(stars.length > 0){

    stars.forEach((star, index) => {

        star.addEventListener("click", () => {

            stars.forEach((s) => {
                s.style.color = "#ccc";
            });

            for(let i = 0; i <= index; i++){
                stars[i].style.color = "gold";
            }

            inputs[index].checked = true;
        });

    });

}

// display total taxes toggle btn

  let taxSwitch = document.getElementById("checkNativeSwitch");
    taxSwitch.addEventListener("click",()=>{
        let taxInfo = document.getElementsByClassName("tax-info");
        for(info of taxInfo){
            if(info.style.display != "inline"){
                info.style.display = "inline"
            }else{
                info.style.display = "none"
            }
        }
    })


document.querySelectorAll('#filters a').forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active-filter');
    link.classList.add('filter a:active');
  }
});
