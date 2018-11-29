(function () {
    var item = document.querySelector(".box_absolute");

    var onItemDown = (evt) => {
        evt.preventDefault();
        var target = evt.currentTarget;

        var startCoords = {
            x: evt.clientX
        };

        var onMouseMove = function (moveEvt) {
            moveEvt.preventDefault();

            var shift = {
                x: startCoords.x - moveEvt.clientX,
            };
            startCoords = {
                x: moveEvt.clientX
            };
        
            var newLeftOffset = target.offsetLeft - shift.x;
            target.style.left = (newLeftOffset) + 'px';
        };

        var onMouseUp = function (upEvt) {
            upEvt.preventDefault();
            document.removeEventListener('mousemove', onMouseMove);
            target.style.left = 0 + 'px';
            target.classList.add('box_active');
            document.removeEventListener('mouseup', onMouseUp);
        };
        
        target.classList.remove('box_active');
        
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    };
    item.addEventListener("mousedown", onItemDown);
})();