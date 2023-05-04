const topicList = document.querySelector('.topic')
const formEl = document.querySelector('.createTopic')
const formSearchEl = document.querySelector('.searchText')



topicList.addEventListener('click', (ev) => ev.target.classList.contains('topicDiv')  ? slideMenu(ev.target)  : 0)

formEl.addEventListener('submit', (ev) => {
    ev.preventDefault()
    const formData = new FormData(ev.target)
    const nameTopic = formData.get('nameTopic')
    const textTopic = formData.get('textTopic')
    console.log(textTopic, nameTopic);
    run(nameTopic, textTopic)
})
formSearchEl.addEventListener('input', (ev) => {
    searchFilter(ev.target.value)
})

const loadPage = async () => {
    const {data} = await axios.get('/data')
    const infoText = '<div class="topicNull">Ви не стоврили жодної теми....</div>'
    !data.length ? topicList.innerHTML = infoText : renderHtml(data)
}
const run = async (nameTopic, textTopic) => {
    const {data} = await axios.post('/create', { name: nameTopic, text: textTopic })
    console.log(data);
    renderHtml(data)
}
const searchFilter = async (searchText) => {
    const {data} = await axios.get('/data')
    const arrEl = await data.filter(item => item.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1)
    renderHtml(arrEl)
}
const renderHtml = (data) => {
    console.log(data);
    topicList.innerHTML = ''
    data.forEach(element => {
        topicList.innerHTML += `<div class="topicDiv">
                                 ${element.name}
                                <div class="textTopicDiv">${element.text}</div>
                                </div>`
    });
}
const slideMenu = (ev) => {
    const slide = document.querySelectorAll('.textTopicDiv')
    slide.forEach(element =>  element.classList.contains('on') ? element.classList.remove('on') : 0)
    ev.childNodes[1].classList.toggle('on')
}

loadPage()