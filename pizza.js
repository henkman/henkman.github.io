const rectangular_price_per_cm2 = (pizza) => {
    return pizza.price / (pizza.w * pizza.h)
}

const circular_price_per_cm2 = (pizza) => {
    const r = (pizza.diameter / 2)
    return pizza.price / (Math.PI * (r * r))
}

document.addEventListener("DOMContentLoaded", () => {
    const tmplRectangular = document.getElementById("tmpl_rectangular")
    const tmplCircular = document.getElementById("tmpl_circular")
    const pizzas = document.getElementById("pizzas")
    document.getElementById("clear").addEventListener("click", (e) => {
        pizzas.innerHTML = ""
    })
    document.getElementById("rectangular").addEventListener("click", (e) => {
        const pizza = tmplRectangular.content.cloneNode(true);
        pizza.querySelector(".delete").addEventListener("click", (e) => {
            pizzas.removeChild(e.currentTarget.parentElement)
        })
        pizza.querySelector(".price").addEventListener("keyup", (e) => {
            const price = e.currentTarget;
            const pizza = price.parentElement
            const width = pizza.querySelector(".width")
            const height = pizza.querySelector(".height")
            const p = {"w": width.value, "h": height.value, "price": price.value}
            pizza.querySelector(".result").innerHTML = rectangular_price_per_cm2(p)
        })
        pizza.querySelector(".width").addEventListener("keyup", (e) => {
            const width = e.currentTarget;
            const pizza = width.parentElement
            const price = pizza.querySelector(".price")
            const height = pizza.querySelector(".height")
            const p = {"w": width.value, "h": height.value, "price": price.value}
            pizza.querySelector(".result").innerHTML = rectangular_price_per_cm2(p)
        })
        pizza.querySelector(".height").addEventListener("keyup", (e) => {
            const height = e.currentTarget;
            const pizza = height.parentElement
            const price = pizza.querySelector(".price")
            const width = pizza.querySelector(".width")
            const p = {"w": width.value, "h": height.value, "price": price.value}
            pizza.querySelector(".result").innerHTML = rectangular_price_per_cm2(p)
        })
        pizzas.appendChild(pizza)
    })
    document.getElementById("circular").addEventListener("click", (e) => {
        const pizza = tmplCircular.content.cloneNode(true);
        pizza.querySelector(".delete").addEventListener("click", (e) => {
            pizzas.removeChild(e.currentTarget.parentElement)
        })
        pizza.querySelector(".price").addEventListener("keyup", (e) => {
            const price = e.currentTarget;
            const pizza = price.parentElement
            const diameter = pizza.querySelector(".diameter")
            const p = {"diameter": diameter.value, "price": price.value}
            pizza.querySelector(".result").innerHTML = circular_price_per_cm2(p)
        })
        pizza.querySelector(".diameter").addEventListener("keyup", (e) => {
            const diameter = e.currentTarget;
            const pizza = diameter.parentElement
            const price = pizza.querySelector(".price")
            const p = {"diameter": diameter.value, "price": price.value}
            pizza.querySelector(".result").innerHTML = circular_price_per_cm2(p)
        })
        pizzas.appendChild(pizza)
    })
})