# complex-statsystem
Is a stats-js module for complexjs

## Install
`npm install complex-stats --save`

## Usage
Instanciate the system and add it to your `cxWorld` instance

YourScene.js

    let cxStatSystem = require('complex-stats').cxStatsSystem;

    ...
    load() {
        this.world.addSystem( new cxStatSystem( 0 ) );
    ...
