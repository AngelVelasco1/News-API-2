export default {
    async showNews() {

        try {
            /* DOM selections */
            const renderNews = document.querySelector('#render-container');

            /* Variables */
            const country = 'us';

            /* API settings */
            const apiKey = `084e0cc135174cb4bad811a6571ae62a`
            let urlNews = await fetch(`https://newsapi.org/v2/top-headlines?pageSize=100&country=${country}&apiKey=${apiKey}`);
            const responseJson = await urlNews.json();

            /* News */
            const getNews = async () => {
                const template = responseJson.articles.map((eachNew) => {
                    return `
                
                    <div class="news-card">
                        <div class="container-img">
                            <img class="img_news" src="${eachNew.urlToImage || " ./img/newspaper.png"}" />
                        </div>
                        <div class="news-content">
                            <div class="title_news">
                                ${eachNew.title}
                            </div>
                            <div class="description-news">
                                <p>${eachNew.description || eachNew.content}</p>
                            </div>
                        </div>
                        <a class="btn-news" href="${eachNew.url}" target="_blank">Show more!</a>
                    </div>
               
            

  
             `
                });
                renderNews.innerHTML += template.join('');

            }

            getNews();

        }
        catch (error) {
            console.error(error);
        }

    }
}