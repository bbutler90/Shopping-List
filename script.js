function addItem() {
    var itemInput = document.getElementById("itemInput");
    var itemName = itemInput.value.trim();

    if (itemName === "") {
        alert("Please enter an item.");
        return;
    }

    var shoppingList = document.getElementById("shoppingList");
    var listItem = document.createElement("li");
    listItem.innerHTML = `${itemName} <span onclick="removeItem(this)">Remove</span>`;
    shoppingList.appendChild(listItem);

    itemInput.value = "";
}

function removeItem(item) {
    var listItem = item.parentNode;
    var shoppingList = document.getElementById("shoppingList");
    shoppingList.removeChild(listItem);
}
