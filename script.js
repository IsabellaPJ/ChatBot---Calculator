// TOGGLE CHATBOX
const chatboxToggle = document.querySelector('.chatbox-toggle')
const chatboxMessage = document.querySelector('.chatbox-message-wrapper')
chatboxToggle.addEventListener('click', function () {
	chatboxMessage.classList.toggle('show')
})
// CHATBOX MESSAGE
const textarea = document.querySelector('.chatbox-message-input')
const chatboxForm = document.querySelector('.chatbox-message-form')
const chatboxMessageWrapper = document.querySelector('.chatbox-message-content')
const chatboxNoMessage = document.querySelector('.chatbox-message-no-message')
chatboxForm.addEventListener('submit', function (e) {
	let bot=getBotResponse(textarea.value);
    if(bot!==''){ 
        writeMessage()
        setTimeout(() => {
            greeting(bot);
        }, 1000)
    }
})
function writeMessage() {
	const today = new Date()
	let message = `
		<div class="chatbox-message-item sent">
			<span class="chatbox-message-item-text">
				${textarea.value}
			</span>
			<span class="chatbox-message-item-time"><b>User : </b>${today.getHours()}:${today.getMinutes()}</span>
		</div>	`
	chatboxMessageWrapper.insertAdjacentHTML('beforeend', message)
	chatboxForm.style.alignItems = 'center'
	//textarea.rows = 1
	textarea.focus()
	textarea.value = ''
	chatboxNoMessage.style.display = 'none'
}
function greeting(bot) {
	const today = new Date()
	let message = `
		<div class="chatbox-message-item received">
			<span class="chatbox-message-item-text">
				`+bot+`
			</span>
			<span class="chatbox-message-item-time"><b>Bot : </b>${today.getHours()}:${today.getMinutes()}</span>
		</div>`
	chatboxMessageWrapper.insertAdjacentHTML('beforeend', message)
    scrollBottom()
}
function scrollBottom() {
	chatboxMessageWrapper.scrollTo(0, chatboxMessageWrapper.scrollHeight)
}