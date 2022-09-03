const loadAllNews = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/categories`);
    const data = await res.json();
    return data;

}
// const loadAllNewsIndividual = async () => {
//     const response = await fetch(`https://openapi.programming-hero.com/api/news/category/'0${category_id}'`);
//     const data = await response.json();
//     return data;
// }

const setAllMenu = async () => {
    const data = await loadAllNews();
    // const data1 = data.data;
    // console.log(data.data.news_category);
    const data1 = data.data.news_category;
    // console.log(data1);
    const menu = document.getElementById('all-news');
    for (const news of data1) {
        // console.log(news.category_name);
        const li = document.createElement("li");
        li.innerHTML = `<a onclick="displayNews('${news.category_id}')">${news.category_name}</a>
        `;
        menu.appendChild(li);
    }
}

setAllMenu();
// loadAllNews();

const displayNews = async (event) => {
    // const allNews = await loadAllNews();
    // console.log(allNews.data.news_category);
    const response = await fetch(`https://openapi.programming-hero.com/api/news/category/0${category_id}`);
    const data = await response.json();
    console.log(data);

}
