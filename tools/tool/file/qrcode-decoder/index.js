let inp = document.querySelector('input');
let img = document.querySelector('img');
let btn = document.querySelector('button');

inp.addEventListener('change', (e) => {
    let locImg = URL.createObjectURL(e.target.files[0]);
    img.src = locImg;

})

btn.addEventListener('click', () => {
    var qr = new QrcodeDecoder();
    document.querySelector('span').innerHTML = "";
    document.querySelector('.pass').innerHTML = "";

    qr.decodeFromImage(img).then((res) => {
        console.log(res);
        alert(res.data)
        // if (!res.data.contains(';')) {
        // }
        // else{
        // }

        if (res.data.split(";")[2] == null) {
            document.querySelector('span').innerHTML = res.data;
        }
        else {
            document.querySelector('.pass').innerHTML = res.data.split(";")[2].slice(2);
        }

        // if (document.querySelector('span').innerHTML == null && document.querySelector('.pass').innerHTML == null) {
        //     alert('Şəkildə təkcə qr kod şəkli olsun, şəkildə başqa obyektlər varsa qr kod oxunmaya bilər !')
        // }
    });


})

// document.querySelector('form').addEventListener('submit',(e)=>{
//     e.preventDefault();
// })