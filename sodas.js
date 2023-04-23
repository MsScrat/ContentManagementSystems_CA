
async function sodaFetcher () {

    const sodaRequest = "http://localhost:8888/wordpress/wp-json/wc/store/products?per_page=20";

    const response = await fetch(sodaRequest);

    if (response.ok) {
        data = await response.json();

        let banner_available = true;

        for (let i=0; i < data.length; i++) {

            // Banner 
            if (data[i]["on_sale"] === true && banner_available === true) {
                document.getElementById("featured_product").innerHTML += 
                `
                <div class="soda_on_sale" align="center">
                <a href='productpage.html?id=${data[i]["id"]}'><img class="soda_on_sale_img" src="${data[i]["images"][0]["src"]}"></a>
                </div>
                <div>
                <a href='productpage.html?id=${data[i]["id"]}'><h1 align="left"><em>${data[i]["name"]}</em></h1></a>
                <p>Now on sale!</p>
                <a href='productpage.html?id=${data[i]["id"]}'><p>${data[i]["price_html"]}</p></a>
                </div>
                `
                banner_available = false;
            }

            // Currently on sale
            else if (data[i]["on_sale"] === true) {
                document.getElementById("on_sale").innerHTML += 
                `
                <a href='productpage.html?id=${data[i]["id"]}'>
                <div class="soda-container">
                    <img class="soda-img" src="${data[i]["images"][0]["src"]}">
                    <h2>${data[i]["name"]}</h2>
                    <span>${data[i]["price_html"]}</span>
                </div>
                `
            }

            // Our sodas
            else {
                document.getElementById("products").innerHTML += 
                `
                <a href='productpage.html?id=${data[i]["id"]}'>
                <div class="soda-container">
                    <img class="soda-img" src="${data[i]["images"][0]["src"]}">
                    <h2>${data[i]["name"]}</h2>
                    <span>${data[i]["price_html"]}</span>
                </div>
                `
            }
        }
    }
}

sodaFetcher();


