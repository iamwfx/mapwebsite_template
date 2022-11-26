// zoomed in line
// zoomed out fill with 1 opacity
// add in hover box
// slider for hover




// Adding Sources
function load_layers() {
    // Results
    // blkgrp_exp
    map.addLayer({
        id:'blkgrp_exp_results_1',
        type:'fill',
        source:{
            'type':'vector',
            'url':'mapbox://iamwfx.results1_0'
        },
        'source-layer': 'data',
        'paint': {
            'fill-color': [
                "step",
                ["get", "blkgrp_exp"],
                "#fcfdbf",
                0.14,
                "#fe9f6d",
                0.27,
                "#de4968",
                0.41,
                "#8c2981",
                0.54,
                "#3b0f70",
                0.68,
                "#000004"
              ]
        },
        'layout': {
            'visibility': 'none',
        }
    })


}