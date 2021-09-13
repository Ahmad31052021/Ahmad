const base_url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";
//inisialisai
const table = document.getElementById("table");
fetch(base_url)
.then(respone => respone.json())
.then(data => {
    const meals = data.meals;
    console.log(meals);
    for (let i = 0; i < meals.length; i++) {
        const row = table.insertRow(i + 1);

        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);

        cell1.innerHTML = meals[i].idMeal;
        cell2.innerHTML = meals[i].strMeal;
        cell3.innerHTML = meals[i].strMealThumb;
        
    }
});