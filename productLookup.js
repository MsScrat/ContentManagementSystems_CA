const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const sodaID = urlParams.get('id')

async function sodaProductFetcher () {

    const sodaRequest = "http://localhost:8888/wordpress/wp-json/wc/store/products?per_page=20";

    const response = await fetch(sodaRequest);

    if (response.ok) {
        data = await response.json();
        
        for (let i=0; i < data.length; i++) {
            
            if (data[i]["id"] == sodaID) {
                document.getElementById("productContainer").innerHTML = 
                `
                <div id="productDisplay">
                    <div>
                        <h1>${data[i]["name"]}</h1>
                        <p>${data[i]["price_html"]}</p>
                        <p>${data[i]["description"]}</p>
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                        </select>
                        <button>Add to cart</button>
                    </div>
                    <img class="productDisplayPicture" src="${data[i]["images"][0]["src"]}">
                </div>
                `
            }
        }
    }
}

sodaProductFetcher();