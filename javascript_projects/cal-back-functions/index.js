var result=fetch("https://randomuser.me/api/")
result.then(function(res){
    console.log(res)
    var data=res.json();
    console.log(data)
    data.then((userdata) =>{
        console.log(userdata)
    })
})
    result.catch((err) => {
        console.log(err)
    })

    