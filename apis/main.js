
let residentButton = document.querySelector('#resident')
const clicked = () =>{
    axios.get('https://swapi.dev/api/planets/2').then(response =>{
        let residents = response.data.residents
        console.log(response.data.residents)
        for (let i = 0; i < residents.length; i++) {
            console.log(residents[i])
            axios.get(residents[i]).then(res2 =>{
                let el = document.createElement('h2')
                el.textContent = res2.data.name
                document.body.appendChild(el)
            })
        }
    })
} 

residentButton.addEventListener('click',clicked)