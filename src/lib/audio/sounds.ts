// Tactile sound system for UI interactions
export class SoundManager {
  private static instance: SoundManager;
  private audioContext: AudioContext | null = null;
  private isEnabled = true;

  private constructor() {
    // Initialize audio context on first user interaction
    if (typeof window !== 'undefined') {
      this.initAudioContext();
    }
  }

  public static getInstance(): SoundManager {
    if (!SoundManager.instance) {
      SoundManager.instance = new SoundManager();
    }
    return SoundManager.instance;
  }

  private initAudioContext() {
    try {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    } catch (e) {
      console.warn('Web Audio API not supported');
    }
  }

  public enable() {
    this.isEnabled = true;
  }

  public disable() {
    this.isEnabled = false;
  }

  public playSound(frequency: number, duration: number = 0.1, type: OscillatorType = 'sine', volume: number = 0.1) {
    if (!this.isEnabled || !this.audioContext) return;

    try {
      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(this.audioContext.destination);

      oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
      oscillator.type = type;

      gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(volume, this.audioContext.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + duration);

      oscillator.start(this.audioContext.currentTime);
      oscillator.stop(this.audioContext.currentTime + duration);
    } catch (e) {
      console.warn('Error playing sound:', e);
    }
  }

  // Predefined sound effects
  public playClick() {
    this.playSound(800, 0.1, 'square', 0.15);
  }

  public playHover() {
    this.playSound(600, 0.05, 'sine', 0.08);
  }

  public playSuccess() {
    this.playSound(1000, 0.2, 'sine', 0.12);
    setTimeout(() => this.playSound(1200, 0.2, 'sine', 0.12), 100);
  }

  public playError() {
    this.playSound(300, 0.3, 'sawtooth', 0.15);
  }

  public playBounce() {
    this.playSound(400, 0.15, 'triangle', 0.1);
  }

  public playPop() {
    this.playSound(500, 0.08, 'square', 0.12);
  }

  public playSwoosh() {
    this.playSound(200, 0.2, 'sine', 0.08);
  }
}

// Export singleton instance
export const soundManager = SoundManager.getInstance();

// React hook for easy sound integration
export const useSounds = () => {
  return {
    playClick: () => soundManager.playClick(),
    playHover: () => soundManager.playHover(),
    playSuccess: () => soundManager.playSuccess(),
    playError: () => soundManager.playError(),
    playBounce: () => soundManager.playBounce(),
    playPop: () => soundManager.playPop(),
    playSwoosh: () => soundManager.playSwoosh(),
    enable: () => soundManager.enable(),
    disable: () => soundManager.disable(),
  };
};
