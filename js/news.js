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
        li.innerHTML = `<a onclick="loadNews('${news.category_id}')">${news.category_name}</a>
        `;
        menu.appendChild(li);
    }
}

setAllMenu();
// loadAllNews();

const loadNews = async (categoryId) => {
    // const allNews = await loadAllNews();
    // console.log(allNews.data.news_category);
    // const response = await fetch(`https://openapi.programming-hero.com/api/news/category/0${category_id}`);
    // const data = await response.json();
    // console.log(data);
    // console.log(categoryId);
    const url = `https://openapi.programming-hero.com/api/news/category/${categoryId}`;
    // console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    displayNewsDetails(data.data);
    // console.log(data.data[0]);

}
const displayNewsDetails = news => {
    const newsContainer = document.getElementById('news-container');
    // newsContainer.innerHTML = ``;
    newsContainer.textContent = '';
    // const newsDiv = document.createElement('div');
    // newsDiv.classList.add('card');
    // newsDiv.innerHTML = `
    //        <figure><img src="${news.image_url}" alt="Album"></figure>
    //        <div class="card-body">
    //                     <h2 class="card-title">${news.title}</h2>
    //                     <p>${news.details.length > 250 ? news.details.slice(0, 250) + '...' : news.details}</p>
    //                     <img src="${news.author.img}">
    //                     <p>${news.author.name}</p>
    //                     <p>Total View: ${news.total_view}</p>
    //                     <div class="card-actions justify-end">
    //                         <button class="btn btn-primary">Show Details</button>
    //                     </div>
    //        </div>
    // `;
    // newsContainer.appendChild(newsDiv);
    news.forEach(elem => {
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('card');
        newsDiv.innerHTML = `
               <figure><img src="${elem.image_url}" alt="Album"></figure>
               <div class="card-body">
                            <h2 class="card-title">${elem.title}</h2>
                            <p>${elem.details.length > 250 ? elem.details.slice(0, 250) + '...' : elem.details}</p>
                            <img src="${elem.author.img}">
                            <p>${elem.author.name}</p>
                            <p>Total View: ${elem.total_view}</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary">Show Details</button>
                            </div>
               </div>
        `;
        newsContainer.appendChild(newsDiv);
    });
}