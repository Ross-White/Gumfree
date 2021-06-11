const unlistBtn = document.querySelector("#unlist");


const unlistItemHandler = async (event) => {
    event.preventDefault();
    const itemId = document.querySelector("#itemID").textContent;
    console.log("unlist", itemId);
    const response = await fetch(`/api/items/${itemId}`, {
      method: "PUT",
      body: JSON.stringify({
        available: false,
      }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response)
    if(response.ok){
        document.location.replace('/dashboard')
    }
}

unlistBtn.addEventListener("click", unlistItemHandler);
