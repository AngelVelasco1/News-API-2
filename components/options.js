export default {
    async getOptions() {
        try {
            const country = 'us';
            const optionsNews = document.querySelector('.options_news');
            const options = [
                "general", "entertainment", "health", "sports", "technology"
            ]

            /* API settings */
            const apiKey = `084e0cc135174cb4bad811a6571ae62a`
            let urlNews = await fetch(`https://newsapi.org/v2/top-headlines?pageSize=100&country=${country}&apiKey=${apiKey}`);
            const responseJson = await urlNews.json();

          
            /* Categories */
            const selectCategory = (e, category) => {
                let eachOption = document.querySelectorAll('.option');
                eachOption.forEach((option) => {
                    option.classList.remove('active');
                })
                urlNews = `https://newsapi.org/v2/top-headlines?pageSize=100&country=${country}&category=${category}&apiKey=${apiKey}`
                e.target.classList.add('active');
            }

            const createOptions = () => {
                for (let index of options) {
                    const optionBtn = document.createElement('button');
                    optionBtn.classList.add('btn-options');
                    optionBtn.innerHTML = index;
                    if (index === 'general') {
                        optionBtn.classList.add('active');
                    }
                    optionBtn.addEventListener('click', (event) => {
                        selectCategory(event, index);
                    });
                    optionsNews.appendChild(optionBtn);
                }
            };
            createOptions()
        }
        catch (err) {
            console.error(err)
        }

    }
}
