'use strict';
(function () {
    // собираем все якоря; устанавливаем время анимации и количество кадров
    const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
      animationTime = 300,
      framesCount = 100;

    anchors.forEach((item) => {
    // каждому якорю присваиваем обработчик события
        item.addEventListener('click', (e) => {
        // убираем стандартное поведение
            e.preventDefault();
    
            // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
            let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top - 100;
            // coordY = coordY - 100;
            // запускаем интервал, в котором
            let scroller = setInterval(() => {
                // считаем на сколько скроллить за 1 такт
                let scrollBy = coordY / framesCount;
      
                // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
                // и дно страницы не достигнуто
                if(scrollBy < coordY - window.pageYOffset && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
                    // то скроллим на к-во пикселей, которое соответствует одному такту
                    window.scrollBy(0, scrollBy);
                } else if (scrollBy < document.querySelector(item.getAttribute('href')).getBoundingClientRect().top - 100)
                {
                    window.scrollBy(0, scrollBy);
                } else 
                {
                    // иначе добираемся до элемента и выходим из интервала
                    clearInterval(scroller);
                }
            // время интервала равняется частному от времени анимации и к-ва кадров
            }, animationTime / framesCount);
        });
    });
})();