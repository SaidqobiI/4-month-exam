const container = document.querySelector('.container')

function products(){
    fetch(`https://fakestoreapi.com/products`)
    .then(response => response.json())
    .then(data =>{
        data.forEach(element => {
            // console.log(element);
            const box = document.createElement('div')
            container.appendChild(box)
            box.className = 'box'

            const img = document.createElement('img')
            box.appendChild(img)
            img.className = 'product-img'
            img.setAttribute('src', `${element.image}`)
            console.log(element.img);

            const info = document.createElement('div')
            box.appendChild(info)
            info.className = "info"

            const prise = document.createElement('p')
            info.appendChild(prise)
            prise.innerText = `Prise: ${element.price}`

            const discount = document.createElement('p')
            info.appendChild(discount)
            discount.innerText = `Discount: ${element.rating.count}`

            const desc = document.createElement('p')
            info.append(desc)
            desc.innerText = `Desc: ${element.description}`
            desc.className = 'desc'

            const name = document.createElement('p')
            info.appendChild(name)
            name.innerText = `Name: ${element.title}`

            const trash = document.createElement('i')
            trash.className = 'bx bxs-trash'
            trash.setAttribute('data-post-id', `${element.id}`)
            info.appendChild(trash)

        });
    })
}

products()

container.addEventListener('click', (e)=>{
    if(e.target.classList.contains('bxs-trash')){
        const postId = e.target.getAttribute('data-post-id')
        if(postId){
            fetch(`https://fakestoreapi.com/carts/${postId}`,{
            method:"DELETE"
        })
            .then(res=>res.json())
            .then(json=>console.log(json, 'Card delate'))
        }
    }
})