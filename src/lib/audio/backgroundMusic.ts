import { useRef, useCallback, useEffect, useState } from 'react';

// Types for audio nodes
interface AudioNodes {
  oscillators: OscillatorNode[];
  gainNodes: GainNode[];
  filterNodes: BiquadFilterNode[];
}

// Custom hook for background music
export const useBackgroundMusic = () => {
  const audioContextRef = useRef<AudioContext | null>(null);
  const isPlayingRef = useRef(false);
  const loopTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const audioNodesRef = useRef<AudioNodes>({
    oscillators: [],
    gainNodes: [],
    filterNodes: []
  });
  const [isPlaying, setIsPlaying] = useState(true);

  // Initialize audio context
  const initAudioContext = useCallback(() => {
    if (typeof window === 'undefined') return;
    
    try {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      console.log('Audio context initialized');
    } catch (e) {
      console.warn('Web Audio API not supported:', e);
    }
  }, []);

  // Clean up audio nodes
  const cleanupAudioNodes = useCallback(() => {
    const nodes = audioNodesRef.current;
    
    // Stop all oscillators
    nodes.oscillators.forEach(osc => {
      try {
        osc.stop();
      } catch (e) {
        // Oscillator might already be stopped
      }
    });

    // Clear timeout for loop
    if (loopTimeoutRef.current) {
      clearTimeout(loopTimeoutRef.current);
      loopTimeoutRef.current = null;
    }

    // Clear arrays
    nodes.oscillators = [];
    nodes.gainNodes = [];
    nodes.filterNodes = [];
  }, []);

  // Create a simple ambient note
  const createAmbientNote = useCallback((
    frequency: number, 
    startTime: number, 
    duration: number
  ) => {
    if (!audioContextRef.current) return;

    const audioContext = audioContextRef.current;
    const nodes = audioNodesRef.current;

    // Create oscillator
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    const filterNode = audioContext.createBiquadFilter();

    // Configure oscillator
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(frequency, startTime);

    // Configure filter
    filterNode.type = 'lowpass';
    filterNode.frequency.setValueAtTime(800, startTime);

    // Configure gain with envelope - volume controlled by user's device
    const sustainLevel = 0.1; // Base level, user's device volume will control final output
    gainNode.gain.setValueAtTime(0, startTime);
    gainNode.gain.linearRampToValueAtTime(sustainLevel, startTime + 0.1);
    gainNode.gain.setValueAtTime(sustainLevel, startTime + duration - 0.5);
    gainNode.gain.linearRampToValueAtTime(0, startTime + duration);

    // Connect nodes
    oscillator.connect(filterNode);
    filterNode.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // Start oscillator
    oscillator.start(startTime);
    oscillator.stop(startTime + duration);

    // Store references for cleanup
    nodes.oscillators.push(oscillator);
    nodes.gainNodes.push(gainNode);
    nodes.filterNodes.push(filterNode);
  }, []);


  // Create the main ambient loop
  const createAmbientLoop = useCallback(() => {
    if (!audioContextRef.current || !isPlayingRef.current) return;

    // Clean up any existing loop first
    cleanupAudioNodes();

    const audioContext = audioContextRef.current;
    const currentTime = audioContext.currentTime;
    
    // Simple ambient chord progression
    const chordProgression = [
      [220, 277.18, 329.63], // Am
      [174.61, 220, 261.63], // F
      [261.63, 329.63, 392], // C
      [196, 246.94, 293.66] // G
    ];

    const chordDurations = [2, 2, 2, 2]; // 2 seconds per chord - faster pace
    let startTime = currentTime;

    // Create the chord progression loop
    const playChord = (chordIndex: number) => {
      if (!isPlayingRef.current || !audioContext) return;

      const chord = chordProgression[chordIndex];
      const duration = chordDurations[chordIndex];
      
      // Create oscillators for each note in the chord
      chord.forEach((frequency) => {
        createAmbientNote(frequency, startTime, duration);
      });

      startTime += duration;

      // Schedule next chord
      loopTimeoutRef.current = setTimeout(() => {
        if (isPlayingRef.current) {
          playChord((chordIndex + 1) % chordProgression.length);
        }
      }, duration * 1000);
    };

    // Start the progression
    playChord(0);
  }, [createAmbientNote, cleanupAudioNodes]);

  // Toggle background music
  const toggleBackgroundMusic = useCallback(async () => {
    if (!audioContextRef.current) {
      return;
    }

    if (isPlayingRef.current) {
      // Stop music
      isPlayingRef.current = false;
      setIsPlaying(false);
      cleanupAudioNodes();
    } else {
      // Start music
      try {
        // Resume audio context if suspended
        if (audioContextRef.current.state === 'suspended') {
          await audioContextRef.current.resume();
        }

        isPlayingRef.current = true;
        setIsPlaying(true);
        createAmbientLoop();
      } catch (e) {
        console.warn('Error starting background music:', e);
      }
    }
  }, [createAmbientLoop, cleanupAudioNodes]);

  // Initialize on mount
  useEffect(() => {
    initAudioContext();

    // Start music automatically when audio context is ready
    const startMusicWhenReady = async () => {
      if (audioContextRef.current && isPlayingRef.current) {
        try {
          if (audioContextRef.current.state === 'suspended') {
            await audioContextRef.current.resume();
          }
          createAmbientLoop();
        } catch (e) {
          console.warn('Error starting background music on init:', e);
        }
      }
    };

    // Small delay to ensure audio context is fully initialized
    const timer = setTimeout(startMusicWhenReady, 100);

    // Cleanup on unmount
    return () => {
      clearTimeout(timer);
      cleanupAudioNodes();
    };
  }, [initAudioContext, cleanupAudioNodes, createAmbientLoop]);

  // Start background music (to be called after loading completes)
  const startBackgroundMusic = useCallback(async () => {
    if (!isPlayingRef.current && audioContextRef.current) {
      try {
        // Resume audio context if suspended
        if (audioContextRef.current.state === 'suspended') {
          await audioContextRef.current.resume();
        }

        isPlayingRef.current = true;
        setIsPlaying(true);
        createAmbientLoop();
      } catch (e) {
        console.warn('Error starting background music:', e);
      }
    }
  }, [createAmbientLoop]);

  return {
    toggleBackgroundMusic,
    startBackgroundMusic,
    isPlaying
  };
};