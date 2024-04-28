import Component from "../../app/js/base/Component";

class Form extends Component {
  constructor(element) {
    super(element);

    // Your code here
    this.form = this.root.querySelector("form");  
    this.form.addEventListener("submit", this.submitForm);

    const inputMail = this.form = this.root.querySelector(".form__input__email");
    inputMail.addEventListener('input', (event) => {
            const input = event.target; 
            const emailRegex = /^([a-zA-Z\-0-9_]+|([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)+)|(".+"))@(([a-zA-Z\-0-9]+\.)+[a-zA-Z\-0-9]{2,})$/;
            document.querySelector(".form__input__email__error").textContent = "";
            if (!emailRegex.test(input.value)) {
              console.log('Неверно введена почта')
              document.querySelector(".form__input__email__error").textContent = "Не правильно введена почта";
              document.querySelector(".form__input__email__error").classList.add("red");
            }
            if (input.value.length > 255) {
                console.log('Число символов в email больше 255')
                document.querySelector(".form__input__email__error").textContent = "Число символов не должно превышать 255";
              } else {
                console.log('Число символов в email меньше 255')
              }
        });  

  
    const inputText = this.form = this.root.querySelector(".form__input__text");
    inputText.addEventListener('input', (event) => {
            const input = event.target;
            document.querySelector(".form__input__text__error").textContent = "";
            if (input.value.length > 10) {
                console.log('Число символов больше 1000')
                document.querySelector(".form__input__text__error").textContent = "Число символов не должно превышать 1000";
                document.querySelector(".form__input__text__error").classList.add("red");
              } else {
                console.log('Число символов меньше 1000')
              }
        });  



  }

  // Your code here


  
  submitForm = async (e) => {
    e.preventDefault();   
    const formData = new FormData(e.target);

   
    const data = {
      email: formData.get("email"),
      text: formData.get("text"),
      file: formData.get("file"),
      confirm: !!formData.get("confirm"),
    };


    
    try {
      const response = await fetch("/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

    
      console.log(data);

     
      if (response.ok) {
        console.log("отправлено");
      } else {
       
        const errorData = await response.json();
        const errorMessage = errorData.message;
        console.log(errorMessage);
      }
    } catch (error) {
      console.error("Ошибка получения данных(form)", error);
    }
  };
}

export default Form;
