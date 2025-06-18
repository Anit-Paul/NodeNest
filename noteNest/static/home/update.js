const url=new URLSearchParams(window.location.search);
const id=url.get("id")

const token=localStorage.getItem("token")
if(!token){
    window.location.href="/auth/login/"
}

document.querySelector("#save").addEventListener("click",async (e)=>{
    e.preventDefault()
    const content=document.querySelector("#noteContent").value.trim()
    const response=await fetch("http://127.0.0.1:8000/home/notes/",{
        method:"PATCH",
        headers : {
        "Content-Type":"application/json",
        Authorization: `Token ${token}`
        },
        body: JSON.stringify({id : id,content:content})
    })
    if(response.ok){
        window.location.href="/home/"
    }
    else{
        alert("something went wrong plz try again later!")
    }
})