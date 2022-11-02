const ladingdata=[

    {
        "id":1,
        "name":"xyz",
        "price":"200",
         "image":"https://rukminim1.flixcart.com/image/200/200/khp664w0/tripod/tripod-clamp/c/z/n/photron-phmh200-original-imafxmvjpuu9hxk2.jpeg?q=70"
    },
    {
        "id":2,
        "name":"xyz2",
        "price":"201",
         "image":"https://rukminim1.flixcart.com/image/200/200/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70"
    },
    {
        "id":3,
        "name":"abc",
        "price":"3000",
         "image":"https://rukminim1.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70"
    },
    {
        "id":4,
        "name":"abdhg",
        "price":"4002",
         "image":"https://rukminim1.flixcart.com/image/200/200/kzegk280/action-figure/9/v/t/3-30155-mcfarlane-2-5-original-imagbeyyzehpyk2m.jpeg?q=70"
    },
    {
        "id":5,
        "name":"hhee",
        "price":"2000",
         "image":"https://rukminim1.flixcart.com/image/200/200/kebpqq80/musical-keyboard/j/h/h/37-keys-nj-fashion-original-imafvyhrjeuah2ge.jpeg?q=70"
    },
    {
        "id":6,
        "name":"kkihh",
        "price":"2334",
         "image":"https://rukminim1.flixcart.com/image/200/200/kebpqq80/musical-keyboard/j/h/h/37-keys-nj-fashion-original-imafvyhrjeuah2ge.jpeg?q=70"
    },
    {
        "id":7,
        "name":"khhsi",
        "price":"4444",
         "image":"https://rukminim1.flixcart.com/image/200/200/kwpam4w0/book/r/a/r/-original-imag9bv6bzstsjgk.jpeg?q=70"
    },
]

let cart=[]

let container = document.querySelector(".homeContainer")

function createLanding(ladingdata){
      
    ladingdata.map((el)=>{
    
            let cont=document.createElement("div")
            let h1=document.createElement('h1')
            let img=document.createElement('img')
            img.src=el.image
            h1.innerHTML=`Name: ${el.name}`
            let p=document.createElement('p')
            p.innerHTML=`Price:${el.price}`

            let btn=document.createElement('button')
            btn.innerHTML="add to cart"
            btn.style="cursor:pointer;"

            btn.addEventListener('click',()=>{
                cart.push(el)
              console.log(cart)
            })

            cont.append(img,h1,p,btn)
            container.append(cont)
            
      

        
    })
}

createLanding(ladingdata)

// let containercart = document.querySelector(".homeContainerCart")

// let showcart=document.querySelector(".showcart")

// showcart.addEventListener("click",()=>{

//     console.log(cart)
//     cart.map((el)=>{
    
//         let cont=document.createElement("div")
//         let h1=document.createElement('h1')
//         let img=document.createElement('img')
//         img.src=el.image
//         h1.innerHTML=`Name: ${el.name}`
//         let p=document.createElement('p')
//         p.innerHTML=`Price:${el.price}`

      

//         cont.append(img,h1,p,btn)
//         containercart.append(cont)
        


    
// })
// })

