
var currency = '';
$(document).ready(function() {
    $('.dropdown-menu-kind li a').click(function(){
        currency = $(this).data('val');
    })
});

function deleteTests() {
    var nameForDelete = $('#nameForDelete').val();

    var requestJSONparametr = "{\"name\": \"" + nameForDelete + "\"}";
    $.ajax({
        type: "POST",
        url: "/test/delete",
        contentType: "application/json",
        dataType: 'json',
        data: requestJSONparametr,
    });
}

function addNewTest() {
    var name = $('#name').val();
    var nameOfAutomobile = $('#nameOfAutomobile').val();
    var date = $('#date').val();

    var requestJSONparametr = "{\"name\": \"" + name + "\", \"nameOfAutomobile\": \"" + nameOfAutomobile + "\", \"date\": \"" + date + "\"}";
    $.ajax({
        type: "POST",
        url: "/test /add",
        contentType: "application/json",
        dataType: 'json',
        data: requestJSONparametr
    });
}


function getTests() {
    var priceRequest = new XMLHttpRequest();
    priceRequest.open("GET", "/test/get", true);   //Указываем адрес GET-запроса
    priceRequest.onload = function (){             //Функция которая отправляет запрос на сервер для получения всех студентов
        var parsedItem = JSON.parse(this.responseText);
        var itemsTable = document.getElementById('all-tests'); //получаем элемент по Id
        itemsTable.innerHTML = '';      //очищаем таблицу от устаревших данных
        parsedItem.forEach(function(item)  {
            var itemNameElement = document.createElement('td'); //создаем элемент ячейку с названием для таблицы
            itemNameElement.innerHTML =  item['name'] ;     //внедряем название предмета, полученное с сервера
            var itemPriceElement = document.createElement('td');
            itemPriceElement.innerHTML = item['nameOfAutomobile'];
            var date = document.createElement('td');
            date.innerHTML = item['date'];
            var elementRow = document.createElement('tr'); /// /создаем строку таблицы

            elementRow.appendChild(itemNameElement);      //помещаем обе ячейки в строку
            elementRow.appendChild(itemPriceElement);
            elementRow.appendChild(date);
            itemsTable.appendChild(elementRow);           //помещаем строку в таблицу
        });
    };
    priceRequest.send(null);
    $("#all-tests").tablesorter();

}




$(document).ready(function() {
    getTests();
});