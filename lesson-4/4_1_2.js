// es5
function Post(author, text, date) {
    this.author = author
    this.text = text
    this.date = date
}

Post.prototype.edit = function (text) {
    this.text = text
}
let obj4 = new Post('asdf', 'asdf2', 'asdf3')

function AttachedPost(author, text, date) {
    Post.call(this.author = author)
    Post.call(this.text = text)
    Post.call(this.date = date)
    this.highlighted = false
}

AttachedPost.prototype = Object.create(Post.prototype)
AttachedPost.prototype.constructor = AttachedPost

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true
}

let obj3 = new AttachedPost('Bikov', 'Lorem ipsum', '2021-09-10')
obj3.edit('Kupala')
obj3.makeTextHighlighted()
console.log(obj3.author, obj3.text, obj3.date, obj3.highlighted)
console.log(obj4.author, obj4.text, obj4.date)

//es6
class Post2 {
    constructor(author, text, date) {
        this.author = author
        this.text = text
        this.date = date
    }

    edit2(text) {
        this.text = text
    }
}
let obj5 = new Post2('asdf_es6', 'asdf2_es6', 'asdf3_es6')

class AttachedPost2 extends Post2 {
    constructor(author, text, date) {
        super(author, text, date)
        this.highlighted = false
    }
    makeTextHighlighted2() {
        this.highlighted = true
    }
}

let obj6 = new AttachedPost2('Skarina', 'Lorem ipsum2', '2021-09-11')
obj6.edit2('Chachot')
obj6.makeTextHighlighted2()

console.log(obj6.author, obj6.text, obj6.date, obj6.highlighted)
console.log(obj5.author, obj5.text, obj5.date)