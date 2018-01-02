function init() 
{
var lat=29.9657;
var long=76.8370;
        
var myCenter=new google.maps.LatLng(lat,long);
var mapProp = 
      { center:myCenter,
        zoom:8,
        mapTypeId:google.maps.MapTypeId.TERRAINN
       };
  
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

var latList=[28.6139,29.3900,29.6900,29.9657,30.3667,30.8833];
var longList=[77.2090,77.2090,76.9800,76.8370,76.2333,75.8500];
var myCenters=[];
    var i;


function setmarker(i)
    {   
        myCenters[i]=new google.maps.LatLng(latList[i],longList[i]);
        var marker=new  google.maps.Marker({position:myCenters[i]});
marker.setMap(map);
        
        google.maps.event.addListener(marker,'click',function() {
  map.setZoom(10);
  map.setCenter(marker.getPosition());
  });

    }
    
    for(i=0;i<5;i++)
    {
        setmarker(i);
    }


}
