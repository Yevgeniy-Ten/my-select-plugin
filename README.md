# my-select-plugin
1. Скопируйте папку select к себе в проект
2 .Установить пустой тэг с вашим id
3. Импортируйте select из папки select в ваш main.js файл
4. Через new Select(ваш селектор указываете) создаете новый селект
5. Примерный код подключения плагина const select = new Select("#select", {
    * selected: "Sport",
    * placeholder: "Начальное сообщение",
    * data: ["Sport", "Kulinariya", "Iphone", "Samsung"],
    * Ваш обработчик
    onSelect(item) {
        console.log(item)
    }
});
