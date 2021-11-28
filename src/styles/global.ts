import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
    
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

:root {
        --background: #f0f2f5;
		--header: #5429CC;
		--green: #33CC95;
		--red: #E62E4D;
		--title:#363F5F;
		--text:#969CB3;

}

@import url('https://fonts.googleapis.com/css2?family=Righteous&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

* {
    box-sizing: border-box;
    font-size: 16px;
    font-family: 'Roboto', Arial, Helvetica sans-serif;
    font-weight: 400;
    scroll-behavior: smooth;
}

body {
	-webkit-font-smoothing: antialiased;
    background-color: ---background;
	color: --text;
}

html {
    font-size: 62.5%;

	@media(max-width: 1024px) {
		font-size: 59%;
	}

	@media(max-width: 720px) {
		font-size: 55%;
	}
}

h1 {
	font-size: 2rem;
}

p {
	font-size: 1.6rem;
	font-weight: 400;	
}

main {
    width: 100%;
	max-width: 1024px;
	margin: 0 auto;
}
    
.react-modal-overlay {
        position: fixed;
        top:0;
        bottom:0;
        right:0;
        left:0;
		background-color:white;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0,0,0,0.5);
}

.react-modal-content {
	width:100%;
	max-width:58rem;
	position: relative;
	border-radius:0.7rem;
	background-color:white;
	padding: 3rem;

}

.react-modal-close {
	position:absolute;
	right: 2rem;
	top: 2rem;
	border: 0;
	background: transparent;
	transition: filter 0.2s;
	cursor: pointer;

	&:hover {
		filter: brightness(0.9);
	}
}

`