(function () {
    var box = document.querySelectorAll(".box_absolute");
    var windowWidht = document.body.clientWidth;

    var onBoxDown = (evt) => {
        evt.preventDefault();
        var target = evt.currentTarget;
        var next = target.nextElementSibling;
        var previous = target.previousElementSibling;

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
            newLeftOffset = newLeftOffset * 100 / windowWidht;

            target.style.left = newLeftOffset + '%';

            if(next)
            next.style.left = newLeftOffset + 100 + "%";

            if(previous)
            previous.style.left = newLeftOffset + -100 + "%";
            
            target.classList.remove('box_active');

            if(next)
            next.classList.remove('box_active');
            if(previous)
            previous.classList.remove('box_active');
        };

        var onMouseUp = function (upEvt) {
            upEvt.preventDefault();
            document.removeEventListener('mousemove', onMouseMove);
            if (target.offsetLeft <= -100 && next) {
                target.style.left = -100 + '%';
                target.classList.add('box_active');
                if(next) {
                    next.style.left = 0 + '%';
                    next.classList.add('box_active');
                }
            } else if (target.offsetLeft >= 100 && previous) {
                target.style.left = 100 + '%';
                target.classList.add('box_active');
                if(previous) {
                    previous.style.left = 0 + '%';
                    previous.classList.add('box_active');
                }
            } else {
                target.style.left = 0 + '%';
                target.classList.add('box_active');
                if (next) {
                    next.style.left = 100 + '%';
                    next.classList.add('box_active');
                }
                if (previous) {
                    previous.style.left = -100 + '%';
                    previous.classList.add('box_active');
                }
            }
            document.removeEventListener('mouseup', onMouseUp);
        };
        
        
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    };
    box.forEach((it) => {
        it.addEventListener("mousedown", onBoxDown);
    })
})();