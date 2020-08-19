window.addEventListener('load', function() {



    var preview = document.querySelector('.preview_img');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');

    preview.addEventListener('mouseover', function() {
        mask.style.display = 'block';
        big.style.display = 'block';
    });

    preview.addEventListener('mouseout', function() {
        mask.style.display = 'none';
        big.style.display = 'none';
    });

    preview.addEventListener('mousemove', function(e) {

        var x = e.pageX - preview.offsetLeft;
        var y = e.pageY - preview.offsetTop;
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetHeight / 2;

        if (maskX < 0) {
            maskX = 0;
        } else if (maskX > preview.offsetWidth - mask.offsetWidth) {
            maskX = preview.offsetWidth - mask.offsetWidth;
        }
        if (maskY < 0) {
            maskY = 0;
        } else if (maskY > preview.offsetHeight - mask.offsetHeight) {
            maskY = preview.offsetHeight - mask.offsetHeight;
        }
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';

        var bigImg = document.querySelector('.bigImg');
        var bigMax = bigImg.offsetWidth - big.offsetWidth;
        var bigX = maskX * bigMax / (preview.offsetWidth - mask.offsetWidth);
        var bigY = maskY * bigMax / (preview.offsetWidth - mask.offsetWidth);

        bigImg.style.left = -bigX + 'px';
        bigImg.style.top = -bigY + 'px';


    })






})