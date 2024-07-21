function Book(title, author, page, read){
    this.title = title
    this.author = author
    this.page = page
    this.read = read

    this.info = () => {
        if (this.read === false){
            console.log(`${this.title} by ${this.author}, ${this.page} pages, not read yet`)
        } else{
            console.log(`${this.title} by ${this.author}, ${this.page} pages, has been read`)
        }
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false)

theHobbit.info()