window.addEventListener('load', function () {
    //获取左右按钮  
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');
    var focusWidth = focus.offsetWidth;
    //注册事件 ,显示隐藏按钮
    focus.addEventListener('mouseenter', function () {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        timer = null;
    })
    focus.addEventListener('mouseleave', function () {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        timer = setInterval(function () {
            arrow_r.click();
        }, 2000);

    })
    //动态生成小圆圈
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');
    for (var i = 0; i < ul.children.length; i++) {
        //创建一个小li
        var li = document.createElement('li');
        li.setAttribute('index', i);
        //把小li插入到ul内
        ol.appendChild(li);
        //小圆圈排他
        li.addEventListener('click', function () {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            //5
            //点击小圆圈，移动图片
            //ul的移动距离 小圆圈的索引号 乘以图片的宽度 注意是负值
            //当点击了某个小li 就拿到当前小li的索引号
            var index = this.getAttribute('index');
            //当点击了某个小li，就把li的索引号给num
            num = index;
            circle = index;
            animate(ul, -index * focusWidth);
            var anima = focus.onfullscreenerror
        }
        )
    }
    //把ol的第一个li类名设为current
    ol.children[0].className = 'current';
    //6.克隆第一张图片
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    //7.点击右侧按钮，图片移动
    var circle = 0;
    var num = 0;
    var flag = true;
    arrow_r.addEventListener('click', function ()
        //如果走到最后一张,ul要快速复原  left 改为0
        //
        if (flag) {
        flag = false;
        if (num == ul.children.length - 1) {
            ul.style.left = 0;
            num = 0;
        }
        num++;
        animate(ul, -num * focusWidth, function () {
            flag = true;
        });
        circle++;
        //如果走到最后一张
        if (circle == ul.children.length - 1) {
            circle = 0;
        }
        circleChange();
    }
})
    //左侧按钮
    arrow_l.addEventListener('click', function () {
        //如果走到最后一张,ul要快速复原  left 改为0
        if (flag) {
            flag = false;
        if (num == 0) {  
            num = ul.children.length - 1;
            ul.style.left = - num  * focusWidth +'px' ;
        }
        num--;
            animate(ul, -num * focusWidth, function () {
                flag = true;
        });
        circle--;
        //如果走到最后一张
        if (circle<0) {
            circle = ol.children.length-1;
        }
        circleChange();
        
        }
    })
    function circleChange() {
        for (var i = 0; i < ol.children.length; i++){
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    }
    var timer = setInterval(function () {
        arrow_r.click();
    }, 2000);
})