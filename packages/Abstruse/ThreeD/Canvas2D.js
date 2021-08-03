import createjs from 'createjs-cmd'

export class Canvas2D {
    constructor(canvasId) {
        this.canvasId = canvasId
        // this.init()
        // this.initImg()
    }

    init() {
        let canvas = document.getElementById(this.canvasId);

        //创建一个舞台，得到一个参考的画布
        const stage = new createjs.Stage(this.canvasId);
        //创建一个形状的显示对象
        const circle = new createjs.Shape();
        circle.graphics.beginFill("red").drawCircle(0, 0, 40);
        //形状实例的设置位置
        circle.x = circle.y = 50;
        //添加形状实例到舞台显示列表
        stage.addChild(circle);
        //更新舞台将呈现下一帧
        stage.update();

        return canvas

    }

    initImg() {
        let canvas,
            stage,
            container,
            w = window.innerWidth,
            h = window.innerHeight,
            image;

        function init() {
            //设置canvas属性
            canvas = document.getElementById(this.canvasId);

            canvas.width = w;
            canvas.height = h;
            //创建舞台
            stage = new createjs.Stage(canvas);
            container = new createjs.Container();//绘制外部容器
            stage.addChild(container);

            //加载图片
            image = new Image();
            /**
             猜测nginx 配置
             add_header 'Access-Control-Allow-Origin' '*';
             add_header 'Access-Control-Allow-Credentials' 'true';
             * @type {string}
             */
            image.src = "https://cdn.pixabay.com/photo/2015/08/09/17/19/kingfisher-881975_960_720.jpg";
            image.onload = handleImageLoad;

        }

        function handleImageLoad(event) {
            let bitmap = new createjs.Bitmap(event.target);
            container.addChild(bitmap);
            stage.update();
        }

        init.bind(this)()

        return canvas

    }


}