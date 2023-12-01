function sendMessage() {
  const BOT_TOKEN = "6381726609:AAHVJrcq3FJQQ6wyudsHugXesBkIU7kr8GQ";
  const CHAT_ID = "-1002130721123";

  const name = document.getElementById("name").value;
  const phoneNumber = document.getElementById("phone").value;
  const companyName = document.getElementById("company").value;

  let message =
    "isim: " +
    name +
    ".\nXabar: " +
    companyName +
    ".\nTelefon nomer: " +
    
    phoneNumber;

  let url = "https://api.telegram.org/bot" + BOT_TOKEN + "/sendMessage";
  let data = {
    chat_id: CHAT_ID,
    text: message,
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      // window.location.href = "../confirm.html";
      alert("Завершено успешно. Дождитесь обратного звонка!");
      document.getElementById("name").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("company").value = "";
    })
    .catch((error) => {
      alert("Не удалось отправить отзыв. Пожалуйста, повторите попытку позже.");
    });
}
