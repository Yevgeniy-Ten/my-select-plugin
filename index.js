import {Select} from "./select/select";
import "./select/select.scss"

const select = new Select("#select", {
    selected: "Sport",
    placeholder: "Выбрать Yevgeniy",
    data: ["Sport", "Kulinariya", "Iphone", "Samsung"],
    onSelect(item) {
        console.log(item)
    }
});