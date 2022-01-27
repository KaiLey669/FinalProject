let container = document.querySelector(".main");

fetch('../json/artStation.json').then(response => {
    response.json().then(result => {

        let img1 = document.createElement("img");
        img1.src = result.Gydra;
        img1.style.width = "500px";
        img1.style.height = "500px";
        container.append(img1);

        let img2 = document.createElement("img");
        img2.src = result.Leha;
        img2.style.width = "500px";
        img2.style.height = "500px";
        container.append(img2);

        let img3 = document.createElement("img");
        img3.src = result.Awawaw;
        img3.style.width = "500px";
        img3.style.height = "500px";
        container.append(img3);
    })
})



