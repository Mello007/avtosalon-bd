
var currency = '';
$(document).ready(function() {
    $('.dropdown-menu-kind li a').click(function(){
        currency = $(this).data('val');
    })
});

function deleteEmployees() {
    var nameForDelete = $('#nameForDelete').val();
    var requestJSONparametr = "{\"name\": \"" + nameForDelete + "\"}";
    $.ajax({
        type: "POST",
        url: "/employee/delete",
        contentType: "application/json",
        dataType: 'json',
        data: requestJSONparametr
    });
}

function addNewEmployees() {
    var name = $('#name').val();
    var salary = $('#salary').val();
    var dateOfBirthday = $('#dateOfBirthday').val();
    var dateOfreception = $('#dateOfreception').val();
    var requestJSONparametr = "{\"name\": \"" + name + "\", \"salary\": \"" + salary + "\"," +
        " \"dateOfBirthday\": \"" + dateOfBirthday + "\", \"dateOfreception\": \"" + dateOfreception + "\"}";
    $.ajax({
        type: "POST",
        url: "/employee/add",
        contentType: "application/json",
        dataType: 'json',
        data: requestJSONparametr
    });
}


function getEmployees() {
    var priceRequest = new XMLHttpRequest();
    priceRequest.open("GET", "/employee/get", true);   //Указываем адрес GET-запроса
    priceRequest.onload = function (){             //Функция которая отправляет запрос на сервер для получения всех студентов
        var parsedItem = JSON.parse(this.responseText);
        var itemsTable = document.getElementById('all-employees'); //получаем элемент по Id
        itemsTable.innerHTML = '';      //очищаем таблицу от устаревших данных
        parsedItem.forEach(function(item)  {
            var itemNameElement = document.createElement('td'); //создаем элемент ячейку с названием для таблицы
            itemNameElement.innerHTML =  item['name'] ;     //внедряем название предмета, полученное с сервера
            var itemPriceElement = document.createElement('td');
            itemPriceElement.innerHTML = item['salary'];
            var priceElement = document.createElement('td');
            priceElement.innerHTML = item['dateOfBirthday'];
            var dateOfreception = document.createElement('td');
            dateOfreception.innerHTML = item['dateOfreception'];
            var elementRow = document.createElement('tr'); /// /создаем строку таблицы

            elementRow.appendChild(itemNameElement);      //помещаем обе ячейки в строку
            elementRow.appendChild(itemPriceElement);
            elementRow.appendChild(priceElement);
            elementRow.appendChild(dateOfreception);
            itemsTable.appendChild(elementRow);           //помещаем строку в таблицу
        });
    };
    priceRequest.send(null);
    $("#all-employees").tablesorter();
}

$(document).ready(function() {
    getEmployees();
    // setInterval(getCars,5000);
});