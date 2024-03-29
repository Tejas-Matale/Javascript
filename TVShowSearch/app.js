const form = document.querySelector('#searchForm');
const resultContainer=document.querySelector('#results')

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    showName(res.data)
    form.elements.query.value = '';
})

const showName = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const show=document.createElement('div')
            show.classList.add('show')

            const name=document.createElement('span');
            name.innerText=result.show.name;

            const img = document.createElement('IMG');
            img.src = result.show.image.medium;

            show.appendChild(img)
            show.appendChild(name)

            resultContainer.appendChild(show)
        }
    }
}
