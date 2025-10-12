// Simple tactile sound system for UI interactions
class SoundManager {
  private audioContext: AudioContext | null = null;
  private isEnabled = true;

  constructor() {
    if (typeof window !== 'undefined') {
      this.initAudioContext();
    }
  }

  private initAudioContext() {
    try {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    } catch (e) {
      console.warn('Web Audio API not supported');
    }
  }

  private async ensureReady() {
    if (!this.audioContext) return false;
    
    if (this.audioContext.state === 'suspended') {
      try {
        await this.audioContext.resume();
      } catch (e) {
        return false;
      }
    }
    return true;
  }

  private async playSound(frequency: number, duration: number = 0.1, type: OscillatorType = 'sine', volume: number = 0.1) {
    if (!this.isEnabled || !(await this.ensureReady())) return;

    try {
      const oscillator = this.audioContext!.createOscillator();
      const gainNode = this.audioContext!.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(this.audioContext!.destination);

      oscillator.frequency.setValueAtTime(frequency, this.audioContext!.currentTime);
      oscillator.type = type;

      gainNode.gain.setValueAtTime(0, this.audioContext!.currentTime);
      gainNode.gain.linearRampToValueAtTime(volume, this.audioContext!.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext!.currentTime + duration);

      oscillator.start(this.audioContext!.currentTime);
      oscillator.stop(this.audioContext!.currentTime + duration);
    } catch (e) {
      // Silently fail - sounds are optional
    }
  }

  // Sound effects
  playClick = () => this.playSound(800, 0.1, 'square', 0.15);
  playHover = () => this.playSound(600, 0.05, 'sine', 0.08);
  playSuccess = () => this.playSound(1000, 0.2, 'sine', 0.12);
  playError = () => this.playSound(300, 0.3, 'sawtooth', 0.15);
  playBounce = () => this.playSound(400, 0.15, 'triangle', 0.1);
  playPop = () => this.playSound(500, 0.08, 'square', 0.12);
  playSwoosh = () => this.playSound(200, 0.2, 'sine', 0.08);
}

// Export singleton instance
export const soundManager = new SoundManager();

// React hook for easy sound integration
export const useSounds = () => soundManager;

