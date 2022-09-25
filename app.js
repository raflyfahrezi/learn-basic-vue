const data = {
    name: 'John Doe',
}

const methods = {
    changeName() {
        const name = document.getElementById('inputName').value
        this.name = name
    },
}

const app = Vue.createApp({
    data() {
        return data
    },
    methods,
})

app.mount('#app')
