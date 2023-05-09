const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const sodaID = urlParams.get('id')

async function sodaProductFetcher () {

    const sodaRequest = "http://localhost:8888/wordpress/wp-json/wc/store/products/" + sodaID + "?per_page=20";

    const response = await fetch(sodaRequest);

    if (response.ok) {
        data = await response.json();
        
        document.getElementById("productContainer").innerHTML = 
                `
                <div id="productDisplay">
                    <div>
                        <h1>${data["name"]}</h1>
                        <p>${data["price_html"]}</p>
                        <p>${data["description"]}</p>
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
                    <img class="productDisplayPicture" src="${data["images"][0]["src"]}">
                </div>
                `
    }
}

sodaProductFetcher();