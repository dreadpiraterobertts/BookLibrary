const form = document.querySelector('form')
const library = document.querySelector('.library')
const names = document.getElementById('name')
const author = document.getElementById('author')
const pages = document.getElementById('pages')
const read = document.querySelector('.read')

const myLibrary = []
//object constructor
class Book {
    constructor(name,author,pages,isRead){
        this.name = name
        this.author = author
        this.pages = pages
        this.isRead = isRead
    }
 
}

function addBookToLibrary(name,author,pages) {
    myLibrary.push(new Book(name,author,pages,false))
}

addBookToLibrary('Industrial Society And Its Future','Ted Kaszensky',58)
addBookToLibrary('The Million Dollar Fastlane','Mj Demarco',378)
addBookToLibrary('12 Rules for Life','Jordan B Peterson',390)
addBookToLibrary('Purpose Driven Life','Rick Waren',300)

function displayBook () {
    const library = document.querySelector('.library')
    for(let i=0;i<myLibrary.length;i++){
        const div = document.createElement('div')
        const h2 = document.createElement('h2')
        const name = document.createTextNode(`Name: ${myLibrary[i].name}`)
        h2.appendChild(name)

        const h3 = document.createElement('h3')
        const author = document.createTextNode(`Author: ${myLibrary[i].author}`)
        h3.appendChild(author)

        const p = document.createElement('p')
        const pages = document.createTextNode(`Pages: ${myLibrary[i].pages}`)
        p.appendChild(pages)

        const read = document.createElement('button')
        const txt = document.createTextNode('read')
        read.appendChild(txt)
        read.classList.add('read')
        read.addEventListener('click',()=>{
            read.classList.toggle('unread')
            if(myLibrary[i].isRead){
                read.innerHTML = "read"
                myLibrary[i].isRead = false
            }else{
                read.innerHTML = "unread"
                myLibrary[i].isRead = true
            }
            
        })

        const del = document.createElement('button')
        const txxt = document.createTextNode('delete')
        del.appendChild(txxt)
        del.classList.add('del')
        del.addEventListener('click',()=>{
            alert(`deleted ${myLibrary[i].name}`)
            const index = myLibrary.indexOf(myLibrary[i])
            myLibrary.splice(index,1)
            library.innerHTML = ""
            displayBook()
        })

        div.appendChild(h2)
        div.appendChild(h3)
        div.appendChild(p)
        div.appendChild(read)
        div.appendChild(del)

        library.appendChild(div)

    }
}

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const bookName = names.value
    const authors = author.value
    const page = pages.value

    addBookToLibrary(bookName,authors,page)
    function displayOneBook(){
        const library = document.querySelector('.library')
        const div = document.createElement('div')
        const h2 = document.createElement('h2')
        const name = document.createTextNode(`Name: ${myLibrary[myLibrary.length-1].name}`)
        h2.appendChild(name)

        const h3 = document.createElement('h3')
        const author = document.createTextNode(`Author: ${myLibrary[myLibrary.length-1].author}`)
        h3.appendChild(author)

        const p = document.createElement('p')
        const pages = document.createTextNode(`Pages: ${myLibrary[myLibrary.length-1].pages}`)
        p.appendChild(pages)

        const read = document.createElement('button')
        const txt = document.createTextNode('read')
        read.appendChild(txt)        
        read.classList.add('read')
        read.addEventListener('click',()=>{
            read.classList.toggle('unread')
            if(myLibrary[myLibrary.length-1].isRead){
                read.innerHTML = "read"
                myLibrary[myLibrary.length-1].isRead = false
            }else{
                read.innerHTML = "unread"
                myLibrary[myLibrary.length-1].isRead = true
            }
            
        })

        const del = document.createElement('button')
        const txxt = document.createTextNode('delete')
        del.appendChild(txxt)
        del.classList.add('del')
        del.addEventListener('click',()=>{
            alert(`deleted ${myLibrary[myLibrary.length-1].name}`)
            const index = myLibrary.indexOf(myLibrary[myLibrary.length-1])
            myLibrary.splice(index,1)
            library.innerHTML = ""
            displayBook()
        })

        div.appendChild(h2)
        div.appendChild(h3)
        div.appendChild(p)
        div.appendChild(read)
        div.appendChild(del)

        library.appendChild(div)

    
    }
    
    displayOneBook()
    
})


displayBook()
