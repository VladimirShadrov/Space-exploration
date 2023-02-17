import { Preview } from './preview';
import { TematicBlock } from './tematicBlock';

export class MainPage {
  /**
   * @description Объект с настройками для компонентов Preview и Categories
   * @param {Object} settings
   */
  constructor(settings) {
    this.page = document.createDocumentFragment();
    this.preview = new Preview(settings.previewSettings);
    this.tematicBlocks = [];

    this.page.appendChild(this.preview.element);
    this.addTematicBlocks(settings);
  }

  addTematicBlocks(settings) {
    settings.tematicBlock.forEach((blockSettings) => {
      const tematicBlock = new TematicBlock(blockSettings);
      this.tematicBlocks.push(tematicBlock);
      this.page.appendChild(tematicBlock.element);
    });
  }

  destroy() {
    this.preview.destroy();
    this.tematicBlocks.forEach((block) => block.destroy());
  }

  get element() {
    return this.page;
  }
}
