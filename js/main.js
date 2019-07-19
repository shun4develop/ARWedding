/*
AFRAME.registerComponent('registerevents', {
        init: function () {
            var marker = this.el;

            // マーカーを検出したイベントの登録
            marker.addEventListener('markerFound', function () {
                var markerId = marker.id;
                console.log('markerFound', markerId);

                // アニメーションの開始
                document.querySelector('#box').emit('markerfound');
            });

            // マーカーを見失ったイベントの登録
            marker.addEventListener('markerLost', function () {
                var markerId = marker.id;
                console.log('markerLost', markerId);

                // アニメーションの停止
                document.querySelector('#box').emit('markerlost');
            });
        }
    });
*/

function render() {
    //t += 0.01;
    //cylinder.setAttribute('position', '0 '+(Math.sin(t*2)+1)+' 0');
}

requestAnimationFrame(render);

var vid = document.getElementById('movie1');
vid.play();