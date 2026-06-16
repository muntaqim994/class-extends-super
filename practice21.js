class User {
    constructor(name,address,username,email) {
        this.name=name
        this.address=address
        this.username=username
        this.email=email
        this.role="user"
    }
    write(text){
        let h1=document.createElement("h1")
        h1.textContent=`${this.name}:${text}`
        document.body.appendChild(h1)
    }
}


class Admin extends User{
    constructor(name,address,username,email) {
        super(name,address,username,email)  
        this.role="admin" 
    }
    remove(){
        document.querySelectorAll("h1").forEach(function(elem) {
            elem.remove()
        })
    }
}

let u1= new User("harsh","bhopaal", "async113", "harsh@gamaail.com")
let u2= new User("harshiata","delhi", "abxc2325", "wefewfh@gamaail.com")
let a1= new Admin("admin1","india", "asjcnwc3", "harsh@vfwfw.com")