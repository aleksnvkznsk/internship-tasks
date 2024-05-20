import Component from "../../app/js/base/Component";

class Form extends Component {
  constructor(element) {
    super(element);

    // Your code here
    this.form = this.root.querySelector("form");  
    this.form.addEventListener("submit", this.submitForm);

    const inputMail = this.form = this.root.querySelector(".form__input__email");
    inputMail.addEventListener('focusout', (event) => {
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
            if (input.value === '') {
                console.log('Поле email пустое')
                document.querySelector(".form__input__email__error").textContent = "Поле обязательно к заполнению";
                document.querySelector(".form__input__email__error").classList.add("red");
            }
            this.checkSubmitButtonDisabled();
        });  



    


  
    const inputText = this.form = this.root.querySelector(".form__input__text");
    inputText.addEventListener('focusout', (event) => {
            const input = event.target;
            document.querySelector(".form__input__text__error").textContent = "";
            if (input.value.length > 1000) {
                console.log('Число символов больше 1000')
                document.querySelector(".form__input__text__error").textContent = "Число символов не должно превышать 1000";
                document.querySelector(".form__input__text__error").classList.add("red");
              } else {
                console.log('Число символов меньше 1000')
              }
            if (input.value === '') {
                console.log('Поле email пустое')
                document.querySelector(".form__input__text__error").textContent = "Поле обязательно к заполнению";
                document.querySelector(".form__input__text__error").classList.add("red");
            }
            this.checkSubmitButtonDisabled();
        });  


        const confirmCheckbox = this.root.querySelector('.form__container__input');
        confirmCheckbox.addEventListener('change', (event) => {
          const checked = event.target.checked;
          if (!checked) {
            console.log('Чекбокс не отмечен');
          } else {
            console.log('Чекбокс отмечен')
          }
        });
    
        const submitButton = this.root.querySelector('.form__button__send');
        submitButton.setAttribute('disabled', true);

  }

  // Your code here

  checkSubmitButtonDisabled() {
    const emailInput = this.root.querySelector('.form__input__email');
    const textInput = this.root.querySelector('.form__input__text');
    const submitButton = this.root.querySelector('.form__button__send');

    const isEmailValid = emailInput.value !== '';
    const isTextValid = textInput.value !== '';

    if (isEmailValid && isTextValid) {
      submitButton.removeAttribute('disabled');
    } else {submitButton.setAttribute('disabled', true);
  }
}



  submitForm = async (e) => {
    e.preventDefault();   
    const formData = new FormData(e.target);

   
    const data = {
      email: formData.get("email"),
      text: formData.get("text"),
      file: formData.get("file"),
      confirm: !!formData.get("confirm"),
    };

    if (!data.confirm) {
      console.log('Чекбокс не отмечен')
      document.querySelector(".form__checkbox__error").textContent = "Перед отправкой формы необходимо согласиться с политикой обработки персональных данных";
      document.querySelector(".form__checkbox__error").classList.add("red");
      return;
    }


    
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
        document.querySelector(".form__button__message").textContent = "Успешно отправлено";
        document.querySelector(".form__button__message").classList.add("green");
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
