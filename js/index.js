window.addEventListener('load', function() {
    var focus = document.querySelector('.focus');
    var arrowL = document.querySelector('.arrow-l');
    var arrowR = document.querySelector('.arrow-r');

    focus.addEventListener('mouseover', function() {
        arrowL.style.display = 'block';
        arrowR.style.display = 'block';
        setInterval(function() {
            arrowR.click();
        }, 3000);

    })

    focus.addEventListener('mouseleave', function() {
        arrowL.style.display = 'none';
        arrowR.style.display = 'none';
    })

    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('ol');
    var focusWidth = focus.offsetWidth;

    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        li.setAttribute('index', i);

        ol.appendChild(li);
        ol.children[0].className = 'current';
        li.addEventListener('click', function() {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            var index = this.getAttribute('index');
            num = index;
            circle = index;
            animate(ul, -index * focusWidth);

        })
    }

    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    var num = 0;
    var circle = 0;
    var flag = true;

    arrowR.addEventListener('click', function() {
        if (flag) {
            flag = false;
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * focusWidth, function() {
                flag = true;
            });
            circle++;
            circle = circle == ol.children.length ? 0 : circle;
            circleChange();
        }
    })

    arrowL.addEventListener('click', function() {
        if (flag) {
            flag = false;
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = (ul.children.length - 1) * focusWidth;

            }
            num--;
            animate(ul, -num * focusWidth, function() {
                flag = true;
            });
            circle--;
            circle = circle < 0 ? ol.children.length - 1 : circle;
            circleChange();
        }

    })

    function circleChange() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }

        ol.children[circle].className = 'current';
    }

    var timer = setInterval(function() {
        arrowR.click();
    }, 3000);



})