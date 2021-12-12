Settings

Colors:

body-background: #051d3b

save-button: #5081fb


Shadow:

rgb(0,0,0,0.24)

Typography:

inter;
Title: height 21px;

body: 16px;

Sidebar Title: 12px;



const textarea = document.getElementById('editor')

textarea.addEventListener('input', function (e) {
  this.style.height = 'auto'
  this.style.height = this.scrollHeight + 'px'
})