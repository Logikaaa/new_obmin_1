const rates = {
      USD: 41.3,
      EUR: 46.9,
      UAH: 1
    };

    let selectedCurrency = "UAH"; // Валюта призначення або джерела

    // Вибір валюти по кліку на прапорець
    document.querySelectorAll("#flags div").forEach(flag => {
      flag.addEventListener("click", () => {
        // видалити попереднє виділення
        document.querySelectorAll("#flags div").forEach(f => f.classList.remove("selected"));
        flag.classList.add("selected");

        selectedCurrency = flag.dataset.currency;
        convert();
      });
    });

    // Обробка кнопки
    document.getElementById("convertBtn").addEventListener("click", convert);

    function convert() {
      const input = parseFloat(document.getElementById("suma").value);
      const output = document.getElementById("konvert");

      if (isNaN(input)) {
        output.value = "Некоректна сума";
        return;
      }

      let result;

      if (selectedCurrency === "UAH") {
        // Конвертація в UAH з USD або EUR
        result = (input * rates["USD"]).toFixed(2); // За замовчуванням USD
        if (!isNaN(input)) {
          result = input; // якщо вже в UAH — залишити як є
        }
      } else {
        // Конвертація з UAH у вибрану валюту
        result = (input / rates[selectedCurrency]).toFixed(2);
      }

      output.value = result;
    }