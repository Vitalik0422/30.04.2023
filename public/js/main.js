const topicList = document.querySelector('.topic')
const btnSubmit = document.querySelector('.btnSubmit')
const nameTopic = document.querySelector('.nameTopic')
const textTopic = document.querySelector('.textTopic')

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



btnSubmit.addEventListener('click', () => {
    run(nameTopic.value, textTopic.value)
    
})



const run = async (nameTopic, textTopic) => {
    const arrdata = await axios.post('/ajax', { name: nameTopic, text: textTopic })
    renderHtml(arrdata)
    console.log(arrdata.data)
}

const renderHtml = (arrdata) => {
    topicList.innerHTML = ''
    arrdata.data.forEach(element => {
        topicList.innerHTML += `<div class="topicDiv">
                                <div class="nameTopicDiv">${element.name}</div>
                                <div class="textTopicDiv">${element.text}</div>
                                <div class="btnTopicOpen"></div>
                                </div>`
    });
    const textTopicDiv = document.querySelector('.textTopicDiv')
    const btnTopicOpen = document.querySelector('.btnTopicOpen')
    btnTopicOpen.addEventListener('click', () => {
        textTopicDiv.classList.toggle('on')
    })
}
