/**
 * 省级 zhdj 二级页面
 */
import {yunanMapData} from "./map/mapDataForEcahrt/manualYunnan";
import {Radio} from "./echartOptions/Radio";
import {Others} from "./echartOptions/Others";
import {Lines} from "./echartOptions/Lines";
import {SingleNumber} from "./echartOptions/SingleNumber";
import {Bar} from "./echartOptions/Bar";
import {Pie} from "./echartOptions/Pie";
import {MapFromGaode} from "./map/MapFromGaode";
import {MapFromGaodeCover} from "./map/MapFromGaodeCover"

import {MapFormEchart} from "./map/MapFormEchart";
import {Canvas2D} from "./ThreeD/Canvas2D";
import {Menu3D} from "./ThreeD/Menu3D";
import {PicWall3D} from "./ThreeD/PicWall3D";
import init from "./ThreeD/Img3D/3d-pic";


let Abstruse = {};
Abstruse.Radio = Radio;
Abstruse.Lines = Lines;
Abstruse.Bar = Bar;
Abstruse.Others = Others;
Abstruse.Pie = Pie;
Abstruse.MapFromGaode = MapFromGaode;
Abstruse.MapFromGaodeCover = MapFromGaodeCover;
Abstruse.MapFormEchart = MapFormEchart;
Abstruse.SingleNumber = SingleNumber;
Abstruse.Canvas2D = Canvas2D;
Abstruse.Menu3D = Menu3D;
Abstruse.PicWall3D = PicWall3D;
Abstruse.init3dPic = init;
Abstruse.yunanMapData = yunanMapData;
export {Abstruse};
