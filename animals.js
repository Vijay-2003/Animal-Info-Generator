const searchbox = document.getElementById("searchbox")
const search = document.getElementById("search")
const result = document.getElementById("result")

search.addEventListener("click", () => {
    let options = {
        method : "GET",
        headers : {
            'X-API-Key' : '4JDKiH8r4VpH9hcDvBKBUXT5IbXESAV9O5KWINSL',
            'Content-Type' :  'application/json',
        }
    }
    let datain = searchbox.value;
    let url = `https://api.api-ninjas.com/v1/animals?name=${datain}`
    console.log(url)
    fetch(url,options).then((response) => response.json()).then((data) => { 
        // console.log(data)
        // console.log(data[0].characteristics.most_distinctive_feature)
        // console.log(data[0].characteristics.biggest_threat)
        // console.log(data[0].characteristics.color)
        // console.log(data[0].characteristics.common_name)
        // console.log(data[0].characteristics.height)
        // console.log(data[0].characteristics.weight)
        // console.log(data[0].characteristics.lifespan)
        // console.log(data[0].characteristics.name_of_young)
        // console.log(data[0].characteristics.number_of_species)
        // console.log(data[0].characteristics.prey)
        // console.log(data[0].characteristics.skin_type)
        // console.log(data[0].characteristics.slogan)
        // console.log(data[0].characteristics.top_speed)
        // console.log(Object.values(data[0].locations).toString().split(",").join(", "))
        // console.log(Object.keys(data[0].taxonomy)[0],Object.keys(data[0].taxonomy)[1])
        // console.log(data[0].taxonomy.kingdom)
        // console.log(data[0].taxonomy.phylum)
        // console.log(data[0].taxonomy.class)
        // console.log(data[0].taxonomy.order)
        // console.log(data[0].taxonomy.family)
        // console.log(data[0].taxonomy.genus)
        // console.log(data[0].taxonomy.scientific_name)


        result.innerHTML = `
        <div id="pinfo">
        <hr style="border-color: black;border-width: 0.2rem;border-style:solid;">
        <div>> Name : ${data[0].characteristics.common_name}</div>
        <hr style="border-color: black;border-width: 100%;">
        <div>> Scientific Name : ${data[0].taxonomy.scientific_name}</div>
        <hr style="border-color: black;border-width: 100%;">
        <div>> SkinType : ${data[0].characteristics.skin_type}</div>
        <hr style="border-color: black;border-width: 100%;">
        <div>> Color : ${data[0].characteristics.color}</div>
        <hr style="border-color: black;border-width: 0.2rem;border-style:solid;">
    </div>
    <div id="sinfo">
        <div>> Slogan : ${data[0].characteristics.slogan}</div>
        <hr style="border-color: black;border-width: 100%;">
        <div>> Locations : ${Object.values(data[0].locations).toString().split(",").join(", ")}</div>
        <hr style="border-color: black;border-width: 0.2rem;border-style:solid;">
    </div>
    <div id="tinfo">
        <div>> Height : ${data[0].characteristics.height}</div>
        <hr style="border-color: black;border-width: 100%;">
        <div>> Weight : ${data[0].characteristics.weight}</div>
        <hr style="border-color: black;border-width: 100%;">
        <div>> Top Speed : ${data[0].characteristics.top_speed}</div>
        <hr style="border-color: black;border-width: 100%;">
        <div>> Lifespan : ${data[0].characteristics.lifespan}</div>
        <hr style="border-color: black;border-width: 0.2rem;border-style:solid;">
    </div>
    <div id="minfo">
        <h2 id="tax"> Taxonomy </h2>
        <div>> Kingdom : ${data[0].taxonomy.kingdom}</div>
        <div>> Phylum : ${data[0].taxonomy.phylum}</div>
        <div>> Class : ${data[0].taxonomy.class}</div>
        <div>> Order : ${data[0].taxonomy.order}</div>
        <div>> Family : ${data[0].taxonomy.family}</div>
        <div>> Genus : ${data[0].taxonomy.genus}</div>
    </div>
        `;
  } )
})

  