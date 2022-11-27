function listenToSubmit() {
    document.addEventListener("submit", (event) => {
        event.preventDefault()
        const title = document.getElementById("title").value
        const contact = document.getElementById("contact").value
        const description = document.getElementById("description").value
        if (title.length === 0 || description.length === 0 || contact.length === 0) {
            alert("Все поля должны быть заполнены.")
            return
        }
        document.getElementById("title").value = "";
        document.getElementById("contact").value = "";
        document.getElementById("description").value = "";
        const hash = new Date().getTime() + title
        const suggestObject = {"title": title, "contact": contact, "description": description}
        localStorage.setItem(hash, JSON.stringify(suggestObject))
        renderSuggest(suggestObject)
    })
}

function displayMetrics() {
    const keys = Object.keys(localStorage)
    let count_of_suggest = keys.length
    while (count_of_suggest--) {
        renderSuggest(JSON.parse(localStorage.getItem(keys[count_of_suggest])))
    }
}

function renderSuggest(suggestObject) {
    console.log(suggestObject)
    const rowRender = `
      <tr>
          <td>
              ${suggestObject["title"].toString()}
          </td>
          <td>
              ${suggestObject["contact"].toString()}
          </td>
          <td>
              ${suggestObject["description"].toString()}
          </td>
      </tr>
    `;
    document.querySelector(".grid-from-table-body").insertAdjacentHTML("beforeend", rowRender);
}

(function () {
    document.addEventListener("DOMContentLoaded", () => {
        listenToSubmit()
        displayMetrics()
    })
})();