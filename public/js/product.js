const onSubmitHandler = (e)=>{
    e.preventDefault();
    console.log("submit handler called");

    const product = e.target.productName.value;

    const obj = {
        "productName" : product
    }

    axios.post('http://localhost:4000'+"/api/product",obj).then((result)=>{
        console.log(result.data.value);
    })
}