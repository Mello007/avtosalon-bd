
var currency = '';
$(document).ready(function() {
    $('.dropdown-menu-kind li a').click(function(){
        currency = $(this).data('val');
    })
});

function deleteCar() {
    var markForDelete = $('#markForDelete').val();
    var priceForDelete = $('#priceForDelete').val();
    
    var requestJSONparametr = "{\"markForDelete\": \"" + markForDelete + "\", \"priceForDelete\": \"" + priceForDelete + "\"}";
    $.ajax({
        type: "POST",
        url: "/car/delete",
        contentType: "application/json",
        dataType: 'json',
        data: requestJSONparametr
    });
}

function addNewCar() {
    var mark = $('#mark').val();
    var color = $('#color').val();
    var price = $('#price').val();
    var dateOfSale = $('#dateOfSale').val();
    var dateOfSupply = $('#dateOfSupply').val();
    
    var requestJSONparametr = "{\"mark\": \"" + mark + "\", \"color\": \"" + color + "\", \"price\": \"" + price + "\"" +
        ", \"dateOfSale\": \"" + dateOfSale + "\", \"dateOfSupply\": \"" + dateOfSupply + "\"}";
    $.ajax({
        type: "POST",
        url: "/car/add",
        contentType: "application/json",
        dataType: 'json',
        data: requestJSONparametr,
    });
}


function getCars() {
    var priceRequest = new XMLHttpRequest();
    priceRequest.open("GET", "/car/get", true);   //Указываем адрес GET-запроса
    priceRequest.onload = function (){             //Функция которая отправляет запрос на сервер для получения всех студентов
        var parsedItem = JSON.parse(this.responseText);
        var itemsTable = document.getElementById('all-items'); //получаем элемент по Id
        itemsTable.innerHTML = '';      //очищаем таблицу от устаревших данных
            parsedItem.forEach(function(item)  {
            var itemNameElement = document.createElement('td'); //создаем элемент ячейку с названием для таблицы
            itemNameElement.innerHTML =  item['mark'] ;     //внедряем название предмета, полученное с сервера
            var itemPriceElement = document.createElement('td');
            itemPriceElement.innerHTML = item['color'];
                var priceElement = document.createElement('td');
                priceElement.innerHTML = item['price'];
                var dateOfSale = document.createElement('td');
                dateOfSale.innerHTML = item['dateOfSale'];
                var dateOfSupply = document.createElement('td');
                dateOfSupply.innerHTML = item['dateOfSale'];

                var elementRow = document.createElement('tr'); /// /создаем строку таблицы

            elementRow.appendChild(itemNameElement);      //помещаем обе ячейки в строку
            elementRow.appendChild(itemPriceElement);
                elementRow.appendChild(priceElement);
                elementRow.appendChild(dateOfSupply);
                elementRow.appendChild(dateOfSale);
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
    getCars();
    // setInterval(getCars,5000);
});