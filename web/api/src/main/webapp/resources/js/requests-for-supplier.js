
var currency = '';
$(document).ready(function() {
    $('.dropdown-menu-kind li a').click(function(){
        currency = $(this).data('val');
    })
});

function deleteSupplier() {
    var nameOfOrganizationForDelete = $('#nameOfOrganizationForDelete').val();
    var contactNumberForDelete = $('#contactNumberForDelete').val();

    var requestJSONparametr = "{\"nameOfOrganization\": \"" + nameOfOrganizationForDelete + "\", \"contactNumber\": \"" + contactNumberForDelete + "\"}";
    $.ajax({
        type: "POST",
        url: "/supplier/delete",
        contentType: "application/json",
        dataType: 'json',
        data: requestJSONparametr,
    });
}

function addNewSupplier() {
    var nameOfOrganization = $('#nameOfOrganization').val();
    var contactNumber = $('#contactNumber').val();
    

    var requestJSONparametr = "{\"nameOfOrganization\": \"" + nameOfOrganization + "\", \"contactNumber\": \"" + contactNumber + "\"}";
    $.ajax({
        type: "POST",
        url: "/supplier/add",
        contentType: "application/json",
        dataType: 'json',
        data: requestJSONparametr
    });
}


function getSupplier() {
    var priceRequest = new XMLHttpRequest();
    priceRequest.open("GET", "/supplier/get", true);   //Указываем адрес GET-запроса
    priceRequest.onload = function (){             //Функция которая отправляет запрос на сервер для получения всех студентов
        var parsedItem = JSON.parse(this.responseText);
        var itemsTable = document.getElementById('all-suppliers'); //получаем элемент по Id
        itemsTable.innerHTML = '';      //очищаем таблицу от устаревших данных
        parsedItem.forEach(function(item)  {
            var itemNameElement = document.createElement('td'); //создаем элемент ячейку с названием для таблицы
            itemNameElement.innerHTML =  item['nameOfOrganization'] ;     //внедряем название предмета, полученное с сервера
            var itemPriceElement = document.createElement('td');
            itemPriceElement.innerHTML = item['contactNumber'];
            
            var elementRow = document.createElement('tr'); /// /создаем строку таблицы

            elementRow.appendChild(itemNameElement);      //помещаем обе ячейки в строку
            elementRow.appendChild(itemPriceElement);
            itemsTable.appendChild(elementRow);           //помещаем строку в таблицу
        });
    };
    
    priceRequest.send(null);
    $("#all-suppliers-table").tablesorter();
}




$(document).ready(function() {
    getSupplier();
    // setInterval(getCars,5000);
});