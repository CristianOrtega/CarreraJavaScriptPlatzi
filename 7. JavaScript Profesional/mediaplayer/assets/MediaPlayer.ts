class MediaPlayer {

  media: HTMLMediaElement;
  plugins: Array<any>;
  container: any;

  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this.initPlayer();
    this.initPlugins();
  }

  initPlayer() {
    this.container = document.createElement('div');
    this.container.style.position = 'relative';
    this.media.parentNode.insertBefore(this.container, this.media);
    this.container.appendChild(this.media);
  }
  
  private initPlugins(): void {
    this.plugins.forEach(plugin => {
      plugin.run(this);
    });
  }

  play(): void {
    this.media.play();
  }

  pause(): void {
    this.media.pause();
  }

  togglePlay(): void {
    if (this.media.paused) {
      this.play();
    } else {
      this.pause();
    }
  }

  mute(): void {
    this.media.muted = true;
  }

  unmute(): void {
    this.media.muted = false;
  }
}







export default MediaPlayer;