const unlistBtn = document.querySelector('#unlist')

unlistBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    const itemId = document.querySelector("#itemID").textContent;
    console.log("unlist", itemId)
})
