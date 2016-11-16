
var currency = '';
$(document).ready(function() {
    $('.dropdown-menu-kind li a').click(function(){
        currency = $(this).data('val');
    })
});

function deleteClient() {
    var nameForDelete = $('#nameForDelete').val();
    var numberPhoneForDelete = $('#numberPhoneForDelete').val();
    var addressForDelete = $('#addressForDelete').val();
    var requestJSONparametr = "{\"nameForDelete\": \"" + nameForDelete + "\", \"numberPhoneForDelete\": \"" + numberPhoneForDelete + "\", \"addressForDelete\": \"" + addressForDelete + "\"}";
    $.ajax({
        type: "POST",
        url: "/client/delete",
        contentType: "application/json",
        dataType: 'json',
        data: requestJSONparametr
    });
}

function addNewClient() {
    var name = $('#name').val();
    var numberPhone = $('#numberPhone').val();
    var address = $('#address').val();
 

    var requestJSONparametr = "{\"name\": \"" + name + "\", \"numberPhone\": \"" + numberPhone + "\", \"address\": \"" + address + "\"}";
    $.ajax({
        type: "POST",
        url: "/client/add",
        contentType: "application/json",
        dataType: 'json',
        data: requestJSONparametr
    });
}


function getClients() {
    var priceRequest = new XMLHttpRequest();
    priceRequest.open("GET", "/client/get", true);   //Указываем адрес GET-запроса
    priceRequest.onload = function (){             //Функция которая отправляет запрос на сервер для получения всех студентов
        var parsedItem = JSON.parse(this.responseText);
        var itemsTable = document.getElementById('all-clients'); //получаем элемент по Id
        itemsTable.innerHTML = '';      //очищаем таблицу от устаревших данных
        parsedItem.forEach(function(item)  {
            var itemNameElement = document.createElement('td'); //создаем элемент ячейку с названием для таблицы
            itemNameElement.innerHTML =  item['name'] ;     //внедряем название предмета, полученное с сервера
            var itemPriceElement = document.createElement('td');
            itemPriceElement.innerHTML = item['numberPhone'];
            var priceElement = document.createElement('td');
            priceElement.innerHTML = item['address'];

            var elementRow = document.createElement('tr'); /// /создаем строку таблицы

            elementRow.appendChild(itemNameElement);      //помещаем обе ячейки в строку
            elementRow.appendChild(itemPriceElement);
            elementRow.appendChild(priceElement);
            itemsTable.appendChild(elementRow);           //помещаем строку в таблицу
        });
    };
    priceRequest.send(null);
}

$(document).ready(function() {
    $('.dropdown-menu li a').click(function(){
        var val_cur = $(this).data('val');
        var requestJSONparametr = "{\"itemCurr\": \"" + val_cur + "\"}";
        $.ajax({
            type: "POST",
            url: "/item/curr",
            contentType: "application/json",
            dataType: 'json',
            data: requestJSONparametr,
        });
    });
    getClients();
    // setInterval(getCars,5000);
});