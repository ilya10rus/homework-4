import './index.css';

const btn = document.createElement('button');
btn.className = 'cookie-consent__button';
btn.textContent = 'Прекрасно'
btn.addEventListener('click', () => {
	localStorage.setItem('test', 'true')
	mainContainer.remove()
})

const textCookie = document.createElement('p');
textCookie.className = 'cookie-consent__text';
textCookie.textContent = 'Мы используем файлы cookie для наилучшего представления нашего сайта';

const mainContainer = document.createElement('div');
mainContainer.className = 'cookie-consent';

mainContainer.append(textCookie, btn)
document.body.append(mainContainer)

if (localStorage.getItem('test', 'true')) {
	mainContainer.remove()
}

