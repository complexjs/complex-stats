'use strict';

class cxStatsSystem extends cxVoidSystem{
    constructor()
    {
        super();
        this.tag = "cx.stats.system";
        this.stats = new Stats();
        this.stats.setMode( 1 ); // 0: fps, 1: ms, 2: mb

        this.stats.domElement.style.position = 'absolute';
        this.stats.domElement.style.left = '0px';
        this.stats.domElement.style.top = '0px';
        document.body.appendChild( this.stats.domElement );
        this.stats.begin();
    }

    update ()
    {
        this.stats.end();
        this.stats.begin();
    }
}
