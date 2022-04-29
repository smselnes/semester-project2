const bannerUrl = "http://localhost:1337/home";
const banner = document.querySelector(".banner");

async function getBanner() {
    const response = await fetch (bannerUrl);
    const json = await response.json();

    console.log(json.hero_banner);
    console.log(json);

    banner.innerHTML = `<img src=http://localhost:1337${json.hero_banner.url} width="250px">`;

}
getBanner();