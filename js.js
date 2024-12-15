/* Фильтр */
function filterProducts() {
    var priceMin = document.getElementById('price-min').value;
    var priceMax = document.getElementById('price-max').value;
    var category = document.getElementById('category').value;

    var items = document.getElementsByClassName('main__categories-item');
    
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var price = parseInt(item.getAttribute('data-price'));
        var itemCategory = item.getAttribute('data-category');
        
        if (price >= priceMin && price <= priceMax && (category === 'all' || itemCategory === category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    }
}


document.addEventListener('DOMContentLoaded', function() {
    // Инициализация переменных
    const products = document.querySelectorAll('.hot-products__img');
    let currentIndex = 0; // Индекс текущего отображаемого товара

    // Функция для скрытия всех товаров
    function hideAllProducts() {
        products.forEach(product => {
            product.style.display = 'none';
        });
    }

    // Функция для отображения текущего товара
    function showProduct(index) {
        hideAllProducts();  // Скрыть все товары
        products[index].style.display = 'block';  // Показать товар с нужным индексом
    }

    // Изначально показываем первый товар
    showProduct(currentIndex);

    // Обработчик для кнопки "предыдущий" (prev)
    document.getElementById('prev').addEventListener('click', function() {
        // Переход к предыдущему товару, циклически
        currentIndex = (currentIndex === 0) ? products.length - 1 : currentIndex - 1;
        showProduct(currentIndex);
    });

    // Обработчик для кнопки "следующий" (next)
    document.getElementById('next').addEventListener('click', function() {
        // Переход к следующему товару, циклически
        currentIndex = (currentIndex === products.length - 1) ? 0 : currentIndex + 1;
        showProduct(currentIndex);
    });
});




