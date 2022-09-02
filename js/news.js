const loadAllNews = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await res.json();
    return data;

}

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
        li.innerHTML = `<a>${news.category_name}</a>
        `;
        menu.appendChild(li);
    }
}

setAllMenu();
// loadAllNews();