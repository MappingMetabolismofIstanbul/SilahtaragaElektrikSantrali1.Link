var config = {
    // style: 'mapbox://styles/mapbox/streets-v12',
    // leave commented to use Mapbox Standard Style
    style: 'mapbox://styles/dogatmn/cm4v9fem6000p01sf12f769y5',
    accessToken: 'pk.eyJ1IjoiZG9nYXRtbiIsImEiOiJjbHlyMTJmcXgwMjQ3MmtzbTRsdm1pejdsIn0.vcEjL7lt8OoOPMP5o1PM6g',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Silahtarağa Elektrik Santrali / Silahtarağa Power Plant',
    subtitle: '',
    byline: 'BAP_Mapping Metabolism of Istanbul_Interactive Mapping / MEF AAP_027',
    footer: 'BAP_Mapping Metabolism of Istanbul_Interactive Mapping / MEF AAP_027',
    chapters: [
        {
            id: 'First',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/84DwRhqJ/MEF-AAP-027-BAP-2025-06-23-18-13-27.png',
            description: '',
            location: {
                center: [28.946, 41.067],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/ZRmrNB2R/MEF-AAP-027-BAP-2025-06-15-18-36-27.png',
            description: ' ',
            location: {
                center: [28.946, 41.067],
                zoom: 12,
                pitch: 0,
                bearing: 0
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/tMZMvvBW/MEF-AAP-027-BAP-2025-06-08-19-30-12.png',
            description: '',
            location: {
                center: [28.946, 41.067],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
          },
        {
            id: 'fourth',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/KpKRTmnm/tu-la-fabrikas-harita-kesikli-izgi.jpg',
            description: '',
            location: {
                center: [28.946, 41.067],
                zoom: 16,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
             },
        {
            id: 'fifth',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/Wv130frx/MEF-AAP-027-BAP-2025-06-15-18-37-20.png',
            description: '',
            location: {
                center: [28.946, 41.067],
                zoom: 18,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
             }
        
    ]
};
