import * as system from './system';

function main() {
  system.scene.onLoad.add(() => {

    // 地面生成
    system.scene.append(system.ground);

    // 虫生成
    for (let colorIdx = 0; colorIdx < 4; colorIdx++) {
      for (let sizeIdx = 0; sizeIdx < 2; sizeIdx++) {
        for (let hornSizeIdx = 0; hornSizeIdx < 2; hornSizeIdx++) {
          system.createInsect(system.scene, colorIdx, sizeIdx, hornSizeIdx);
        }
      }
    }

    // 草生成
    for (let i = 0; i < 7; i++) {
      system.createGrass();
    }

    // ステータス表示
    const textWindow = system.statusDisplay();

    // クリア判定
    textWindow.onUpdate.add(() => {
      system.clearStage();
    });

  });

  g.game.pushScene(system.scene);

};

export = main;