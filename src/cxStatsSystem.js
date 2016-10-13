'use strict';

let cxVoidSystem = require('complex-engine').cxVoidSystem;
let Stats = require('stats.js');

class cxStatsSystem extends cxVoidSystem{

    /**
     * @param {Integer} mode 0: fps, 1: ms, 2: mb
     */
    constructor( mode )
    {
        super();
        mode = mode || 0;
        this.tag = "cx.stats.system";
        this.stats = new Stats();
        this.stats.setMode( mode  );

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

module.exports = cxStatsSystem;
