function f() {
  document.querySelector('.time').innerHTML = `
    new Date().toLocaleDateString():&nbsp;&nbsp;${new Date().toLocaleDateString()} 
    <hr />
    new Date().toLocaleString():&nbsp;&nbsp;${new Date().toLocaleString()}
    `
  setTimeout(f, 1000)
}

f()
