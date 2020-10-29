
let point;
let color1 = "rgb(94, 204, 255)";
let color2 = "white";

function rdo(r,a,b,c=-1,d=-1){
    let e = document.getElementById("rdo"+r+"");
    if((point >= a && point < b) || (point >= c && point < d)){e.style.backgroundColor=color1;}
    else{e.style.backgroundColor=color2;}
}
function set_rdos(){
    let wh = window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;
    let dg_sol_high = document.getElementById("dig_solution").offsetHeight;
    let a = wh * (7 / 10);
    let b = wh * (8 / 10);
    point = document.documentElement.scrollTop||window.pageYOffset; point += (wh / 3);
    var value=0;

    rdo(1 , value , value+wh); value+=wh;

    let l = (2 * wh) + dg_sol_high + a;
    rdo(2 , value , value+wh , l , l + b); value+=wh;

    rdo(3 , value , value + dg_sol_high); value += dg_sol_high;

    rdo(4 , value , value + a); value += a;

    let e = document.getElementById("rdo5");
    if(point >= value + a){
        e.style.backgroundColor=color1;
    }else{
        e.style.backgroundColor=color2;
    }
}

function setup_animate_rdo_lbls(){
    for(let i=1; i<=5; i++){
        let over_ele = document.querySelector("#rdo"+i+" > div");
        let lab_ele = document.querySelector("#rdo"+i+" > p");
        over_ele.onmouseover=function(){lab_ele.style.display="block";}
        over_ele.onmouseleave =function(){lab_ele.style.display="none";}
    }
}

function setup_animate_digSolutions(){
    let selecter="#gotoIconContainer > div";
    for(let i=1; i<=8; i++){
        let ele1 = document.querySelector(selecter);
        let ele2 = document.querySelector(selecter+">div");
        ele2.id="gic"+i;
        let p = document.querySelector("#gic"+i+">p+p");
        ele1.onmouseover=function(){
            ele1.style.backgroundColor="rgb(230, 230, 230)";
            ele1.style.cursor="pointer";
            ele2.style.marginTop="-30px";
            p.style.opacity=1;
        }
        ele1.onmouseleave=function(){
            ele1.style.backgroundColor="unset";
            ele1.style.cursor="default";
            ele2.style.marginTop="0px";
            p.style.opacity=0;
        }
        selecter += "+div";
    }
}

function calculateResponsive(){
    let w = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
    let h = window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;
    let txt = document.querySelector('.home > div + p');
    let brElement = document.getElementById("new_line");
    let ratio = w/h;
    if(ratio<=1.3){
        brElement.style.display="inline-block";
        txt.style.fontSize="10vw";
    }else{
        brElement.style.display="none";
        txt.style.fontSize="6.8vw";
    }
    
    let txt1 = document.getElementById("learn_about");//calculating font size of learn_about element!
    let txt1_a = document.querySelector('#con_2 > a');//calculating font size of "#con_2 > a" element!
    let txt1_b = document.querySelector('#china_dig_srv > a');//calculating font size of "#china_dig_srv > a" element!
    let x = w-250;
    let y = h-421;
    let f_ratio1= 5*(x/1000);
    let f1 = f_ratio1+8;
    txt1.style.fontSize=f1+"px";
    txt1_a.style.fontSize=f1+"px";
    txt1_b.style.fontSize=f1+"px";

    let txt2 = document.querySelector('#about_us_text > p');//calculating font size of "#about_us_text > p" element!
    let txt2_a = document.querySelector('#dig_sol_text > p');//calculating font size of "#dig_sol_text > p" element!
    let txt2_b = document.querySelector('#china_dig_srv > div > p+p');//calculating font size of "#china_dig_srv > div > p+p" element!
    let txt2_c = document.querySelector('#about_us_2 > div p+p');//calculating font size of "#about_us_2 > div p+p" element!
    let f_ratio2 = 7*(x/1000);
    let f2 = f_ratio2+11;
    txt2.style.fontSize=f2+"px";
    txt2_a.style.fontSize=f2+"px";
    txt2_b.style.fontSize=f2+"px";
    txt2_c.style.fontSize=f2+"px";

    let txt3 = document.querySelector('#con_2 > p');//calculating font size of "#con_2 > p" element!
    let f_ratio3=5*(x/1000);
    let f3 = f_ratio3+15;
    txt3.style.fontSize=f3+"px";

    let txt4 = document.querySelector('.goto > p');//calculating font size of ".goto > p" element!
    let f_ratio5= 3*(y/236);
    let f5 = f_ratio5+9;
    txt4.style.fontSize=f5+"px";
}

function show_links_box(){
    let wh = window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;
    let point = window.pageYOffset||document.documentElement.scrollTop;
    let linksBox = document.getElementById("con_1");
    let y=0;
    for(let i=1; i<=2; i++){
        let emptyBox = document.getElementById("box"+i+"");
        if(point >= y && point < wh*i && emptyBox.offsetHeight <= 0){
            if(emptyBox != undefined){
                emptyBox.appendChild(linksBox);
                if(i==1){
                    emptyBox.style.backgroundColor="none";
                    document.getElementById("logo").style.filter="invert(0)";
                    document.getElementById("menu").style.filter="invert(1)";
                    for(let j=1; j<=3; j++){
                        let lnk = document.getElementById("lk"+j+"");
                        lnk.style.color="white";
                        lnk.onmouseover=function(){lnk.style.color="lightseagreen";}
                        lnk.onmouseleave=function(){lnk.style.color="white";}
                    }
                    let gbk = document.getElementById("goto_block");
                    gbk.style.color="white";
                    gbk.onmouseover=function(){gbk.style.color="lightseagreen";}
                    gbk.onmouseleave=function(){gbk.style.color="white";}
                    
                    for(let j=2; j<=5; j++){
                        let box = document.getElementById("box"+j+"");
                        if(box != undefined){
                            box.style.marginTop="0px";
                            box.style.transform="translateY(0px)";
                        }
                    }
                    document.getElementById("floatHomeIcon").style.animationName="animate_show_floatHomeIcon";
                    document.getElementById("floatHomeIcon").style.marginRight="-45px";
                }
                else{
                    emptyBox.style.backgroundColor="rgb(255, 255, 255, 0.8)";
                    document.getElementById("logo").style.filter="invert(1)";
                    document.getElementById("menu").style.filter="invert(0)";
                    for(let j=1; j<=3; j++){
                        let lnk =document.getElementById("lk"+j+"");
                        lnk.style.color="black";
                        lnk.onmouseleave=function(){lnk.style.color="black";}
                    }
                    let gbk = document.getElementById("goto_block");
                    gbk.style.color="black";
                    gbk.onmouseleave=function(){gbk.style.color="black";}
                    
                    let box = document.getElementById("box"+i+"");
                    let boxH = box.offsetHeight;
                    box.style.marginTop=-boxH+"px";
                    box.style.transform="translateY("+boxH+"px)";
                }
                let emptyBoxHeight = emptyBox.offsetHeight;
                if(i==2){
                    document.getElementById("about_us_text").style.marginTop=emptyBoxHeight+"px";
                    document.getElementById("floatHomeIcon").style.animationName="animate_hide_floatHomeIcon";
                    document.getElementById("floatHomeIcon").style.marginRight="0px";
                }
            }
        }
        y += wh;
    }
    let dg_sol_high = document.getElementById("dig_solution").offsetHeight;
    let bh = document.getElementById("box2").offsetHeight;
    if(point >= y && point < y + dg_sol_high){
        document.getElementById("dig_sol_text").style.marginTop=bh+5+"px";
    }
}

window.onload = function(){
    set_rdos();
    calculateResponsive();
    setup_animate_rdo_lbls();
    show_links_box();
    setup_animate_digSolutions();
}
window.onscroll = function() {
    set_rdos();
    show_links_box();
    }
window.onresize=function(){calculateResponsive();}