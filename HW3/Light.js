class Light{
	constructor(){
		//燈線
		this.tipe = new THREE.Group();
		
		this.tipe1 = new THREE.Mesh(new THREE.RingGeometry(615, 620, 4, 6, Math.PI/4), new THREE.MeshLambertMaterial({color : 0x888888, side : THREE.DoubleSide}));
		this.tipe1.position.y = 145;
		this.tipe1.rotation.x = Math.PI/2;
		
		this.tipe2 = new THREE.Mesh(new THREE.PlaneGeometry(5, 600), new THREE.MeshLambertMaterial({color : 0x888888, side : THREE.DoubleSide}));
		this.tipe2.position.set(-341.5, 145, -180);
		this.tipe2.rotation.x = Math.PI/2;
		
		this.tipe3 = new THREE.Mesh(new THREE.PlaneGeometry(5, 500), new THREE.MeshLambertMaterial({color : 0x888888, side : THREE.DoubleSide}));
		this.tipe3.position.set(-22, 145, -230);
		this.tipe3.rotation.x = Math.PI/2;
		
		this.tipe4 = this.tipe3.clone();
		this.tipe4.rotation.z = Math.PI/2;
		this.tipe4.position.set(230, 145, 22);
		
		this.tipe5 = new THREE.Mesh(new THREE.PlaneGeometry(5, 375), new THREE.MeshLambertMaterial({color : 0x888888, side : THREE.DoubleSide}));
		this.tipe5.position.set(107.5, 145, -290);
		this.tipe5.rotation.x = Math.PI/2;
		
		this.tipe6 = this.tipe5.clone();
		this.tipe6.rotation.z = Math.PI/2;
		this.tipe6.position.set(290, 145, -108);
		
		this.tipe7 = new THREE.Mesh(new THREE.PlaneGeometry(5, 680), new THREE.MeshLambertMaterial({color : 0x888888, side : THREE.DoubleSide}));
		this.tipe7.position.set(-221.5, 145, -140);
		this.tipe7.rotation.x = Math.PI/2;
		
		this.tipe8 = new THREE.Mesh(new THREE.PlaneGeometry(5, 260), new THREE.MeshLambertMaterial({color : 0x888888, side : THREE.DoubleSide}));
		this.tipe8.position.set(-355, 145, 170);
		this.tipe8.rotation.x = Math.PI/2;
		this.tipe8.rotation.z = Math.PI/2;
		
		this.tipe9 = new THREE.Mesh(new THREE.PlaneGeometry(5, 200), new THREE.MeshLambertMaterial({color : 0x888888, side : THREE.DoubleSide}));
		this.tipe9.position.set(-120, 145, 160);
		this.tipe9.rotation.x = Math.PI/2;
		
		this.tipe10 = new THREE.Mesh(new THREE.PlaneGeometry(5, 200), new THREE.MeshLambertMaterial({color : 0x888888, side : THREE.DoubleSide}));
		this.tipe10.position.set(120, 145, 160);
		this.tipe10.rotation.x = Math.PI/2;
		
		this.tipe11 = new THREE.Mesh(new THREE.PlaneGeometry(5, 240), new THREE.MeshLambertMaterial({color : 0x888888, side : THREE.DoubleSide}));
		this.tipe11.position.set(0, 145, 257.5);
		this.tipe11.rotation.x = Math.PI/2;
		this.tipe11.rotation.z = Math.PI/2;
		
		this.tipe12 = new THREE.Mesh(new THREE.PlaneGeometry(5, 530), new THREE.MeshLambertMaterial({color : 0x888888, side : THREE.DoubleSide}));
		this.tipe12.position.set(220, 145, 230);
		this.tipe12.rotation.x = Math.PI/2;
		
		this.tipe.add(this.tipe1, this.tipe2, this.tipe3, this.tipe4, this.tipe5
		, this.tipe6, this.tipe7, this.tipe8, this.tipe9, this.tipe10, this.tipe11, this.tipe12);
		
		
	}
	
	
}

function makelight(x, z, tx, tz){
									//color 颜色, intensity 强度, distance 距离, angle 散射角, penumbra 衰减百分比, decay 衰减
		const spotLight = new THREE.SpotLight(  0xffffff, 10, 150, 0.3, 0.25, 2);
		spotLight.position.set( x, 145, z );
		spotLight.castShadow = true; // 光源產生陰影
		
		const pointlight = new THREE.PointLight(0xFEF4B5, 0.1);
		pointlight.position.set(x, 145, z);
	
		let target = new THREE.Object3D();
		spotLight.target.position.set(tx, 80, tz);
		scene.add(spotLight, spotLight.target, pointlight);
		
		const spotLightHelper = new THREE.SpotLightHelper( spotLight );
		
		//scene.add( spotLightHelper);
}
