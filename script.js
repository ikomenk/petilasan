(function(){
    var script = {
 "definitions": [{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_57215FB5_5C1E_98EE_41CF_68522AECE1E4_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -119.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_491F093A_5D20_A2A0_41C5_F5993017229A",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": -38.2,
   "yaw": 60.29,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_57215237_5C1E_ABEA_41C7_4F1CF6E881C1"
  },
  {
   "backwardYaw": 39.69,
   "yaw": -59.04,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5019284E_5C1E_E7BA_41CF_1CB433DE0589"
  }
 ],
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5721BD09_5C1E_79A6_41D5_8061619BA8EB_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_5721BD09_5C1E_79A6_41D5_8061619BA8EB_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_5721BD09_5C1E_79A6_41D5_8061619BA8EB_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5721BD09_5C1E_79A6_41D5_8061619BA8EB_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5721BD09_5C1E_79A6_41D5_8061619BA8EB_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5721BD09_5C1E_79A6_41D5_8061619BA8EB_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_5721BD09_5C1E_79A6_41D5_8061619BA8EB_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_5721BD09_5C1E_79A6_41D5_8061619BA8EB_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5721BD09_5C1E_79A6_41D5_8061619BA8EB_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5721BD09_5C1E_79A6_41D5_8061619BA8EB_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5721BD09_5C1E_79A6_41D5_8061619BA8EB_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_5721BD09_5C1E_79A6_41D5_8061619BA8EB_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_5721BD09_5C1E_79A6_41D5_8061619BA8EB_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5721BD09_5C1E_79A6_41D5_8061619BA8EB_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5721BD09_5C1E_79A6_41D5_8061619BA8EB_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5721BD09_5C1E_79A6_41D5_8061619BA8EB_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_5721BD09_5C1E_79A6_41D5_8061619BA8EB_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_5721BD09_5C1E_79A6_41D5_8061619BA8EB_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5721BD09_5C1E_79A6_41D5_8061619BA8EB_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5721BD09_5C1E_79A6_41D5_8061619BA8EB_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5721BD09_5C1E_79A6_41D5_8061619BA8EB_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_5721BD09_5C1E_79A6_41D5_8061619BA8EB_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_5721BD09_5C1E_79A6_41D5_8061619BA8EB_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5721BD09_5C1E_79A6_41D5_8061619BA8EB_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5721BD09_5C1E_79A6_41D5_8061619BA8EB_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5721BD09_5C1E_79A6_41D5_8061619BA8EB_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_5721BD09_5C1E_79A6_41D5_8061619BA8EB_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_5721BD09_5C1E_79A6_41D5_8061619BA8EB_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5721BD09_5C1E_79A6_41D5_8061619BA8EB_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5721BD09_5C1E_79A6_41D5_8061619BA8EB_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5721BD09_5C1E_79A6_41D5_8061619BA8EB_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "5",
 "id": "panorama_5721BD09_5C1E_79A6_41D5_8061619BA8EB",
 "thumbnailUrl": "media/panorama_5721BD09_5C1E_79A6_41D5_8061619BA8EB_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "overlays": [
  "this.overlay_4C39C525_5D23_A2A0_41BE_33A81D8E5152",
  "this.overlay_4C78DB9B_5D23_A660_41A0_C8F1FD7BC00D"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -140.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_49278906_5D20_A260_41CD_C1235B6E4079",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 143.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_497E295E_5D20_A2E0_41BA_A46FED6B56AA",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5019284E_5C1E_E7BA_41CF_1CB433DE0589_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "items": [
  {
   "media": "this.panorama_5019284E_5C1E_E7BA_41CF_1CB433DE0589",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "camera": "this.panorama_5019284E_5C1E_E7BA_41CF_1CB433DE0589_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_572C0545_5C1E_A9AE_41D4_DA76D271707B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "camera": "this.panorama_572C0545_5C1E_A9AE_41D4_DA76D271707B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_57215237_5C1E_ABEA_41C7_4F1CF6E881C1",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "camera": "this.panorama_57215237_5C1E_ABEA_41C7_4F1CF6E881C1_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_57215FB5_5C1E_98EE_41CF_68522AECE1E4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "camera": "this.panorama_57215FB5_5C1E_98EE_41CF_68522AECE1E4_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5721BD09_5C1E_79A6_41D5_8061619BA8EB",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 0)",
   "camera": "this.panorama_5721BD09_5C1E_79A6_41D5_8061619BA8EB_camera",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 1.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4909E92A_5D20_A2A0_41CB_0B24FA5312C2",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": 2.51,
   "yaw": -178.37,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_57215237_5C1E_ABEA_41C7_4F1CF6E881C1"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5019284E_5C1E_E7BA_41CF_1CB433DE0589"
  }
 ],
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_572C0545_5C1E_A9AE_41D4_DA76D271707B_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_572C0545_5C1E_A9AE_41D4_DA76D271707B_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_572C0545_5C1E_A9AE_41D4_DA76D271707B_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_572C0545_5C1E_A9AE_41D4_DA76D271707B_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_572C0545_5C1E_A9AE_41D4_DA76D271707B_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_572C0545_5C1E_A9AE_41D4_DA76D271707B_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_572C0545_5C1E_A9AE_41D4_DA76D271707B_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_572C0545_5C1E_A9AE_41D4_DA76D271707B_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_572C0545_5C1E_A9AE_41D4_DA76D271707B_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_572C0545_5C1E_A9AE_41D4_DA76D271707B_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_572C0545_5C1E_A9AE_41D4_DA76D271707B_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_572C0545_5C1E_A9AE_41D4_DA76D271707B_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_572C0545_5C1E_A9AE_41D4_DA76D271707B_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_572C0545_5C1E_A9AE_41D4_DA76D271707B_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_572C0545_5C1E_A9AE_41D4_DA76D271707B_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_572C0545_5C1E_A9AE_41D4_DA76D271707B_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_572C0545_5C1E_A9AE_41D4_DA76D271707B_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_572C0545_5C1E_A9AE_41D4_DA76D271707B_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_572C0545_5C1E_A9AE_41D4_DA76D271707B_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_572C0545_5C1E_A9AE_41D4_DA76D271707B_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_572C0545_5C1E_A9AE_41D4_DA76D271707B_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_572C0545_5C1E_A9AE_41D4_DA76D271707B_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_572C0545_5C1E_A9AE_41D4_DA76D271707B_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_572C0545_5C1E_A9AE_41D4_DA76D271707B_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_572C0545_5C1E_A9AE_41D4_DA76D271707B_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_572C0545_5C1E_A9AE_41D4_DA76D271707B_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_572C0545_5C1E_A9AE_41D4_DA76D271707B_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_572C0545_5C1E_A9AE_41D4_DA76D271707B_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_572C0545_5C1E_A9AE_41D4_DA76D271707B_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_572C0545_5C1E_A9AE_41D4_DA76D271707B_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_572C0545_5C1E_A9AE_41D4_DA76D271707B_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "2",
 "id": "panorama_572C0545_5C1E_A9AE_41D4_DA76D271707B",
 "thumbnailUrl": "media/panorama_572C0545_5C1E_A9AE_41D4_DA76D271707B_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "overlays": [
  "this.overlay_4D466685_5D21_EE60_41CA_FC38EF8A0070",
  "this.overlay_4DB1B6AD_5D20_EFA0_41C4_67831B8F12C0"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_49519992_5D20_A260_41C1_745F4D0583A2",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -137.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_496E994E_5D20_A2E0_41AA_0C13DACC3AC6",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 117.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_493A3916_5D20_A260_41C9_7C9BE1897CDD",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_572C0545_5C1E_A9AE_41D4_DA76D271707B_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": 58.28,
   "yaw": -36.93,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_57215FB5_5C1E_98EE_41CF_68522AECE1E4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_572C0545_5C1E_A9AE_41D4_DA76D271707B"
  },
  {
   "backwardYaw": -59.04,
   "yaw": 39.69,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5721BD09_5C1E_79A6_41D5_8061619BA8EB"
  }
 ],
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5019284E_5C1E_E7BA_41CF_1CB433DE0589_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_5019284E_5C1E_E7BA_41CF_1CB433DE0589_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_5019284E_5C1E_E7BA_41CF_1CB433DE0589_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5019284E_5C1E_E7BA_41CF_1CB433DE0589_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5019284E_5C1E_E7BA_41CF_1CB433DE0589_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5019284E_5C1E_E7BA_41CF_1CB433DE0589_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_5019284E_5C1E_E7BA_41CF_1CB433DE0589_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_5019284E_5C1E_E7BA_41CF_1CB433DE0589_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5019284E_5C1E_E7BA_41CF_1CB433DE0589_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5019284E_5C1E_E7BA_41CF_1CB433DE0589_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5019284E_5C1E_E7BA_41CF_1CB433DE0589_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_5019284E_5C1E_E7BA_41CF_1CB433DE0589_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_5019284E_5C1E_E7BA_41CF_1CB433DE0589_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5019284E_5C1E_E7BA_41CF_1CB433DE0589_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5019284E_5C1E_E7BA_41CF_1CB433DE0589_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5019284E_5C1E_E7BA_41CF_1CB433DE0589_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_5019284E_5C1E_E7BA_41CF_1CB433DE0589_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_5019284E_5C1E_E7BA_41CF_1CB433DE0589_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5019284E_5C1E_E7BA_41CF_1CB433DE0589_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5019284E_5C1E_E7BA_41CF_1CB433DE0589_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5019284E_5C1E_E7BA_41CF_1CB433DE0589_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_5019284E_5C1E_E7BA_41CF_1CB433DE0589_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_5019284E_5C1E_E7BA_41CF_1CB433DE0589_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5019284E_5C1E_E7BA_41CF_1CB433DE0589_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5019284E_5C1E_E7BA_41CF_1CB433DE0589_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5019284E_5C1E_E7BA_41CF_1CB433DE0589_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_5019284E_5C1E_E7BA_41CF_1CB433DE0589_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_5019284E_5C1E_E7BA_41CF_1CB433DE0589_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5019284E_5C1E_E7BA_41CF_1CB433DE0589_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5019284E_5C1E_E7BA_41CF_1CB433DE0589_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5019284E_5C1E_E7BA_41CF_1CB433DE0589_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "1",
 "id": "panorama_5019284E_5C1E_E7BA_41CF_1CB433DE0589",
 "thumbnailUrl": "media/panorama_5019284E_5C1E_E7BA_41CF_1CB433DE0589_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "overlays": [
  "this.overlay_530B0C65_5D20_A2A0_41D0_A508290A5840",
  "this.overlay_5212902F_5D20_62A0_41B9_EF5EE287DD24",
  "this.overlay_5259EC30_5D20_62A0_41B6_0E0E96FF2AD9"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 141.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_492E58F2_5D20_A3A0_41D5_ADE30EDBB985",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -121.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4943E982_5D20_A260_41D1_65E28E74DF93",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": -62.81,
   "yaw": 42.19,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_57215FB5_5C1E_98EE_41CF_68522AECE1E4"
  },
  {
   "backwardYaw": -178.37,
   "yaw": 2.51,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_572C0545_5C1E_A9AE_41D4_DA76D271707B"
  },
  {
   "backwardYaw": 60.29,
   "yaw": -38.2,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5721BD09_5C1E_79A6_41D5_8061619BA8EB"
  }
 ],
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_57215237_5C1E_ABEA_41C7_4F1CF6E881C1_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_57215237_5C1E_ABEA_41C7_4F1CF6E881C1_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_57215237_5C1E_ABEA_41C7_4F1CF6E881C1_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_57215237_5C1E_ABEA_41C7_4F1CF6E881C1_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_57215237_5C1E_ABEA_41C7_4F1CF6E881C1_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_57215237_5C1E_ABEA_41C7_4F1CF6E881C1_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_57215237_5C1E_ABEA_41C7_4F1CF6E881C1_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_57215237_5C1E_ABEA_41C7_4F1CF6E881C1_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_57215237_5C1E_ABEA_41C7_4F1CF6E881C1_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_57215237_5C1E_ABEA_41C7_4F1CF6E881C1_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_57215237_5C1E_ABEA_41C7_4F1CF6E881C1_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_57215237_5C1E_ABEA_41C7_4F1CF6E881C1_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_57215237_5C1E_ABEA_41C7_4F1CF6E881C1_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_57215237_5C1E_ABEA_41C7_4F1CF6E881C1_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_57215237_5C1E_ABEA_41C7_4F1CF6E881C1_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_57215237_5C1E_ABEA_41C7_4F1CF6E881C1_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_57215237_5C1E_ABEA_41C7_4F1CF6E881C1_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_57215237_5C1E_ABEA_41C7_4F1CF6E881C1_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_57215237_5C1E_ABEA_41C7_4F1CF6E881C1_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_57215237_5C1E_ABEA_41C7_4F1CF6E881C1_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_57215237_5C1E_ABEA_41C7_4F1CF6E881C1_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_57215237_5C1E_ABEA_41C7_4F1CF6E881C1_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_57215237_5C1E_ABEA_41C7_4F1CF6E881C1_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_57215237_5C1E_ABEA_41C7_4F1CF6E881C1_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_57215237_5C1E_ABEA_41C7_4F1CF6E881C1_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_57215237_5C1E_ABEA_41C7_4F1CF6E881C1_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_57215237_5C1E_ABEA_41C7_4F1CF6E881C1_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_57215237_5C1E_ABEA_41C7_4F1CF6E881C1_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_57215237_5C1E_ABEA_41C7_4F1CF6E881C1_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_57215237_5C1E_ABEA_41C7_4F1CF6E881C1_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_57215237_5C1E_ABEA_41C7_4F1CF6E881C1_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "3",
 "id": "panorama_57215237_5C1E_ABEA_41C7_4F1CF6E881C1",
 "thumbnailUrl": "media/panorama_57215237_5C1E_ABEA_41C7_4F1CF6E881C1_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "overlays": [
  "this.overlay_4DB551BA_5D20_A5A1_41D4_98B12B93CF0B",
  "this.overlay_4DC1F073_5D20_E2A0_41C5_498F1476EFE7",
  "this.overlay_4DD8129A_5D20_E661_41BC_0AD4EC9E67E3"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -177.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_494C396E_5D20_A2A0_41D6_3A968A6F36FE",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 120.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_49A129A3_5D20_A5A7_41B8_E7A8740E651C",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5721BD09_5C1E_79A6_41D5_8061619BA8EB_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "viewerArea": "this.MainViewer",
 "buttonCardboardView": [
  "this.IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA",
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB"
 ],
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "gyroscopeVerticalDraggingEnabled": true,
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "mouseControlMode": "drag_acceleration"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_57215237_5C1E_ABEA_41C7_4F1CF6E881C1_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": 42.19,
   "yaw": -62.81,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_57215237_5C1E_ABEA_41C7_4F1CF6E881C1"
  },
  {
   "backwardYaw": -36.93,
   "yaw": 58.28,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5019284E_5C1E_E7BA_41CF_1CB433DE0589"
  }
 ],
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_57215FB5_5C1E_98EE_41CF_68522AECE1E4_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_57215FB5_5C1E_98EE_41CF_68522AECE1E4_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_57215FB5_5C1E_98EE_41CF_68522AECE1E4_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_57215FB5_5C1E_98EE_41CF_68522AECE1E4_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_57215FB5_5C1E_98EE_41CF_68522AECE1E4_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_57215FB5_5C1E_98EE_41CF_68522AECE1E4_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_57215FB5_5C1E_98EE_41CF_68522AECE1E4_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_57215FB5_5C1E_98EE_41CF_68522AECE1E4_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_57215FB5_5C1E_98EE_41CF_68522AECE1E4_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_57215FB5_5C1E_98EE_41CF_68522AECE1E4_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_57215FB5_5C1E_98EE_41CF_68522AECE1E4_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_57215FB5_5C1E_98EE_41CF_68522AECE1E4_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_57215FB5_5C1E_98EE_41CF_68522AECE1E4_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_57215FB5_5C1E_98EE_41CF_68522AECE1E4_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_57215FB5_5C1E_98EE_41CF_68522AECE1E4_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_57215FB5_5C1E_98EE_41CF_68522AECE1E4_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_57215FB5_5C1E_98EE_41CF_68522AECE1E4_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_57215FB5_5C1E_98EE_41CF_68522AECE1E4_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_57215FB5_5C1E_98EE_41CF_68522AECE1E4_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_57215FB5_5C1E_98EE_41CF_68522AECE1E4_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_57215FB5_5C1E_98EE_41CF_68522AECE1E4_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_57215FB5_5C1E_98EE_41CF_68522AECE1E4_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_57215FB5_5C1E_98EE_41CF_68522AECE1E4_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_57215FB5_5C1E_98EE_41CF_68522AECE1E4_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_57215FB5_5C1E_98EE_41CF_68522AECE1E4_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_57215FB5_5C1E_98EE_41CF_68522AECE1E4_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_57215FB5_5C1E_98EE_41CF_68522AECE1E4_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_57215FB5_5C1E_98EE_41CF_68522AECE1E4_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_57215FB5_5C1E_98EE_41CF_68522AECE1E4_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_57215FB5_5C1E_98EE_41CF_68522AECE1E4_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_57215FB5_5C1E_98EE_41CF_68522AECE1E4_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "4",
 "id": "panorama_57215FB5_5C1E_98EE_41CF_68522AECE1E4",
 "thumbnailUrl": "media/panorama_57215FB5_5C1E_98EE_41CF_68522AECE1E4_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "overlays": [
  "this.overlay_4DDED9B6_5D20_A5A0_41D4_1CD9A6A5ACFB",
  "this.overlay_4C68762C_5D20_AEA0_41D1_B8E4FE0E6D02"
 ]
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#000000",
 "id": "MainViewer",
 "left": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "minHeight": 50,
 "width": "100%",
 "toolTipOpacity": 0.5,
 "shadow": false,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 13,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipPaddingBottom": 7,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "minWidth": 100,
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": 0,
 "paddingLeft": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 7,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "transitionDuration": 500,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "data": {
  "name": "--- MENU"
 },
 "children": [
  "this.Image_9511127C_9B79_D2C1_41D8_D080B87BFD84",
  "this.Container_9A7696F9_9256_4198_41E2_40E7CF09A427",
  "this.IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA"
 ],
 "layout": "absolute",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_32CC4EA6_16EF_8891_41B3_C36F5FCE49B7",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "borderSize": 0,
 "right": "0%",
 "backgroundImageUrl": "skin/Container_32CC4EA6_16EF_8891_41B3_C36F5FCE49B7.png",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "height": "12.832%",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "data": {
  "name": "-- SETTINGS"
 },
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "layout": "absolute",
 "width": 115.05,
 "scrollBarColor": "#000000",
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "borderSize": 0,
 "right": "0%",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "top": "0%",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "height": 641,
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "data": {
  "name": "--STICKER"
 },
 "children": [
  "this.Container_0A7329D7_16A2_88BF_418A_F3BE254A76EE",
  "this.Label_0A5C65D9_16A5_98B3_41B4_573FE3033A1F",
  "this.Label_0B130419_16A3_7FB3_41A4_E5F9FA0AC39B"
 ],
 "layout": "absolute",
 "left": 30,
 "width": 573,
 "scrollBarColor": "#000000",
 "id": "Container_0AEF1C12_16A3_8FB1_4188_D5C88CE581C3",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "borderSize": 0,
 "minWidth": 1,
 "top": 20,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "height": 116,
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "width": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "transparencyActive": true,
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 1,
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "maxHeight": 58,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 58,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton FULLSCREEN"
 }
},
{
 "width": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "transparencyActive": true,
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 1,
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "maxHeight": 58,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 58,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton MUTE"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5019284E_5C1E_E7BA_41CF_1CB433DE0589, this.camera_49278906_5D20_A260_41CD_C1235B6E4079); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.1,
   "image": "this.AnimatedImageResource_4E56784A_5D21_A2E0_41D2_3323FB53D72E",
   "pitch": -18.53,
   "yaw": -59.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4C39C525_5D23_A2A0_41BE_33A81D8E5152",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.1,
   "yaw": -59.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5721BD09_5C1E_79A6_41D5_8061619BA8EB_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.53
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_57215237_5C1E_ABEA_41C7_4F1CF6E881C1, this.camera_492E58F2_5D20_A3A0_41D5_ADE30EDBB985); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.16,
   "image": "this.AnimatedImageResource_4E57984A_5D21_A2E0_41D4_267311FE9117",
   "pitch": -17.77,
   "yaw": 60.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4C78DB9B_5D23_A660_41A0_C8F1FD7BC00D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.16,
   "yaw": 60.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5721BD09_5C1E_79A6_41D5_8061619BA8EB_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.77
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_57215237_5C1E_ABEA_41C7_4F1CF6E881C1, this.camera_494C396E_5D20_A2A0_41D6_3A968A6F36FE); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.96,
   "image": "this.AnimatedImageResource_4E486849_5D21_A2E0_41D4_B887DB3FAA8B",
   "pitch": -20.29,
   "yaw": -178.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4D466685_5D21_EE60_41CA_FC38EF8A0070",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.96,
   "yaw": -178.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_572C0545_5C1E_A9AE_41D4_DA76D271707B_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.29
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.9,
   "image": "this.AnimatedImageResource_4E498849_5D21_A2E0_41D0_1E93889E4F1B",
   "pitch": -21.04,
   "yaw": -1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4DB1B6AD_5D20_EFA0_41C4_67831B8F12C0",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.9,
   "yaw": -1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_572C0545_5C1E_A9AE_41D4_DA76D271707B_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.04
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.setCameraSameSpotAsMedia(this.camera_49519992_5D20_A260_41C1_745F4D0583A2, this.panorama_5019284E_5C1E_E7BA_41CF_1CB433DE0589); this.startPanoramaWithCamera(this.panorama_572C0545_5C1E_A9AE_41D4_DA76D271707B, this.camera_49519992_5D20_A260_41C1_745F4D0583A2); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.56,
   "image": "this.AnimatedImageResource_4E4AD848_5D21_A2E0_41BB_96CF83488C0D",
   "pitch": -10.99,
   "yaw": -0.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_530B0C65_5D20_A2A0_41D0_A508290A5840",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.56,
   "yaw": -0.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5019284E_5C1E_E7BA_41CF_1CB433DE0589_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.99
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_57215FB5_5C1E_98EE_41CF_68522AECE1E4, this.camera_4943E982_5D20_A260_41D1_65E28E74DF93); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.59,
   "image": "this.AnimatedImageResource_4E489848_5D21_A2E0_41D0_7F92E81666DF",
   "pitch": -10.49,
   "yaw": -36.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5212902F_5D20_62A0_41B9_EF5EE287DD24",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.59,
   "yaw": -36.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5019284E_5C1E_E7BA_41CF_1CB433DE0589_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.49
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5721BD09_5C1E_79A6_41D5_8061619BA8EB, this.camera_49A129A3_5D20_A5A7_41B8_E7A8740E651C); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.48,
   "image": "this.AnimatedImageResource_4E48D849_5D21_A2E0_41B3_842A2DF13581",
   "pitch": -12.75,
   "yaw": 39.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5259EC30_5D20_62A0_41B6_0E0E96FF2AD9",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.48,
   "yaw": 39.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5019284E_5C1E_E7BA_41CF_1CB433DE0589_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.75
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_572C0545_5C1E_A9AE_41D4_DA76D271707B, this.camera_4909E92A_5D20_A2A0_41CB_0B24FA5312C2); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.12,
   "image": "this.AnimatedImageResource_4E49D849_5D21_A2E0_41A1_C0C77584098D",
   "pitch": -18.28,
   "yaw": 2.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4DB551BA_5D20_A5A1_41D4_98B12B93CF0B",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.12,
   "yaw": 2.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_57215237_5C1E_ABEA_41C7_4F1CF6E881C1_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.28
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5721BD09_5C1E_79A6_41D5_8061619BA8EB, this.camera_491F093A_5D20_A2A0_41C5_F5993017229A); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.26,
   "image": "this.AnimatedImageResource_4E491849_5D21_A2E0_41D5_8F20744985C6",
   "pitch": -16.25,
   "yaw": -38.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4DC1F073_5D20_E2A0_41C5_498F1476EFE7",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.26,
   "yaw": -38.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_57215237_5C1E_ABEA_41C7_4F1CF6E881C1_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.25
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_57215FB5_5C1E_98EE_41CF_68522AECE1E4, this.camera_493A3916_5D20_A260_41C9_7C9BE1897CDD); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.23,
   "image": "this.AnimatedImageResource_4E56A849_5D21_A2E0_41D6_125F115E3940",
   "pitch": -16.76,
   "yaw": 42.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4DD8129A_5D20_E661_41BC_0AD4EC9E67E3",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.23,
   "yaw": 42.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_57215237_5C1E_ABEA_41C7_4F1CF6E881C1_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.76
  }
 ]
},
{
 "cursor": "hand",
 "id": "IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA",
 "width": 49,
 "transparencyActive": true,
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "right": 30,
 "minWidth": 1,
 "maxWidth": 49,
 "iconURL": "skin/IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA.png",
 "maxHeight": 37,
 "bottom": 8,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 37,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA_rollover.png",
 "propagateClick": false,
 "data": {
  "name": "IconButton VR"
 }
},
{
 "width": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "transparencyActive": true,
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 1,
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "maxHeight": 58,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 58,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "visible": false,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton VR"
 }
},
{
 "width": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "transparencyActive": true,
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 1,
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "maxHeight": 58,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 58,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton HS "
 }
},
{
 "width": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "transparencyActive": true,
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 1,
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "maxHeight": 58,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 58,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton GYRO"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_57215237_5C1E_ABEA_41C7_4F1CF6E881C1, this.camera_496E994E_5D20_A2E0_41AA_0C13DACC3AC6); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.16,
   "image": "this.AnimatedImageResource_4E56C849_5D21_A2E0_41C3_E737257C3DF8",
   "pitch": -17.77,
   "yaw": -62.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4DDED9B6_5D20_A5A0_41D4_1CD9A6A5ACFB",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.16,
   "yaw": -62.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_57215FB5_5C1E_98EE_41CF_68522AECE1E4_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.77
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5019284E_5C1E_E7BA_41CF_1CB433DE0589, this.camera_497E295E_5D20_A2E0_41BA_A46FED6B56AA); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.14,
   "image": "this.AnimatedImageResource_4E56084A_5D21_A2E0_4185_1D491D133C79",
   "pitch": -18.03,
   "yaw": 58.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4C68762C_5D20_AEA0_41D1_B8E4FE0E6D02",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.14,
   "yaw": 58.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_57215FB5_5C1E_98EE_41CF_68522AECE1E4_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.03
  }
 ]
},
{
 "id": "Image_9511127C_9B79_D2C1_41D8_D080B87BFD84",
 "left": "0%",
 "horizontalAlign": "center",
 "minHeight": 1,
 "shadow": false,
 "borderSize": 0,
 "right": "0%",
 "url": "skin/Image_9511127C_9B79_D2C1_41D8_D080B87BFD84.png",
 "minWidth": 1,
 "maxWidth": 3000,
 "maxHeight": 2,
 "bottom": 53,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 2,
 "paddingTop": 0,
 "class": "Image",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_outside",
 "propagateClick": false,
 "data": {
  "name": "white line"
 }
},
{
 "data": {
  "name": "-button set container"
 },
 "children": [
  "this.Button_03D37B27_0C7A_63B3_41A1_89572D8C8762",
  "this.Button_1FDDCF4A_0C0A_23FD_417A_1C14E098FDFD",
  "this.Button_1CA392FC_0C0A_2295_41A3_18DEA65FB6AD",
  "this.Button_1FE4B611_0C0A_256F_418E_EA27E66F8360",
  "this.Button_1EBF3282_0C0A_1D6D_4190_52FC7F8C00A5",
  "this.Button_33E0F47E_11C1_A20D_419F_BB809AD89259"
 ],
 "layout": "horizontal",
 "left": "0%",
 "width": 1199,
 "scrollBarColor": "#000000",
 "id": "Container_9A7696F9_9256_4198_41E2_40E7CF09A427",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 30,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "height": 51,
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 3,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "data": {
  "name": "button menu sup"
 },
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "layout": "horizontal",
 "width": 110,
 "scrollBarColor": "#000000",
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "borderSize": 0,
 "right": "0%",
 "minWidth": 1,
 "top": "0%",
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "height": 110,
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "data": {
  "name": "-button set"
 },
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "layout": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "right": "0%",
 "minWidth": 1,
 "width": "91.304%",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "height": "85.959%",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 3,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "data": {
  "name": "green block"
 },
 "layout": "absolute",
 "id": "Container_0A7329D7_16A2_88BF_418A_F3BE254A76EE",
 "left": 5,
 "width": 10,
 "scrollBarColor": "#000000",
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#B3D237"
 ],
 "paddingLeft": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "shadowBlurRadius": 10,
 "top": 20,
 "paddingRight": 0,
 "shadowSpread": 1,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "class": "Container",
 "height": 90,
 "gap": 10,
 "borderRadius": 0,
 "paddingBottom": 0,
 "shadowVerticalLength": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0
 ],
 "shadowHorizontalLength": 0
},
{
 "fontFamily": "Otama.ep",
 "data": {
  "name": "text 1"
 },
 "left": 28,
 "width": 404,
 "textShadowVerticalLength": 0,
 "id": "Label_0A5C65D9_16A5_98B3_41B4_573FE3033A1F",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "borderSize": 0,
 "textShadowColor": "#000000",
 "text": "PETILASAN",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "textShadowOpacity": 1,
 "top": 5,
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 78,
 "fontSize": 80,
 "paddingTop": 0,
 "class": "Label",
 "textShadowBlurRadius": 10,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "textDecoration": "none",
 "fontStyle": "normal",
 "propagateClick": false,
 "fontWeight": "bold",
 "textShadowHorizontalLength": 0
},
{
 "fontFamily": "Otama.ep",
 "data": {
  "name": "text 2"
 },
 "left": 28,
 "width": 287,
 "textShadowVerticalLength": 0,
 "id": "Label_0B130419_16A3_7FB3_41A4_E5F9FA0AC39B",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "borderSize": 0,
 "textShadowColor": "#000000",
 "text": "Jogja International Creative Arts Festival",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "textShadowOpacity": 1,
 "top": 82,
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 37,
 "fontSize": 30,
 "paddingTop": 0,
 "class": "Label",
 "textShadowBlurRadius": 10,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "textDecoration": "none",
 "fontStyle": "normal",
 "propagateClick": false,
 "fontWeight": "normal",
 "textShadowHorizontalLength": 0
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_5721BD09_5C1E_79A6_41D5_8061619BA8EB_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_4E56784A_5D21_A2E0_41D2_3323FB53D72E",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_5721BD09_5C1E_79A6_41D5_8061619BA8EB_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_4E57984A_5D21_A2E0_41D4_267311FE9117",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_572C0545_5C1E_A9AE_41D4_DA76D271707B_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_4E486849_5D21_A2E0_41D4_B887DB3FAA8B",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_572C0545_5C1E_A9AE_41D4_DA76D271707B_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_4E498849_5D21_A2E0_41D0_1E93889E4F1B",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_5019284E_5C1E_E7BA_41CF_1CB433DE0589_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_4E4AD848_5D21_A2E0_41BB_96CF83488C0D",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_5019284E_5C1E_E7BA_41CF_1CB433DE0589_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_4E489848_5D21_A2E0_41D0_7F92E81666DF",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_5019284E_5C1E_E7BA_41CF_1CB433DE0589_0_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_4E48D849_5D21_A2E0_41B3_842A2DF13581",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_57215237_5C1E_ABEA_41C7_4F1CF6E881C1_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_4E49D849_5D21_A2E0_41A1_C0C77584098D",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_57215237_5C1E_ABEA_41C7_4F1CF6E881C1_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_4E491849_5D21_A2E0_41D5_8F20744985C6",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_57215237_5C1E_ABEA_41C7_4F1CF6E881C1_0_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_4E56A849_5D21_A2E0_41D6_125F115E3940",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_57215FB5_5C1E_98EE_41CF_68522AECE1E4_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_4E56C849_5D21_A2E0_41C3_E737257C3DF8",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_57215FB5_5C1E_98EE_41CF_68522AECE1E4_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_4E56084A_5D21_A2E0_4185_1D491D133C79",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "fontFamily": "Montserrat",
 "backgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "pressedBackgroundColor": [
  "#BBD149"
 ],
 "width": 110,
 "data": {
  "name": "Button house info"
 },
 "id": "Button_03D37B27_0C7A_63B3_41A1_89572D8C8762",
 "fontSize": 12,
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#BBD149"
 ],
 "shadowColor": "#000000",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "height": 40,
 "label": "HOUSE INFO",
 "backgroundColor": [
  "#000000"
 ],
 "iconHeight": 0,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "borderRadius": 0,
 "gap": 5,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "iconBeforeLabel": true,
 "textDecoration": "none",
 "fontStyle": "normal",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": false,
 "fontWeight": "bold",
 "iconWidth": 0
},
{
 "fontFamily": "Montserrat",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "pressedBackgroundColor": [
  "#BBD149"
 ],
 "width": 130,
 "data": {
  "name": "Button panorama list"
 },
 "id": "Button_1FDDCF4A_0C0A_23FD_417A_1C14E098FDFD",
 "fontSize": 12,
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#BBD149"
 ],
 "shadowColor": "#000000",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "height": 40,
 "label": "PANORAMA LIST",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "iconBeforeLabel": true,
 "textDecoration": "none",
 "fontStyle": "normal",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": false,
 "fontWeight": "bold",
 "iconWidth": 32
},
{
 "fontFamily": "Montserrat",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "pressedBackgroundColor": [
  "#BBD149"
 ],
 "width": 90,
 "data": {
  "name": "Button location"
 },
 "id": "Button_1CA392FC_0C0A_2295_41A3_18DEA65FB6AD",
 "fontSize": 12,
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#BBD149"
 ],
 "shadowColor": "#000000",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "height": 40,
 "label": "LOCATION",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "iconBeforeLabel": true,
 "textDecoration": "none",
 "fontStyle": "normal",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": false,
 "fontWeight": "bold",
 "iconWidth": 32
},
{
 "fontFamily": "Montserrat",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "pressedBackgroundColor": [
  "#BBD149"
 ],
 "width": 103,
 "data": {
  "name": "Button floorplan"
 },
 "id": "Button_1FE4B611_0C0A_256F_418E_EA27E66F8360",
 "fontSize": 12,
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#BBD149"
 ],
 "shadowColor": "#000000",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "height": 40,
 "label": "FLOORPLAN",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "iconBeforeLabel": true,
 "textDecoration": "none",
 "fontStyle": "normal",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": false,
 "fontWeight": "bold",
 "iconWidth": 32
},
{
 "fontFamily": "Montserrat",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "pressedBackgroundColor": [
  "#BBD149"
 ],
 "width": 112,
 "data": {
  "name": "Button photoalbum"
 },
 "id": "Button_1EBF3282_0C0A_1D6D_4190_52FC7F8C00A5",
 "fontSize": 12,
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#BBD149"
 ],
 "shadowColor": "#000000",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "height": 40,
 "label": "PHOTOALBUM",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "iconBeforeLabel": true,
 "textDecoration": "none",
 "fontStyle": "normal",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": false,
 "fontWeight": "bold",
 "iconWidth": 32
},
{
 "fontFamily": "Montserrat",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "pressedBackgroundColor": [
  "#BBD149"
 ],
 "width": 90,
 "data": {
  "name": "Button contact"
 },
 "id": "Button_33E0F47E_11C1_A20D_419F_BB809AD89259",
 "fontSize": 12,
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#BBD149"
 ],
 "shadowColor": "#000000",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "height": 40,
 "label": "CONTACT",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "iconBeforeLabel": true,
 "textDecoration": "none",
 "fontStyle": "normal",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": false,
 "fontWeight": "bold",
 "iconWidth": 32
},
{
 "width": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "transparencyActive": true,
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 1,
 "maxWidth": 60,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "maxHeight": 60,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 60,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "image button menu"
 }
},
{
 "width": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "transparencyActive": true,
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 1,
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "maxHeight": 58,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 58,
 "click": "this.shareTwitter(window.location.href)",
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton TWITTER"
 }
},
{
 "width": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "transparencyActive": true,
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 1,
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "maxHeight": 58,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 58,
 "click": "this.shareFacebook(window.location.href)",
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton FB"
 }
}],
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "data": {
  "name": "Player468"
 },
 "children": [
  "this.MainViewer",
  "this.Container_32CC4EA6_16EF_8891_41B3_C36F5FCE49B7",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_0AEF1C12_16A3_8FB1_4188_D5C88CE581C3"
 ],
 "layout": "absolute",
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "horizontalAlign": "left",
 "shadow": false,
 "borderSize": 0,
 "backgroundPreloadEnabled": true,
 "minWidth": 20,
 "defaultVRPointer": "laser",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "unregisterKey": function(key){  delete window[key]; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "registerKey": function(key, value){  window[key] = value; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "existsKey": function(key){  return key in window; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getKey": function(key){  return window[key]; }
 },
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "downloadEnabled": false,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "height": "100%",
 "paddingTop": 0,
 "class": "Player",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "mouseWheelEnabled": true,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible",
 "desktopMipmappingEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
