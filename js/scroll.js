'use strict';
(function () {
    // собираем все якоря; устанавливаем время анимации и количество кадров
    const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
      animationTime = 300,
      framesCount = 100;
    
      

    anchors.forEach((item) => {
        
        item.addEventListener('click', (e) => {
            
            e.preventDefault();
    
            
            let element = document.querySelector(item.getAttribute('href'));
            let coordY = element.getBoundingClientRect().top - 100;
            
            let scroller = setInterval(() => {
                
                let scrollBy = coordY / framesCount;
                
                if (scrollBy > 0) {
                    if(scrollBy < coordY - window.pageYOffset) {
                        
                        window.scrollBy(0, scrollBy);
                    } else if (scrollBy < element.getBoundingClientRect().top - 100 && scrollBy >= 0.8)
                    {
                        window.scrollBy(0, scrollBy);
                    } else 
                    {
                        
                        let coordY =  element.getBoundingClientRect().top - 100;
                        window.scrollBy(0, coordY);
                        clearInterval(scroller);
                    }
                } else  if(window.pageYOffset !== 0){
                    let coordY = element.getBoundingClientRect().top - 100;
                    if(coordY < 0 ) {
                        window.scrollBy(0, scrollBy);
                    }else {
                        window.scrollBy(0, coordY);
                        clearInterval(scroller);
                    }
                } else {
                    clearInterval(scroller);
                }
                
            }, animationTime / framesCount);
        });
    });
})();