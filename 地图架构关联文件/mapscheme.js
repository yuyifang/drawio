


	{
		layers:{
			baseLayers:[{  //基础图层
				id:1,
				name:"影像地图",
				type:"wmts",//wms、wmts、.....
				url:"http://127.0.0.1:8080/geoserver/cbim/wmts",
				layername:"cim_img",
				sld:null
			},{
				id:2,
				name:"行政区划边界",
				type:"wms",//wms、wmts、.....				
				url:"http://127.0.0.1:8080/geoserver/cbim/wms",
				layername:"cim_division",
				sld:"http://127.0.0.1:8080/sld/pb2.sld"
			},....],
			bussinessLayers:[{  //业务图层
				id:3,
				name:"道路",
				type:"wms",//wms、wmts、.....
				filters:{type:"pm25"}, // 数据过滤参数
				url:"http://127.0.0.1:8080/geoserver/cbim/wms",
				layername:"cim_road",
				sld:"http://127.0.0.1:8080/sld/pb.sld"
			},{
				id:4,
				name:"水系",
				type:"wms",//wms、wmts、.....
				url:"http://127.0.0.1:8080/geoserver/cbim/wms",
				layername:"cim_water",
				sld:"http://127.0.0.1:8080/sld/pb.sld"
			},....]
		}
		thirdService:[{   //第三方业务数据
			id:5，
			name:"PM2.5",
			url:"http://ip:port/thirdapp/getPM25",
			method:"post",
			interval:30,  //刷新间隔
			style:"pm25_style"
		},...],
		tools:[],
	}
	
	
	
	