const scene = new g.Scene({ game: g.game });

let count = 4;

const font = new g.DynamicFont({
  game: g.game,
  fontFamily: "sans-serif",
  size: 30
});

const counter = new g.Label({
  scene: scene,
  font: font,
  text: "Target remaining : " + count,
  fontSize: 30,
  textColor: "white",
  x: 15,
  y: 70,
  anchorY: 0.5,
});

function main() {
  scene.onLoad.add(() => {
    const ground = new g.FilledRect({
      scene: scene,
      width: g.game.width,
      height: g.game.height,
      cssColor: "wheat"
    })

    scene.append(ground);

    let target = Math.floor(g.game.random.generate() * 4);
    let targetColor;

    if(target == 0){
      targetColor = "blue";
    } else if(target == 1){
      targetColor = "yellow"
    } else if(target == 2){
      targetColor = "red"
    } else if(target == 3){
      targetColor = "glay"
    }

    let insects = [];

    for(let colorIdx = 0; colorIdx < 4; colorIdx++){
      for(let sizeIdx = 0; sizeIdx < 2; sizeIdx++){
        for(let hornSizeIdx = 0; hornSizeIdx < 2; hornSizeIdx++){
          const insect = createInsect(scene, colorIdx, sizeIdx, hornSizeIdx, target);
          insects.push(insect);
          scene.append(insect);
        } 
      }
    }

    for(let i = 0; i < 7; i++){
      const grass= createGrass(scene);
      scene.append(grass);
    }

    const back = new g.FilledRect({
      scene: scene,
      cssColor: "black",
      width: 450,
      height: 100,
      x: 10,
      y: 15,
    });

    const mission = new g.Label({
      scene: scene,
      font: font,
      text: "Catch all the " + targetColor + " insects!!",
      fontSize: 30,
      textColor: "white",
      x: 15,
      y: 20,
      anchorY: 0.3,
    });

    scene.append(back);
    back.append(mission);
    back.append(counter);

    back.onUpdate.add(() => {
      if(count == 0){
        back.destroy();
        clearStaging();
      }
    });
    
  });
  g.game.pushScene(scene);

};

function createGrass(scene){
  const grassX = Math.floor(g.game.random.generate() * g.game.width);
  const grassY = Math.floor(g.game.random.generate() * g.game.height);

  const grassFrame = new g.E({ scene: scene});

  const partA = new g.FilledRect({
    scene: scene,
    x:grassX,
    y:grassY,
    width: 180,
    height: 90,
    cssColor: "green",
    parent: grassFrame,
    anchorX: 0.5,
    anchorY: 0.5,
  })

  const partB = new g.FilledRect({
    scene: scene,
    x:grassX,
    y:grassY,
    width: 90,
    height: 180,
    cssColor: "green",
    parent: grassFrame,
    anchorX: 0.5,
    anchorY: 0.5,
  })

  return grassFrame;
}

function createInsect(scene, colorIdx, sizeIdx, hornSizeIdx, target) {
  const direction = [0, 90, 180, 270];
  const directionIdx = Math.floor(g.game.random.generate() * direction.length);
  const leg1X = Math.floor(g.game.random.generate() * g.game.width);
  const leg1Y = Math.floor(g.game.random.generate() * g.game.height);
  const size = [1, 1.3];
  const hornSize = [0, 20];
  let flg = false;
  let LorR;

  const leg1 = new g.FilledRect({
    scene: scene,
    x: g.game.width / 2,
    y: 80,
    width: 60,
    height: 5,
    cssColor: "black",
    anchorX: 0.5,
  })

  const leg2 = new g.FilledRect({
    scene: scene,
    x: 0,
    y: 13,
    width: 60,
    height: 5,
    cssColor: "black",
    parent: leg1,
  })

  const leg3 = new g.FilledRect({
    scene: scene,
    x: 0,
    y: 26,
    width: 60,
    height: 5,
    cssColor: "black",
    parent: leg1,
  })

  const colors = ["darkcyan", "orange", "crimson", "darkslategray"];

  const body = new g.FilledRect({
    scene: scene,
    x: 10,
    y: -30,
    width: 40,
    height: 70,
    cssColor: colors[colorIdx],
    parent: leg1,
  })

  const segment = new g.FilledRect({
    scene: scene,
    x: 10,
    y: -10,
    width: 40,
    height: 5,
    cssColor: "maroon",
    parent: leg1,
  })

  const leftHorn = new g.FilledRect({
    scene: scene,
    x: 10,
    y: -50,
    width: 9,
    height: hornSize[hornSizeIdx],
    cssColor: "black",
    parent: leg1,
  })

  const rightHorn = new g.FilledRect({
    scene: scene,
    x: 41,
    y: -50,
    width: 9,
    height: hornSize[hornSizeIdx],
    cssColor: "black",
    parent: leg1,
  })

  leg1.angle = direction[directionIdx];
  leg1.x = leg1X;
  leg1.y = leg1Y;
  leg1.scaleX = size[sizeIdx];
  leg1.scaleY = size[sizeIdx];

  leg1.onUpdate.add(() => {
    [flg, LorR] = moveInsect(leg1, flg, LorR);
  });

  body.touchable = true;

  if(colorIdx == target){
    body.onPointDown.add(() => {
      count--;
      counter.text = "Target remaining : " + count;
      counter.invalidate();
      leg1.destroy();
    });
  } else if(colorIdx != target){
    body.onPointDown.add(() => {
      missIndicate(scene, leg1.x, leg1.y);
    });
  }

  return leg1;
}

function moveInsect(insect, flg, LorR){
  if(flg == false && insect.x > 0 && insect.x < g.game.width && insect.y > 0 && insect.y < g.game.height){
    let random = Math.floor(g.game.random.generate() * 100);

    if(random == 0){
      LorR = Math.floor(g.game.random.generate() * 2);
      flg = true;
    }
  }

  if(flg == true && LorR == 0){
    if(insect.angle == 0){
      insect.angle = 360;
    }
    insect.angle -= 2;
  } else if(flg == true && LorR == 1){
    insect.angle += 2;
  }



  if(insect.angle == 360){
    insect.angle = 0;
  }

  if(insect.angle == 0){
    insect.y -= 3;
    flg = false;
  }

  if(insect.angle == 90){
    insect.x += 3;
    flg = false;
  }

  if(insect.angle == 180){
    insect.y += 3;
    flg = false;
  }

  if(insect.angle == 270){
    insect.x -= 3;
    flg = false;
  }

  if(insect.x <= 0 || insect.x >= g.game.width || insect.y <= 0 || insect.y >= g.game.height){
    if(insect.angle == 0 || insect.angle == 90){
      insect.angle += 180;
    }else if(insect.angle == 180 || insect.angle == 270){
      insect.angle -= 180;
    }
  }

  insect.modified();

  return [flg, LorR];
}

function missIndicate(scene, x, y){
  const miss = new g.Label({
    scene: scene,
    font: font,
    text: "miss",
    fontSize: 30,
    textColor: "red",
    x: x,
    y: y,
  });

  scene.setTimeout(() => {
    miss.destroy();
  }, 1000);

  scene.append(miss);
}

function clearStaging(){
  const back = new g.FilledRect({
    scene: scene,
    cssColor: "black",
    width: 450,
    height: 100,
    x: g.game.width / 2,
    y: g.game.height / 2,
    anchorX: 0.5,
    anchorY: 0.5,
  });

  const clearMessage = new g.Label({
    scene: scene,
    font: font,
    text: "Complete!!!",
    fontSize: 50,
    textColor: "white",
    x: g.game.width / 2,
    y: g.game.height / 2,
    anchorX: 0.5,
    anchorY: 0.5,
  });

  scene.append(back);
  scene.append(clearMessage);
}

module.exports = main;