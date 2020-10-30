export class Select {
    constructor(selector, options = {}) {
        this.$el = document.querySelector(selector)
        this.options = options
        this.selected = options.selected
        this.#render()
        this.#setup()
        this.$value = this.$el.querySelector("[data-type='select-value']")
    }

    open() {
        this.$el.classList.add("open")
    }

    close() {
        this.$el.classList.remove("open")
    }

    toggle() {
        if (this.$el.classList.contains("open")) {
            this.close()
        } else {
            this.open()
        }
    }

    #render() {
        const {placeholder, data} = this.options;
        let placeholderTemplate = placeholder || "Введи данные!"
        const liItems = data.map((name, id) => {
            let cls = ""
            if (name === this.selected) {
                placeholderTemplate = name
                cls = "selected"
            }
            return `<li class="select__item ${cls}" data-type="item" data-id=${id} >${name}</li>`
        })
        this.$el.classList.add("select")
        this.$el.innerHTML = `
            <div class="select__bg" data-type="bg"></div>
           <div class="select__head" data-type="selected">
                <p data-type="select-value" class="select__selected">${placeholderTemplate}</p>
                <span class="select__down">-></span>
            </div>
            <div class="select__dropdown">
                <ul class="select__list">
                   ${liItems.join("")}
                </ul>
            </div>`
    }

    #setup() {
        this.clickHandler = this.clickHandler.bind(this)
        this.$el.addEventListener("click", this.clickHandler)
    }

    select(id) {
        this.selected = this.options.data[id]
        this.$value.innerText = this.selected
        this.$el.querySelectorAll('[data-type="item"]').forEach(($el) => {
            $el.classList.remove("selected")
        })
        this.$el.querySelector(`[data-id="${id}"]`).classList.add("selected")
        this.options.onSelect ? this.options.onSelect(this.selected) : null
        this.close()
    }

    clickHandler(event) {
        const {type} = event.target.dataset
        switch (type) {
            case "selected":
                this.toggle()
                break;
            case "item":
                const id = event.target.dataset.id
                this.select(id)
                break;
            case "bg":
                this.close()
                break
        }
    }

    destroy() {
        this.$el.removeEventListener("click", this.clickHandler)
        this.$el.innerHTML = ""
    }
}