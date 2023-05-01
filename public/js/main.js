const topicList = document.querySelector('.topic')
const formEl = document.querySelector('form')

const loadPage = async () => {
    const auditData = await axios.get('/data')
    console.log(auditData);
    if (!auditData.data.length) {
        console.log('null')
        topicList.innerHTML = '<div class="topicNull">Ви не стоврили жодної теми....</div>'
        return;
    }
    if (auditData.data.length) {
        renderHtml(auditData)
        console.log('not null')
    }

}
loadPage()



formEl.addEventListener('submit', (ev) => {
    ev.preventDefault()
    const formData = new FormData(ev.target)
    const nameTopic = formData.get('nameTopic')
    const textTopic = formData.get('textTopic')
    console.log(textTopic, nameTopic);
    run(nameTopic, textTopic)
    
})



const run = async (nameTopic, textTopic) => {
    const arrdata = await axios.post('/ajax', { name: nameTopic, text: textTopic })
    renderHtml(arrdata)
    console.log(arrdata.data)
}

const renderHtml = (arrdata) => {
    topicList.innerHTML = ''
    arrdata.data.forEach(element => {
        topicList.innerHTML += `<li class="topicDiv">
                                <div class="nameTopicDiv">${element.name}</div>
                                <div class="textTopicDiv">${element.text}</div>
                                </li>`
    });
    let li = document.querySelectorAll('.topicDiv')
    li.forEach(item => {
        item.addEventListener('click', (e)=> {
            if(e.target.classList.contains('textTopicDiv')) {
                console.log(e.target);
                e.target.classList.toggle('on')
            }
        })
    })
}
