import { createApp } from "vue";
import Message  from "../components/Message.vue";

let timer:any
const createMessage = (message: string, type: string, time: number, useHtml: boolean) => {
    const GloMessage = createApp(Message, {
        message: {
            message: message,
            type: type,
            timeout: time,
            onClose: () => {
                document.body.removeChild(oMessage)
            },
            useHtml: useHtml
        }
    })
    clearTimeout(timer)
    const prevMessage = document.getElementById('global-message')
    prevMessage && document.body.removeChild(prevMessage)
    const oMessage = document.createElement('div')
    oMessage.id = 'global-message'
    document.body.appendChild(oMessage)
    GloMessage.mount('#global-message')

    timer = setTimeout(() => {
        const curMessage = document.getElementById('global-message')
        curMessage && document.body.removeChild(curMessage)
    }, time)
}

export default createMessage